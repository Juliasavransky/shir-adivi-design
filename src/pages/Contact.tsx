import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircleMore,
  Youtube,
} from 'lucide-react';
import { useLanguage } from '@/stores/useLanguage';
import { Link } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { PopUp } from '@/components/PopUp';

export const Contact = () => {
  const { lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent successfully!',
      description: "I'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className='min-h-screen py-20'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>
            Let's Work Together
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto'>
            Ready to bring your vision to life? I'd love to hear about your project and explore how we can create something amazing together.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Contact Form */}
          <Card className='p-6 sm:p-8'>
            <h2 className='text-2xl sm:text-3xl font-handwriting font-semibold mb-6'>
              Drop me a line
            </h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <Label htmlFor='firstName'>First Name</Label>
                  <Input id='firstName' name='firstName' required />
                </div>
                <div>
                  <Label htmlFor='lastName'>Last Name</Label>
                  <Input id='lastName' name='lastName' required />
                </div>
              </div>

              <div>
                <Label htmlFor='email'>Email Address</Label>
                <Input id='email' name='email' type='email' required />
              </div>

              <div>
                <Label htmlFor='subject'>Subject</Label>
                <Input id='subject' name='subject' required />
              </div>

              <div>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  id='message'
                  name='message'
                  rows={6}
                  placeholder='Tell me about your project...'
                  required
                />
              </div>

              <div className='flex flex-wrap items-center gap-2'>
                <Checkbox required />
                <button
                  type='button'
                  className='hover:text-primary underline text-sm'
                  onClick={() => setIsOpen(true)}
                >
                  I accept the Privacy Policy
                </button>
                <PopUp
                  open={isOpen}
                  onOpenChange={setIsOpen}
                  contentType='policy'
                />
              </div>

              <div>
                <Label htmlFor='file'>Attach Files (Optional)</Label>
                <Input
                  id='file'
                  name='file'
                  type='file'
                  multiple
                  className='cursor-pointer'
                  accept='.jpg,.jpeg,.png,.pdf,.docx'
                  aria-describedby='fileHelp'
                />
                <p className='text-sm text-muted-foreground mt-1'>
                  You can attach reference materials, briefs, or inspiration files.
                </p>
              </div>

              <Button
                type='submit'
                size='lg'
                className='w-full'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className='space-y-8'>
            <Card className='p-6'>
              <h3 className='text-xl sm:text-2xl font-handwriting text-center font-semibold mb-4'>
                Contact Information
              </h3>
              <div className='space-y-4 flex flex-col items-center text-center'>
                <div className='flex items-center gap-3'>
                  <Mail className='h-5 w-5 text-primary' />
                  <span>hello@shiradivi.com</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Phone className='h-5 w-5 text-primary' />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className='flex items-center gap-3'>
                  <MapPin className='h-5 w-5 text-primary' />
                  <span>Available Worldwide</span>
                </div>
              </div>
            </Card>

            <Card className='p-6'>
              <div className='text-center'>
                <h3 className='text-xl sm:text-2xl font-handwriting font-semibold mb-4'>
                  Feel free to reach out
                </h3>
                <div className='flex flex-wrap justify-center gap-4 mt-4'>
                  <Link to='https://www.instagram.com/shiradivi' target='_blank' rel='noopener noreferrer'>
                    <Instagram className='h-6 w-6 sm:h-8 sm:w-8 text-primary' />
                  </Link>
                  <Link to='https://t.me/shiradivi' target='_blank' rel='noopener noreferrer'>
                    <Youtube className='h-6 w-6 sm:h-8 sm:w-8 text-primary' />
                  </Link>
                  <Link to='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                    <Facebook className='h-6 w-6 sm:h-8 sm:w-8 text-primary' />
                  </Link>
                  <Link to='https://facebook.com/' target='_blank' rel='noopener noreferrer'>
                    <Linkedin className='h-6 w-6 sm:h-8 sm:w-8 text-primary' />
                  </Link>
                  <Link to='https://linkedin.com/in' target='_blank' rel='noopener noreferrer'>
                    <MessageCircleMore className='h-6 w-6 sm:h-8 sm:w-8 text-primary' />
                  </Link>
                </div>
                <p className='text-muted-foreground mt-4 text-sm'>
                  For immediate questions or project discussions, reach out via WhatsApp.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};