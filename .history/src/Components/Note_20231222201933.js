import React, { useState, useEffect } from 'react';

function Note({ note, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [editedColor, setEditedColor] = useState('');

  useEffect(() => {
    if (isEditing) {
      setEditedTitle(note.title);
      setEditedContent(note.content);
      setEditedColor(note.color);
    }
  }, [note, isEditing]);

  const handleEdit = () => {
    if (editedTitle.trim() && editedContent.trim()) {
      console.log('Updated Title:', editedTitle);
      console.log('Updated Content:', editedContent);
      console.log('Updated Color:', editedColor);
      const updatedNote = {
        ...note,
        title: editedTitle.trim(),
        content: editedContent.trim(),
        color: editedColor,
      };
      onEdit(note.id, updatedNote);
      setIsEditing(false); // Exit edit mode
    }
  };
  

  if (isEditing) {
    return (
      <div className="note" style={{ backgroundColor: note.color }}>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <input
          type="color"
          value={editedColor}
          onChange={(e) => setEditedColor(e.target.value)}
        />
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
        <button onClick={handleEdit}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Note;
here is the note component