<div align="center">
  <img src="https://cdn.cmtapp.fr/phosphore.png" height="300px"><br>
  <a href="https://www.npmjs.com/package/phosphore"><img src="https://img.shields.io/npm/v/phosphore?style=for-the-badge" alt="Version" /></a>  
  <a href="https://www.npmjs.com/package/phosphore"><img src="https://img.shields.io/npm/dm/phosphore?style=for-the-badge" alt="Downloads" /></a><br>
  <a href="https://www.npmjs.com/package/phosphore"><img src="https://nodei.co/npm/phosphore.png?downloads=true&stars=true" alt="installInfo" /></a><br>
  A fast, powerful and free library to create desktop apps
</div>

# Contents Table

- [Feature](#feature)
- [Installation](#installation)
- [Usage](#usage)
  - [Getting Started](#getting-started)

# Feature

* [ ] Phosphore UI
  * [X] Make window
  * [X] Make pop up
  * [ ] Label
  * [ ] Button
  * [ ] Easy Customization
* [ ] Phosphore Builder
  * [ ] Make .exe (Windows)
  * [ ] Make .app (MacOS)
  * [ ] Easy Auto Update
* [ ] WebEngine
  * [X] WebSite readable
  * [X] Dynamic web site supported
  * [ ] Optimized WebEngine
  * [ ] Allow to input html directly without using web server
* [ ] GameEngine
  * [ ] OpenGL
  * [ ] DirectX 

# Installation

How to install ? That's the question ?!

| NPM | YARN |
| --- | ---- |
| `npm i phosphore` | `yarn i phosphore` |

# Usage

To correctly use Phosphore...

## Getting Started

```js
const { Window } = require('phosphore')

// Create a new Window
var window = new Window();

window.display(); // Display the window... You can use .hide(), to hide the window.
``` 
