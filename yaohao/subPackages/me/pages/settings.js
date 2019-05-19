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
            function n(a, o) {
                try {
                    var s = t[a](o), i = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
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

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _createClass = function() {
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            navigationBarTitleText: "设置",
            enablePullDownRefresh: !1
        }, n.data = {
            settingsList: [],
            isToggle: !1,
            keys: []
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
            mydetails: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _api2.default.isSaleMan();

                          case 2:
                            r = e.sent, n = r.sales_man_id || "", n ? wx.navigateTo({
                                url: "/subPackages/me/pages/personInfo?id=" + n
                            }) : wx.navigateTo({
                                url: "/subPackages/me/pages/editAvatar"
                            });

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, t, e);
                }))();
            },
            switchChange: function(e, t, r) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var a, o, s, i, u, c, l, p, f;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            for (a = {}, o = [], s = !0, i = !1, u = void 0, r.prev = 4, c = n.keys[Symbol.iterator](); !(s = (l = c.next()).done); s = !0) p = l.value, 
                            a[p.key] = p.val;
                            r.next = 12;
                            break;

                          case 8:
                            r.prev = 8, r.t0 = r.catch(4), i = !0, u = r.t0;

                          case 12:
                            r.prev = 12, r.prev = 13, !s && c.return && c.return();

                          case 15:
                            if (r.prev = 15, !i) {
                                r.next = 18;
                                break;
                            }
                            throw u;

                          case 18:
                            return r.finish(15);

                          case 19:
                            return r.finish(12);

                          case 20:
                            return o = t.toString() ? n.settingsList[e].status[t] : n.settingsList[e], f = o.field, 
                            a[f] = o.status = 1 == o.status ? "2" : "1", r.next = 25, _api2.default.changeSettings(a);

                          case 25:
                            n.$apply(), n.keys = n.getKeysWithArr(n.settingsList);

                          case 27:
                          case "end":
                            return r.stop();
                        }
                    }, r, n, [ [ 4, 8, 12, 20 ], [ 13, , 15, 19 ] ]);
                }))();
            },
            isToggle: function(e, t) {
                1 != t && 2 != t && (this.isToggle = !this.isToggle);
            },
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.settings();

                          case 2:
                            r = t.sent, e.settingsList = r.data, r.data && (e.keys = e.getKeysWithArr(r.data)), 
                            e.$apply();

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.methods.reload.call(this);
        }
    }, {
        key: "getKeysWithArr",
        value: function(e) {
            var t = [], r = !0, n = !1, a = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                    var i = o.value;
                    if ("object" === _typeof(i.status) && null !== i.status) {
                        var u = this.getKeysWithArr(i.status);
                        t = t.concat(u);
                    } else t.push({
                        key: i.field,
                        val: i.status
                    });
                }
            } catch (e) {
                n = !0, a = e;
            } finally {
                try {
                    !r && s.return && s.return();
                } finally {
                    if (n) throw a;
                }
            }
            return t;
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/settings"));