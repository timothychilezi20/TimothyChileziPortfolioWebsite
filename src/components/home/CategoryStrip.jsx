import { Link } from "react-router-dom";
import "../../styles/pages/sections.css";

const categories = [
  { num: "01", label: "Games", to: "/games" },
  { num: "02", label: "Stories", to: "/stories" },
  { num: "03", label: "Websites", to: "/websites" },
];

function CategoryStrip() {
  return (
    <nav className="category-strip" aria-label="Browse by category">
      {categories.map(({ num, label, to }) => (
        <Link key={to} to={to} className="category-strip__item">
          <span className="category-strip__num">{num}</span>
          <span className="category-strip__label">{label}</span>
          <svg
            className="category-strip__arrow"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 10H17M17 10L11 4M17 10L11 16"
              stroke="currentColor"
              strokeWidth="1.3"
            />
          </svg>
        </Link>
      ))}
    </nav>
  );
}

export default CategoryStrip;
