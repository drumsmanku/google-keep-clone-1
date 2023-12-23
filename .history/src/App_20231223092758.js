import React, { useState, useEffect } from 'react';
import NoteList from './Components/NoteList';
import NoteForm from './Components/NoteForm';
import './App.css'

function App() {
  // Load notes from local storage or set to empty array
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  useEffect(() => {
    // Save notes to local storage whenever notes state changes
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const createNote = (note) => {
    setNotes([note, ...notes]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const editNote = (id, updatedNote) => {
    console.log({"updated":updatedNote})
    setNotes((prevNotes) => {
      return prevNotes.map(note =>
        note.id === id ? { ...note, ...updatedNote } : note
      );
    });
  };
  

  return (
    <div>
      <NoteForm onSave={createNote} />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote}  />

    </div>
  );
}

export default App;