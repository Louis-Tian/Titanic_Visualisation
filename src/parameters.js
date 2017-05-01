const outerWidth = window.innerWidth > 1440 ? 1440 : (window.innerWidth * 0.9);
const outerHeight = outerWidth / 3;
export const margin = { top: 30, bottom: 30, left: 30, right: 30 };

export const width = outerWidth - margin.left - margin.right;
export const height = outerHeight - margin.top - margin.bottom;

export const maxAges = 90;
export const maxCount = 20;

export const nCol = maxAges * 2;
export const radius = width / nCol / 2;
