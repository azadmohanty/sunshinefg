
import React, { useState, useEffect } from 'react';
// FIX: Suppress TypeScript error for react-router-dom import.
// @ts-ignore
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admission', path: '/admission' },
  { name: 'Teachers', path: '/teachers' },
  { name: 'Notices', path: '/notices' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const activeLinkClass = "text-[#FFC107]";
  const baseLinkClass = "text-white transition-colors duration-300 hover:text-[#FFC107]";
  const logoSrc = "/images/school-logo-full.png";

  return (
    <header className={`fixed top-0 left-0 w-full bg-[#001D3D] text-white z-[1000] transition-all duration-300 ${isScrolled ? 'shadow-lg bg-opacity-95 backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto max-w-[1400px] flex justify-between items-center h-[75px] px-4 md:px-8">
        <Link to="/" className="flex items-center">
          <img 
            src={logoSrc}
            alt="Sunshine International School Logo" 
            className="h-14 w-auto" 
          />
        </Link>
        
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <NavLink 
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `${baseLinkClass} font-semibold ${isActive ? activeLinkClass : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-[#FFC107] after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle mobile menu">
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-full bg-[#001D3D]/90 backdrop-blur-md z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="flex justify-end p-5 h-[75px]">
            <button className="text-3xl text-white" onClick={() => setIsMenuOpen(false)} aria-label="Close mobile menu">
                <i className="fas fa-times"></i>
            </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-[calc(100%-75px)] gap-6">
          {navLinks.map((link, index) => (
            <li key={link.name} style={{ animationDelay: `${index * 0.1}s` }} className="animate-slide-in-from-right">
              <NavLink 
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `text-2xl font-semibold ${isActive ? activeLinkClass : 'text-white'}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;