import {StyleProp, TextStyle} from 'react-native/types';

export const color = {
  violet: '#7F3DFF',
  violet20: '#EEE5FF',
  gray64: 'rgba(252,252,252,0.64)',
  superLightGray: '#F1F1FA',
  lightGray: '#91919F',
  lightOrange: '#FFF6E5',
  green: '#00A86B',
  red: '#FD3C4A',
  snow: '#FCFCFC',
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

  return {
    fontSize,
    fontWeight: weight,
  } as any;
}
