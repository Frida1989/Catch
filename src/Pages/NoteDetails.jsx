import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import ProgressRing from "../Components/ProgressRing";

function NoteDetails({ notes, deleteNote, editNote }) {
  const { noteId } = useParams();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editTargetPeriod, setEditTargetPeriod] = useState("");
  const [editProgress, setEditProgress] = useState(0);
  const [editError, setEditError] = useState("");

  // Find the note from the URL id
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

  // Make the created date easier to read
  const formattedDate = new Date(note.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Delete this note
  function handleDelete() {
    deleteNote(note.id);
    navigate("/");
  }

  // Open edit mode with the current note values
  function startEditing() {
    setEditTitle(note.title);
    setEditDescription(note.description);
    setEditCategory(note.category);
    setEditTargetPeriod(note.targetPeriod);
    setEditProgress(note.progress);

    setIsEditing(true);
    setEditError("");
  }

  // Save the edited note
  function handleSaveEdit() {
    // Title is required
    if (!editTitle.trim()) {
      setEditError("Please enter a title.");
      return;
    }

    editNote(note.id, {
      title: editTitle,
      description: editDescription,
      category: editCategory,
      targetPeriod: editTargetPeriod,
      progress: editProgress,
    });

    setEditError("");
    setIsEditing(false);
  }
  // Close edit mode without saving
  function handleCancelEdit() {
    setEditError("");
    setIsEditing(false);
  }

  return (
    <div className="note-details-page">
      <article className="note-details">
        <div className="note-details-top">
          <Link to="/" className="back-link">
            ← Back to notes
          </Link>
        </div>

        {isEditing ? (
          <div className="edit-note-form">
            <div className="edit-header">
              <p className="section-eyebrow">Edit your catch</p>
              <h1 className="edit-title">Keep it moving.</h1>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="edit-title">
                Title <span className="required-star">*</span>
              </label>

              <input
                id="edit-title"
                className={editError ? "form-input input-error" : "form-input"}
                type="text"
                value={editTitle}
                onChange={(e) => {
                  setEditTitle(e.target.value);
                  setEditError("");
                }}
                aria-required="true"
                aria-invalid={editError ? "true" : "false"}
              />

              {editError && <p className="title-error">{editError}</p>}
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>

              <textarea
                className="form-textarea"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <h3 className="form-title">Category</h3>

              <div className="category-options">
                <button
                  className={
                    editCategory === "Study"
                      ? "category-button active"
                      : "category-button"
                  }
                  type="button"
                  onClick={() => setEditCategory("Study")}
                >
                  Study
                </button>

                <button
                  className={
                    editCategory === "Work"
                      ? "category-button active"
                      : "category-button"
                  }
                  type="button"
                  onClick={() => setEditCategory("Work")}
                >
                  Work
                </button>

                <button
                  className={
                    editCategory === "YouTube"
                      ? "category-button active"
                      : "category-button"
                  }
                  type="button"
                  onClick={() => setEditCategory("YouTube")}
                >
                  YouTube
                </button>

                <button
                  className={
                    editCategory === "Spotify"
                      ? "category-button active"
                      : "category-button"
                  }
                  type="button"
                  onClick={() => setEditCategory("Spotify")}
                >
                  Spotify
                </button>

                <button
                  className={
                    editCategory === "Private"
                      ? "category-button active"
                      : "category-button"
                  }
                  type="button"
                  onClick={() => setEditCategory("Private")}
                >
                  Private
                </button>

                <button
                  className={
                    editCategory === "Growth"
                      ? "category-button active"
                      : "category-button"
                  }
                  type="button"
                  onClick={() => setEditCategory("Growth")}
                >
                  Growth
                </button>

                <button
                  className={
                    editCategory === "Language"
                      ? "category-button active"
                      : "category-button"
                  }
                  type="button"
                  onClick={() => setEditCategory("Language")}
                >
                  Language
                </button>

                <button
                  className={
                    editCategory === "Free Notes"
                      ? "category-button active"
                      : "category-button"
                  }
                  type="button"
                  onClick={() => setEditCategory("Free Notes")}
                >
                  Free Notes
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Target period</label>

              <select
                className="form-select"
                value={editTargetPeriod}
                onChange={(e) => setEditTargetPeriod(e.target.value)}
              >
                <option value="">Choose target</option>
                <option value="This week">This week</option>
                <option value="This month">This month</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="This autumn">This autumn</option>
                <option value="Someday">Someday</option>
              </select>
            </div>

            <div className="form-group progress-edit">
              <div className="progress-edit-header">
                <label className="form-label">Progress</label>
                <span className="progress-value">{editProgress}%</span>
              </div>

              <input
                className="progress-slider"
                type="range"
                min="0"
                max="100"
                value={editProgress}
                onChange={(e) => setEditProgress(Number(e.target.value))}
              />
            </div>

            <div className="edit-actions">
              <button
                className="button cancel-button"
                type="button"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>

              <button
                className="button save-button"
                type="button"
                onClick={handleSaveEdit}
              >
                Save changes
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="note-meta">
              <span className="note-category">{note.category}</span>

              <span className="note-target">{note.targetPeriod} focus</span>
            </div>

            <div className="note-content">
              <h1 className="note-title">{note.title}</h1>

              <p className="note-description">{note.description}</p>
            </div>

            <section className="progress-section">
              <div className="progress-header">
                <h2>Progress</h2>
              </div>

              <ProgressRing value={note.progress} />
            </section>

            <section className="note-timeline">
              <h2 className="timeline-title">Timeline</h2>

              <div className="timeline-content">
                <div className="timeline-item">
                  <span className="timeline-label">Created</span>
                  <p className="timeline-value">{formattedDate}</p>
                </div>

                <div className="timeline-item">
                  <span className="timeline-label">Target</span>
                  <p className="timeline-value">{note.targetPeriod}</p>
                </div>
              </div>
            </section>

            <div className="note-actions">
              <button
                className="button edit-button"
                type="button"
                onClick={startEditing}
              >
                Edit
              </button>

              <button
                className="button delete-button"
                type="button"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </article>
    </div>
  );
}

export default NoteDetails;
