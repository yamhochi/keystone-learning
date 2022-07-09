/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/__keystone_api_build";
exports.ids = ["pages/api/__keystone_api_build"];
exports.modules = {

/***/ "@keystone-6/core":
/*!***********************************!*\
  !*** external "@keystone-6/core" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-6/core");

/***/ }),

/***/ "@keystone-6/core/fields":
/*!******************************************!*\
  !*** external "@keystone-6/core/fields" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-6/core/fields");

/***/ }),

/***/ "@keystone-6/core/session":
/*!*******************************************!*\
  !*** external "@keystone-6/core/session" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-6/core/session");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "(api)/./pages/api/__keystone_api_build.js":
/*!*******************************************!*\
  !*** ./pages/api/__keystone_api_build.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("exports.getConfig = ()=>__webpack_require__(/*! ../../../../keystone */ \"(api)/../../keystone.ts\");\nconst x = Math.random();\nexports[\"default\"] = function(req, res) {\n    return res.send(x.toString());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvX19rZXlzdG9uZV9hcGlfYnVpbGQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUFBLGlCQUFpQixHQUFHLElBQU1FLG1CQUFPLENBQUMscURBQXNCLENBQUMsQ0FBQztBQUMxRCxNQUFNQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsTUFBTSxFQUFFO0FBQ3ZCTCxrQkFBZSxHQUFHLFNBQVVPLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQUUsT0FBT0EsR0FBRyxDQUFDQyxJQUFJLENBQUNOLENBQUMsQ0FBQ08sUUFBUSxFQUFFLENBQUM7Q0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9fX2tleXN0b25lX2FwaV9idWlsZC5qcz9mZDZmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuZ2V0Q29uZmlnID0gKCkgPT4gcmVxdWlyZShcIi4uLy4uLy4uLy4uL2tleXN0b25lXCIpO1xuY29uc3QgeCA9IE1hdGgucmFuZG9tKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIHJlcy5zZW5kKHgudG9TdHJpbmcoKSkgfVxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJnZXRDb25maWciLCJyZXF1aXJlIiwieCIsIk1hdGgiLCJyYW5kb20iLCJkZWZhdWx0IiwicmVxIiwicmVzIiwic2VuZCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/__keystone_api_build.js\n");

/***/ }),

/***/ "(api)/../../keystone.ts":
/*!*************************!*\
  !*** ../../keystone.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SESSION_MAX_AGE\": () => (/* binding */ SESSION_MAX_AGE),\n/* harmony export */   \"SESSION_SECRET\": () => (/* binding */ SESSION_SECRET),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _keystone_6_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @keystone-6/core */ \"@keystone-6/core\");\n/* harmony import */ var _keystone_6_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_keystone_6_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @keystone-6/core/fields */ \"@keystone-6/core/fields\");\n/* harmony import */ var _keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _keystone_6_core_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @keystone-6/core/session */ \"@keystone-6/core/session\");\n/* harmony import */ var _keystone_6_core_session__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_keystone_6_core_session__WEBPACK_IMPORTED_MODULE_2__);\n// keystone.ts\n\n\n\nconst SESSION_MAX_AGE = parseInt(process.env.SESSION_MAX_AGE) || 60 * 60 * 24 * 30;\n// export const PORT = parseInt(process.env.PORT) || 3000;\n// If the environment doesn't supply a value, default the secret to a secure random string\n// This will cause all cookies to be invalidated with each app restart (annoying but better than having a hardcoded default)\n// A secure value will be set in your Heroku deploy if you use the \"Deploy to Heroku\" button or follow the instructions in the README\nconst SESSION_SECRET = process.env.SESSION_SECRET || (__webpack_require__(/*! crypto */ \"crypto\").randomBytes)(32).toString(\"base64\").replace(/[^a-zA-Z0-9]+/g, \"\");\n// Stateless sessions will store the listKey and itemId of the signed-in user in a cookie.\n// This session object will be made available on the context object used in hooks, access-control,\n// resolvers, etc.\nconst session = (0,_keystone_6_core_session__WEBPACK_IMPORTED_MODULE_2__.statelessSessions)({\n    maxAge: SESSION_MAX_AGE,\n    // The session secret is used to encrypt cookie data (should be an environment variable)\n    secret: SESSION_SECRET\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_keystone_6_core__WEBPACK_IMPORTED_MODULE_0__.config)({\n    db: {\n        provider: \"postgresql\",\n        // url: 'postgres://postgres:buildthedamnthing@localhost:5432/learning-ks',\n        url: process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost/learning-ks`,\n        // onConnect: async context => { /* ... */ },\n        // Optional advanced configuration\n        enableLogging: true,\n        useMigrations: true,\n        idField: {\n            kind: \"uuid\"\n        }\n    },\n    server: {\n        port: PORT\n    },\n    lists: {\n        User: (0,_keystone_6_core__WEBPACK_IMPORTED_MODULE_0__.list)({\n            fields: {\n                name: (0,_keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1__.text)({\n                    validation: {\n                        isRequired: true\n                    }\n                }),\n                email: (0,_keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1__.text)({\n                    validation: {\n                        isRequired: true\n                    },\n                    isIndexed: \"unique\"\n                })\n            }\n        })\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi4vLi4va2V5c3RvbmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYztBQUNrQztBQUNEO0FBQ2M7QUFHdEQsTUFBTUksZUFBZSxHQUFHQyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxlQUFlLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDMUYsMERBQTBEO0FBQzFELDBGQUEwRjtBQUMxRiw0SEFBNEg7QUFDNUgscUlBQXFJO0FBQzlILE1BQU1JLGNBQWMsR0FDekJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLElBQzFCQyx5REFDYyxDQUFDLEVBQUUsQ0FBQyxDQUNmRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQ2xCQyxPQUFPLG1CQUFtQixFQUFFLENBQUMsQ0FBQztBQUduQywwRkFBMEY7QUFDMUYsa0dBQWtHO0FBQ2xHLGtCQUFrQjtBQUNsQixNQUFNQyxPQUFPLEdBQUdWLDJFQUFpQixDQUFDO0lBQ2hDVyxNQUFNLEVBQUVWLGVBQWU7SUFDdkIsd0ZBQXdGO0lBQ3hGVyxNQUFNLEVBQUVQLGNBQWM7Q0FDdkIsQ0FBQztBQUVGLGlFQUFlUix3REFBTSxDQUFDO0lBQ2xCZ0IsRUFBRSxFQUFFO1FBQ0FDLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLDJFQUEyRTtRQUMzRUMsR0FBRyxFQUFFWixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksWUFBWSxJQUFJLENBQUMsV0FBVyxFQUFFYixPQUFPLENBQUNDLEdBQUcsQ0FBQ2EsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZGLDZDQUE2QztRQUM3QyxrQ0FBa0M7UUFDbENDLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxhQUFhLEVBQUUsSUFBSTtRQUNuQkMsT0FBTyxFQUFFO1lBQUVDLElBQUksRUFBRSxNQUFNO1NBQUU7S0FFMUI7SUFFSEMsTUFBTSxFQUFFO1FBQUVDLElBQUksRUFBRUMsSUFBSTtLQUFFO0lBRXRCQyxLQUFLLEVBQUU7UUFDTEMsSUFBSSxFQUFFNUIsc0RBQUksQ0FBQztZQUNUNkIsTUFBTSxFQUFFO2dCQUNOQyxJQUFJLEVBQUU3Qiw2REFBSSxDQUFDO29CQUFFOEIsVUFBVSxFQUFFO3dCQUFFQyxVQUFVLEVBQUUsSUFBSTtxQkFBRTtpQkFBRSxDQUFDO2dCQUNoREMsS0FBSyxFQUFFaEMsNkRBQUksQ0FBQztvQkFBRThCLFVBQVUsRUFBRTt3QkFBRUMsVUFBVSxFQUFFLElBQUk7cUJBQUU7b0JBQUVFLFNBQVMsRUFBRSxRQUFRO2lCQUFFLENBQUM7YUFDdkU7U0FDRixDQUFDO0tBQ0g7Q0FHRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4va2V5c3RvbmUudHM/ZDRkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBrZXlzdG9uZS50c1xuaW1wb3J0IHsgY29uZmlnLCBsaXN0IH0gZnJvbSAnQGtleXN0b25lLTYvY29yZSc7XG5pbXBvcnQgeyB0ZXh0IH0gZnJvbSAnQGtleXN0b25lLTYvY29yZS9maWVsZHMnO1xuaW1wb3J0IHsgc3RhdGVsZXNzU2Vzc2lvbnMgfSBmcm9tICdAa2V5c3RvbmUtNi9jb3JlL3Nlc3Npb24nO1xuXG5cbmV4cG9ydCBjb25zdCBTRVNTSU9OX01BWF9BR0UgPSBwYXJzZUludChwcm9jZXNzLmVudi5TRVNTSU9OX01BWF9BR0UpIHx8IDYwICogNjAgKiAyNCAqIDMwO1xuLy8gZXhwb3J0IGNvbnN0IFBPUlQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JUKSB8fCAzMDAwO1xuLy8gSWYgdGhlIGVudmlyb25tZW50IGRvZXNuJ3Qgc3VwcGx5IGEgdmFsdWUsIGRlZmF1bHQgdGhlIHNlY3JldCB0byBhIHNlY3VyZSByYW5kb20gc3RyaW5nXG4vLyBUaGlzIHdpbGwgY2F1c2UgYWxsIGNvb2tpZXMgdG8gYmUgaW52YWxpZGF0ZWQgd2l0aCBlYWNoIGFwcCByZXN0YXJ0IChhbm5veWluZyBidXQgYmV0dGVyIHRoYW4gaGF2aW5nIGEgaGFyZGNvZGVkIGRlZmF1bHQpXG4vLyBBIHNlY3VyZSB2YWx1ZSB3aWxsIGJlIHNldCBpbiB5b3VyIEhlcm9rdSBkZXBsb3kgaWYgeW91IHVzZSB0aGUgXCJEZXBsb3kgdG8gSGVyb2t1XCIgYnV0dG9uIG9yIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zIGluIHRoZSBSRUFETUVcbmV4cG9ydCBjb25zdCBTRVNTSU9OX1NFQ1JFVCA9XG4gIHByb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVUIHx8XG4gIHJlcXVpcmUoJ2NyeXB0bycpXG4gICAgLnJhbmRvbUJ5dGVzKDMyKVxuICAgIC50b1N0cmluZygnYmFzZTY0JylcbiAgICAucmVwbGFjZSgvW15hLXpBLVowLTldKy9nLCAnJyk7XG5cbiAgICBcbi8vIFN0YXRlbGVzcyBzZXNzaW9ucyB3aWxsIHN0b3JlIHRoZSBsaXN0S2V5IGFuZCBpdGVtSWQgb2YgdGhlIHNpZ25lZC1pbiB1c2VyIGluIGEgY29va2llLlxuLy8gVGhpcyBzZXNzaW9uIG9iamVjdCB3aWxsIGJlIG1hZGUgYXZhaWxhYmxlIG9uIHRoZSBjb250ZXh0IG9iamVjdCB1c2VkIGluIGhvb2tzLCBhY2Nlc3MtY29udHJvbCxcbi8vIHJlc29sdmVycywgZXRjLlxuY29uc3Qgc2Vzc2lvbiA9IHN0YXRlbGVzc1Nlc3Npb25zKHtcbiAgbWF4QWdlOiBTRVNTSU9OX01BWF9BR0UsXG4gIC8vIFRoZSBzZXNzaW9uIHNlY3JldCBpcyB1c2VkIHRvIGVuY3J5cHQgY29va2llIGRhdGEgKHNob3VsZCBiZSBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZSlcbiAgc2VjcmV0OiBTRVNTSU9OX1NFQ1JFVCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWcoe1xuICAgIGRiOiB7XG4gICAgICAgIHByb3ZpZGVyOiAncG9zdGdyZXNxbCcsXG4gICAgICAgIC8vIHVybDogJ3Bvc3RncmVzOi8vcG9zdGdyZXM6YnVpbGR0aGVkYW1udGhpbmdAbG9jYWxob3N0OjU0MzIvbGVhcm5pbmcta3MnLFxuICAgICAgICB1cmw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCB8fCBgcG9zdGdyZXM6Ly8ke3Byb2Nlc3MuZW52LlVTRVJ9QGxvY2FsaG9zdC9sZWFybmluZy1rc2AsXG4gICAgICAgIC8vIG9uQ29ubmVjdDogYXN5bmMgY29udGV4dCA9PiB7IC8qIC4uLiAqLyB9LFxuICAgICAgICAvLyBPcHRpb25hbCBhZHZhbmNlZCBjb25maWd1cmF0aW9uXG4gICAgICAgIGVuYWJsZUxvZ2dpbmc6IHRydWUsXG4gICAgICAgIHVzZU1pZ3JhdGlvbnM6IHRydWUsXG4gICAgICAgIGlkRmllbGQ6IHsga2luZDogJ3V1aWQnIH0sXG4gICAgICAgIC8vIHNoYWRvd0RhdGFiYXNlVXJsOiAncG9zdGdyZXM6Ly9kYnVzZXI6ZGJwYXNzQGxvY2FsaG9zdDo1NDMyL3NoYWRvd2RiJ1xuICAgICAgfSxcblxuICAgIHNlcnZlcjogeyBwb3J0OiBQT1JUIH0sIFxuICAgIFxuICAgIGxpc3RzOiB7XG4gICAgICBVc2VyOiBsaXN0KHtcbiAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgbmFtZTogdGV4dCh7IHZhbGlkYXRpb246IHsgaXNSZXF1aXJlZDogdHJ1ZSB9IH0pLFxuICAgICAgICAgIGVtYWlsOiB0ZXh0KHsgdmFsaWRhdGlvbjogeyBpc1JlcXVpcmVkOiB0cnVlIH0sIGlzSW5kZXhlZDogJ3VuaXF1ZScgfSksXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICB9LFxuXG4gICAgLy8gc2Vzc2lvbixcbiAgfSk7Il0sIm5hbWVzIjpbImNvbmZpZyIsImxpc3QiLCJ0ZXh0Iiwic3RhdGVsZXNzU2Vzc2lvbnMiLCJTRVNTSU9OX01BWF9BR0UiLCJwYXJzZUludCIsInByb2Nlc3MiLCJlbnYiLCJTRVNTSU9OX1NFQ1JFVCIsInJlcXVpcmUiLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwicmVwbGFjZSIsInNlc3Npb24iLCJtYXhBZ2UiLCJzZWNyZXQiLCJkYiIsInByb3ZpZGVyIiwidXJsIiwiREFUQUJBU0VfVVJMIiwiVVNFUiIsImVuYWJsZUxvZ2dpbmciLCJ1c2VNaWdyYXRpb25zIiwiaWRGaWVsZCIsImtpbmQiLCJzZXJ2ZXIiLCJwb3J0IiwiUE9SVCIsImxpc3RzIiwiVXNlciIsImZpZWxkcyIsIm5hbWUiLCJ2YWxpZGF0aW9uIiwiaXNSZXF1aXJlZCIsImVtYWlsIiwiaXNJbmRleGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/../../keystone.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/__keystone_api_build.js"));
module.exports = __webpack_exports__;

})();