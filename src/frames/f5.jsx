/* global Typed */
export default function f5() {
  const text = `
  The END. <br> <i>Press any key to restart.</i>
  `;
  Typed.new('#typed', { strings: [text] });
}
