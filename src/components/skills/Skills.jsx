import './skills.scss';
import { motion } from 'framer-motion';
const Skills = () => {
  const varients = {
    initials: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="skills">
      {/* <div className="container"> */}
      <div className="upperContainer">
        <p>
          Things I can use to help you with
          <br /> explore my toolkit
        </p>
        <hr />
      </div>
      {/* </div> */}
      <div className="titleContainer">
        <h1 style={{ textAlign: 'center', color: 'orange' }}>
          Technical Skills
        </h1>
        <hr />
      </div>
      <motion.div
        className="textContainer"
        variants={varients}
        initial={'initials'}
        whileInView={'animate'}
      >
        <p>
          I have a confident understanding on these languages , frameworks and
          tools. I am a good quick self learner who always learn new
          technologies and use them to make robust soulutions.
        </p>
      </motion.div>
      <motion.div
        className="iconContaner"
        variants={varients}
        initial={'initials'}
        whileInView={'animate'}
      >
        {/* Programming Languages*/}
        <div className="iconrow programmingIcons">
          <img src="skills_icons/java.webp" alt="java" />
          <img src="skills_icons/javascript.webp" alt="javascript" />
          <img src="skills_icons/typescript.webp" alt="typescript" />
          <img src="skills_icons/php.webp" alt="php" />
          <img src="skills_icons/python.webp" alt="python" />
          <img src="skills_icons/C++.webp" alt="c++" />
        </div>

        {/* Backend Development*/}
        <div className="iconrow backendIcons">
          <img src="skills_icons/springboot.webp" alt="springboot" />
          <img src="skills_icons/nodejs.webp" alt="node.js" />
          <img src="skills_icons/express.webp" alt="express.js" />
          <img src="skills_icons/j2ee.png" alt="j2ee" width={'50px'} />
          <img
            src="skills_icons/hibernate.png"
            alt="hibernate"
            width={'50px'}
          />
        </div>

        {/* Frontend development*/}
        <div className="iconrow ">
          <img src="skills_icons/react.webp" alt="react" />
          <img src="skills_icons/angular.png" alt="angular" />
          <img src="skills_icons/html.webp" alt="html" />
          <img src="skills_icons/css.webp" alt="css" />
          <img src="skills_icons/bootstrap.webp" alt="bootstrap" />
        </div>

        {/* Databases*/}
        <div className="iconrow">
          <img src="skills_icons/mysql.webp" alt="mysql" />
          <img src="skills_icons/mongo-db.webp" alt="mongodb" />
          <img src="skills_icons/postgreSQL.webp" alt="postgreSQL" />
        </div>

        {/* Version Control*/}
        <div className="iconrow">
          <img src="skills_icons/git.png" alt="git" />
          <img src="skills_icons/github.webp" alt="github" />
          <img src="skills_icons/gitlab.svg" alt="gitlab" />
        </div>

        {/* Cloud*/}
        <div className="iconrow">
          <img src="skills_icons/aws.webp" alt="java" />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
