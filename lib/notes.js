const fs = require("fs");
const path = require("path");
const util = require("util");
const uniqid = require('uniqid');


//link db.json file
const notesJson = require('../db/db.json');

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

//delete note function
function noteDelete(id) {
    for (let i = 0; i < notesJson.length; i++) {
        let note = notesJson[i];

        if (note.id == id) {
            notesJson.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify(notesJson, null, 2)
            );

            break;
        }
    }
};


module.exports = { createNewNote, noteDelete }