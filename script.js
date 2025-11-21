const root = document.documentElement;

// Pickers
const pPrimary = document.getElementById("primary");
const pAccent = document.getElementById("accent");
const pBg = document.getElementById("bg");

// Buttons
const btnRandom = document.getElementById("random");
const btnReset = document.getElementById("reset");

// Default colors
const defaults = {
  primary: "#0b74de",
  accent: "#06b6d4",
  bg: "#f8fafc"
};

// Apply color to CSS variables
function applyColors(colors) {
  root.style.setProperty("--primary", colors.primary);
  root.style.setProperty("--accent", colors.accent);
  root.style.setProperty("--bg1", colors.bg);
}

// Random color generator
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

// Input listeners
pPrimary.oninput = () => applyColors({ ...defaults, primary: pPrimary.value, accent: pAccent.value, bg: pBg.value });
pAccent.oninput = () => applyColors({ ...defaults, primary: pPrimary.value, accent: pAccent.value, bg: pBg.value });
pBg.oninput = () => applyColors({ ...defaults, primary: pPrimary.value, accent: pAccent.value, bg: pBg.value });

// Randomize button
btnRandom.onclick = () => {
  const colors = {
    primary: randomColor(),
    accent: randomColor(),
    bg: randomColor()
  };
  pPrimary.value = colors.primary;
  pAccent.value = colors.accent;
  pBg.value = colors.bg;
  applyColors(colors);
};

// Reset button
btnReset.onclick = () => {
  pPrimary.value = defaults.primary;
  pAccent.value = defaults.accent;
  pBg.value = defaults.bg;
  applyColors(defaults);
};