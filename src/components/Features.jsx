// src/components/Features.jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHome, FaSmileBeam, FaRocket } from 'react-icons/fa';

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f9faff;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 3rem;
  font-family: 'Poppins', sans-serif;
`;

const CardsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled(motion.div)`
  background: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.06);
  flex: 1;
  max-width: 350px;
  border-top: 8px solid;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* PERFORMANCE BOOST: Tell the browser to optimize for these changes */
  will-change: transform, opacity;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
  }

  &:nth-child(1) { border-color: #FFB703; }
  &:nth-child(2) { border-color: #8ECAE6; }
  &:nth-child(3) { border-color: #FB8500; }

  svg {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  
  &:nth-child(1) svg { color: #FFB703; }
  &:nth-child(2) svg { color: #8ECAE6; }
  &:nth-child(3) svg { color: #FB8500; }
  
  h3 {
    font-size: 1.5rem;
    color: #1e293b;
    margin-bottom: 0.75rem;
    font-family: 'Poppins', sans-serif;
  }

  p {
    color: #475569;
    line-height: 1.6;
    font-size: 1rem;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Features() {
  return (
    <FeaturesSection>
      <SectionHeading>Our World of Wonder</SectionHeading>
      <CardsContainer
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        // Ensure "once" is false to re-animate every time
        viewport={{ once: false, amount: 0.3 }}
      >
        <Card variants={cardVariants}>
          <FaHome />
          <h3>A Cozy & Safe Den</h3>
          <p>Our top priority is creating a secure and comfortable space where every cub can feel happy and protected.</p>
        </Card>
        <Card variants={cardVariants}>
          <FaSmileBeam />
          <h3>Friendly Adventure Guides</h3>
          <p>Our passionate teachers aren't just instructors; they're friendly guides for your child's learning journey.</p>
        </Card>
        <Card variants={cardVariants}>
          <FaRocket />
          <h3>Learning Through Play</h3>
          <p>We believe in the power of imagination! Our activities are designed to be fun, creative, and full of discovery.</p>
        </Card>
      </CardsContainer>
    </FeaturesSection>
  );
}