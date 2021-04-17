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
const createUser_1 = __importDefault(require("../application/createUser"));
const userRepository_1 = require("../repository/userRepository");
const uuid_adapter_1 = require("../services/uuid/uuid.adapter");
// Declare IoC
const container = new inversify_1.Container();
exports.container = container;
// set up bindings
container.bind(types_1.TYPES.ICreateUserService).to(createUser_1.default);
container.bind(types_1.TYPES.IUserRepository).to(userRepository_1.UserRepository);
container.bind(types_1.TYPES.IGeneratorId).to(uuid_adapter_1.GeneratorId);
//# sourceMappingURL=inversify.config.js.map