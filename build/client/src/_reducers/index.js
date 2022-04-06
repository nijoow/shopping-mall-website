"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const user_reducer_1 = __importDefault(require("./user_reducer"));
const rootReducer = (0, redux_1.combineReducers)({
    user_reducer: user_reducer_1.default
});
exports.default = rootReducer;
