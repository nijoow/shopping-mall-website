"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const App_1 = __importDefault(require("./App"));
require("./global.css");
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const redux_promise_middleware_1 = __importDefault(require("redux-promise-middleware"));
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const _reducers_1 = __importDefault(require("./_reducers"));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
const store = (0, redux_1.createStore)(_reducers_1.default, composeEnhancers((0, redux_1.applyMiddleware)(redux_promise_middleware_1.default, redux_thunk_1.default)));
console.log(_reducers_1.default);
react_dom_1.default.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store}>
      <App_1.default />
    </react_redux_1.Provider>
  </react_1.default.StrictMode>, document.getElementById("root"));
(0, reportWebVitals_1.default)();
