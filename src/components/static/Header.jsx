import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const [open, setOpen] = useState(false);

  // Auto-close the menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const NavLinks = () => (
    <>
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/research" className="nav-link">Research</NavLink>
      <NavLink to="/try" className="nav-link">Try Models</NavLink>
      <NavLink to="/reachus" className="nav-link">Reach us</NavLink>
    </>
  );

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-2xl sm:text-3xl md:text-4xl font-bold text-teal-800 dark:text-teal-300" href="#">
              MonkeyPox Detection
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-teal-300 hover:text-teal-400 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-lg text-white dark:text-white">
            <NavLinks />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <nav className="md:hidden mt-2 px-2 pb-4 space-y-2 text-lg text-white dark:text-white transition-all duration-300">
            <div className="flex flex-col gap-2">
              <NavLinks />
            </div>
          </nav>
        )}
      </div>

      {/* Optional: Styles for nav-link if not defined globally */}
      <style>{`
        .nav-link {
          display: inline-block;
          padding: 0.5rem 0.75rem;
          border-radius: 0.375rem;
          transition: background 0.3s;
        }
        .nav-link:hover {
          background-color: rgba(20, 184, 166, 0.2); /* teal-400 hover bg */
        }
        .dark .nav-link:hover {
          background-color: rgba(94, 234, 212, 0.2); /* light teal bg for dark */
        }
      `}</style>
    </header>
  );
}

export default Header;
