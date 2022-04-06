"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../_action/types");
function user_reducer(state, action) {
    switch (action.type) {
        case types_1.Login_User:
            return Object.assign(Object.assign({}, state), { loginSuccess: action.payload });
            break;
        default:
            return state;
    }
}
exports.default = user_reducer;
