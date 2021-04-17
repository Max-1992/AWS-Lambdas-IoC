"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
require("reflect-metadata");
// Inversify
const inversify_1 = require("inversify");
// Types
const types_1 = require("./constant/types");
// Class
const updateUser_1 = __importDefault(require("../application/updateUser"));
const userRepository_1 = require("../repository/userRepository");
// Declare IoC
const container = new inversify_1.Container();
exports.container = container;
// set up bindings
container.bind(types_1.TYPES.IUpdateUserService).to(updateUser_1.default);
container.bind(types_1.TYPES.IUserRepository).to(userRepository_1.UserRepository);
//# sourceMappingURL=inversify.config.js.map