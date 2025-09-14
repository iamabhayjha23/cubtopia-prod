// src/components/TestimonialsSlider.jsx
import Slider from "react-slick";

const testimonials = [
  { text: "We love this school! Our child flourishes every day.", author: "Priya S." },
  { text: "Teachers are so dedicated and warm.", author: "Amit D." },
  { text: "Best decision we made for our family!", author: "Leah K." }
];

export default function TestimonialsSlider() {
  const settings = {
    dots: true, infinite: true, speed: 600,
    slidesToShow: 1, slidesToScroll: 1, autoplay: true, arrows: false
  };
  return (
    <div style={{ maxWidth: 600, margin: "3rem auto" }}>
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i} style={{
            padding: "2.5rem 2rem", background: "#fff", borderRadius: "2.2rem",
            boxShadow: "0 2px 16px rgba(86,105,255,0.09)", minHeight: 160
          }}>
            <p style={{ fontSize: "1.28rem", fontStyle: "italic" }}>"{t.text}"</p>
            <div style={{ color: "#5669ff", fontWeight: "700", marginTop: "1.1rem" }}>{t.author}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
