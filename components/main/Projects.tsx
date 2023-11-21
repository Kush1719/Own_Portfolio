import React from "react";
import { FaGithub } from 'react-icons/fa';
import ProjectCard from "../sub/ProjectCard";

interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
  githubLink: string; // Add a prop for GitHub link
}
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/speedify.png"
          title="Speedify Webpage"
          description="Speedify is a virtual private network (VPN) service that focuses on providing users with a faster and more reliable internet connection."
        />
        <ProjectCard
          src="/website.png"
          title="Portfolio Website"
          description="A portfolio website is a digital platform that showcases an individual's or a company's work, achievements, skills, and expertise."
        />
        <ProjectCard
          src="/netflix.png"
          title="Netflix Clone"
          description="I have made an Netflix Clone using GoogleApi's for fetching all data of Netflix and written an query in javascript"
        />
      </div>
    </div>
  );
};

export default Projects;