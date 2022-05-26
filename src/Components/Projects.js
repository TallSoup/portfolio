import Project from './Project';
import projects from '../data';

const Projects = () => {
  return (
    <div
      id='projects'
      className='container grid w-full px-3 py-9 m-auto max-w-4xl place-content-center'
    >
      <h1 className='text-3xl sm:text-4xl pt-9 pb-5 font-bold'>
        Recent Projects
      </h1>
      {projects.map((project, i) => {
        return <Project key={i} project={project} />;
      })}
    </div>
  );
};

export default Projects;