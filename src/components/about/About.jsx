import { useRef } from 'react';
import './about.scss';
import { motion, useScroll, useSpring } from 'framer-motion';

const About = () => {
  const varients = {
    initials: {
      y: 300,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.25,
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
          <div className="imageWrapper">
            <img src="me_2.jpg" alt="" />
          </div>
          <div className="textWrapper">
            <h1>Hasith Malshan Rathnayake</h1>
            <p>I'm a Full-stack developer and a Java developer.</p>
            <p>
              Currently I’m a student of Java Institute for Advanced Technology
              where I have gained a solid foundation in programming languages
              like Java, JavaScript, and PHP and Databases like MySQL. I have a
              solid understanding of Object Oriented programming concepts, data
              structures, and algorithms. Apart from that I have self-learned
              technical skills like Angular, React and Spring Boot and I take an
              active approach to learning and enjoy keeping up with the most
              recent advancements in software engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
