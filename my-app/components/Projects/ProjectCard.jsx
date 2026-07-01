import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div className="w-[340px] h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      {/* Project Image */}
      <div className="relative w-full h-52">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-[150px]">

        <h2 className="text-2xl font-bold h-14">
          {project.title}
        </h2>

        <p className="text-gray-600 text-sm h-20 overflow-hidden mt-2">
          {project.description}
        </p>

  
        {/* <div className="flex flex-wrap gap-2 mt-4 h-14">
          {project.tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div> */}

        {/* Icons */}
        <div className="mt-auto flex justify-end gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/medium.png"
              alt="GitHub"
              width={28}
              height={28}
              className="hover:scale-110 transition"
            />
          </a>

          {/* {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/link.png"
                alt="Live Demo"
                width={28}
                height={28}
                className="hover:scale-110 transition"
              />
            </a>
          )} */}

        </div>

      </div>

    </div>
  );
}