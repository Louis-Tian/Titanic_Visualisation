import { height, width, radius, nCol } from './parameters';

export default function f1(canvas) {
  const text = `
    Of these, <span class="keyword">869</span> were male and <span class="keyword">447</span> were women.<br/>
    <span class='hint'>Press ENTER to continue...</span>
  `;
  Typed.new('#typed', { strings: [text] });

  const f = canvas.transition().duration(3000);

  f.selectAll('.passenger')
    .attr('fill', d => ((d.Sex === 'male') ? 'teal' : 'pink'));

  f.selectAll('.male')
    .attr('cx', (d, i) => (2 * radius * ((i % (nCol / 2)) + 1)))
    .attr('cy', (d, i) => (2 * radius * (Math.floor(i / (nCol / 2)) + 1) + height / 2));

  f.selectAll('.female')
    .attr('cx', (d, i) => 2 * radius * ((i % (nCol / 2)) + 1) + (width / 2))
    .attr('cy', (d, i) => 2 * radius * (Math.floor(i / (nCol / 2)) + 1) + height / 2);
}
