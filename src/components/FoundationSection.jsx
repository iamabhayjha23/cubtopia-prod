// src/components/FoundationSection.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChild, FaUserFriends, FaTree } from 'react-icons/fa';
import foundationPhoto from '../assets/foundation-photo.png';

const SectionWrapper = styled.section`
  padding: 5rem 2rem;
  background-color: #f9faff;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ImageColumn = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BlueCircle = styled.div`
  width: 100%;
  max-width: 450px;
  aspect-ratio: 1 / 1;
  background-color: #023047;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(2, 48, 71, 0.2);
`;

const ChildImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: auto;
`;

const FeaturesColumn = styled.div`
  flex: 1;
  
  h2 {
    font-size: 2.5rem;
    font-family: 'Poppins', sans-serif;
    color: #1e293b;
    margin-bottom: 3rem;
  }
`;

// UPDATED: Simplified list styling
const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Spacing between items */
`;

// UPDATED: Simplified item styling (no longer absolutely positioned)
const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  .icon-wrapper {
    background: white;
    padding: 1rem;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    font-size: 2rem;
    color: #2ca5cf;
    flex-shrink: 0;
  }

  span {
    font-size: 1.2rem;
    font-weight: 600;
    color: #423d6c;
  }
`;

// REMOVED: The SvgPathWrapper styled-component is no longer needed

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

export default function FoundationSection() {
  const features = [
    { icon: FaChild, text: "Skill-based Curriculum" },
    { icon: FaUserFriends, text: "Personalised Learning" },
    { icon: FaTree, text: "Imaginative Environment" },
  ];

  return (
    <SectionWrapper>
      <ContentContainer
        as={motion.div}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ImageColumn variants={itemVariants}>
          <BlueCircle>
            <ChildImage src={foundationPhoto} alt="Child playing happily" />
          </BlueCircle>
        </ImageColumn>

        <FeaturesColumn>
          <motion.h2 variants={itemVariants}>Building the foundation of a happy childhood</motion.h2>

          <FeatureList>
            {/* REMOVED: The SvgPathWrapper component and the SVG path */ }
            
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                variants={itemVariants}
              >
                <div className="icon-wrapper"><feature.icon /></div>
                <span>{feature.text}</span>
              </FeatureItem>
            ))}
          </FeatureList>

        </FeaturesColumn>
      </ContentContainer>
    </SectionWrapper>
  );
}