import { contactLinks } from '../data/content.js';

const ContactSection = () => {
  const lastIndex = contactLinks.length - 1;

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h6 className="mobile-text-center">
              Interested to know more about me? Reach to me via{' '}
              <a href="mailto:nageshgupta0806@gmail.com" title="Email Nagesh Gupta" target="_blank" rel="noopener">
                <mark className="email-change"> Email!</mark>
              </a>
              <div className="empty-contact"></div>
              Follow me on{' '}
              {contactLinks.map((link, idx) => (
                <span key={link.label}>
                  {idx === lastIndex && 'and '}
                  <a href={link.href} title={link.title} target="_blank" rel="noopener" className="contact-w-arrow">
                    <mark>{` ${link.label}`}</mark>
                  </a>
                  {idx < lastIndex - 1 ? ', ' : idx === lastIndex - 1 ? ' ' : ''}
                </span>
              ))}
              ✨
              <div className="empty-contact"></div>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

