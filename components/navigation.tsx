'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname,useRouter } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const logout = () => {
    localStorage.clear();
    router.push("/signin");
};


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500&display=swap');

        .nav-root {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0f;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(12px);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .brand-icon {
          width: 32px;
          height: 32px;
          background-color: #16a34a;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

       .brand-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #16a34a;
  letter-spacing: -0.01em;
}

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-signin {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
          color: green;
          padding: 8px 20px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }

        .btn-signin:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.3);
          color: #fff;
        }

       .btn-signup {
  background: #15803d;
  border: none;
  color: #fff;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.01em;
  box-shadow: none;
}

        .btn-signup:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 4px 24px rgba(99,102,241,0.45);
          background: #166534;
        }

        .nav-home-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .nav-home-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.06);
        }

        .divider {
          width: 1px;
          height: 20px;
          background: rgba(255,255,255,0.1);
        }
      `}</style>

      <nav className="nav-root">
        <div className="nav-inner">

        
          <Link href="/" className="nav-brand">
            <div className="brand-icon">📄</div>
            <span className="brand-text">ResumeAI</span>
          </Link>

         
          <div className="nav-actions">

           
              <button
              onClick={() => router.push(pathname === "/signin" ? "/" : "/signin")}
              className="btn-signup"
            >
              {pathname === "/signin" ? "CLOSE" : "SIGN IN"}
            </button>
            <button onClick={logout}>Logout</button>

             

          </div>
        </div>
      </nav>
    </>
  );
};