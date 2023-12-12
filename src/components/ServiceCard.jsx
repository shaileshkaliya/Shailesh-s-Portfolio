import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

const ServiceCard = ({index, title, imgsrc}) => {
  return (
    <Tilt>
        <motion.div
            initial={{x:-120, scale:0}}
            whileInView={{x:0, scale:0.75}}
            transition={{type:'spring', stiffness:30, delay:index*0.5, ease: "easeOut"}}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card m-2"
        >
            <div 
                options={{max:45, scale:1, speed:450}}
                className="min-w-[250px] min-h-[250px] flex flex-col justify-evenly items-center bg-[#151030] rounded-[20px]"
            >
                <img src={imgsrc} alt="" className="w-12 " />
                <h3 className="text-xl text-center font-semibold max-width-[50px]">{title}</h3>
            </div>
        </motion.div>
    </Tilt>
  )
}

export default ServiceCard