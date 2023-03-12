import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome
        </SectionTitle>
        <SectionText>
          Hey there, This is Peeranat Ounhnana who passionate about Cybersecurity and Cloud Solution Architect. Gold Microsoft Learn Student Ambassador | Mid-level Full Stack Developer | MCT | SEC+, AZ-500, ECSS.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/PeeranatCV.pdf';
        }}>My CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
