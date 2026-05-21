"use client";

import { useState } from "react";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";

import { cn } from "@/lib/utils";
import MagicButton from "./MagicButton";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GridGlobe } from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-7 lg:grid-cols-5 lg:gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Frontend", "Backend", "AI/ML"];
  const rightLists = ["Systems", "Design", "Media"];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "vansh2@ualberta.ca";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex min-h-64 flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.14] shadow-input transition duration-200 hover:-translate-y-1 hover:border-purple/40 hover:shadow-xl dark:shadow-none",
        className
      )}
      style={{
        background: "#0c0c0c",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn("h-full", id === 6 && "flex justify-center")}>
        <div className="absolute h-full w-full">
          {img && (
            <Image
              src={img}
              alt={img}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={cn(
            "absolute -bottom-5 right-0",
            id === 5 && "w-full opacity-80"
          )}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-semibold px-4 pointer-events-none text-2xl text-center md:text-3xl lg:text-4xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "relative flex min-h-48 flex-col p-5 transition duration-200 group-hover/bento:translate-x-1 md:h-full lg:p-10"
          )}
        >
          <div
            className={`z-10 py-2 text-sm font-light text-slate-300 md:max-w-40 md:text-xs lg:text-base ${
              id === 2 || id === 3 || id === 4 ? "md:max-w-96 md:text-base" : ""
            }`}
          >
            {description}
          </div>
          <div
            className={`z-10 max-w-96 text-xl font-bold leading-tight lg:text-3xl ${
              id === 2
                ? "pb-10 lg:text-2xl"
                : id === 6
                  ? "text-center text-2xl text-white md:text-2xl lg:text-2xl"
                  : ""
            }`}
          >
            {title}
          </div>
          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="absolute -right-3 bottom-5 flex w-fit gap-1 lg:-right-1 lg:gap-2">
              <div className="flex flex-col gap-2 md:gap-2 lg:gap-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-70 lg:px-4 lg:py-3 lg:text-base lg:opacity-90"
                  >
                    {item}
                  </span>
                ))}
                <span className="rounded-lg bg-[#10132E] px-3 py-4 text-center lg:px-4 lg:py-3"></span>
              </div>
              <div className="flex flex-col gap-2 md:gap-2 lg:gap-3">
                <span className="rounded-lg bg-[#10132E] px-3 py-4 text-center lg:px-4 lg:py-3"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-70 lg:px-4 lg:py-4 lg:text-base lg:opacity-90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {copied && (
                <div className="pointer-events-none absolute -top-10 left-1/2 flex -translate-x-1/2 gap-2">
                  {["0s", "0.08s", "0.16s", "0.24s", "0.32s"].map(
                    (delay, index) => (
                      <span
                        key={delay}
                        className="h-2 w-2 animate-ping rounded-full bg-purple"
                        style={{
                          animationDelay: delay,
                          transform: `translateY(${index % 2 ? 6 : 0}px)`,
                        }}
                      />
                    )
                  )}
                </div>
              )}

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
