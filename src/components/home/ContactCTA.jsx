import { CONTACT_EMAIL } from "../../data/projects";
import "../../styles/pages/sections.css";

function ContactCTA() {
  return (
    <section className="contact" id="contact">
      <p className="contact__label">Have a project or story in mind?</p>

      <h2 className="contact__title">
        Let’s make
        <br />
        something <em>great.</em>
      </h2>

      <a className="contact__email" href={`mailto:${CONTACT_EMAIL}`}>
        <span>{CONTACT_EMAIL}</span>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 14H24M24 14L16 6M24 14L16 22"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </a>
    </section>
  );
}

export default ContactCTA;
