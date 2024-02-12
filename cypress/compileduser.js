"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    name: {
        first: {
            type: String,
            required: true,
            trim: true
        },
        last: {
            type: String,
            required: true,
            trim: true
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    hashed_password: {
        type: String,
        required: true,
        trim: true
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now()
    },
    role: {
        _id: {
            type: mongoose_1.Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
    },
});
userSchema.virtual('role_name').get(function () {
    return "".concat(this.role.name);
});
userSchema.index({ email: 1 });
var User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
