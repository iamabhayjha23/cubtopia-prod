// src/pages/Home.jsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import AnimatedSection from "../components/AnimatedSection";
import ProgramCards from "../components/ProgramCards";
import FunCounters from "../components/FunCounters";
import TestimonialsSlider from "../components/TestimonialsSlider";
import OurBeliefs from "../components/OurBeliefs"; 
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <OurBeliefs />
      <AnimatedSection>
        
      </AnimatedSection>
      <AnimatedSection>
        <ProgramCards />
      </AnimatedSection>
      <AnimatedSection>
        <FunCounters />
      </AnimatedSection>
      <AnimatedSection>
        <TestimonialsSlider />
      </AnimatedSection>
      {/* The <WhatChildWillLearn /> component was removed here for debugging */}
      <Footer />
    </>
  );
}