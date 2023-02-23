const express = require('express');
const path = require('path');

const { readJsonFile } = require("./readJsonFile");

const router = express.Router();

/* Authorization */
router.get("*", (req, res, next) => {
	const { authorization } = req.headers;
	if (authorization === process.env.REACT_APP_API_KEY){
		next()
	} else{
		res.status(401).json({ message: "Unauthorized" })
	}
})

// calltoaction endpoint
router.get("/api/calltoaction", async (req, res, next) => {
	try {
		const calltoactionData = await readJsonFile("calltoaction");
		res.json({ calltoactionData });
	} catch (error) {
		console.error(error);
		res.status(500).send('Internal server error.')
	}
})

// awards endpoint
router.get("/api/awards", async (req, res, next) => {
	try {
		const awardsData = await readJsonFile("awards");
		res.json({ awardsData });
	} catch (error) {
		console.error(error);
		res.status(500).send('Internal server error.')
	}
})

// Handles any requests that don't match the ones above
router.get("*", (req, res) => {
	res.sendFile(path.join(__dirname+'/../dist/index.html'))
})

module.exports = router;