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

function RUN_LATER (func=()=>{}) {
    setTimeout(()=>{
        func();
    },2)
}

module.exports = { JAVA, PROXYED_FUNCTION, RUN_LATER }