const colors = require("colors");
const {BUTTONS} = require("../config");
module.exports = () => {
    if(BUTTONS.length > 2) {
        console.warn("ERROR: ".red + "You can't load more than 2 buttons!");
        process.exit(0);
    }
}