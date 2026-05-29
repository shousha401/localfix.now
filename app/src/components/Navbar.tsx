import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const serviceLinks = [
  { label: 'Fresno Web Design', href: '/fresno-web-design' },
  { label: 'Workflow Automation', href: '/workflow-automation' },
  { label: 'AI Chatbot', href: '/ai-chatbot' },
  { label: 'Website Fixes', href: '/website-fixes' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkStyle = { color: '#2A2A2A', fontFamily: "'Inter', sans-serif" } as const;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out"
      style={{
        height: '64px',
        background: scrolled ? 'rgba(250, 247, 242, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #E2DDD6' : '1px solid transparent',
      }}
    >
      <div className="mx-auto flex h-full items-center justify-between px-6" style={{ maxWidth: '1200px' }}>
        {/* Logo */}
        <Link to="/" aria-label="LocalFix home" className="inline-flex items-center">
          <svg
            width="140"
            height="32"
            viewBox="0 0 140 32"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            <text
              x="0"
              y="26"
              fontFamily="Fraunces, Georgia, 'Times New Roman', serif"
              fontWeight="600"
              fontSize="28"
              fill="#0F2A44"
            >
              LocalFix<tspan fill="#E5742B">.</tspan>
            </text>
          </svg>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium transition-colors duration-200 hover:text-[#E5742B]"
            style={linkStyle}
          >
            Home
          </Link>

          {/* Services dropdown (opens on hover or keyboard focus) */}
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-[#E5742B]"
              style={linkStyle}
              aria-haspopup="true"
            >
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
            >
              <div
                className="flex w-56 flex-col overflow-hidden rounded-xl py-2 shadow-lg"
                style={{ background: '#FAF7F2', border: '1px solid #E2DDD6' }}
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[#F0EBE3] hover:text-[#E5742B]"
                    style={linkStyle}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className="text-sm font-medium transition-colors duration-200 hover:text-[#E5742B]"
            style={linkStyle}
          >
            About
          </Link>

          <Link
            to="/#review-form"
            className="text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px"
            style={{
              background: '#E5742B',
              padding: '8px 20px',
              borderRadius: '8px',
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#D46620';
              (e.target as HTMLElement).style.boxShadow = '0 4px 12px rgba(229, 116, 43, 0.25)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = '#E5742B';
              (e.target as HTMLElement).style.boxShadow = 'none';
            }}
          >
            Get a Free Review
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F2A44" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="overflow-hidden transition-all duration-300 ease-out md:hidden"
        style={{
          maxHeight: menuOpen ? '460px' : '0',
          opacity: menuOpen ? 1 : 0,
          background: '#FAF7F2',
          borderBottom: menuOpen ? '1px solid #E2DDD6' : '1px solid transparent',
        }}
      >
        <div className="flex flex-col py-2">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 text-left text-sm font-medium transition-colors hover:text-[#E5742B]"
            style={linkStyle}
          >
            Home
          </Link>

          <span
            className="px-6 pb-1 pt-3 text-left"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#6B7B8D',
            }}
          >
            Services
          </span>
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2.5 pl-8 text-left text-sm font-medium transition-colors hover:text-[#E5742B]"
              style={linkStyle}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 pt-4 text-left text-sm font-medium transition-colors hover:text-[#E5742B]"
            style={linkStyle}
          >
            About
          </Link>

          <Link
            to="/#review-form"
            onClick={() => setMenuOpen(false)}
            className="mx-6 my-2 text-center text-sm font-medium text-white"
            style={{
              background: '#E5742B',
              padding: '10px',
              borderRadius: '8px',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Get a Free Review
          </Link>
        </div>
      </div>
    </nav>
  );
}
