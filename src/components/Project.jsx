const Project = ({name, description, image, preview, repo}) => {
  return(
    <div className="bg-zinc-800">
      <img className="w-full h-60 sm:h-64 md:h-72 lg:h-80" src={image} alt="" />
      <div className="p-3 h-48 relative">
        <h1 className="text-green-300 text-xl text-center">{name}</h1>
        <p className="text-md text-gray-300">{description}</p>
      </div>
      <div className="p-3 flex justify-end gap-2">
          <button>
            <a href={preview} target="_blank" className="text-green-300">Live</a>
          </button>
            <p className="inline text-gray-300"> | </p>
          <button>
            <a href={repo} target="_blank" className="text-green-300">Code</a>
          </button>
        </div>
    </div>
  )
}

export default Project