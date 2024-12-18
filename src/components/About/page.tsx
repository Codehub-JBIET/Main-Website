import React from 'react';
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import Image from 'next/image';
import logo from '../../../public/logo.jpg'
import { useSelector } from 'react-redux';

const About = () => {
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <>
      <section className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        } relative w-full py-16 flex flex-col items-center md:mt-0 px-12 border-t border-gray-800`} id="about">
        <motion.div variants={textVariant()} className="w-full text-center mb-8">
          <h2 className='font-bold text-4xl'>About</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
          <motion.div variants={textVariant()} className="md:w-1/2">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-4 text-secondary text-[15px] max-w-3xl leading-[30px]'
            >
              CODEHUB JBIET is your gateway to the world of technology and coding! We are a dynamic technical club dedicated to fostering your passion for tech through hands-on workshops, exciting hackathons, and collaborative projects. Whether you're new to coding or a seasoned programmer, CODEHUB offers you the chance to learn from industry experts, tackle real-world challenges, and connect with fellow tech enthusiasts. Join us to enhance your skills, explore innovative solutions, and be part of a community that's driving the future of technology!
            </motion.p>
          </motion.div>

          <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden">
              <Image
                src={logo}
                alt="CodeHub Logo"
                className="w-full h-full object-contain"
                priority
                sizes="(max-width: 768px) 192px, 320px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;