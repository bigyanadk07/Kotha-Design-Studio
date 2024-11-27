import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../Images/KothaLogo.png"

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-sage-50 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="">
              <img src={Logo} alt="Logo" className='w-44 h-auto' /></span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="mobile-nav-link">Home</Link>
            <Link to="/services" className="mobile-nav-link">Services</Link>
            <Link to="/portfolio" className="mobile-nav-link">Portfolio</Link>
            <Link to="/about" className="mobile-nav-link">About</Link>
            <Link to="/contact" className="mobile-nav-link">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};