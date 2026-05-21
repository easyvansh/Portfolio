import { projects } from "@/data";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <section id="projects" className="scroll-mt-28">
      <div className="py-12 md:py-20">
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

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="flex min-h-[30rem] items-center justify-center"
            >
              <CardContainer className="inter-var w-full">
                <CardBody className="group/card relative h-full w-full overflow-hidden rounded-2xl border border-white/[0.12] bg-eerie_black-200 p-5 transition before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(203,172,249,0.14),transparent_32%)] before:opacity-0 before:transition before:duration-300 hover:border-purple/50 hover:before:opacity-100 dark:border-white/[0.16] dark:hover:shadow-2xl dark:hover:shadow-purple/[0.12] sm:p-6">
                  <CardItem
                    translateZ="35"
                    className="mb-4 flex w-full items-center justify-between gap-3"
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
                    className="line-clamp-1 text-2xl font-bold"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="line-clamp-4 min-h-24 text-sm font-light leading-6 lg:text-base"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {project.des}
                  </CardItem>
                  <CardItem translateZ="80" className="my-5 w-full">
                    <Image
                      src={project.img}
                      height={1000}
                      width={1000}
                      className="h-56 w-full rounded-xl border border-white/[0.08] object-cover group-hover/card:shadow-xl"
                      alt={project.title}
                      priority={index < 3}
                    />
                  </CardItem>
                  <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <CardItem
                      translateZ={20}
                      className="rounded-xl text-xs font-normal dark:text-white"
                    >
                      <div className="flex items-center">
                        {project.iconLists.map((icon, iconIndex) => (
                          <div
                            key={iconIndex}
                            className="border border-white/[.2] rounded-full bg-black lg:w-11 lg:h-11 w-10 h-10 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * iconIndex + 2}px)`,
                            }}
                          >
                            <Image
                              src={icon}
                              alt={`icon-${iconIndex}`}
                              width={44}
                              height={44}
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
                      className="rounded-xl bg-white px-4 py-3 text-xs font-bold text-black transition hover:bg-purple"
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
