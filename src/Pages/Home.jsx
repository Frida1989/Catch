import { useState } from "react";
import { Link } from "react-router-dom";
import NoteList from "../Components/NoteList";
import NoteInput from "../Components/NoteInput";

function Home({ notes, addNote }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);

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
          <Link to="/" className="brand">
            <span className="brand-progress">◔</span>
            <span className="brand-name">Catch</span>
          </Link>

          <Link to="/about" className="hero-about-link">
            About & Contact
          </Link>
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">Your personal progress space</p>

          <h1 className="hero-title">
            Catch what's on
            <span className="hero-title-highlight"> your mind.</span>
          </h1>

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
            + Add a new catch
          </button>
        </div>
      </section>

      <section className="explore-section">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search your catches..."
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
          >
            Free Notes
          </button>
        </div>
      </section>

      <section className="notes-section">
        <div className="notes-header">
          <div className="notes-heading">
            <p className="section-eyebrow">Your catches</p>

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
        <section className="new-catch-wrapper">
          <NoteInput addNote={addNote} closeForm={() => setShowForm(false)} />
        </section>
      )}
    </div>
  );
}

export default Home;
