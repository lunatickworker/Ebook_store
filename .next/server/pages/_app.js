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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/components/pwa/InstallPrompt.tsx":
/*!**********************************************!*\
  !*** ./src/components/pwa/InstallPrompt.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst InstallPrompt = ()=>{\n    const [deferredPrompt, setDeferredPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showPrompt, setShowPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"InstallPrompt.useEffect\": ()=>{\n            window.addEventListener('beforeinstallprompt', {\n                \"InstallPrompt.useEffect\": (e)=>{\n                    e.preventDefault();\n                    setDeferredPrompt(e);\n                    setShowPrompt(true);\n                }\n            }[\"InstallPrompt.useEffect\"]);\n        }\n    }[\"InstallPrompt.useEffect\"], []);\n    const handleInstall = ()=>{\n        if (deferredPrompt) {\n            deferredPrompt.prompt();\n            deferredPrompt.userChoice.then(()=>{\n                setDeferredPrompt(null);\n                setShowPrompt(false);\n            });\n        }\n    };\n    if (!showPrompt) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 right-4 bg-white border shadow-lg p-4 rounded-lg z-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm mb-2\",\n                children: \"\\uD83D\\uDCF1 이 앱을 홈 화면에 추가해보세요!\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Ebookstore\\\\Ebookstore\\\\src\\\\components\\\\pwa\\\\InstallPrompt.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleInstall,\n                className: \"bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm\",\n                children: \"설치하기\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Ebookstore\\\\Ebookstore\\\\src\\\\components\\\\pwa\\\\InstallPrompt.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Ebookstore\\\\Ebookstore\\\\src\\\\components\\\\pwa\\\\InstallPrompt.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstallPrompt);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL3B3YS9JbnN0YWxsUHJvbXB0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFFNUMsTUFBTUUsZ0JBQWdCO0lBQ3BCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0gsK0NBQVFBLENBQU07SUFDMUQsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTdDRCxnREFBU0E7bUNBQUM7WUFDUk8sT0FBT0MsZ0JBQWdCLENBQUM7MkNBQXVCLENBQUNDO29CQUM5Q0EsRUFBRUMsY0FBYztvQkFDaEJOLGtCQUFrQks7b0JBQ2xCSCxjQUFjO2dCQUNoQjs7UUFDRjtrQ0FBRyxFQUFFO0lBRUwsTUFBTUssZ0JBQWdCO1FBQ3BCLElBQUlSLGdCQUFnQjtZQUNsQkEsZUFBZVMsTUFBTTtZQUNyQlQsZUFBZVUsVUFBVSxDQUFDQyxJQUFJLENBQUM7Z0JBQzdCVixrQkFBa0I7Z0JBQ2xCRSxjQUFjO1lBQ2hCO1FBQ0Y7SUFDRjtJQUVBLElBQUksQ0FBQ0QsWUFBWSxPQUFPO0lBRXhCLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUVELFdBQVU7MEJBQWU7Ozs7OzswQkFDNUIsOERBQUNFO2dCQUNDQyxTQUFTUjtnQkFDVEssV0FBVTswQkFDWDs7Ozs7Ozs7Ozs7O0FBS1A7QUFFQSxpRUFBZWQsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsiRjpcXEVib29rc3RvcmVcXEVib29rc3RvcmVcXHNyY1xcY29tcG9uZW50c1xccHdhXFxJbnN0YWxsUHJvbXB0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5zdGFsbFByb21wdCA9ICgpID0+IHtcclxuICBjb25zdCBbZGVmZXJyZWRQcm9tcHQsIHNldERlZmVycmVkUHJvbXB0XSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XHJcbiAgY29uc3QgW3Nob3dQcm9tcHQsIHNldFNob3dQcm9tcHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWluc3RhbGxwcm9tcHQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNldERlZmVycmVkUHJvbXB0KGUpO1xyXG4gICAgICBzZXRTaG93UHJvbXB0KHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnN0YWxsID0gKCkgPT4ge1xyXG4gICAgaWYgKGRlZmVycmVkUHJvbXB0KSB7XHJcbiAgICAgIGRlZmVycmVkUHJvbXB0LnByb21wdCgpO1xyXG4gICAgICBkZWZlcnJlZFByb21wdC51c2VyQ2hvaWNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHNldERlZmVycmVkUHJvbXB0KG51bGwpO1xyXG4gICAgICAgIHNldFNob3dQcm9tcHQoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoIXNob3dQcm9tcHQpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNCByaWdodC00IGJnLXdoaXRlIGJvcmRlciBzaGFkb3ctbGcgcC00IHJvdW5kZWQtbGcgei01MFwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1iLTJcIj7wn5OxIOydtCDslbHsnYQg7ZmIIO2ZlOuptOyXkCDstpTqsIDtlbTrs7TshLjsmpQhPC9wPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlSW5zdGFsbH1cclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQgaG92ZXI6YmctaW5kaWdvLTcwMCB0ZXh0LXNtXCJcclxuICAgICAgPlxyXG4gICAgICAgIOyEpOy5mO2VmOq4sFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnN0YWxsUHJvbXB0O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbnN0YWxsUHJvbXB0IiwiZGVmZXJyZWRQcm9tcHQiLCJzZXREZWZlcnJlZFByb21wdCIsInNob3dQcm9tcHQiLCJzZXRTaG93UHJvbXB0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUluc3RhbGwiLCJwcm9tcHQiLCJ1c2VyQ2hvaWNlIiwidGhlbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/pwa/InstallPrompt.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_pwa_InstallPrompt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/pwa/InstallPrompt */ \"(pages-dir-node)/./src/components/pwa/InstallPrompt.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // ✅ 글로벌 스타일 (필요 시)\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pwa_InstallPrompt__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"F:\\\\Ebookstore\\\\Ebookstore\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"F:\\\\Ebookstore\\\\Ebookstore\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.appWithTranslation)(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDa0Q7QUFDUztBQUM3QixDQUFDLG1CQUFtQjtBQUVsRCxTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQy9DLHFCQUNFOzswQkFDRSw4REFBQ0gscUVBQWFBOzs7OzswQkFDZCw4REFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUosZ0VBQWtCQSxDQUFDRSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJGOlxcRWJvb2tzdG9yZVxcRWJvb2tzdG9yZVxcc3JjXFxwYWdlc1xcX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCc7XHJcbmltcG9ydCBJbnN0YWxsUHJvbXB0IGZyb20gJ0AvY29tcG9uZW50cy9wd2EvSW5zdGFsbFByb21wdCc7XHJcbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnOyAvLyDinIUg6riA66Gc67KMIOyKpO2DgOydvCAo7ZWE7JqUIOyLnClcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEluc3RhbGxQcm9tcHQgLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwV2l0aFRyYW5zbGF0aW9uKE15QXBwKTtcclxuIl0sIm5hbWVzIjpbImFwcFdpdGhUcmFuc2xhdGlvbiIsIkluc3RhbGxQcm9tcHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();