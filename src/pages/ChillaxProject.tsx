
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChillaxProject = () => {
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
            <h1 className="text-3xl font-bold text-gray-900">Chillax</h1>
            <span className="inline-block bg-[#2B2E10] text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
              Automated and Affordable Home Cooling System
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
                Chillax is a low-cost, solar-powered rooftop cooling system designed for rural homes in Malaysia with thin zinc roofs. It uses a temperature sensor, water level sensor and Arduino based controller to automate a sprinkler system, which reduces indoor temperatures through evaporative cooling. It also uses a rainwater collection system to stay sustainable and affordable.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Chillax was awarded <span className="font-semibold text-gray-900">National Champion</span> in the Shell NXplorers competition, and received 
                <span className="font-semibold text-gray-900"> International Merit Recognition</span>, with a feature in a Shell NXplorers Senior case study 
                for its innovation in sustainable, accessible cooling. Chillax continues to shape my 
                research interests in passive thermal systems and community-centered engineering.
              </p>
            </div>

            {/* Right Column - Images */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/33f0354c-fbbb-455e-b373-c13fcc0ae10a.png" 
                  alt="Chillax System Diagram"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/a729945c-74d1-4e49-af6d-c3acab8fb421.png"
                    alt="Chillax system on roof"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/d569037f-6efd-4ac8-9a59-2ecd063f2de7.png"
                    alt="Team receiving award"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Learn More</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://www.youtube.com/watch?v=pt1-z9_eKCg', '_blank')}
                className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Watch Video Demo
              </Button>
              <Button
                onClick={() => window.open('https://nxplorers.com/en/case-studies/malaysia', '_blank')}
                className="bg-yellow-600 hover:bg-yellow-700 text-white flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Shell Case Study
              </Button>
              <Button
                onClick={() => window.open('https://www.thestar.com.my/lifestyle/living/2023/09/11/shell-nxplorers-sparks-student-interest-in-stem', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                News Article
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChillaxProject;
