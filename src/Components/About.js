const About = () => {
  return (
    <div
      id='about'
      className='container grid w-full h-screen px-3 h-full m-auto max-w-4xl place-content-center'
    >
      <h2 className='text-2xl pb-3'>Hello!</h2>
      <h1 className='text-7xl font-bold'>I'm Andrew.</h1>
      <h2 className='text-2xl px-7 py-3'>
        I build, break and make things better.
      </h2>
      <p className='text-justify py-3'>
        I'm a self-taught{' '}
        <span className='font-bold underline'>Software Developer</span>{' '}
        currently focused on landing my first role. Before making a move to
        tech, I spent seven years climbing the ladder in Automotive Parts Sales
        at the local Chrysler dealership. I spent the last 4 years in
        Management, where I excelled in communicating highly technical concepts
        to non-technical folk, people management, process improvement,
        relationship building, and delivering results that exceeded
        expectations.
      </p>

      <div>
        <a
          href='https://drive.google.com/file/d/1BSPbSc42Y6wmcaVlm_d9QnPrBF1la91F/view?usp=sharing'
          target='_blank'
          rel='noreferrer noopener'
        >
          <button className='text-white hover:bg-green-600 rounded border border-green-500 px-4 py-2 m-2'>
            Resume
          </button>
        </a>
        <a
          href='mailto:andrewtclarkson@gmail.com'
          target='_blank'
          rel='noreferrer noopener'
        >
          <button className='text-white hover:bg-green-600 rounded border border-green-500 px-4 py-2 m-2'>
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
