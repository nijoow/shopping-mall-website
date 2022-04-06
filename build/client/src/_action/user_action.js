"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const axios_1 = __importDefault(require("axios"));
const types_1 = require("./types");
function loginUser(dataToSubmit) {
    const request = axios_1.default
        .post("/api/users/login", dataToSubmit)
        .then((response) => response.data);
    return {
        type: types_1.Login_User,
        payload: request,
    };
}
exports.loginUser = loginUser;
