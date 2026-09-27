
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface IAEAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IAEAModal = ({ isOpen, onClose }: IAEAModalProps) => {
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
            <h1 className="text-3xl font-bold text-gray-900">IAEA Regional Workshop</h1>
            <span className="inline-block bg-[#2B2E10] text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
              Nuclear Science & Tech in Amman, Jordan
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
                I was selected to represent Malaysia at a week-long International Atomic Energy Agency (IAEA) regional workshop focused on nuclear science and technology. We visited key research and regulatory sites, including the Jordan Research and Training Reactor, the Jordan Nuclear Regulatory Commission, and the Synchrotron-Light for Experimental Science and Applications in the Middle East (SESAME)—a regional research hub for particle and materials science.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                This experience broadened my understanding of how nuclear technologies intersect with policy, medicine, and international cooperation, and reinforced my interest in global engineering challenges.
              </p>
            </div>

            {/* Right Column - Images in 2+1 layout */}
            <div className="space-y-4">
              {/* Top row - 2 images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-[4/3]">
                  <img 
                    src="/lovable-uploads/f0bfc0fd-a162-4c58-8688-4be6ed7bf564.png"
                    alt="SESAME certificate presentation ceremony"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-[4/3]">
                  <img 
                    src="/lovable-uploads/39e37e53-8d77-457f-ab77-fd1519f37199.png"
                    alt="Nuclear science equipment demonstration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Bottom row - 1 image centered */}
              <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-[4/3] w-1/2">
                  <img 
                    src="/lovable-uploads/40678616-b568-47b4-83cb-e2062aca8ef9.png"
                    alt="IAEA workshop presentation"
                    className="w-full h-full object-cover"
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

export default IAEAModal;
