
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { toast } from 'sonner';

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:anishapk@seas.upenn.edu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Hi Anisha,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    )}`;
    
    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
    onOpenChange(false);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#2B2E10]">
            Get In Touch
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-[#2B2E10] font-medium">Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="mt-1"
              placeholder="Your full name"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-[#2B2E10] font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="mt-1"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <Label htmlFor="subject" className="text-[#2B2E10] font-medium">Subject</Label>
            <Input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              required
              className="mt-1"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-[#2B2E10] font-medium">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
              className="mt-1 min-h-[100px]"
              placeholder="Your message here..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#2B2E10] text-white hover:bg-[#3a4015]"
            >
              Send Message
            </Button>
          </div>
        </form>

        <div className="text-center pt-4 border-t">
          <p className="text-sm text-gray-600">
            You can also reach me directly at{' '}
            <a href="mailto:anishapk@seas.upenn.edu" className="text-[#2B2E10] hover:underline font-medium">
              anishapk@seas.upenn.edu
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
