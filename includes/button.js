// IMPORT
const { JAVA, PROXYED_FUNCTION, RUN_LATER } = require('.');

module.exports = class Button {

    #button = JAVA.newInstanceSync("phosphore.utils.Buttons", "Default Button");

    /**
     * Change the text of the button
     * @param {String} text
     */
    setText(text) {
        this.#button.setText(text)
        return this;
    }

    /**
     * Change the X in the Scene of the Button
     * @param {Number} x 
     */
    setX(x) {
        RUN_LATER(()=>{this.#button.setLayoutX(x)})
        return this;
    }

    /**
     * Change the Y in the Scene of the Button
     * @param {Number} y
     */
    setY(y) {
        this.#button.setLayoutY(y)
        return this;
    }

    get() {
        return this.#button;
    }

    /**
     * EventHandler
     * @param {Function} func 
     */
    onClick(func) {
        this.#button.onClick(PROXYED_FUNCTION(func))
    }

}