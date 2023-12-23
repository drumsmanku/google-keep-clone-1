import React from 'react';
import Note from './Note';

function NoteList({ notes, onDelete }) {
  return (
    <div className="note-list">
      {notes.map(note => (
        <Note key={note.id} note={note} onDelete={() => onDelete(note.id)} />
      ))}
    </div>
  );
}

export default NoteList;
