import minimist = require("minimist");
import Types = require('../index.d.ts');
var argv = minimist(process.argv.slice(2));

global.$longshot = argv;

export function config(key: string, value?: any) {
	if (!value) return global.$longshot[key];
	global.$longshot[key] = value;
	return value;
}