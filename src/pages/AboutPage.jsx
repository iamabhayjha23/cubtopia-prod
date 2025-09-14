
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


import aboutHeroImage from '../assets/about-hero.png';

const PageWrapper = styled.div`
  padding-top: 80px; /* Space for the fixed navbar */
`;

const AboutHero = styled.div`
  height: 40vh;
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${aboutHeroImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  
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
    text-align: left;
    margin-bottom: 2rem;
  }
`;

const StatementsSection = styled.div`
  background-color: #f9faff;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const StatementBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0,0,0,0.07);
  flex: 1;
  max-width: 500px;
  border-left: 6px solid #8ECAE6; /* Blue accent */

  h3 {
    font-size: 1.8rem;
    color: #423d6c;
    margin-top: 0;
  }

  p, li {
    font-size: 1.05rem;
    color: #475569;
    line-height: 1.7;
    text-align: left;
  }
  
  ul {
    padding-left: 20px;
    list-style: none;
  }

  li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 0.5rem;
  }
  
  li::before {
    content: '✔';
    position: absolute;
    left: 0;
    color: #2ca5cf;
  }
`;

const TeamSection = styled(ContentSection)`
  background-color: white; /* Changed from f9faff for contrast */
`;

// Removed TeamGrid and TeamMemberCard styled-components as they are no longer used
// const TeamGrid = styled.div`...`;
// const TeamMemberCard = styled(motion.div)`...`;

export default function AboutPage() {
  return (
    <PageWrapper>
      <AboutHero>
        <h1>Our Story & Mission</h1>
      </AboutHero>

      <ContentSection>
        <h2>A Warm Welcome to Cubtopia Early Learning</h2>
        <p>
          At Cubtopia Early Learning, we believe that every child deserves the very best start in life, and that begins with exceptional early education. We offer premium care and learning experiences for children aged six months to nine years, guided by their unique interests, developmental needs, and potential. Our centres are purposefully designed to be inspiring, nurturing environments where children feel confident, capable, and ready to explore. With a strong focus on education, wellbeing, and meaningful relationships, we partner closely with families to support each child’s individual journey, from their first day to their transition to school.
        </p>
        <h2>Our Inspiration</h2>
        <p>
          At our preschool, we are inspired by the simple yet powerful dream of creating the kind of school we would want for our own children — a place where every child feels safe, valued, and inspired to grow. We believe that the values and morals nurtured at this early stage become the foundation for life, shaping children into kind, confident, and responsible individuals. Our aim is not only to prepare them for the next steps in their academic journey, but also to guide them in becoming compassionate human beings who will carry these lessons throughout their lives.
        </p>
      </ContentSection>

      <StatementsSection>
        <StatementBox>
          <h3>Vision Statement</h3>
          <p>“To nurture curious, confident, and compassionate lifelong learners by providing a joyful and safe environment where every child’s individuality is celebrated.”</p>
        </StatementBox>
        <StatementBox style={{ borderLeftColor: '#FFB703' }}>
          <h3>Mission Statement</h3>
          <ul>
            <li>Create a warm, stimulating, and inclusive learning space that fosters creativity, exploration, and a love for learning.</li>
            <li>Support holistic development by focusing on cognitive, emotional, social, and physical growth through play-based and skill-based learning.</li>
            <li>Partner with families and the community to build strong foundations for future academic success and responsible citizenship.</li>
            <li>Encourage values of respect, kindness, and collaboration to help children grow into caring individuals.</li>
          </ul>
        </StatementBox>
      </StatementsSection>

      <TeamSection>
        <h2>Our Educators</h2>
        <p style={{ textAlign: 'center' }}>
          Cubtopia educators are passionate professionals who bring experience, warmth, and dedication to their roles every day. More than just teachers, they are mentors and trusted guides on each child’s early learning journey.
        </p>
        {/* The TeamGrid component and its children have been removed */}
      </TeamSection>
    </PageWrapper>
  );
}