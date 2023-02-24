const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require("http");

const { readJsonFile } = require("./readJsonFile");
const { loadGoogleDriveData } = require('./googleDriveApi');
const mammoth = require('mammoth');
const axios = require('axios');

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

// logo endpoint
router.get("/api/logo", async (req, res, next) => {
	try {
		const logoData = await loadGoogleDriveData("logo");
		res.json({ logoData })
	} catch (error) {
		res.status(500).send(`Internal server error. Error: ${error}`)
	}
})

// calltoaction endpoint
router.get("/api/calltoaction", async (req, res, next) => {
	try {
		const calltoactionData = await readJsonFile("calltoaction");
		res.json({ calltoactionData });
	} catch (error) {
		res.status(500).send(`Internal server error. Error: ${error}`)
	}
})

// presentation endpoint
router.get("/api/presentation", async (req, res, next) => {
	try {
		const presentationData = await loadGoogleDriveData("presentation");
		res.json({ presentationData });
	} catch (error) {
		res.status(500).send(`Internal server error. Error: ${error}`)
	}
})

// reviews endpoint
router.get("/api/reviews", async (req, res, next) => {
	try {
		const reviewsData = await loadGoogleDriveData("reviews")
		res.json({ reviewsData })
	} catch (error) {
		res.status(500).send(`Internal server error. Error: ${error}`)
	}
})

// about endpoint
router.get("/api/about", async (req, res, next) => {
	let aboutData;

	
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