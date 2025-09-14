// src/components/ProgramCards.jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBookOpen, FaPalette, FaMusic, FaPuzzlePiece } from 'react-icons/fa';

const programs = [
  { icon: <FaBookOpen size={38} color="#54b689"/>, title: 'Literacy', desc: 'Fun reading, writing & storytelling' },
  { icon: <FaPalette size={38} color="#f5a623"/>, title: 'Creative Arts', desc: 'Painting, crafts & drawing' },
  { icon: <FaPuzzlePiece size={38} color="#5669ff"/>, title: 'STEM', desc: 'Hands-on science, numbers & blocks' },
  { icon: <FaMusic size={38} color="#fa678f"/>, title: 'Music & Movement', desc: 'Rhythm, dance & musical play' },
];

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin: 3rem 0;
`;

export default function ProgramCards() {
  return (
    <CardGrid>
      {programs.map((p, i) =>
        <motion.div
          key={p.title}
          whileHover={{ scale: 1.07, rotate: -2 + i*2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "#fff",
            padding: "2.5rem 1.6rem",
            borderRadius: "2.3rem",
            minWidth: 220,
            maxWidth: 280,
            boxShadow: "0 4px 18px rgba(33,158,188,0.09)",
            textAlign: "center",
            cursor: "pointer"
          }}
        >
          <div>{p.icon}</div>
          <h3 style={{ color: "#5669ff", margin: "1rem 0 .5rem", fontWeight: 700 }}>{p.title}</h3>
          <p style={{ color: '#444' }}>{p.desc}</p>
        </motion.div>
      )}
    </CardGrid>
  );
}
