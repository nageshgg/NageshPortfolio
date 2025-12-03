import { publications } from '../data/content.js';

const PublicationCard = ({ publication }) => (
  <div className="single-publication" key={publication.title}>
    <a href={publication.link} title={`Publication link of ${publication.title}`} target="_blank" rel="noopener">
      <div className="publication-img">
        <img src={publication.image} alt={publication.title} />
      </div>
    </a>
    <div className="publication-text">
      <h4>{publication.title}</h4>
      <p>{publication.venue}</p>
      <span>{publication.description}</span>
    </div>
  </div>
);

const PublicationSection = () => (
  <section className="publication-section" id="publications">
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 col-md-6 left-publication-text mobile-text-center">
          <h3>Publications</h3>
        </div>
        <div className="col-lg-3 col-md-6"></div>
      </div>
    </div>
    <div className="horizontal-scroll-container-2">
      <div className="sticky-wrapper">
        <div className="relative-use">
          <div className="all-publication">
            <div className="single-publication"></div>
            {publications.map((publication) => (
              <PublicationCard publication={publication} key={publication.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PublicationSection;

