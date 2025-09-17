// src/pages/HomePage.jsx
import Hero from "../components/Hero";
import HeroCarousel from "../components/HeroCarousel";
import FoundationSection from "../components/FoundationSection";
import OurBeliefs from "../components/OurBeliefs";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import AnimatedSection from "../components/AnimatedSection";
import FloatingButton from "../components/FloatingButton";
import EnquiryModal from '../components/EnquiryModal';
import HorizontalScroll from "../components/HorizontalScroll";

import Facilities from "../components/Facilities";

// Note: We pass openModal as a prop from App.jsx now
export default function HomePage({ openModal }) {
  return (
    <>
      <HeroCarousel />
      
      <Facilities></Facilities>
      <FoundationSection></FoundationSection>
      <OurBeliefs />
      
      <AnimatedSection>
        <Features />
        <HorizontalScroll></HorizontalScroll>
      </AnimatedSection>
      <Testimonials />
      <FloatingButton onClick={openModal} />
    </>
  );
}