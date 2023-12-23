import React, { useState } from 'react';

function NoteForm({ onSave }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (title && content) {
      onSave({ id: Date.now(), title, content }); // Simplified; consider adding color property
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="note-form">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default NoteForm;
