import React from 'react';
import { Container, CardStyle } from './styles';

interface CardProps {
  src: string;
  uploader: string;
  time: string;
  width: string;
}

const Card: React.FC<CardProps> = ({ src, uploader, time, width }) => {
  return (
    <CardStyle width={width}>
      <img src={src} alt={src} style={{ width: '100%' }} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '5px',
        }}
      >
        <a>{uploader}</a>
        <a>{time}</a>
      </div>
    </CardStyle>
  );
};

export const PhotoShop: React.FC = () => {
  const photosList = [
    {
      src: './background.jpg',
      uploader: 'Bruce Wang',
      time: '10/13/2023',
      width: '500px',
    },
    {
      src: './hitch-hiker.jpg',
      uploader: 'Nakio Akira',
      time: '10/16/2023',
      width: '200px',
    },
    {
      src: './mountain.jpg',
      uploader: 'Lily Porter',
      time: '10/11/2023',
      width: '400px',
    },
    {
      src: './jungle.jpg',
      uploader: 'Lily Porter',
      time: '10/11/2023',
      width: '300px',
    },
  ];

  return (
    <Container>
      {photosList.map((value) => {
        return (
          <Card
            src={value.src}
            uploader={value.uploader}
            time={value.time}
            width={value.width}
          />
        );
      })}
    </Container>
  );
};
