// src/components/NavBar.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import logoImage from '../assets/logo.jpg';

// Update the Nav component with the decorative border
const Nav = styled.nav`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 18px #75bedbc3;
  padding: 0.5rem 2.1rem;
  /* Removed border-radius to allow the border to span the full width */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(-100%)')};

  /* NEW: Add the decorative top border */
  &::after {
    content: '';
    position: absolute;
    bottom: -10px; /* Position it just below the navbar */
    left: 0;
    width: 100%;
    height: 10px;
    background: url(/img/bg-header-top.png) center center repeat-x;
    z-index: 1;
  }
`;

// ... The rest of your styled-components (NavLogo, NavLinks, etc.) are unchanged

const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  
  img {
    height: 50px;
    width: auto;
  }
`;

const NavLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.1rem;
`;

const NavSocial = styled.div`
  a {
    color: #2ca5cf;
    font-size: 1.11rem;
    margin-left: 1.1rem;
    transition: color 0.16s;

    &:hover {
      color: #2e2e38;
    }
  }
`;

const DropdownMenu = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 100%; 
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  min-width: 240px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  z-index: 1;
  border-radius: 8px;
  padding: 0.5rem 0;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  
  a {
    color: #423d6c;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    font-size: 1rem;
    font-weight: 500;
    
    &:hover {
      background-color: #f1f1f1;
      color: #2ca5cf;
    }
  }
`;

const NavItem = styled.div`
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  margin-bottom: -10px;
  
  &:hover ${DropdownMenu} {
    opacity: 1;
    visibility: visible;
  }
  
  a {
    color: #2e2e38;
    text-decoration: none;
    font-size: 1.13rem;
    font-weight: 500;
    transition: color 0.16s;
    
    &:hover {
      color: #2ca5cf;
    }
  }
`;


export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav $isVisible={isVisible}>
      {/* ... The rest of your JSX is unchanged ... */}
      <NavLogo to="/">
        <img src={logoImage} alt="Cubtopia Preschool Logo" />
      </NavLogo>
      <NavLinks>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/about">About Us</Link></NavItem>
        <NavItem>
          <Link to="/why-cubtopia">Why Cubtopia</Link>
          <DropdownMenu>
            <Link to="/curriculum">Curriculum</Link>
            <Link to="/learning-methods">Learning Methods</Link>
          </DropdownMenu>
        </NavItem>
        <NavItem>
          <Link to="/programs">Programs</Link>
          <DropdownMenu>
            <Link to="/programs/integrated">Integrated Program</Link>
            <Link to="/programs/preschool">Preschool Program</Link>
            <Link to="/programs/daycare">Daycare Program</Link>
          </DropdownMenu>
        </NavItem>
        <NavItem><Link to="/contact">Contact Us</Link></NavItem>
      </NavLinks>
      <NavSocial>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </NavSocial>
    </Nav>
  );
}