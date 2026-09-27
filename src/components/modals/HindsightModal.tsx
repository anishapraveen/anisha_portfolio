
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface HindsightModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HindsightModal = ({ isOpen, onClose }: HindsightModalProps) => {
  if (!isOpen) return null;

  const handleBackgroundClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={handleBackgroundClick}>
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header with close button */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hindsight</h1>
            <span className="inline-block bg-[#2B2E10] text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
              Bicycle Safety Radar System
            </span>
          </div>
          <Button
            variant="outline"
            onClick={onClose}
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
                Hindsight is a rear-visibility safety system designed to help urban cyclists stay safe. It uses LIDAR to detect the acceleration of approaching vehicles. When a vehicle closes in rapidly, the system activates a buzzer and flashes a bright purple light to alert both the cyclist and the driver.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                The project was built using Arduino and real-time sensor logic, combining radar sensing, visual signaling, and user-centered design to address night-time and high-speed visibility concerns.
              </p>
            </div>

            {/* Right Column - Images */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/383ff6c4-9680-4e62-99d2-f76e2fe8ec47.png" 
                  alt="Hindsight development team working"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/3065acae-1904-4a7b-ba66-4a0f9909159c.png"
                  alt="Hindsight device mounted on bicycle"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HindsightModal;
