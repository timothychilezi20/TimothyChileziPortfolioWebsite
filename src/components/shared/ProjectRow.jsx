import { useState } from "react";
import TagPill from "./TagPill";
import "../../styles/pages/projects.css";

// "Code Red: Escape" -> "CR", "HireMe" -> "H"
const makeInitials = (title) =>
  title
    .replace(/^the\s+/i, "")
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function ProjectRow({ project, index }) {
  const {
    title,
    type,
    description,
    tags,
    image,
    cover = {},
    accent,
    link,
  } = project;
  const number = String(index + 1).padStart(2, "0");

  // Same card layout either way: the cover image sits inside the tilted card
  // when it loads; if it is missing or fails, the card shows initials instead.
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = image && !imageFailed;

  return (
    <article className="project-row">
      <div className="project-row__side">
        <span className="project-row__num">{number}</span>
        <span className="project-row__type">{type}</span>
      </div>

      <div className="project-row__media" style={{ "--accent": accent }}>
        <div className={`cover-card ${showImage ? "cover-card--image" : ""}`}>
          {showImage ? (
            <img
              src={image}
              alt={`${title} cover`}
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <>
              <span
                className="cover-card__initials"
                style={{ color: cover.tint || "var(--lavender)" }}
              >
                {cover.initials || makeInitials(title)}
              </span>
              <span className="cover-card__label">{cover.label || type}</span>
            </>
          )}
        </div>
        {cover.sphere && <span className="cover-sphere" aria-hidden="true" />}
      </div>

      <div className="project-row__body">
        <h3 className="project-row__title">{title}</h3>
        <p className="project-row__desc">{description}</p>

        <div className="project-row__foot">
          <ul className="project-row__tags" aria-label="Tools used">
            {tags.map((t) => (
              <TagPill key={t}>{t}</TagPill>
            ))}
          </ul>
          <a className="project-row__link" href={link}>
            Ask about it
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectRow;
