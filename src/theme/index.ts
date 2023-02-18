import {StyleProp, TextStyle} from 'react-native/types';

export const color = {
  violet: '#7F3DFF',
  gray64: 'rgba(252,252,252,0.64)',
  lightGray: '#F1F1FA',
};

export function font(
  fontSize: number,
  fontWeight: 'regular' | 'medium' | 'semi-bold' | 'bold' = 'regular',
) {
  let weight = 'regular';
  switch (fontWeight) {
    case 'regular':
      weight = '400';
      break;
    case 'medium':
      weight = '500';
      break;
    case 'semi-bold':
      weight = '600';
      break;
    default:
      weight = '800';
  }

  console.log(fontWeight);

  return {
    fontSize,
    fontWeight: weight,
  } as any;
}
