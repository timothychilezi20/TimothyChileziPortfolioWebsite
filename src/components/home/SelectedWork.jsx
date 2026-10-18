import ProjectRow from "../shared/ProjectRow";
import { projects } from "../../data/projects";
import "../../styles/pages/projects.css";

function SelectedWork() {
  return (
    <section className="selected-work" id="work">
      <p className="selected-work__label">Selected work / Across disciplines</p>

      <header className="selected-work__head">
        <h2>
          A few things
          <br />
          I’ve made.
        </h2>
        <p>
          I work between code, interaction, and narrative. These projects are
          different in form, but united by curiosity and careful craft.
        </p>
      </header>

      <div className="selected-work__list">
        {projects.map((project, i) => (
          <ProjectRow key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default SelectedWork;
