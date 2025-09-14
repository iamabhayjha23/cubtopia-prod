// src/components/AnimatedSection.jsx
import { motion } from 'framer-motion';

export default function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{}} 
    >
      {children}
    </motion.div>
  );
}