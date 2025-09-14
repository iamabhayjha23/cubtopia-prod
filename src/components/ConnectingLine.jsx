// src/components/ConnectingLine.jsx
import React, { useRef } from 'react'; // 1. Import useRef
import styled from 'styled-components';
import { motion, useScroll } from 'framer-motion';

const SVGWrapper = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9faff;
  position: relative; /* 2. Added position: relative to fix the warning */
`;

export default function ConnectingLine() {
  const ref = useRef(null); // 3. Create a ref to target the container
  
  // 4. Track scroll progress relative to THIS component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // Animation starts when bottom enters view, ends when top leaves
  });

  return (
    // 5. Attach the ref to the wrapper
    <SVGWrapper ref={ref}> 
      <svg width="100" height="200" viewBox="0 0 100 200">
        <motion.path
          d="M 50,0 Q 80,50 50,100 T 50,200"
          fill="transparent"
          stroke="#8ECAE6"
          strokeWidth="4"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </SVGWrapper>
  );
}