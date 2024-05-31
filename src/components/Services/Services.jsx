import { motion, useInView } from 'framer-motion';
import './services.scss';
import { useRef } from 'react';

const varients = {
  initials: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      className="services"
      variants={varients}
      initial={'initials'}
      // whileInView={'animate'}
      animate={'animate'}
    >
      {/* isInView &&  */}

      <div className="textContainer">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your </b>Business
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>click me</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>click me</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>click me</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
