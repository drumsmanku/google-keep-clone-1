import React from 'react';

function Note({ note, onDelete }) {
  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={onDelete}>Delete</button>
      {/* Add edit feature and color picker here */}
    </div>
  );
}

export default Note;
