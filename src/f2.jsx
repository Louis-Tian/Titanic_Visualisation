import { height, width, radius, nCol } from './parameters';
import { xScale, yScale } from './init';

export default function f2(canvas) {
  const text = `
    Most of the passenger are young and middle-age adult.<br/>
    <span class='hint'>Press ENTER to continue...</span>
  `
  Typed.new('#typed', { strings: [text] });

  const f = canvas.transition().duration(3000);

  f.selectAll('.male')
    .attr('cx', d => (2 * radius * (d.Age + 1)))
    .attr('cy', d => (0.5 * height - 2 * radius * d.order));
    // .attr('cx', d => xScale(2 * radius * (d.Age + 1)))
    // .attr('cy', d => yScale(0.5 * height - 2 * radius * d.order));

  f.selectAll('.female')
    .attr('cx', d => (2 * radius * (d.Age + 1) + width / 2))
    .attr('cy', d => (0.5 * height - 2 * radius * d.order));

  f.selectAll('.axes')
    .style('opacity', 0.5);
}
