"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require Model
const mongoose_1 = require("mongoose");
// Declare Role Valid
const ROLES = ['ADMIN_ROLE', 'USER_ROLE'];
// Declare Schema
const UserSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: [true, 'The name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'The password is required'],
        trim: true
    },
    role: {
        type: String,
        enum: ROLES,
        default: 'ADMIN_ROLE',
    },
    registrationDate: {
        type: Date,
        default: Date.now()
    },
});
// Create Model to export
const UserModel = mongoose_1.model('User', UserSchema);
exports.default = UserModel;
//# sourceMappingURL=user.js.map