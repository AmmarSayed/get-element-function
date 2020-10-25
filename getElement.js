/***
 * Function to select single DOM element, Or select multiple elements and return array of elements.
 * To select single element, write a class name or id or element name.
 * To select all elements, write 1 or "all" / or true.
 *
 * @param {HTMLBodyElement} selection - Select single element by class name, Id, or tag name.
 * @param {Boolean} all - true / 1 / "all" to select all. The Function will return an array of elements. Leave it blank for single selection, or write 0.
 */
const getElement = (selection, all = 0) => {
  if (selection && !all) {
    const element = document.querySelector(selection);
    if (element) return element;
    throw new Error('no such element exist');
  } else if (selection && all) {
    const Elements = Array.from(document.querySelectorAll(selection));
    if (Elements.length > 0) return Elements;
    throw new Error('no such elements exist');
  } else {
    throw new Error('no element selected');
  }
};

export default getElement;
