/* global d3 */
import _ from 'lodash';
import { xScale, yScale } from '../scales';
import { width, height, maxAges, radius } from '../parameters';

export default class Axes {
  constructor(canvas) {
    const xAxis = d3.axisBottom(xScale).tickValues(_.range(0, 90, 10));
    const yAxis = d3.axisLeft(yScale).tickValues(_.range(5, 25, 5));

    this.axes = canvas.append('g')
      .attr('class', 'axes')
      .style('visibility', 'hidden');

    this.axes.append('g')
      .attr('class', 'axis xAxis')
      .attr('transform', `translate(0, ${0.5 * height})`)
      .call(xAxis);

    this.axes.append('g')
      .attr('class', 'axis xAxis')
      .attr('transform', `translate(${0.5 * width}, ${0.5 * height})`)
      .call(xAxis);

    // this.axes.append('g')
    //   .attr('class', 'axis yAxis')
    //   .attr('transform', `translate(0, ${(0.5 * height)})`)
    //   .call(yAxis);

    // this.axes.append('text')
    //   .attr('class', 'axisLabel')
    //   .text('# Passenger')
    //   .attr('text-anchor', 'left')
    //   .attr('alignment-baseline', 'baseline')
    //   .attr('transform', `translate(0, ${height / 2}) rotate(90, 0, 0)`);
    //
    this.axes.append('text')
      .attr('class', 'axisLabel')
      .text('age')
      .attr('text-anchor', 'end')
      .attr('transform', `translate(${xScale(maxAges)}, ${height / 2 - radius})`);
  }

  reset() {
    this.axes.style('visibility', 'hidden');
  }

  show(duration) {
    this.axes.style('visibility', 'visible')
      .style('opacity', 0)
      .transition()
      .duration(duration)
      .style('opacity', 1);
  }

  hide(duration) {
    this.axes.transition()
      .duration(duration)
      .transition()
      .style('opacity', 0)
      .transition()
      .style('visibility', 'hidden');
  }
}
