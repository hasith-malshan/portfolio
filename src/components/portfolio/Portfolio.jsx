import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const items = [
  {
    id: 1,
    title: 'Self Projects',
    link: '/projects/self',
    image:
      'https://images.pexels.com/photos/23533610/pexels-photo-23533610/free-photo-of-the-tall-dark-and-handsome-oes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: 'University Projects',
    link: '/projects/university',
    image:
      'https://images.pexels.com/photos/23533610/pexels-photo-23533610/free-photo-of-the-tall-dark-and-handsome-oes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    title: 'Client Projects',
    link: '/projects/client',
    image:
      'https://images.pexels.com/photos/23533610/pexels-photo-23533610/free-photo-of-the-tall-dark-and-handsome-oes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Single = ({ item }) => {
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {console.log(item.link)}
            <Link to={item.link}>
              <button>Link Check Github</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
