import React, { useState, useEffect } from 'react';
import NoteList from './Components/NoteList';
import NoteForm from './Components/NoteForm';
import './App.css';

function App() {
  // Load notes from local storage or set to empty array
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );

  // This effect saves notes to local storage whenever notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const createNote = (note) => {
    setNotes([note, ...notes]); // Prepend the new note to the beginning of the list
  };

  const editNote = (id, updatedNote) => {
    setNotes(notes.map(note => note.id === id ? updatedNote : note));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id)); // Remove note by id
  };

  return (
    <div className="app">
      <NoteForm onCreate={createNote} />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
    </div>
  );
}

export default App;
