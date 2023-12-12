import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import Typewriter from "./Typewritter";
import icon1 from "../assets/backend.png";
import icon2 from "../assets/mobile.png";
import icon3 from "../assets/web.png";
import icon4 from "../assets/creator.png";
import Mine from "../assets/mine.jpeg";
import "./about.css";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const services = [
  {
    imgsrc: icon1,
    title: "Web Developer",
  },
  {
    imgsrc: icon2,
    title: "MERN Stack Developer",
  },
  {
    imgsrc: icon3,
    title: "Machine Learning Engineer",
  },
  {
    imgsrc: icon4,
    title: "Java Enthusiast",
  },
];
const About = () => {
  return (
    <div className="w-full flex flex-col md:ps-8 px-4 py-[78px]">
      <motion.div>
        <motion.p
          className="text-[#aaa6c3] text-md md:text-xl"
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          Introduction
        </motion.p>
        <motion.p
          className="text-white text-4xl md:text-5xl mt-2"
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.7 }}
        >
          Overview
        </motion.p>
      </motion.div>

      <motion.div className="mt-8 lg:h-[300px] lg:flex lg:flex-row-reverse lg:justify-end">
        <div className="w-full flex flex-col justify-between items-center profile-pic-div ">
          <div className="overflow-hidden h-full 	">
            <motion.img
              src={Mine}
              alt="Profile"
              className="w-60 profile-pic-img"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "tween", duration: 0.7 }}
            />
          </div>
          <div className="flex justify-center gap-6 w-full items-center	">
            <button className="resume-btn rounded-lg my-4 lg:my-2">
              <span>
                {" "}
                <a
                  href="https://drive.google.com/file/d/13bJfsdq_yADtGZqTtfkkI2yZIYTZonwg/view?usp=sharing"
                  target="_blank"
                >
                  Download Resume{" "}
                </a>
              </span>
            </button>
            <a
              href="https://www.linkedin.com/in/shailesh-kaliya/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a href="https://github.com/shaileshkaliya" target="_blank">
              <GitHubIcon />
            </a>
          </div>
        </div>

        <p className="max-w-[750px] lg:max-w-[750px] text-sm md:text-lg flex justify-center leading-32 text-[#ffffff85]">
          <Typewriter
            delay={5}
            text="
          I am a B.Tech 3rd-year student at Pimpri Chinchwad College of
          Engineering, Pune, specializing in computer science. With a strong
          foundation in Data Structures and Algorithms (DSA), I have honed my
          skills in React.js development and expanded my proficiency to include
          Java. My passion lies in crafting elegant and efficient websites using
          React.js, while my interest in machine learning and data science fuels
          my desire to integrate advanced technologies seamlessly into web
          applications. As a dynamic contributor to the evolving landscape of
          technology, I am committed to clean coding and continuous learning,
          aiming to deliver innovative solutions that bridge the realms of web
          development and AI."
          />
        </p>
      </motion.div>

      <div className="w-full flex justify-evenly flex-wrap">
        {services.map((service, index) => (
          <ServiceCard
            imgsrc={service.imgsrc}
            title={service.title}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
