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

let notes = [
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

// Getting all the notes
App.get('/api/notes', (req, res) => {
    res.json(notes);
});

// showing a specipfic resources
App.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find(note => note.id === id) //for finding a specific item

    note ? res.json(note) : res.status(404).json({ error: 'Note not found' });
});

// deleting a specigic resource
App.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    notes = notes.filter(note => note.id !== id); //for filtering out an item

    res.status(200).end();
});

App.listen(port, () => {
    console.log(`the server is running on the port ${port}`);
})