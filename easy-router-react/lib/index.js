"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasyRouter = void 0;
const react_1 = __importDefault(require("react"));
function EasyRouter({ Route, paths }) {
    return (react_1.default.createElement(react_1.default.Fragment, null, Object.entries(paths || {}).map(([key, val]) => (val === null || val === void 0 ? void 0 : val.element) ? (react_1.default.createElement(Route, { key: key, path: key, element: val === null || val === void 0 ? void 0 : val.element }, Object.entries((val === null || val === void 0 ? void 0 : val.sub_pages) || {}).map(([key, val]) => (react_1.default.createElement(Route, { key: key, path: key === "/" ? "" : key, element: val }))))) : (react_1.default.createElement(Route, { key: key, path: key, element: val })))));
}
exports.EasyRouter = EasyRouter;
exports.default = EasyRouter;
