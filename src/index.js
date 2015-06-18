var _config = [];
function config(key, value) {
    if (!value)
        return _config[key];
    _config[key] = value;
    return value;
}
exports.config = config;
