/* global d3 */

import { xScale, yScale } from '../scales';
import { height, width } from '../parameters';

export default class GenderSymbols {
  constructor(canvas) {
    this.element = canvas.append('g')
      .attr('id', 'gender_symbols')
      .style('visibility', 'hidden')
      .style('font-family', 'FontAwesome')
      .style('font-size', '18pt');

    this.element.append('text')
      .attr('x', 0.75 * width)
      .attr('y', 0.25 * height)
      .style('fill', 'pink')
      .text('\uf221');

    this.element.append('text')
      .attr('x', 0.25 * width)
      .attr('y', 0.25 * height)
      .style('fill', 'teal')
      .text('\uf222');
  }

  reset() {
    this.element
      .style('visibility', 'hidden');
  }

  show(duration) {
    this.element
      .style('visibility', 'visible')
      .style('fill-opacity', 0)
      .transition()
      .duration(duration)
      .style('fill-opacity', 1);
  }

  hide(duration) {
    this.element
      .transition()
      .duration(duration)
      .style('fill-opacity', 0)
      .transition()
      .style('visibility', 'hidden');
  }
}
