/* global d3 */
import { xScale, yScale } from '../scales';
import { width, height } from '../parameters';

export default class GroupSymbols {
  constructor(canvas) {
    this.element = canvas.append('g')
      .attr('id', 'group-symbols')
      .style('visibility', 'hidden')
      .style('font-family', 'FontAwesome')
      .style('font-size', '18pt')
      .style('fill', 'grey');

    this.element.append('text')
      .attr('class', 'child symbol')
      .attr('text-anchor', 'middle')
      .style('fill', 'gold')
      .text('\uf1ae');

    this.element.append('text')
      .attr('class', 'female symbol')
      .attr('text-anchor', 'middle')
      .style('fill', 'pink')
      .text('\uf222');

    this.element.append('text')
      .attr('class', 'male symbol')
      .attr('text-anchor', 'middle')
      .style('fill', 'teal')
      .text('\uf221');
  }

  reset() {
    this.element
      .style('visibility', 'visible')
      .style('fill-opacity', 0);

    this.element.select('.child.symbol')
      .attr('x', (0.25 * width))
      .attr('y', (0.5 * height));

    this.element.select('.female.symbol')
      .attr('x', (0.5 * width))
      .attr('y', (0.5 * height));

    this.element.select('.male.symbol')
      .attr('x', (0.75 * width))
      .attr('y', (0.5 * height));
  }

  show(duration) {
    this.element
      .style('visibility', 'visible')
      .transition()
      .duration(duration)
      .style('fill-opacity', 1);
  }
}
