// src/components/OurBeliefs.jsx
import styled from 'styled-components';
import beliefsPhoto from '../assets/beliefs-photo.png'; // Make sure this is your transparent PNG
import { FaShieldAlt, FaUserTie, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BeliefsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f9faff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1100px;
  width: 100%;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextColumn = styled(motion.div)`
  flex: 1.5;
  color: #334155;

  h1 {
    font-size: 2.5rem;
    color: #1e293b;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;

    strong {
      color: #023047;
    }
  }
`;

const KnowMoreButton = styled(motion.a)`
  background: #f47216;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  font-weight: 700;
  font-size: 1rem;
  display: inline-block;
  text-decoration: none;
  box-shadow: 0 5px 20px rgba(244,114,22,0.15);
  margin-top: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 120%;
    height: 90%;
    border: 3px solid #e0eaf3;
    border-radius: 50%;
    transform: rotate(-15deg);
    z-index: 1; 
  }
`;

const StyledMotionImage = styled(motion.img)`
  width: 100%;
  max-width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  position: relative;
  z-index: 2; 
  /* REMOVED: The box-shadow that created the faint transparent border */
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); */
  border: none; 
`;

const FeaturesRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1100px;
  width: 100%;
  
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureCard = styled.div`
  background: #ffffff;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.05);
  flex: 1;
  max-width: 320px;

  svg {
    font-size: 2.5rem;
    color: #2ca5cf;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.25rem;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  p {
    color: #475569;
    line-height: 1.5;
  }
`;

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function OurBeliefs() {
  return (
    <BeliefsSection>
      <ContentWrapper>
        <TextColumn
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1 variants={textItemVariants}>Us and our beliefs</motion.h1>
          <motion.p variants={textItemVariants}>
            A paradigm shift in the world calls for a paradigm shift in the way we impart education. Building a happy childhood is an essential part of our culture. We work towards recognizing a little one's interests and abilities and giving them complete freedom to fly in our limitless spaces.
          </motion.p>
          <motion.p variants={textItemVariants}>
            We focus on developing 4 important C's: <strong>Critical thinking, Creativity, Collaboration and Communication</strong> using fun and comfortable techniques that provide your little one a wholesome learning experience.
          </motion.p>
          <KnowMoreButton variants={textItemVariants} href="/about">KNOW MORE</KnowMoreButton>
        </TextColumn>
        <ImageColumn>
          <StyledMotionImage 
            src={beliefsPhoto} 
            alt="A creative and fun preschool play area" 
            initial={{ scale: 0.9 }} 
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }} 
            viewport={{ once: false, amount: 0.6 }} 
          />
        </ImageColumn>
      </ContentWrapper>
      
      <FeaturesRow>
        <FeatureCard>
          <FaShieldAlt />
          <h3>Safe Environment</h3>
          <p>Our top priority is your child's safety, with secure facilities and vigilant staff.</p>
        </FeatureCard>
        <FeatureCard>
          <FaUserTie />
          <h3>Expert Teachers</h3>
          <p>Our passionate educators are trained in modern early childhood development.</p>
        </FeatureCard>
        <FeatureCard>
          <FaPalette />
          <h3>Creative Curriculum</h3>
          <p>We foster curiosity and growth through play-based learning and artistic expression.</p>
        </FeatureCard>
      </FeaturesRow>
    </BeliefsSection>
  );
}