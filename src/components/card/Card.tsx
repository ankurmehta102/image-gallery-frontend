import ImageSection from './ImageSection';
import InfoSection from './InfoSection';

export type CardPropTypes = {
  name: string;
  size: string;
  date: string;
  imageLink: string;
  bgColor: string;
};

const Card = ({ name, size, date, imageLink, bgColor }: CardPropTypes) => {
  return (
    <div
      id="container"
      className={`flex flex-col items-center justify-center ${bgColor} rounded border border-black p-3 hover:brightness-105`}
    >
      <ImageSection imageLink={imageLink} />
      <InfoSection name={name} size={size} date={date} />
    </div>
  );
};

export default Card;
