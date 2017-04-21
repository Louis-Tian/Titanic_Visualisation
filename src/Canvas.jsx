import React from 'react';
import _ from 'lodash';
import { groupBy } from './utils';

const color = {
  male: 'blue',
  female: 'pink',
};

export default class Canvas extends React.Component {
  componentDidMount() {
    // parameters
    const width = 1000;
    const height = 700;
    const radius = width / 4 / 85;

    d3.csv('/public/titanic.csv', (csv) => {
      csv = _.filter(csv, (d) => { return d.Sex && d.Age; });
      // Data Preprocessing
      _.forEach(csv, (passenger) => {
        passenger.Age = (passenger.Age ? Math.round(Number(passenger.Age)) : null);
        passenger.Survived = (passenger.Survived === '1' ? 1 : -1);
      });

      const sexCount = _.countBy(csv, "Sex")

      const grouped = groupBy(csv, ['Sex', 'Age'], (g) => {
        _.forEach(g, (passenger, i) => { passenger.order = (i + 1); });
        g.SurvivalCounts = _.assign(
          { '1': 0, '-1': 0 },
          _.countBy(g, 'Survived'),
        );
        g.SurvivalRate = g.SurvivalCounts['1'] / g.length;
      });

      const survived = groupBy(
        _.filter(csv, x => Number(x.Survived)), ['Sex', 'Age', 'Survived'], (g) => {
          _.forEach(g, (passenger, i) => {
            passenger.after_order = passenger.Survived * (i + 1);
          });
        },
      );

      // Setup
      const canvas = d3.select('#canvas')
        .attr('width', width)
        .attr('height', height);

      canvas.append('circle')
        .attr('id', 'passengerCircle')
        .attr('cx', width / 2)
        .attr('cy', height * 0.25)
        .attr('r', Math.sqrt(csv.length) * radius) // area encode population count
        .style('fill-opacity', 1)
        .style('stroke', 'grey')

      canvas.append('circle')
        .attr('id', 'maleCircle')
        .attr('cx', width / 2)
        .attr('cy', height * 0.25)
        .attr('r', 0)
        .style('fill-opacity', 0);

      canvas.append('text')
        .attr('id', 'maleText')
        .text(`${sexCount.male} Male Passengers`)
        .attr('text-anchor', 'middle')
        .attr('x', width / 4)
        .attr('y', height / 3)
        .attr('opacity', 0);
        .attr('fill')

      canvas.append('g')
        .attr('id', 'maleDots')
        .attr('transform', `translate(0, ${height * 0.75}) scale(1, -1)`)
        .selectAll('circle')
        .data(_.filter(csv, passenge => (passenge.Sex === 'male') && (passenge.Age)))
        .enter()
        .append('circle')
        .classed('maleDot', true)
        .attr('cx', width / 3)
        .attr('cy', height / 4)
        .attr('r', radius)
        .style('fill', 'grey');
      // const female = canvas.append('g')
      //   .attr('id', 'female')
      //   .attr('transform', `translate(${(width / 2)}, ${height / 2}) scale(1, -1)`);

      /* --------------------------------------------*/
      const f0 = canvas.transition().duration(3000);

      f0.select('#passengerCircle')
        .attr('r', Math.sqrt(csv.length - sexCount.male) * radius)
        .style('fill-opacity', 0);

      f0.select('#maleCircle')
        .attr('cx', width / 3)
        .attr('cy', height * 0.5)
        .attr('r', Math.sqrt(sexCount.male) * radius)
        .style('fill-opacity', 1);
      f0.select('#maleText')
        .style('opacity', 1)


      /* --------------------------------------------*/
      const f1 = f0.transition().duration(sexCount.male * 30 + 500);

      f1.selectAll('.maleDot')
        .delay((d, i) => i * 30)
        .duration(500)
        .attr('cx', d => Number(d.Age) * radius * 2)
        .attr('cy', d => d.order * radius * 2)
        .on('end', (d, i) => {
          console.log(i)
          canvas.select('#maleCircle')
            .attr('r', Math.sqrt(sexCount.male - (i + 1)) * radius)
        })

      console.log(canvas.selectAll('maleDot'))

      // const f0 = canvas.transition()
      // f0.selectAll('.maleDot')
      //   .delay((d, i) => i * 80)
      //   .attr('cx', width / 3)
      //   .on("end", (d, i) => {
      //     canvas.select('#passengerCircle')
      //       .attr('r', Math.sqrt(csv.length - i) * radius)
      //     canvas.select('#maleCircle')
      //       .attr('r', Math.sqrt(i) * radius)
      //   });

      // Frame #0
      // maleDots.attr('class', 'maleDot')
      //   .attr('cx', width / 4)

      // Frame #1
      // const frame1 = canvas.transition().delay(1000).duration(3000);
      // frame1.select('#maleLabel')
      //   .attr('cx', width / 4)
      //   .attr('r', 25)
      //   .style('fill-opacity', 1);

      // Frame #2
      // const frame2 = frame1.transition().duration(3000);
      // frame2.selectAll('.maleDot')
      //   .attr('cx', d => Number(d.Age) * radius * 2)
      //   .attr('cy', d => d.order * radius * 2)
      //   .attr('r', radius)
      //   .style('fill', 'grey');

      // Frame #3
      const f2 = f1.transition().duration(3000);
      f2.selectAll('.maleDot')
        .attr('cx', x => Number(x.Age) * radius * 2)
        .attr('cy', d => d.after_order * radius * 2)
        .style('fill', d => (d.Survived === 1 ? 'grey' : 'red'));
    });
  }

  render() {
    return <svg id="canvas" />;
  }
}
