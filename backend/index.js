// Basic RESTAPI
// GET - fetches all resources
// POST - creates a new resource based on the request data
// DELETE - removes the identified resource
// PUT - replaces the entair identifyed resource with the request data
// PATCH - replaces a part of the identified resource with the request data


// creating the first web server
const express = require('express');
const App = express();
const port = 3001;

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        important: true
    }
];

App.get('/', (req, res) => {
    res.send('<h1>Hellow world</h1>')
});

App.get("/api/notes", (req, res) => {
    res.json(notes);
});

App.listen(port, () => {
    console.log(`the server is running on the port ${port}`);
})