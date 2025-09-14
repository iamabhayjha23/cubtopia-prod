// src/components/Logo.jsx
function Logo() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '1.2rem',
      padding: '0.5rem 1rem',
      minWidth: '230px'
    }}>
      <img
        src="/src/assets/logo.png" // Replace with your logo path
        alt="School Logo"
        style={{ height: '80px', width: '80px' }}
      />
      <div>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontFamily: 'Poppins, Arial, sans-serif', letterSpacing: '0.022em' }}>THE <br/> CUBTOPIA <br/> SCHOOL</h2>
      </div>
    </div>
  );
}
export default Logo;
