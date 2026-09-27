
import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import ContactModal from '@/components/ContactModal';
import { useState } from 'react';

const Index = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B2E10] to-[#1a1c0a]">
      <Hero onContactClick={() => setShowContact(true)} />
      <ProjectsGrid />
      <ContactModal open={showContact} onOpenChange={setShowContact} />
    </div>
  );
};

export default Index;
