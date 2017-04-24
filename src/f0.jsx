import { width, height, radius, maxAges } from './parameters';
import { xScale, yScale } from './init';

export default function f0(canvas) {
  clearInterval(dance);
  const text = `
    On 10 April 1912, <br>
    RMS Titanic set sail for its her maiden voyage <br>
    from Southampton to New York City <br>
    with estimated <span class='keyword'>1,317</span> passengers onboard. <br>
    <span class='hint'>Press ENTER to continue...</span>
  `;
  Typed.new('#typed', { strings: [text] });

  canvas.selectAll('.axes')
    .style('opacity', 0);

  canvas.selectAll('.passenger')
    .attr('fill', 'grey')
    .style('fill-opacity', 0)

  canvas.selectAll('.passenger')
    .transition()
    .duration(1000)
    .attr('cx', (d, i) => 2 * radius * ((i % maxAges) + 1) + width / 4)
    .attr('cy', (d, i) => 2 * radius * (Math.floor(i / maxAges) + 1) + height / 2)
    .attr('r', radius)
    .style('fill-opacity', 1);
}
