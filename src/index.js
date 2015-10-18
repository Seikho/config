var minimist = require("minimist");
var argv = minimist(process.argv.slice(2));
global.$longshot = argv;
function config(key, value) {
    if (!value)
        return global.$longshot[key];
    global.$longshot[key] = value;
    return value;
}
exports.config = config;
