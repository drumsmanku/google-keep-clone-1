import React, { useState } from 'react';
import styles from  './Note.module.css'

function Note({ note, onDelete, onEdit }) {
 const [isEditing, setIsEditing] = useState(false);
 const [editedNote, setEditedNote] = useState({ ...note });

 const handleEdit = () => {
   const { title, content, color } = editedNote;
   if (title.trim() && content.trim()) {
     onEdit(note.id, { ...editedNote, title: title.trim(), content: content.trim(), color });
     setIsEditing(false); 
   }
 };

 const handleChange = (e) => {
   setEditedNote({ ...editedNote, [e.target.name]: e.target.value });
 };

 if (isEditing) {
   return (
     <div className={styles.note} style={{ backgroundColor: editedNote.color }}>
       <input
         name="title"
         type="text"
         value={editedNote.title}
         onChange={handleChange}
       />
       <input
         name="color"
         type="color"
         value={editedNote.color}
         onChange={handleChange}
       />
       <textarea
         name="content"
         value={editedNote.content}
         onChange={handleChange}
       />
       <button onClick={handleEdit}>Save</button>
       <button onClick={() => setIsEditing(false)}>Cancel</button>
     </div>
   );
 }

 return (
   <div className={styles.note} style={{ backgroundColor: note.color }}>
     <div className={styles.noteContentWrapper}>
       <div className={styles.noteContent}>
         <h2>{note.title}</h2>
         <p>{note.content}</p>
       </div>
     </div>
     <div style={{ display: 'flex', width: '100%' }}>
       <button onClick={() => setIsEditing(true)}>Edit</button>
       <button onClick={() => onDelete(note.id)}>Delete</button>
     </div>
   </div>
 );
}

export default Note;
