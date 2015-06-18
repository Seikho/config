var minimist = require("minimist");
var argv = minimist(process.argv.slice(2));
var _config = argv;
function config(key, value) {
    if (!value)
        return _config[key];
    _config[key] = value;
    return value;
}
exports.config = config;
