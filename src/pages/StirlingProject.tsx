
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StirlingProject = () => {
  const navigate = useNavigate();

  const handleBackgroundClick = () => {
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={handleBackgroundClick}>
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header with close button */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">The Stirling Engine</h1>
            <span className="inline-block bg-[#2B2E10] text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
              Manufacturing Project
            </span>
          </div>
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Close
          </Button>
        </div>

        <div className="p-6">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                As part of Penn's Machine Design and Manufacturing course, I designed and built a working Stirling engine from scratch. Inspired by a trip to London, my design incorporated moving models of Big Ben, Tower Bridge, and the London Eye. The engine achieved speeds of up to 800 rpm.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I modeled all components in SolidWorks and fabricated them using lathe, mill, and CNC tools at Penn's Precision Machining Lab. This project brought together thermodynamics, mechanical tolerances, and visual storytelling in a single kinetic system reaching 800 rpm.
              </p>
            </div>

            {/* Right Column - Images */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/68ce7241-6bc0-444b-b33d-6a9f39e3dc5c.png" 
                  alt="Completed Stirling engine on workbench"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/f1d4f42d-07dd-43c7-8758-3e404b6d3dfd.png"
                    alt="Working with CNC machine"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/2a9fab86-9f6a-4d2a-9cb5-4fb6fb9557e4.png"
                    alt="Initial sketch design with London landmarks"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StirlingProject;
