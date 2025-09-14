// src/components/EnquiryModal.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../firebase';

// ... (All your styled-components remain the same)
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.65);
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
  box-sizing: border-box;
`;

const ModalContent = styled.div`
  background: #E8F8F5;
  padding: 2rem 1.8rem;
  border-radius: 20px;
  width: 90%;
  max-width: 550px;
  position: relative;
  color: #222f5e;
  box-shadow: 0 10px 40px rgba(0,0,0,0.25);
  overflow-y: auto;
  max-height: 95vh;
  box-sizing: border-box;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #FFB703;
  border: none;
  border-radius: 8px;
  color: #222f5e;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #FFD166;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  h2 {
    margin: 0 0 1.5rem 0;
    font-size: 2rem;
    text-align: center;
    color: #423d6c;
  }
  
  label {
    font-size: 1rem;
    font-weight: 600;
    color: #222f5e;
    margin-bottom: 0.3rem;
    display: block;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #BEEBF9;
  font-size: 1.05rem;
  box-sizing: border-box;
  background-color: #F8FFFF;
  color: #423d6c;

  &:focus {
    outline: none;
    border-color: #8ECAE6;
    box-shadow: 0 0 0 3px rgba(142, 202, 230, 0.3);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #BEEBF9;
  font-size: 1.05rem;
  box-sizing: border-box;
  background-color: #F8FFFF;
  color: #423d6c;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238ECAE6'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px;

  &:focus {
    outline: none;
    border-color: #8ECAE6;
    box-shadow: 0 0 0 3px rgba(142, 202, 230, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #BEEBF9;
  font-size: 1.05rem;
  min-height: 100px;
  resize: vertical;
  box-sizing: border-box;
  background-color: #F8FFFF;
  color: #423d6c;

  &:focus {
    outline: none;
    border-color: #8ECAE6;
    box-shadow: 0 0 0 3px rgba(142, 202, 230, 0.3);
  }
`;

const SubmitButton = styled.button`
  background: #FF8A00;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1.5rem;
  box-shadow: 0 5px 15px rgba(255,138,0,0.25);
  transition: background-color 0.2s ease, transform 0.2s ease;
  
  &:hover {
    background: #FFB703;
    transform: translateY(-2px);
  }
`;

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    region: '',
    program: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('Submitting...');
    try {
      await addDoc(collection(db, "enquiries"), {
        ...formData,
        submittedAt: serverTimestamp()
      });
      setStatusMessage('Thank you! Your enquiry has been submitted.');
      setTimeout(() => {
        setFormData({ name: '', contact: '', region: '', program: '', message: '' });
        onClose();
        setStatusMessage('');
      }, 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatusMessage('An error occurred. Please try again.');
    }
  };

  return (
    <ModalOverlay $isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>CLOSE</CloseButton>
        <Form onSubmit={handleSubmit}>
          <h2>Admissions Open for AY 2025-26</h2>
          
          <label htmlFor="name">Name</label>
          <Input type="text" id="name" value={formData.name} onChange={handleChange} required />
          
          <label htmlFor="contact">Your Contact Number</label>
          <Input type="tel" id="contact" value={formData.contact} onChange={handleChange} required />
          
          <label htmlFor="region">Select Region</label>
          <Select id="region" value={formData.region} onChange={handleChange} required>
            <option value="">Select Region</option>
            <option value="Mira Road">Mira Road</option>
            <option value="Bhayandar">Bhayandar</option>
            <option value="Other">Other</option>
          </Select>
          
          <label htmlFor="program">Select Program</label>
          <Select id="program" value={formData.program} onChange={handleChange} required>
            <option value="">Select Program</option>
            <option value="Playgroup">Playgroup</option>
            <option value="Nursery">Nursery</option>
            <option value="Jr. KG">Jr. KG</option>
            <option value="Sr. KG">Sr. KG</option>
          </Select>
          
          <label htmlFor="message">Your Message (Optional)</label>
          <TextArea id="message" value={formData.message} onChange={handleChange} />
          
          {/* CORRECTED: The closing tag now matches the opening tag */}
          <SubmitButton type="submit">Submit</SubmitButton>
          
          {statusMessage && <p style={{ textAlign: 'center', marginTop: '1rem' }}>{statusMessage}</p>}
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
}