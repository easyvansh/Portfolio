import { projects } from "@/data";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-32 mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {project.des}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full my-4">
                    <Image
                      src={project.img}
                      height={1000}
                      width={1000}
                      className="h-60 w-full object-cover rounded-3xl group-hover/card:shadow-xl"
                      alt={project.title} // Use project title or relevant description
                      priority={index < 3} // Optional: Load the first few images with higher priority
                    />
                  </CardItem>
                  <div className="flex items-center justify-between mt-7 mb-3">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={project.link}
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      <div className="flex items-center">
                        {project.iconLists.map((icon, iconIndex) => (
                          <div
                            key={iconIndex}
                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * iconIndex + 2}px)`,
                            }}
                          >
                            <img src={icon} alt={`icon-${iconIndex}`} className="p-2" />
                          </div>
                        ))}
                      </div>
                    </CardItem>

                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <div className="flex justify-center items-center">
                        Check Live Site
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
