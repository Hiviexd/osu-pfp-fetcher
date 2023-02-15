const colors = require("colors");

log = (message) => {
    console.log(
        `${new Date().toLocaleTimeString()} `.bgCyan.black + message.bgBlue.black
    );
}

error = (message) => {
    console.log(
        `${new Date().toLocaleTimeString()} `.bgCyan.black + message.bgRed.black
    );
}

check = (message) => {
    console.log(
        `${new Date().toLocaleTimeString()} `.bgCyan.black + message.bgGreen.black
    );
}

warn = (message) => {
    console.log(
        `${new Date().toLocaleTimeString()} `.bgCyan.black + message.bgYellow.black
    );
}

module.exports = {
    log,
    error,
    check,
    warn,
};
