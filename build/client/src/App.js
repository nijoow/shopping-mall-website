"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const LandingPage_1 = __importDefault(require("./components/views/LandingPage/LandingPage"));
const LoginPage_1 = __importDefault(require("./components/views/LoginPage/LoginPage"));
const RegisterPage_1 = __importDefault(require("./components/views/RegisterPage/RegisterPage"));
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<LandingPage_1.default />}/>
        <react_router_dom_1.Route path="/login" element={<LoginPage_1.default />}/>
        <react_router_dom_1.Route path="/register" element={<RegisterPage_1.default />}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
