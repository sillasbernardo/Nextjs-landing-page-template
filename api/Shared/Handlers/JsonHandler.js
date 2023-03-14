/* --- @imports --- */
const fs = require('fs');
const jsonFile = require('../../Database/data.json')

/*
	--- @code ---

	@desc: Reads the "data.json" file from "data" folder and return a promise 
*/
const readJsonFile = (property) => {
	return new Promise((resolve, reject) => {
		fs.readFile(jsonFile, (err, data) => {
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