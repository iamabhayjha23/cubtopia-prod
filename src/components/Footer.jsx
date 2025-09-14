// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMapPin } from 'react-icons/fi';
import mascotImage from '../assets/cub.png';

const FooterContainer = styled.footer`
  background-color: #f6fafd;
  color: #423d6c;
  padding: 6rem 2rem 4rem;
  position: relative;
  background-image: radial-gradient(#d6e8ef 1px, transparent 1px);
  background-size: 20px 20px;

  /* The top wavy border */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3e%3cpath fill='%23ffffff' fill-opacity='1' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,202.7C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3e%3c/path%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    z-index: 1; /* Sits below the mascot */
  }
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start; /* Align columns to the left */
  align-items: flex-start;
  gap: 4rem; /* Increased gap */
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  max-width: 300px; /* Give columns a max width */
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  p {
    line-height: 1.6;
    margin: 0.5rem 0;
  }
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  a {
    color: #423d6c;
    font-size: 1.8rem;
    margin-right: 1.5rem;
    transition: color 0.2s;
    &:hover {
      color: #2ca5cf;
    }
  }
`;

// CHANGED: MascotImage is now absolutely positioned
const MascotImage = styled.img`
  position: absolute;
  width: 180px; /* Set a specific size */
  height: auto;
  top: 10px; /* Negative value to push it up */
  right: 8%; /* Position from the right edge */
  z-index: 2; /* Ensure it sits on top of the wavy border */

  @media (max-width: 768px) {
    display: none; /* Hide the mascot on small screens to save space */
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 4rem;
  color: #6a6a8a;
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      {/* The mascot is now a direct child for easier positioning */}
      <MascotImage src={mascotImage} alt="Cubtopia Mascot" />

      {/* The content is now just two columns */}
      <FooterContent>
        <FooterColumn>
          <h3><FiMapPin /> Find Us</h3>
          <p>Kolshet Road</p>
          <p>Thane West, Maharashtra 400607</p>
        </FooterColumn>
        
        <FooterColumn>
          <h3><FiPhone /> Contact Us</h3>
          <p>info@cubtopia.com</p>
          <p>+91 9004890114</p>
          <SocialLinks>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </SocialLinks>
        </FooterColumn>
      </FooterContent>

      <Copyright>
        Copyright © {new Date().getFullYear()} Cubtopia Preschool
      </Copyright>
    </FooterContainer>
  );
}