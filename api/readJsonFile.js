const fs = require('fs');

const readJsonFile = (property) => {
	let objData;

	return new Promise((resolve, reject) => {
		fs.readFile('data/data.json', (err, data) => {
			if (err) {
				reject(err);
			}
			objData = JSON.parse(data);
			objData = objData[property];
			resolve(objData);
		})
	})

}

exports.readJsonFile = readJsonFile;