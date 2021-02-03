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
  - [Window](#window)
    - [setTitle] (#settitle)
    - [setIcon] (#seticon)
    - [display] (#display)
    - [hide] (#hide)

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
  * [ ] Optimized
    * [X] Low Cpu-Usage
    * [ ] Low Ram-Usage
  * [ ] Allow to input html directly without using web server
* [ ] GameEngine
  * [ ] OpenGL
  * [ ] DirectX 
* [X] All is annotated!

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
var window = new Window()

window.display() // Display the window... You can use .hide(), to hide the window.
``` 

## Window

All function in Window Class explained.

***

### setTitle

Change the title of a window.

|Parameter|Type|Description|
|-|-|:-|
|`title`|[String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String)|The new title|

***

### setIcon

```js
// Create a new Window
var window = new Window()

// DIRNAME NEEDED
window.setIcon(__dirname+"\\icon.png")
``` 

|Parameter|Type|Description|
|-|-|:-|
|`path`|[Path](https://nodejs.org/api/path.html)|The path of the icon/image|

***

### display

Display the window

***

### hide

Hide the window

***
