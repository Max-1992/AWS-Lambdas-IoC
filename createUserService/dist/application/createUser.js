"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
// Inversify
const inversify_1 = require("inversify");
// Types
const types_1 = require("../config/constant/types");
// Class
const user_1 = require("../entities/user");
let CreateUserService = class CreateUserService {
    constructor(userRepository, generatorId) {
        this.userRepository = userRepository;
        this.generatorId = generatorId;
    }
    create(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Generate a copy of the received data.
                const userDTO = Object.assign({}, event);
                // Create a unique Id for our user.
                userDTO.id = this.generatorId.generate();
                // Create a Date High user.
                userDTO.registrationDate = new Date();
                // Capture the data sent by the request body.
                let user = new user_1.User(userDTO);
                // Call the repository method to create new user.
                const userCreated = yield this.userRepository.save(user);
                if (!userCreated) {
                    throw Error("We could not create the user");
                }
                return userCreated;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
};
CreateUserService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.IUserRepository)),
    __param(1, inversify_1.inject(types_1.TYPES.IGeneratorId)),
    __metadata("design:paramtypes", [Object, Object])
], CreateUserService);
exports.default = CreateUserService;
//# sourceMappingURL=createUser.js.map