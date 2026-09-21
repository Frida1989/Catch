import { Link } from "react-router-dom";

function NoteList({ notes }) {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li key={note.id}>
          <Link to={`/notes/${note.id}`} className="note-card">
            {note.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
