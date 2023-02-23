const express = require('express');
const path = require('path');
const cors = require('cors');

const routes = require('./routes');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

app.use(cors());

/* Load routes for incoming requests */
app.use("/", routes)

const port = process.env.PORT || 5000;
app.listen(port, console.log(`App is listening on port ${port}`));