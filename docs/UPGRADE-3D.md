# Interactive 3D upgrade

Real-time procedural chrysanthemum sculpture, 83 meshes, three assembly stages, horizontal drag, rotation buttons and reset. Explicit playback; reduced-motion support; rendering pauses when idle, hidden or off-screen. Static illustrated fallback for unavailable WebGL. Locally served Three.js 0.180.0 with MIT license. No build command required.

Figma desktop/mobile design: https://www.figma.com/design/w077DeO0LQAKmt5SZCQpma
Figma artwork is a generated art-direction poster, not a screenshot of the real-time mesh. Desktop/mobile Figma layouts visually reviewed. User authorized up to 500 Figma credits; exact consumption unavailable. Higgsfield: 2 credits total (one original illustration and one sculpture poster), out of revised 100-credit project ceiling.

Verification: JavaScript syntax and tests/scene-contract.cjs passed. Contract tests verify finite geometry/transforms, stage changes, rotation/reset and reduced-motion state updates using a renderer stub. GPU rendering and responsive browser screenshots remain unverified because the browser environment blocked local previews. Netlify publication remains separate; import this repository with publish directory `.` and no build command.

This file supersedes the initial Figma/3D status in PROJECT.md.
