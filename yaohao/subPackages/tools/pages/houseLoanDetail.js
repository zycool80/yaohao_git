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
            function a(n, o) {
                try {
                    var i = t[n](o), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(s);
            }
            return a("next");
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

function timestampToTime(e) {
    var t = new Date(e), r = t.getFullYear(), a = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1, n = [];
    return n.push(r), n.push(a), n;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        a.config = {
            navigationBarTitleText: "贷款计算"
        }, a.data = {
            switchTab: 1,
            list: [],
            total: "",
            firstGetMoneyDay: "",
            startDay: [],
            yearList: [],
            payTotal: ""
        }, a.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, a.$repeat = {}, a.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, a.$events = {}, a.components = {
            BackHome: _BackHome2.default
        }, a.methods = {
            toggleHandle: function(e) {
                this.list[e].toggle = !this.list[e].toggle, e == this.list.length - 1 && this.pageScrollBottom();
            },
            switchBarHandle: function(e) {
                this.switchTab = e;
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a, n, o, i, s, c, u, l, p, f, h, y, v, b, d, m, x, _, g, w, k, T, C, j, S, D, M, B, P, R, q, H, O, L, A, F, G, $, E, I, J, K, N, Q, Y, z, U;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.firstGetMoneyDay = t.firstGetMoneyDay, this.payTotal = 1e4 * t.payTotal, 
                        r = JSON.parse(t.data), e.next = 5, _api2.default.loanConcaction(r);

                      case 5:
                        for (a = e.sent, n = a.data.list, o = [], i = !0, s = !1, c = void 0, e.prev = 11, 
                        u = n[Symbol.iterator](); !(i = (l = u.next()).done); i = !0) p = l.value, f = p.date.substr(0, 4), 
                        o = new Set([].concat(_toConsumableArray(o))), o.add(f);
                        e.next = 19;
                        break;

                      case 15:
                        e.prev = 15, e.t0 = e.catch(11), s = !0, c = e.t0;

                      case 19:
                        e.prev = 19, e.prev = 20, !i && u.return && u.return();

                      case 22:
                        if (e.prev = 22, !s) {
                            e.next = 25;
                            break;
                        }
                        throw c;

                      case 25:
                        return e.finish(22);

                      case 26:
                        return e.finish(19);

                      case 27:
                        for (this.yearList = o, h = !0, y = !1, v = void 0, e.prev = 31, b = this.yearList[Symbol.iterator](); !(h = (d = b.next()).done); h = !0) m = d.value, 
                        this.list.push({
                            time: m,
                            toggle: !1,
                            data: []
                        });
                        e.next = 39;
                        break;

                      case 35:
                        e.prev = 35, e.t1 = e.catch(31), y = !0, v = e.t1;

                      case 39:
                        e.prev = 39, e.prev = 40, !h && b.return && b.return();

                      case 42:
                        if (e.prev = 42, !y) {
                            e.next = 45;
                            break;
                        }
                        throw v;

                      case 45:
                        return e.finish(42);

                      case 46:
                        return e.finish(39);

                      case 47:
                        x = 0, _ = 0, g = !0, w = !1, k = void 0, e.prev = 51, T = this.list[Symbol.iterator]();

                      case 53:
                        if (g = (C = T.next()).done) {
                            e.next = 77;
                            break;
                        }
                        for (j = C.value, S = !0, D = !1, M = void 0, e.prev = 58, B = n[Symbol.iterator](); !(S = (P = B.next()).done); S = !0) R = P.value, 
                        q = R.date.substr(0, 4), j.time == q && (H = R.date.substr(5, 2), x += parseFloat(R.emTotal), 
                        _ = (this.payTotal - x).toFixed(2), _ < 1 && (_ = "0.00"), j.data.push({
                            month: H,
                            payMoney: R.emTotal,
                            payBenjin: R.em,
                            payLx: R.lx,
                            payLast: _
                        }));
                        e.next = 66;
                        break;

                      case 62:
                        e.prev = 62, e.t2 = e.catch(58), D = !0, M = e.t2;

                      case 66:
                        e.prev = 66, e.prev = 67, !S && B.return && B.return();

                      case 69:
                        if (e.prev = 69, !D) {
                            e.next = 72;
                            break;
                        }
                        throw M;

                      case 72:
                        return e.finish(69);

                      case 73:
                        return e.finish(66);

                      case 74:
                        g = !0, e.next = 53;
                        break;

                      case 77:
                        e.next = 83;
                        break;

                      case 79:
                        e.prev = 79, e.t3 = e.catch(51), w = !0, k = e.t3;

                      case 83:
                        e.prev = 83, e.prev = 84, !g && T.return && T.return();

                      case 86:
                        if (e.prev = 86, !w) {
                            e.next = 89;
                            break;
                        }
                        throw k;

                      case 89:
                        return e.finish(86);

                      case 90:
                        return e.finish(83);

                      case 91:
                        O = !0, L = !1, A = void 0, e.prev = 94, F = this.list[Symbol.iterator]();

                      case 96:
                        if (O = (G = F.next()).done) {
                            e.next = 123;
                            break;
                        }
                        for ($ = G.value, E = 0, I = 0, J = !0, K = !1, N = void 0, e.prev = 102, Q = $.data[Symbol.iterator](); !(J = (Y = Q.next()).done); J = !0) z = Y.value, 
                        I += parseFloat(z.payLx), E += parseFloat(z.payMoney);
                        e.next = 110;
                        break;

                      case 106:
                        e.prev = 106, e.t4 = e.catch(102), K = !0, N = e.t4;

                      case 110:
                        e.prev = 110, e.prev = 111, !J && Q.return && Q.return();

                      case 113:
                        if (e.prev = 113, !K) {
                            e.next = 116;
                            break;
                        }
                        throw N;

                      case 116:
                        return e.finish(113);

                      case 117:
                        return e.finish(110);

                      case 118:
                        $.yearTotal = E.toFixed(2), $.yearLxTotal = I.toFixed(2);

                      case 120:
                        O = !0, e.next = 96;
                        break;

                      case 123:
                        e.next = 129;
                        break;

                      case 125:
                        e.prev = 125, e.t5 = e.catch(94), L = !0, A = e.t5;

                      case 129:
                        e.prev = 129, e.prev = 130, !O && F.return && F.return();

                      case 132:
                        if (e.prev = 132, !L) {
                            e.next = 135;
                            break;
                        }
                        throw A;

                      case 135:
                        return e.finish(132);

                      case 136:
                        return e.finish(129);

                      case 137:
                        U = new Date().getTime(), this.startDay = timestampToTime(U), this.$apply();

                      case 140:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 11, 15, 19, 27 ], [ 20, , 22, 26 ], [ 31, 35, 39, 47 ], [ 40, , 42, 46 ], [ 51, 79, 83, 91 ], [ 58, 62, 66, 74 ], [ 67, , 69, 73 ], [ 84, , 86, 90 ], [ 94, 125, 129, 137 ], [ 102, 106, 110, 118 ], [ 111, , 113, 117 ], [ 130, , 132, 136 ] ]);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            return _index.share.share("这个贷款计算器好方便~快来试试吧");
        }
    }, {
        key: "pageScrollBottom",
        value: function() {
            setTimeout(function() {
                try {
                    wx.createSelectorQuery().select("#loanDetail").boundingClientRect(function(e) {
                        wx.pageScrollTo({
                            scrollTop: e && e.height ? e.height : 0,
                            duration: 0
                        });
                    }).exec();
                } catch (e) {}
            }, 100);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/tools/pages/houseLoanDetail"));