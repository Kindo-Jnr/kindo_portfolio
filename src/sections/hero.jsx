import { words } from "../constants";
import Button from "../components/Button";
import React, { useState, useEffect } from "react";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const focusWords = ["Developer", "Kindo"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % focusWords.length);
    }, 1500); // change word every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* Left Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 z-50">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>

              <p className="text-white-50 md:text-xl text-sm relative z-10 ">
                Hi, I'm Kindo, a front-end developer from Wa, Ghana.
              </p>
              {/* Focus Word Animation */}
              <div className="flex gap-4 mt-4 text-4xl  font-semibold focus">
                {focusWords.map((word, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 transition-all duration-100 ${
                      activeIndex === index
                        ? "text-white border-x-4 border-cyan-400"
                        : "text-gray-400 blur"
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </div>

              <Button
                className="md:w-80 md:h-16 w-60 h-12 mt-4 text-sm"
                id="button"
                text="See my work"
              />
            </div>
          </div>
        </header>

        {/* Right #D Model */}
        <figure className="">
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
