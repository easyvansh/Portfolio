import { projects } from "@/data";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className=" my-10 py-10">
        <h1 className="heading">
          A Glimpse into <span className="text-purple">My Recent Projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-6 gap-x-40 gap-y-24 mt-10 lg:max-w-full ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="lg:min-h-[30rem] h-[28rem] flex items-center justify-center sm:w-96 w-auto"
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-inherit dark:border-white/[0.2] border-black/[0.1] sm:w-[32rem] h-auto rounded-xl p-10 border">
                  <CardItem
                    as="h1"
                    translateZ="50"
                    className="font-bold lg:text-3xl md:text-2xl text-base line-clamp-1"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {project.des}
                  </CardItem>
                  <CardItem translateZ="80" className="w-full my-4">
                    <Image
                      src={project.img}
                      height={1000}
                      width={1000}
                      className="h-60 w-full object-cover rounded-3xl group-hover/card:shadow-xl"
                      alt={project.title}
                      priority={index < 3}
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
                            className="border border-white/[.2] rounded-full bg-black lg:w-11 lg:h-11 w-10 h-10 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * iconIndex + 2}px)`,
                            }}
                          >
                            <img
                              src={icon}
                              alt={`icon-${iconIndex}`}
                              className="p-2"
                            />
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
                        Check Out Project
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
