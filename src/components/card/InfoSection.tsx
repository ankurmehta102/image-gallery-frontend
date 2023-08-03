import { SIZES, WEIGHTS } from '../../utils/constant';
import { CardPropTypes } from './Card';
import Text from './Text';

type InfoSectionPropType = Pick<CardPropTypes, 'name' | 'size' | 'date'>;

const InfoSection = ({ name, size, date }: InfoSectionPropType) => {
  return (
    <div
      id="info-container"
      className="mt-1 flex h-10 w-44 flex-col justify-between"
    >
      <div id="name" className="text-black">
        <Text textSize={SIZES.SMALL} textWeight={WEIGHTS.MEDIUM}>
          {name}
        </Text>
      </div>
      <div id="info" className="flex justify-between text-black">
        <Text textSize={SIZES.X_SMALL}>{size}</Text>
        <Text textSize={SIZES.X_SMALL}>{date}</Text>
      </div>
    </div>
  );
};

export default InfoSection;
