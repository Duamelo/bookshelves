"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/books/components/book/book.tsx":
/*!********************************************!*\
  !*** ./src/books/components/book/book.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Book; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ \"(app-pages-browser)/./src/books/hooks/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Book(param) {\n    let { id } = param;\n    _s();\n    const detail = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useBook)(id);\n    return detail !== undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"card-img-top\",\n                src: detail.image,\n                alt: \"Card image cap\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Charly\\\\projects\\\\bookshelves\\\\src\\\\books\\\\components\\\\book\\\\book.tsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"card-title\",\n                        children: detail.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Charly\\\\projects\\\\bookshelves\\\\src\\\\books\\\\components\\\\book\\\\book.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-text\",\n                        children: [\n                            \"Par \",\n                            detail.authors.map((author)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        \" \",\n                                        author.name,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Charly\\\\projects\\\\bookshelves\\\\src\\\\books\\\\components\\\\book\\\\book.tsx\",\n                                            lineNumber: 14,\n                                            columnNumber: 95\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Charly\\\\projects\\\\bookshelves\\\\src\\\\books\\\\components\\\\book\\\\book.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/book/\".concat(detail.id),\n                        className: \"btn btn-primary\",\n                        children: \" Voir plus \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Charly\\\\projects\\\\bookshelves\\\\src\\\\books\\\\components\\\\book\\\\book.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Charly\\\\projects\\\\bookshelves\\\\src\\\\books\\\\components\\\\book\\\\book.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Charly\\\\projects\\\\bookshelves\\\\src\\\\books\\\\components\\\\book\\\\book.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this) : null;\n}\n_s(Book, \"mymmS7SApzLOV7PHqMCAdWszEro=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useBook\n    ];\n});\n_c = Book;\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ib29rcy9jb21wb25lbnRzL2Jvb2svYm9vay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTZCO0FBQ1E7QUFFdEIsU0FBU0UsS0FBSyxLQUFvQjtRQUFwQixFQUFDQyxFQUFFLEVBQWlCLEdBQXBCOztJQUN6QixNQUFNQyxTQUFTSCwrQ0FBT0EsQ0FBQ0U7SUFDdkIsT0FBT0MsV0FBV0MsMEJBRWQsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBSUQsV0FBVTtnQkFBZUUsS0FBS0wsT0FBT00sS0FBSztnQkFBRUMsS0FBSTs7Ozs7OzBCQUNyRCw4REFBQ0w7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDSzt3QkFBR0wsV0FBVTtrQ0FBY0gsT0FBT1MsS0FBSzs7Ozs7O2tDQUN4Qyw4REFBQ0M7d0JBQUVQLFdBQVU7OzRCQUFZOzRCQUFLSCxPQUFPVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyx1QkFBVzs7d0NBQUU7d0NBQUVBLE9BQU9DLElBQUk7d0NBQUM7c0RBQUMsOERBQUNDOzs7Ozt3Q0FBSTs7Ozs7Ozs7O2tDQUNuRiw4REFBQ25CLGlEQUFJQTt3QkFBQ29CLE1BQU0sU0FBbUIsT0FBVmhCLE9BQU9ELEVBQUU7d0JBQUlJLFdBQVU7a0NBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OztlQUl4RTtBQUNOO0dBZHdCTDs7UUFDTEQsMkNBQU9BOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Jvb2tzL2NvbXBvbmVudHMvYm9vay9ib29rLnRzeD83ODk3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUJvb2sgfSBmcm9tIFwiLi4vLi4vaG9va3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9vayh7aWR9IDogeyBpZDogc3RyaW5nfSl7XHJcbiAgICBjb25zdCBkZXRhaWwgPSB1c2VCb29rKGlkKTtcclxuICAgIHJldHVybiBkZXRhaWwgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtkZXRhaWwuaW1hZ2V9IGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57ZGV0YWlsLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5QYXIge2RldGFpbC5hdXRob3JzLm1hcCgoYXV0aG9yKSA9PiA8PiB7YXV0aG9yLm5hbWV9IDxici8+IDwvPiApfTwvcD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYm9vay8ke2RldGFpbC5pZH1gfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj4gVm9pciBwbHVzIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICA6IG51bGxcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlQm9vayIsIkJvb2siLCJpZCIsImRldGFpbCIsInVuZGVmaW5lZCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiaDUiLCJ0aXRsZSIsInAiLCJhdXRob3JzIiwibWFwIiwiYXV0aG9yIiwibmFtZSIsImJyIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/books/components/book/book.tsx\n"));

/***/ })

});