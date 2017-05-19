//This file and the others in this directory are built by the tsconfig.json in this folder.
//The compiled javascript is also included and kept up to date, so there is no reason to build
//the contents of this folder unless you are working on the build scripts.
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var less = require('threax-npm-tk/less');
var filesDir = __dirname + "/..";
function build(outDir, moduleDir) {
    var promises = [];
    promises.push(less.compile({
        encoding: 'utf8',
        importPaths: [filesDir, moduleDir + '/bootstrap/less'],
        input: filesDir + '/css/**/*.less',
        basePath: filesDir + '/css',
        out: outDir,
        compress: true,
    }));
    //Return composite promise
    return Promise.all(promises);
}
exports.build = build;
//# sourceMappingURL=build.js.map