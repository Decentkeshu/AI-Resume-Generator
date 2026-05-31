import Link from "next/link"

export default function Home() {
  return (
    <>
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500&display=swap');
        .hero-page {
          min-height: calc(100vh - 64px);
          background: #0c0c0c;
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
         background: radial-gradient(circle, rgba(22,101,52,0.15) 0%, transparent 70%);
          pointer-events: none;
        }

       

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(22,101,52,0.15);
          border: 1px solid rgba(22,101,52,0.3);
          color: #4ade80;
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
          background: #16a34a;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .hero-title {
         font-family: 'Sora', sans-serif;
          color: #f1f5f9;
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 700;
          text-align: center;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 0.25rem;
        }

        .hero-title-accent {
          color: #16a34a;
           }

        .hero-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: #4b4b4b;
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
          background: #15803d;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          padding: 14px 32px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: none;
          position: relative;
          z-index: 1;
        }

        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(99,102,241,0.45);
          color: #fff;
          background: #166534;
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
          color: #3a3a3a;
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
          background: rgba(22,101,52,0.15);
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          
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
         background: #161616;
          border: 0.5px solid #222;
          border-radius: 16px;
          padding: 1.5rem;
          width: 200px;
          transition: all 0.25s ease;
        }

        .hero-card:hover {
          // background: rgba(255,255,255,0.05);
          border-color: #15803d;
          transform: translateY(-3px);
        }

        .hero-card-icon {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .hero-card-title {
          font-size: 0.875rem;
          font-weight: 500;
          color: #e5e5e5;
          margin-bottom: 4px;
        }

        .hero-card-desc {
          font-size: 0.75rem;
          color: #444;
          line-height: 1.5;
        }
      `}</style>

      <main className="hero-page">
     
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          AI Powered
        </div>

       
        <h1 className="hero-title">
          Build your perfect<br />
          <span className="hero-title-accent">Resume</span>
        </h1>

     
        <p className="hero-subtitle">
          Create a job-winning resume in minutes with the power of AI.
          Tailored, professional, and ready to impress.
        </p>

       
        <Link href="/builder" className="hero-cta">
          Create My Resume
          <span className="hero-cta-arrow">→</span>
        </Link>

      
        <div className="hero-features">
          {["AI-generated content", "ATS-friendly formats", "Download as PDF"].map(f => (
            <div className="hero-feature" key={f}>
              <div className="hero-feature-icon">✓</div>
              {f}
            </div>
          ))}
        </div>

      
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