"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/standings",{

/***/ "./app/components/SortableHeaderCell.tsx":
/*!***********************************************!*\
  !*** ./app/components/SortableHeaderCell.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// /app/components/SortableHeaderCell.tsx\n\n\nconst SortableHeaderCell = (param)=>{\n    let { columnName, label, sortColumn, sortOrder, handleSort } = param;\n    const handleClick = ()=>{\n        handleSort(columnName === sortColumn ? null : columnName);\n        console.log(\"columnName:\", columnName);\n        console.log(\"sortOrder: \", sortOrder);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n        className: \"py-7 px-6 text-left w-1/8\",\n        onClick: handleClick,\n        children: [\n            label,\n            \" \",\n            sortColumn === columnName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: sortOrder === \"asc\" ? \"▲\" : \"▼\"\n            }, void 0, false, {\n                fileName: \"/Users/mdefeo/Documents/Repositories/nhl.game.tracker/app/components/SortableHeaderCell.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mdefeo/Documents/Repositories/nhl.game.tracker/app/components/SortableHeaderCell.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SortableHeaderCell;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SortableHeaderCell);\nvar _c;\n$RefreshReg$(_c, \"SortableHeaderCell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9Tb3J0YWJsZUhlYWRlckNlbGwudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5Q0FBeUM7O0FBQ2Y7QUFHMUIsTUFBTUMscUJBQXdEO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUU7SUFDckgsTUFBTUMsY0FBYztRQUNsQkQsV0FBV0osZUFBZUUsYUFBYSxPQUFPRjtRQUM1Q00sUUFBUUMsR0FBRyxDQUFDLGVBQWVQO1FBQzNCTSxRQUFRQyxHQUFHLENBQUMsZUFBZUo7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0s7UUFBR0MsV0FBVTtRQUE0QkMsU0FBU0w7O1lBQ2hESjtZQUFNO1lBQUVDLGVBQWVGLDRCQUN0Qiw4REFBQ1c7MEJBQU1SLGNBQWMsUUFBUSxNQUFNOzs7Ozs7Ozs7Ozs7QUFJM0M7S0FkTUo7QUFnQk4sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Tb3J0YWJsZUhlYWRlckNlbGwudHN4P2UxODYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gL2FwcC9jb21wb25lbnRzL1NvcnRhYmxlSGVhZGVyQ2VsbC50c3hcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU29ydGFibGVIZWFkZXJDZWxsUHJvcHMgZnJvbSAnQC9pbnRlcmZhY2VzL1NvcnRhYmxlSGVhZGVyQ2VsbFByb3BzJztcblxuY29uc3QgU29ydGFibGVIZWFkZXJDZWxsOiBSZWFjdC5GQzxTb3J0YWJsZUhlYWRlckNlbGxQcm9wcz4gPSAoeyBjb2x1bW5OYW1lLCBsYWJlbCwgc29ydENvbHVtbiwgc29ydE9yZGVyLCBoYW5kbGVTb3J0IH0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaGFuZGxlU29ydChjb2x1bW5OYW1lID09PSBzb3J0Q29sdW1uID8gbnVsbCA6IGNvbHVtbk5hbWUpO1xuICAgICAgY29uc29sZS5sb2coJ2NvbHVtbk5hbWU6JywgY29sdW1uTmFtZSk7XG4gICAgICBjb25zb2xlLmxvZygnc29ydE9yZGVyOiAnLCBzb3J0T3JkZXIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHRoIGNsYXNzTmFtZT1cInB5LTcgcHgtNiB0ZXh0LWxlZnQgdy0xLzhcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICB7bGFiZWx9IHtzb3J0Q29sdW1uID09PSBjb2x1bW5OYW1lICYmIChcbiAgICAgICAgPHNwYW4+e3NvcnRPcmRlciA9PT0gJ2FzYycgPyAn4payJyA6ICfilrwnfTwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC90aD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRhYmxlSGVhZGVyQ2VsbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNvcnRhYmxlSGVhZGVyQ2VsbCIsImNvbHVtbk5hbWUiLCJsYWJlbCIsInNvcnRDb2x1bW4iLCJzb3J0T3JkZXIiLCJoYW5kbGVTb3J0IiwiaGFuZGxlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwidGgiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/SortableHeaderCell.tsx\n"));

/***/ })

});