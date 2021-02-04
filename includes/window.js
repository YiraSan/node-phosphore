// IMPORT
const { JAVA, BOOLEAN_PROXYED_FUNCTION, PROXYED_FUNCTION, RUN_LATER } = require('.')
const { width, height }          = require('screenz')

// FOR DOCS
const Scene = require('./scene')

/**
* @description Create a new Window
* @author YiraSan
*/
module.exports = class Window {

    #window = JAVA.newInstanceSync("phosphore.Window")

    constructor () {
        //this.setIcon(__dirname+"\\..\\icon.png");
    }

    /**
     * Set the title of the window.
     * @param {String} title
     */
    setTitle (title) {
        this.#window.setTitle(title)
        return this;
    }

    /**
     * Set the icon of the window
     * @param {String} [path]
     */
    setIcon (path) {
        this.#window.setIcon(path)
        return this;
    }

    /**
     * Display the window
     */
    display () {
        this.#window.display()
        return this;
    }

    /**
     * Set the scene of the window
     * @param {Scene} scene
     */
    setScene (scene) {
        RUN_LATER(()=>{this.#window.setScene(scene.instance)})
        return this;
    } 

    /**
     * @deprecated Please use display()
     */
    show () {
        return this.display()
    }

    /**
     * Hide the window
     */
    hide () {
        this.#window.hide()
        return this;
    }

    /**
     * Get the maximum height the screen can contain.
     */
    getMaximumHeight() {
        return height;
    }

    /**
     * Get the maximum width the screen can contain.
     */
    getMaximumWidth() {
        return width;
    }

    /**
     * Set the size of the window by width and height
     * @param {Number} width
     * @param {Number} height
     */
    setSize(width, height) {
        RUN_LATER(()=>{this.#window.setSize(JAVA.newDouble(width), JAVA.newDouble(height))})
        return this;
    }

    /**
     * Automatic size by the screen height and width
     */
    autoSize() {
        this.setSize(width*0.75, height*0.75);
        return this;
    }

    // webEngine...

    /**
     * Launch the webEngine
     * @param {String} url
     */
    web(url) {
        this.#window.displayWeb(url);
        return this;
    }

    // EVENT

    onClosing(func=()=>{}) {
        RUN_LATER(()=>{this.#window.onClosing(PROXYED_FUNCTION(func))});
        return this;
    }

    onReduce(func=()=>{}) {
        RUN_LATER(()=>{this.#window.onReduce(PROXYED_FUNCTION(func))});
        return this;
    }

    onMaximize(func=()=>{}) {
        RUN_LATER(()=>{this.#window.onMaximize(PROXYED_FUNCTION(func))});
        return this;
    }

    onFullScreenUpdate(func=(oldValue, newValue)=>{}) {
        RUN_LATER(()=>{this.#window.onFullScreenUpdate(BOOLEAN_PROXYED_FUNCTION(func))});
        return this;
    }

}