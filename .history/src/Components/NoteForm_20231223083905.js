import React, { useState } from 'react';
import './NoteForm.css'

function NoteForm({ onSave }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('#FFFFFF');

  const handleSave = () => {
    if (title && content) {
      onSave({ id: Date.now(), title, content, color }); // Now save with color property
      setTitle('');
      setContent('');
      setColor('#FFFFFF'); // Reset color to default after saving
    }
  };

  return (
    <div className="note-form">
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
    />
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Take a note..."
    />
    <div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)} 
      />
      <button onClick={handleSave}>Save</button>
      </div>
  </div>
  );
}

export default NoteForm;
