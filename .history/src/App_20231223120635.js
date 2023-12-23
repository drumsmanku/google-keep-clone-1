import React, { useState, useEffect } from 'react';
import NoteList from './Components/NoteList/NoteList';
import NoteForm from './Components/NoteForm/NoteForm';
import './App.css';

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const createNote = (note) => {
    setNotes([note, ...notes]); 
  };

  const editNote = (id, updatedNote) => {
    setNotes(notes.map(note => note.id === id ? updatedNote : note));
  };

  const deleteNote = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id)); 
    }
  };
  

  return (
    <div className="app">
      <h1>Take Notes...</h1>
      <NoteForm onCreate={createNote} />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
    </div>
  );
}

export default App;
