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

export const Contact = () => {
  const { lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
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
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            Let's Work Together
          </h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Ready to bring your vision to life? I'd love to hear about your
            project and explore how we can create something amazing together.
          </p>
        </div>

        <div className='grid grid-cols-3 lg:grid-cols-2 gap-8'>
          {/* Contact Form */}
          <Card className='p-8 grid-cols-2  lg:grid-cols-2'>
            <h2 className='text-3xl font-handwriting font-semibold mb-6'>
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
                  You can attach reference materials, briefs, or inspiration
                  files.
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
          <div className='space-y-8 grid-cols-2 lg:grid-cols-2'>
            <Card className='p-6'>
              <h3 className='text-2xl font-handwriting text-center font-semibold mb-4'>
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
              <div className='text-center '>
                <h3 className='text-2xl font-handwriting font-semibold mb-4'>
                  Feel free to reach out{' '}
                </h3>

                <div className='flex items-center justify-around mt-4'>
                  <Link
                    to='https://www.instagram.com/shiradivi'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Instagram className='h-8 w-8 text-primary inline-block mr-2 cursor-pointer' />
                  </Link>
                  <Link
                    to='https://t.me/shiradivi'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary hover:underline'
                  >
                    <Youtube className='h-8 w-8 text-primary inline-block mr-2 cursor-pointer' />
                  </Link>
                  <Link
                    to='https://instagram.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary hover:underline'
                  >
                    <Facebook className='h-8 w-8 text-primary inline-block mr-2 cursor-pointer' />
                  </Link>
                  <Link
                    to='https://facebook.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary hover:underline'
                  >
                    <Linkedin className='h-8 w-8 text-primary inline-block mr-2 cursor-pointer' />
                  </Link>
                  <Link
                    to='https://linkedin.com/in'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary hover:underline'
                  >
                    <MessageCircleMore className='h-8 w-8 text-primary inline-block mr-2 cursor-pointer' />
                  </Link>
                </div>
              </div>
              <p className='text-muted-foreground mb-4 text-center text-normalized pt-4'>
                For immediate questions or project discussions, reach out via
                WhatsApp.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
