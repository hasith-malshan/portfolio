import { motion } from 'framer-motion';

const varients = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVarients = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    transition: {
      y: 50,
      opacity: 0,
    },
  },
};

const items = [
  'HomePage',
  'About',
  'Services',
  'Portfolio',
  'Technical Skills',
  'Contact',
];

const Links = () => {
  return (
    <motion.div className="links" varients={varients}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVarients}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
