import { Link } from 'react-router-dom';
import './Hero.scss';
import { motion } from 'framer-motion';

const textVarients = {
  initial: {
    x: -500,
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
  scrollButton: {
    opacity: 0.25,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVarients}
          initial={'initial'}
          animate={'animate'}
        >
          <motion.h2 variants={textVarients}>Hasith Malshan</motion.h2>
          <motion.h1 variants={textVarients}>Full Stack Developer</motion.h1>
          <motion.div className="buttons" variants={textVarients}>
            <Link to={'/projects/self'}>
              <motion.button variants={textVarients} className="btn">
                See the latest work
              </motion.button>
            </Link>

            <motion.button variants={textVarients} className="btn">
              <motion.a href="#Contact">Contact me</motion.a>
            </motion.button>
          </motion.div>
          <motion.img
            src="./scroll.png"
            alt=""
            variants={textVarients}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariant}
        initial="initial"
        animate="animate"
      >
        Full-Stack-Developer Full-Stack-Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/enhanced_me.png" alt="" className="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
