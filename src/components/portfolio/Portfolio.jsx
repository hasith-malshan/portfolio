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
      'These self-taught projects reflect my unwavering passion for web development and programming. I’ve delved into various facets, including mastering MVC architecture, building microservices, crafting RESTful APIs, and exploring modern front-end frameworks. My commitment to continuous learning drives me to seek out new challenges and expand my skill set. With each project, I embrace the opportunity to learn, create, and contribute to the ever-evolving world of technology.',
  },
  {
    id: 2,
    title: 'University Projects',
    link: '/projects/university',
    image:
      'https://images.pexels.com/photos/23533610/pexels-photo-23533610/free-photo-of-the-tall-dark-and-handsome-oes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'University projects play a crucial role in enhancing practical skills by allowing us to apply theoretical knowledge. During my studies, I gained a solid foundation in programming languages such as Java, JavaScript, and PHP, along with experience working with databases like MySQL. These projects have not only honed my technical abilities but also fostered problem-solving skills and creativity.',
  },
  {
    id: 3,
    title: 'Client Projects',
    link: '/projects/client',
    image:
      'https://images.pexels.com/photos/23533610/pexels-photo-23533610/free-photo-of-the-tall-dark-and-handsome-oes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'Working with clients provided a unique experience compared to university projects. While it was occasionally challenging, it significantly improved my communication skills, collaboration abilities, and other soft skills. Ultimately, I’m pleased that I could deliver the product they required.',
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
              <button>Check Projects</button>
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
