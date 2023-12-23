import React, { useState, useEffect } from 'react';
import NoteList from './Components/NoteList';
import NoteForm from './Components/NoteForm';

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
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotes);
  };
  
  
  
  // Other functions like editNote would go here

  return (
    <div>
      <NoteForm onSave={createNote} />
      <NoteList 
        notes={notes} 
        onDelete={deleteNote} 
        onEdit={editNote}  // Pass the editNote function to NoteList
      />

    </div>
  );
}

export default App;
