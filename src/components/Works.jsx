import React, { useState } from "react";
import { Tilt } from "react-tilt";
import port from "../assets/project/portfolio1.png";
import github from "../assets/github.png";
import { projectList, moreProjects } from "../constants/Projects";
import ryticon from "../assets/right.png";
import { motion } from "framer-motion";

const ProjectCard = ({ proj, index }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Tilt>
      <motion.div
        className="min-h-[350px] max-w-[300px] bg-tertiary rounded-xl p-2"
        initial={{ x: -200, opacity: 0, scale: 0.8 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: "50",
          damping: 10,
          mass: 0.75,
          delay: index * 1,
        }}
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        {!isHover ? (
          <div>
            <div>
              <img src={proj.icon} alt="" className="rounded-xl mb-2" />
            </div>
            <h2 className="text-white font-bold text-lg mb-1 text-center">
              {proj.title}
            </h2>
            <div>
              <p className="text-secondary text-sm mb-1">{proj.description}</p>
              <p className="text-secondary text-sm">
                {proj.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={
                      index % 4 === 0
                        ? "blue-text-gradient"
                        : index % 4 === 1
                        ? "green-text-gradient"
                        : index % 4 === 2
                        ? "pink-text-gradient"
                        : "text-yellow-700"
                    }
                  >
                    #{tech}{" "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ) : (
          <div
            className="px-6 flex flex-col justify-center h-[350px] items-center"
            options={{
              max: 25,
              scale: 1,
              speed: 450,
              easing: "cubic-bezier(.03,.98,.52,.99)",
              perspective: 5000,
            }}
          >
            <div className="cursor-pointer mb-1">
              <a href={proj.repoLink} target="_blank">
                <img src={github} alt="" className="w-[32px]" />
              </a>
            </div>
            <ul className="text-secondary list-disc">
              {proj.features.map((f) => (
                <li>{f}</li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </Tilt>
  );
};

const MoreProjectcard = ({ proj }) => {
  return (
    <div className="flex items-center gap-2 relative border border-slate-800 p-2 rounded-xl">
      <img src={proj.icon} alt=".." className="w-[32px]" />
      <div>
        <h3 className="text-[15px]">{proj.name}</h3>
        <p className="text-[10px] text-[#ffffff85] w-40 md:w-56">
          {proj.description}
        </p>
      </div>
      <a href={proj.repoLink} target="_blank">
        <img
          src={ryticon}
          alt=">"
          className="w-[24px] absolute right-0 hover:w-[28px]"
        />
      </a>
    </div>
  );
};

const Works = () => {
  return (
    <div className="px-16 w-full mt-8 box-border py-[79px]">
      <motion.h4
        className="text-sm text-[#ffffff85] mb-1 md:text-md"
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        MY WORK{" "}
      </motion.h4>
      <motion.h2
        className="text-4xl mb-8 md:text-5xl"
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0 }}
      >
        Projects.
      </motion.h2>

      <div className="w-full">
        <motion.p
          className="text-[#ffffff85] text-sm md:text-lg max-w-[700px] mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        >
          Following projects showcases my skills and experiences through
          real-world examples of my work. Each project is briefly described with
          links to code repositories. It reflects my ability to solve complex
          problems, work with different technologies and manage projects
          efficiently.
        </motion.p>

        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 justify-center">
          {projectList.map((proj, index) => (
            <ProjectCard proj={proj} key={index} />
          ))}
          <motion.div
            className="min-h-[350px] max-w-[300px] bg-tertiary text-white flex flex-col rounded-xl pb-2"
            initial={{ x: -200, opacity: 0, scale: 0.8 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: "50",
              damping: 10,
              mass: 0.75,
              delay: 0,
            }}
          >
            <p className="text-xl p-4">More Projects...</p>
            <ul className="flex flex-col gap-4 justify-evenly h-full px-1">
              {moreProjects.map((proj, index) => (
                <MoreProjectcard proj={proj} key={index} />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Works;
