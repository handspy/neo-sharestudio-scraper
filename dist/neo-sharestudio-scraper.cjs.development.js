'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = require('axios');
var axios__default = _interopDefault(axios);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelperLoose(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function () {
      return o >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[o++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var NEO_METADATA_FETCH_URL = 'https://neonotes2-d0880.firebaseio.com';
var NEOINK_DATA_FETCH_URL = 'https://firebasestorage.googleapis.com/v0/b/neonotes2-d0880.appspot.com/o';

function getDots(
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
data, dotCount, time, scale) {
  if (scale === void 0) {
    scale = 1;
  }
  var dotBlob;
  if (typeof data === 'string') {
    var binaryString = atob(data);
    var len = binaryString.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    dotBlob = bytes;
  } else {
    dotBlob = data.toUint8Array();
  }
  var dots = [];
  var dotSize = dotBlob.length / dotCount; // 16 or 17
  var shiftDot = 0;
  if (!(dotSize === 16 || dotSize === 17)) {
    console.log('invalid dot', dotBlob.length, dotSize);
    return;
  }
  if (dotSize === 17) {
    shiftDot = 1;
  }
  var dotTime = time;
  for (var _i = 0; _i < dotCount; _i++) {
    var st = _i * dotSize;
    var end = st + dotSize;
    var d = dotBlob.slice(st, end);
    var deltaTime = d[0];
    var force = toFloat(d, 1 + shiftDot);
    var x = toFloat(d, 5 + shiftDot) * scale;
    var y = toFloat(d, 9 + shiftDot) * scale;
    dotTime += deltaTime;
    var dot = {
      deltaTime: deltaTime,
      time: dotTime,
      f: force,
      x: x,
      y: y
    };
    dots.push(dot);
  }
  invalidDotsCheck(dots);
  return dots;
}
function invalidDotsCheck(dots) {
  for (var _iterator = _createForOfIteratorHelperLoose(dots), _step; !(_step = _iterator()).done;) {
    var d = _step.value;
    if (d.f < 0 || d.f > 1) {
      console.log('Invalid Dot f', dots);
      return;
    }
    if (d.x < 0 || d.x > 200) {
      console.log('Invalid Dot x', dots);
      return;
    }
    if (d.y < 0 || d.y > 200) {
      console.log('Invalid Dot y', dots);
      return;
    }
  }
}
function toFloat(d, index) {
  var _byte = d.slice(index, index + 4);
  var view = new DataView(_byte.buffer);
  return view.getFloat32(0, true);
}

var fetchNeoInkItems = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(id) {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axios__default.get(NEOINK_DATA_FETCH_URL, {
            params: {
              prefix: "sharestudio/" + id + "/",
              delimiter: '/'
            }
          });
        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data.items);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          if (axios.isCancel(_context.t0)) {
            console.log('Request canceled', _context.t0.message);
          } else {
            console.error('Error', _context.t0);
          }
          return _context.abrupt("return", []);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function fetchNeoInkItems(_x) {
    return _ref.apply(this, arguments);
  };
}();
var fetchNeoInkItemData = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(item) {
    var response, _iterator, _step, stroke;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return axios__default.get(NEOINK_DATA_FETCH_URL + "/" + encodeURIComponent(item.name), {
            params: {
              alt: 'media'
            }
          });
        case 3:
          response = _context2.sent;
          for (_iterator = _createForOfIteratorHelperLoose(response.data.strokes); !(_step = _iterator()).done;) {
            stroke = _step.value;
            stroke.dots = getDots(stroke.data, stroke.dotCount, stroke.startTime);
          }
          return _context2.abrupt("return", response.data);
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          if (axios.isCancel(_context2.t0)) {
            console.log('Request canceled', _context2.t0.message);
          } else {
            console.error('Error', _context2.t0);
          }
        case 11:
          return _context2.abrupt("return", null);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function fetchNeoInkItemData(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var fetchNeoNoteSize = /*#__PURE__*/function () {
  var _ref3 = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(itemData) {
    var url, defaultRect, response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          url = "page/" + itemData.section + "/" + itemData.owner + "/" + itemData.bookCode + "/0.json";
          defaultRect = {
            height: 118,
            width: 91,
            x: 5,
            y: 5
          };
          _context3.prev = 2;
          _context3.next = 5;
          return axios__default.get(NEO_METADATA_FETCH_URL + "/" + url);
        case 5:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](2);
          if (axios.isCancel(_context3.t0)) {
            console.log('Request canceled', _context3.t0.message);
          } else {
            console.error('Error', _context3.t0);
          }
          return _context3.abrupt("return", defaultRect);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return function fetchNeoNoteSize(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var fetchNeoPages = /*#__PURE__*/function () {
  var _ref4 = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
    var items, pages, _iterator2, _step2, item, data, size, page, _iterator3, _step3, stroke;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return fetchNeoInkItems(id);
        case 2:
          items = _context4.sent;
          pages = [];
          _iterator2 = _createForOfIteratorHelperLoose(items);
        case 5:
          if ((_step2 = _iterator2()).done) {
            _context4.next = 20;
            break;
          }
          item = _step2.value;
          _context4.next = 9;
          return fetchNeoInkItemData(item);
        case 9:
          data = _context4.sent;
          if (data) {
            _context4.next = 12;
            break;
          }
          return _context4.abrupt("continue", 18);
        case 12:
          _context4.next = 14;
          return fetchNeoNoteSize(data);
        case 14:
          size = _context4.sent;
          page = {
            width: size.width,
            height: size.height,
            metadata: {
              section: data.section,
              owner: data.owner,
              bookCode: data.bookCode,
              pageNumber: data.pageNumber
            },
            strokes: []
          };
          for (_iterator3 = _createForOfIteratorHelperLoose(data.strokes); !(_step3 = _iterator3()).done;) {
            stroke = _step3.value;
            page.strokes.push({
              startTime: stroke.startTime,
              endTime: stroke.dots.sort(function (a, b) {
                return a.time - b.time;
              })[stroke.dots.length - 1].time,
              dots: stroke.dots.map(function (dot) {
                return {
                  timestamp: dot.time,
                  pressure: dot.f,
                  x: dot.x,
                  y: dot.y
                };
              })
            });
          }
          pages.push(page);
        case 18:
          _context4.next = 5;
          break;
        case 20:
          return _context4.abrupt("return", pages);
        case 21:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function fetchNeoPages(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.fetchNeoInkItemData = fetchNeoInkItemData;
exports.fetchNeoInkItems = fetchNeoInkItems;
exports.fetchNeoNoteSize = fetchNeoNoteSize;
exports.fetchNeoPages = fetchNeoPages;
//# sourceMappingURL=neo-sharestudio-scraper.cjs.development.js.map
