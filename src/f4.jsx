import _ from 'lodash';
import { groupBy } from './utils';
import { height, width, padding, maxAges } from './parameters';
import { ma } from './utils';

export default function f4(canvas, data) {
  const text = `
  END. <br> <i>Press any key to restart.</i>
  `;
  Typed.new('#typed', { strings: [text] });
}
