import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  return (
    <Section id="experiences">
      <SectionTitle>Experience</SectionTitle>
      <SectionText width='width100'>
      3+ years of expertise in software development as a Fullstack Developer developing a web application using Next.js and Express.js. | Experience with cloud services like as Microsoft Azure, GCP, and AWS to design a cloud-based solution. Now I'm interested in cybersecurity and devsecops in order to increase application security.
      </SectionText>
      <div className="experience-container">
        <div className="exp-header">
          <h1>Fullstack Developer</h1>
          <h3>Apr 2021 - Present</h3>
        </div>
        <div className="exp-company">
          <h4>Buff Technology</h4>
        </div>
        <div className="exp-detail">
          <p>
            <br />• Design and Develop 3 web applications using React.js for frontend also learning using redux to manage state in react, using node.js and laravel for backend to building RESTful API, and PostgreSQL for the database. These applications help 2 public sectors The Bureau of Royal Scribes and Royal Decoration and The Hydrographic Department Royal Thai Navy to reduce complex processes to streamline the working.
            <br /><br />• Understanding consumer pain points and developing solutions through design to improve the user experience for users to easily use will enable Thai government officers who need to access information from two public sectors can easily use.
            <br /><br />• Implement LDAP authentication with Azure Active Directory and use Azure AD Connect to sync AD profiles On-premises.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Timeline;
