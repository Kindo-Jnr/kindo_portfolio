import React from 'react';
import TechIcon from '../components/Models/TechLogos/TechIcon';
import TitleHeader from '../components/TitleHeader'; // Ensure this path is correct
import { techStackIcons } from '../constants'; // Update this import if needed

const TechStacks = () => {
  return (
    <div className='flex-center section-padding' id='skills'>
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader 
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring to The Table"
        />

        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className='tech-card-animated-bg' />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p className='mb-3'>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
