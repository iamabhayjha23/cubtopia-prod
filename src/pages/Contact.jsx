function Contact() {
  return (
    <section className="section">
      <h1>Contact Us</h1>
      <p>
        Questions? Schedule a tour or reach out to our staff using the form below.
      </p>
      <form style={{ maxWidth: '450px', marginTop: '2rem' }}>
        <label>
          Name:<br />
          <input type="text" name="name" required style={{ width:'100%', padding:'0.5rem' }} />
        </label>
        <br /><br />
        <label>
          Email:<br />
          <input type="email" name="email" required style={{ width:'100%', padding:'0.5rem' }} />
        </label>
        <br /><br />
        <label>
          Message:<br />
          <textarea name="message" required rows="4" style={{ width:'100%', padding:'0.5rem' }} />
        </label>
        <br /><br />
        <button type="submit" style={{ background:'#A2DDF7', border:'none', padding:'0.7rem 2rem', borderRadius:'8px', fontWeight:'bold' }}>
          Send
        </button>
      </form>
    </section>
  );
}
export default Contact;
