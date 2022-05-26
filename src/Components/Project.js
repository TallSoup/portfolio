const Project = (props) => {
  return (
    <div>
      <div className='mx-auto border border-green-500 rounded-xl shadow-md overflow-hidden mb-6'>
        <div className='md:flex'>
          <div className='md:shrink-0'>
            <img
              className='h-48 w-full object-cover object-top md:h-full md:w-48'
              src={props.project.screenshot}
              alt='app screenshot'
            />
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-white font-semibold'>
              {props.project.stack}
            </div>
            <div className='block mt-3 text-xl leading-tight font-medium text-white'>
              {props.project.name}
              <div className='text-lg py-3'>
                <a href={props.project.demo} className='text-green-500'>
                  DEMO
                </a>
                {'//'}
                <a href={props.project.github} className='text-green-500'>
                  CODE
                </a>
              </div>
            </div>

            <p className='my-2 text-white'>{props.project.desc}</p>
            {props.project.tech.map((skill, i) => {
              return (
                <button
                  key={i}
                  className='text-white border border-green-500 hover:bg-green-500 rounded-full py-1 px-4  m-2'
                >
                  {skill}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
