import { Link } from "react-router-dom";

function NoteList({ notes }) {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li className="note-list-item" key={note.id}>
          <Link to={`/notes/${note.id}`} className="note-card">
            <div className="note-card-top">
              <span className="note-card-category">{note.category}</span>

              <span className="note-card-progress">{note.progress}%</span>
            </div>

            <div className="note-card-content">
              <h3 className="note-card-title">{note.title}</h3>

              <p className="note-card-description">{note.description}</p>
            </div>

            <div className="note-card-progress-section">
              <progress
                className="note-card-progress-bar"
                value={note.progress}
                max="100"
              >
                {note.progress}%
              </progress>
            </div>

            <div className="note-card-footer">
              <span className="note-card-target">
                {note.targetPeriod} focus
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
