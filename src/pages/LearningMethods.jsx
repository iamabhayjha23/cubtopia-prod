// src/pages/LearningMethodsPage.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import methodsHeroImage from '../assets/methods-hero.png';
import { FaPuzzlePiece, FaUserGraduate, FaHeart, FaFutbol, FaFlask } from 'react-icons/fa';

// NOTE: All styled-components are the same as in CurriculumPage.jsx
const PageWrapper = styled.div`
  padding-top: 80px;
`;

const PageHero = styled.div`
  height: 40vh;
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${methodsHeroImage});
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

export default function LearningMethodsPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const learningMethodsData = [
    { 
      icon: FaPuzzlePiece, 
      title: "Play-Based Learning", 
      subtitle: "Building Skills Through Exploration and Interaction",
      description: "Play-Based Learning is fundamental because play is an essential avenue for both learning and development. Children learn cognitive, social, and emotional skills by engaging in both structured and unstructured play.",
      elements: ["Imaginative Play", "Active Play", "Sensory Play"],
      outcome: "Children develop creativity, problem-solving skills, emotional intelligence, and the ability to work well with others."
    },
    { 
      icon: FaUserGraduate, 
      title: "Skill-Based Learning", 
      subtitle: "Core Competencies for Success",
      description: "Our Skill-Based Learning approach focuses on building key competencies that children will need for lifelong success. These competencies go beyond academic knowledge and include critical thinking, emotional regulation, communication, and collaboration.",
      elements: ["Cognitive Skills", "21st Century Skills", "Social-Emotional Skills", "Physical Skills"],
      outcome: "Children develop essential skills that will serve them in school and in life, including emotional intelligence and the ability to work collaboratively."
    },
    { 
      icon: FaHeart, 
      title: "Value Education", 
      subtitle: "Cultivating Moral Character and Social Responsibility",
      description: "We believe that Value Education is central to a child’s holistic development. Teaching values such as kindness, responsibility, respect, fairness, and environmental awareness is integrated into daily learning experiences.",
      elements: ["Character Education", "Cultural Awareness and Inclusivity", "Environmental Stewardship", "Conflict Resolution"],
      outcome: "Children grow to become responsible, compassionate individuals who understand the importance of making ethical choices."
    },
    { 
      icon: FaFutbol, 
      title: "Physical Activity", 
      subtitle: "Building Strong Bodies and Minds",
      description: "Physical development is crucial to a child’s growth, and we ensure that Physical Activity is embedded into the daily routine. Children are provided with opportunities to develop both fine and gross motor skills.",
      elements: ["Gross Motor Skills", "Fine Motor Skills", "Yoga and Movement", "Dance and Rhythm"],
      outcome: "Children develop physical strength, coordination, and self-regulation, which enhances their ability to focus and learn."
    },
    { 
      icon: FaFlask, 
      title: "STEM-Based Learning", 
      subtitle: "Fostering Curiosity and Innovation",
      description: "Our curriculum incorporates a strong emphasis on STEM (Science, Technology, Engineering, and Mathematics), aimed at developing curiosity and critical thinking skills.",
      elements: ["Science Exploration", "Technology Integration", "Engineering and Building", "Mathematical Thinking"],
      outcome: "Children develop problem-solving skills, curiosity about the natural world, and the ability to think critically and analytically."
    }
  ];

  return (
    <PageWrapper>
      <PageHero>
        <h1>Our Learning Methods</h1>
      </PageHero>

      <ContentSection>
        <h2>A Dynamic Approach to Growth</h2>
        <p>
          At Cubtopia, we believe learning is not a one-size-fits-all process. Our methods are designed to support the holistic development of every child, focusing on their cognitive, social, emotional, and physical well-being through a variety of engaging, research-backed approaches.
        </p>
        
        <AccordionWrapper>
          {learningMethodsData.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionHeader onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <h3>
                  <item.icon className="icon" />
                  {item.title}
                </h3>
                <motion.span animate={{ rotate: openIndex === index ? 180 : 0 }}>▲</motion.span>
              </AccordionHeader>
              <AnimatePresence>
                {openIndex === index && (
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