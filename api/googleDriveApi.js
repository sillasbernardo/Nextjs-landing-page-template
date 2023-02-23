const { google } = require('googleapis');
const privatekey = require('../privatekey.json');

const jwtClient = new google.auth.JWT(
	privatekey.client_email,
	null,
	privatekey.private_key,
	['https://www.googleapis.com/auth/drive']
);

jwtClient.authorize((err, tokens) => {
	if (err){
		return console.error(err);
	}

	console.log('Sucessfully authenticated')
})

const loadGoogleDriveData = async (folder) => {
	const drive = google.drive({ version: 'v3', auth: jwtClient });

	// Find folder by name
	const folderName = folder;
	const folderQuery = `mimeType='application/vnd.google-apps.folder' and trashed = false and name='${folderName}'`

	const folderResponse = await drive.files.list({
		q: folderQuery,
		fields: "files(id, name, parents)"
	});

	if (!folderResponse.data.files.length) {
		console.log(`No folder found with the name ${folderName}`);
	} else {
		const folderId = folderResponse.data.files[0].id;

		// Get all files in the folder
		const fileQuery = `'${folderId}' in parents and trashed = false`;
		const fileResponse = await drive.files.list({
			q: fileQuery,
			fields: "files(webViewLink)"
		})

		fileResponse.data.files.forEach(file => {
			console.log(`${file.webViewLink}`)
		})
	}
}

loadGoogleDriveData('logo');