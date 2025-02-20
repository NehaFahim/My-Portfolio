import Image from "next/image";
import React from "react";

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-xl border-solid border-blue-300 bg-slate-50 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 flex flex-col h-full">
      {/* Project Image */}
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={800}
        className="w-full max-w-[400px] md:max-w-[450px] h-auto object-cover mx-auto"
      />

      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          {project.title}
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base flex-grow">
          {project.description}
        </p>

        {/* View Project Button - Aligned at the Bottom */}
        <div className="mt-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 w-full text-center rounded-lg hover:bg-cyan-400 transition-colors text-sm md:text-base"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

// ✅ Replace this:
// export const runtime = "edge";  // ✅ Next.js latest config syntax
