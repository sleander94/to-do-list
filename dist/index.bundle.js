"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    box-sizing: border-box;\n    padding: 0px;\n    margin: 0px;\n}\n\nbody {\n    display: grid;\n    grid: 1fr 6fr / 250px 1fr;\n    height: 100vh;\n    max-width: 2000px;\n}\n\n.header {\n    grid-area: 1 / 1 / 2 / 3;\n    display: grid;\n    background-color: rgb(85, 85, 85);\n}\n\n.header h1 {\n    align-self: flex-end;\n    font-size: 3.8rem;\n    padding: 16px;\n    background-color: rgb(85, 85, 85);\n    color: white;\n}\n\n\n\n.sidebar {\n    grid-area: 2 / 1 / 3 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 16px;\n    gap: 24px;\n    width: 250px;\n    background-color: rgb(215, 212, 212);\n}\n\n.list-container {\n    display: flex;\n    gap: 12px;\n    overflow-wrap: break-word;\n}\n\n.sidebar .list-container .active {\n    background-color: rgba(75, 224, 30, 0.435);   \n    border-radius: 8px;\n    \n}\n\n.sidebar .list-container .active:hover {\n    text-decoration: none;\n}\n\n.sidebar .list-container button:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.sidebar .list-container button {\n    background-color: transparent;\n    width: 175px;\n    padding: 8px 20px 8px 20px;\n    font-size: 1.5rem;\n    font-weight: 500;\n    border: none;\n}\n\n.sidebar .list-container .remove-list-button {\n    align-self: center;\n    height: 22px;\n    width: 22px;\n    border-radius: 18px;\n    padding: 8px;\n    font-size: .8rem;\n    border: 1px solid black;\n}\n\n.remove-list-button span {\n    position: relative;\n    bottom: 5.4px;\n    right: 2px;\n}\n\n.sidebar .list-container .remove-list-button:hover {\n    background-color: rgba(249, 111, 89, 0.455);\n    color: white;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.confirmation-container {\n    z-index: 2;\n    position: absolute; \n    left: 0; \n    right: 0; \n    top: 50%;\n    margin-left: auto; \n    margin-right: auto; \n    width: 250px; \n    border: 2px solid black;\n    border-radius: 6px;\n    padding: 12px;\n    overflow-wrap: break-word;\n    background-color: rgb(215, 212, 212);\n}\n\n.confirmation-container p {\n    grid-area: 1 / 1 / 2 / 3;\n    text-align: center;\n    font-weight: 500;\n}\n\n.confirmation-container button {\n    padding: 8px;\n    align-self: center;\n}\n\n.sidebar .new-list {\n    background-color: rgba(76, 218, 33, 0.805);\n    width: 175px;\n    padding: 6px 35px 6px 35px;\n    border: 1px solid black;\n    border-radius: 8px;\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n\n.sidebar .new-list:hover, form .add:hover {\n    text-decoration: underline;\n    cursor: pointer;\n    background-color: rgba(75, 224, 30, 0.435);   \n}\n\n.sidebar form, .confirmation-container {\n    display: grid;\n    grid: 1fr 1fr / 1fr 1fr;\n    gap: 8px;\n}\n\n.sidebar input {\n    grid-area: 1 / 1 / 2 / 3;\n    height: 1.5rem;\n    font-weight: 500;\n    border-radius: 4px;\n    border: 1px solid black; \n    background-color: rgba(75, 224, 30, 0.253);  \n}\n\n.sidebar form button, .confirmation-container button {\n    font-weight: 500;\n    border: 1px solid black;\n    border-radius: 4px;\n}\n\nform .add {\n    grid-area: 2 / 2 / 3 / 3;\n    background-color: rgb(83, 221, 41);\n}\n\n.confirm:hover  {\n    text-decoration: underline;\n    cursor: pointer; \n    background-color: rgba(249, 111, 89, 0.455);\n}\n\n.cancel:hover {\n    text-decoration: underline;\n    cursor: pointer;   \n}\n\n\n/* Content and ToDos */\n#tasks-container {\n    display: grid;\n    grid: 1fr / 4fr 1fr 1fr 1fr 1fr;\n    row-gap: 12px;\n    text-align: center;\n}\n\n#tasks-container * {\n    font-weight: 400;\n}\n\n#tasks-container .name {\n    text-align: left;\n}\n\n#tasks-container .column-label {\n    background-color: rgb(176, 173, 173);\n    font-size: 1.2rem;\n    font-weight: 500;\n    min-width: 100px;\n    border-right: 1px solid black;\n}\n\n#tasks-container div {\n    min-width: 100px;\n    padding: 8px;\n}\n\n.priority {\n    text-align: center;\n}\n\n.low {\n    background-color: rgba(75, 224, 30, 0.435);   \n    border-radius: 8px;\n}\n\n.normal {\n    background-color: rgba(234, 241, 25, 0.435);   \n    border-radius: 8px;\n}\n\n.high {\n    background-color: rgba(249, 111, 89, 0.455);  \n    border-radius: 8px;\n}\n\n.complete {\n    text-decoration: line-through;\n    background-color: white;\n}\n\n#tasks-container .container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.checkbox {\n    transform: scale(1.5);\n}\n\n.remove {\n    padding: 4px;\n    height: 22px;\n    width: 22px;\n    border-radius: 18px;\n    padding: 8px;\n    font-size: .8rem;\n    border: 1px solid black;\n}\n\n.remove span {\n    position: relative;\n    bottom: 5.3px;\n    right: 2px;\n}\n\n.remove:hover {\n    background-color: rgba(249, 111, 89, 0.455);\n    color: white;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.todo-button {\n    position: absolute;\n    bottom: 40px;\n    right: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 4rem;\n    height: 4rem;\n    padding-bottom: 4px;\n    border-radius: 50%;\n    font-size: 3rem;\n    text-align: center;\n    text-decoration: none;\n    color: rgb(56, 182, 18);\n    border: 1px solid rgb(124, 123, 123);\n    box-shadow: 0px 0px 8px rgb(0, 0, 0);\n}\n\n.todo-button:hover {\n    color: rgba(75, 224, 30);\n    box-shadow: 0px 0px 20px black;\n}\n\n\n#todo-form {\n    z-index: 1;\n    position: absolute; \n    left: 0; \n    right: 0; \n    top: 30%;\n    margin-left: auto; \n    margin-right: auto; \n    width: 280px; \n    height: 320px;\n    border: 2px solid black;\n    border-radius: 6px;\n    overflow-wrap: break-word;\n    background-color: rgb(215, 212, 212);\n    display: grid;\n    grid: 1fr 1fr 1fr 1fr 1fr / 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n    text-align: center;\n}\n\n#todo-form h2 {\n    grid-area: 1 / 1 / 2 / 3;\n}\n\n#todo-form input[type = 'text'] {\n    grid-area: 2 / 1 / 3 / 4;\n    height: 1.5rem;\n    font-weight: 500;\n    border-radius: 4px;\n    border: 1px solid black; \n    background-color: rgb(255, 255, 255);  \n}\n\n#todo-form input[type = 'date'] {\n    grid-area: 4 / 1 / 5 / 3;\n    height: 2rem;\n    border-radius: 6px;\n    border: 1px solid black;\n    padding: 6px;\n    width: 219px;\n}\n\n.priority-container {\n    grid-area: 3 / 1 / 4 / 3;\n    display: grid;\n    grid: 1fr 1fr 1fr/ 1fr 1fr 1fr;\n    column-gap: 12px;\n    row-gap: 6px;\n    justify-items: center;\n    align-items: center;\n    text-align: center;\n    font-weight: 500;\n}\n\n.priority-container p {\n    grid-area: 1 / 1 / 2 / 4;\n    font-weight: 600;\n}\n\n.priority-container label {\n    grid-row: 3 / 4;\n}\n\n\n#todo-form button {\n    padding: 8px 24px 8px 24px;\n    border-radius: 8px;\n    border: 1px solid black;\n    width: 100px;\n    font-weight: 500;\n}\n\n#todo-form .add {\n    grid-area: 5 / 2 / 6 / 3;\n}\n\n#todo-form .cancel {\n    grid-area: 5 / 1 / 6 / 2;\n}\n\n#todo-form .add:hover {\n    background-color: rgba(75, 224, 30, 0.435);  \n    cursor: pointer;\n    text-decoration: underline;\n}\n\n#todo-form .cancel:hover {\n    background-color: rgba(249, 111, 89, 0.455);\n    cursor: pointer;\n    text-decoration: underline;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    box-sizing: border-box;\n    padding: 0px;\n    margin: 0px;\n}\n\nbody {\n    display: grid;\n    grid: 1fr 6fr / 250px 1fr;\n    height: 100vh;\n    max-width: 2000px;\n}\n\n.header {\n    grid-area: 1 / 1 / 2 / 3;\n    display: grid;\n    background-color: rgb(85, 85, 85);\n}\n\n.header h1 {\n    align-self: flex-end;\n    font-size: 3.8rem;\n    padding: 16px;\n    background-color: rgb(85, 85, 85);\n    color: white;\n}\n\n\n\n.sidebar {\n    grid-area: 2 / 1 / 3 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 16px;\n    gap: 24px;\n    width: 250px;\n    background-color: rgb(215, 212, 212);\n}\n\n.list-container {\n    display: flex;\n    gap: 12px;\n    overflow-wrap: break-word;\n}\n\n.sidebar .list-container .active {\n    background-color: rgba(75, 224, 30, 0.435);   \n    border-radius: 8px;\n    \n}\n\n.sidebar .list-container .active:hover {\n    text-decoration: none;\n}\n\n.sidebar .list-container button:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.sidebar .list-container button {\n    background-color: transparent;\n    width: 175px;\n    padding: 8px 20px 8px 20px;\n    font-size: 1.5rem;\n    font-weight: 500;\n    border: none;\n}\n\n.sidebar .list-container .remove-list-button {\n    align-self: center;\n    height: 22px;\n    width: 22px;\n    border-radius: 18px;\n    padding: 8px;\n    font-size: .8rem;\n    border: 1px solid black;\n}\n\n.remove-list-button span {\n    position: relative;\n    bottom: 5.4px;\n    right: 2px;\n}\n\n.sidebar .list-container .remove-list-button:hover {\n    background-color: rgba(249, 111, 89, 0.455);\n    color: white;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.confirmation-container {\n    z-index: 2;\n    position: absolute; \n    left: 0; \n    right: 0; \n    top: 50%;\n    margin-left: auto; \n    margin-right: auto; \n    width: 250px; \n    border: 2px solid black;\n    border-radius: 6px;\n    padding: 12px;\n    overflow-wrap: break-word;\n    background-color: rgb(215, 212, 212);\n}\n\n.confirmation-container p {\n    grid-area: 1 / 1 / 2 / 3;\n    text-align: center;\n    font-weight: 500;\n}\n\n.confirmation-container button {\n    padding: 8px;\n    align-self: center;\n}\n\n.sidebar .new-list {\n    background-color: rgba(76, 218, 33, 0.805);\n    width: 175px;\n    padding: 6px 35px 6px 35px;\n    border: 1px solid black;\n    border-radius: 8px;\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n\n.sidebar .new-list:hover, form .add:hover {\n    text-decoration: underline;\n    cursor: pointer;\n    background-color: rgba(75, 224, 30, 0.435);   \n}\n\n.sidebar form, .confirmation-container {\n    display: grid;\n    grid: 1fr 1fr / 1fr 1fr;\n    gap: 8px;\n}\n\n.sidebar input {\n    grid-area: 1 / 1 / 2 / 3;\n    height: 1.5rem;\n    font-weight: 500;\n    border-radius: 4px;\n    border: 1px solid black; \n    background-color: rgba(75, 224, 30, 0.253);  \n}\n\n.sidebar form button, .confirmation-container button {\n    font-weight: 500;\n    border: 1px solid black;\n    border-radius: 4px;\n}\n\nform .add {\n    grid-area: 2 / 2 / 3 / 3;\n    background-color: rgb(83, 221, 41);\n}\n\n.confirm:hover  {\n    text-decoration: underline;\n    cursor: pointer; \n    background-color: rgba(249, 111, 89, 0.455);\n}\n\n.cancel:hover {\n    text-decoration: underline;\n    cursor: pointer;   \n}\n\n\n/* Content and ToDos */\n#tasks-container {\n    display: grid;\n    grid: 1fr / 4fr 1fr 1fr 1fr 1fr;\n    row-gap: 12px;\n    text-align: center;\n}\n\n#tasks-container * {\n    font-weight: 400;\n}\n\n#tasks-container .name {\n    text-align: left;\n}\n\n#tasks-container .column-label {\n    background-color: rgb(176, 173, 173);\n    font-size: 1.2rem;\n    font-weight: 500;\n    min-width: 100px;\n    border-right: 1px solid black;\n}\n\n#tasks-container div {\n    min-width: 100px;\n    padding: 8px;\n}\n\n.priority {\n    text-align: center;\n}\n\n.low {\n    background-color: rgba(75, 224, 30, 0.435);   \n    border-radius: 8px;\n}\n\n.normal {\n    background-color: rgba(234, 241, 25, 0.435);   \n    border-radius: 8px;\n}\n\n.high {\n    background-color: rgba(249, 111, 89, 0.455);  \n    border-radius: 8px;\n}\n\n.complete {\n    text-decoration: line-through;\n    background-color: white;\n}\n\n#tasks-container .container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.checkbox {\n    transform: scale(1.5);\n}\n\n.remove {\n    padding: 4px;\n    height: 22px;\n    width: 22px;\n    border-radius: 18px;\n    padding: 8px;\n    font-size: .8rem;\n    border: 1px solid black;\n}\n\n.remove span {\n    position: relative;\n    bottom: 5.3px;\n    right: 2px;\n}\n\n.remove:hover {\n    background-color: rgba(249, 111, 89, 0.455);\n    color: white;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.todo-button {\n    position: absolute;\n    bottom: 40px;\n    right: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 4rem;\n    height: 4rem;\n    padding-bottom: 4px;\n    border-radius: 50%;\n    font-size: 3rem;\n    text-align: center;\n    text-decoration: none;\n    color: rgb(56, 182, 18);\n    border: 1px solid rgb(124, 123, 123);\n    box-shadow: 0px 0px 8px rgb(0, 0, 0);\n}\n\n.todo-button:hover {\n    color: rgba(75, 224, 30);\n    box-shadow: 0px 0px 20px black;\n}\n\n\n#todo-form {\n    z-index: 1;\n    position: absolute; \n    left: 0; \n    right: 0; \n    top: 30%;\n    margin-left: auto; \n    margin-right: auto; \n    width: 280px; \n    height: 320px;\n    border: 2px solid black;\n    border-radius: 6px;\n    overflow-wrap: break-word;\n    background-color: rgb(215, 212, 212);\n    display: grid;\n    grid: 1fr 1fr 1fr 1fr 1fr / 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n    text-align: center;\n}\n\n#todo-form h2 {\n    grid-area: 1 / 1 / 2 / 3;\n}\n\n#todo-form input[type = 'text'] {\n    grid-area: 2 / 1 / 3 / 4;\n    height: 1.5rem;\n    font-weight: 500;\n    border-radius: 4px;\n    border: 1px solid black; \n    background-color: rgb(255, 255, 255);  \n}\n\n#todo-form input[type = 'date'] {\n    grid-area: 4 / 1 / 5 / 3;\n    height: 2rem;\n    border-radius: 6px;\n    border: 1px solid black;\n    padding: 6px;\n    width: 219px;\n}\n\n.priority-container {\n    grid-area: 3 / 1 / 4 / 3;\n    display: grid;\n    grid: 1fr 1fr 1fr/ 1fr 1fr 1fr;\n    column-gap: 12px;\n    row-gap: 6px;\n    justify-items: center;\n    align-items: center;\n    text-align: center;\n    font-weight: 500;\n}\n\n.priority-container p {\n    grid-area: 1 / 1 / 2 / 4;\n    font-weight: 600;\n}\n\n.priority-container label {\n    grid-row: 3 / 4;\n}\n\n\n#todo-form button {\n    padding: 8px 24px 8px 24px;\n    border-radius: 8px;\n    border: 1px solid black;\n    width: 100px;\n    font-weight: 500;\n}\n\n#todo-form .add {\n    grid-area: 5 / 2 / 6 / 3;\n}\n\n#todo-form .cancel {\n    grid-area: 5 / 1 / 6 / 2;\n}\n\n#todo-form .add:hover {\n    background-color: rgba(75, 224, 30, 0.435);  \n    cursor: pointer;\n    text-decoration: underline;\n}\n\n#todo-form .cancel:hover {\n    background-color: rgba(249, 111, 89, 0.455);\n    cursor: pointer;\n    text-decoration: underline;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "./src/list.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");





const page = (() => {
    
    // Header
    const header = document.createElement('div');
    header.classList.toggle('header')
    const title = document.createElement('h1');
    title.innerText = '✔ To-Do List';
    header.appendChild(title)
    document.body.appendChild(header);

    // Sidebar
    const sidebar = document.createElement('div');
    sidebar.classList.toggle('sidebar')
    document.body.appendChild(sidebar);

    // Content
    const content = document.createElement('div');
    content.classList.toggle('content')
    document.body.appendChild(content);

    // Empty array to store lists
    let listArray = [];

    // Sidebar button that generates new list input on click
    function makeNewListButton() {
        const newListButton = document.createElement('button');
        newListButton.classList.toggle('new-list');
        newListButton.type = 'button';
        newListButton.textContent = 'New List +'
        newListButton.addEventListener('click', () => {
            sidebar.removeChild(newListButton);
            newListInput();
        });
        sidebar.appendChild(newListButton);
    }

    // Input for new list / add & cancel buttons
    function newListInput() {
        const inputContainer = document.createElement('form');

        const listName = document.createElement('input');
        listName.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                document.getElementById('add').click();
            }
        });
        inputContainer.appendChild(listName);


        const addButton = document.createElement('button');
        addButton.type = 'button';
        addButton.classList.toggle('add');
        addButton.id = 'add';
        addButton.textContent = 'Add';
        addButton.addEventListener('click', () => {
            if (listName.value == '') {
                alert('Enter a name for the list');
            } else { 
                sidebar.removeChild(inputContainer);
                const activeList = document.querySelector('.active');
                activeList.classList.toggle('active');
                const newList = new _list_js__WEBPACK_IMPORTED_MODULE_1__.List(listName.value, []);
                localStorage.setItem(`${newList.name}`, JSON.stringify(newList));
                listArray.push(newList);
                newList.addToPage(sidebar, content);
                newList.display(content);
                makeNewListButton();
            }
        });
        inputContainer.appendChild(addButton);

        const cancelButton = document.createElement('button');
        cancelButton.type = 'button'
        cancelButton.classList.toggle('cancel');
        cancelButton.textContent = 'Cancel'
        cancelButton.addEventListener('click', () => {
            sidebar.removeChild(inputContainer);
            makeNewListButton();
        });
        inputContainer.appendChild(cancelButton);

        sidebar.appendChild(inputContainer);
        listName.focus();
    }

    // Add todo button
    function makeAddToDoButton() {
        const addToDoButton = document.createElement('button');
        addToDoButton.type = 'button';
        addToDoButton.classList.toggle('todo-button');
        addToDoButton.innerText = '+';
        addToDoButton.addEventListener('click', () => {
            newToDoInput();
        });
        document.body.appendChild(addToDoButton);
    }

    // Input for new todo / add & cancel buttons
    function newToDoInput() {
        if (document.getElementById('todo-form')) {
            return;
        }
        const toDoContainer = document.createElement('div');
        toDoContainer.id = 'todo-form';

        const title = document.createElement('h2');
        title.textContent = 'New Task';
        toDoContainer.appendChild(title);

        const toDoName = document.createElement('input');
        toDoName.type = 'text';
        toDoName.placeholder = 'Task name';
        toDoContainer.appendChild(toDoName);

        const priorityContainer = document.createElement('div');
        priorityContainer.classList.toggle('priority-container');
        const priorityTitle = document.createElement('p');
        priorityTitle.innerText = 'Priority';
        priorityContainer.appendChild(priorityTitle);

        const lowPriority = document.createElement('input');
        lowPriority.type = 'radio';
        lowPriority.name = 'priority';
        lowPriority.value = 'Low';
        lowPriority.id = 'priorityChoice1';
        const lowLabel = document.createElement('label');
        lowLabel.for = 'priorityChoice1';
        lowLabel.textContent = 'Low';
        priorityContainer.appendChild(lowPriority);
        priorityContainer.appendChild(lowLabel);

        const normalPriority = document.createElement('input');
        normalPriority.type = 'radio';
        normalPriority.name = 'priority';
        normalPriority.value = 'Normal';
        normalPriority.id = 'priorityChoice2';
        normalPriority.checked = true;
        const normalLabel = document.createElement('label');
        normalLabel.for = 'priorityChoice2';
        normalLabel.textContent = 'Normal';
        priorityContainer.appendChild(normalPriority);
        priorityContainer.appendChild(normalLabel);

        const highPriority = document.createElement('input');
        highPriority.type = 'radio';
        highPriority.name = 'priority';
        highPriority.value = 'High';
        highPriority.id = 'priorityChoice3';
        const highLabel = document.createElement('label');
        highLabel.for = 'priorityChoice3';
        highLabel.textContent = 'High';
        priorityContainer.appendChild(highPriority);
        priorityContainer.appendChild(highLabel);

        toDoContainer.appendChild(priorityContainer);

        const toDoDate = document.createElement('input');
        toDoDate.type = 'date';
        toDoContainer.appendChild(toDoDate);

        const addButton = document.createElement('button');
        addButton.type = 'button';
        addButton.classList.toggle('add');
        addButton.textContent = 'Add';
        addButton.addEventListener('click', () => {
            if (toDoName.value == '') {
                alert('Enter a name for the task');
            } else { 
                const toDoPriority = document.querySelector('input[name="priority"]:checked');
                document.body.removeChild(toDoContainer);
                const activeButton = document.querySelector('.active');
                listArray.forEach(list => {
                    if (activeButton.textContent == list.name) {
                        const newToDo = new _todo_js__WEBPACK_IMPORTED_MODULE_2__.ToDo(toDoName.value, toDoDate.value, toDoPriority.value);
                        list.addToDo(newToDo);
                        list.display(content);
                    }
                });
            }
        });
        toDoContainer.appendChild(addButton);

        const cancelButton = document.createElement('button');
        cancelButton.type = 'button'
        cancelButton.classList.toggle('cancel');
        cancelButton.textContent = 'Cancel'
        cancelButton.addEventListener('click', () => {
            document.body.removeChild(toDoContainer);
        });
        toDoContainer.appendChild(cancelButton);

        document.body.appendChild(toDoContainer);
        toDoName.focus();
    }

    // Create default list and store in local storage if local storage is empty
    if (localStorage.length < 1) {
        const tasks = new _list_js__WEBPACK_IMPORTED_MODULE_1__.List('Tasks', []);
        localStorage.setItem(`${tasks.name}`, JSON.stringify(tasks));
    }
 
    // Loop through lists in local storage and populate listArray on page load
    function getListsFromStorage() {
        for (let i=localStorage.length - 1; i >= 0; i-- ) {
            const listName = localStorage.key(i);
            const listData = JSON.parse(localStorage.getItem(listName));
            const list = new _list_js__WEBPACK_IMPORTED_MODULE_1__.List(listData.name, listData.tasks); 
            listArray.push(list);
            list.addToPage(sidebar, content);
            if (i == 0){
                list.display(content);
            }
        } 
    }
    
    getListsFromStorage()
    makeNewListButton()
    makeAddToDoButton()
})();







/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
class List {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }

    addToPage(buttonArea, taskArea) {
        const listContainer = document.createElement('div');
        listContainer.classList.toggle('list-container');
        const listButton = document.createElement('button');
        listButton.type = 'button';
        if (!document.querySelector('.active')) {
            listButton.classList.toggle('active');
        }
        listButton.textContent = this.name;
        listButton.addEventListener('click', () => {
            if (listButton.classList.contains('active')) {
                return;
            } else {
                const currentActiveButton = document.querySelector('.active');
                currentActiveButton.classList.toggle('active');
                listButton.classList.toggle('active');
                this.display(taskArea);
            }
        });
        listContainer.appendChild(listButton);
        if (this.name !== 'Tasks') {
            const removeListButton = document.createElement('button');
            removeListButton.type = 'button';
            removeListButton.classList.toggle('remove-list-button');
            const removeSpan = document.createElement('span');
            removeSpan.textContent = 'X';
            removeListButton.appendChild(removeSpan);
            removeListButton.addEventListener('click', () => {
                if (!document.querySelector('.confirmation-container')) {
                const confirmationContainer = document.createElement('div');
                confirmationContainer.classList.toggle('confirmation-container')
                const confirmationLabel = document.createElement('p');
                confirmationLabel.innerText = `Delete ${this.name}?`;
                confirmationContainer.appendChild(confirmationLabel);
                const cancelButton = document.createElement('button');
                cancelButton.type = 'button';
                cancelButton.classList.toggle('cancel');
                cancelButton.textContent = 'Cancel';
                cancelButton.addEventListener('click', () => {
                    confirmationContainer.innerHTML = '';
                    document.body.removeChild(confirmationContainer);
                });
                confirmationContainer.appendChild(cancelButton);
                const confirmButton = document.createElement('button');
                confirmButton.type = 'button';
                confirmButton.classList.toggle('confirm');
                confirmButton.textContent = 'Confirm';
                confirmButton.addEventListener('click', () => {
                    if (listButton.classList.contains('active')) {
                        const newActive = document.querySelector('.list-container');
                        newActive.classList.toggle('active');
                    } 
                    buttonArea.removeChild(listContainer);
                    localStorage.removeItem(`${this.name}`);
                    confirmationContainer.innerHTML = '';
                    document.body.removeChild(confirmationContainer);
                });
                confirmationContainer.appendChild(confirmButton);
              document.body.appendChild(confirmationContainer);
            }
            
        });
        listContainer.appendChild(removeListButton);
        }
        buttonArea.appendChild(listContainer);
    }

    addToDo(toDo) {
        this.tasks.push(toDo);
        localStorage.setItem(`${this.name}`, JSON.stringify(this));
    }

    removeToDo(toDo) {
        this.tasks.splice(this.tasks.indexOf(toDo), 1);
        localStorage.setItem(`${this.name}`, JSON.stringify(this));
    }

    display(location) {
        location.innerHTML = '';
        const tasksContainer = document.createElement('div');
        tasksContainer.id = 'tasks-container';

        const nameLabel = document.createElement('div');
        nameLabel.textContent = 'To-Do';
        nameLabel.classList.toggle('column-label');
        nameLabel.classList.toggle('name');
        tasksContainer.appendChild(nameLabel);
        const priorityLabel = document.createElement('div');
        priorityLabel.textContent = 'Priority';
        priorityLabel.classList.toggle('column-label');
        tasksContainer.appendChild(priorityLabel);
        const dateLabel = document.createElement('div');
        dateLabel.textContent = 'Date';
        dateLabel.classList.toggle('column-label');
        tasksContainer.appendChild(dateLabel);
        const completeLabel = document.createElement('div');
        completeLabel.textContent = 'Complete';
        completeLabel.classList.toggle('column-label');
        tasksContainer.appendChild(completeLabel);
        const removeLabel = document.createElement('div');
        removeLabel.textContent = 'Remove';
        removeLabel.classList.toggle('column-label');
        tasksContainer.appendChild(removeLabel);

        this.tasks.forEach(task => {
            const name = document.createElement('div');
            name.classList.toggle('name');
            name.textContent = task.name;
            tasksContainer.appendChild(name);  

            const priority = document.createElement('div');
            priority.classList.toggle('priority');
            priority.textContent = task.priority
            tasksContainer.appendChild(priority);

            if (task.priority == 'Low') {
                priority.classList.toggle('low');
            } else if (task.priority == 'Normal') {
                priority.classList.toggle('normal');
            } else if (task.priority == 'High') {
                priority.classList.toggle('high');
            }

            const date = document.createElement('div');
            date.classList.toggle('date');
            date.textContent = task.date
            tasksContainer.appendChild(date);  

            const completeCheckBoxContainer = document.createElement('div');
            completeCheckBoxContainer.classList.toggle('container');
            const completeCheckBox = document.createElement('input');
            completeCheckBox.classList.toggle('checkbox');
            completeCheckBox.type = 'checkbox';
            completeCheckBox.addEventListener('change', () => {
                name.classList.toggle('complete');
                date.classList.toggle('complete');
                priority.classList.toggle('complete');
            });
            completeCheckBoxContainer.appendChild(completeCheckBox);
            tasksContainer.appendChild(completeCheckBoxContainer);

            const removeButtonContainer = document.createElement('div');
            removeButtonContainer.classList.toggle('container');
            const removeButton = document.createElement('button');
            removeButton.classList.toggle('remove');
            removeButton.type = 'button';
            const removeButtonSpan = document.createElement('span');
            removeButtonSpan.innerHTML = 'X';
            removeButton.appendChild(removeButtonSpan);
            removeButton.addEventListener('click', () => {
                this.removeToDo(task);
                tasksContainer.removeChild(name);
                tasksContainer.removeChild(date);
                tasksContainer.removeChild(priority);
                tasksContainer.removeChild(completeCheckBoxContainer);
                tasksContainer.removeChild(removeButtonContainer);
            });
            removeButtonContainer.appendChild(removeButton);
            tasksContainer.appendChild(removeButtonContainer);
        });
        location.appendChild(tasksContainer);
    }

}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo {
    constructor(name, date, priority) {
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.complete = false;
    }

    changePriority(value) {
        this.priority = value;
    } 
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFX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O0FBQ0EsZ0NBQWdDLFVBQVU7QUFDMUM7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxVQUFVO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDektPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMWZyIDZmciAvIDI1MHB4IDFmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWF4LXdpZHRoOiAyMDAwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG59XFxuXFxuLmhlYWRlciBoMSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBmb250LXNpemU6IDMuOHJlbTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg1LCA4NSwgODUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDIxMiwgMjEyKTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uc2lkZWJhciAubGlzdC1jb250YWluZXIgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDIyNCwgMzAsIDAuNDM1KTsgICBcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBcXG59XFxuXFxuLnNpZGViYXIgLmxpc3QtY29udGFpbmVyIC5hY3RpdmU6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyIC5saXN0LWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciAubGlzdC1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiAxNzVweDtcXG4gICAgcGFkZGluZzogOHB4IDIwcHggOHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyIC5saXN0LWNvbnRhaW5lciAucmVtb3ZlLWxpc3QtYnV0dG9uIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucmVtb3ZlLWxpc3QtYnV0dG9uIHNwYW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogNS40cHg7XFxuICAgIHJpZ2h0OiAycHg7XFxufVxcblxcbi5zaWRlYmFyIC5saXN0LWNvbnRhaW5lciAucmVtb3ZlLWxpc3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDksIDExMSwgODksIDAuNDU1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNvbmZpcm1hdGlvbi1jb250YWluZXIge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICBsZWZ0OiAwOyBcXG4gICAgcmlnaHQ6IDA7IFxcbiAgICB0b3A6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IFxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxcbiAgICB3aWR0aDogMjUwcHg7IFxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTIsIDIxMik7XFxufVxcblxcbi5jb25maXJtYXRpb24tY29udGFpbmVyIHAge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmNvbmZpcm1hdGlvbi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIC5uZXctbGlzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDIxOCwgMzMsIDAuODA1KTtcXG4gICAgd2lkdGg6IDE3NXB4O1xcbiAgICBwYWRkaW5nOiA2cHggMzVweCA2cHggMzVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zaWRlYmFyIC5uZXctbGlzdDpob3ZlciwgZm9ybSAuYWRkOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgMjI0LCAzMCwgMC40MzUpOyAgIFxcbn1cXG5cXG4uc2lkZWJhciBmb3JtLCAuY29uZmlybWF0aW9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IDFmciAxZnIgLyAxZnIgMWZyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnNpZGViYXIgaW5wdXQge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgMjI0LCAzMCwgMC4yNTMpOyAgXFxufVxcblxcbi5zaWRlYmFyIGZvcm0gYnV0dG9uLCAuY29uZmlybWF0aW9uLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5mb3JtIC5hZGQge1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgMjIxLCA0MSk7XFxufVxcblxcbi5jb25maXJtOmhvdmVyICB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgMTExLCA4OSwgMC40NTUpO1xcbn1cXG5cXG4uY2FuY2VsOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgICBcXG59XFxuXFxuXFxuLyogQ29udGVudCBhbmQgVG9Eb3MgKi9cXG4jdGFza3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMWZyIC8gNGZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgcm93LWdhcDogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdGFza3MtY29udGFpbmVyICoge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4jdGFza3MtY29udGFpbmVyIC5uYW1lIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI3Rhc2tzLWNvbnRhaW5lciAuY29sdW1uLWxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMTczLCAxNzMpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiN0YXNrcy1jb250YWluZXIgZGl2IHtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCAyMjQsIDMwLCAwLjQzNSk7ICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLm5vcm1hbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LCAyNDEsIDI1LCAwLjQzNSk7ICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgMTExLCA4OSwgMC40NTUpOyAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmNvbXBsZXRlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdGFza3MtY29udGFpbmVyIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4ucmVtb3ZlIHtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucmVtb3ZlIHNwYW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogNS4zcHg7XFxuICAgIHJpZ2h0OiAycHg7XFxufVxcblxcbi5yZW1vdmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgMTExLCA4OSwgMC40NTUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udG9kby1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNDBweDtcXG4gICAgcmlnaHQ6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoNTYsIDE4MiwgMTgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI0LCAxMjMsIDEyMyk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLnRvZG8tYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYmEoNzUsIDIyNCwgMzApO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggYmxhY2s7XFxufVxcblxcblxcbiN0b2RvLWZvcm0ge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICBsZWZ0OiAwOyBcXG4gICAgcmlnaHQ6IDA7IFxcbiAgICB0b3A6IDMwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IFxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxcbiAgICB3aWR0aDogMjgwcHg7IFxcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTIsIDIxMik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IDFmciAxZnIgMWZyIDFmciAxZnIgLyAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RvZG8tZm9ybSBoMiB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG59XFxuXFxuI3RvZG8tZm9ybSBpbnB1dFt0eXBlID0gJ3RleHQnXSB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gNDtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7ICBcXG59XFxuXFxuI3RvZG8tZm9ybSBpbnB1dFt0eXBlID0gJ2RhdGUnXSB7XFxuICAgIGdyaWQtYXJlYTogNCAvIDEgLyA1IC8gMztcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIHdpZHRoOiAyMTlweDtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMWZyIDFmciAxZnIvIDFmciAxZnIgMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiAxMnB4O1xcbiAgICByb3ctZ2FwOiA2cHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIHAge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgbGFiZWwge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcblxcbiN0b2RvLWZvcm0gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogOHB4IDI0cHggOHB4IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI3RvZG8tZm9ybSAuYWRkIHtcXG4gICAgZ3JpZC1hcmVhOiA1IC8gMiAvIDYgLyAzO1xcbn1cXG5cXG4jdG9kby1mb3JtIC5jYW5jZWwge1xcbiAgICBncmlkLWFyZWE6IDUgLyAxIC8gNiAvIDI7XFxufVxcblxcbiN0b2RvLWZvcm0gLmFkZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDIyNCwgMzAsIDAuNDM1KTsgIFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jdG9kby1mb3JtIC5jYW5jZWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgMTExLCA4OSwgMC40NTUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUtBQXFLO0lBQ3JLLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztB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Z0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxZnIgNmZyIC8gMjUwcHggMWZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IDIwMDBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg1LCA4NSwgODUpO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGZvbnQtc2l6ZTogMy44cmVtO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjEyLCAyMTIpO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEycHg7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5zaWRlYmFyIC5saXN0LWNvbnRhaW5lciAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgMjI0LCAzMCwgMC40MzUpOyAgIFxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhciAubGlzdC1jb250YWluZXIgLmFjdGl2ZTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXIgLmxpc3QtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIC5saXN0LWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDE3NXB4O1xcbiAgICBwYWRkaW5nOiA4cHggMjBweCA4cHggMjBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXIgLmxpc3QtY29udGFpbmVyIC5yZW1vdmUtbGlzdC1idXR0b24ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5yZW1vdmUtbGlzdC1idXR0b24gc3BhbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiA1LjRweDtcXG4gICAgcmlnaHQ6IDJweDtcXG59XFxuXFxuLnNpZGViYXIgLmxpc3QtY29udGFpbmVyIC5yZW1vdmUtbGlzdC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgMTExLCA4OSwgMC40NTUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY29uZmlybWF0aW9uLWNvbnRhaW5lciB7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIGxlZnQ6IDA7IFxcbiAgICByaWdodDogMDsgXFxuICAgIHRvcDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXFxuICAgIHdpZHRoOiAyNTBweDsgXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDIxMiwgMjEyKTtcXG59XFxuXFxuLmNvbmZpcm1hdGlvbi1jb250YWluZXIgcCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uY29uZmlybWF0aW9uLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXIgLm5ldy1saXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMjE4LCAzMywgMC44MDUpO1xcbiAgICB3aWR0aDogMTc1cHg7XFxuICAgIHBhZGRpbmc6IDZweCAzNXB4IDZweCAzNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNpZGViYXIgLm5ldy1saXN0OmhvdmVyLCBmb3JtIC5hZGQ6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCAyMjQsIDMwLCAwLjQzNSk7ICAgXFxufVxcblxcbi5zaWRlYmFyIGZvcm0sIC5jb25maXJtYXRpb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMWZyIDFmciAvIDFmciAxZnI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uc2lkZWJhciBpbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCAyMjQsIDMwLCAwLjI1Myk7ICBcXG59XFxuXFxuLnNpZGViYXIgZm9ybSBidXR0b24sIC5jb25maXJtYXRpb24tY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbmZvcm0gLmFkZCB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgzLCAyMjEsIDQxKTtcXG59XFxuXFxuLmNvbmZpcm06aG92ZXIgIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LCAxMTEsIDg5LCAwLjQ1NSk7XFxufVxcblxcbi5jYW5jZWw6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgIFxcbn1cXG5cXG5cXG4vKiBDb250ZW50IGFuZCBUb0RvcyAqL1xcbiN0YXNrcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxZnIgLyA0ZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICByb3ctZ2FwOiAxMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0YXNrcy1jb250YWluZXIgKiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbiN0YXNrcy1jb250YWluZXIgLm5hbWUge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jdGFza3MtY29udGFpbmVyIC5jb2x1bW4tbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAxNzMsIDE3Myk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3Rhc2tzLWNvbnRhaW5lciBkaXYge1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDIyNCwgMzAsIDAuNDM1KTsgICBcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ubm9ybWFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDI0MSwgMjUsIDAuNDM1KTsgICBcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LCAxMTEsIDg5LCAwLjQ1NSk7ICBcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiN0YXNrcy1jb250YWluZXIgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5yZW1vdmUge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5yZW1vdmUgc3BhbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiA1LjNweDtcXG4gICAgcmlnaHQ6IDJweDtcXG59XFxuXFxuLnJlbW92ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LCAxMTEsIDg5LCAwLjQ1NSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi50b2RvLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA0MHB4O1xcbiAgICByaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHJnYig1NiwgMTgyLCAxOCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjQsIDEyMywgMTIzKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4udG9kby1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogcmdiYSg3NSwgMjI0LCAzMCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCBibGFjaztcXG59XFxuXFxuXFxuI3RvZG8tZm9ybSB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIGxlZnQ6IDA7IFxcbiAgICByaWdodDogMDsgXFxuICAgIHRvcDogMzAlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXFxuICAgIHdpZHRoOiAyODBweDsgXFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDIxMiwgMjEyKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMWZyIDFmciAxZnIgMWZyIDFmciAvIDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1mb3JtIGgyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbn1cXG5cXG4jdG9kby1mb3JtIGlucHV0W3R5cGUgPSAndGV4dCddIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyA0O1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgIFxcbn1cXG5cXG4jdG9kby1mb3JtIGlucHV0W3R5cGUgPSAnZGF0ZSddIHtcXG4gICAgZ3JpZC1hcmVhOiA0IC8gMSAvIDUgLyAzO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgd2lkdGg6IDIxOXB4O1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxZnIgMWZyIDFmci8gMWZyIDFmciAxZnI7XFxuICAgIGNvbHVtbi1nYXA6IDEycHg7XFxuICAgIHJvdy1nYXA6IDZweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgcCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciBsYWJlbCB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuXFxuI3RvZG8tZm9ybSBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA4cHggMjRweCA4cHggMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jdG9kby1mb3JtIC5hZGQge1xcbiAgICBncmlkLWFyZWE6IDUgLyAyIC8gNiAvIDM7XFxufVxcblxcbiN0b2RvLWZvcm0gLmNhbmNlbCB7XFxuICAgIGdyaWQtYXJlYTogNSAvIDEgLyA2IC8gMjtcXG59XFxuXFxuI3RvZG8tZm9ybSAuYWRkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgMjI0LCAzMCwgMC40MzUpOyAgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiN0b2RvLWZvcm0gLmNhbmNlbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LCAxMTEsIDg5LCAwLjQ1NSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge0xpc3R9IGZyb20gJy4vbGlzdC5qcyc7XG5pbXBvcnQge1RvRG99IGZyb20gJy4vdG9kby5qcydcblxuXG5jb25zdCBwYWdlID0gKCgpID0+IHtcbiAgICBcbiAgICAvLyBIZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ+KclCBUby1EbyBMaXN0JztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgLy8gU2lkZWJhclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ3NpZGViYXInKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICAvLyBDb250ZW50XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGVudCcpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIC8vIEVtcHR5IGFycmF5IHRvIHN0b3JlIGxpc3RzXG4gICAgbGV0IGxpc3RBcnJheSA9IFtdO1xuXG4gICAgLy8gU2lkZWJhciBidXR0b24gdGhhdCBnZW5lcmF0ZXMgbmV3IGxpc3QgaW5wdXQgb24gY2xpY2tcbiAgICBmdW5jdGlvbiBtYWtlTmV3TGlzdEJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuZXdMaXN0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ25ldy1saXN0Jyk7XG4gICAgICAgIG5ld0xpc3RCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBuZXdMaXN0QnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBMaXN0ICsnXG4gICAgICAgIG5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKG5ld0xpc3RCdXR0b24pO1xuICAgICAgICAgICAgbmV3TGlzdElucHV0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5ld0xpc3RCdXR0b24pO1xuICAgIH1cblxuICAgIC8vIElucHV0IGZvciBuZXcgbGlzdCAvIGFkZCAmIGNhbmNlbCBidXR0b25zXG4gICAgZnVuY3Rpb24gbmV3TGlzdElucHV0KCkge1xuICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGxpc3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQnKS5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdE5hbWUpO1xuXG5cbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhZGQnKTtcbiAgICAgICAgYWRkQnV0dG9uLmlkID0gJ2FkZCc7XG4gICAgICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobGlzdE5hbWUudmFsdWUgPT0gJycpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnRW50ZXIgYSBuYW1lIGZvciB0aGUgbGlzdCcpO1xuICAgICAgICAgICAgfSBlbHNlIHsgXG4gICAgICAgICAgICAgICAgc2lkZWJhci5yZW1vdmVDaGlsZChpbnB1dENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBhY3RpdmVMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdChsaXN0TmFtZS52YWx1ZSwgW10pO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke25ld0xpc3QubmFtZX1gLCBKU09OLnN0cmluZ2lmeShuZXdMaXN0KSk7XG4gICAgICAgICAgICAgICAgbGlzdEFycmF5LnB1c2gobmV3TGlzdCk7XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5hZGRUb1BhZ2Uoc2lkZWJhciwgY29udGVudCk7XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5kaXNwbGF5KGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIG1ha2VOZXdMaXN0QnV0dG9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdjYW5jZWwnKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc2lkZWJhci5yZW1vdmVDaGlsZChpbnB1dENvbnRhaW5lcik7XG4gICAgICAgICAgICBtYWtlTmV3TGlzdEJ1dHRvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcbiAgICAgICAgbGlzdE5hbWUuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgdG9kbyBidXR0b25cbiAgICBmdW5jdGlvbiBtYWtlQWRkVG9Eb0J1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYWRkVG9Eb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUb0RvQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYWRkVG9Eb0J1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvLWJ1dHRvbicpO1xuICAgICAgICBhZGRUb0RvQnV0dG9uLmlubmVyVGV4dCA9ICcrJztcbiAgICAgICAgYWRkVG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG5ld1RvRG9JbnB1dCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRUb0RvQnV0dG9uKTtcbiAgICB9XG5cbiAgICAvLyBJbnB1dCBmb3IgbmV3IHRvZG8gLyBhZGQgJiBjYW5jZWwgYnV0dG9uc1xuICAgIGZ1bmN0aW9uIG5ld1RvRG9JbnB1dCgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5pZCA9ICd0b2RvLWZvcm0nO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuICAgICAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCB0b0RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRvRG9OYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRvRG9OYW1lLnBsYWNlaG9sZGVyID0gJ1Rhc2sgbmFtZSc7XG4gICAgICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb05hbWUpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3ByaW9yaXR5LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcmlvcml0eVRpdGxlLmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG4gICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5VGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbG93UHJpb3JpdHkudHlwZSA9ICdyYWRpbyc7XG4gICAgICAgIGxvd1ByaW9yaXR5Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgICAgICBsb3dQcmlvcml0eS52YWx1ZSA9ICdMb3cnO1xuICAgICAgICBsb3dQcmlvcml0eS5pZCA9ICdwcmlvcml0eUNob2ljZTEnO1xuICAgICAgICBjb25zdCBsb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxvd0xhYmVsLmZvciA9ICdwcmlvcml0eUNob2ljZTEnO1xuICAgICAgICBsb3dMYWJlbC50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvd0xhYmVsKTtcblxuICAgICAgICBjb25zdCBub3JtYWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5vcm1hbFByaW9yaXR5LnR5cGUgPSAncmFkaW8nO1xuICAgICAgICBub3JtYWxQcmlvcml0eS5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICAgICAgbm9ybWFsUHJpb3JpdHkudmFsdWUgPSAnTm9ybWFsJztcbiAgICAgICAgbm9ybWFsUHJpb3JpdHkuaWQgPSAncHJpb3JpdHlDaG9pY2UyJztcbiAgICAgICAgbm9ybWFsUHJpb3JpdHkuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IG5vcm1hbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbm9ybWFsTGFiZWwuZm9yID0gJ3ByaW9yaXR5Q2hvaWNlMic7XG4gICAgICAgIG5vcm1hbExhYmVsLnRleHRDb250ZW50ID0gJ05vcm1hbCc7XG4gICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vcm1hbFByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQobm9ybWFsTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGhpZ2hQcmlvcml0eS50eXBlID0gJ3JhZGlvJztcbiAgICAgICAgaGlnaFByaW9yaXR5Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgICAgICBoaWdoUHJpb3JpdHkudmFsdWUgPSAnSGlnaCc7XG4gICAgICAgIGhpZ2hQcmlvcml0eS5pZCA9ICdwcmlvcml0eUNob2ljZTMnO1xuICAgICAgICBjb25zdCBoaWdoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBoaWdoTGFiZWwuZm9yID0gJ3ByaW9yaXR5Q2hvaWNlMyc7XG4gICAgICAgIGhpZ2hMYWJlbC50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoaGlnaExhYmVsKTtcblxuICAgICAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRvRG9EYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0RhdGUpO1xuXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWRkJyk7XG4gICAgICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9Eb05hbWUudmFsdWUgPT0gJycpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnRW50ZXIgYSBuYW1lIGZvciB0aGUgdGFzaycpO1xuICAgICAgICAgICAgfSBlbHNlIHsgXG4gICAgICAgICAgICAgICAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRvRG9Db250YWluZXIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBsaXN0QXJyYXkuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUJ1dHRvbi50ZXh0Q29udGVudCA9PSBsaXN0Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RvRG8gPSBuZXcgVG9Ebyh0b0RvTmFtZS52YWx1ZSwgdG9Eb0RhdGUudmFsdWUsIHRvRG9Qcmlvcml0eS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFkZFRvRG8obmV3VG9Ebyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmRpc3BsYXkoY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJ1xuICAgICAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnY2FuY2VsJyk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG9Eb0NvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgICAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b0RvQ29udGFpbmVyKTtcbiAgICAgICAgdG9Eb05hbWUuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgZGVmYXVsdCBsaXN0IGFuZCBzdG9yZSBpbiBsb2NhbCBzdG9yYWdlIGlmIGxvY2FsIHN0b3JhZ2UgaXMgZW1wdHlcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBuZXcgTGlzdCgnVGFza3MnLCBbXSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Rhc2tzLm5hbWV9YCwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICB9XG4gXG4gICAgLy8gTG9vcCB0aHJvdWdoIGxpc3RzIGluIGxvY2FsIHN0b3JhZ2UgYW5kIHBvcHVsYXRlIGxpc3RBcnJheSBvbiBwYWdlIGxvYWRcbiAgICBmdW5jdGlvbiBnZXRMaXN0c0Zyb21TdG9yYWdlKCkge1xuICAgICAgICBmb3IgKGxldCBpPWxvY2FsU3RvcmFnZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3ROYW1lID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0TmFtZSkpO1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IG5ldyBMaXN0KGxpc3REYXRhLm5hbWUsIGxpc3REYXRhLnRhc2tzKTsgXG4gICAgICAgICAgICBsaXN0QXJyYXkucHVzaChsaXN0KTtcbiAgICAgICAgICAgIGxpc3QuYWRkVG9QYWdlKHNpZGViYXIsIGNvbnRlbnQpO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCl7XG4gICAgICAgICAgICAgICAgbGlzdC5kaXNwbGF5KGNvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cbiAgICBcbiAgICBnZXRMaXN0c0Zyb21TdG9yYWdlKClcbiAgICBtYWtlTmV3TGlzdEJ1dHRvbigpXG4gICAgbWFrZUFkZFRvRG9CdXR0b24oKVxufSkoKTtcblxuXG5cblxuXG4iLCJleHBvcnQgY2xhc3MgTGlzdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdGFza3MpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgIH1cblxuICAgIGFkZFRvUGFnZShidXR0b25BcmVhLCB0YXNrQXJlYSkge1xuICAgICAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgbGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsaXN0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGxpc3RCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdEJ1dHRvbi50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbiAgICAgICAgbGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChsaXN0QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY3VycmVudEFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBsaXN0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSh0YXNrQXJlYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RCdXR0b24pO1xuICAgICAgICBpZiAodGhpcy5uYW1lICE9PSAnVGFza3MnKSB7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVMaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICByZW1vdmVMaXN0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgICAgIHJlbW92ZUxpc3RCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgncmVtb3ZlLWxpc3QtYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmVtb3ZlU3Bhbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIHJlbW92ZUxpc3RCdXR0b24uYXBwZW5kQ2hpbGQocmVtb3ZlU3Bhbik7XG4gICAgICAgICAgICByZW1vdmVMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm1hdGlvbi1jb250YWluZXInKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb25maXJtYXRpb24tY29udGFpbmVyJylcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtYXRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb25MYWJlbC5pbm5lclRleHQgPSBgRGVsZXRlICR7dGhpcy5uYW1lfT9gO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtYXRpb25MYWJlbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtYXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29uZmlybWF0aW9uQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdjb25maXJtJyk7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FjdGl2ZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQXJlYS5yZW1vdmVDaGlsZChsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dGhpcy5uYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtYXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29uZmlybWF0aW9uQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29uZmlybWF0aW9uQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVMaXN0QnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b25BcmVhLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIGFkZFRvRG8odG9Ebykge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godG9Ebyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMubmFtZX1gLCBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9Ebyh0b0RvKSB7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKHRoaXMudGFza3MuaW5kZXhPZih0b0RvKSwgMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMubmFtZX1gLCBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgfVxuXG4gICAgZGlzcGxheShsb2NhdGlvbikge1xuICAgICAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza3NDb250YWluZXIuaWQgPSAndGFza3MtY29udGFpbmVyJztcblxuICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1RvLURvJztcbiAgICAgICAgbmFtZUxhYmVsLmNsYXNzTGlzdC50b2dnbGUoJ2NvbHVtbi1sYWJlbCcpO1xuICAgICAgICBuYW1lTGFiZWwuY2xhc3NMaXN0LnRvZ2dsZSgnbmFtZScpO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICAgICAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC50b2dnbGUoJ2NvbHVtbi1sYWJlbCcpO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlJztcbiAgICAgICAgZGF0ZUxhYmVsLmNsYXNzTGlzdC50b2dnbGUoJ2NvbHVtbi1sYWJlbCcpO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgICAgICBjb25zdCBjb21wbGV0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbXBsZXRlTGFiZWwudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuICAgICAgICBjb21wbGV0ZUxhYmVsLmNsYXNzTGlzdC50b2dnbGUoJ2NvbHVtbi1sYWJlbCcpO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZUxhYmVsKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVtb3ZlTGFiZWwudGV4dENvbnRlbnQgPSAnUmVtb3ZlJztcbiAgICAgICAgcmVtb3ZlTGFiZWwuY2xhc3NMaXN0LnRvZ2dsZSgnY29sdW1uLWxhYmVsJyk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUxhYmVsKTtcblxuICAgICAgICB0aGlzLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC50b2dnbGUoJ25hbWUnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTsgIFxuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZSgncHJpb3JpdHknKTtcbiAgICAgICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eVxuICAgICAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PSAnTG93Jykge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoJ2xvdycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09ICdOb3JtYWwnKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm9ybWFsJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0hpZ2gnKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlnaCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkYXRlLmNsYXNzTGlzdC50b2dnbGUoJ2RhdGUnKTtcbiAgICAgICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrLmRhdGVcbiAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpOyAgXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlQ2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlQ2hlY2tCb3hDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZUNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlQ2hlY2tCb3guY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlQ2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICBjb21wbGV0ZUNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgZGF0ZS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbXBsZXRlQ2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVDaGVja0JveCk7XG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZUNoZWNrQm94Q29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByZW1vdmVCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdyZW1vdmUnKTtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVCdXR0b25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uU3Bhbi5pbm5lckhUTUwgPSAnWCc7XG4gICAgICAgICAgICByZW1vdmVCdXR0b24uYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uU3Bhbik7XG4gICAgICAgICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUb0RvKHRhc2spO1xuICAgICAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLnJlbW92ZUNoaWxkKG5hbWUpO1xuICAgICAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRhdGUpO1xuICAgICAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5yZW1vdmVDaGlsZChjb21wbGV0ZUNoZWNrQm94Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5yZW1vdmVDaGlsZChyZW1vdmVCdXR0b25Db250YWluZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZW1vdmVCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcbiAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgICAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcik7XG4gICAgfVxuXG59XG5cbiIsImV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQcmlvcml0eSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gICAgfSBcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9