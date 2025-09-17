// src/components/Facilities.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBusAlt, FaFutbol, FaHome, FaChalkboardTeacher } from 'react-icons/fa';

const SectionWrapper = styled.section`
  padding: 5rem 2rem;
  background-color: #f9faff;
`;

const TextCenter = styled(motion.div)`
  text-align: center;
  margin: 0 auto 4rem;
  max-width: 600px;
  h1 {
    font-size: 2.8rem;
    color: #1e293b;
    margin-bottom: 1rem;
    font-family: 'Poppins', sans-serif;
  }
  p {
    font-size: 1.1rem;
    color: #64748b;
    line-height: 1.7;
  }
`;

const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BottomCircle = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: ${props => props.$bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  /* Semi-transparent overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    transition: background 0.5s ease;
    z-index: -1;
  }

  h3, p {
    transition: color 0.5s ease;
    color: ${props => props.$textColor};
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const TopCircle = styled.div`
  position: absolute;
  top: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${props => props.$bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: ${props => props.$iconColor};
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  z-index: 2;
  transition: color 0.5s ease;

  /* Semi-transparent overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    transition: background 0.5s ease;
    z-index: -1;
  }
`;

const FacilityItem = styled(motion.div)`
  position: relative;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;

  /* This is the hover magic */
  &:hover {
    ${TopCircle}::before, ${BottomCircle}::before {
      background: transparent;
    }
    ${TopCircle}, ${BottomCircle} h3, ${BottomCircle} p {
      color: white !important;
    }
  }
`;


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  },
};

export default function FacilitiesSection() {
  const facilitiesData = [
    { icon: FaBusAlt, title: "School Bus", text: "Safe and reliable transport to ensure your child arrives happy and ready to learn.", colors: { top: '#FE5D37', bottom: '#FE5D37', text: '#FE5D37', icon: '#FE5D37' } },
    { icon: FaFutbol, title: "Playground", text: "Spacious and secure play areas that encourage physical activity and social interaction.", colors: { top: '#198754', bottom: '#198754', text: '#198754', icon: '#198754' } },
    { icon: FaHome, title: "Healthy Canteen", text: "Nutritious and delicious meals prepared daily to fuel growing bodies and minds.", colors: { top: '#ffc107', bottom: '#ffc107', text: '#ffc107', icon: '#ffc107' } },
    { icon: FaChalkboardTeacher, title: "Positive Learning", text: "Inspiring classrooms designed to foster creativity, collaboration, and a love for learning.", colors: { top: '#0dcaf0', bottom: '#0dcaf0', text: '#0dcaf0', icon: '#0dcaf0' } },
  ];

  return (
    <SectionWrapper>
      <TextCenter
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
      >
        <h1>School Facilities</h1>
        <p>We provide a range of modern facilities to ensure a safe, comfortable, and stimulating learning environment for every child.</p>
      </TextCenter>
      <GridContainer
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {facilitiesData.map((item, index) => (
          <FacilityItem key={index} variants={itemVariants}>
            <BottomCircle $bgColor={item.colors.bottom} $textColor={item.colors.text}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </BottomCircle>
            <TopCircle $bgColor={item.colors.top} $iconColor={item.colors.icon}>
              <item.icon />
            </TopCircle>
          </FacilityItem>
        ))}
      </GridContainer>
    </SectionWrapper>
  );
}