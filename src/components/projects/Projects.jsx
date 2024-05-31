import { useParams } from 'react-router-dom';
import MediaCard from './ProjectCard';
import './projects.scss';
import data from './projectData.json';
import { useEffect, useRef } from 'react';

const Projects = () => {
  const ref = useRef();
  useEffect(() => {
    // Scroll to the top of the component when it mounts
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const { type } = useParams();
  let dataToLoad = [];

  if (type === 'university') {
    dataToLoad = data.university;
  } else if (type === 'self') {
    dataToLoad = data.self;
  } else if (type === 'client') {
    dataToLoad = data.client;
  }

  return (
    <div className="projects">
      <div className="container">
        <div className="upperContainer" ref={ref}>
          <p>
            Check the projects I have done.
            <br /> {}
          </p>
          <hr />
        </div>
        <div className="titleContainer">
          <h1>Self Projects</h1>
          <hr />
        </div>
        <div className="wrapper">
          {dataToLoad.map((item) => (
            <MediaCard cardData={item} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
