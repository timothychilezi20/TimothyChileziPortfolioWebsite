import TagPill from "./TagPill";
import "../../styles/pages/projects.css";

function ProjectRow({ project, index }) {
  const { title, type, description, tags, image, accent, link } = project;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="project-row">
      <div className="project-row__side">
        <span className="project-row__num">{number}</span>
        <span className="project-row__type">{type}</span>
      </div>

      <div className="project-row__media" style={{ "--accent": accent }}>
        <img src={image} alt={`${title} cover`} loading="lazy" />
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
