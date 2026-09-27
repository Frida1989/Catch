import { useState } from "react";
import { Link } from "react-router-dom";

function About() {
  const [activePerson, setActivePerson] = useState("multitasker");
  const [demoProgress, setDemoProgress] = useState(35);

  // Move the demo project forward
  function moveProgress() {
    if (demoProgress < 100) {
      setDemoProgress(Math.min(demoProgress + 15, 100));
    }
  }

  // Reset the progress demo
  function resetProgress() {
    setDemoProgress(35);
  }

  return (
    <div className="about-page">
      {/* ========================================
          TOP
      ======================================== */}

      <div className="about-top">
        <Link to="/" className="catch-logo">
          <span className="catch-logo-ring" aria-hidden="true">
            <span className="catch-logo-ring-center"></span>
          </span>

          <span className="catch-logo-text">Catch</span>
        </Link>

        <Link to="/" className="about-back-link">
          ← Back to notes
        </Link>
      </div>

      {/* ========================================
          VIDEO / VISUAL STORY
      ======================================== */}

      <section
        className="about-media-section"
        aria-labelledby="catch-story-title"
      >
        <div className="about-media-text">
          <p className="about-section-number">01 / THE IDEA</p>

          <h2 id="catch-story-title">This isn't another to-do list.</h2>

          <p>
            Traditional productivity tools often ask one question:
            <strong> Is it finished?</strong>
          </p>

          <p>
            Catch asks something different:
            <strong> Is it moving?</strong>
          </p>
        </div>

        <div className="about-video-placeholder">
          <div className="video-placeholder-content">
            <span className="video-play-symbol">▶</span>

            <p className="video-small-text">Catch story</p>

            <h3>
              My Catch story video
              <br />
              will live here.
            </h3>

            <p>
              A short visual story about ideas, unfinished goals and progress.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          WHO IS CATCH FOR?
      ======================================== */}

      <section className="about-people-section">
        <div className="about-section-heading">
          <p className="about-section-number">02 / FOR REAL LIFE</p>

          <h2>For people whose minds don't live in one tab.</h2>

          <p>
            Catch is built for people managing different parts of life at the
            same time — without forcing everything into one rigid productivity
            system.
          </p>
        </div>

        <div className="about-person-buttons">
          <button
            type="button"
            className={
              activePerson === "multitasker"
                ? "about-person-button active"
                : "about-person-button"
            }
            aria-pressed={activePerson === "multitasker"}
            onClick={() => setActivePerson("multitasker")}
          >
            The multitasker
          </button>

          <button
            type="button"
            className={
              activePerson === "creator"
                ? "about-person-button active"
                : "about-person-button"
            }
            aria-pressed={activePerson === "creator"}
            onClick={() => setActivePerson("creator")}
          >
            The creator
          </button>

          <button
            type="button"
            className={
              activePerson === "learner"
                ? "about-person-button active"
                : "about-person-button"
            }
            aria-pressed={activePerson === "learner"}
            onClick={() => setActivePerson("learner")}
          >
            The learner
          </button>

          <button
            type="button"
            className={
              activePerson === "manyroles"
                ? "about-person-button active"
                : "about-person-button"
            }
            aria-pressed={activePerson === "manyroles"}
            onClick={() => setActivePerson("manyroles")}
          >
            Many roles, one mind
          </button>
        </div>

        <div className="about-person-result">
          {activePerson === "multitasker" && (
            <>
              <span>01</span>
              <h3>You have many things moving at once.</h3>
              <p>
                Work, personal goals, ideas, appointments and projects don't
                need to compete for the same checklist.
              </p>
            </>
          )}

          {activePerson === "creator" && (
            <>
              <span>02</span>
              <h3>Your ideas don't arrive in perfect order.</h3>
              <p>
                Capture them first. Organize them later. Let an idea be
                unfinished without letting it disappear.
              </p>
            </>
          )}

          {activePerson === "learner" && (
            <>
              <span>03</span>
              <h3>Learning is progress, not a checkbox.</h3>
              <p>
                A course, a language or a new skill can move forward in small
                steps over weeks or months.
              </p>
            </>
          )}

          {activePerson === "manyroles" && (
            <>
              <span>04</span>
              <h3>You are allowed to care about more than one thing.</h3>
              <p>
                Career, family, health, creativity and learning can all exist in
                one personal space without becoming one giant list.
              </p>
            </>
          )}
        </div>
      </section>

      {/* ========================================
          PROGRESSIVE MULTITASKING
      ======================================== */}

      <section className="about-progress-section">
        <div className="about-progress-copy">
          <p className="about-section-number">03 / PROGRESSIVE MULTITASKING</p>

          <h2>Don't finish everything. Move something.</h2>

          <p>
            Catch is built around a simple idea: progress can be meaningful
            before something reaches 100%.
          </p>

          <p>
            Instead of collecting unfinished tasks that make you feel behind,
            you can see which parts of your life are actually moving forward.
          </p>

          <div className="about-progress-steps">
            <span>Capture</span>
            <span>Focus</span>
            <span>Move</span>
            <span>Notice</span>
            <span>Celebrate</span>
          </div>
        </div>

        <div className="about-progress-demo">
          <p className="demo-label">Try the idea</p>

          <div
            className="about-demo-ring"
            style={{
              background: `conic-gradient(
                #ffffff ${demoProgress}%,
                #242424 ${demoProgress}% 100%
              )`,
            }}
            role="progressbar"
            aria-label="Example project progress"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={demoProgress}
          >
            <div className="about-demo-ring-center">
              <span>{demoProgress}%</span>
              <small>moving</small>
            </div>
          </div>

          <h3>Build something that matters</h3>

          <p>
            It doesn't need to be finished today. It only needs a next step.
          </p>

          <div className="about-demo-actions">
            <button type="button" onClick={moveProgress}>
              + Move it forward
            </button>

            <button
              className="demo-reset-button"
              type="button"
              onClick={resetProgress}
            >
              Reset
            </button>
          </div>

          {demoProgress === 100 && (
            <p className="demo-complete-message">100% — this one made it. ✦</p>
          )}
        </div>
      </section>

      {/* ========================================
          PERSONAL
      ======================================== */}

      <section className="about-personal-section">
        <p className="about-section-number">04 / MAKE IT YOURS</p>

        <h2>Your system shouldn't decide what matters to you.</h2>

        <p className="about-personal-intro">
          Catch is designed to become personal. Your life might not fit into
          someone else's categories — so your space shouldn't have to either.
        </p>

        <div className="about-category-cloud">
          <span>Study</span>
          <span>Work</span>
          <span>Family</span>
          <span>Ideas</span>
          <span>Health</span>
          <span>Books</span>
          <span>Creative work</span>
          <span>Private</span>
          <span className="category-cloud-special">+ Your own</span>
        </div>
      </section>

      {/* ========================================
          HOW IT WORKS
      ======================================== */}

      <section className="about-how-section">
        <div className="about-section-heading">
          <p className="about-section-number">05 / HOW CATCH WORKS</p>
          <h2>A quieter productivity loop.</h2>
        </div>

        <div className="about-how-grid">
          <article>
            <span>01</span>
            <h3>Catch it</h3>
            <p>
              Put the thought somewhere before your brain has to keep carrying
              it.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Give it a place</h3>
            <p>Use categories to separate the different parts of your life.</p>
          </article>

          <article>
            <span>03</span>
            <h3>Move it</h3>
            <p>
              Progress step by step instead of waiting for one final checkbox.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>See it</h3>
            <p>
              Make invisible effort visible — even before the work is complete.
            </p>
          </article>

          <article>
            <span>05</span>
            <h3>Celebrate it</h3>
            <p>
              Reaching the next step should feel like progress, not simply
              another item disappearing from a list.
            </p>
          </article>
        </div>
      </section>

      {/* ========================================
          CREATOR + CONTACT
      ======================================== */}

      <section className="about-contact-section">
        <div className="about-contact-story">
          <p className="about-section-number">06 / BEHIND CATCH</p>

          <h2>Designed from a very full mind.</h2>

          <p>
            Catch started as a React project, but the idea came from a real
            problem: having many meaningful things happening at the same time
            and needing a calmer way to see them.
          </p>

          <p>
            It is designed and built by
            <strong> Frida Pakdaman</strong> — combining frontend development,
            visual design and product thinking.
          </p>

          <p className="about-contact-signoff">
            Built as a project. Growing as a product.
          </p>
        </div>

        <div className="about-contact-card">
          <p className="contact-small-title">Say hello</p>

          <a
            href="mailto:farideh.pakdaman@yh.nackademin.se"
            className="contact-main-link"
          >
            Email
            <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/farideh-pakdaman/"
            target="_blank"
            rel="noreferrer"
            className="contact-main-link"
          >
            LinkedIn
            <span>↗</span>
          </a>

          <a href="tel:+46730415204" className="contact-main-link">
            +46 730 415 204
            <span>↗</span>
          </a>
        </div>
      </section>

      <div className="about-footer-line">
        <span>Catch</span>
        <span>Progress over pressure.</span>
      </div>
    </div>
  );
}

export default About;
