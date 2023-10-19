import { Image } from 'components';

export const DashboardView: React.FC = () => {
  return (
    <div className="flex column align-center height-100">
      <Image
        src="./hitch-hiker.jpg"
        alt="hitch-hiker"
        style={{ position: 'relative' }}
      />
      <br />
      <h1 style={{ width: '50%', fontFamily: 'sans-serif' }}>
        Welcome Username
      </h1>
      <a style={{ width: '50%', fontSize: '18px' }}>
        We support function to explore the world of photos
      </a>
      <a style={{ width: '50%', fontSize: '18px' }}>
        Of course you have your own photos and albums and can share just with
        your friends and chat about your photos' specialty
      </a>
    </div>
  );
};
