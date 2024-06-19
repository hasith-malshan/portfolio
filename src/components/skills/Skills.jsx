import { useRef } from 'react';
import './skills.scss';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef();
  const ref2 = useRef();
  const isInView = useInView(ref, { once: false });
  const isInViewMobile = useInView(ref2, { once: false });
  const varients = {
    initials: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const mobileVarients = {
    initials: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="skills">
      <div className="view1">
        {/* upperContainer */}
        <div className="upperContainer">
          <p>
            Things I can use to help you with
            <br /> explore my toolkit
          </p>
          <hr />
        </div>

        {/* titleContainer */}
        <motion.div
          className="titleContainer"
          ref={ref}
          variants={varients}
          initial={'initials'}
          animate={isInView ? 'animate' : ''}
        >
          <h1 style={{ textAlign: 'center', color: 'orange' }}>
            Technical Skills
          </h1>
          <hr />
        </motion.div>

        {/* textContainer */}
        <motion.div
          className="textContainer"
          variants={varients}
          initial={'initials'}
          animate={isInView ? 'animate' : ''}
        >
          <p>
            I have a confident understanding on these languages , frameworks and
            tools. I am a good quick self learner who always learn new
            technologies and use them to make robust soulutions.
          </p>
        </motion.div>

        {/* iconContaner */}
        <motion.div
          ref={ref}
          className="iconContaner"
          variants={varients}
          initial={'initials'}
          animate={isInView ? 'animate' : ''}
        >
          {/* Programming Languages*/}
          <motion.div className="iconrow programmingIcons" variants={varients}>
            <img src="skills_icons/java.webp" alt="java" />
            <img src="skills_icons/javascript.webp" alt="javascript" />
            <img src="skills_icons/typescript.webp" alt="typescript" />
            <img src="skills_icons/php.webp" alt="php" />
            <img src="skills_icons/python.webp" alt="python" />
            <img src="skills_icons/C++.webp" alt="c++" />
          </motion.div>

          {/* Backend Development*/}
          <motion.div className="iconrow backendIcons" variants={varients}>
            <img src="skills_icons/springboot.webp" alt="springboot" />
            <img src="skills_icons/nodejs.webp" alt="node.js" />
            <img src="skills_icons/express.webp" alt="express.js" />
            <img src="skills_icons/j2ee.png" alt="j2ee" width={'50px'} />
            <img
              src="skills_icons/hibernate.png"
              alt="hibernate"
              width={'50px'}
            />
          </motion.div>

          {/* Frontend development*/}
          <motion.div className="iconrow " variants={varients}>
            <img src="skills_icons/react.webp" alt="react" />
            <img src="skills_icons/angular.png" alt="angular" />
            <img src="skills_icons/html.webp" alt="html" />
            <img src="skills_icons/css.webp" alt="css" />
            <img src="skills_icons/bootstrap.webp" alt="bootstrap" />
          </motion.div>

          {/* Databases*/}
          <motion.div className="iconrow" variants={varients}>
            <img src="skills_icons/mysql.webp" alt="mysql" />
            <img src="skills_icons/mongo-db.webp" alt="mongodb" />
            <img src="skills_icons/postgreSQL.webp" alt="postgreSQL" />
          </motion.div>

          {/* Version Control*/}
          <motion.div className="iconrow" variants={varients}>
            <img src="skills_icons/git.png" alt="git" />
            <img src="skills_icons/github.webp" alt="github" />
            <img src="skills_icons/gitlab.svg" alt="gitlab" />
          </motion.div>

          {/* Cloud*/}
          <motion.div className="iconrow" variants={varients}>
            <img src="skills_icons/aws.webp" alt="aws" />
          </motion.div>
        </motion.div>
      </div>

      <div className="view2">
        {/* titleContainer */}
        <motion.div
          className="titleContainer2"
          ref={ref}
          variants={varients}
          initial={'initials'}
          animate={isInView ? 'animate' : ''}
        >
          <h1 style={{ textAlign: 'center', color: 'orange' }}>
            Technical Skills
          </h1>
          <hr />
        </motion.div>

        {/* textContainer */}
        <motion.div
          className="textContainer"
          variants={varients}
          initial={'initials'}
          animate={isInView ? 'animate' : ''}
        >
          <p>
            I have a confident understanding on these languages , frameworks and
            tools. I am a good quick self learner who always learn new
            technologies and use them to make robust soulutions.
          </p>
        </motion.div>

        {/* iconContainer */}
        <motion.div
          className="iconContainer"
          ref={ref2}
          variants={varients}
          animate={isInViewMobile ? 'animate' : ''}
        >
          <img src="skills_icons/java.webp" alt="java" />
          <img src="skills_icons/javascript.webp" alt="javascript" />
          <img src="skills_icons/typescript.webp" alt="typescript" />
          <img src="skills_icons/php.webp" alt="php" />
          <img src="skills_icons/python.webp" alt="python" />
          <img src="skills_icons/C++.webp" alt="c++" />
          <img src="skills_icons/springboot.webp" alt="springboot" />
          <img src="skills_icons/nodejs.webp" alt="node.js" />
          <img src="skills_icons/express.webp" alt="express.js" />
          <img src="skills_icons/j2ee.png" alt="j2ee" />
          <img src="skills_icons/hibernate.png" alt="hibernate" />
          <img src="skills_icons/react.webp" alt="react" />
          <img src="skills_icons/angular.png" alt="angular" />
          <img src="skills_icons/html.webp" alt="html" />
          <img src="skills_icons/css.webp" alt="css" />
          <img src="skills_icons/bootstrap.webp" alt="bootstrap" />
          <img src="skills_icons/mysql.webp" alt="mysql" />
          <img src="skills_icons/mongo-db.webp" alt="mongodb" />
          <img src="skills_icons/postgreSQL.webp" alt="postgreSQL" />
          <img src="skills_icons/git.png" alt="git" />
          <img src="skills_icons/github.webp" alt="github" />
          <img src="skills_icons/gitlab.svg" alt="gitlab" />
          <img src="skills_icons/aws.webp" alt="aws" />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
