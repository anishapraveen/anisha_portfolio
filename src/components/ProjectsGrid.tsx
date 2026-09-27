
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import ChillaxModal from './modals/ChillaxModal';
import BeepModal from './modals/BeepModal';
import StirlingModal from './modals/StirlingModal';
import HindsightModal from './modals/HindsightModal';
import FridgetModal from './modals/FridgetModal';
import IAEAModal from './modals/IAEAModal';
import RollercoasterModal from './modals/RollercoasterModal';
import PGSModal from './modals/PGSModal';

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

const projects: Project[] = [
  {
    id: 1,
    title: "Chillax: Automated and Affordable Home Cooling System",
    subtitle: "Award Winning",
    image: "/lovable-uploads/45772d4b-2a85-400a-a8be-e762a7bab798.png",
    description: "Chillax is a low-cost, solar-powered rooftop cooling system designed for rural homes in Malaysia with thin zinc roofs. It uses a temperature sensor, water level sensor, and Arduino-based controller to automate a sprinkler system that cools the roof through evaporation. A rainwater collection system keeps it sustainable and accessible.",
    problem: "Rural homes in Malaysia with thin zinc roofs experience extremely high indoor temperatures, making living conditions uncomfortable and unsafe.",
    role: "Lead Engineer - Designed the complete automated control system, integrated sensors, and developed the sustainable water management solution.",
    tools: ["Arduino", "Temperature Sensors", "Water Level Sensors", "Solar Panels", "Sprinkler System", "Rainwater Collection"],
    outcome: "Chillax was awarded National Champion in the Shell NXplorers competition and received International Merit Recognition, with features in Shell NXplorers Senior case study and The Star newspaper."
  },
  {
    id: 2,
    title: "The Beep: After-School Traffic Management System",
    subtitle: "Award Winning",
    image: "/lovable-uploads/e374aba3-2820-4f70-a80d-c1ac9c0eaefb.png",
    description: "The Beep is a wireless Arduino-based system that reduces traffic congestion at school pick-up points by alerting students when their vehicle has arrived. The system uses RF modules to transmit signals between drivers and students, improving safety and efficiency.",
    problem: "Traffic congestion and safety concerns during after-school pickup times at schools.",
    role: "Team Lead - Developed the wireless communication system and coordinated community deployment of 100 functional units.",
    tools: ["Arduino", "RF Modules", "Wireless Communication", "System Design", "Community Deployment"],
    outcome: "Received 1st Runner-Up at the National Youth Innovation Challenge and an RM10,000 grant to improve and deploy the system across a local school."
  },
  {
    id: 3,
    title: "The Stirling Engine",
    subtitle: "Manufacturing Project",
    image: "/lovable-uploads/e8d50f67-d7a5-4546-b049-704ce08649ad.png",
    description: "As part of Penn's Machine Design and Manufacturing course, I designed and built a working Stirling engine from scratch. Inspired by a trip to London, my design incorporated moving models of Big Ben, Tower Bridge, and the London Eye. The engine achieved speeds of up to 800 rpm.",
    problem: "Design and fabricate a functional Stirling engine that demonstrates thermodynamic principles through creative visual storytelling.",
    role: "Designer and Builder - Modeled all components in SolidWorks and fabricated them using lathe, mill, and CNC tools at Penn's Precision Machining Lab.",
    tools: ["SolidWorks", "Lathe", "Mill", "CNC Machining", "Thermodynamics", "Precision Manufacturing"],
    outcome: "Successfully created a kinetic system that brought together thermodynamics, mechanical tolerances, and visual storytelling in a single functional engine reaching 800 rpm."
  },
  {
    id: 4,
    title: "Hindsight: Bicycle Safety Radar System",
    subtitle: "Safety Innovation",
    image: "/lovable-uploads/18b41929-d565-4db8-b6cb-65df9feae47f.png",
    description: "Hindsight is a rear-visibility safety system designed to help urban cyclists stay safe. It uses LIDAR to detect the acceleration of approaching vehicles. When a vehicle closes in rapidly, the system activates a buzzer and flashes a bright purple light to alert both the cyclist and the driver.",
    problem: "Urban cyclists lack rear visibility awareness, leading to safety concerns and potential accidents.",
    role: "Hardware Engineer - Developed the radar detection system and real-time LED interface for enhanced rider awareness.",
    tools: ["LIDAR", "Arduino", "LED Display", "Embedded Programming", "Real-time Systems", "Human-Centered Design"],
    outcome: "The project was built using Arduino and real-time sensor logic, combining radar sensing, visual signaling, and user-centered design to address night-time and high-speed visibility concerns."
  },
  {
    id: 5,
    title: "Fridget: Automated Coil Cleaning System",
    subtitle: "Home Automation",
    image: "/lovable-uploads/8d98840e-b1b9-44e3-8e63-29594277981c.png",
    description: "Fridget is a smart system that automates the cleaning of refrigerator condenser coils, which often collect dust and reduce energy efficiency. Using an LDR (light-dependent resistor), it detects when light no longer passes through the coils—signaling buildup.",
    problem: "Dust buildup on refrigerator condenser coils causes energy inefficiency and overheating, but is often overlooked in home maintenance.",
    role: "Mechanical Designer - Created the automated cleaning mechanism with programmable timer and motorized brushes for optimal thermal performance.",
    tools: ["LDR Sensors", "Automation Controls", "Programmable Timers", "Motorized Systems", "Thermal Performance Analysis"],
    outcome: "When activated, a small fan turns on to suck up the debris, maintaining cooling performance without manual intervention. This project focused on accessible automation for common energy problems in home appliances."
  },
  {
    id: 6,
    title: "IAEA Regional Workshop: Nuclear Science & Tech in Amman, Jordan",
    subtitle: "Nuclear Science & Technology",
    image: "/lovable-uploads/2e869b5c-c00f-4e25-9ca5-7c23717c467b.png",
    description: "I was selected to represent Malaysia at a week-long International Atomic Energy Agency (IAEA) regional workshop focused on nuclear science and technology. We visited key research and regulatory sites, including the Jordan Research and Training Reactor, the Jordan Nuclear Regulatory Commission, and the Synchrotron-Light for Experimental Science and Applications in the Middle East (SESAME)—a regional research hub for particle and materials science.",
    problem: "Understanding global applications of nuclear technology and policy across different sectors and regions.",
    role: "Student Representative - Participated in lab visits, seminars, and collaborative problem-solving sessions with students across Asia.",
    tools: ["Nuclear Physics", "Policy Analysis", "International Collaboration", "Systems Engineering", "Cross-cultural Communication"],
    outcome: "This experience broadened my understanding of how nuclear technologies intersect with policy, medicine, and international cooperation, and reinforced my interest in global engineering challenges."
  },
  {
    id: 7,
    title: "A Fun Rollercoaster Competition",
    subtitle: "Kinetic Sculpture",
    image: "/lovable-uploads/3640f7b5-4244-4441-9ca7-8202bf9f2596.png",
    description: "This competition challenged us to design a marble rollercoaster using 100% recycled materials, where the goal was to keep the marble in motion for as long as possible. We experimented with curves, loops, funnels, and spirals to slow the ball's path and extend duration.",
    problem: "Create an engaging kinetic sculpture that demonstrates principles of physics and engineering through artistic design using only recycled materials.",
    role: "Design Engineer - Built a functional, artistic kinetic sculpture emphasizing energy transitions and dynamic stability.",
    tools: ["Physics Modeling", "Energy Analysis", "Dynamic Stability", "Creative Design", "Arduino", "Motion Sensors"],
    outcome: "At the end of the track, a motion sensor triggered an Arduino-connected speaker to play a song—blending kinetic energy design with interactive electronics. The project brought together sustainability, physics, and creative problem-solving in a playful yet technical challenge."
  },
  {
    id: 8,
    title: "PGS Netherlands: Cycling, Infrastructure & Sustainability",
    subtitle: "Global Seminar",
    image: "/lovable-uploads/7a2a6bf8-18ae-48f8-8206-535f54fb7a7e.png",
    description: "As part of the Penn Global Seminar program, I spent a week in the Netherlands exploring sustainable urban mobility through the lens of Dutch cycling infrastructure. From biking daily through Amsterdam and Delft to studying transport design at TU Delft and learning from experts like Dr. Marco te Brömmelstroet and Mark Wagenbuur, I gained firsthand insight into how thoughtful infrastructure can shape culture, safety, and sustainability.",
    problem: "Understanding how infrastructure design impacts urban mobility, safety, and environmental sustainability.",
    role: "Student Researcher - Participated in field studies, infrastructure analysis, and expert consultations on sustainable transport design.",
    tools: ["Field Research", "Infrastructure Analysis", "Life Cycle Assessment", "Transport Design", "Sustainability Analysis", "Cross-cultural Learning"],
    outcome: "This immersive experience deepened my understanding of how engineering decisions impact communities and inspired new ideas about transportation design back home."
  }
];

const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    setActiveModal(projectId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E10] text-center mb-12">
          My Projects and Experiences
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
          
          {/* Empty card for future project */}
          <div className="bg-gray-100 rounded-xl p-8 border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[300px] hover:border-[#2B2E10] transition-colors duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-gray-400">+</span>
              </div>
              <p className="text-gray-500 font-medium">Future Project</p>
              <p className="text-sm text-gray-400 mt-2">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ChillaxModal isOpen={activeModal === 1} onClose={closeModal} />
      <BeepModal isOpen={activeModal === 2} onClose={closeModal} />
      <StirlingModal isOpen={activeModal === 3} onClose={closeModal} />
      <HindsightModal isOpen={activeModal === 4} onClose={closeModal} />
      <FridgetModal isOpen={activeModal === 5} onClose={closeModal} />
      <IAEAModal isOpen={activeModal === 6} onClose={closeModal} />
      <RollercoasterModal isOpen={activeModal === 7} onClose={closeModal} />
      <PGSModal isOpen={activeModal === 8} onClose={closeModal} />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsGrid;
