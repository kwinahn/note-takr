const path = require('path');
const uniqid = require('uniqid')
const fs = require('fs');

//link db.json file
const notesJson = require('../db/db.json')

//delete note function
function noteDelete(id) {
    for (let i = 0; i < notesJson.length; i++) {
        let currentNote = notesJson[i];

        if (currentNote.id == id) {
            notesJson.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify(notesJson, null, 2)
            );

            break;
        }
    }
}

function createNewNote(body) {
    const {title, text} = body
    let addNote = {
        title,
        text,
        id: uniqid()
    }

    notesJson.push(addNote);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesJson)
    )

    return addNote;

};

module.exports = { createNewNote, noteDelete }