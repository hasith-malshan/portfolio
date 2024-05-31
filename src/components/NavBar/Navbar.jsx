import './Navbar.scss';
import { motion } from 'framer-motion';
import Sidebar from '../SideBar/Sidebar';

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      {/* Sidebar */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hasith Malshan
        </motion.span>

        <div className="social">
          <a href="https://www.linkedin.com/in/hasithmalshan" target="_blank">
            <img src="socialmedia/linkedIn.png" alt="" />
          </a>
          <a href="https://github.com/hasith-malshan" target="_blank">
            <img src="skills_icons/github.webp" alt="" className="github" />
          </a>
          <a href="https://gitlab.com/h.malshan.53" target="_blank">
            <img src="skills_icons/gitlab.svg" alt="" className="gitlab" />
          </a>
          <a href="https://www.instagram.com/hasith_m_r/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
