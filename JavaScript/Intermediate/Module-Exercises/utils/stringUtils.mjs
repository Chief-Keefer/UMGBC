export function reverseString(str) {
  return str.split("").reverse().join("");
}
export function toUpperCase(str) {
  return str.toUpperCase();
}
export function toLowerCase(str) {
  return str.toLowerCase();
}
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
