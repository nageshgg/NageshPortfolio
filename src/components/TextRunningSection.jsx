import { Fragment } from 'react';
import { marqueeSkillsLeft, marqueeSkillsRight } from '../data/content.js';

const ServiceList = ({ items }) => (
  <div className="single-services-list">
    {items.map((skill) => (
      <Fragment key={skill}>
        <div className="service-name">{skill}</div>
        <div className="break"></div>
      </Fragment>
    ))}
  </div>
);

const TextRunningSection = () => (
  <section className="text-running-way-sec">
    <div className="text-desc">
      <p className="mobile-text-center">“Eat. Excercise. Sleep. Code. Repeat”</p>
    </div>
    <div className="text-running-way-left text-running-way">
      <div className="text-row">
        <ServiceList items={marqueeSkillsLeft} />
      </div>
    </div>
    <div className="text-running-way-right text-running-way">
      <div className="text-row">
        <ServiceList items={marqueeSkillsRight} />
      </div>
    </div>
  </section>
);

export default TextRunningSection;
