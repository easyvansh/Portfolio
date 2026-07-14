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
        "mx-auto grid grid-cols-1 gap-5 md:grid-cols-6 md:grid-rows-7 md:gap-6 lg:grid-cols-5",
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
  const leftLists = ["Software", "Systems", "AI", "Automation"];

  const rightLists = ["Cinema", "Interfaces", "Design", "Data"];

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("vansh2@ualberta.ca");
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex min-h-60 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] shadow-input transition duration-200",
        "hover:border-purple/30 hover:bg-white/[0.05] dark:shadow-none",
        className
      )}
    >
      <div
        className={cn(
          "relative h-full min-h-40",
          id === 6 && "flex justify-center"
        )}
      >
        {img && (
          <div className="absolute inset-0">
            <Image
              src={img}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={cn("object-cover object-center", imgClassName)}
            />
          </div>
        )}

        {spareImg && (
          <div
            className={cn(
              "absolute -bottom-3 right-0",
              id === 5 && "w-full opacity-70"
            )}
          >
            <Image
              src={spareImg}
              alt=""
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="pointer-events-none absolute inset-0 z-10" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            "relative z-20 flex h-full min-h-60 flex-col p-5 transition-transform duration-200 sm:p-6 lg:p-7",
            id === 3 ? "justify-between" : "justify-start",
            id === 6 && "items-center justify-center text-center",
            titleClassName
          )}
        >
          <div
            className={cn(
              "max-w-md text-[11px] font-medium uppercase leading-5 tracking-[0.18em] text-white/45 sm:text-xs",
              id === 1 && "max-w-xs",
              id === 2 && "max-w-sm",
              id === 3 && "max-w-[55%] sm:max-w-[58%]",
              id === 4 && "max-w-sm",
              id === 6 && "max-w-md"
            )}
          >
            {description}
          </div>

          <div
            className={cn(
              "mt-3 max-w-md text-xl font-semibold leading-tight text-white sm:text-2xl",
              id === 1 && "lg:text-3xl",
              id === 2 && "max-w-sm pb-6 sm:text-xl",
              id === 3 && "max-w-[55%] sm:max-w-[58%]",
              id === 4 && "sm:text-xl",
              id === 6 && "mt-3 text-center text-xl sm:text-2xl"
            )}
          >
            {title}
          </div>

          {id === 2 && (
            <div className="mt-auto">
              <GridGlobe />
            </div>
          )}

          {id === 3 && (
            <div className="mt-6 grid w-full grid-cols-2 gap-2.5 self-end sm:w-[68%]">
              <div className="flex flex-col gap-2.5">
                {leftLists.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/[0.07] bg-white/[0.045] px-3 py-2 text-center text-[10px] font-medium text-slate-200 sm:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2.5 pt-3">
                {rightLists.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/[0.07] bg-white/[0.045] px-3 py-2 text-center text-[10px] font-medium text-slate-200 sm:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="relative mt-4">
              {copied && (
                <div className="pointer-events-none absolute -top-8 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {["0s", "0.08s", "0.16s", "0.24s", "0.32s"].map(
                    (delay, index) => (
                      <span
                        key={delay}
                        className="h-1.5 w-1.5 animate-ping rounded-full bg-purple"
                        style={{
                          animationDelay: delay,
                          transform: `translateY(${index % 2 ? 4 : 0}px)`,
                        }}
                      />
                    )
                  )}
                </div>
              )}

              <MagicButton
                title={copied ? "Email copied" : "Copy email"}
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
