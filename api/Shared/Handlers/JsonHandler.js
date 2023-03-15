/* --- @imports --- */
const fs = require('fs');
const path = require('path');

/*
	--- @code ---

	@desc: Reads the "data.json" file from "data" folder and return a promise 
*/
const readJsonFile = (property) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path.join(__dirname, '../../Database/data.json'), (err, data) => {
			let objData;

			if (err) {
				reject(err);
			}
			
			objData = JSON.parse(data);
			objData = objData[property];
			resolve(objData);
		})
	})
}

/* --- @exports --- */
module.exports = readJsonFile;