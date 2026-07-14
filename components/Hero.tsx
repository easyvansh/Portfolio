import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffects";
import MagicButton from "./ui/MagicButton";
import { FaArrowDown, FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
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

      <div className="absolute left-1/2 top-0 h-screen w-screen -translate-x-1/2 bg-white bg-grid-black-100/[0.2] dark:bg-eerie_black-100 dark:bg-grid-silver-500/[0.05]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-eerie_black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 flex w-full justify-center">
        <div className="flex max-w-5xl flex-col items-center justify-center px-2 text-center">
          <p className="max-w-3xl py-4 text-xs font-medium uppercase tracking-[0.35em] text-silver-700 sm:text-sm">
            Somewhere between code, cinema, and chaos.
          </p>
          <a href="#contact">
            <TextGenerateEffect
              className="py-2 text-4xl sm:text-5xl lg:text-7xl"
              words="Building digital tools for curious minds."
            />
          </a>
          <p className="max-w-3xl py-3 text-sm leading-7 text-white-200 sm:text-base lg:text-xl">
            I&apos;m Vansh, a software engineer from the {" "}
            <a
              href="https://www.ualberta.ca"
              className="text-purple hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of Alberta
            </a>
             , with a background in Computer Science and Film Studies, I'm interested in creating software that helps explore ideas with less friction.
          </p>
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#projects">
              <MagicButton
                title="See the Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a
              href="#about"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/[0.14] px-6 text-sm font-medium text-white-200 transition hover:border-purple/60 hover:text-white"
            >
              About Me
              <FaArrowDown />
            </a>
          </div>
          <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
            {["Software Developer", "AI Enthusiast", "Film Nerd"].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-center text-sm text-white-200 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
