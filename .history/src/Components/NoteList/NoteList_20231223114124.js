// NoteList does not need to change much, but it will pass the delete and edit functions down to Notes.
import React from 'react';
import Note from '../Note/Note';
import styles from  './NoteList.module.css';

function NoteList({ notes, onDelete, onEdit }) {
  return (
    <div className={styles.noteList}>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default NoteList;
