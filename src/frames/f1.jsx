/* global Typed */
export default function f1(components) {
  const text = `
    Of these, <span class="keyword">869</span> were male and <span class="keyword">447</span> were women.<br/>
    <span class='hint'>Press ENTER to continue...</span>
  `;
  Typed.new('#typed', { strings: [text] });

  const { passengers, genderSymbols } = components;
  passengers.byGender(3000);
  genderSymbols.show(3000);
}
