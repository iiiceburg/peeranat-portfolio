import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './ActivitiesStyles';
import ReactSlick from '../ReactSlick/ReactSlick';

const data = [
  {
    name: 'Winner Mini Hackathon Food Tech Startup',
    date: 'February 2023',
    organization: 'Bangkok University and Berkeley SKYDECK',
    image: '/images/activities/5.jpg'
  },
  {
    name: '6th place in Final round Palo Alto Networks Capture The Flag, Capture the Future Competition 2022',
    date: 'November 2022',
    organization: 'Palo Alto Networks Thailand',
    image: '/images/activities/4.jpg'
  },
  {
    name: '10th  place with STDiO CTF Competition 2022',
    date: 'November 2022',
    organization: '2600 Thailand',
    image: '/images/activities/3.jpg'
  },
  {
    name: 'Completed intensive cybersecurity capacity building program 1 in specialist level',
    date: 'November 2022',
    organization: 'National Cyber Security Agency',
    image: '/images/activities/6.jpg'
  },
  {
    name: 'RUNNER-UP RE:THINK WITH Microsoft',
    date: 'October 2022',
    organization: 'CHOICEISYOURS | Microsoft Thailand',
    image: '/images/activities/2.png'
  },
  {
    name: '1st win THNG Camp#10: Internet Governance & Hackathon',
    date: 'December 2020',
    organization: 'Thailand Network Information Center',
    image: '/images/activities/1.png'
  }
];

const Activities = () => (
  <Section id='activities'>
    <SectionTitle>Activities</SectionTitle>
    <ReactSlick data={
      data.map((item) => {
        return (
          <div className="container-act">
            <div className="act-date">
              <h3>{item.date}</h3>
            </div>
            <div className="act-image">
              <img src={item.image} alt="" />
            </div>
            <div className="act-desc">
              <div className="act-title">
                <h3>
                  {item.name}
                </h3>
              </div>
              <SectionDivider sep />
              <div className="act-org">
                <h4>{item.organization}</h4>
              </div>
            </div>
          </div>
        )
      })
    }
      setting={{
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }}
    >

    </ReactSlick>
    <SectionDivider />
  </Section>
);

export default Activities;
