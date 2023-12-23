import React, { useState, useEffect } from 'react';

function Note({ note, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);
  const [editedColor, setEditedColor] = useState(note.color);

  useEffect(() => {
    setEditedTitle(note.title);
    setEditedContent(note.content);
    setEditedColor(note.color);
  }, [note]);

  const handleEdit = () => {
    if (editedTitle.trim() && editedContent.trim()) {
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
        <input type="color" value={editedColor} onChange={(e) => setEditedColor(e.target.value)} />
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