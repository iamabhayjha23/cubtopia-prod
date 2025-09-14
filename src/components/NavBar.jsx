// src/components/NavBar.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import logoImage from '../assets/logo.jpg';

// ... (All of your styled-components like Nav, NavItem, DropdownMenu, etc. remain exactly the same)
const Nav = styled.nav`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 18px #75bedbc3;
  padding: 0.5rem 2.1rem;
  border-radius: 0 0 28px 28px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(-100%)')};
`;

const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  
  img {
    height: 80px;
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
      <NavLogo to="/">
        <img src={logoImage} alt="Cubtopia Preschool Logo" />
      </NavLogo>
      
      <NavLinks>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/about">About Us</Link></NavItem>
        
        {/* NEW: Added the "Why Cubtopia" dropdown */}
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