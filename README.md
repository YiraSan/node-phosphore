<div align="center">
  <img src="https://cdn.cmtapp.fr/phosphore.png" height="300px"><br>
  <a href="https://www.npmjs.com/package/phosphore"><img src="https://img.shields.io/npm/v/phosphore?style=for-the-badge" alt="Version" /></a>  
  <a href="https://www.npmjs.com/package/phosphore"><img src="https://img.shields.io/npm/dt/phosphore?style=for-the-badge" alt="Downloads" /></a><br>
  <a href="https://www.npmjs.com/package/phosphore"><img src="https://nodei.co/npm/phosphore.png?downloads=true&stars=true" alt="installInfo" /></a><br>
  A fast, powerful and free library to create desktop apps
</div>

# Contents Table

- [Installation](#installation)
- [Usage](#usage)
  - [Getting Started](#getting-started)
  - [Window](#window)
    - [setTitle](#settitle)
    - [setIcon](#seticon)
    - [setScene](#setscene)
    - [setSize](#setsize)
    - [autoSize](#autosize)
    - [display](#display)
    - [hide](#hide)
    - [getMaximumHeight](#getmaximumheight)
    - [getMaximumWidth](#getmaximumwidth)
    - [web](#web)
    - [onClosing](#onclosing)
    - [onReduce](#onreduce)
    - [onMaximize](#onmaximize)
    - [onFullScreenUpdate](#onfullscreenupdate)
  - [Scene](#scene)
    - [add](#add)
  - [Button](#button)
    - [setText](#settext)
    - [onClick](#onclick)

# Installation

How to install ? That's the question ?!

| NPM | YARN |
| --- | ---- |
| `npm i phosphore` | `yarn i phosphore` |

# Usage

To correct use Phosphore...

## Getting Started

```js
const { Window } = require('phosphore')

// Create a new Window
var window = new Window()

window.display() // Display the window... You can use .hide(), to hide the window.
``` 

## Window

To make a new Window your need to call the class Window, and edit it then display.
To edit the window you have many tools, to change the title, icon, size of it, etc...

***

### setTitle

Change the title of the window.

|Parameter|Type|Description|
|-|-|:-|
|title|[String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String)|The new title|

***

### setIcon

Change the icon of the window.

|Parameter|Type|Description|
|-|-|:-|
|path|[Path](https://nodejs.org/api/path.html)|The path of the icon/image|

**Make sure to use `__dirname` before the path!**

***

### setScene

Set the current scene of the window.

|Parameter|Type|Description|
|-|-|:-|
|scene|[Scene](#scene)|The scene to display|

***

### setSize

Changed the size (width and height) of the window.

|Parameter|Type|Description|
|-|-|:-|
|width|[Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number)|The new width|
|height|[Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number)|The new height|

**Default Window Size : `720x640`**

***

### autoSize

Changed the size (width and height) of the window. Automatically by the ratio of the screen. Approximately 70% of the screen size.

***

### display

Display the window

***

### hide

Hide the window

***

### getMaximumHeight

**@Returns** `{Number}` - the height of the screen.

***

### getMaximumWidth

**@Returns** `{Number}` - the width of the screen.

***

### web

Create a new Scene and display a web engine.

|Parameter|Type|Description|
|-|-|:-|
|url|[String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String)|The URL of the site|

When you want to display your local file, using express :

```js
var { Window } = require("phosphore");
var app = require("express")();

app.use('/', express.static(__dirname + '/YOUR DIR HERE'));
app.listen(3490);
 
var window = new Window().autoSize().web("http://localhost:3490/")
```

***

### onClosing

Called when closing.

|Parameter|Type|Description|
|-|-|:-|
|func|[Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function)|The function runned when event is called|

***

### onReduce

Called when iconified.

|Parameter|Type|Description|
|-|-|:-|
|func|[Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function)|The function runned when event is called|

***

### onMaximize

Called when maximized.

|Parameter|Type|Description|
|-|-|:-|
|func|[Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function)|The function runned when event is called|

***

### onFullScreenUpdate

Called when fullscreen state change.

|Parameter|Type|Description|
|-|-|:-|
|func|[Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function)|The function runned when event is called|

**@Returns** `{Function}` :
|Args|Type|Description|
|-|-|:-|
|oldValue|[Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean)|The old value of `isFullscreen`|
|newValue|[Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean)|The new value of `isFullscreen`|

## Scene
Scene are the content of your window. You can create scene as much you want.
You can switch by an another scene in your window, and keep the last.

### add 
Add a new object in your scene.

|Parameter|Type|Description|
|-|-|:-|
|content|[Button](#button)|An Phosphore Object|

## Button
A button is a button ;D

### setText
Change the text inside the button.

|Parameter|Type|Description|
|-|-|:-|
|text|[String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String)|The text you want|

***

### onClick
EventHandler of click.

|Parameter|Type|Description|
|-|-|:-|
|func|[Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function)|The function to run when a new event|


***

Rayane Bakkali &copy; 2021
