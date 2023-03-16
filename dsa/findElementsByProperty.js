/*
**
QUESTION:
 Write a function to find all the elements with the given color.
 Here the color will be provided in any format like plain text (white),
 HEXA value (#fff or #ffffff), or RGB value (RGB(255, 255, 255)).

INPUT:
 <div id="root">
   <span style="color:#fff;">1</span>
 <span style="color:#eee;">2</span>
   <span style="color:white;">3</span>
   <span style="color:rgb(255, 255, 255);">4</span>
 </div>

 findElementByColor(document.getElementById('root'), 'rgb(255, 255, 255)');

OUTPUT:
 [
 <span style="color:#fff;">1</span>,
 <span style="color:white;">3</span>,
 <span style="color:rgb(255, 255, 255);">4</span>
 ]
**
*/

/*
 * To solve this,
 * We will write a helper function getStandardColor(color) to convert
 * all different color property types to a standard type.
 * We will leverage the browser's window.getComputedStyle() functtion.
 * getStandardColor(color) will temporarily append a div element to the DOM
 * and apply `color` as its style; then compute the standard color for later
 * comparisons with other elements of the DOM using findElementsByColor().
 */

function getStandardColor(color) {
  const div = document.createElement("div");
  div.style.color = colorCode;
  document.body.appendChild(div);
  const computedStyles = window.getComputedStyle(div);
  const { color } = computedStyles;
  document.body.removeChild(div);
  return color;
}

function findElementsByColor(domRoot, color) {
  const standardColor = getComputedColor(color);
  const output = [];

  function search(el) {
    const elColor = el.style.color;
    const elComputedColor = getStandardColor(elColor);

    if (elComputedColor === standardColor) output.push(el);

    for (let child of el.children) {
      search(child);
    }
  }

  search(domRoot);

  return output;
}

console.log(findElementByProperty(document.getElementById("root"), "white"));
