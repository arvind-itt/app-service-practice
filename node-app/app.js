// Import the Express framework
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Set the port to listen for incoming requests
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
