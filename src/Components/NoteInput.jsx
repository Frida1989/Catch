import { useState } from "react";

const NoteInput = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [targetPeriod, setTargetPeriod] = useState("");
  function handleCancel() {
    setTitle("");
    setDescription("");
    setCategory("");
    setTargetPeriod("");
  }

  return (
    <div className="note-form">
      <h2>New Todo:</h2>
      <input
        type="text"
        value={title}
        placeholder="What's on your mind"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Add some details"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <select
        value={targetPeriod}
        onChange={(e) => setTargetPeriod(e.target.value)}
      >
        <option value="">Choose target</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
      </select>
      <button onClick={() => setCategory("Idea")}>Idea</button>

      <button onClick={() => setCategory("Work")}>Work</button>

      <button onClick={() => setCategory("Private")}>Private</button>

      <button
        onClick={() => {
          addNote(title, description, category, targetPeriod);
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          handleCancel;
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default NoteInput;
