import { experienceCounter, projects } from '../data/content.js';

const PortfolioCard = ({ project }) => (
  <div className="single-portfolio">
    <a href={project.link} title={`Github repo of ${project.title}`} target="_blank" rel="noopener">
      <div className="portfolio-img">
        <img src={project.image} alt={project.title} />
      </div>
    </a>
    <div className="portfolio-text">
      <h4>{project.title}</h4>
      <p>{project.stack}</p>
      <span>{project.summary}</span>
    </div>
  </div>
);

const PortfolioSection = () => (
  <section className="portfolio-section" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-6 col-md-6 left-portfolio-text mobile-text-center">
          <h3>Projects</h3>
        </div>
        <div className="col-lg-5 col-md-6 circular-text">
          <div className="circular-wrapper">
            <div className="rotate-text">
              <svg viewBox="0 0 220 220">
                <path
                  id="curve"
                  d="M 110 110, 
                                m -90, 0
                                a 90,90 0 1,1 180,0
                                a 90,90 0 1,1 -180,0"
                  fill="transparent"
                />
                <text>
                  <textPath xlinkHref="#curve">
                    Projects — Projects — Projects — Projects — Projects —
                    Projects — Projects — Projects —
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="counter">
              <span>{experienceCounter.years}</span>
              <p>
                {experienceCounter.label[0]} <br />
                {experienceCounter.label[1]} <br />
                {experienceCounter.label[2]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="horizontal-scroll-container">
      <div className="sticky-wrapper">
        <div className="relative-use">
          <div className="all-portfolio">
            {projects.map((project, idx) => (
              <PortfolioCard project={project} idx={idx} key={`${project.title}-${idx}`} />
            ))}
            <div className="show-all-portfolio">
              <a href="https://github.com/nageshgg" title="Github profile of Nagesh Gupta" target="_blank" rel="noopener">
                <div className="card-area">
                  <i className="fa fa-github"></i>
                  <p>
                    Check out my other <br />
                    projects on GitHub!
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
