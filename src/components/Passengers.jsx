/* global d3 */
import _ from 'lodash';
import { width, height, radius, maxAges } from '../parameters';
import { xScale, yScale } from '../scales';

export default class Passengers {
  constructor(canvas, data) {
    this.passengers = canvas.append('g')
      .attr('class', 'passengers')
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'passenger')
      .attr('r', radius)
      .attr('fill', 'grey')
      .style('fill-opacity', 0)
      .style('visibility', 'hidden');

    this.passengers
      .filter(d => (d.Sex === 'male'))
      .classed('male', true);

    this.passengers
      .filter(d => (d.Sex === 'female'))
      .classed('female', true);

    this.passengers
      .filter(d => (d.Survived === 'survived'))
      .classed('survived', true);

    this.passengers
      .filter(d => (d.Survived === 'died'))
      .classed('died', true);

    this.passengers
      .filter(d => (d.Age <= 16))
      .classed('child', true);

    this.passengers
      .filter(d => (d.Age > 16))
      .classed('adult', true);

    this.passengers
      .on('mouseover', (d, i, v) => {
        const cx = v[i].cx.baseVal.value;
        const cy = v[i].cy.baseVal.value;
        canvas.append('text')
          .classed('tooltip', true)
          .text(d.Name + ' ' + d.Age)
          .attr('x', cx)
          .attr('y', cy);
      })
      .on('mouseout', () => {
        canvas.selectAll('.tooltip').remove();
      });
  }

  startDance(duration) {
    this.passengers
      .style('visibility', 'visible')
      .style('fill-opacity', 0.5)
      .attr('cx', () => _.random(0, width))
      .attr('cy', () => _.random(0, height));
    this.dancing = setInterval(() => (
      this.passengers
        .transition()
        .duration(duration)
        .ease(d3.easeLinear)
        .attr('cx', () => _.random(0, width))
        .attr('cy', () => _.random(0, height))
    ), duration);
  }

  stopDance() {
    clearInterval(this.dancing);
  }

  reset(duration) {
    this.passengers
      .transition()
      .duration(duration)
      .attr('cx', (d, i) => (
        xScale(i % maxAges) + (0.25 * width)
      ))
      .attr('cy', (d, i) => (
        yScale(Math.floor(i / maxAges)) + (0.5 * height)
      ))
      .attr('r', radius)
      .style('fill', 'grey')
      .style('fill-opacity', 1);
  }

  byGender(duration) {
    const f = this.passengers.transition().duration(duration);

    f.style('fill', d => ((d.Sex === 'male') ? 'teal' : 'pink'));

    f.filter('.male')
      .attr('cx', (d, i) => (
        xScale(i % maxAges)
      ))
      .attr('cy', (d, i) => (
        yScale(Math.floor(i / maxAges)) + (0.5 * height)
      ));

    f.filter('.female')
      .attr('cx', (d, i) => (
        xScale(i % maxAges) + (0.5 * width)
      ))
      .attr('cy', (d, i) => (
        yScale(Math.floor(i / maxAges)) + (0.5 * height)
      ));
  }

  byAge() {
    const f = this.passengers.transition().duration(3000);

    f.filter('.male.passenger')
      .attr('cx', d => xScale(d.Age))
      .attr('cy', d => yScale(d.order) + (0.5 * height));

    f.filter('.female.passenger')
      .attr('cx', d => xScale(d.Age) + (0.5 * width))
      .attr('cy', d => yScale(d.order) + (0.5 * height));

    f.filter('.axes')
      .style('opacity', 0.5);
  }

  bySurvival(duration) {
    const f = this.passengers.transition().duration(duration);

    f.filter('.died.passenger')
      .style('fill-opacity', 0.5);

    f.filter('.male.passenger')
      .attr('cx', d => xScale(d.Age))
      .attr('cy', d => yScale(d.after_order) + (0.5 * height));

    f.filter('.female.passenger')
      .attr('cx', d => xScale(d.Age) + (0.5 * width))
      .attr('cy', d => yScale(d.after_order) + (0.5 * height));
  }

  byGroup() {
    const nCol = 20;
    let f = this.passengers.transition().duration(4000);
    f.filter('.child.survived.passenger')
      .attr('cx', (x, i) => (i % nCol) * radius * 2 + 0.25 * width - radius * 2 * nCol / 2)
      .attr('cy', (x, i) => height * 0.35 - Math.floor(i / nCol) * radius * 2 )
      .style('fill', 'gold');

    f.filter('.child.died.passenger')
      .attr('cx', (x, i) => (i % nCol) * radius * 2 + 0.25 * width - radius * 2 * nCol / 2)
      .attr('cy', (x, i) => Math.floor(i / nCol) * radius * 2 + height * 0.6)
      .style('fill', 'gold');

    f.filter('.female.adult.survived.passenger')
      .attr('cx', (x, i) => (i % nCol) * radius * 2 + 0.5 * width - radius * 2 * nCol / 2)
      .attr('cy', (x, i) => height * 0.35 - Math.floor(i / nCol) * radius * 2)

    f.filter('.female.adult.died.passenger')
      .attr('cx', (x, i) => (i % nCol) * radius * 2 + 0.5 * width - radius * 2 * nCol / 2)
      .attr('cy', (x, i) => Math.floor(i / nCol) * radius * 2 + height * 0.6)

    f.filter('.male.adult.survived.passenger')
      .attr('cx', (x, i) => (i % nCol) * radius * 2 + width / 4 * 3 - radius * 2 * nCol / 2)
      .attr('cy', (x, i) => height * 0.35 - Math.floor(i / nCol) * radius * 2);

    f.filter('.male.adult.died.passenger')
      .attr('cx', (x, i) => (i % nCol) * radius * 2 + width / 4 * 3 - radius * 2 * nCol / 2)
      .attr('cy', (x, i) => Math.floor(i / nCol) * radius * 2 + height * 0.6);
  }
}
