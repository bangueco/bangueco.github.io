import Project from "../Project"

const Projects = () => {
  return(
    <section id="projects" className="min-h-screen p-1">
      <div className="mt-32 p-2">
        <div className="text-center">
          <h1 className="text-4xl text-green-300 lg:text-6xl">My Projects</h1>
        </div>
        <div className="mt-10">
          <div className="grid gap-5 grid-cols-1 items-center justify-center p-3 sm:grid-cols-2 md:grid-cols-3">
            <Project 
              name="8 Bit Sketcher"
              description="A simple sketching project i built to learn the fundamentals of Javascript. I used HTML, CSS, and Javascript."
              image="./projects/8bit_sketcher.png"
              preview="https://bangueco.github.io/8bit-sketcher/"
              repo="https://github.com/bangueco/8bit-sketcher/"
            />
            <Project 
              name="Tic a Toe"
              description="A simple game project inspired by tic tac toe to learn the fundamentals of Javascript. I used HTML, CSS, and Javascript."
              image="./projects/tic-a-toe.png"
              preview="https://bangueco.github.io/tic-a-toe/"
              repo="https://github.com/bangueco/tic-a-toe/"
            />
            <Project 
              name="Calculator"
              description="A simple project that calculates numbers based on given operations. In this project 
              i challenged myself to hardcode number calculations. I used HTML, CSS, and Javascript."
              image="./projects/calculator.png"
              preview="https://bangueco.github.io/calculator/"
              repo="https://github.com/bangueco/calculator/"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects