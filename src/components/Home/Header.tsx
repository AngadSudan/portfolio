"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    section: "Home",
    url: "/"
  },
  {
    section: "Projects",
    url: "/projects"
  },
  {
    section: "Experience",
    url: "/experience"
  },
  {
    section: "Updates",
    url: "/updates"
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Menu Button */}
      <div className="fixed z-50 top-8 right-8">
        <button
          onClick={() =>{setMenuOpen(!menuOpen)}}
          className="group relative w-14 h-14 rounded-full bg-linear-to-br from-zinc-900 to-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-zinc-700/50"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 rounded-full bg-white transition-all duration-300" />
          {menuOpen ? (
            <X className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black w-5 h-5 transition-transform duration-300 rotate-90" />
          ) : (
            <Menu className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black w-5 h-5 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <div
        className={`fixed z-50 top-0 right-0 h-screen w-80 bg-linear-to-br from-zinc-900 via-zinc-900 to-zinc-800 shadow-2xl transition-transform duration-500 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col justify-center px-12 py-20">
          <nav className="space-y-2">
            {navLinks.map((nav, index) => (
              <a
                key={index}
                href={nav.url}
                className="group block py-4 px-6 rounded-lg transition-all duration-300 hover:bg-white/5 relative overflow-hidden"
                style={{
                  animation: menuOpen ? `slideIn 0.4s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
                <span className="relative text-2xl font-light text-zinc-400 group-hover:text-white transition-colors duration-300 tracking-wide">
                  {nav.section}
                </span>
                <div className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </nav>

          <div className="absolute bottom-12 left-12 right-12">
            <div className="h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent mb-6" />
            <p className="text-xs text-zinc-500 text-center tracking-widest">
              PORTFOLIO {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}

export default Header;