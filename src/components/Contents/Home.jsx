import {SiFacebook, SiGithub, SiLinkedin} from 'react-icons/si'

const Home = () => {
  return(
    <section id="home" className="min-h-screen">
      <div className="flex justify-center flex-col items-center gap-10 p-11 sm:p-24 md:p-32 lg:p-40">
        <div>
          <p className="text-green-300 text-sm sm:text-xl md:text-2xl lg:text-3xl">My name is</p>
          <p className="text-gray-50 text-xl sm:text-2xl md:text-3xl lg:text-5xl">Justine Ivan Gueco</p>
          <p className="text-gray-50 text-2xl sm:text-3xl md:text-4xl lg:text-6xl">I&apos;m a <span className="text-green-300 relative animate-sliding-left">Fullstack Developer.</span></p>
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