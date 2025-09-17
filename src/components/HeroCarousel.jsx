// src/components/HeroCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export default function HeroCarousel() {
  // Settings for the slider to match the template's behavior
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  // We'll store the content from your HTML in this easy-to-manage array
  const slidesData = [
    {
      imgSrc: "/img/carousel-1.jpg",
      title: "The Best Preschool For Your Child",
      text: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
    },
    {
      imgSrc: "/img/carousel-2.jpg",
      title: "Make A Brighter Future For Your Child",
      text: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
    }
  ];

  return (
    <div className="container-fluid p-0 mb-5">
      <Slider {...settings} className="header-carousel position-relative">
        {slidesData.map((slide, index) => (
          <div key={index}>
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src={slide.imgSrc} alt="" />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .2)' }}>
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h1 className="display-2 text-white animated slideInDown mb-4">{slide.title}</h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">{slide.text}</p>
                      <Link to="/about" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
                      <Link to="/classes" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}