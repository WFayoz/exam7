import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/imgs/heroBg.png";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      heading: "LET'S MAKE A BETTER PLANET",
      text: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
      imgSrc: heroBg,
    },
    {
      heading: "LET'S MAKE A BETTER PLANET",
      text: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
      imgSrc: heroBg,
    },
    {
      heading: "LET'S MAKE A BETTER PLANET",
      text: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
      imgSrc: heroBg,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="slider w-full h-full relative overflow-hidden bg-[#fafafa]">
      <div
        className="slides flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide min-w-full flex px-10 items-center justify-between"
          >
            <div>
              <div className="text-neutral-700 text-sm font-medium uppercase leading-none tracking-wider">
                Welcome to GreenShop
              </div>
              <h1 className="text-neutral-700 leading-tight text-[70px] font-black">
                {slide.heading.split(" ").map((word, i) =>
                  word === "PLANET" ? (
                    <span key={i} className="text-green-500">
                      {word}{" "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
              </h1>
              <p className="w-[557px] h-[45px] leading-relaxed text-neutral-500 text-sm font-normal font-['Cera Pro'] leading-normal">
                {slide.text}
              </p>
              <Link to="./shop">
                <button className="text-white mt-11 w-[140px] h-10 bg-green-500 rounded-md text-base font-bold uppercase leading-tight">
                  shop now
                </button>
              </Link>
            </div>
            <div className="w-[518px] h-[518px]">
              <img src={slide.imgSrc} alt="Hero Background" />
            </div>
          </div>
        ))}
      </div>
      <div className="dots flex justify-center mt-4 absolute bottom-4 w-full">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot w-4 h-4 mx-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
