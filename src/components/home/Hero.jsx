import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__meta">
        <span>Creative developer</span>
        <span>Web · Games · Stories</span>
      </div>

      <h1 className="hero__title">
        Hi, I’m <em>Timothy.</em>
        <br />
        I build digital
        <br />
        <span className="hero__outline">worlds</span> that feel <em>alive.</em>
      </h1>

      <div className="hero__foot">
        <p className="hero__blurb">
          Developer, game maker, and writer creating thoughtful websites,
          playful systems, and stories you can step inside.
        </p>

        <Link to="/about" className="hero__cta">
          About me
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 14L14 4M14 4H6M14 4V12"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </Link>
      </div>

      {/* Decorative code card; hidden from screen readers */}
      <div className="hero__card" aria-hidden="true">
        <div className="hero__card-bar">
          <span />
          <span />
          <span />
          <small>world.ts</small>
        </div>
        <pre>
          <code>
            <span className="ln">01</span> <span className="kw">const</span>{" "}
            idea = <span className="kw2">new</span>{" "}
            <span className="fn">World</span>();{"\n"}
            <span className="ln">02</span> idea.
            <span className="fn">world</span>();{"\n"}
            <span className="ln">03</span> idea.
            <span className="fn">build</span>();{"\n"}
            <span className="ln">04</span> player.enter(idea);
          </code>
        </pre>
      </div>
    </section>
  );
}
