// IMPORT
const { JAVA, PROXYED_FUNCTION } = require('.');

// FOR DOCS
const Button = require('./button');

module.exports = class Scene {

    #scene = JAVA.newInstanceSync("phosphore.Scen");

    /**
     * Add content in the scene
     * @param {Button} content 
     */
    add(content) {

        this.#scene.add(content.get());

        return this;

    }

    get instance () {
        return this.#scene;
    }

}