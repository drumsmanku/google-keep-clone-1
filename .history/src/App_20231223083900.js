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
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, ...updatedNote } : note
    );
    console.log('updatedNotes', updatedNotes);
    setNotes(updatedNotes, () => console.log('Notes after setState:', notes));
  };
  
  
  
  // Other functions like editNote would go here

  return (
    <div>
      <NoteForm onSave={createNote} />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote}  />

    </div>
  );
}

export default App;