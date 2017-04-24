import { height, width, radius, nCol } from './parameters';

export default function f3(canvas) {
  const text = `
    At 11:40 p.m. (ship's time) on 14 April,<br>
    the Titanic struck an iceberg and sank about three hours after.<br>
    Only <span class="keyword">492</span> passengers survived.<br/>
    <span class='hint'>Press ENTER to continue...</span><br>
  `;
  Typed.new('#typed', { strings: [text] });

  const f = canvas.transition().duration(3000);

  f.selectAll('.died.passenger')
    .style('fill-opacity', 0.5);

  f.selectAll('.male.passenger')
    .attr('cx', d => (2 * radius * (d.Age + 1)))
    .attr('cy', d => (0.5 * height - 2 * radius * d.after_order));

  f.selectAll('.female.passenger')
    .attr('cx', d => (2 * radius * (d.Age + 1) + width / 2))
    .attr('cy', d => (0.5 * height - 2 * radius * d.after_order));
}
