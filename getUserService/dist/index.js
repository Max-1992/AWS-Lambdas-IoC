"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Database connected
const database = __importStar(require("./repository/connect"));
database.connect('mongodb://localhost/test-ts-CRUD');
// Inversify container
const inversify_config_1 = require("./config/inversify.config");
const types_1 = require("./config/constant/types");
// Create instance
const instance = inversify_config_1.container.get(types_1.TYPES.IGetUserService);
instance.get({ id: '378d33aa-c5d2-4ef8-8bab-6e08ff43f265' });
exports.default = instance.get;
//# sourceMappingURL=index.js.map