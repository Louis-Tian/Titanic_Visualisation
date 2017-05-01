/* global Typed */

export default function f0(components) {
  const text = `
    On 10 April 1912, <br>
    RMS Titanic set sail for its her maiden voyage <br>
    from Southampton to New York City <br>
    with estimated <span class='keyword'>1,317</span> passengers onboard. <br>
    <span class='hint'>Press ENTER to continue...</span>
  `;
  Typed.new('#typed', { strings: [text] });

  const { axes, passengers, genderSymbols, groupSymbols, heartSymbols } = components;
  passengers.stopDance();
  axes.reset();
  passengers.reset(1000);
  genderSymbols.reset();
  groupSymbols.reset();
  heartSymbols.reset();
}
