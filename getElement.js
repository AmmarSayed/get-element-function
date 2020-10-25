/***
 * Function to select single DOM element, Or select multiple elements and return array of elements.
 * To select single element, write a class name or id or element name.
 * To select all elements, write 1 or "all" / or true.
 *
 * @param {HTMLBodyElement} selection - Select single element by class name, Id, or tag name.
 * @param {Boolean} all - true / 1 / "all" to select all. The Function will return an array of elements. Leave it blank for single selection, or write 0.
 */

const getElement = (selection, all = 0) => {
  let element = '';
  if (all) {
    element = Array.from(document.querySelectorAll(selection));
  } else {
    element = document.querySelector(selection);
  }
  if (!element || element.length === 0) throw new Error('no element selected');

  return element;
};

export default getElement;
