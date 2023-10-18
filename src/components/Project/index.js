import React from 'react';
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';

const data = [
    {
        id: 1,
        name: 'Little Lemon Restaurant Website',
        description: 'This project was created during Meta Coursera Front-End Development course. This website was the culmuniation of the Front-End Development Track. This website showcased implementing a booking application on the Little Lemon Website. This was created with React Components to show an understanding of utilizing React for creating the website. This also features utilzing API calls.',
        link: 'https://little-lemon-restaurant-prachi.netlify.app/',
      },
    {
      id: 2,
      name: 'European Weather Forecast',
      description: 'This platform is designed to provide you with up-to-date weather information across various European destinations, enabling you to make well-informed travel plans. Whether you are a seasoned traveler or embarking on your first European adventure, our website aims to enhance your travel experience.',
      link: 'https://prachi2795.github.io/weatherforecast/',
    },
    {
      id: 3,
      name: 'Movie Seat Booking',
      description: 'Display movie choices and seats in a theater to select from in order to purchase tickets.',
      link: 'https://prachi2795.github.io/movie-seat-booking-main/',
    },
  ];

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
     return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div className="container project-page">
        <div className="text-zone">
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c ', 't', 's']}
              idx={20}
            />
        </h1>
        {data.map((data) => (
          <p key={data.id}>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Project;