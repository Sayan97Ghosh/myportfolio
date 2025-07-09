const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col items-left text-left drop-shadow-lg p-3 rounded w-full max-w-[320px] h-[520px] overflow-hidden"
    >
      {/* Image */}
      <div className="mb-4 h-[180px] w-full overflow-hidden flex justify-center items-center">
        <img
          className="rounded-xl  h-full w-full transition duration-300 ease-in-out"
          src={item.image}
          alt={item.name}
        />
      </div>

      {/* Category */}
      <p className="capitalize text-accent text-md mb-2">{item.techStack}</p>

      {/* Title */}
      <h3 className="text-xl font-semibold capitalize mb-2">{item.name}</h3>

      {/* Description */}
      <p className="text-sm text-slate-700 mb-4">{item.despo}</p>

      {/* Buttons */}
      <div className="flex justify-center sm:justify-left gap-3 mt-auto">
        {/* Source Code Button */}
        <a href={item.source} target="_blank" rel="noopener noreferrer">
          <button
            disabled={!item.source}
            className={`py-2 px-4 text-white rounded-lg text-sm transition ${
              item.source
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Source Code
          </button>
        </a>

        {/* Live Demo Button */}
        <a href={item.live} target="_blank" rel="noopener noreferrer">
          <button
            disabled={!item.live}
            className={`py-2 px-4 text-white rounded-lg text-sm transition ${
              item.live
                ? "bg-red-600 hover:bg-red-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Live Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
