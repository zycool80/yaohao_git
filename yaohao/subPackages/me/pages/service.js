var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, a) {
                try {
                    var i = t[o](a), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
            }
            return n("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), Index = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "服务声明",
            enablePullDownRefresh: !1
        }, n.data = {
            comment: "",
            disclaimer: "",
            privacy: "",
            version: ""
        }, n.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, n.$repeat = {}, n.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.methods = {
            upForm: function() {},
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.statemenList();

                          case 2:
                            r = t.sent, e.comment = r.data.comment, e.disclaimer = r.data.disclaimer, e.privacy = r.data.privacy, 
                            e.version = r.data.version, e.$apply();

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.methods.reload.call(this);

                      case 2:
                        this.$apply();

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/service"));