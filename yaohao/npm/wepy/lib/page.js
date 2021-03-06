function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, _createClass = function() {
    function t(t, e) {
        for (var r = 0; r < e.length; r++) {
            var o = e[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, r, o) {
        return r && t(e.prototype, r), o && t(e, o), e;
    };
}(), _get = function t(e, r, o) {
    null === e && (e = Function.prototype);
    var n = Object.getOwnPropertyDescriptor(e, r);
    if (void 0 === n) {
        var a = Object.getPrototypeOf(e);
        return null === a ? void 0 : t(a, r, o);
    }
    if ("value" in n) return n.value;
    var i = n.get;
    if (void 0 !== i) return i.call(o);
}, _native = require("./native.js"), _native2 = _interopRequireDefault(_native), _component2 = require("./component.js"), _component3 = _interopRequireDefault(_component2), _util = require("./util.js"), _util2 = _interopRequireDefault(_util), _class = function(t) {
    function e() {
        var t, r, o, n;
        _classCallCheck(this, e);
        for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
        return r = o = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(i))), 
        o.$isComponent = !1, o.$preloadData = void 0, o.$prefetchData = void 0, n = r, _possibleConstructorReturn(o, n);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "$init",
        value: function(t, r) {
            this.$parent = r, this.$root = this, r.$wxapp || (r.$wxapp = getApp()), this.$wxapp = r.$wxapp, 
            _get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "$init", this).call(this, t, this);
        }
    }, {
        key: "onLoad",
        value: function() {
            _get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onLoad", this).call(this);
        }
    }, {
        key: "onUnload",
        value: function() {
            _get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onUnload", this).call(this);
        }
    }, {
        key: "$preload",
        value: function(t, e) {
            if ("object" === (void 0 === t ? "undefined" : _typeof(t))) {
                var r = void 0;
                for (r in t) this.$preload(r, t[r]);
            } else (this.$preloadData ? this.$preloadData : this.$preloadData = {})[t] = e;
        }
    }, {
        key: "$route",
        value: function(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if ("string" == typeof e) {
                var o = e + "?";
                if (r) {
                    var n = void 0;
                    for (n in r) o += n + "=" + r[n] + "&";
                }
                o = o.substring(0, o.length - 1), e = {
                    url: o
                };
            } else r = _util2.default.$getParams(e.url);
            this.$parent.__route__ || (this.$parent.__route__ = getCurrentPages()[0].__route__, 
            this.$parent.__wxWebviewId__ = getCurrentPages()[0].__wxWebviewId__);
            var a = "/" !== this.$parent.__route__[0] ? "/" + this.$parent.__route__ : this.$parent.__route__, i = _util2.default.$resolvePath(a, e.url.split("?")[0]), u = this.$parent.$pages[i];
            if (u && u.onPrefetch) {
                var l = this.$parent.__prevPage__, p = void 0;
                l && l.$preloadData && (p = l.$preloadData), u.$prefetchData = u.onPrefetch(r, {
                    from: this,
                    preload: p
                });
            }
            return _native2.default[t](e);
        }
    }, {
        key: "$redirect",
        value: function(t, e) {
            return this.$route("redirectTo", t, e);
        }
    }, {
        key: "$navigate",
        value: function(t, e) {
            return this.$route("navigateTo", t, e);
        }
    }, {
        key: "$switch",
        value: function(t) {
            return "string" == typeof t && (t = {
                url: t
            }), _native2.default.switchTab(t);
        }
    }, {
        key: "$back",
        value: function(t) {
            var e = t || {};
            return "number" == typeof e && (e = {
                delta: e
            }), e.delta || (e.delta = 1), _native2.default.navigateBack(e);
        }
    } ]), e;
}(_component3.default);

exports.default = _class;