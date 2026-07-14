import { projects } from "@/data";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <section id="projects" className="scroll-mt-28">
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-purple">
            Selected Work
          </p>
          <h1 className="heading mt-4">
            Projects shaped by curiosity, systems, and useful interfaces.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white-200 md:text-base">
            A mix of product experiments, information tools, mobile interfaces,
            and recommendation systems. The thread is simple: make digital
            systems feel clearer, calmer, and more intentional.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-9">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="flex min-h-[28rem] items-stretch justify-center"
            >
              <CardContainer className="inter-var w-full">
                <CardBody className="group/card relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-eerie_black-200 p-5 transition before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(203,172,249,0.14),transparent_32%)] before:opacity-0 before:transition before:duration-300 hover:border-purple/50 hover:before:opacity-100 dark:border-white/[0.16] dark:hover:shadow-2xl dark:hover:shadow-purple/[0.12] sm:p-6">
                  <CardItem
                    translateZ="35"
                    className="mb-3 flex w-full items-center justify-between gap-3"
                  >
                    <span className="rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.2em] text-white-200">
                      {project.signal}
                    </span>
                    <span className="text-xs font-semibold text-purple">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </CardItem>
                  <CardItem
                    as="h1"
                    translateZ="50"
                    className="line-clamp-1 text-xl font-semibold sm:text-2xl"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm font-light leading-6 lg:text-[15px]"
                    style={{
                      color: "#BEC1DD",
                    }}
                  >
                    {project.des}
                  </CardItem>
                  <CardItem translateZ="80" className="mt-5 w-full">
                    <Image
                      src={project.img}
                      height={1000}
                      width={1000}
                      className="h-48 w-full rounded-xl border border-white/[0.08] object-cover group-hover/card:shadow-xl sm:h-52"
                      alt={project.title}
                      priority={index < 3}
                    />
                  </CardItem>
                  <div className="mt-auto flex flex-col gap-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <CardItem
                      translateZ={20}
                      className="rounded-xl text-xs font-normal dark:text-white"
                    >
                      <div className="flex items-center pl-2">
                        {project.iconLists.map((icon, iconIndex) => (
                          <div
                            key={iconIndex}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[.2] bg-black lg:h-10 lg:w-10"
                            style={{
                              transform: `translateX(-${4 * iconIndex + 2}px)`,
                            }}
                          >
                            <Image
                              src={icon}
                              alt={`icon-${iconIndex}`}
                              width={40}
                              height={40}
                              unoptimized
                              className="p-2"
                            />
                          </div>
                        ))}
                      </div>
                    </CardItem>

                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-black transition hover:bg-purple"
                    >
                      <div className="flex justify-center items-center">
                        Open Project
                        <FaLocationArrow className="ms-3" color="#CBACc5" />
                      </div>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
