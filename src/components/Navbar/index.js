import React, { useState } from 'react';
import { 
  Nav, 
  NavbarContainer, 
  NavBrand,
  NavItems,
  NavItem,
  NavLink, 
  CTAButton,
  MobileMenuToggle,
  MobileMenu,
  MobileNavLink,
  MobileCTAButton
} from './NavbarStyledComponent';
import { Bio } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          {/* 3D Brand Section */}
          <NavBrand>
            <div className="brand-3d">UPHAR</div>
            <div className="brand-subtitle">DEV</div>
          </NavBrand>

          {/* Desktop Navigation */}
          <NavItems>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#experience">Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#education">Education</NavLink>
            </NavItem>
          </NavItems>

          {/* CTA Button */}
          <CTAButton href={Bio.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </CTAButton>

          {/* Mobile Menu Toggle */}
          <MobileMenuToggle onClick={toggleMobileMenu}>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </MobileMenuToggle>
        </NavbarContainer>
      </Nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen}>
        <MobileNavLink href="#about" onClick={closeMobileMenu}>
          About
        </MobileNavLink>
        <MobileNavLink href="#skills" onClick={closeMobileMenu}>
          Skills
        </MobileNavLink>
        <MobileNavLink href="#experience" onClick={closeMobileMenu}>
          Experience
        </MobileNavLink>
        <MobileNavLink href="#projects" onClick={closeMobileMenu}>
          Projects
        </MobileNavLink>
        <MobileNavLink href="#education" onClick={closeMobileMenu}>
          Education
        </MobileNavLink>
        <MobileCTAButton 
          href={Bio.github} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={closeMobileMenu}
        >
          GitHub Profile
        </MobileCTAButton>
      </MobileMenu>
    </>
  );
};

export default Navbar;