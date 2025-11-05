import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  // DialogClose,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';

export function PopUp({
  open,
  onOpenChange,
  contentType,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contentType: 'policy' | 'terms';
}) {

  

  console.log("onOpenChange", onOpenChange);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
         <DialogContent className="sm:max-w-[600px]">
       <button
          onClick={() => onOpenChange(false)}
          className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none z-50'
          aria-label='Close'
        >
          <X className='h-4 w-4' />
        </button>
        <DialogHeader>
          <DialogTitle>
            {contentType === 'policy' ? 'Privacy Policy' : 'Website Terms'}
          </DialogTitle>
        </DialogHeader>
        <div className='p-4 text-sm leading-relaxed max-h-[70vh] overflow-y-auto text-left rtl:text-right space-y-4'>
          {contentType === 'policy' ? (
            <>
              <h2 className='text-xl font-bold mb-4'>
                Privacy Policy – Shir Adivi, Graphic Designer
              </h2>

              <section>
                <h3 className='font-semibold mt-4'>General</h3>
                <p>
                  Shir Adivi – Graphic Designer and Visual Creator (“the
                  Studio”) respects the privacy of visitors to her website. This
                  document details the privacy policy in effect on the site,
                  explaining what data is collected, how it is used, and your
                  rights according to the Israeli Privacy Protection Law, 1981
                  (including Amendment 13) and applicable law.
                </p>
              </section>

              <section>
                <h3 className='font-semibold mt-4'>Database Owner Details</h3>
                <p>
                  The database owner is Shir Adivi – Graphic Designer.
                  <br />
                  There are currently no dedicated contact details for privacy
                  matters.
                </p>
              </section>

              <section>
                <h3 className='font-semibold mt-4'>
                  Personal Information Collected
                </h3>
                <p>
                  When submitting details via the contact form on the website,
                  the following information may be collected (if you provide
                  it):
                  <br />- Full name
                  <br />- Email address
                  <br />- Phone number
                  <br />
                  Providing this information is voluntary, but without it, the
                  studio may not be able to respond to your inquiry.
                </p>
              </section>

              <section>
                <h3 className='font-semibold mt-4'>Purpose of Data Use</h3>
                <p>
                  The data will be used solely for contacting you, responding to
                  your inquiry, and providing additional information about the
                  studio’s services. The data will not be transferred to third
                  parties or used for any other purpose without your consent.
                </p>
              </section>

              <section>
                <h3 className='font-semibold mt-4'>
                  Data Storage and Security
                </h3>
                <p>
                  The information you provide is sent directly to the studio’s
                  email inbox. Reasonable efforts are made to protect the data,
                  but absolute protection cannot be guaranteed.
                </p>
              </section>

              <section>
                <h3 className='font-semibold mt-4'>Your Rights</h3>
                <p>
                  You are entitled to request access, correction, deletion, or
                  objection to the use of your data in accordance with the law.
                </p>
              </section>

              <section>
                <h3 className='font-semibold mt-4'>
                  Cookies and External Services
                </h3>
                <p>
                  Currently, the site does not use cookies or tracking tools.
                  Should such services be implemented in the future, this policy
                  will be updated accordingly.
                </p>
              </section>

              <section>
                <h3 className='font-semibold mt-4'>Data Retention</h3>
                <p>
                  Data is stored only for the purpose of contacting you. You may
                  request its deletion at any time.
                </p>
              </section>

              <section>
                <h3 className='font-semibold mt-4'>Policy Changes</h3>
                <p>
                  The studio reserves the right to update this policy as needed.
                  In case of significant changes, an updated version will be
                  published on the website.
                </p>
              </section>
            </>
          ) : (
            <p>
              The full and binding website terms and conditions will appear
              here...
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}


