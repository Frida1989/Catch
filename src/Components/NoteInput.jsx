import { useState } from "react";

const NoteInput = ({ addNote, index, deleteNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="note-form">
      <h2>New note</h2>
      <input
        type="text"
        placeholder="What's on your mind"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Add some details"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <h2>Category</h2>
      <button
        onClick={() => {
          addNote(title, description);
        }}
      >
        Save
      </button>
      <button onClick={() => deleteNote(index)}>Cancel</button>
    </div>
  );
};

export default NoteInput;
