async function loadConfig() {
  const themeModule = await import("./theme.mjs");

  const time = new Date().getHours();
  if (time >= 18 || time < 6) {
    themeModule.setDarkTheme();
  } else {
    themeModule.setLightTheme();
  }
}

loadConfig();
