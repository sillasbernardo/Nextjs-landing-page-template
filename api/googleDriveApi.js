const { google } = require('googleapis');
const privatekey = require('../privatekey.json');

const loadGoogleDriveData = (folder) => {
  return new Promise((resolve, reject) => {
    const jwtClient = new google.auth.JWT(
      privatekey.client_email,
      null,
      privatekey.private_key,
			['https://www.googleapis.com/auth/drive']
    );

		jwtClient.authorize((err, tokens) => {
			if (err)  return console.error(err);
		})

		const drive = google.drive({ version: 'v3', auth: jwtClient });

		// Find folder by name
		const folderName = folder;
		const folderQuery = `mimeType='application/vnd.google-apps.folder' and trashed = false and name='${folderName}'`;

		drive.files.list({
			q: folderQuery,
			fields: 'files(id, name, parents)'
		}, (error, result) => {
			if (error) reject(error);

			if (!result.data.files.length) reject(console.log(`No folder found with the name ${folderName}`))
			
			const folderId = result.data.files[0].id;

			// Get all files in the folder
			const fileQuery = `'${folderId}' in parents and trashed = false`;
			
			drive.files.list({
				q: fileQuery,
				fields: 'files(id, name)'
			}, (err, res) => {
				if (err) reject(err);

				let filesArr = [];

				res.data.files.forEach(file => {
					const filesResult = {
						name: file.name,
						link: `https://drive.google.com/uc?export=view&id=${file.id}`
					}
					
					filesArr.push(filesResult);

					resolve(filesArr);
				})
			})
		})

  });
};

exports.loadGoogleDriveData = loadGoogleDriveData;