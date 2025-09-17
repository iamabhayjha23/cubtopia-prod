// src/components/Hero.jsx
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// Import your carousel images from the assets folder
//import heroCarousel1 from '../assets/carousel-1.jpg';
//import heroCarousel2 from '../assets/carousel-2.jpg';
//import heroCarousel3 from '../assets/carousel-3.jpg';

const Section = styled.section`
  width: 100%;
  height: 90vh; /* You can control the exact height of the hero section here */
  position: relative;
  overflow: hidden;

  /* Styling for the react-slick slider itself */
  .slick-slider, .slick-list, .slick-track, .slick-slide > div {
    height: 100%;
  }

  .slick-dots {
    bottom: 25px;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: white;
    opacity: 0.75;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
  }
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  /* This is the key part: the image is now a background */
  background-image: url(${props => props.$imgSrc});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Dark overlay for text readability */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  max-width: 800px;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledButton = styled(Link)`
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &.primary {
    background-color: #f47216;
    color: white;
    border-color: #f47216;
  }

  &.secondary {
    background-color: transparent;
    color: white;
    border-color: white;
  }

  &:hover {
    background-color: white;
    color: #023047;
    transform: translateY(-3px);
  }
`;

export default function Hero() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  const slidesData = [
    {
      imgSrc: heroCarousel1,
      title: "The Best Preschool For Your Child",
      subtitle: "A place where little minds blossom and curiosity leads the way to a bright future.",
    },
    {
      imgSrc: heroCarousel2,
      title: "Make A Brighter Future For Your Child",
      subtitle: "Our play-based curriculum and nurturing environment build a strong foundation for lifelong learning.",
    },
    {
      imgSrc: heroCarousel3,
      title: "A World of Fun & Discovery Awaits",
      subtitle: "We create joyful experiences that spark creativity and build confidence in every child.",
    },
  ];

  return (
    <Section>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <Slide key={index} $imgSrc={slide.imgSrc}>
            <Overlay>
              <Title>{slide.title}</Title>
              <Subtitle>{slide.subtitle}</Subtitle>
              <ButtonGroup>
                <StyledButton to="/about" className="primary">Learn More</StyledButton>
                <StyledButton to="/programs" className="secondary">Our Programs</StyledButton>
              </ButtonGroup>
            </Overlay>
          </Slide>
        ))}
      </Slider>
    </Section>
  );
}