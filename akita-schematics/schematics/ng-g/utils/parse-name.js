"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseName = void 0;
const core_1 = require("@angular-devkit/core");
function parseName(options) {
    const { name, path } = options;
    const nameWithoutPath = (0, core_1.basename)(name);
    const namePath = (0, core_1.dirname)((path + '/' + name));
    const normalizedPath = normalizePath(nameWithoutPath, namePath, options);
    return {
        name: nameWithoutPath,
        path: normalizedPath,
    };
}
exports.parseName = parseName;
function normalizePath(name, namePath, options) {
    const { dirName, feature, flat } = options;
    const basePath = `/${namePath}`;
    if (!feature) {
        return (0, core_1.normalize)(basePath);
    }
    const dirPath = `${basePath}/${dirName}`;
    const fullPath = flat ? dirPath : `${dirPath}/${name}`;
    return (0, core_1.normalize)(fullPath);
}
//# sourceMappingURL=parse-name.js.map