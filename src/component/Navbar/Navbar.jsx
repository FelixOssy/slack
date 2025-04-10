"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}

        <Link to="/" className="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">Slack</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu-desktop">
          <Link to="/"  className="nav-link">
          Home
          </Link>
          <Link to="/about"  className="nav-link">
          About
          </Link>
          <Link to="/product"  className="nav-link">
          Product
          </Link>
          <Link to="/blog"  className="nav-link">
          Blog
          </Link>
          <Link to="/contact"  className="nav-link">
          Contact
          </Link>
        
         
          <button className="cta-button">Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="nav-menu-mobile">
          <Link to="/"  className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Home
          </Link>
          <Link to="/about"  className="nav-link" onClick={() => setIsMenuOpen(false)}>
          About
          </Link>
          <Link to="/product"  className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Product
          </Link>
          <Link to="/blog"  className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Blog
          </Link>
          <Link to="/contact"  className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Contact
          </Link>
          
          <button className="cta-button mobile-cta">Get Started</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar