// src/components/HorizontalScroll.jsx
import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const SectionWrapper = styled.section`
  position: relative;
  background: #023047;
`;

const TallContainer = styled.div`
  height: 300vh;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
`;

const ScrollTrack = styled(motion.div)`
  height: 100%;
  width: 300%;
  display: flex;
  align-items: center;
`;

// ADDED BACK: The missing 'Card' styled-component
const Card = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  color: white;

  h2 {
    font-size: 3rem;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    max-width: 500px;
    text-align: center;
    line-height: 1.6;
  }
`;

// ADDED BACK: The missing 'Circle' styled-component
const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: #2ca5cf;
  opacity: 0.1;
  z-index: 0;
`;

export default function HorizontalScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);
  
  const programs = [
    {
      title: "Integrated Program",
      description: "A comprehensive learning experience that blends structured education with creative play, preparing children for all-round success."
    },
    {
      title: "Preschool Program",
      description: "Our core program focuses on building foundational skills in literacy, numeracy, and social interaction in a joyful, nurturing environment."
    },
    {
      title: "Daycare Program",
      description: "A safe, stimulating, and caring 'home away from home' where children can grow, play, and learn under the guidance of our expert educators."
    }
  ];

  return (
    <SectionWrapper>
      <motion.div ref={targetRef} style={{ position: 'relative' }}>
        <TallContainer>
          <StickyContainer>
            <Circle style={{ width: '400px', height: '400px', top: '10%', left: '5%' }}/>
            <Circle style={{ width: '200px', height: '200px', top: '60%', left: '70%' }}/>
            <ScrollTrack style={{ x }}>
              {programs.map((program, index) => (
                <Card key={index}>
                  <h2>{program.title}</h2>
                  <p>{program.description}</p>
                </Card>
              ))}
            </ScrollTrack>
          </StickyContainer>
        </TallContainer>
      </motion.div>
    </SectionWrapper>
  );
}