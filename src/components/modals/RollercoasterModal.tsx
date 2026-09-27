
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface RollercoasterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RollercoasterModal = ({ isOpen, onClose }: RollercoasterModalProps) => {
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
            <h1 className="text-3xl font-bold text-gray-900">A Fun Rollercoaster Competition</h1>
            <span className="inline-block bg-[#2B2E10] text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
              Kinetic Sculpture
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
                This competition challenged us to design a marble rollercoaster using 100% recycled materials, where the goal was to keep the marble in motion for as long as possible. We experimented with curves, loops, funnels, and spirals to slow the ball's path and extend duration.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                At the end of the track, a motion sensor triggered an Arduino-connected speaker to play a song—blending kinetic energy design with interactive electronics. The project brought together sustainability, physics, and creative problem-solving in a playful yet technical challenge.
              </p>
            </div>

            {/* Right Column - Images */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/5b095d49-081e-4b2d-813d-e6e65e87ca83.png" 
                  alt="Rollercoaster structure in progress"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/8d6e8086-61f7-4271-8d4d-f9f4251aafbc.png"
                  alt="Team with completed rollercoaster"
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

export default RollercoasterModal;
