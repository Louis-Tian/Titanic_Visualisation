import _ from 'lodash';
import { groupBy } from './utils';
import { height, width, padding, maxAges, radius} from './parameters';
import { ma } from './utils';

export default function f4(canvas, data) {
  const text = `
  Women had the highest chance of survival.<br>
  Just a little over half of the children onboard survived.<br>
  <span class='hint'>Press ENTER to continue...</span><br>
  `;
  Typed.new('#typed', { strings: [text] });


  const rowSize = maxAges * 2 / 3 / 2;

  const transition = canvas.transition();

  transition.duration(1000)
    .select('.axes')
    .style('opacity', 0);
  transition.duration(1000)
    .select('#symbols')
    .style('opacity', 0)

  const ncol = 30;

  transition
    .delay(1000)
    .duration(2000)
    .selectAll('.child.survived.passenger')
    .attr('cx', (x, i) => (i % ncol) * radius * 2 + 0.25 * width - radius * 2 * ncol / 2)
    .attr('cy', (x, i) => height * 0.35 - Math.floor(i / ncol) * radius * 2 )
    .attr('fill', 'grey');

  transition
    .delay(1000)
    .duration(2000)
    .selectAll('.child.died.passenger')
    .attr('cx', (x, i) => (i % ncol) * radius * 2 + 0.25 * width - radius * 2 * ncol / 2)
    .attr('cy', (x, i) => Math.floor(i / ncol) * radius * 2 + height * 0.6)
    .attr('fill', 'grey');

  transition
    .delay(3000)
    .duration(2000)
    .selectAll('.female.adult.survived.passenger')
    .attr('cx', (x, i) => (i % ncol) * radius * 2 + 0.5 * width - radius * 2 * ncol / 2)
    .attr('cy', (x, i) => height * 0.35 - Math.floor(i / ncol) * radius * 2)

  transition
    .delay(3000)
    .duration(2000)
    .selectAll('.female.adult.died.passenger')
    .attr('cx', (x, i) => (i % ncol) * radius * 2 + 0.5 * width - radius * 2 * ncol / 2)
    .attr('cy', (x, i) => Math.floor(i / ncol) * radius * 2 + height * 0.6)

  transition
    .delay(5000)
    .duration(2000)
    .selectAll('.male.adult.survived.passenger')
    .attr('cx', (x, i) => (i % ncol) * radius * 2 + width / 4 * 3 - radius * 2 * ncol / 2)
    .attr('cy', (x, i) => height * 0.35 - Math.floor(i / ncol) * radius * 2);

  transition
    .delay(5000)
    .duration(2000)
    .selectAll('.male.adult.died.passenger')
    .attr('cx', (x, i) => (i % ncol) * radius * 2 + width / 4 * 3 - radius * 2 * ncol / 2)
    .attr('cy', (x, i) => Math.floor(i / ncol) * radius * 2 + height * 0.6)

  transition
    .delay(7000)
    .duration(1000)
    .select('#threeSymbols')
    .style('fill-opacity', 1);
}
