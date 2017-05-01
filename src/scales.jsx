/* global d3 */
import { width, height, maxAges, maxCount, radius } from './parameters';

export const xScale = d3.scaleLinear().domain([0, maxAges]).range([radius, 0.5 * width - radius]);
export const yScale = d3.scaleLinear().domain([0, maxCount]).range([radius, -0.5 * height - radius]);
