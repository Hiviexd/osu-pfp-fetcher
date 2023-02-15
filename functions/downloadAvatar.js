const fs = require("fs");
const axios = require("axios");
const logger = require("./logger.js");

const downloadAvatar = async (user) => {
    const url = "https://a.ppy.sh/";

    const response = await axios({
        url: url + user.user_id,
        method: "GET",
        responseType: "stream",
    });

    response.data.pipe(fs.createWriteStream(`res/${user.username}.jpg`));

    logger.check(`downloaded ${user.username}'s avatar`);
    logger.warn("----------------------------");
};

module.exports = downloadAvatar;
