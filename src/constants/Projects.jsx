import CourseConnect from "../assets/project/cc1.png";
import EchoCare from "../assets/project/vbprs1.png";
import rapidRaid from "../assets/project/RapidRaid1.png";
import portfolio from "../assets/project/portfolio1.png";

let projectList = [
  {
    title: "Course Connect",

    description:
      "A centralized platform for streamlining the search process for learners by providing a diverse array of almost 6500+ top-rated courses from various online learning platforms.",

    features: [
      "Incorporated the project with MERN(MongoDB,Express JS, React JS, Node JS) stack using the session storage.",
      "Employeed Tensorflow Universal Sentence Encoder model for NLP based recommendations, Pandas, Numpy (Python libraries), for dataset preparation.",
    ],

    techStack: [
      "React JS",
      "MongoDB",
      "Node JS",
      "Express JS",
      "Email JS",
      "FastAPI",
      "Tensorflow-hub",
      "Python",
    ],

    icon: CourseConnect,

    repoLink: "https://github.com/shaileshkaliya/CourseConnect.git",
  },

  {
    title: "EchoCare",

    description:
      "A voice recognition project, built for multi-speciality hospitals to overcome the cons of traditional registration systems by reducing registration time by 40% to 50%.",

    features: [
      "Incorporated the project using HTML, CSS, JavaScript and Webkit Speech API.",
      "Implemented the Web Speech API to incorporate 2 features : Speech recognition and Speech Synthesis.",
    ],

    techStack: ["HTML5", "CSS3", "JavaScript", "WebkitSpeech API", "NodeJS"],

    icon: EchoCare,

    repoLink: "https://github.com/shaileshkaliya/EchoCare.git",
  },

  {
    title: "RapidRaid : Kabaddi Automation System",

    description:
      "Developed a streamlined Kabaddi Points Table System to modernize local league scoring, efficiently counting various point types such as tackle, raid, bonus, and super raid, while seamlessly storing match results in a file for enhance management.",

    features: [
      "Utilized C++ Object Oriented Programming principles for the implementation along with file reading, writing operations.",
      "Resulted in reducing score calculation time and winner declaration time up to 50%.",
    ],

    techStack: ["C++", "Object Oriented Program(OOP)"],

    icon: rapidRaid,

    repoLink:
      "https://github.com/shaileshkaliya/RaidRapid-Kabaddi-Scoring-Automation.git",
  },

  {
    title: "My Portfolio",

    description:
      "This is my portfolio showing digital space to get a glimpse of my journey, skills, and projects.",

    features: [
      "React.js: Crafted with the power of React for a dynamic and seamless user experience.",
      "Tailwind CSS: Styled using Tailwind for a sleek, responsive, and modern design.",
      "Three.js: Leveraged the capabilities of Three.js to bring interactive 3D elements to life.",
    ],

    techStack: [
      "React JS",
      "Tailwind CSS",
      "Three JS",
      "Framer Motion",
      "Email JS",
    ],

    icon: portfolio,

    repoLink: "#",
  },
];

import calci from "../assets/project/calci.png";
import todo from "../assets/project/todos.png";
import chatbot from "../assets/project/chatbot.png";
import contact from "../assets/project/contact.png";

let moreProjects = [
  {
    name: "HackMatrix Chatbot",
    description:
      "A chatbot for an organization which can anser all question related to it.Made it using Python chatterbot library.",
    icon: chatbot,
    repoLink:'https://github.com/shaileshkaliya/HackMatrix-ChatBot'
  },

  {
    name: "Calculator",
    description: "A basic project for practising HTML, CSS and JavaScript.",
    icon: calci,
    repoLink:'https://github.com/shaileshkaliya/Calculator'
  },

  {
    name: "Contact List",
    description:
      "A web tool for storing all contacts. A project for making hand on CRUD opeartions in React.",
    icon: contact,
    repoLink:'https://github.com/shaileshkaliya/Web-Contacts'
  },
];

export { projectList, moreProjects };
