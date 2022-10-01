/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../src/Injects/clearInjections.js":
/*!*****************************************!*\
  !*** ../src/Injects/clearInjections.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _default; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: "inject",
    value: function inject() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('repositoryThree-pinned'); // console.log(123)
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "../src/Injects/downloadFolder/downloadFolder.js":
/*!*******************************************************!*\
  !*** ../src/Injects/downloadFolder/downloadFolder.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jszip */ "../node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var zip = new (jszip__WEBPACK_IMPORTED_MODULE_1___default())();
  var downloadedFiles = false;
  var filesToDownload = ['unknown'];
  var allFilesLoaded = false;
  var downloadStart = false;
  var archiveName = '';
  setInterval(function () {
    if (filesToDownload.length < 1 && downloadStart === true) {
      filesToDownload = ['unknown'];
      downloadStart = false;
      downloadedFiles = true;
      zip.generateAsync({
        type: 'blob'
      }).then(function (content) {
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(content);
        a.download = archiveName + '.zip';
        a.click();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ext-download-folder-btn').removeAttr('disabled'); // console.log('Архив создан')
      });
    }
  }, 1000);
  zip.ob;

  var createDownloadBtn = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var dFolder;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return jquery__WEBPACK_IMPORTED_MODULE_0___default()('#repo-content-pjax-container > div > div > div.file-navigation.mb-3.d-flex.flex-items-start > div.d-flex').prepend('<button class="ext-download-folder-btn">Download</button>');

            case 2:
              _context4.next = 4;
              return jquery__WEBPACK_IMPORTED_MODULE_0___default()('#repo-content-turbo-frame > div > div > div.file-navigation.mb-3.d-flex.flex-items-start > div.d-flex').prepend('<button class="ext-download-folder-btn">Download</button>');

            case 4:
              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#style-download-folder-btn').length < 1) jquery__WEBPACK_IMPORTED_MODULE_0___default()('head').prepend("\n<style type=\"text/css\" id=\"style-download-folder-btn\"> \n    .ext-download-folder-btn{\n        text-decoration: none;\n        background: #21262d; \n        border-radius: 5px;\n        border: 1px solid;\n        font-weight: 500;\n        color: var(--color-btn-text);\n        border-color: var(--color-btn-border);\n        transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);\n        transition-timing-function: cubic-bezier(0.33, 1, 0.68, 1);\n        height: 100%;\n        margin-right: 8px;\n        padding: 5px 16px;\n        min-width: 100px;\n        cursor: pointer;\n        font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\";\n    }\n     .ext-download-folder-btn:hover{\n         text-decoration: none;\n         background: #30363d;\n         border-color: var(--color-btn-hover-border);\n     }\n     .ext-download-folder-btn:disabled{\n         text-decoration: none;\n         background: black;\n         border-color: var(--color-btn-hover-border);\n     }\n</style>");
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ext-download-folder-btn').click(function () {
                var _archiveName$innerTex;

                filesToDownload = ['firstDownload'];
                downloadedFiles = false;
                downloadStart = true;
                var links = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#repo-content-pjax-container  div  div  div.Box.mb-3  div.js-details-container.Details  div  div.flex-auto.min-width-0.col-md-2.mr-3  span  a');

                if (links.length < 1) {
                  links = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#repo-content-turbo-frame div  div  div.Box.mb-3  div.js-details-container.Details div   div.flex-auto.min-width-0.col-md-2.mr-3  span  a');
                }

                var downloaded = 0;
                archiveName = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#repo-content-pjax-container > div > div > div.file-navigation.mb-3.d-flex.flex-items-start > div.flex-1.mx-2.flex-self-center.f4 > div > strong').html();

                if (archiveName == undefined) {
                  archiveName = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#repo-content-turbo-frame > div > div > div.file-navigation.mb-3.d-flex.flex-items-start > div.flex-1.mx-2.flex-self-center.f4 > div strong');
                  archiveName = archiveName[archiveName.length - 1];
                }

                if (((_archiveName$innerTex = archiveName.innerText) === null || _archiveName$innerTex === void 0 ? void 0 : _archiveName$innerTex.length) > 0) {
                  archiveName = archiveName.innerText;
                } // console.log(archiveName)


                jquery__WEBPACK_IMPORTED_MODULE_0___default().each(links, function (index) {
                  var href = links[index].href;
                  href = href.split('/');
                  href[5] = 'raw';
                  var name = href[href.length - 1];
                  href = href.join('/');
                  filesToDownload.push(href);
                  name = links[index].innerText; // console.log(name)

                  fetch(href, {
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }
                  }).then(function (res) {
                    return res.blob();
                  }).then( /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(blob) {
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              if (!(name.split('.').length < 2)) {
                                _context.next = 6;
                                break;
                              }

                              _context.next = 3;
                              return dFolder(blob, name);

                            case 3:
                              filesToDownload = filesToDownload.filter(function (el) {
                                return el != href;
                              });
                              _context.next = 8;
                              break;

                            case 6:
                              zip.file(name, blob);
                              filesToDownload = filesToDownload.filter(function (el) {
                                return el != href;
                              });

                            case 8:
                              filesToDownload = filesToDownload.filter(function (el) {
                                return el != 'firstDownload';
                              });
                              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ext-download-folder-btn').prop('disabled', true);
                              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ext-download-folder-btn').html(Math.round((downloaded + 1) / links.length * 100 * 100) / 100 + '%');
                              downloaded++; // if (index === links.length -1){
                              //      interval = setInterval(()=>{
                              //         console.log(filesToDownload)
                              //         if (downloaded == true){
                              //             return
                              //         }
                              //         if (filesToDownload < 1) {
                              //             // zip.generateAsync({type:'blob'}).then((content)=>{
                              //             //     let a = document.createElement('a')
                              //             //     a.href = window.URL.createObjectURL(content)
                              //             //     a.download = archiveName + '.zip'
                              //             //     a.click()
                              //             //     $('.ext-download-folder-btn').removeAttr('disabled')
                              //             //     console.log('Архив создан')
                              //             //     downloaded = true;
                              //             // })
                              //             return
                              //         }
                              //     },2000)
                              // }

                            case 12:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x) {
                      return _ref2.apply(this, arguments);
                    };
                  }());
                });
              });

              dFolder = function dFolder(blob, path) {
                blob.text().then( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(html) {
                    var ob;
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            ob = document.createElement('html');
                            ob.innerHTML = html;
                            setTimeout(function () {
                              var links = ob.querySelectorAll('#repo-content-pjax-container > div > div > div.Box.mb-3 > div.js-details-container.Details > div > div.Box-row.Box-row--focus-gray.py-2.d-flex.position-relative.js-navigation-item > div.flex-auto.min-width-0.col-md-2.mr-3 > span a '); // console.log(links)
                              // let links = $(ob > '#repo-content-pjax-container > div > div > div.Box.mb-3 > div.js-details-container.Details > div  div.flex-auto.min-width-0.col-md-2.mr-3 > span > a')

                              if (links.length < 1) {
                                // console.log('ALert!')
                                links = ob.querySelectorAll('#repo-content-pjax-container div div div.Box.mb-3  include-fragment div.js-details-container.Details div  div.flex-auto.min-width-0.col-md-2.mr-3  span  a'); // console.log(links)
                                // console.log(html)
                              }

                              jquery__WEBPACK_IMPORTED_MODULE_0___default().each(links, function (index) {
                                var href = links[index].href;
                                href = href.split('/');
                                href[5] = 'raw';
                                var name = href[href.length - 1];
                                href = href.join('/');
                                filesToDownload.push(href);
                                fetch(href, {
                                  headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                                  }
                                }).then(function (res) {
                                  return res.blob();
                                }).then( /*#__PURE__*/function () {
                                  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(blob) {
                                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                      while (1) {
                                        switch (_context2.prev = _context2.next) {
                                          case 0:
                                            if (!(name.split('.').length < 2)) {
                                              _context2.next = 5;
                                              break;
                                            }

                                            _context2.next = 3;
                                            return dFolder(blob, path + '/' + name);

                                          case 3:
                                            _context2.next = 6;
                                            break;

                                          case 5:
                                            zip.file(path + '/' + name, blob);

                                          case 6:
                                            // console.log(path+'/'+name)
                                            filesToDownload = filesToDownload.filter(function (el) {
                                              return el != href;
                                            });

                                          case 7:
                                          case "end":
                                            return _context2.stop();
                                        }
                                      }
                                    }, _callee2);
                                  }));

                                  return function (_x3) {
                                    return _ref4.apply(this, arguments);
                                  };
                                }());
                              });
                            }, 0);

                          case 3:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }());
              };

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function createDownloadBtn() {
      return _ref.apply(this, arguments);
    };
  }();

  setInterval(function () {
    ;

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ext-download-folder-btn').length < 1) {
      downloadedFiles = false;
      filesToDownload = ['unknown'];
      allFilesLoaded = false;
      downloadStart = false;
      archiveName = '';
      zip = new (jszip__WEBPACK_IMPORTED_MODULE_1___default())();
      zip.filter(function (path, file) {
        return false;
      });
      createDownloadBtn();
    }
  }, 1000);
})());

/***/ }),

/***/ "../src/Injects/repositoryThree/repositoryThree.js":
/*!*********************************************************!*\
  !*** ../src/Injects/repositoryThree/repositoryThree.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _default; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);

    _defineProperty(this, "title", void 0);

    _defineProperty(this, "url", void 0);

    _defineProperty(this, "hashedURL", void 0);

    _defineProperty(this, "deep", 0);

    _defineProperty(this, "toView", []);

    _defineProperty(this, "maxDeep", 100);

    _defineProperty(this, "deepAlerted", false);

    _defineProperty(this, "eventsAdded", false);

    this.checkurl();
    this.hashedURL = window.location.toString().split('/').slice(0, 5).join('/');
    this.url = window.location.toString().split('/').slice(0, 5).join('/');
  }

  _createClass(_default, [{
    key: "uuidv4",
    value: function uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
      });
    }
  }, {
    key: "setup",
    value: function setup() {
      this.title = window.location.toString().split('/')[4];
      this.url = window.location.toString().split('/').slice(0, 5).join('/');
      this.deep = 0;
    }
  }, {
    key: "checkThisIsRepo",
    value: function checkThisIsRepo() {
      var header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#repository-container-header');

      if (!header.length) {
        return false;
      }

      return true;
    }
  }, {
    key: "getFolderOfFileInBlob",
    value: function getFolderOfFileInBlob(blob) {
      var _this = this;

      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (this.deep > this.maxDeep) {
        if (!this.deepAlerted) {
          alert("\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E \u043F\u0430\u043F\u043E\u043A ".concat(this.maxDeep));
          this.deepAlerted = true;
        }

        this.deep++;
        return '';
      }

      var toReturn = "";
      blob.text().then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(html) {
          var ob, links;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  ob = document.createElement('html');
                  ob.innerHTML = html;
                  links = jquery__WEBPACK_IMPORTED_MODULE_0___default()(ob).find('.js-details-container .Box-row'); // links = links.filter((link)=> { link.childElementCount < 4})

                  links = links.filter(function (index, el) {
                    return el.childElementCount === 4;
                  });
                  jquery__WEBPACK_IMPORTED_MODULE_0___default().each(links, /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(index) {
                      var title, href, svg, id;
                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              title = jquery__WEBPACK_IMPORTED_MODULE_0___default()(links[index]).find('a').first()[0].innerText;

                              if (!(title === '')) {
                                _context2.next = 3;
                                break;
                              }

                              return _context2.abrupt("return");

                            case 3:
                              href = jquery__WEBPACK_IMPORTED_MODULE_0___default()(links[index]).find('a').first()[0].href;
                              svg = jquery__WEBPACK_IMPORTED_MODULE_0___default()(links[index]).find('svg').first()[0];

                              if (title.split('.').filter(function (el) {
                                return el.length > 0;
                              }).length < 2) {
                                _this.deep += 1;
                                id = _this.uuidv4();
                                toReturn = "\n                                    <li id=\"".concat(id, "-parent\" class=\"parent-li\">\n                                        <a href=\"").concat(href, "\" class=\"folder\">\n                                        ").concat(_this.convertHtmlToString(svg), "\n                                        </a>\n                                              ").concat(title, "\n                                        <ul id=\"").concat(id, "\">\n\n                                        </ul>\n                                    </li>\n                                ");
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).append(toReturn);
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + id + '-parent').click(function (e) {
                                  if (e.target === e.currentTarget) {
                                    e.stopPropagation();
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + id + '-parent').toggleClass('active');

                                    _this.hashTree(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.repositoryThree').html());
                                  }
                                });
                                fetch(href, {
                                  headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                                  }
                                }).then(function (res) {
                                  return res.blob();
                                }).then( /*#__PURE__*/function () {
                                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(blob) {
                                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                                      while (1) {
                                        switch (_context.prev = _context.next) {
                                          case 0:
                                            _this.getFolderOfFileInBlob(blob, '#' + id);

                                          case 1:
                                          case "end":
                                            return _context.stop();
                                        }
                                      }
                                    }, _callee);
                                  }));

                                  return function (_x3) {
                                    return _ref3.apply(this, arguments);
                                  };
                                }());
                              } else {
                                toReturn = "\n                            <li>\n                                ".concat(_this.convertHtmlToString(svg), "\n                                    <a href=\"").concat(href, "\">\n                                                   ").concat(title, "\n                                    </a>\n                            </li>\n                        ");
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).append(toReturn);
                              }

                              _this.hashTree(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.repositoryThree').html());

                            case 7:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function (_x2) {
                      return _ref2.apply(this, arguments);
                    };
                  }());

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      return 1;
    }
  }, {
    key: "convertHtmlToString",
    value: function convertHtmlToString(DOMObject) {
      var tmp = document.createElement("div");
      tmp.appendChild(DOMObject.cloneNode(true));
      return tmp.innerHTML; // <p>Test</p>
    }
  }, {
    key: "proceed",
    value: function proceed() {
      var _this2 = this;

      if (localStorage.getItem('repositoryThree-pinned') === 'true') {
        this.pin();
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.repositoryThree .settings .pin').click(function () {
        _this2.togglePin();
      });
    }
  }, {
    key: "togglePin",
    value: function togglePin() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.repositoryThree .settings .pin').toggleClass('pinned');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.repositoryThree').toggleClass('pinned');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('repositoryThree-pinned');
      localStorage.setItem('repositoryThree-pinned', jquery__WEBPACK_IMPORTED_MODULE_0___default()('.repositoryThree').hasClass('pinned'));
    }
  }, {
    key: "pin",
    value: function pin() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.repositoryThree .settings .pin').addClass('pinned');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.repositoryThree').addClass('pinned');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('repositoryThree-pinned');
      localStorage.setItem('repositoryThree-pinned', true);
    }
  }, {
    key: "hashTree",
    value: function hashTree(tree) {
      this.hashedURL = this.url;
      localStorage.setItem('repositoryThree-hash', tree);
    }
  }, {
    key: "checkhash",
    value: function checkhash() {
      return window.location.toString().split('/').slice(0, 5).join('/') === this.hashedURL;
    }
  }, {
    key: "addClickEvent",
    value: function addClickEvent() {
      var _this3 = this;

      // if (this.eventsAdded){
      //     return
      // }
      this.eventsAdded = true;
      var liys = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.parent-li');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(liys, function (index) {
        liys[index].addEventListener('click', function (e) {
          if (e.target !== liys[index]) return;
          e.stopPropagation();
          liys[index].classList.toggle('active');

          _this3.hashTree(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.repositoryThree').html());
        });
      });
    }
  }, {
    key: "build",
    value: function build(repositoryThree) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.repositoryThree').remove();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').prepend(repositoryThree);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#repositoryThree__search').on('input', function (e) {
        var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#repositoryThree__search').val();
        var liys = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.repositoryThree__body li');
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(liys, function (index) {
          var text = liys[index].innerText;
          var li = liys[index];

          if (text.includes(value)) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(li).removeClass('hiddenBySearch');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(li).addClass('hiddenBySearch');
          }
        });
      });
      this.proceed();
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this4 = this;

      __webpack_require__(/*! ./style.scss */ "../src/Injects/repositoryThree/style.scss");

      if (!this.checkThisIsRepo()) return;

      if (this.checkhash()) {
        var tree = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<div class='repositoryThree'>" + localStorage.getItem('repositoryThree-hash') + "</div>");
        this.build(tree);
        this.addClickEvent();
        return;
      }

      this.setup();
      fetch(this.url, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }).then(function (res) {
        return res.blob();
      }).then( /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(blob) {
          var repositoryThree;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  repositoryThree = jquery__WEBPACK_IMPORTED_MODULE_0___default()("\n                <div class=\"repositoryThree\">\n                <div class=\"settings\">\n                    <div class=\"pin\">\n                        <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <g clip-path=\"url(#clip0_1_2)\">\n                        <path d=\"M4.146 0.146C4.19252 0.099598 4.24773 0.0628199 4.30847 0.0377682C4.36921 0.0127165 4.4343 -0.000117503 4.5 -1.56181e-07H11.5C11.6326 -1.56181e-07 11.7598 0.0526783 11.8536 0.146446C11.9473 0.240215 12 0.367392 12 0.5C12 1.18 11.658 1.674 11.354 1.979C11.228 2.104 11.104 2.203 11 2.277V6.708L11.078 6.756C11.281 6.883 11.554 7.07 11.829 7.311C12.36 7.775 13 8.527 13 9.5C13 9.63261 12.9473 9.75979 12.8536 9.85355C12.7598 9.94732 12.6326 10 12.5 10H8.5V14.5C8.5 14.776 8.276 16 8 16C7.724 16 7.5 14.776 7.5 14.5V10H3.5C3.36739 10 3.24021 9.94732 3.14645 9.85355C3.05268 9.75979 3 9.63261 3 9.5C3 8.527 3.64 7.775 4.17 7.311C4.4287 7.08636 4.70641 6.88461 5 6.708V2.277C4.8739 2.18771 4.75548 2.08803 4.646 1.979C4.342 1.674 4 1.179 4 0.5C3.99988 0.434295 4.01272 0.369211 4.03777 0.308469C4.06282 0.247728 4.0996 0.192519 4.146 0.146V0.146ZM5.726 1.554L5.724 1.553L5.726 1.554ZM5.724 1.553L5.726 1.554C5.80842 1.59576 5.87766 1.65955 5.92603 1.73828C5.97439 1.81701 6 1.9076 6 2V7C6 7.09278 5.97418 7.18373 5.92544 7.26267C5.87669 7.34161 5.80695 7.40544 5.724 7.447H5.722L5.71 7.454L5.656 7.484C5.36117 7.64846 5.08405 7.84282 4.829 8.064C4.511 8.342 4.244 8.66 4.104 9H11.896C11.756 8.66 11.489 8.342 11.171 8.064C10.9004 7.82917 10.605 7.62462 10.29 7.454L10.278 7.448H10.276C10.1929 7.40636 10.1231 7.34238 10.0743 7.26324C10.0255 7.18411 9.99982 7.09295 10 7V2C9.99962 1.90331 10.0273 1.80858 10.0796 1.72729C10.132 1.64601 10.2068 1.58164 10.295 1.542C10.4229 1.46669 10.5408 1.37565 10.646 1.271C10.726 1.191 10.801 1.101 10.86 1H5.14C5.2 1.1 5.273 1.191 5.354 1.271C5.46447 1.38078 5.58886 1.47559 5.724 1.553Z\"/>\n                        </g>\n                        <defs>\n                        <clipPath id=\"clip0_1_2\">\n                        <rect width=\"16\" height=\"16\"/>\n                        </clipPath>\n                        </defs>\n                        </svg>\n                    </div>\n                </div>\n                    <div class=\"repositoryThree__header\">\n                         <div class=\"repositoryThree__header__title\">\n                            ".concat(_this4.title, "\n                         </div>\n                         <input id=\"repositoryThree__search\" type=\"text\" placeholder=\"search\"/>\n                    </div>\n                    <div class=\"repositoryThree__body\">\n                        <ul id=\"main-ul-repositoryThree\">\n                        </ul>\n                    </div>\n                </div>\n                "));

                  _this4.getFolderOfFileInBlob(blob, '#main-ul-repositoryThree');

                  _this4.build(repositoryThree);

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "checkurl",
    value: function checkurl() {
      var _this5 = this;

      if (window.location.toString().split('/').slice(0, 5).join('/') !== this.url) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.repositoryThree').remove();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('repositoryThree-pinned');
      }

      setTimeout(function () {
        _this5.checkurl();
      }, 1000);
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "../src/Injects/testInjection/testInjection.js":
/*!*****************************************************!*\
  !*** ../src/Injects/testInjection/testInjection.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _default; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: "inject",
    value: function inject() {
      console.log('builded');
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "../src/Router/Router.js":
/*!*******************************!*\
  !*** ../src/Router/Router.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _default; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);

    _defineProperty(this, "url", void 0);

    _defineProperty(this, "routes", []);
  }

  _createClass(_default, [{
    key: "uuidv4",
    value: function uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
      });
    }
  }, {
    key: "set",
    value: function set() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '**/*';
      var injections = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.routes[pattern] = {
        injections: injections,
        pattern: pattern
      };
    }
  }, {
    key: "immortalInjects",
    value: function immortalInjects() {
      if (this.url !== window.location.toString()) {
        this.inject();
      }
    }
  }, {
    key: "inject",
    value: function inject() {
      this.url = window.location.toString();

      for (var pattern in this.routes) {
        if (this.url.match(pattern) !== null) {
          this.routes[pattern].injections.forEach(function (f) {
            f.inject();
          });
        }
      }
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "../src/bootstrap.js":
/*!***************************!*\
  !*** ../src/bootstrap.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Injects_testInjection_testInjection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Injects/testInjection/testInjection.js */ "../src/Injects/testInjection/testInjection.js");
/* harmony import */ var _Injects_repositoryThree_repositoryThree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Injects/repositoryThree/repositoryThree */ "../src/Injects/repositoryThree/repositoryThree.js");
/* harmony import */ var _Injects_clearInjections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Injects/clearInjections */ "../src/Injects/clearInjections.js");
/* harmony import */ var _Router_Router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Router/Router.js */ "../src/Router/Router.js");
//  old ext
__webpack_require__(/*! ./Injects/downloadFolder/downloadFolder.js */ "../src/Injects/downloadFolder/downloadFolder.js"); // new ext






var router = new _Router_Router_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
router.set('github\.com.+', [new _Injects_clearInjections__WEBPACK_IMPORTED_MODULE_2__["default"]()]); // github.com/*/*

router.set('github\.com\/.+\/[\-\a-z_0-9]+'); // github.com/*/**

router.set('github\.com/.+/.+', [new _Injects_repositoryThree_repositoryThree__WEBPACK_IMPORTED_MODULE_1__["default"]()]);
setInterval(function () {
  router.immortalInjects();
}, 1000);

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../src/Injects/repositoryThree/style.scss":
/*!********************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../src/Injects/repositoryThree/style.scss ***!
  \********************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html.repositoryThree-pinned {\n  padding-left: 300px;\n  transition: 0s;\n}\n\nhtml {\n  transition: 0s;\n}\n\nhtml {\n  min-height: 100vh;\n  transition: 0.5s;\n}\nhtml * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml .repositoryThree {\n  height: 100vh;\n  position: fixed;\n  left: -300px;\n  right: 0;\n  width: 300px;\n  z-index: 1000;\n  background: rgba(13, 17, 23, 0.8784313725);\n  backdrop-filter: blur(2px);\n  box-shadow: rgba(0, 0, 0, 0) 5px -3px 13px;\n  transition: 0.5s;\n  padding: 15px 10px;\n}\nhtml .repositoryThree .settings {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  width: fit-content;\n}\nhtml .repositoryThree .settings > div {\n  cursor: pointer;\n}\nhtml .repositoryThree .settings .pin svg {\n  fill: white;\n  transition: 0.2s;\n  transform: rotate(45deg);\n}\nhtml .repositoryThree .settings .pin.pinned svg {\n  transform: rotate(0deg);\n}\nhtml .repositoryThree:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: -10px;\n  height: 100vh;\n  width: 10px;\n}\nhtml .repositoryThree:after {\n  z-index: 998;\n  content: \"Three View\";\n  position: absolute;\n  top: 50%;\n  right: -40px;\n  height: 100px;\n  width: 40px;\n  align-items: center;\n  justify-content: center;\n  transform: translateY(-50%);\n  writing-mode: vertical-rl;\n  display: flex;\n  border-bottom-right-radius: 20px;\n  border-top-right-radius: 20px;\n  color: white;\n  border-right: 1px rgb(48, 54, 61) solid;\n  border-top: 1px rgb(48, 54, 61) solid;\n  border-bottom: 1px rgb(48, 54, 61) solid;\n  font-size: 18px;\n  padding: 10px 0;\n  opacity: 1;\n  background: rgb(22, 27, 34);\n  backdrop-filter: blur(2px);\n  box-shadow: rgba(0, 0, 0, 0) 5px -3px 13px;\n  transition: 0.5s;\n}\nhtml .repositoryThree:hover {\n  left: 0;\n  box-shadow: rgba(0, 0, 0, 0.3490196078) 5px -3px 13px;\n}\nhtml .repositoryThree:hover:after {\n  opacity: 0;\n  right: 260px;\n  transition: 0.5s;\n}\nhtml .repositoryThree.pinned {\n  left: 0;\n  box-shadow: rgba(0, 0, 0, 0.3490196078) 5px -3px 13px;\n}\nhtml .repositoryThree.pinned:after {\n  opacity: 0;\n}\nhtml .repositoryThree__header__title {\n  text-align: center;\n  margin: 20px;\n  font-size: 24px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 28px;\n}\nhtml .repositoryThree__header input {\n  width: 100%;\n  border: 1px #363b42 solid;\n  border-radius: 5px;\n  padding: 0 10px;\n  height: 30px;\n  outline: none;\n  background: #21262d;\n  color: #c4ccd4;\n  margin-bottom: 10px;\n}\nhtml .repositoryThree__body {\n  width: 100%;\n  margin: auto;\n  background: rgba(0, 0, 0, 0.231372549);\n  box-shadow: 7px 7px 9px -4px inset black;\n  height: calc(100% - 68px - 40px);\n  padding: 10px;\n  overflow: scroll;\n}\nhtml .repositoryThree__body::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background: transparent;\n}\nhtml .repositoryThree__body::-webkit-scrollbar-thumb {\n  background: black;\n  border-radius: 15px;\n}\nhtml .repositoryThree__body::-webkit-scrollbar-track {\n  background: transparent;\n}\nhtml .repositoryThree__body::-webkit-scrollbar-corner {\n  display: none;\n}\nhtml .repositoryThree__body ul {\n  list-style: none;\n  padding-left: 10px;\n  position: relative;\n}\nhtml .repositoryThree__body ul:before {\n  content: \"\";\n  left: -5px;\n  position: absolute;\n  top: -10px;\n  height: 100%;\n  width: 2px;\n  background: white;\n  z-index: 9;\n}\nhtml .repositoryThree__body ul:nth-child(1):before {\n  content: \"\";\n  left: -5px;\n  position: absolute;\n  top: -10px;\n  height: 0%;\n  width: 2px;\n  background: white;\n  z-index: 9;\n}\nhtml .repositoryThree__body ul li {\n  cursor: pointer;\n  user-select: none;\n  width: 100%;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  list-style: none;\n  position: relative;\n  z-index: 10;\n  min-height: 20px;\n  transition: 0.5s;\n  white-space: nowrap;\n}\nhtml .repositoryThree__body ul li .folder {\n  text-decoration: none;\n  transition: 0.2s;\n  display: inline-block;\n  -webkit-tap-highlight-color: transparent;\n  outline: none;\n}\nhtml .repositoryThree__body ul li .folder:hover {\n  transform: rotate(10deg) scale(1.1);\n}\nhtml .repositoryThree__body ul li:before {\n  content: \"\";\n  left: -5px;\n  position: absolute;\n  top: -10px;\n  height: 100%;\n  width: 2px;\n  background: white;\n  z-index: 9;\n}\nhtml .repositoryThree__body ul li:after {\n  content: \"\";\n  position: absolute;\n  left: -5px;\n  top: 9px;\n  height: 2px;\n  width: 5px;\n  background: white;\n  z-index: 9;\n}\nhtml .repositoryThree__body ul li:nth-child(1):before {\n  content: \"\";\n  left: -5px;\n  position: absolute;\n  top: 0px;\n  height: calc(100% - 10px);\n  width: 2px;\n  background: white;\n  z-index: 9;\n}\nhtml .repositoryThree__body li > ul {\n  height: 0;\n  overflow: hidden;\n  transform-origin: 0 0;\n  transition: 0.5s;\n}\nhtml .repositoryThree__body li.active > ul {\n  height: auto;\n}\nhtml .repositoryThree__body li.hiddenBySearch {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./../src/Injects/repositoryThree/style.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,cAAA;AACJ;;AACA;EACI,cAAA;AAEJ;;AAAA;EACI,iBAAA;EACA,gBAAA;AAGJ;AAFI;EACI,sBAAA;EACA,SAAA;EACA,UAAA;AAIR;AAFI;EAuBI,aAAA;EACA,eAAA;EACA,YAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;EACA,0CAAA;EACA,0BAAA;EACA,0CAAA;EACA,gBAAA;EACA,kBAAA;AAlBR;AAdQ;EACI,kBAAA;EACA,SAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;AAgBZ;AAfY;EACI,eAAA;AAiBhB;AAdgB;EACI,WAAA;EACA,gBAAA;EACA,wBAAA;AAgBpB;AAboB;EACI,uBAAA;AAexB;AACQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;AACZ;AACQ;EACI,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,mBAAA;EACA,uBAAA;EACA,2BAAA;EACA,yBAAA;EACA,aAAA;EACA,gCAAA;EACA,6BAAA;EACA,YAAA;EACA,uCAAA;EACA,qCAAA;EACA,wCAAA;EACA,eAAA;EACA,eAAA;EACA,UAAA;EACA,2BAAA;EACA,0BAAA;EACA,0CAAA;EACA,gBAAA;AACZ;AACQ;EACI,OAAA;EACA,qDAAA;AACZ;AAAY;EACI,UAAA;EACA,YAAA;EACA,gBAAA;AAEhB;AACQ;EACI,OAAA;EACA,qDAAA;AACZ;AAAY;EACI,UAAA;AAEhB;AAEY;EACI,kBAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,YAAA;AAAhB;AAEY;EACI,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,mBAAA;AAAhB;AAGQ;EACI,WAAA;EACA,YAAA;EACA,sCAAA;EACA,wCAAA;EACA,gCAAA;EACA,aAAA;EACA,gBAAA;AADZ;AAEY;EACI,UAAA;EACA,WAAA;EACA,uBAAA;AAAhB;AAEY;EACI,iBAAA;EACA,mBAAA;AAAhB;AAEY;EACI,uBAAA;AAAhB;AAEY;EACI,aAAA;AAAhB;AAGY;EACI,gBAAA;EACA,kBAAA;EACA,kBAAA;AADhB;AAEgB;EACI,WAAA;EACA,UAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,UAAA;EACA,iBAAA;EACA,UAAA;AAApB;AAGoB;EACI,WAAA;EACA,UAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;EACA,UAAA;EACA,iBAAA;EACA,UAAA;AADxB;AAIgB;EAWI,eAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AAZpB;AARoB;EACI,qBAAA;EACA,gBAAA;EACA,qBAAA;EACA,wCAAA;EACA,aAAA;AAUxB;AATwB;EACI,mCAAA;AAW5B;AAGoB;EACI,WAAA;EACA,UAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,UAAA;EACA,iBAAA;EACA,UAAA;AADxB;AAGoB;EACI,WAAA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,WAAA;EACA,UAAA;EACA,iBAAA;EACA,UAAA;AADxB;AAIwB;EACI,WAAA;EACA,UAAA;EACA,kBAAA;EACA,QAAA;EACA,yBAAA;EACA,UAAA;EACA,iBAAA;EACA,UAAA;AAF5B;AAQY;EACI,SAAA;EACA,gBAAA;EACA,qBAAA;EACA,gBAAA;AANhB;AAQY;EACI,YAAA;AANhB;AAQY;EACI,aAAA;AANhB","sourcesContent":["html.repositoryThree-pinned{\r\n    padding-left: 300px;\r\n    transition: 0s;\r\n}\r\nhtml{\r\n    transition: 0s;\r\n}\r\nhtml{\r\n    min-height: 100vh;\r\n    transition: 0.5s;\r\n    *{\r\n        box-sizing: border-box;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .repositoryThree{\r\n        .settings{\r\n            position: absolute;\r\n            top:10px;\r\n            right: 10px;\r\n            display: flex;\r\n            width: fit-content;\r\n            & > div{\r\n                cursor: pointer;\r\n            }\r\n            .pin{\r\n                svg{\r\n                    fill:white;\r\n                    transition: 0.2s;\r\n                    transform: rotate(45deg);\r\n                }\r\n                &.pinned{\r\n                    svg{\r\n                        transform: rotate(0deg);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        height: 100vh;\r\n        position: fixed;\r\n        left:-300px;\r\n        right: 0;\r\n        width: 300px;\r\n        z-index: 1000;\r\n        background: #0d1117e0;\r\n        backdrop-filter: blur(2px);\r\n        box-shadow: #00000000 5px -3px 13px;\r\n        transition: 0.5s;\r\n        padding: 15px 10px;\r\n        &:before{\r\n            content: \"\";\r\n            position: absolute;\r\n            top: 0;\r\n            right: -10px;\r\n            height: 100vh;\r\n            width: 10px;\r\n        }\r\n        &:after{\r\n            z-index: 998;\r\n            content: \"Three View\";\r\n            position: absolute;\r\n            top: 50%;\r\n            right: -40px;\r\n            height: 100px;\r\n            width: 40px;\r\n            align-items: center;\r\n            justify-content: center;\r\n            transform: translateY(-50%);\r\n            writing-mode: vertical-rl;\r\n            display: flex;\r\n            border-bottom-right-radius: 20px;\r\n            border-top-right-radius: 20px;\r\n            color: white;\r\n            border-right: 1px rgb(48, 54, 61) solid;\r\n            border-top: 1px rgb(48, 54, 61) solid;\r\n            border-bottom: 1px rgb(48, 54, 61) solid;\r\n            font-size: 18px;\r\n            padding: 10px 0;\r\n            opacity: 1;\r\n            background: rgb(22 27 34);\r\n            backdrop-filter: blur(2px);\r\n            box-shadow: rgba(0, 0, 0, 0) 5px -3px 13px;\r\n            transition: 0.5s;\r\n        }\r\n        &:hover{\r\n            left:0;\r\n            box-shadow: #00000059 5px -3px 13px;\r\n            &:after{\r\n                opacity: 0;\r\n                right: 260px;\r\n                transition: 0.5s;\r\n            }\r\n        }\r\n        &.pinned{\r\n            left: 0;\r\n            box-shadow: #00000059 5px -3px 13px;\r\n            &:after{\r\n                opacity: 0;\r\n            }\r\n        }\r\n        &__header{\r\n            &__title{\r\n                text-align: center;\r\n                margin: 20px;\r\n                font-size: 24px;\r\n                white-space: nowrap;\r\n                overflow: hidden;\r\n                text-overflow: ellipsis;\r\n                height: 28px;\r\n            }\r\n            input{\r\n                width: 100%;\r\n                border: 1px #363b42 solid;\r\n                border-radius: 5px;\r\n                padding: 0 10px;\r\n                height: 30px;\r\n                outline: none;\r\n                background: #21262d;\r\n                color:#c4ccd4;\r\n                margin-bottom: 10px;\r\n            }\r\n        }\r\n        &__body{\r\n            width: 100%;\r\n            margin: auto;\r\n            background: #0000003b;\r\n            box-shadow: 7px 7px 9px -4px inset black;\r\n            height: calc(100% - 68px - 40px);\r\n            padding: 10px;\r\n            overflow: scroll;\r\n            &::-webkit-scrollbar {\r\n                width: 6px;\r\n                height: 6px;\r\n                background: transparent;\r\n            }\r\n            &::-webkit-scrollbar-thumb{\r\n                background: black;\r\n                border-radius: 15px;\r\n            }\r\n            &::-webkit-scrollbar-track{\r\n                background: transparent;\r\n            }\r\n            &::-webkit-scrollbar-corner {\r\n                display: none;\r\n            }\r\n\r\n            ul{\r\n                list-style: none;\r\n                padding-left: 10px;\r\n                position: relative;\r\n                &:before{\r\n                    content: '';\r\n                    left: -5px;\r\n                    position: absolute;\r\n                    top:-10px;\r\n                    height: 100%;\r\n                    width: 2px;\r\n                    background: white;\r\n                    z-index: 9;\r\n                }\r\n                &:nth-child(1){\r\n                    &:before{\r\n                        content: '';\r\n                        left: -5px;\r\n                        position: absolute;\r\n                        top:-10px;\r\n                        height: 0%;\r\n                        width: 2px;\r\n                        background: white;\r\n                        z-index: 9;\r\n                    }\r\n                }\r\n                li{\r\n                    .folder {\r\n                        text-decoration: none;\r\n                        transition: 0.2s;\r\n                        display: inline-block;\r\n                        -webkit-tap-highlight-color: transparent;\r\n                        outline: none;\r\n                        &:hover{\r\n                            transform: rotate(10deg) scale(1.1);\r\n                        }\r\n                    }\r\n                    cursor: pointer;\r\n                    user-select: none;\r\n                    width: 100%;\r\n                    flex-wrap: nowrap;\r\n                    flex-direction: row;\r\n                    list-style: none;\r\n                    position: relative;\r\n                    z-index: 10;\r\n                    min-height: 20px;\r\n                    transition: 0.5s;\r\n                    white-space: nowrap;\r\n                    &:before{\r\n                        content: '';\r\n                        left: -5px;\r\n                        position: absolute;\r\n                        top:-10px;\r\n                        height: 100%;\r\n                        width: 2px;\r\n                        background: white;\r\n                        z-index: 9;\r\n                    }\r\n                    &:after{\r\n                        content: '';\r\n                        position: absolute;\r\n                        left: -5px;\r\n                        top:9px;\r\n                        height: 2px;\r\n                        width: 5px;\r\n                        background: white;\r\n                        z-index: 9;\r\n                    }\r\n                    &:nth-child(1){\r\n                        &:before{\r\n                            content: '';\r\n                            left: -5px;\r\n                            position: absolute;\r\n                            top:0px;\r\n                            height: calc(100% - 10px);\r\n                            width: 2px;\r\n                            background: white;\r\n                            z-index: 9;\r\n                        }\r\n                    }\r\n\r\n                }\r\n            }\r\n            li > ul{\r\n                height: 0;\r\n                overflow: hidden;\r\n                transform-origin: 0 0;\r\n                transition: 0.5s;\r\n            }\r\n            li.active > ul{\r\n                height: auto;\r\n            }\r\n            li.hiddenBySearch {\r\n                display: none;\r\n            }\r\n\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../src/Injects/repositoryThree/style.scss":
/*!*************************************************!*\
  !*** ../src/Injects/repositoryThree/style.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../src/Injects/repositoryThree/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bootstrap": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("../src/bootstrap.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bootstrap.bundle.js.map