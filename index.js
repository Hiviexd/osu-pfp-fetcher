const fs = require("fs");
const path = require("path");
const axios = require("axios");
const logger = require("./functions/logger.js");
const downloadAvatar = require("./functions/downloadAvatar.js");
const config = require("./config.json");

// config error handling
if (!config.apiKey) return logger.error("please enter your osu! api key in config.json, you can find it in https://osu.ppy.sh/p/api/");
if (!config.usernames.length) return logger.error('please enter the usernames you want to download in config.json in the form of ["user1", "user2", "user3"...]');

// create res folder if it doesn't exist
if (!fs.existsSync("res")) {
    logger.log("Creating res folder...");
    fs.mkdirSync("res");
} else {
    // clear res folder
    fs.readdir("res", (err, files) => {
        if (err) throw err;

        logger.log("Clearing res folder...");

        for (const file of files) {
            fs.unlink(path.join("res", file), (err) => {
                if (err) throw err;
            });
        }
    });
}

// do the thing
config.usernames.forEach((username) => {
    setTimeout(() => {
        axios
            .get(`https://osu.ppy.sh/api/get_user?k=${config.apiKey}&u=${username}&type=string`)
            .then((res) => {
                downloadAvatar(res.data[0]);
            });
    }, 500); // api spam prevention
});
