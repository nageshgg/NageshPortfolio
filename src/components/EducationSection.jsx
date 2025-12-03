import { educationSteps } from '../data/content.js';

const EducationSection = () => (
  <section className="process-section" id="education">
    <div className="section-text-start">
      <span>Education</span>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="process-scroll-area">
            <div className="process-sticky">
              <div className="process-moving-relative">
                <div className="circle">
                  <div className="circle-content">
                    <p className="text"></p>
                    <p className="number"></p>
                    <a href="#action" title="Education">
                      <div className="step-by-step-button">
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-moving-path">
              <div className="process-path-svg-relative">
                <div className="mobile-step-start">
                  <div className="mobile-circle">
                    <p>Education</p>
                  </div>
                </div>
                {educationSteps.map((step, idx) => (
                  <div className={`single-process process-${idx + 1}`} key={step.institution}>
                    <div className="process-text-wrapper">
                      <span>{step.period}</span>
                      <h5>{step.institution}</h5>
                      <h6>{step.degree}</h6>
                      {step.details.map((detail, detailIdx) => (
                        <p key={detailIdx}>{detail}</p>
                      ))}
                      <div className="next-step" data-target={idx + 1}>
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;

