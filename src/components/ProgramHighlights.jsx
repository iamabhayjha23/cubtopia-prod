// src/components/ProgramHighlights.jsx
import styled from 'styled-components';

const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 0 1rem 3rem 1rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const Card = styled.div`
  flex: 1 1 260px;
  min-width: 230px;
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 3px 15px rgba(33,158,188,.09);
  padding: 2rem 1rem;
  text-align: center;
  h3 {
    color: #219ebc; font-weight: bold; font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

export default function ProgramHighlights() {
  return (
    <Cards>
      <Card>
        <h3>Preschool &amp; Pre-K</h3>
        <p>Play-based programs that spark a love of learning.</p>
      </Card>
      <Card>
        <h3>Summer Wondercamp</h3>
        <p>Discovery, play, friendship, and fun all summer!</p>
      </Card>
      <Card>
        <h3>Part-time Daycare</h3>
        <p>Flexible schedules designed for busy families.</p>
      </Card>
    </Cards>
  );
}
