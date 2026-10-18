import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About me" },
  { to: "/games", label: "Games" },
  { to: "/stories", label: "Writing/Stories" },
  { to: "/websites", label: "Websites" },
  { to: "/work", label: "Work" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <Link
        to="/"
        className="navbar__logo"
        onClick={close}
        aria-label="Timothy Chilezi, home"
      >
        <span className="navbar__mark">
          TC<span className="navbar__dot">.</span>
        </span>
        <span className="navbar__name">Timothy Chilezi</span>
      </Link>

      <button
        className="navbar__toggle"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav
        id="primary-nav"
        className={`navbar__links ${open ? "is-open" : ""}`}
        aria-label="Primary"
      >
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={close}
            className={({ isActive }) =>
              `navbar__link ${isActive ? "is-active" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="navbar__status">
        <span className="navbar__pulse" aria-hidden="true" />
        Available
      </div>
    </header>
  );
}
