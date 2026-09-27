
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#2B2E10] mb-2">
            {project.title}
          </DialogTitle>
          <Badge className="w-fit bg-[#2B2E10] text-white">
            {project.subtitle}
          </Badge>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="aspect-video rounded-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Description */}
          <div>
            <h3 className="text-lg font-semibold text-[#2B2E10] mb-2">Project Overview</h3>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>

          {/* Problem Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#2B2E10] mb-2">Problem Tackled</h3>
            <p className="text-gray-700 leading-relaxed">{project.problem}</p>
          </div>

          {/* Role Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#2B2E10] mb-2">My Role</h3>
            <p className="text-gray-700 leading-relaxed">{project.role}</p>
          </div>

          {/* Tools/Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-[#2B2E10] mb-3">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <Badge key={index} variant="outline" className="border-[#2B2E10] text-[#2B2E10]">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div>
            <h3 className="text-lg font-semibold text-[#2B2E10] mb-2">Outcome</h3>
            <p className="text-gray-700 leading-relaxed font-medium">{project.outcome}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
