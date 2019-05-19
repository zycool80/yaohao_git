var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, s) {
                try {
                    var i = t[a](s), o = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(o).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(o);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var s = arguments.length, i = Array(s), o = 0; o < s; o++) i[o] = arguments[o];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "评价"
        }, n.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, n.$repeat = {}, n.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.data = {
            session_id: 0,
            servicesIndex: 0,
            userinfo: null,
            tags: null,
            startScore: "",
            startScoreColor: "",
            tips: [],
            selectTipArr: [],
            content: "",
            sales_man_id: ""
        }, n.methods = {
            toUrl: function() {
                wx.navigateBack();
            },
            setServiceIndex: function(e) {
                this.servicesIndex = e, this.$apply();
            },
            call: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (!e.userinfo.phone) {
                                t.next = 5;
                                break;
                            }
                            return t.next = 3, _api2.default.getPhoneNum(e.sales_man_id, 1);

                          case 3:
                            r = t.sent, 0 === r.code && wx.showModal({
                                title: "提示",
                                content: "拨通后请说明来自成都摇号助手",
                                success: function(e) {
                                    e.confirm && wx.makePhoneCall({
                                        phoneNumber: r.data.phone
                                    });
                                }
                            });

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            selectTips: function(e) {
                if (0 != this.servicesIndex) {
                    var t = new Set(this.selectTipArr), r = this.tags[this.servicesIndex].value[e];
                    r.isCheck ? t.delete(r.value) : t.add(r.value), r.isCheck = !r.isCheck, this.selectTipArr = [].concat(_toConsumableArray(t)), 
                    this.$apply();
                }
            },
            inputValue: function(e) {
                this.content = e.detail.value, this.$apply();
            },
            submit: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (!(e.content || e.selectTipArr.length > 0 || e.servicesIndex)) {
                                t.next = 7;
                                break;
                            }
                            return t.next = 3, _api2.default.chat.setEvaluate({
                                session_id: e.session_id,
                                num: e.servicesIndex,
                                tags: e.selectTipArr.join(","),
                                comment: e.content
                            });

                          case 3:
                            r = t.sent, "评价成功" === r.data && _index.tip.toast(r.data, function() {
                                wx.navigateBack();
                            }), t.next = 8;
                            break;

                          case 7:
                            return t.abrupt("return", _index.tip.toast("请输入评价", "", "none"));

                          case 8:
                          case 9:
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
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.session_id = t.session_id, this.sales_man_id = t.sales_man_id, e.next = 4, 
                        this.loadData();

                      case 4:
                        this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "loadData",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, a, s, i, o, u, c, l, p, f, h, d, _, v;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.chat.getEvaluate(this.session_id);

                      case 2:
                        t = e.sent, this.userinfo = t.data.sales_man_info, r = t.data.tags, n = [], a = !0, 
                        s = !1, i = void 0, e.prev = 8, o = r[Symbol.iterator]();

                      case 10:
                        if (a = (u = o.next()).done) {
                            e.next = 36;
                            break;
                        }
                        for (c = u.value, l = [], p = !0, f = !1, h = void 0, e.prev = 16, d = c.value[Symbol.iterator](); !(p = (_ = d.next()).done); p = !0) v = _.value, 
                        l.push({
                            isCheck: !1,
                            value: v
                        });
                        e.next = 24;
                        break;

                      case 20:
                        e.prev = 20, e.t0 = e.catch(16), f = !0, h = e.t0;

                      case 24:
                        e.prev = 24, e.prev = 25, !p && d.return && d.return();

                      case 27:
                        if (e.prev = 27, !f) {
                            e.next = 30;
                            break;
                        }
                        throw h;

                      case 30:
                        return e.finish(27);

                      case 31:
                        return e.finish(24);

                      case 32:
                        n.push({
                            color: c.color,
                            value: l,
                            hint: c.hint
                        });

                      case 33:
                        a = !0, e.next = 10;
                        break;

                      case 36:
                        e.next = 42;
                        break;

                      case 38:
                        e.prev = 38, e.t1 = e.catch(8), s = !0, i = e.t1;

                      case 42:
                        e.prev = 42, e.prev = 43, !a && o.return && o.return();

                      case 45:
                        if (e.prev = 45, !s) {
                            e.next = 48;
                            break;
                        }
                        throw i;

                      case 48:
                        return e.finish(45);

                      case 49:
                        return e.finish(42);

                      case 50:
                        this.tags = n, this.$apply();

                      case 52:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 8, 38, 42, 50 ], [ 16, 20, 24, 32 ], [ 25, , 27, 31 ], [ 43, , 45, 49 ] ]);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/evaluate"));