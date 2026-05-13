// =============================================
// ANCENT95 — extra-apps.js
// Add your own apps here!
// =============================================
//
// HOW TO ADD AN APP:
// Copy one of the examples below and add it to the extraApps array.
// Each app needs:
//   id       - unique name, no spaces (e.g. "myapp")
//   title    - what shows in the title bar and taskbar
//   icon     - an emoji for the icon
//   width    - starting window width in pixels
//   height   - starting window height in pixels
//   content  - a function () => `html string` for what goes inside the window
//   hasMenu  - true or false for a menu bar
//   menuItems- array of menu names if hasMenu is true e.g. ["File","Edit"]
//   statusBar- array of status bar text panels e.g. ["Ready"] or [] for none
//
// =============================================

var extraApps = [

  {
    id: "ancent95site",
    title: "ANCENT95 Site",
    icon: "🏜️",
    width: 860,
    height: 520,
    content: () => `<iframe src="https://waa-4.github.io/ancent95/" style="width:100%;height:100%;border:none;"></iframe>`,
    hasMenu: false,
    menuItems: [],
    statusBar: ["waa-4.github.io/ancent95"]
  },

  {
    id: "jerryhome",
    title: "Jerry Home",
    icon: "🏠",
    width: 860,
    height: 520,
    content: () => `<iframe src="https://waa-4.github.io/jerry-home/" style="width:100%;height:100%;border:none;"></iframe>`,
    hasMenu: false,
    menuItems: [],
    statusBar: ["waa-4.github.io/jerry-home"]
  },

  {
    id: "becauseblocks",
    title: "Because.Blocks",
    icon: "🧱",
    width: 860,
    height: 520,
    content: () => `<iframe src="https://waa-4.github.io/because.blocks/" style="width:100%;height:100%;border:none;"></iframe>`,
    hasMenu: false,
    menuItems: [],
    statusBar: ["waa-4.github.io/because.blocks"]
  },

  // ADD MORE SITES BELOW — copy this block and fill in your details:
  // {
  //   id: "uniqueid",
  //   title: "Site Name",
  //   icon: "🌐",
  //   width: 860,
  //   height: 520,
  //   content: () => `<iframe src="https://waa-4.github.io/yoursite/" style="width:100%;height:100%;border:none;"></iframe>`,
  //   hasMenu: false,
  //   menuItems: [],
  //   statusBar: ["waa-4.github.io/yoursite"]
  // },

];
