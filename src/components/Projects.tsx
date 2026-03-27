import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

export default function Projects() {
  const [search, setSearch] = useState("");

  const projects = [
    {
      title: "Blog Project",
      url: "https://blog-project-gules-two.vercel.app/"
    },
    {
      title: "Pizza Project",
      url: "https://pizza-project-with-react-rk2h.vercel.app/"
    }
  ];

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-white">Loyihalar</h1>
      <div className="w-[150px] h-[10px] mt-3 rounded-full bg-green-500"></div>

      <h2 className="flex mt-10 text-xl font-bold text-white gap-2 items-center">
        Filterlash <CiFilter size={28} />
      </h2>

      <div className="border flex gap-3 p-3 rounded-xl mt-4">
        <FaSearch className="mt-[5px]" />
        <input
          type="text"
          className="outline-none w-full"
          placeholder="Qidirish..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mt-10 flex flex-wrap gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="max-w-[500px]">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="w-full h-[220px] overflow-hidden bg-gray-200">
                <iframe
                  src={project.url}
                  title="preview"
                  className="w-[1000px] h-[600px] scale-[0.4] origin-top-left pointer-events-none"
                ></iframe>
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold text-black">
                  {project.title}
                </h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}