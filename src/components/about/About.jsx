import { useRef } from 'react';
import './about.scss';
import { motion, useScroll, useSpring } from 'framer-motion';

const About = () => {
  const varients = {
    initials: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="about">
      <div className="container">
        <div className="upperContainer">
          <p>
            A breif description about me
            <br /> get know who I am
          </p>
          <hr />
        </div>
        <div className="titleContainer">
          <h1>About me</h1>
          <hr />
        </div>
        <motion.div
          className="wrapper"
          variants={varients}
          initial={'initials'}
          whileInView={'animate'}
        >
          <motion.div className="imageWrapper" variants={varients}>
            <motion.img src="me_2.jpg" alt="" variants={varients} />
          </motion.div>
          <motion.div className="textWrapper" variants={varients}>
            <motion.h1>Hasith Malshan Rathnayake</motion.h1>
            <motion.p>
              Hello! I'm Hasith Malshan, a passionate Full-stack Developer with
              a keen interest in Java-based development and proficiency in the
              MERN stack. My journey in the world of programming has been both
              educational and exploratory, allowing me to build a robust skill
              set in languages such as Java, JavaScript, and PHP. My expertise
              is further complemented by my knowledge of databases like MySQL.
              As someone who thrives on solving complex problems, I have a deep
              understanding of object-oriented programming concepts, data
              structures, and algorithms, which form the backbone of my
              development approach.
            </motion.p>
            <motion.p>
              Currently, I am a dedicated student at the Java Institute for
              Advanced Technology, where I have gained a strong foundation in
              various programming languages and technologies. Beyond the
              classroom, I am a proactive self-learner, continually expanding my
              technical skills to stay abreast of the latest advancements in
              software engineering. My commitment to learning and my enthusiasm
              for technology drive me to constantly improve and innovate,
              ensuring that I remain at the forefront of the ever-evolving tech
              landscape.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
