import minimist = require("minimist");
var argv = minimist(process.argv.slice(2));

var _config: any = argv;

export function config(key: string, value?: string) {
	if (!value) return _config[key];
	_config[key] = value;
	return value;
}