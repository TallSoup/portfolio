const Skills = () => {
  const skills = [
    'Javascript ES6+',
    'React',
    'Node',
    'Express',
    'HTML',
    'CSS',
    'MongoDB',
    'Git',
    'GitHub',
    'Heroku',
    'Netlify',
    'Bootstrap 5',
    'Python',
    'Flask',
    'Jinja',
    'Pandas',
    'SQLite',
    'APIs',
  ];
  const exploring = ['Tailwind CSS', 'Jest', 'Cypress', 'AWS', 'Rust', 'web3'];

  return (
    <div
      id='skills'
      className='container grid w-full h-full px-3 pt-9 pb-5 m-auto max-w-4xl place-content-center'
    >
      <h1 className='text-3xl sm:text-4xl pt-9 pb-5 font-bold'>Skills</h1>

      <div className='flex flex-wrap justify-evenly gap-5 pb-9'>
        {skills.map((skill, i) => {
          return (
            <>
              <span
                key={i}
                className='text-white border border-green-500 transition ease-in-out delay-150 hover:bg-green-500 select-none rounded-full py-1 px-4  mt-3'
              >
                {skill}
              </span>
            </>
          );
        })}
      </div>
      <h1 className='text-3xl sm:text-4xl pt-9 pb-5 font-bold'>
        Currently Exploring
      </h1>
      <div className='flex flex-wrap justify-evenly gap-5'>
        {exploring.map((skill, i) => {
          return (
            <>
              <span
                key={i}
                className='text-white border border-green-500 transition ease-in-out delay-150 hover:bg-green-500 select-none rounded-full py-1 px-4  mt-3'
              >
                {skill}
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
