const About = () => {
  return(
    <section id="about" className="min-h-screen p-1">
      <div className="mt-32 flex justify-center items-center flex-col gap-12 p-5">
        <h1 className="text-4xl text-green-300 lg:text-6xl">About Me</h1>
        <div className="flex items-center flex-col justify-center">
          <p className="text-lg text-nowrap text-gray-300 sm:w-4/5 sm:text-xl lg:text-2xl">
            I&apos;m a 21 y/o, 3rd year college student from Eastwoods Professional College of Science and Technology,
            with a strong passion for web development.
          </p>
          <p className="text-lg text-nowrap text-gray-300 sm:w-4/5 sm:text-xl lg:text-2xl mt-5">
            While having solid foundation in back-end development, I also enjoy learning front-end technologies, making me a versatile full-stack developer. Delving into different frameworks, 
            learning new tools, and mastering various languages in-order to enhance my skills and knowledge further.
          </p>
        </div>
        <h1 className="text-2xl text-green-300 lg:text-4xl mt-10">Current Tech Stack</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center lg:grid-cols-5">
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">HTML</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">CSS</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">Javascript</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">Tailwind</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">React</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">Node JS</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">MongoDB</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">Express JS</p>
        </div>
        <h1 className="text-2xl text-green-300 lg:text-4xl mt-10">Other Technologies</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center lg:grid-cols-5">
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">Java</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">C#</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">C++</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">PHP</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">jQuery</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">Bootstrap</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">Laravel</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">Webpack</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">MySQL</p>
          <p className="border-green-300 border-2 w-28 text-lg rounded-lg text-gray-300 font-bold">MariaDB</p>
        </div>
      </div>
    </section>
  )
}

export default About