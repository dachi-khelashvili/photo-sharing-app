import React from 'react';
import { Container, Card } from './styles';

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

export const PhotoShop: React.FC = () => {
  return (
    <Container>
      {photosList.map((value) => {
        return (
          <Card
            src={value.src}
            uploader={value.uploader}
            time={value.time}
            width={
              Math.floor(Math.random() * (600 - 200 + 1) + 200).toString() +
              'px'
            }
          />
        );
      })}
    </Container>
  );
};
