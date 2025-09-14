// src/components/FloatingButton.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

// ... (keyframes definition is the same)
const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
`;

// CHANGED: From styled.a to styled.button
const Button = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: #FB8500;
  color: white;
  padding: 12px 20px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  border: none; /* Add this for buttons */
  cursor: pointer; /* Add this for buttons */
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  transition: transform 0.2s ease-in-out;
  animation: ${shake} 2.5s infinite;

  &:hover {
    transform: scale(1.05);
    animation-play-state: paused;
  }
`;

// CHANGED: The component now accepts an onClick prop
export default function FloatingButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      Enquire Now
      <FaArrowRight />
    </Button>
  );
}