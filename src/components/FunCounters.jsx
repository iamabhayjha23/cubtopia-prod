// src/components/FunCounters.jsx
import CountUp from 'react-countup';
import { FaSmile, FaUserTie, FaChalkboardTeacher } from 'react-icons/fa';

const stats = [
  { icon: <FaSmile size={26} color="#ffd166"/>, label: "Happy Kids", value: 220 },
  { icon: <FaUserTie size={26} color="#54b689"/>, label: "Caring Staff", value: 18 },
  { icon: <FaChalkboardTeacher size={26} color="#5669ff"/>, label: "Fun Classes", value: 40 },
];

export default function FunCounters() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', gap: "5rem", margin: "3.5rem 0"
    }}>
      {stats.map(({ icon, label, value }) => (
        <div style={{ textAlign: "center" }} key={label}>
          <div>{icon}</div>
          <div style={{ fontSize: "2.4rem", fontWeight: 700, color: "#fa678f", margin: ".5rem 0" }}>
            <CountUp end={value} duration={2} />
          </div>
          <div style={{fontWeight:500}}>{label}</div>
        </div>
      ))}
    </div>
  );
}
