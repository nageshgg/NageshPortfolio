import { heroContent, navLinks, resumeContent, topSocialLinks } from '../data/content.js';

const NavBar = () => {
  const showResume = resumeContent?.showDownload !== false;

  return (
    <section className="top-nav-sec">
      <div className="top-nav-wrapper">
        <div className="top-nav">
          <a href="#action" title="Navbar">
            <div className="sticky-menu">
              <i className="fas fa-bars"></i>
            </div>
          </a>
          <div className="left-icon-area">
            <p>
              {heroContent.firstName} <span>{heroContent.lastName}</span>
            </p>
          </div>
          <div className="center-btn-area">
            <ul>
              {navLinks.map(({ label, target }) => (
                <li data-target={target} key={target}>
                  <a href="#" title={`${label} Section`}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="right-btn-area">
            <div className="nav-get-started">
              <a href="#" title="Homepage" className="button-look get-started">
                {heroContent.buttonLabel}
              </a>
            </div>
            {showResume ? (
              <div className="nav-get-started">
                <a
                  href={resumeContent.file}
                  title="Download Resume PDF"
                  className="button-look"
                  target="_blank"
                  rel="noopener"
                  download
                >
                  {heroContent.download_Resume}
                </a>
              </div>
            ) : null}
            <div className="side-menu">
              <div className="side-menu-burger">
                <i className="fas fa-bars"></i>
              </div>
            </div>
          </div>
          <div className="mobile-bottom-contact">
            <div className="nav-phone-number">
              <p>Connect with me!</p>
            </div>
            {showResume ? (
              <div className="mobile-resume-cta">
                <a
                  href={resumeContent.file}
                  title="Download Resume PDF"
                  className="button-look"
                  target="_blank"
                  rel="noopener"
                  download
                >
                  Download Resume
                </a>
              </div>
            ) : null}
            <div className="nav-social-media">
              {topSocialLinks.map(({ href, iconClass, title }) => (
                <a href={href} target="_blank" rel="noopener" title={title} key={title}>
                  <i className={iconClass}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
