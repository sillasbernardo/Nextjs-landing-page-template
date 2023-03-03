/* Uses Google Drive API to fetch data */

const { google } = require('googleapis');

// Establish a conection to Google Drive API and authorize.
const jwtClientHandler = () => {

	const privatekey = JSON.parse(process.env.PRIVATE_KEY);

	console.log(privatekey)

	const jwtClient = new google.auth.JWT(
		privatekey.client_email,
		null,
		privatekey.private_key,
		['https://www.googleapis.com/auth/drive']
	);

	jwtClient.authorize((err, tokens) => {
		if (err)  return console.error(err);
	})

	return google.drive({ version: 'v3', auth: jwtClient });
}

// Passing a "folder" to this function returns an array of files from it.
const loadGoogleDriveData = (folder) => {
  return new Promise((resolve, reject) => {

		// Drive returns an authorized token
		const drive = jwtClientHandler();

		// Find folder by name
		const folderName = folder;
		const folderQuery = `mimeType='application/vnd.google-apps.folder' and trashed = false and name='${folderName}'`;

		// Searches for the passed folder in Google Drive and find its id
		drive.files.list({
			q: folderQuery,
			fields: 'files(id, name, parents)'
		}, (error, result) => {
			if (error) reject(error);

			if (!result.data.files.length) reject(console.log(`No folder found with the name ${folderName}`))
			
			const folderId = result.data.files[0].id;
			const fileQuery = `'${folderId}' in parents and trashed = false`;
			
			// Searches for all files in the passed folder, now with the folder's id
			drive.files.list({
				q: fileQuery,
				fields: 'files(id, name)'
			}, (err, res) => {
				if (err) reject(err);

				let filesArr = [];

				res.data.files.forEach(file => {
					const filesResult = {
						name: file.name,
						link: `https://drive.google.com/uc?export=view&id=${file.id}`,
						category: folder
					}
					
					filesArr.push(filesResult);
					resolve(filesArr);
				})
			})
		})

  });
};

// Passing a folder to this function returns an array of subfolders
const loadSubfolders = (folder) => {
	return new Promise((resolve, reject) => {

		// Drive returns an authorized token
		const drive = jwtClientHandler();

		const folderName = folder;
		const folderQuery = `mimeType='application/vnd.google-apps.folder' and trashed = false and name='${folderName}'`;

		const foldersArray = [];

		// Searches for the folder in Google Drive and find its id
		drive.files.list({
			q: folderQuery,
			fields: 'files(id)'
		}, (err, res) => {
			if (err) reject(err);

			res.data.files.forEach(folderFile => {
				const folderId = folderFile.id;

				// Searches for subfolders in folder by its id and returns an array
				drive.files.list({
					q: `'${folderId}' in parents`,
					fields: 'files(id, name)'
				}, (err, res) => {
					if (err) reject(err);

					res.data.files.forEach(file => {
						const fileResult = {
							name: file.name,
							id: file.id,
						}

						foldersArray.push(fileResult);

					})
					resolve(foldersArray)
				})
			})
		})

	})
}

exports.loadGoogleDriveData = loadGoogleDriveData;
exports.loadSubfolders = loadSubfolders;