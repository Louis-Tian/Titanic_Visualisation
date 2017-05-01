/* global Typed */

export default function f3(components) {
  const text = `
    At 11:40 p.m. (ship's time) on 14 April,<br>
    the Titanic struck an iceberg and sank about three hours after.<br>
    Lives perished. Only <span class="keyword">492</span> passengers survived.<br/>
    <span class='hint'>Press ENTER to continue...</span><br>
  `;
  Typed.new('#typed', { strings: [text] });

  const { passengers, heartSymbols } = components;
  heartSymbols.show(3000);
  heartSymbols.run(3000);
  passengers.bySurvival(3000);
}
