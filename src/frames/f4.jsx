/* global Typed */
export default function f4(components) {
  const text = `
  Women had the highest chance of survival.<br>
  Just a little over half of the children onboard survived.<br>
  Men had less than 20% of the chance to survive. <br>
  <span class='hint'>Press ENTER to continue...</span><br>
  `;
  Typed.new('#typed', { strings: [text] });

  const { axes, passengers, heartSymbols, groupSymbols } = components;
  axes.hide(1000);
  heartSymbols.hide(1000);
  groupSymbols.show(3000);
  passengers.byGroup(3000);
}
