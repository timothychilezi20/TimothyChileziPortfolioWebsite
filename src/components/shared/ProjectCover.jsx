function ProjectCover({
  initials,
  label,
  tint = "var(--lavender)",
  sphere = false,
}) {
  return (
    <div className="cover" aria-hidden="true">
      <div className="cover__card">
        <span className="cover__initials" style={{ color: tint }}>
          {initials}
        </span>
        <span className="cover__label">{label}</span>
      </div>
      {sphere && <span className="cover__sphere" />}
    </div>
  );
}

export default ProjectCover;
