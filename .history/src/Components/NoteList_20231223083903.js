import React from 'react';
import Note from './Note';
import './NoteList.css'

function NoteList({ notes, onDelete, onEdit}) {
  console.log('NoteList notes:', notes);
  return (
    <div className="note-list">
      {notes.map(note => (
        <Note key={note.id} note={note} onDelete={() => onDelete(note.id)} onEdit={(updatedNote) => onEdit(note.id, updatedNote)} />
      ))}
    </div>
  );
}

export default NoteList;
