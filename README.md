@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: rgba(255,255,255,0.92);
  background: #2b100d;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  min-height: 100vh;
}

body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #1b0d0d;
}

button {
  font: inherit;
}

.font-display {
  font-family: 'Baloo 2', sans-serif;
}

* {
  box-sizing: border-box;
}

button:focus-visible {
  outline: 3px solid rgba(255,255,255,0.8);
  outline-offset: 3px;
}

@media (min-width: 768px) {
  body {
    background: linear-gradient(180deg, #34140f 0%, #1e090c 100%);
  }
}
