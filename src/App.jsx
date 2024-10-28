import React, { useState } from 'react'
import Note from './components/Note'

const App = ({ notes }) => {
  const [note, getNote] = useState(notes);
  const [newNote, getNewNote] = useState('');
  const [showAll, getShowAll] = useState(true);

  const AddNote = (e) => {
    e.preventDefault();

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(note.length + 1)
    };

    getNote(note.concat(noteObject));
    // console.log(noteObject);
    getNewNote("");
  };


  //handeling change of note
  const HandleChange = (e) => {
    getNewNote(e.target.value);
  };


  const notesToShow = showAll ? note : note.filter(note => note.important === true);


  return (
    <div>
      <h1>Notes</h1>

      <div>
        <button onClick={() => getShowAll(!showAll)}>
          show {showAll ? 'all' : 'important'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>

      {/* //making a from */}
      <form onSubmit={AddNote}>
        <input onChange={HandleChange} value={newNote} placeholder='Give me a note :{' />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default App