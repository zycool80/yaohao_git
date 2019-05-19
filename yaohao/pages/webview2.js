var regeneratorRuntime = require("../npm/regenerator-runtime/runtime.js");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(i, o) {
                try {
                    var u = t[i](o), a = u.value;
                } catch (e) {
                    return void r(e);
                }
                if (!u.done) return Promise.resolve(a).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(a);
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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _util = require("./../utils/util.js"), _util2 = _interopRequireDefault(_util), _urijs = require("./../npm/urijs/src/URI.js"), _urijs2 = _interopRequireDefault(_urijs), _index = require("./../utils/utilsKit/index.js"), Lottery = function(e) {
    function t() {
        var e, r, n, i;
        _classCallCheck(this, t);
        for (var o = arguments.length, u = Array(o), a = 0; a < o; a++) u[a] = arguments[a];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
        n.config = {
            navigationBarTitleText: "成都摇号助手",
            enablePullDownRefresh: !0
        }, n.data = {
            title: "",
            id: null,
            url: "",
            redirect: ""
        }, i = r, _possibleConstructorReturn(n, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.id = t.id, t.redirect && (this.redirect = t.redirect, r = decodeURIComponent(t.redirect), 
                        n = (0, _urijs2.default)(r), i = _index.cache.get("userinfo") || {}, n.setSearch("open_id", i.openId), 
                        this.url = n.toString()), this.$apply();

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function(e) {
            var t = e.webViewUrl, r = (0, _urijs2.default)(decodeURIComponent(t)).search(!0), n = r.title || "成都摇号助手", i = "/pages/index?redirect=" + encodeURIComponent(_util2.default.webview2Url(t));
            return _index.share.share(n, i);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Lottery, "pages/webview2"));