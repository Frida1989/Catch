import { Link, useParams } from "react-router-dom";

function NoteDetails({ notes, index, deleteNote, completeNote }) {
  const { noteId } = useParams();
  const note = notes.find((note) => note.id === Number(noteId));

  if (!note) {
    return (
      <div>
        <p>Not founded with this ID</p>

        <Link to="/" className="back-link">
          ← Back
        </Link>
      </div>
    );
  }
  return (
    <li className="note-item">
      <input
        type="checkbox"
        checked={note.completed}
        onChange={() => completeNote(index)}
      />

      <div className="note-content">
        <h2 className={note.completed ? "completed" : "not-completed"}>
          {note.title}
        </h2>

        {!note.completed && <p>{note.description}</p>}
      </div>

      <div className="detail-copy">
        <p className="eyebrow">What we catch now</p>

        <h2>{note.title}</h2>

        <p className="meta">
          {note.wishMonthDate} · {note.category}
        </p>

        <p className="description">{note.description}</p>
        <button onClick={() => deleteNote(index)}>X</button>
        <Link to="/" className="back-link">
          ← Back
        </Link>
      </div>
    </li>
  );
}
export default NoteDetails;
