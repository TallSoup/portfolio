const linkClasses =
  'transition ease-in-out delay-150 hover:text-green-500 sm:p-3 -rotate-45 sm:rotate-0 text-sm backdrop-blur-md p-1';
const iconClasses =
  'transition ease-in-out delay-150 hover:text-green-500 px-1 sm:p-3 py-3';

const Navigation = (props) => {
  return (
    <nav className='fixed sm:sticky inset-x-0 bottom-0 sm:top-0 bg-black'>
      <div className='flex justify-between'>
        <div className=''>
          <a href='https://github.com/TallSoup'>
            <button className={iconClasses}>
              <i className='fa-brands fa-github fa-2xl'></i>
            </button>
          </a>
          <a href='https://www.linkedin.com/in/andrewtclarkson/'>
            <button className={iconClasses}>
              <i className='fa-brands fa-linkedin fa-2xl'></i>
            </button>
          </a>
          <a href='mailto:andrewtclarkson@gmail.com'>
            <button className={iconClasses}>
              <i className='fa-solid fa-envelope fa-2xl'></i>
            </button>
          </a>
        </div>

        <div className='pr-3'>
          <a href='#about'>
            <button className={linkClasses}>About</button>
          </a>
          <a href='#skills'>
            <button className={linkClasses}>Skills</button>
          </a>
          <a href='#projects'>
            <button className={linkClasses}>Projects</button>
          </a>

          <a href={props.url} target='_blank' rel='noreferrer noopener'>
            <button className={linkClasses}>Resume</button>
          </a>
        </div>
        <div className='hidden'>
          <button>
            <i className='fa-solid fa-burger fa-2xl p-3'></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
