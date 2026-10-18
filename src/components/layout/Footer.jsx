import { Link } from "react-router-dom";
import { CONTACT_EMAIL } from "../../data/projects";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Based in Johannesburg, South Africa. Working worldwide.</p>
      <nav className="footer__links" aria-label="Elsewhere">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://itch.io/" target="_blank" rel="noreferrer">
          itch.io
        </a>
        <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
      </nav>
      <Link to="/">Back home</Link>
    </footer>
  );
}
