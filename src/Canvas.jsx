import React from 'react';
import _ from 'lodash';
import { groupBy } from './utils';
import { height, width, radius, padding } from './parameters';
import init from './init';
import f0 from './f0';
import f1 from './f1';
import f2 from './f2';
import f3 from './f3';
import f4 from './f4';

export default class Canvas extends React.Component {
  componentDidMount() {
    // parameters

    const canvas = d3.select('#svg')
      .attr('width', width - radius)
      .attr('height', height - radius)
      .append('g')
      .attr('id', 'canvas');

    d3.csv('/public/titanic.csv', (csv) => {
      const data = _.filter(csv, d => (d.Sex && d.Age));

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

      init(canvas, data);

      let n = 0;
      const frames = [f0, f1, f2, f3, f4];
      // document.onclick = () => {
      //   frames[n % frames.length](canvas);
      //   n = n + 1;
      // };

      document.addEventListener('keydown', function(event) {
        frames[n % frames.length](canvas, data);
        n = n + 1;
      });
    });
  }

  render() {
    return (
      <div className="container">
        <svg id="svg" />
        <div id="textbox">
          <span id="typed" />
        </div>
      </div>
    );
  }
}
