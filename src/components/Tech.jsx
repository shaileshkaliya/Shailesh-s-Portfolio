import React, { useState } from "react";
import { techStack } from "../constants/techList";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const TechStack = ({ name, list }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="w-fit relative">
      <h4 className="text-2xl text-white w-fit mb-2">{name}</h4>

      <Tilt>
        <div>
          <ul
            className="list-disc w-fit mb-1 px-4"
            options={{ max: 20, scale: 1, speed: 50 }}
          >
            {list[0].map((l) => (
              <li
                key={l}
                className=" text-sm text-[#ffffff85] hover:text-white"
              >
                {l}
              </li>
            ))}
          </ul>
        </div>
      </Tilt>
    </div>
  );
};
const Tech = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2
        className="text-4xl text-[#915eff6e] font-bold mb-4"
        style={{ WebkitTextStroke: "0.4px", WebkitTextStrokeColor: "white" }}
      >
        Technology Stack
      </h2>
      <motion.div className="w-full grid lg:grid-cols-4 justify-center md:grid-cols-3 px-12 gap-y-2 gap-x-4">
        <motion.span
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{
            opacity: 1,scale:1
          }}
          transition={{ duration: 0.2, delay: 0 }}
        >
          <TechStack name="Languages" list={techStack.Languages} />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{
            opacity: 1,scale:1
          }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <TechStack name="Artificial Intelligence" list={techStack.AI} />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{
            opacity: 1,scale:1
          }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          <TechStack name="Web Technologies" list={techStack.Web} />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{
            opacity: 1,scale:1
          }}
          transition={{ duration: 0.2, delay: 0.6 }}
        >
          <TechStack name="Databases" list={techStack.Databases} />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{
            opacity: 1,scale:1
          }}
          transition={{ duration: 0.2, delay: 0.8 }}
        >
          <TechStack name="CS Cores" list={techStack.Cores} />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale:0.8 }}
          whileInView={{
            opacity: 1,scale:1
          }}
          transition={{ duration: 0.2, delay: 1, scale:0.8 }}
        >
          <TechStack name="Developer Tools" list={techStack.Tools} />{" "}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Tech;
