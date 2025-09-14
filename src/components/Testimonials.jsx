import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#338a55" }}>
        Hear from our Parents!
      </h2>
      <div className="testimonial-row">
        <div className="testimonial-card">
          <FaQuoteLeft className="testimonial-quote" />
          <p>
            Milo’s House has made such a huge difference to my daughter’s knowledge of sounds and letters.
            She has begun spelling and writing with confidence, and was reading books within weeks of starting!
            <b> My daughter loves attending class each week.</b>
          </p>
        </div>
        <div className="testimonial-card">
          <FaQuoteLeft className="testimonial-quote" />
          <p>
            Beau started Milo’s House at the start of the year and I am so impressed with his progress.
            He is confidently sounding words out and showing keen interest in literacy.
            <b> Milo’s House has played a big role in his preparation for school.</b>
          </p>
        </div>
        <div className="testimonial-card">
          <FaQuoteLeft className="testimonial-quote" />
          <p>
            We have been so impressed by how much Layla has learnt.
            It is wonderful to see her confidence growing, and she adores her teacher Helen!
            <b> She always looks forward to her lessons at Milo’s House!</b>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
