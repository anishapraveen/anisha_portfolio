
import { Button } from '@/components/ui/button';

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section className="relative px-6 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Anisha Karunakaran
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Hi! I'm Anisha, a Shell Scholar from Miri, Malaysia, and a rising sophomore at the University of Pennsylvania majoring in Mechanical Engineering and Applied Mechanics. I'm passionate about designing sustainable, accessible and community-centered technologies that solve real-world problems. Below are some of the projects I've worked on in the past few years, combining engineering, creativity, and social impact.
              </p>
            </div>
            <Button 
              onClick={onContactClick}
              className="bg-[#F5F5DC] text-[#2B2E10] hover:bg-[#E8E8D0] px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact me
            </Button>
          </div>

          {/* Right side - Profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="/lovable-uploads/d915fa14-0bce-4b4c-b3ed-240e57ac90e9.png" 
                  alt="Anisha Karunakaran"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
