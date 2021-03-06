"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseName = exports.getProject = exports.getProjectPath = exports.buildRelativePath = exports.findModuleFromOptions = exports.findModule = exports.getWorkspacePath = exports.getWorkspace = exports.commitChanges = exports.createChangeRecorder = exports.createReplaceChange = exports.ReplaceChange = exports.RemoveChange = exports.InsertChange = exports.NoopChange = exports.containsProperty = exports.replaceImport = exports.addProviderToModule = exports.addImportToModule = exports.addExportToModule = exports.addDeclarationToModule = exports.addBootstrapToModule = exports.insertImport = exports.insertAfterLastOccurrence = exports.getContentOfKeyLiteral = exports.getDecoratorMetadata = exports.getSourceNodes = exports.findNodes = exports.stringUtils = void 0;
const tslib_1 = require("tslib");
const string_1 = require("./string");
(0, tslib_1.__exportStar)(require("./parse-name"), exports);
(0, tslib_1.__exportStar)(require("./project"), exports);
(0, tslib_1.__exportStar)(require("./workspace"), exports);
exports.stringUtils = {
    dasherize: string_1.dasherize,
    decamelize: string_1.decamelize,
    camelize: string_1.camelize,
    classify: string_1.classify,
    underscore: string_1.underscore,
    group: string_1.group,
    capitalize: string_1.capitalize,
    featurePath: string_1.featurePath,
    singular: string_1.singular,
    plural: string_1.plural,
};
var ast_utils_1 = require("./ast-utils");
Object.defineProperty(exports, "findNodes", { enumerable: true, get: function () { return ast_utils_1.findNodes; } });
Object.defineProperty(exports, "getSourceNodes", { enumerable: true, get: function () { return ast_utils_1.getSourceNodes; } });
Object.defineProperty(exports, "getDecoratorMetadata", { enumerable: true, get: function () { return ast_utils_1.getDecoratorMetadata; } });
Object.defineProperty(exports, "getContentOfKeyLiteral", { enumerable: true, get: function () { return ast_utils_1.getContentOfKeyLiteral; } });
Object.defineProperty(exports, "insertAfterLastOccurrence", { enumerable: true, get: function () { return ast_utils_1.insertAfterLastOccurrence; } });
Object.defineProperty(exports, "insertImport", { enumerable: true, get: function () { return ast_utils_1.insertImport; } });
Object.defineProperty(exports, "addBootstrapToModule", { enumerable: true, get: function () { return ast_utils_1.addBootstrapToModule; } });
Object.defineProperty(exports, "addDeclarationToModule", { enumerable: true, get: function () { return ast_utils_1.addDeclarationToModule; } });
Object.defineProperty(exports, "addExportToModule", { enumerable: true, get: function () { return ast_utils_1.addExportToModule; } });
Object.defineProperty(exports, "addImportToModule", { enumerable: true, get: function () { return ast_utils_1.addImportToModule; } });
Object.defineProperty(exports, "addProviderToModule", { enumerable: true, get: function () { return ast_utils_1.addProviderToModule; } });
Object.defineProperty(exports, "replaceImport", { enumerable: true, get: function () { return ast_utils_1.replaceImport; } });
Object.defineProperty(exports, "containsProperty", { enumerable: true, get: function () { return ast_utils_1.containsProperty; } });
var change_1 = require("./change");
Object.defineProperty(exports, "NoopChange", { enumerable: true, get: function () { return change_1.NoopChange; } });
Object.defineProperty(exports, "InsertChange", { enumerable: true, get: function () { return change_1.InsertChange; } });
Object.defineProperty(exports, "RemoveChange", { enumerable: true, get: function () { return change_1.RemoveChange; } });
Object.defineProperty(exports, "ReplaceChange", { enumerable: true, get: function () { return change_1.ReplaceChange; } });
Object.defineProperty(exports, "createReplaceChange", { enumerable: true, get: function () { return change_1.createReplaceChange; } });
Object.defineProperty(exports, "createChangeRecorder", { enumerable: true, get: function () { return change_1.createChangeRecorder; } });
Object.defineProperty(exports, "commitChanges", { enumerable: true, get: function () { return change_1.commitChanges; } });
var config_1 = require("./config");
Object.defineProperty(exports, "getWorkspace", { enumerable: true, get: function () { return config_1.getWorkspace; } });
Object.defineProperty(exports, "getWorkspacePath", { enumerable: true, get: function () { return config_1.getWorkspacePath; } });
var find_module_1 = require("./find-module");
Object.defineProperty(exports, "findModule", { enumerable: true, get: function () { return find_module_1.findModule; } });
Object.defineProperty(exports, "findModuleFromOptions", { enumerable: true, get: function () { return find_module_1.findModuleFromOptions; } });
Object.defineProperty(exports, "buildRelativePath", { enumerable: true, get: function () { return find_module_1.buildRelativePath; } });
var project_1 = require("./project");
Object.defineProperty(exports, "getProjectPath", { enumerable: true, get: function () { return project_1.getProjectPath; } });
Object.defineProperty(exports, "getProject", { enumerable: true, get: function () { return project_1.getProject; } });
var parse_name_1 = require("./parse-name");
Object.defineProperty(exports, "parseName", { enumerable: true, get: function () { return parse_name_1.parseName; } });
//# sourceMappingURL=index.js.map