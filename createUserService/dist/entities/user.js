"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userDto) {
        this.id = userDto.id;
        this.name = userDto.name;
        this.email = userDto.email;
        this.password = userDto.password;
        this.role = userDto.role;
        this.registrationDate = userDto.registrationDate;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map