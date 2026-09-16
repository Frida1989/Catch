import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="content-panel">
        <p className="eyebrow">404</p>
        <h2>The page does not exist</h2>

        <Link to="/" className="back-link">
          ← Back
        </Link>
      </div>
    </div>
  );
}
