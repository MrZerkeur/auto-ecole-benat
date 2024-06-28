"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';


interface Slide {
    imageUrl: string;
    title: string;
    text: string;
  }
  
  interface HorizontalSlideProps {
    slides: Slide[];
  }
  
  const HorizontalSlide: React.FC<HorizontalSlideProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };
  
    const currentSlide = slides[currentIndex];
  
    return (
      <div className="horizontal-slide-container">
        <button onClick={handlePrev}>
        <FontAwesomeIcon icon={faAngleLeft} color="#1940C5" size="4x" /> 
        </button>
        <div className="slide">
            <div className='img-stuff-regulation'>
                <div>
                <img src={currentSlide.imageUrl} alt={currentSlide.title} className='img-showcase-regulation'/>
                </div>
            </div>
          <div className='regulating-stuff'>
            <div>
                <h3>{currentSlide.title}</h3>
            </div>
            <div>
                <p>{currentSlide.text}</p>
            </div>
          </div>
        </div>
        <button onClick={handleNext}>
        <FontAwesomeIcon icon={faAngleRight} color="#1940C5" size="4x" /> 
        </button>
      </div>
    );
  };
  
  export default HorizontalSlide;