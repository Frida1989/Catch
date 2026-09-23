import { useState } from "react";

function NoteInput({ addNote, closeForm }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [targetPeriod, setTargetPeriod] = useState("");

  // Clear all form fields
  function resetForm() {
    setTitle("");
    setDescription("");
    setCategory("");
    setTargetPeriod("");
  }

  // Save a new catch
  function handleSave(e) {
    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    addNote(title, description, category, targetPeriod);

    resetForm();

    if (closeForm) {
      closeForm();
    }
  }

  // Reset and close the form
  function handleCancel() {
    resetForm();

    if (closeForm) {
      closeForm();
    }
  }

  return (
    <section className="new-catch-section">
      <div className="new-catch-container">
        <div className="new-catch-heading">
          <p className="section-eyebrow">Catch something new</p>
          <h2 className="section-title">What are you catching?</h2>
        </div>

        <form className="note-form" onSubmit={handleSave}>
          <div className="form-group">
            <label className="form-label" htmlFor="note-title">
              Title
            </label>

            <input
              id="note-title"
              className="form-input"
              type="text"
              value={title}
              placeholder="What's on your mind?"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="note-description">
              Description
            </label>

            <textarea
              id="note-description"
              className="form-textarea"
              value={description}
              placeholder="Add some details..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group">
            <p className="form-label">Where does it belong?</p>

            <div className="category-options">
              {[
                "Study",
                "Work",
                "YouTube",
                "Spotify",
                "Private",
                "Growth",
                "Language",
                "Free Notes",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={
                    category === item
                      ? "category-button active"
                      : "category-button"
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="target-period">
              When do you want it moving?
            </label>

            <select
              id="target-period"
              className="form-select"
              value={targetPeriod}
              onChange={(e) => setTargetPeriod(e.target.value)}
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

          <div className="form-actions">
            <button
              className="button button-secondary"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>

            <button className="button button-primary" type="submit">
              Save catch
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default NoteInput;
