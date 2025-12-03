import { experiencesPrimary } from '../data/content.js';

const ExperienceCard = ({ experience, cardClass = 'single-advantage' }) => {
  const paragraphs = Array.isArray(experience.description)
    ? experience.description
    : experience.description
    ? [experience.description]
    : [];

  return (
    <div className={`${cardClass} mobile-text-center fade-up-box`}>
      <span className="fade-up-item exp-date">{experience.date}</span>
      {experience.location ? <span className="fade-up-item exp-location">{experience.location}</span> : null}
      <h4 className="fade-up-item">{experience.company}</h4>
      <h5 className="fade-up-item">{experience.role}</h5>
      {paragraphs.map((paragraph, idx) => (
        <p className="fade-up-item" key={idx}>
          {paragraph}
        </p>
      ))}
      {experience.techStack ? (
        <p className="fade-up-item exp-tech">
          <strong>Tech Stack:</strong> {experience.techStack}
        </p>
      ) : null}
    </div>
  );
};

const ExperienceRows = ({ items, rowClass, detailClass, cardClass }) =>
  items.map((experience, idx) => (
    <div
      className={`row ${rowClass}`}
      key={`${experience.company}-${idx}`}
      style={{ '--board-order': items.length - idx }}
    >
      <div className="col-md-12">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className={`col-md-8 ${detailClass}`}>
              <ExperienceCard experience={experience} cardClass={cardClass} />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  ));

export const ExperienceSection = () => (
  <section className="three-board-section" id="experience">
    <div className="container">
      <div className="row">
        <div className="col-md-12 three-board-desc fade-up-box">
          <h3 className="mobile-text-center fade-up-item">Work Experience</h3>
        </div>
      </div>
    </div>
    <div className="sticky-height" style={{ '--board-count': experiencesPrimary.length }}>
      <div className="sticky-3-board">
        <div className="container-fluid sticky-relative">
          <ExperienceRows
            items={experiencesPrimary}
            rowClass="single-board"
            detailClass="advantages-detail"
            cardClass="single-advantage"
          />
        </div>
      </div>
    </div>
  </section>
);
