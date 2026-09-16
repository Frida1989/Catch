import { Link } from "react-router-dom";
import NoteList from "../Components/NoteList";

function Home({notes}) {
  return (
    <div className="home-page">
      <section className="page-hero">
        <div className="hero-copy">
          <span className="eyebrow">
            Catch what's on<strong>your mind</strong>
          </span>

          <p>hhhhh</p>

          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">
              About & Contact us
            </Link>
          </div>
        </div>

        <div className="search">SearchBar</div>
         <div className="categotyFilter">Category</div>
      </section>

      <p className="eyebrow">All notes</p>
      <ul className="note-list">
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`} className="note-card">
              <div className="note-card-info">
                <div className="note-meta-line">
                  <span>{note.wishMonthDate}</span>
                  <span>{note.category}</span>
                </div>

                <h3>{note.title}</h3>
              </div>
            </Link>
            
            
          </li>
          
        ))}
      </ul>
      </NoteList>
      
    </div>
    
  );
}

export default Home;
