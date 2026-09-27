
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface FridgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FridgetModal = ({ isOpen, onClose }: FridgetModalProps) => {
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
            <h1 className="text-3xl font-bold text-gray-900">Fridget</h1>
            <span className="inline-block bg-[#2B2E10] text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
              Automated Coil Cleaning System
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
                Fridget is a smart system that automates the cleaning of refrigerator condenser coils, which often collect dust and reduce energy efficiency. Using an LDR (light-dependent resistor), it detects when light no longer passes through the coils—signaling buildup.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                When activated, a small fan turns on to suck up the debris, maintaining cooling performance without manual intervention. This project focused on accessible automation for common energy problems in home appliances. Our project won first runner up at a state level innovation tournament, where we even got to present to the governor of Sarawak.
              </p>
            </div>

            {/* Right Column - Images */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/8d98840e-b1b9-44e3-8e63-29594277981c.png" 
                  alt="Fridget automated cleaning system"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/be355c17-c2bf-4d1a-b2db-10d53fe0c0f6.png"
                  alt="Clean vs dirty condenser coils comparison"
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

export default FridgetModal;
