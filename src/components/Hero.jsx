// src/components/Hero.jsx
import styled from 'styled-components';
// 1. Import the necessary hooks from framer-motion
import { motion, useScroll, useTransform } from 'framer-motion';
import heroPhoto from '../assets/hero-photo.jpg';

const Section = styled.section`
  width: 100%;
  min-height: 440px;
  background: #f6faff;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding-top: 80px;
  position: relative; /* This is crucial for positioning the blobs */
  overflow: hidden; /* This prevents blobs from showing outside the section */
  
  @media (max-width: 900px) {
    flex-direction: column;
    min-height: 0;
  }
`;

// 2. Create the styled-components for the background blobs
const Blob = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px); /* This makes them soft and blurry */
  z-index: 0; /* Ensures they are in the background */
`;

// 3. Ensure the main content has a higher z-index to stay in front
const Left = styled(motion.div)`
  flex: 1 1 420px;
  display: flex;
  align-items: stretch;
  background: #fff;
  border-top-left-radius: 2.2rem;
  border-bottom-left-radius: 2.2rem;
  overflow: hidden;
  position: relative; /* Add position and z-index */
  z-index: 2;

  @media (max-width: 900px) {
    border-radius: 0;
    min-height: 220px;
    justify-content: center;
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-width: 240px;
  min-height: 340px;
  @media (max-width: 900px) {
    min-height: 180px;
    max-height: 260px;
    border-radius: 0 0 1.5rem 1.5rem;
  }
`;

const Right = styled.div`
  flex: 2 1 430px;
  padding: 3.5rem 3rem 3.5rem 3rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; /* Add position and z-index */
  z-index: 2;

  @media (max-width: 900px) {
    padding: 2rem 1.2rem;
  }
`;

const CTAButton = styled(motion.a)`
  background: #f47216;
  color: #fff;
  padding: 1rem 2.1rem;
  border-radius: 2rem;
  font-weight: 700;
  font-size: 1.1rem;
  display: inline-block;
  text-decoration: none;
  box-shadow: 0 5px 20px rgba(244,114,22,0.08);
`;

const headlineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Hero() {
  // 4. Set up the scroll tracking and transformations
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Moves down slowly
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Moves up faster

  return (
    <Section>
      {/* 5. Add the animated blobs to the background */}
      <Blob style={{ y: y1, top: '10%', left: '-10%', width: '300px', height: '300px', background: '#8ECAE6' }} />
      <Blob style={{ y: y2, top: '50%', right: '-15%', width: '400px', height: '400px', background: '#FFB703' }} />

      <Left initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        <Image
          src={heroPhoto}
          alt="Happy preschool child"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Left>
      <Right>
        <motion.h1 
          style={{ fontSize: "2.5rem", color: "#222f5e", fontWeight: "bold", marginBottom: ".9rem" }}
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span style={{ display: 'block' }} variants={wordVariants}>INNOVATIVE</motion.span>
          <motion.span style={{ display: 'block' }} variants={wordVariants}>PRESCHOOL</motion.span>
          <motion.span style={{ display: 'block' }} variants={wordVariants}>SOLUTIONS</motion.span>
        </motion.h1>
        
        <motion.div 
          style={{ fontSize: "1.32rem", color: "#234078", fontWeight: "400", margin: "0 0 1.2rem 0", maxWidth: 410 }}
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Best practices from Finland
        </motion.div>
        
        <CTAButton
          href="/book-demo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Book demo
        </CTAButton>
      </Right>
    </Section>
  );
}