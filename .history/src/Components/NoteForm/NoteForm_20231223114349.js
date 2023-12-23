
import React, { useState } from 'react';
import styles from  './NoteForm.module.css'

function NoteForm({ onCreate }) {
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    color: '#FFFFFF'
  });

  const handleSave = () => {
    if (newNote.title && newNote.content) {
      onCreate({ ...newNote, id: Date.now(), editTimestamp: Date.now() });
      setNewNote({ title: '', content: '', color: '#FFFFFF' }); 
  };
  
  const handleChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.noteForm}>
      <input
        name="title"
        type="text"
        value={newNote.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="content"
        value={newNote.content}
        onChange={handleChange}
        placeholder="Take a note..."
      />
      <input
        name="color"
        type="color"
        value={newNote.color}
        onChange={handleChange} 
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
}

export default NoteForm;
