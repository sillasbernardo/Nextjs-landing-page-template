/* --- @imports --- */
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');
const apiErrorHandler = require('./Gallery/Handlers/ApiErrorHandler');

/* --- @code --- */
const app = express();

// Add to 'origin' the url of the frontend that will consume this API, also changing the port
app.use(cors({
	methods: 'GET',
	origin: ["http://localhost:8080"]
}));

// Load routes for incoming requests
app.use("/", routes);

// Handle errors
app.use(apiErrorHandler);

// Run server
const port = process.env.PORT || 5000;
app.listen(port, console.log(`App is listening on port ${port}`));