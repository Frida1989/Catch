import { Link } from "react-router-dom";
import AnimatedIcon from "./AnimatedIcon";

function NoteList({ notes }) {
  const iconVariants = ["orbit", "relay", "wave", "spark", "loop"];

  return (
    <ul className="note-list">
      {notes.map((note) => {
        const iconVariant = iconVariants[note.id % iconVariants.length];

        return (
          <li className="note-list-item" key={note.id}>
            <Link
              to={`/notes/${note.id}`}
              className="note-card"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();

                card.style.setProperty(
                  "--mouse-x",
                  `${e.clientX - rect.left}px`,
                );

                card.style.setProperty(
                  "--mouse-y",
                  `${e.clientY - rect.top}px`,
                );
              }}
            >
              <div className="note-card-top">
                <div className="note-card-info">
                  <span className="note-card-category">{note.category}</span>

                  <span className="note-card-progress">{note.progress}%</span>
                </div>

                <AnimatedIcon variant={iconVariant} />
              </div>

              <div className="note-card-content">
                <h3 className="note-card-title">{note.title}</h3>

                <p className="note-card-description">{note.description}</p>
              </div>

              <div className="note-card-footer">
                <span className="note-card-target">
                  {note.targetPeriod} focus
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NoteList;
