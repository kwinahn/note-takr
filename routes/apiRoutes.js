const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const { createNewNote, noteDelete } = require('../lib/notes');

const notes = require('../db/db.json');
console.log(notes);

router.get('/notes', (req, res) => {
    let results = notes
    console.log(results)
    res.json(results)
    
});

router.post('/notes', (req, res) => {
    let Note = createNewNote(req.body, notes)
    console.log(Note)
    res.json(Note) 
});

router.delete('/notes/:id', (req, res) => {
    const result = noteDelete(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(400);
        
    }
});

module.exports = router;
