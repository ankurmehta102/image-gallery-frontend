import { CardPropTypes } from './Card';

const ImageSection = ({ imageLink }: Pick<CardPropTypes, 'imageLink'>) => {
  return (
    <div
      id="image-container"
      className="h-40 w-44 overflow-hidden border border-black"
    >
      <img src={imageLink} alt="" className="h-full w-full object-cover" />
    </div>
  );
};

export default ImageSection;
