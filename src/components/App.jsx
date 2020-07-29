import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function loadNotes() {
    const items = {...localStorage};
    const notes = Object.entries(items);
    setNotes(notes);
  }

  function addNote(newNote) {
    localStorage.setItem(newNote.title, newNote.content);
    const items = {...localStorage};
    const notes = Object.entries(items);

    setNotes(notes);
  }

  function deleteNote(id) {
    const item = notes[id];
    localStorage.removeItem(item[0]);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  useEffect(() => {
      loadNotes();
    }, []);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem[0]}
            content={noteItem[1]}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
