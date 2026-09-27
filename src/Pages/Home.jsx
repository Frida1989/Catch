import { Link } from "react-router-dom";
import NoteList from "../Components/NoteList";
import NoteInput from "../Components/NoteInput";
import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Home({ notes, addNote }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Show notes that match category and search
  const filteredNotes = notes.filter((note) => {
    const matchesCategory =
      selectedCategory === "All" || note.category === selectedCategory;

    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      (note.description || "").toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-top">
          <Link to="/" className="catch-logo">
            <span className="catch-logo-ring" aria-hidden="true">
              <span className="catch-logo-ring-center"></span>
            </span>

            <span className="catch-logo-text">Catch</span>
          </Link>

          <Link to="/about" className="hero-about-link">
            About & Contact
          </Link>
        </div>

        <div className="hero-content">
          <div className="theme-switcher">
            <p className="theme-switcher-label">TOGGLE THEME</p>

            <button
              className="theme-toggle-button"
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? "Switch to day mode" : "Switch to night mode"
              }
            >
              <span className="theme-toggle-dot" aria-hidden="true"></span>

              <span>{theme === "dark" ? "Day mode" : "Night mode"}</span>
            </button>

            <p className="theme-switcher-note">
              Your preference stays saved
              <br />
              across visits.
            </p>
          </div>
          <p className="hero-eyebrow">Your personal progress space</p>

          <div
            className="hero-title-reveal"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();

              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
              e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
            }}
          >
            {/* Normal title */}
            <h1 className="hero-title hero-title-base">
              Catch what's on your mind.
            </h1>

            {/* Bright title revealed by cursor */}
            <h1 className="hero-title hero-title-light" aria-hidden="true">
              Catch what's on your mind.
            </h1>
          </div>

          <h2 className="hero-subtitle">
            A place for the things you're still moving forward.
          </h2>

          <p className="hero-description">
            Catch isn't about “done or not done”. It's about seeing things move
            forward.
          </p>

          <p className="hero-description">
            A calmer way to capture what matters and see your progress, one step
            at a time.
          </p>

          <button
            className="hero-cta"
            type="button"
            onClick={() => setShowForm(true)}
          >
            + Add note
          </button>
        </div>
      </section>
      <section className="explore-section">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            aria-label="Search notes"
            placeholder="Search your notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="category-filter">
          <button
            type="button"
            className={
              selectedCategory === "All"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>

          <button
            type="button"
            className={
              selectedCategory === "Study"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setSelectedCategory("Study")}
            aria-pressed={selectedCategory === "Study"}
          >
            Study
          </button>

          <button
            type="button"
            className={
              selectedCategory === "Work"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setSelectedCategory("Work")}
            aria-pressed={selectedCategory === "Work"}
          >
            Work
          </button>

          <button
            type="button"
            className={
              selectedCategory === "YouTube"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setSelectedCategory("YouTube")}
            aria-pressed={selectedCategory === "YouTube"}
          >
            YouTube
          </button>

          <button
            type="button"
            className={
              selectedCategory === "Spotify"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setSelectedCategory("Spotify")}
          >
            Spotify
          </button>

          <button
            type="button"
            className={
              selectedCategory === "Private"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setSelectedCategory("Private")}
            aria-pressed={selectedCategory === "Private"}
          >
            Private
          </button>

          <button
            type="button"
            className={
              selectedCategory === "Growth"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setSelectedCategory("Growth")}
            aria-pressed={selectedCategory === "Growth"}
          >
            Growth
          </button>

          <button
            type="button"
            className={
              selectedCategory === "Language"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setSelectedCategory("Language")}
            aria-pressed={selectedCategory === "Language"}
          >
            Language
          </button>

          <button
            type="button"
            className={
              selectedCategory === "Free Notes"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setSelectedCategory("Free Notes")}
            aria-pressed={selectedCategory === "Free Notes"}
          >
            Free Notes
          </button>
        </div>
      </section>
      <section className="notes-section">
        <div className="notes-header">
          <div className="notes-heading">
            <p className="section-eyebrow">Your notes</p>

            <h2 className="section-title">What you're moving forward</h2>
          </div>

          <span className="notes-count">
            {filteredNotes.length}{" "}
            {filteredNotes.length === 1 ? "catch" : "catches"}
          </span>
        </div>

        <NoteList notes={filteredNotes} />
      </section>
      {showForm && (
        <div className="add-note-overlay" onClick={() => setShowForm(false)}>
          <div
            className="add-note-popover"
            onClick={(e) => e.stopPropagation()}
          >
            <NoteInput addNote={addNote} closeForm={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
