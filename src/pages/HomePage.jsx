// src/pages/HomePage.jsx
import Hero from "../components/Hero";
import FoundationSection from "../components/FoundationSection";
import OurBeliefs from "../components/OurBeliefs";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import AnimatedSection from "../components/AnimatedSection";
import FloatingButton from "../components/FloatingButton";
import EnquiryModal from '../components/EnquiryModal';
import HorizontalScroll from "../components/HorizontalScroll";
import ConnectingLine from "../components/ConnectingLine";

// Note: We pass openModal as a prop from App.jsx now
export default function HomePage({ openModal }) {
  return (
    <>
      <Hero />
      <FoundationSection></FoundationSection>
      <OurBeliefs />
      <ConnectingLine></ConnectingLine>
      <AnimatedSection>
        <Features />
        <HorizontalScroll></HorizontalScroll>
      </AnimatedSection>
      <Testimonials />
      <FloatingButton onClick={openModal} />
    </>
  );
}