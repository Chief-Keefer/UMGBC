export function setLightTheme() {
  document.documentElement.style.setProperty("--background-color", "#ffffff");
  document.documentElement.style.setProperty("--text-color", "#000000");
  console.log("Light theme applied.");
}
export function setDarkTheme() {
  document.documentElement.style.setProperty("--background-color", "#000000");
  document.documentElement.style.setProperty("--text-color", "#ffffff");
  console.log("Dark theme applied.");
}
