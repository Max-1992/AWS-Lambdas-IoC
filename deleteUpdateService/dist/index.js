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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Database connected
const database = __importStar(require("./repository/connect"));
database.connect('mongodb://localhost/test-ts-CRUD');
// Inversify container
const inversify_config_1 = require("./config/inversify.config");
// Types
const types_1 = require("./config/constant/types");
// Create intance
// const instance = container.get<DeleteUserService>(TYPES.IDeleteUserService)
(() => __awaiter(void 0, void 0, void 0, function* () {
    const instance = inversify_config_1.container.get(types_1.TYPES.IDeleteUserService);
    const res = yield instance.delete({ id: '61225936-7939-4b2d-b1f3-86cc3598c45a' });
    console.log('DATA: ', res);
}))();
// export default instance.delete
//# sourceMappingURL=index.js.map