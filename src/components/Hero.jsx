import { motion } from "framer-motion";
import Typewriter from "./Typewritter";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <motion.h1 className={`${styles.heroHeadText} text-white`}
            initial={{opacity:0}} animate={{opacity:1}} transition={{type:'tween', duration:3}}
          >
            Hi, I'm <span className='text-[#915EFF]'>Shailesh</span>
          </motion.h1>
          <motion.p className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{opacity:0}} animate={{opacity:1}} transition={{type:'tween',duration:1,delay:1}}
          >
            I am a web developer along with keen interest in <br className='sm:block hidden' />
            Java & Machine Learning.
          </motion.p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-8 bottom-12 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[25px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start '>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;