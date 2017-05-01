/* global Typed */
export default function f2(components) {
  const text = `
    Most of the passengers are young and middle-age adult.<br/>
    <span class='hint'>Press ENTER to continue...</span><br>
  `;
  Typed.new('#typed', { strings: [text] });

  const { passengers, axes, genderSymbols } = components;
  genderSymbols.hide(1000);
  axes.show(3000);
  passengers.byAge(3000);
}
