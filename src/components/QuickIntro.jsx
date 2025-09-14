// src/components/QuickIntro.jsx
import styled from "styled-components";

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 2.8rem 1rem 1.5rem 1rem;
  color: #023047;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #ffb703;
  font-weight: bold;
`;
export default function QuickIntro() {
  return (
    <Section>
      <Title>Discover the Joy of Learning</Title>
      <p>
        Our nurturing classrooms and educators offer programs for infants to school-age students, helping children thrive as natural-born scientists and thinkers!
      </p>
    </Section>
  );
}

