import Link from "next/link"

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

        .hero-page {
          min-height: calc(100vh - 64px);
          background: #0a0a0f;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .hero-page::before {
          content: '';
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-page::after {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.25);
          color: #a5b4fc;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 100px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6366f1;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 700;
          color: #f8fafc;
          text-align: center;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 0.25rem;
        }

        .hero-title-accent {
          background: linear-gradient(135deg, #818cf8, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: #64748b;
          text-align: center;
          max-width: 520px;
          line-height: 1.7;
          margin: 1.5rem auto 3rem;
          font-weight: 400;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          padding: 14px 32px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 0 30px rgba(99,102,241,0.3);
          position: relative;
          z-index: 1;
        }

        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(99,102,241,0.45);
          color: #fff;
        }

        .hero-cta-arrow {
          font-size: 1.1rem;
          transition: transform 0.2s ease;
        }

        .hero-cta:hover .hero-cta-arrow {
          transform: translateX(4px);
        }

        .hero-features {
          display: flex;
          gap: 2.5rem;
          margin-top: 4rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-feature {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #475569;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .hero-feature-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(99,102,241,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          color: #818cf8;
          flex-shrink: 0;
        }

        .hero-cards {
          display: flex;
          gap: 16px;
          margin-top: 5rem;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 700px;
          position: relative;
          z-index: 1;
        }

        .hero-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 1.5rem;
          width: 200px;
          transition: all 0.25s ease;
        }

        .hero-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(99,102,241,0.3);
          transform: translateY(-3px);
        }

        .hero-card-icon {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .hero-card-title {
          font-size: 0.875rem;
          font-weight: 500;
          color: #e2e8f0;
          margin-bottom: 4px;
        }

        .hero-card-desc {
          font-size: 0.75rem;
          color: #475569;
          line-height: 1.5;
        }
      `}</style>

      <main className="hero-page">
        {/* Badge */}
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          AI Powered
        </div>

        {/* Headline */}
        <h1 className="hero-title">
          Build your perfect<br />
          <span className="hero-title-accent">Resume</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Create a job-winning resume in minutes with the power of AI.
          Tailored, professional, and ready to impress.
        </p>

        {/* CTA */}
        <Link href="/builder" className="hero-cta">
          Create My Resume
          <span className="hero-cta-arrow">→</span>
        </Link>

        {/* Trust features */}
        <div className="hero-features">
          {["AI-generated content", "ATS-friendly formats", "Download as PDF"].map(f => (
            <div className="hero-feature" key={f}>
              <div className="hero-feature-icon">✓</div>
              {f}
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="hero-cards">
          {[
            { icon: "⚡", title: "Fast & Easy", desc: "Generate a full resume in under 2 minutes" },
            { icon: "🎯", title: "Job Targeted", desc: "Tailored content for your specific role" },
            { icon: "💾", title: "Save & Edit", desc: "Access and update your resumes anytime" },
          ].map(card => (
            <div className="hero-card" key={card.title}>
              <div className="hero-card-icon">{card.icon}</div>
              <div className="hero-card-title">{card.title}</div>
              <div className="hero-card-desc">{card.desc}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}