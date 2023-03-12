import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import ReactSlick from '../ReactSlick/ReactSlick';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';


let data = [
  {
    image: '/images/badges/1.png'
  },
  {
    image: '/images/badges/4.png'
  },
  {
    image: '/images/badges/2.png'
  },
  {
    image: '/images/badges/9.png'
  },
  {
    image: '/images/badges/5.png'
  },
  {
    image: '/images/badges/6.png'
  },
  {
    image: '/images/badges/7.png'
  },
  {
    image: '/images/badges/8.png'
  },
  {
    image: '/images/badges/3.png'
  },
  {
    image: '/images/badges/10.png'
  },
  {
    image: '/images/badges/11.png'
  },
  {
    image: '/images/badges/12.png'
  }
]

const Acomplishments = () => (
  <Section className='section-certificates'>
    <div className="title-badges" id="certificates">
      <SectionTitle>Certificates</SectionTitle>
      <a href='https://www.credly.com/users/peeranat-ounhanan/badges' target="_blank"><span>SEE ALL</span></a>
    </div>
    <ReactSlick data={
      data.map((item) => {
        return (
          <img className="badges-item" src={item.image} alt={item.title} />
        )
      })
    }
      setting={{
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      }}
    />
    <SectionDivider colorAlt botSepCert/>
  </Section>
);

export default Acomplishments;
