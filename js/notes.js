
'use strict'

function createNewNote(title,text) {

    const note = {};

    note.name = title;
    note.text = text;
    note.greeting = function() {

      alert("El nombre de la nota es: " + note.name);
      alert("El texto de la nota es: " + note.text);

    };

    return note;
  }
  