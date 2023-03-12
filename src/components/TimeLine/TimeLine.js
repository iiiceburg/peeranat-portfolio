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
        2+ years of work experience in designing the user interface and user experience as UX/UI Designer | Experience as a Fullstack Developer developing a frontend application using react-redux and a RESTful API using Node.js In addition, Understand OOP with Java and Python | Expertise in WordPress and Fast to build a website.
      </SectionText>
      <div className="experience-container">
        <div className="exp-header">
          <h1>Web Developer</h1>
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
            <br /><br />• Collaborated on 2 projects with MFEC Infrastructure team, Buff technology build a software solution and MFEC Infrastructure team are the partner who provide s solution for infrastructure development.
            <br /><br />• Using Azure for development 3 projects , such as Azure DevOps for creating CI/CD pipelines and Azure Cloud Service for app deployment.
            <br /><br />• Participated in 30+ weekly code reviews to ensure code quality and receive mentoring from senior developers .
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Timeline;
