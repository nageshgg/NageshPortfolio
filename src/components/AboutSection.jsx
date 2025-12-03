import { aboutContent } from '../data/content.js';

const AboutSection = () => (
  <section className="about-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-4 fade-up-box">
          <img src={aboutContent.image} alt={aboutContent.name} className="fade-up-item" />
        </div>
        <div className="col-md-7 what-is mobile-text-center fade-up-box">
          <span className="fade-up-item">About Me</span>
          <h3 className="fade-up-item">{aboutContent.name}</h3>
          {aboutContent.paragraphs.map((text, idx) => (
            <p className="fade-up-item" key={idx}>
              {text}
            </p>
          ))}
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  </section>
);

export default AboutSection;

