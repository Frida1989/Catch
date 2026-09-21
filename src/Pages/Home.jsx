import { Link } from "react-router-dom";
import NoteList from "../Components/NoteList";
import NoteInput from "../Components/NoteInput";

function Home({ notes, addNote }) {
  return (
    <div className="home-page">
      <section className="page-hero">
        <div className="hero-copy">
          <span className="eyebrow">
            Catch what's on<strong> your mind.</strong>
          </span>

          <p>
            Catch isn't about “done or not done”. It's about seeing things move
            forward.
          </p>
        </div>

        <div className="search">SearchBar</div>
        <div className="categoryFilter">Category</div>
      </section>

      <p className="eyebrow">All notes</p>
      <NoteList notes={notes} />
      <NoteInput addNote={addNote} />
    </div>
  );
}

export default Home;
