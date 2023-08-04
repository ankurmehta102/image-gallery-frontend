import React, { ReactNode } from 'react';
import { SIZES, WEIGHTS } from '../../utils/constant';

type TextPropType = {
  children: ReactNode;
  textSize?: SIZES;
  textColor?: string;
  textWeight?: WEIGHTS;
};
const textSizeFinder = (size = '') => {
  switch (size) {
    case SIZES.X_SMALL:
      return 'text-xs';
    case SIZES.SMALL:
      return 'text-sm';
    default:
      return '';
  }
};
const textWeightFinder = (weight = '') => {
  switch (weight) {
    case WEIGHTS.LITE:
      return '';
    case WEIGHTS.MEDIUM:
      return 'font-bold';
    case WEIGHTS.HEAVY:
      return 'font-extrabold';
    default:
      return '';
  }
};

const Text = ({ children, textSize, textColor, textWeight }: TextPropType) => {
  const size = textSizeFinder(textSize);
  const weight = textWeightFinder(textWeight);
  const color = '';
  return <p className={`${size} ${color} ${weight}`}>{children}</p>;
};

export default Text;
