
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BeepProject = () => {
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
            <h1 className="text-3xl font-bold text-gray-900">The Beep</h1>
            <span className="inline-block bg-[#2B2E10] text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
              After-School Traffic Management System
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
                The Beep is a wireless Arduino-based system that reduces traffic congestion at school pick-up points by alerting students when their vehicle has arrived. The system uses RF modules to transmit signals between drivers and students, improving safety and efficiency.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team received <span className="font-semibold text-gray-900">1st Runner-Up</span> at the National Youth Innovation Challenge and an <span className="font-semibold text-gray-900">RM10,000 grant</span> to improve and deploy the system. During the community adoption phase, we redesigned the hardware, simplified the interface, and distributed 100 functional units across a local school—an experience that taught me how engineering translates into real-world impact.
              </p>
            </div>

            {/* Right Column - Images */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/5f8ea1db-6c02-4f83-ad53-a833dca3ab05.png" 
                  alt="The Beep system evolution from 2018-2021"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/aaab32be-5873-49e6-af08-d09e686e4242.png"
                  alt="The Beep team working together"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Project Demo</h2>
            <div className="flex justify-center">
              <Button
                onClick={() => window.open('https://drive.google.com/file/d/1Ma4pMiijqcst0vvYAZI1ZBicocCYSers/view?usp=sharing', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Watch Demo Video
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeepProject;
