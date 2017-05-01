/* global Typed */
export default function init(components) {
  const { passengers } = components;
  passengers.startDance(6000);

  const text = `
    <h2>A Visual Exploration<h2/>
    <h1>Surviving Titanic</h1><br>
    <span class='hint'>Press ENTER to start...</span>
  `;
  Typed.new('#typed', { strings: [text] });
}
