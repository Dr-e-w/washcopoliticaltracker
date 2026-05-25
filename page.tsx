import { officials } from "../data/officials";

function scoreClass(score: number) {
  if (score >= 75) return "score-red";
  if (score >= 60) return "score-orange";
  if (score >= 40) return "score-amber";
  if (score >= 25) return "score-yellow";
  return "score-green";
}

export default function Home() {
  const rankedOfficials = [...officials].sort((a, b) => b.score - a.score);
  const topScore = rankedOfficials[0];

  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <div className="eyebrow">Public Records Risk Dashboard</div>
          <div className="hero-row">
            <div>
              <h1>Public Risk Tracker</h1>
              <p className="hero-copy">
                A lightweight ranking of elected officials based on public-record risk indicators, including trading disclosures, ethics items, NDA use, public transparency concerns, donor overlap, procurement questions, and voting records.
              </p>
            </div>
            <div className="top-score">
              <div className="top-score-label">Highest Public Risk Score</div>
              <div className="top-score-number">{topScore.score}</div>
              <div className="top-score-name">{topScore.name}</div>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="search-panel" aria-label="Search officials">
          <div className="search-wrap">
            <span className="search-icon">⌕</span>
            <input
              className="search-input"
              placeholder="Search by official, office, issue, or source"
              aria-label="Search by official, office, issue, or source"
            />
          </div>
        </section>

        <section className="list" aria-label="Official rankings">
          {rankedOfficials.map((official, index) => (
            <article className="card" key={official.name}>
              <div className="card-grid">
                <div className="rank-area">
                  <div>
                    <div className="avatar" aria-label={`${official.name} photo placeholder`}>
                      {official.initials}
                    </div>
                    <div className="rank">#{index + 1}</div>
                  </div>
                </div>

                <div className="info">
                  <div className="info-top">
                    <div>
                      <h2 className="name">{official.name}</h2>
                      <div className="office">
                        {official.office} · {official.district}
                      </div>
                    </div>
                    <div className="tag">{official.tag}</div>
                  </div>

                  <p className="notes">{official.notes}</p>

                  <div className="bar-row">
                    <div className="bar" aria-hidden="true">
                      <div className="bar-fill" style={{ width: `${official.score}%` }} />
                    </div>
                    <button className="sources" type="button">
                      Sources →
                    </button>
                  </div>
                </div>

                <div className={`score-area ${scoreClass(official.score)}`}>
                  <div>
                    <div className="score-label">Public Risk Score</div>
                    <div className="score-number">{official.score}</div>
                    <div className="score-level">{official.level}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="methodology">
          <h2>Methodology Note</h2>
          <p>
            The Public Risk Score is a public-record risk score. It should not be presented as proof of criminal conduct, corruption, wrongdoing, or legal liability. Each score should link to supporting records such as financial disclosures, campaign finance filings, meeting minutes, contracts, ethics documents, public comment rules, procurement documents, recusals, or official investigations.
          </p>
        </section>
      </main>

      <footer className="container footer">
        Built as a lightweight static prototype. Replace placeholder source buttons with verified source links before public launch.
      </footer>
    </div>
  );
}
