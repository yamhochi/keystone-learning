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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SESSION_MAX_AGE\": () => (/* binding */ SESSION_MAX_AGE),\n/* harmony export */   \"SESSION_SECRET\": () => (/* binding */ SESSION_SECRET),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _keystone_6_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @keystone-6/core */ \"@keystone-6/core\");\n/* harmony import */ var _keystone_6_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_keystone_6_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @keystone-6/core/fields */ \"@keystone-6/core/fields\");\n/* harmony import */ var _keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _keystone_6_core_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @keystone-6/core/session */ \"@keystone-6/core/session\");\n/* harmony import */ var _keystone_6_core_session__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_keystone_6_core_session__WEBPACK_IMPORTED_MODULE_2__);\n// keystone.ts\n\n\n\nconst SESSION_MAX_AGE = parseInt(process.env.SESSION_MAX_AGE) || 60 * 60 * 24 * 30;\n// If the environment doesn't supply a value, default the secret to a secure random string\n// This will cause all cookies to be invalidated with each app restart (annoying but better than having a hardcoded default)\n// A secure value will be set in your Heroku deploy if you use the \"Deploy to Heroku\" button or follow the instructions in the README\nconst SESSION_SECRET = process.env.SESSION_SECRET || (__webpack_require__(/*! crypto */ \"crypto\").randomBytes)(32).toString(\"base64\").replace(/[^a-zA-Z0-9]+/g, \"\");\n// Stateless sessions will store the listKey and itemId of the signed-in user in a cookie.\n// This session object will be made available on the context object used in hooks, access-control,\n// resolvers, etc.\nconst session = (0,_keystone_6_core_session__WEBPACK_IMPORTED_MODULE_2__.statelessSessions)({\n    maxAge: SESSION_MAX_AGE,\n    // The session secret is used to encrypt cookie data (should be an environment variable)\n    secret: SESSION_SECRET\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_keystone_6_core__WEBPACK_IMPORTED_MODULE_0__.config)({\n    db: {\n        provider: \"postgresql\",\n        url: \"postgres://postgres:buildthedamnthing@localhost:5433/learning-ks\",\n        // onConnect: async context => { /* ... */ },\n        // Optional advanced configuration\n        enableLogging: true,\n        // useMigrations: true,\n        idField: {\n            kind: \"uuid\"\n        }\n    },\n    lists: {\n        User: (0,_keystone_6_core__WEBPACK_IMPORTED_MODULE_0__.list)({\n            fields: {\n                name: (0,_keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1__.text)({\n                    validation: {\n                        isRequired: true\n                    }\n                }),\n                email: (0,_keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1__.text)({\n                    validation: {\n                        isRequired: true\n                    },\n                    isIndexed: \"unique\"\n                })\n            }\n        })\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi4vLi4va2V5c3RvbmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYztBQUNrQztBQUNEO0FBQ2M7QUFHdEQsTUFBTUksZUFBZSxHQUFHQyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxlQUFlLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFFMUYsMEZBQTBGO0FBQzFGLDRIQUE0SDtBQUM1SCxxSUFBcUk7QUFDOUgsTUFBTUksY0FBYyxHQUN6QkYsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGNBQWMsSUFDMUJDLHlEQUNjLENBQUMsRUFBRSxDQUFDLENBQ2ZFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FDbEJDLE9BQU8sbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0FBR25DLDBGQUEwRjtBQUMxRixrR0FBa0c7QUFDbEcsa0JBQWtCO0FBQ2xCLE1BQU1DLE9BQU8sR0FBR1YsMkVBQWlCLENBQUM7SUFDaENXLE1BQU0sRUFBRVYsZUFBZTtJQUN2Qix3RkFBd0Y7SUFDeEZXLE1BQU0sRUFBRVAsY0FBYztDQUN2QixDQUFDO0FBRUYsaUVBQWVSLHdEQUFNLENBQUM7SUFDbEJnQixFQUFFLEVBQUU7UUFDQUMsUUFBUSxFQUFFLFlBQVk7UUFDdEJDLEdBQUcsRUFBRSxrRUFBa0U7UUFDdkUsNkNBQTZDO1FBQzdDLGtDQUFrQztRQUNsQ0MsYUFBYSxFQUFFLElBQUk7UUFDbkIsdUJBQXVCO1FBQ3ZCQyxPQUFPLEVBQUU7WUFBRUMsSUFBSSxFQUFFLE1BQU07U0FBRTtLQUUxQjtJQUNIQyxLQUFLLEVBQUU7UUFDTEMsSUFBSSxFQUFFdEIsc0RBQUksQ0FBQztZQUNUdUIsTUFBTSxFQUFFO2dCQUNOQyxJQUFJLEVBQUV2Qiw2REFBSSxDQUFDO29CQUFFd0IsVUFBVSxFQUFFO3dCQUFFQyxVQUFVLEVBQUUsSUFBSTtxQkFBRTtpQkFBRSxDQUFDO2dCQUNoREMsS0FBSyxFQUFFMUIsNkRBQUksQ0FBQztvQkFBRXdCLFVBQVUsRUFBRTt3QkFBRUMsVUFBVSxFQUFFLElBQUk7cUJBQUU7b0JBQUVFLFNBQVMsRUFBRSxRQUFRO2lCQUFFLENBQUM7YUFDdkU7U0FDRixDQUFDO0tBQ0g7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4va2V5c3RvbmUudHM/ZDRkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBrZXlzdG9uZS50c1xuaW1wb3J0IHsgY29uZmlnLCBsaXN0IH0gZnJvbSAnQGtleXN0b25lLTYvY29yZSc7XG5pbXBvcnQgeyB0ZXh0IH0gZnJvbSAnQGtleXN0b25lLTYvY29yZS9maWVsZHMnO1xuaW1wb3J0IHsgc3RhdGVsZXNzU2Vzc2lvbnMgfSBmcm9tICdAa2V5c3RvbmUtNi9jb3JlL3Nlc3Npb24nO1xuXG5cbmV4cG9ydCBjb25zdCBTRVNTSU9OX01BWF9BR0UgPSBwYXJzZUludChwcm9jZXNzLmVudi5TRVNTSU9OX01BWF9BR0UpIHx8IDYwICogNjAgKiAyNCAqIDMwO1xuXG4vLyBJZiB0aGUgZW52aXJvbm1lbnQgZG9lc24ndCBzdXBwbHkgYSB2YWx1ZSwgZGVmYXVsdCB0aGUgc2VjcmV0IHRvIGEgc2VjdXJlIHJhbmRvbSBzdHJpbmdcbi8vIFRoaXMgd2lsbCBjYXVzZSBhbGwgY29va2llcyB0byBiZSBpbnZhbGlkYXRlZCB3aXRoIGVhY2ggYXBwIHJlc3RhcnQgKGFubm95aW5nIGJ1dCBiZXR0ZXIgdGhhbiBoYXZpbmcgYSBoYXJkY29kZWQgZGVmYXVsdClcbi8vIEEgc2VjdXJlIHZhbHVlIHdpbGwgYmUgc2V0IGluIHlvdXIgSGVyb2t1IGRlcGxveSBpZiB5b3UgdXNlIHRoZSBcIkRlcGxveSB0byBIZXJva3VcIiBidXR0b24gb3IgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgaW4gdGhlIFJFQURNRVxuZXhwb3J0IGNvbnN0IFNFU1NJT05fU0VDUkVUID1cbiAgcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQgfHxcbiAgcmVxdWlyZSgnY3J5cHRvJylcbiAgICAucmFuZG9tQnl0ZXMoMzIpXG4gICAgLnRvU3RyaW5nKCdiYXNlNjQnKVxuICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOV0rL2csICcnKTtcblxuICAgIFxuLy8gU3RhdGVsZXNzIHNlc3Npb25zIHdpbGwgc3RvcmUgdGhlIGxpc3RLZXkgYW5kIGl0ZW1JZCBvZiB0aGUgc2lnbmVkLWluIHVzZXIgaW4gYSBjb29raWUuXG4vLyBUaGlzIHNlc3Npb24gb2JqZWN0IHdpbGwgYmUgbWFkZSBhdmFpbGFibGUgb24gdGhlIGNvbnRleHQgb2JqZWN0IHVzZWQgaW4gaG9va3MsIGFjY2Vzcy1jb250cm9sLFxuLy8gcmVzb2x2ZXJzLCBldGMuXG5jb25zdCBzZXNzaW9uID0gc3RhdGVsZXNzU2Vzc2lvbnMoe1xuICBtYXhBZ2U6IFNFU1NJT05fTUFYX0FHRSxcbiAgLy8gVGhlIHNlc3Npb24gc2VjcmV0IGlzIHVzZWQgdG8gZW5jcnlwdCBjb29raWUgZGF0YSAoc2hvdWxkIGJlIGFuIGVudmlyb25tZW50IHZhcmlhYmxlKVxuICBzZWNyZXQ6IFNFU1NJT05fU0VDUkVULFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZyh7XG4gICAgZGI6IHtcbiAgICAgICAgcHJvdmlkZXI6ICdwb3N0Z3Jlc3FsJyxcbiAgICAgICAgdXJsOiAncG9zdGdyZXM6Ly9wb3N0Z3JlczpidWlsZHRoZWRhbW50aGluZ0Bsb2NhbGhvc3Q6NTQzMy9sZWFybmluZy1rcycsXG4gICAgICAgIC8vIG9uQ29ubmVjdDogYXN5bmMgY29udGV4dCA9PiB7IC8qIC4uLiAqLyB9LFxuICAgICAgICAvLyBPcHRpb25hbCBhZHZhbmNlZCBjb25maWd1cmF0aW9uXG4gICAgICAgIGVuYWJsZUxvZ2dpbmc6IHRydWUsXG4gICAgICAgIC8vIHVzZU1pZ3JhdGlvbnM6IHRydWUsXG4gICAgICAgIGlkRmllbGQ6IHsga2luZDogJ3V1aWQnIH0sXG4gICAgICAgIC8vIHNoYWRvd0RhdGFiYXNlVXJsOiAncG9zdGdyZXM6Ly9kYnVzZXI6ZGJwYXNzQGxvY2FsaG9zdDo1NDMyL3NoYWRvd2RiJ1xuICAgICAgfSxcbiAgICBsaXN0czoge1xuICAgICAgVXNlcjogbGlzdCh7XG4gICAgICAgIGZpZWxkczoge1xuICAgICAgICAgIG5hbWU6IHRleHQoeyB2YWxpZGF0aW9uOiB7IGlzUmVxdWlyZWQ6IHRydWUgfSB9KSxcbiAgICAgICAgICBlbWFpbDogdGV4dCh7IHZhbGlkYXRpb246IHsgaXNSZXF1aXJlZDogdHJ1ZSB9LCBpc0luZGV4ZWQ6ICd1bmlxdWUnIH0pLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfSxcbiAgfSk7Il0sIm5hbWVzIjpbImNvbmZpZyIsImxpc3QiLCJ0ZXh0Iiwic3RhdGVsZXNzU2Vzc2lvbnMiLCJTRVNTSU9OX01BWF9BR0UiLCJwYXJzZUludCIsInByb2Nlc3MiLCJlbnYiLCJTRVNTSU9OX1NFQ1JFVCIsInJlcXVpcmUiLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwicmVwbGFjZSIsInNlc3Npb24iLCJtYXhBZ2UiLCJzZWNyZXQiLCJkYiIsInByb3ZpZGVyIiwidXJsIiwiZW5hYmxlTG9nZ2luZyIsImlkRmllbGQiLCJraW5kIiwibGlzdHMiLCJVc2VyIiwiZmllbGRzIiwibmFtZSIsInZhbGlkYXRpb24iLCJpc1JlcXVpcmVkIiwiZW1haWwiLCJpc0luZGV4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/../../keystone.ts\n");

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