/* global d3 */

import _ from 'lodash';
import { groupBy } from './utils';
import { height, width, margin } from './parameters';

import Axes from './components/Axes';
import GenderSymbols from './components/GenderSymbols';
import GroupSymbols from './components/GroupSymbols';
import HeartSymbols from './components/HeartSymbols';
import Passengers from './components/Passengers';

import intro from './frames/intro';
import f0 from './frames/f0';
import f1 from './frames/f1';
import f2 from './frames/f2';
import f3 from './frames/f3';
import f4 from './frames/f4';
import f5 from './frames/f5';

const canvas = d3.select('#svg')
  .attr('width', width)
  .attr('height', height)
  .attr('transform', `translate(${margin.left}, ${margin.top})`)
  .append('g')
  .attr('id', 'canvas');

d3.csv('./titanic.csv', (csv) => {
  const data = _.filter(csv, d => (d.Sex && d.Age));

  // Transform data
  _.forEach(data, (passenger) => {
    passenger.Age = (passenger.Age ? Math.round(Number(passenger.Age)) : null);
    passenger.Survived = (passenger.Survived === '1' ? 'survived' : 'died');
  });

  const grouped = groupBy(data, ['Sex', 'Age'], (g) => {
    _.forEach(g, (passenger, i) => { passenger.order = (i + 1); });
  });
  const survived = groupBy(
    data,
    ['Sex', 'Age', 'Survived'],
    (g) => {
      _.forEach(g, (passenger, i) => {
        const sign = (passenger.Survived === 'survived' ? 1 : -1);
        passenger.after_order = sign * (i + 1);
      });
    },
  );

  //
  const components = {
    axes: new Axes(canvas, data),
    genderSymbols: new GenderSymbols(canvas, data),
    groupSymbols: new GroupSymbols(canvas, data),
    heartSymbols: new HeartSymbols(canvas, data),
    passengers: new Passengers(canvas, data),
  };

  intro(components);

  let n = 0;
  const frames = [ f0, f1, f2, f3, f4, f5 ]
  document.addEventListener('keydown', () => {
    frames[n % frames.length](components);
    n = n + 1;
  });
});
