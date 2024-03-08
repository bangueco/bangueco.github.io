import {SiFacebook, SiGithub, SiLinkedin} from 'react-icons/si'

const Home = () => {
  return(
    <section id="home" className='p-3 mt-40'>
      <div className="flex justify-center flex-col items-center gap-10">
        <div>
          <p className="text-green-300 text-center text-xl sm:text-2xl sm:text-left md:text-2xl lg:text-3xl">My name is</p>
          <p className="text-gray-50 text-center text-3xl sm:text-4xl sm:text-left md:text-4xl lg:text-5xl">Justine Ivan Gueco</p>
          <p className="text-gray-50 text-center text-4xl sm:text-5xl sm:text-left md:text-5xl lg:text-6xl">I&apos;m a <span className="text-green-300 relative animate-sliding-left">Fullstack Developer.</span></p>
        </div>
        <div className="flex gap-5">
          <a href="http://facebook.com/xxxjustentacion" target='_blank'><SiFacebook className='text-green-300 text-2xl'/> </a>
          <a href="http://github.com/bangueco" target="_blank"><SiGithub className='text-green-300 text-2xl'/> </a>
          <SiLinkedin className='text-green-300 text-2xl' />
        </div>
      </div>
    </section>
  )
}

export default Home