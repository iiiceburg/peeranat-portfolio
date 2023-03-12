import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import ReactSlick from '../ReactSlick/ReactSlick';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  display: grid;
  margin-bottom : 50px;
  gap: 2rem;
  
  @media only screen and (min-width: 1024px) {
    /* flex-direction: row; */
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
 
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  /* grid-template-columns: 1fr 1fr 1fr; */

  .image-container {
    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: .5s ease;
      background-color: #008CBA;
    }

    .text {
      color: white;
      font-size: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
    }

    :hover {
      opacity: 1;
    }
  }

  & > * {
    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 5px;
      object-position: top;
    }
  }
  /* padding-top: 3rem; */
`

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <ProjectContainer>
      <div className="container">
        <div className="content">
          <a href="https://thanundon.com/" target="_blank">
            <div className="content-overlay"></div>
            <img className="content-image" src="/images/thanundon.png" alt="" />
            <div className="content-details fadeIn-top">
              <h3>Thanundon Project</h3>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <a href="https://missiontotopu.com/" target="_blank">
            <div className="content-overlay"></div>
            <img className="content-image" src="/images/mtu.PNG" alt="" />
            <div className="content-details fadeIn-top">
              <h3>Missiont to top U Project</h3>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <a href="https://munkongsteel.com/" target="_blank">
            <div className="content-overlay"></div>
            <img className="content-image" src="/images/mks.PNG" alt="" />
            <div className="content-details fadeIn-top">
              <h3>Munkongsteel Project</h3>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <a href="https://www.munkongpanel.com/" target="_blank">
            <div className="content-overlay"></div>
            <img className="content-image" src="/images/mkp.PNG" alt="" />
            <div className="content-details fadeIn-top">
              <h3>Munkongpanel Project</h3>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <a href="https://www.onegrowth.asia/" target="_blank">
            <div className="content-overlay"></div>
            <img className="content-image" src="/images/onegrowth.PNG" alt="" />
            <div className="content-details fadeIn-top">
              <h3>OneGrowth Asia Project</h3>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <a href="https://essayapollo.com/" target="_blank">
            <div className="content-overlay"></div>
            <img className="content-image" src="/images/essay.PNG" alt="" />
            <div className="content-details fadeIn-top">
              <h3>Essay Apollo Project</h3>
            </div>
          </a>
        </div>
      </div>
    </ProjectContainer>
    <SectionDivider topSep/>
  </Section>
);

export default Projects;