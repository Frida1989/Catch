import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Notes from "./Data/Notes.js";

import Layout from "./Layouts/Layout.jsx";
import Home from "./Pages/Home.jsx";
import About from "./pages/About.jsx";
import NoteDetails from "./pages/NoteDetails.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {
      return JSON.parse(savedNotes);
    }

    return Notes;
  });

  // Add a new note
  function addNote(title, description, category, targetPeriod) {
    const newNote = {
      id: Date.now(),
      title,
      description,
      category,
      progress: 0,
      createdAt: new Date().toISOString(),
      targetPeriod,
    };

    setNotes([...notes, newNote]);
  }

  // Delete a note by id
  function deleteNote(noteId) {
    const newNotes = notes.filter((note) => note.id !== noteId);

    setNotes(newNotes);
  }

  // Update a note by id
  function editNote(noteId, updatedData) {
    const updatedNotes = notes.map((note) => {
      if (note.id === noteId) {
        return {
          ...note,
          ...updatedData,
        };
      }

      return note;
    });

    setNotes(updatedNotes);
  }
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home notes={notes} addNote={addNote} />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/notes/:noteId"
          element={
            <NoteDetails
              notes={notes}
              deleteNote={deleteNote}
              editNote={editNote}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
