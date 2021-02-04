// FILE IMPORT...
const JAVA = require('java');
JAVA.classpath.push(__dirname+'\\lib.jar');

function PROXYED_FUNCTION (func=()=>{}) {
    if (typeof func != "function") return JAVA.newProxy('java.lang.Runnable', {run: ()=>{}});
    try {
        return JAVA.newProxy('java.lang.Runnable', {run: func});
    } catch (error) {
        throw error;
    }
}

function BOOLEAN_PROXYED_FUNCTION (func=(oldValue, newValue)=>{}) {
    if (typeof func != "function") return JAVA.newProxy('phosphore.utils.BooleanRunnable', {run: ()=>{}});
    try {
        return JAVA.newProxy('phosphore.utils.BooleanRunnable', {run: func});
    } catch (error) {
        throw error;
    }
}

function INT_PROXYED_FUNCTION (func=(oldValue, newValue)=>{}) {
    if (typeof func != "function") return JAVA.newProxy('phosphore.utils.IntRunnable', {run: ()=>{}});
    try {
        return JAVA.newProxy('phosphore.utils.IntRunnable', {run: func});
    } catch (error) {
        throw error;
    }
}

function RUN_LATER (func=()=>{}) {
    setTimeout(()=>{
        func();
    },3)
}

module.exports = { JAVA, BOOLEAN_PROXYED_FUNCTION, INT_PROXYED_FUNCTION, PROXYED_FUNCTION, RUN_LATER }