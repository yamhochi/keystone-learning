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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PORT\": () => (/* binding */ PORT),\n/* harmony export */   \"SESSION_MAX_AGE\": () => (/* binding */ SESSION_MAX_AGE),\n/* harmony export */   \"SESSION_SECRET\": () => (/* binding */ SESSION_SECRET),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _keystone_6_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @keystone-6/core */ \"@keystone-6/core\");\n/* harmony import */ var _keystone_6_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_keystone_6_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @keystone-6/core/fields */ \"@keystone-6/core/fields\");\n/* harmony import */ var _keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _keystone_6_core_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @keystone-6/core/session */ \"@keystone-6/core/session\");\n/* harmony import */ var _keystone_6_core_session__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_keystone_6_core_session__WEBPACK_IMPORTED_MODULE_2__);\n// keystone.ts\n\n\n\nconst SESSION_MAX_AGE = parseInt(process.env.SESSION_MAX_AGE) || 60 * 60 * 24 * 30;\nconst PORT = parseInt(process.env.PORT) || 3000;\n// If the environment doesn't supply a value, default the secret to a secure random string\n// This will cause all cookies to be invalidated with each app restart (annoying but better than having a hardcoded default)\n// A secure value will be set in your Heroku deploy if you use the \"Deploy to Heroku\" button or follow the instructions in the README\nconst SESSION_SECRET = process.env.SESSION_SECRET || (__webpack_require__(/*! crypto */ \"crypto\").randomBytes)(32).toString(\"base64\").replace(/[^a-zA-Z0-9]+/g, \"\");\n// Stateless sessions will store the listKey and itemId of the signed-in user in a cookie.\n// This session object will be made available on the context object used in hooks, access-control,\n// resolvers, etc.\nconst session = (0,_keystone_6_core_session__WEBPACK_IMPORTED_MODULE_2__.statelessSessions)({\n    maxAge: SESSION_MAX_AGE,\n    // The session secret is used to encrypt cookie data (should be an environment variable)\n    secret: SESSION_SECRET\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_keystone_6_core__WEBPACK_IMPORTED_MODULE_0__.config)({\n    db: {\n        provider: \"postgresql\",\n        // url: 'postgres://postgres:buildthedamnthing@localhost:5432/learning-ks',\n        url: process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost/learning-ks`,\n        // onConnect: async context => { /* ... */ },\n        // Optional advanced configuration\n        enableLogging: true,\n        useMigrations: true,\n        idField: {\n            kind: \"uuid\"\n        }\n    },\n    server: {\n        port: PORT\n    },\n    lists: {\n        User: (0,_keystone_6_core__WEBPACK_IMPORTED_MODULE_0__.list)({\n            fields: {\n                name: (0,_keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1__.text)({\n                    validation: {\n                        isRequired: true\n                    }\n                }),\n                email: (0,_keystone_6_core_fields__WEBPACK_IMPORTED_MODULE_1__.text)({\n                    validation: {\n                        isRequired: true\n                    },\n                    isIndexed: \"unique\"\n                })\n            }\n        })\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi4vLi4va2V5c3RvbmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGNBQWM7QUFDa0M7QUFDRDtBQUNjO0FBR3RELE1BQU1JLGVBQWUsR0FBR0MsUUFBUSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ25GLE1BQU1JLElBQUksR0FBR0gsUUFBUSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ3ZELDBGQUEwRjtBQUMxRiw0SEFBNEg7QUFDNUgscUlBQXFJO0FBQzlILE1BQU1DLGNBQWMsR0FDekJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxjQUFjLElBQzFCQyx5REFDYyxDQUFDLEVBQUUsQ0FBQyxDQUNmRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQ2xCQyxPQUFPLG1CQUFtQixFQUFFLENBQUMsQ0FBQztBQUduQywwRkFBMEY7QUFDMUYsa0dBQWtHO0FBQ2xHLGtCQUFrQjtBQUNsQixNQUFNQyxPQUFPLEdBQUdYLDJFQUFpQixDQUFDO0lBQ2hDWSxNQUFNLEVBQUVYLGVBQWU7SUFDdkIsd0ZBQXdGO0lBQ3hGWSxNQUFNLEVBQUVQLGNBQWM7Q0FDdkIsQ0FBQztBQUVGLGlFQUFlVCx3REFBTSxDQUFDO0lBQ2xCaUIsRUFBRSxFQUFFO1FBQ0FDLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLDJFQUEyRTtRQUMzRUMsR0FBRyxFQUFFYixPQUFPLENBQUNDLEdBQUcsQ0FBQ2EsWUFBWSxJQUFJLENBQUMsV0FBVyxFQUFFZCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZGLDZDQUE2QztRQUM3QyxrQ0FBa0M7UUFDbENDLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxhQUFhLEVBQUUsSUFBSTtRQUNuQkMsT0FBTyxFQUFFO1lBQUVDLElBQUksRUFBRSxNQUFNO1NBQUU7S0FFMUI7SUFFSEMsTUFBTSxFQUFFO1FBQUVDLElBQUksRUFBRW5CLElBQUk7S0FBRTtJQUV0Qm9CLEtBQUssRUFBRTtRQUNMQyxJQUFJLEVBQUU1QixzREFBSSxDQUFDO1lBQ1Q2QixNQUFNLEVBQUU7Z0JBQ05DLElBQUksRUFBRTdCLDZEQUFJLENBQUM7b0JBQUU4QixVQUFVLEVBQUU7d0JBQUVDLFVBQVUsRUFBRSxJQUFJO3FCQUFFO2lCQUFFLENBQUM7Z0JBQ2hEQyxLQUFLLEVBQUVoQyw2REFBSSxDQUFDO29CQUFFOEIsVUFBVSxFQUFFO3dCQUFFQyxVQUFVLEVBQUUsSUFBSTtxQkFBRTtvQkFBRUUsU0FBUyxFQUFFLFFBQVE7aUJBQUUsQ0FBQzthQUN2RTtTQUNGLENBQUM7S0FDSDtDQUdGLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi8uLi9rZXlzdG9uZS50cz9kNGRmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGtleXN0b25lLnRzXG5pbXBvcnQgeyBjb25maWcsIGxpc3QgfSBmcm9tICdAa2V5c3RvbmUtNi9jb3JlJztcbmltcG9ydCB7IHRleHQgfSBmcm9tICdAa2V5c3RvbmUtNi9jb3JlL2ZpZWxkcyc7XG5pbXBvcnQgeyBzdGF0ZWxlc3NTZXNzaW9ucyB9IGZyb20gJ0BrZXlzdG9uZS02L2NvcmUvc2Vzc2lvbic7XG5cblxuZXhwb3J0IGNvbnN0IFNFU1NJT05fTUFYX0FHRSA9IHBhcnNlSW50KHByb2Nlc3MuZW52LlNFU1NJT05fTUFYX0FHRSkgfHwgNjAgKiA2MCAqIDI0ICogMzA7XG5leHBvcnQgY29uc3QgUE9SVCA9IHBhcnNlSW50KHByb2Nlc3MuZW52LlBPUlQpIHx8IDMwMDA7XG4vLyBJZiB0aGUgZW52aXJvbm1lbnQgZG9lc24ndCBzdXBwbHkgYSB2YWx1ZSwgZGVmYXVsdCB0aGUgc2VjcmV0IHRvIGEgc2VjdXJlIHJhbmRvbSBzdHJpbmdcbi8vIFRoaXMgd2lsbCBjYXVzZSBhbGwgY29va2llcyB0byBiZSBpbnZhbGlkYXRlZCB3aXRoIGVhY2ggYXBwIHJlc3RhcnQgKGFubm95aW5nIGJ1dCBiZXR0ZXIgdGhhbiBoYXZpbmcgYSBoYXJkY29kZWQgZGVmYXVsdClcbi8vIEEgc2VjdXJlIHZhbHVlIHdpbGwgYmUgc2V0IGluIHlvdXIgSGVyb2t1IGRlcGxveSBpZiB5b3UgdXNlIHRoZSBcIkRlcGxveSB0byBIZXJva3VcIiBidXR0b24gb3IgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgaW4gdGhlIFJFQURNRVxuZXhwb3J0IGNvbnN0IFNFU1NJT05fU0VDUkVUID1cbiAgcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQgfHxcbiAgcmVxdWlyZSgnY3J5cHRvJylcbiAgICAucmFuZG9tQnl0ZXMoMzIpXG4gICAgLnRvU3RyaW5nKCdiYXNlNjQnKVxuICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOV0rL2csICcnKTtcblxuICAgIFxuLy8gU3RhdGVsZXNzIHNlc3Npb25zIHdpbGwgc3RvcmUgdGhlIGxpc3RLZXkgYW5kIGl0ZW1JZCBvZiB0aGUgc2lnbmVkLWluIHVzZXIgaW4gYSBjb29raWUuXG4vLyBUaGlzIHNlc3Npb24gb2JqZWN0IHdpbGwgYmUgbWFkZSBhdmFpbGFibGUgb24gdGhlIGNvbnRleHQgb2JqZWN0IHVzZWQgaW4gaG9va3MsIGFjY2Vzcy1jb250cm9sLFxuLy8gcmVzb2x2ZXJzLCBldGMuXG5jb25zdCBzZXNzaW9uID0gc3RhdGVsZXNzU2Vzc2lvbnMoe1xuICBtYXhBZ2U6IFNFU1NJT05fTUFYX0FHRSxcbiAgLy8gVGhlIHNlc3Npb24gc2VjcmV0IGlzIHVzZWQgdG8gZW5jcnlwdCBjb29raWUgZGF0YSAoc2hvdWxkIGJlIGFuIGVudmlyb25tZW50IHZhcmlhYmxlKVxuICBzZWNyZXQ6IFNFU1NJT05fU0VDUkVULFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZyh7XG4gICAgZGI6IHtcbiAgICAgICAgcHJvdmlkZXI6ICdwb3N0Z3Jlc3FsJyxcbiAgICAgICAgLy8gdXJsOiAncG9zdGdyZXM6Ly9wb3N0Z3JlczpidWlsZHRoZWRhbW50aGluZ0Bsb2NhbGhvc3Q6NTQzMi9sZWFybmluZy1rcycsXG4gICAgICAgIHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIHx8IGBwb3N0Z3JlczovLyR7cHJvY2Vzcy5lbnYuVVNFUn1AbG9jYWxob3N0L2xlYXJuaW5nLWtzYCxcbiAgICAgICAgLy8gb25Db25uZWN0OiBhc3luYyBjb250ZXh0ID0+IHsgLyogLi4uICovIH0sXG4gICAgICAgIC8vIE9wdGlvbmFsIGFkdmFuY2VkIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgZW5hYmxlTG9nZ2luZzogdHJ1ZSxcbiAgICAgICAgdXNlTWlncmF0aW9uczogdHJ1ZSxcbiAgICAgICAgaWRGaWVsZDogeyBraW5kOiAndXVpZCcgfSxcbiAgICAgICAgLy8gc2hhZG93RGF0YWJhc2VVcmw6ICdwb3N0Z3JlczovL2RidXNlcjpkYnBhc3NAbG9jYWxob3N0OjU0MzIvc2hhZG93ZGInXG4gICAgICB9LFxuXG4gICAgc2VydmVyOiB7IHBvcnQ6IFBPUlQgfSwgXG4gICAgXG4gICAgbGlzdHM6IHtcbiAgICAgIFVzZXI6IGxpc3Qoe1xuICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICBuYW1lOiB0ZXh0KHsgdmFsaWRhdGlvbjogeyBpc1JlcXVpcmVkOiB0cnVlIH0gfSksXG4gICAgICAgICAgZW1haWw6IHRleHQoeyB2YWxpZGF0aW9uOiB7IGlzUmVxdWlyZWQ6IHRydWUgfSwgaXNJbmRleGVkOiAndW5pcXVlJyB9KSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH0sXG5cbiAgICAvLyBzZXNzaW9uLFxuICB9KTsiXSwibmFtZXMiOlsiY29uZmlnIiwibGlzdCIsInRleHQiLCJzdGF0ZWxlc3NTZXNzaW9ucyIsIlNFU1NJT05fTUFYX0FHRSIsInBhcnNlSW50IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJTRVNTSU9OX1NFQ1JFVCIsInJlcXVpcmUiLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwicmVwbGFjZSIsInNlc3Npb24iLCJtYXhBZ2UiLCJzZWNyZXQiLCJkYiIsInByb3ZpZGVyIiwidXJsIiwiREFUQUJBU0VfVVJMIiwiVVNFUiIsImVuYWJsZUxvZ2dpbmciLCJ1c2VNaWdyYXRpb25zIiwiaWRGaWVsZCIsImtpbmQiLCJzZXJ2ZXIiLCJwb3J0IiwibGlzdHMiLCJVc2VyIiwiZmllbGRzIiwibmFtZSIsInZhbGlkYXRpb24iLCJpc1JlcXVpcmVkIiwiZW1haWwiLCJpc0luZGV4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/../../keystone.ts\n");

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