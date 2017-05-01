/* global d3 */
import { width, height } from '../parameters';

export default class heartSymbols {
  constructor(canvas) {
    this.died = canvas.append('text')
      .attr('class', 'died heart symbol')
      .attr('text-anchor', 'middle')
      .style('font-family', 'FontAwesome')
      .style('font-size', '16pt')
      .style('visibility', 'hidden')
      .text('\uf004');

    this.live = canvas.append('text')
      .attr('class', 'live heart symbol')
      .attr('text-anchor', 'middle')
      .style('font-family', 'FontAwesome')
      .style('font-size', '16pt')
      .style('visibility', 'hidden')
      .text('\uf21e');
  }

  startHeartBeat() {
    this.heartBeat = setInterval(() => {
      this.live.transition()
        .duration(1000)
        .style('font-size', '18pt')
        .transition()
        .duration(1000)
        .style('font-size', '16pt');
    }, 1000);
  }

  stopHeartBeat() {
    clearInterval(this.heartBeat);
  }

  reset() {
    this.died
      .attr('x', 0.5 * width)
      .attr('y', 0.25 * height)
      .style('fill', 'grey')
      .style('visibility', 'hidden')

    this.live
      .attr('x', 0.5 * width)
      .attr('y', 0.25 * height)
      .style('fill', 'red')
      .style('visibility', 'hidden')
  }

  show(duration) {
    this.live.style('visibility', 'visible')
      .transition()
      .duration(duration)
      .attr('fill-opacity', 1)
      .transition()
      .call(this.startHeartBeat.bind(this))

    this.died
      .style('visibility', 'visible')
      .transition()
      .duration(duration)
      .style('fill-opacity', 0);
  }

  hide(duration) {
    this.stopHeartBeat()
    this.live.transition()
      .duration(duration)
      .style('fill-opacity', 0)
      .style('visibility', 'hidden');

    this.died.transition()
      .duration(duration)
      .style('fill-opacity', 0)
      .transition()
      .style('fill-opacity', 0)
      .style('visibility', 'hidden');
  }

  run(duration) {
    this.live.style('visibility', 'visible');

    this.died
      .transition()
      .duration(duration)
      .attr('y', 0.75 * height)
      .style('visibility', 'visible')
      .style('fill-opacity', 0.5);
  }
}
