
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface PGSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PGSModal = ({ isOpen, onClose }: PGSModalProps) => {
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
            <h1 className="text-3xl font-bold text-gray-900">PGS Netherlands: Cycling, Infrastructure & Sustainability</h1>
            <span className="inline-block bg-[#2B2E10] text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
              March 2025
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
                As part of the Penn Global Seminar program, I spent a week in the Netherlands exploring sustainable urban mobility through the lens of Dutch cycling infrastructure. From biking daily through Amsterdam and Delft to studying transport design at TU Delft and learning from experts like Dr. Marco te Brömmelstroet and Mark Wagenbuur, I gained firsthand insight into how thoughtful infrastructure can shape culture, safety, and sustainability. Highlights included testing modified bikes, studying life cycle assessments, visiting the Maeslantkering storm surge barrier, and cycling through both urban and rural areas to analyze infrastructure patterns. This immersive experience deepened my understanding of how engineering decisions impact communities—and inspired new ideas about transportation design back home.
              </p>
            </div>

            {/* Right Column - Images */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/7a2a6bf8-18ae-48f8-8206-535f54fb7a7e.png" 
                  alt="Group photo with bikes in Netherlands"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/ef858cf6-398f-4f27-928c-deb5a250f550.png"
                    alt="Visiting infrastructure site"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/0dfd6eff-7c65-4dfa-be06-ccdb3560e4e5.png"
                    alt="Cycling group in urban setting"
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

export default PGSModal;
