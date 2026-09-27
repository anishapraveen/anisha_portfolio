
interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  problem: string;
  role: string;
  tools: string[];
  outcome: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 group overflow-hidden"
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-[#2B2E10] text-white px-3 py-1 rounded-full text-sm font-medium">
            {project.subtitle}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-[#2B2E10] mb-3 group-hover:text-[#3a4015] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-3">
          {project.description}
        </p>
        
        <div className="mt-4 flex items-center text-[#2B2E10] text-sm font-medium">
          <span>Learn more</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
