import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";

// Book cover images for the Solo series, hosted on the project's media
// storage. Used directly (no ES module import) per the asset pipeline.
const soloSafeCover =
  "https://vibe.filesafe.space/1793742305680131005/assets/b42d02b0-1f99-48f9-a127-f57c5e843d34.png";
const soloWorkingCover =
  "https://vibe.filesafe.space/1793742305680131005/assets/40a6bdf8-a98c-4daa-8369-9f371f4b370f.png";
const soloThrivingCover =
  "https://vibe.filesafe.space/1793742305680131005/assets/520d3a9c-1e0d-469b-b669-35a54f80b3fb.png";

const books = [
  {
    title: "Solo & Safe",
    blurb: "Feeling safe and steady wherever you roam.",
    cover: soloSafeCover,
    alt: "Solo and Safe book cover",
  },
  {
    title: "Solo & Working",
    blurb: "Building a work rhythm that travels with you.",
    cover: soloWorkingCover,
    alt: "Solo and Working book cover",
  },
  {
    title: "Solo & Thriving",
    blurb: "Finding joy in a life lived on your own terms.",
    cover: soloThrivingCover,
    alt: "Solo and Thriving book cover",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solo Series Early List" },
      {
        name: "description",
        content:
          "The Solo series — three books for women 50+ who want to travel on their own, feel safe doing it, and keep working from wherever they land. Arriving November 27.",
      },
      { property: "og:title", content: "Solo Series Early List" },
      {
        property: "og:description",
        content:
          "The Solo series — three books for women 50+ who want to travel on their own, feel safe doing it, and keep working from wherever they land. Arriving November 27.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const thanksName = name.trim() || "friend";

  return (
    <div className="solo-series">
      <div className="page">
        <div className="card">
          <div className="brand-bar">
            <p>Midlife Rondavous</p>
          </div>
          <div className="divider" />

          <div className="hero">
            <p className="eyebrow">Arriving November 27 &middot; Black Friday</p>
            <h1>The books I wish I'd had at 53</h1>
            <div className="lede">
              <p>
                Ten years ago I became a full-time nomad. I had a suitcase, a laptop, and about a
                thousand questions nobody seemed to be answering for women like me. So I wrote the
                answers down.
              </p>
              <p>
                On <strong>November 27</strong>, I'm releasing the <strong>Solo series</strong>{" "}
                &mdash; three books for women 50+ who want to travel on their own, feel safe doing
                it, and keep working from wherever they land.
              </p>
            </div>
          </div>

          <div className="series">
            <h2>Meet the series</h2>
            <div className="books">
              {books.map((book) => (
                <div className="book" key={book.title}>
                  <img src={book.cover} alt={book.alt} loading="lazy" />
                  <p className="title">{book.title}</p>
                  <p>{book.blurb}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="capture">
            <h2>Join the early list</h2>
            <p className="urgency">
              I'm saving my best launch pricing for the people on this list.{" "}
              <b>Join now and you'll hear about the Black Friday price first</b>, before it goes
              anywhere else.
            </p>

            {!submitted && (
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="signup-name">First name</label>
                  <input
                    type="text"
                    id="signup-name"
                    name="name"
                    placeholder="Your first name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="signup-email">Email address</label>
                  <input
                    type="email"
                    id="signup-email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="submit">
                  Save My Spot on the Early List
                </button>
              </form>
            )}
            <p className="fine">No spam &mdash; just this launch. Unsubscribe anytime.</p>

            {submitted && (
              <div className="thanks">
                <p className="big">&#127881;</p>
                <p>
                  You're on the list, <strong>{thanksName}</strong>. Watch your inbox on{" "}
                  <strong>November 27</strong> for the Solo series and your Black Friday price.
                </p>
              </div>
            )}
          </div>

          <div className="closing">
            <p className="quote">You don't have to rush. We'll do this one step at a time.</p>
            <p className="sign">&mdash; Ronda</p>
          </div>

          <footer>
            <p style={{ margin: "0 0 4px" }}>
              Published by HeartWork Publishing &middot; MidlifeRondavous.com
            </p>
            <p style={{ margin: "0" }}>
              This preview is for review only &mdash; connect the form to GoHighLevel to start
              collecting real signups.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
