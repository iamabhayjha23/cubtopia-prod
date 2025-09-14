// src/pages/CurriculumPage.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import curriculumHeroImage from '../assets/curriculum-hero.png';
import curriculumIllustration from '../assets/curriculum-illustration.png';
import { FaChild, FaPaintBrush } from 'react-icons/fa';

// ... (All styled-components are the same)
const PageWrapper = styled.div`
  padding-top: 80px;
`;

const PageHero = styled.div`
  height: 40vh;
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${curriculumHeroImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 0 2rem;
  
  h1 {
    font-size: 3rem;
    font-family: 'Poppins', sans-serif;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }
  
  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin-top: 0.5rem;
  }
`;

const ContentSection = styled.section`
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    color: #1e293b;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #475569;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
`;

const StyledIllustration = styled(motion.img)`
  max-width: 500px;
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-bottom: 4rem;
`;

const AccordionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AccordionItem = styled.div`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  overflow: hidden;
`;

const AccordionHeader = styled(motion.div)`
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  
  h3 {
    margin: 0;
    font-size: 1.3rem;
    color: #423d6c;
    display: flex;
    align-items: center;
    gap: 1rem;
    text-align: left;
  }

  svg.icon {
    color: #2ca5cf;
    font-size: 1.5rem;
    flex-shrink: 0;
  }
`;

const AccordionContent = styled(motion.div)`
  padding: 0 1.5rem 1.5rem 1.5rem;
  color: #475569;
  line-height: 1.7;
  text-align: left;
  
  h4 {
    color: #FB8500;
    margin-top: 1.5rem;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

export default function CurriculumPage() {
  // 1. State now holds an array of open indexes, starting with both open ([0, 1]).
  const [openIndexes, setOpenIndexes] = useState([0, 1]);

  const curriculumData = [
    { 
      icon: FaChild, 
      title: "Montessori-Inspired Curriculum", 
      subtitle: "Empowering Self-Directed Learning",
      description: "The Montessori approach is based on the belief that children learn best when they can make choices, engage in self-directed activities, and explore at their own pace...",
      elements: ["Independent Learning", "Hands-On Materials", "Practical Life Skills"],
      outcome: "Children become independent, confident learners, developing self-discipline and a love for learning."
    },
    { 
      icon: FaPaintBrush, 
      title: "Reggio Emilia-Inspired Curriculum", 
      subtitle: "Learning Through Inquiry and Expression",
      description: "The Reggio Emilia approach focuses on the idea that children learn best when they are given the opportunity to explore topics that interest them, ask questions, and express their understanding in creative ways...",
      elements: ["Project-Based Learning", "Documentation of Learning", "Creative Expression"],
      outcome: "Children develop deep, reflective thinking, creativity, and a sense of ownership in their learning."
    }
  ];

  // 2. Click handler now adds or removes an index from the array.
  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index)); // Close item
    } else {
      setOpenIndexes([...openIndexes, index]); // Open item
    }
  };

  return (
    <PageWrapper>
      <PageHero>
        <h1>Our Core Curriculum</h1>
        <p>Beyond books—Skills that last a lifetime.</p>
      </PageHero>

      <ContentSection>
        <h2>Curriculum Framework: Our Core Philosophies</h2>
        <p>
          Our curriculum is a fusion of several proven educational methodologies, creating a dynamic, interconnected learning experience. We believe that learning should be meaningful, engaging, and based on the natural curiosity of children. We make sure our kids are high-school ready, with a program that lines up with all the major boards - State board, CBSE, ICSE, and IB. Your child’s future is in great hands with us!
        </p>
        
        <StyledIllustration 
          src={curriculumIllustration}
          alt="Illustration of children learning and playing"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        
        <AccordionWrapper>
          {curriculumData.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionHeader onClick={() => handleToggle(index)}>
                <h3>
                  <item.icon className="icon" />
                  {item.title}
                </h3>
                {/* 3. Visibility is now checked using array.includes(). */}
                <motion.span animate={{ rotate: openIndexes.includes(index) ? 180 : 0 }}>▲</motion.span>
              </AccordionHeader>
              <AnimatePresence>
                {openIndexes.includes(index) && (
                  <AccordionContent
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <h4>{item.subtitle}</h4>
                    <p>{item.description}</p>
                    <h4>Key Elements:</h4>
                    <ul>
                      {item.elements.map((element, i) => <li key={i}>{element}</li>)}
                    </ul>
                    <h4>Outcome:</h4>
                    <p>{item.outcome}</p>
                  </AccordionContent>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </AccordionWrapper>
      </ContentSection>
    </PageWrapper>
  );
}