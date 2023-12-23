import React, { useState } from 'react';

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
    <input
      type="color"
      value={color}
      onChange={(e) => setColor(e.target.value)} // Update the note color
    />
    <button onClick={handleSave}>Save</button>
  </div>
  );
}

export default NoteForm;
