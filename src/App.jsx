import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Notes from "./Data/Notes.js";

import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NoteDetails from "./pages/NoteDetails.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [notes, setNotes] = useState(Notes);

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

  function deleteNote(noteId) {
    setNotes(notes.filter((note, i) => i !== noteId));
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home notes={notes} addNote={addNote} />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/notes/:noteId"
          element={<NoteDetails notes={notes} deleteNote={deleteNote} />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
