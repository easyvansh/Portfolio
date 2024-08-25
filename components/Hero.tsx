import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffects";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative h-screen"> 
      <div className="relative">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="silver"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full "
          fill="purple"
        />
        <Spotlight className="left-80 top-16 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-eerie_black-100 bg-white dark:bg-grid-silver-500/[0.05] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-eerie_black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative top-72 z-10"> {/* Removed my-20 to prevent extra space */}
        <div className="max-w-[89vw] md:max-w-2xl md:max-h-50 lg:max-w-[80vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-sm text-center text-silver-700 max-w-100 py-5">
            Crafting Tools that Shape Tomorrow, Today
          </p>
          <a href="#contact">
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl py-5"
              words="One Commit At A Time, Simple"
            />
          </a>
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-xl lg:text-3xl py-4">
            Heyo! I&apos;m Vansh!
          </p>
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl py-5">
            An Undergraduate Student at{" "}
            <a
              href="https://www.ualberta.ca"
              className="text-purple hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of Alberta
            </a>
            , always ready to turn challenges into adventures.
          </p>
          <a href="#about">
            <MagicButton title="Explore My World" icon={<FaLocationArrow />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
