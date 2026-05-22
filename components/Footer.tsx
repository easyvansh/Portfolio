import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer
      className="relative w-full overflow-hidden pb-10 pt-20 lg:pt-32"
      id="contact"
    >
      <div className="absolute -bottom-72 left-1/2 min-h-96 w-screen -translate-x-1/2">
        <Image
          src="/footer-grid.svg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h3 className="heading max-w-3xl">
         Good technology should feel invisible.
        </h3>
        <p className="my-5 max-w-2xl text-center text-sm leading-7 text-white-200 md:mt-8 md:text-base">
          I am always happy to talk about software projects, product ideas,
          internships, full-stack systems, AI tooling, or clean interface work.
        </p>
        <div className="relative my-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="mailto:vansh2@ualberta.ca">
            <MagicButton
              title="Start a Conversation"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a href="/Master_Resume.pdf" download="Vansh-Singh-Resume-2026.pdf">
            <MagicButton
              title="View Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a
            href="https://thefifthwall.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Read the Blog"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/[0.08] pt-8 md:flex-row">
        <p className="text-sm font-light text-white-200 md:text-base md:font-normal">
          Copyright &copy; 2026 Vansh Singh
        </p>

        <div className="flex items-center gap-4">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg saturate-180 transition hover:-translate-y-0.5 hover:border-purple/60"
            >
              <Image src={info.img} alt="social link" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
