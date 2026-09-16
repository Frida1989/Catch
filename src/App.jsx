import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";

import NotFound from "./pages/NotFound.jsx";
import NoteList from "./Components/NoteList.jsx";
import NoteInput from "./Components/NoteInput.jsx";
import NoteDetails from "./Pages/NoteDetails.jsx";
import About from "./Pages/About.jsx";
import { useState } from "react";

import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="notes/:noteId" element={<NoteDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

function App() {
  const [notes, setNotes] = useState([]);
  function addNotes(title, description) {
    const newNote = {
      title,
      description,
      completed: false,
    };
    setNotes([...notes, newNote]);
  }

  function deleteNote(index) {
    setNotes(notes.filter((note, i) => i !== index));
  }

  function completeNote(index) {
    const newNote = notes.map((note, i) => {
      if (i === index) {
        return {
          ...note,
          completed: !note.completed,
        };
      }
      return note;
    });
    setNotes(newNote);
  }

  return (
    <div className="note-List">
      <NoteInput addNotes={addNotes} />
      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        completeNote={completeNote}
      />
    </div>
  );
}

export default App;
