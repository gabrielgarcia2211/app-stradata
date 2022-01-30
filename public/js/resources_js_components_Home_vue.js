"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
var _name$name$data$metho;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_name$name$data$metho = {
  name: "users"
}, _defineProperty(_name$name$data$metho, "name", "errores"), _defineProperty(_name$name$data$metho, "data", function data() {
  return {
    data: {
      nombre: "",
      porcentaje: ""
    },
    users: [],
    lista_datas: []
  };
}), _defineProperty(_name$name$data$metho, "methods", {
  buscar: function buscar() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.axios.post("/api/similary", _this.data, {
                headers: {
                  Authorization: "Bearer" + localStorage.getItem("Token")
                }
              }).then(function (response) {
                if (response.data.message.length == 0) {
                  _this.$swal({
                    icon: "warning",
                    title: "Opps...",
                    text: "No hay Coincidencias Encontradas!"
                  });

                  _this.users = "";
                } else {
                  if (response.data.response) {
                    _this.$swal({
                      icon: "success",
                      title: "Hecho",
                      text: "Coincidencias Encontradas!"
                    });

                    _this.users = response.data.message;
                  } else {
                    var listError = "";
                    _this.errores = response.data.message;

                    for (var prop in _this.errores) {
                      listError += "\n" + _this.errores[prop];
                    }

                    _this.$swal({
                      icon: "error",
                      title: "Opps...",
                      text: listError
                    });
                  }
                }
              })["catch"](function (error) {
                console.log(error);

                _this.$swal({
                  icon: "error",
                  title: "Opps...",
                  text: "No esta Autorizado"
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  exportar: function exportar() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this2.users.length > 0)) {
                _context2.next = 5;
                break;
              }

              _context2.next = 3;
              return _this2.axios.post("/api/export", _this2.users, {
                responseType: "arraybuffer"
              }).then(function (response) {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement("a");
                fileLink.href = fileURL;
                fileLink.setAttribute("download", "test.xlsx");
                document.body.appendChild(fileLink);
                fileLink.click();
              })["catch"](function (error) {
                _this2.$swal({
                  icon: "error",
                  title: "Opps..",
                  text: error
                });
              });

            case 3:
              _context2.next = 6;
              break;

            case 5:
              _this2.$swal({
                icon: "warning",
                title: "Opps",
                text: "Busqueda Vacia!"
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
}), _name$name$data$metho);

/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mt-4" }, [
    _c(
      "div",
      { staticClass: "card", staticStyle: { "justify-content": "center" } },
      [
        _c(
          "div",
          {
            staticClass: "card-header bg-primary",
            staticStyle: { color: "white" },
          },
          [_vm._v("\n            Buscador\n        ")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c(
            "form",
            {
              staticClass: "row g-3",
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.buscar.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "col auto" }, [
                _c("div", { staticClass: "mb-3" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "nombre" } },
                    [_vm._v("Nombres y Apellidos")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.nombre,
                        expression: "data.nombre",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "nombre",
                      name: "nombre",
                      "aria-describedby": "emailHelp",
                    },
                    domProps: { value: _vm.data.nombre },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "nombre", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col auto" }, [
                _c("div", { staticClass: "mb-3" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "porcentaje" } },
                    [_vm._v("Porcentaje de Coincidencia")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.porcentaje,
                        expression: "data.porcentaje",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      id: "porcentaje",
                      name: "porcentaje",
                    },
                    domProps: { value: _vm.data.porcentaje },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "porcentaje", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "col mt-5" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-warning",
                    attrs: { type: "button" },
                    on: { click: _vm.exportar },
                  },
                  [
                    _vm._v(
                      "\n                        Exportar\n                    "
                    ),
                  ]
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _vm.users.length > 0
            ? _c("div", [
                _c("div", { staticClass: "col-12 mb-2" }),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      {
                        staticClass: "table table-bordered",
                        attrs: {
                          id: "dataTable",
                          width: "100%",
                          cellspacing: "0",
                        },
                      },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.users, function (user) {
                            return _c("tr", { key: user.id }, [
                              _c("td", [_vm._v(_vm._s(user.nombre))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.tipo_persona))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.tipo_cargo))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.departamento))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.municipio))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.porcentaje))]),
                            ])
                          }),
                          0
                        ),
                      ]
                    ),
                  ]),
                ]),
              ])
            : _vm._e(),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col mt-5" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("\n                        Buscar\n                    ")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo Persona")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo Cargo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Departamento")]),
        _vm._v(" "),
        _c("th", [_vm._v("Municipio")]),
        _vm._v(" "),
        _c("th", [_vm._v("% Coincidencia")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);