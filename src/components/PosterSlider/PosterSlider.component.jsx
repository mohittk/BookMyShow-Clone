import React from 'react';
import Poster from '../Poster/Poster.component.jsx';
import { settings } from '../config';
import Slider from 'react-slick';

// images,title,subtitle
const PosterSlider = (props) => {
  return (
    <>
      <div className='flex flex-col items-start py-4'>
        <h3
          className={` text-2xl font-bold ${
            props.isDark ? 'text-white' : 'text-grey-800'
          }`}
        >
          {props.title}
        </h3>
        <p
          className={` text-sl font-bold ${
            props.isDark ? 'text-white' : 'text-grey-800'
          }`}
        >
          {props.subtitle}
        </p>
      </div>
      <Slider {...settings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
