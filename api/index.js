const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv').config({ path: '../.env' });

if (dotenv.error) throw dotenv.error;

const routes = require('./routes');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

app.use(cors({
	origin:	["http://localhost:8080", "http://10.10.0.250:8080"],
	methods: 'GET'
}));

/* Load routes for incoming requests */
app.use("/", routes)

const port = process.env.PORT || 5000;
app.listen(port, console.log(`App is listening on port ${port}`));