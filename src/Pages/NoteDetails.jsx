import { Link, useNavigate, useParams } from "react-router-dom";

function NoteDetails({ notes, deleteNote }) {
  const { noteId } = useParams();
  const navigate = useNavigate();

  const note = notes.find((note) => note.id === Number(noteId));

  if (!note) {
    return (
      <div className="note-not-found">
        <h2>Note not found</h2>

        <Link to="/" className="back-link">
          ← Back to notes
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(note.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function handleDelete() {
    deleteNote(note.id);
    navigate("/");
  }

  return (
    <article className="note-details">
      <Link to="/" className="back-link">
        ← Back to notes
      </Link>

      <div className="note-meta">
        <span className="note-category">{note.category}</span>
        <span className="note-target">{note.targetPeriod} focus</span>
      </div>

      <h1>{note.title}</h1>

      <p className="note-description">{note.description}</p>

      <section className="progress-section">
        <div className="progress-header">
          <h2>Progress</h2>
          <span>{note.progress}%</span>
        </div>

        <progress value={note.progress} max="100">
          {note.progress}%
        </progress>
      </section>

      <section className="note-timeline">
        <h2>Timeline</h2>

        <div>
          <span>Created</span>
          <p>{formattedDate}</p>
        </div>

        <div>
          <span>Target</span>
          <p>{note.targetPeriod}</p>
        </div>
      </section>

      <div className="note-actions">
        <button type="button">Edit</button>

        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default NoteDetails;
