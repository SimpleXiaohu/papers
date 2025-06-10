/**
 * Prepare the version number.
 *
 * @param {String} version
 * @return {Number} the version number as a floating number
 * @private
 */
function prepareVersionNo(version) {
  var numbers;

  numbers = version.split(/[a-z._ \/\-]/i);
  if (numbers.length === 1) {
    version = numbers[0];
  }
  if (numbers.length > 1) {
    version = numbers[0] + ".";
    numbers.shift();
    version += numbers.join("");
  }
  return Number(version);
}
