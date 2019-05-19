var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, n) {
            function a(r, o) {
                try {
                    var i = e[r](o), s = i.value;
                } catch (t) {
                    return void n(t);
                }
                if (!i.done) return Promise.resolve(s).then(function(t) {
                    a("next", t);
                }, function(t) {
                    a("throw", t);
                });
                t(s);
            }
            return a("next");
        });
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

var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var a = e[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    return function(e, n, a) {
        return n && t(e.prototype, n), a && t(e, a), e;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), globalModel = require("./../../../models/GlobalModel.js"), Index = function(t) {
    function e() {
        var t, n, a, r;
        _classCallCheck(this, e);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return n = a = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(i))), 
        a.config = {
            navigationBarTitleText: "贷款计算"
        }, a.data = {
            repayment_type: 1,
            type: 2,
            bu_amount: 0,
            ac_amount: 0,
            month: 0,
            bu_interest: "",
            ac_interest: "",
            list: [],
            lxTotal: 0,
            year: 0,
            payTotal: 0,
            firstGetMoneyDay: "",
            loantatal: 0,
            viewLxTotal: 0,
            viewPayTotal: 0
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
            toDetailHandle: function() {
                var t = {
                    type: this.type,
                    repayment_type: this.repayment_type,
                    bu_amount: this.bu_amount,
                    ac_amount: this.ac_amount,
                    month: this.month,
                    bu_interest: this.bu_interest,
                    ac_interest: this.ac_interest,
                    start_date: this.firstGetMoneyDay
                };
                wx.navigateTo({
                    url: "/subPackages/tools/pages/houseLoanDetail?data=" + JSON.stringify(t) + "&firstGetMoneyDay=" + this.firstGetMoneyDay + "&payTotal=" + this.payTotal
                });
            },
            switchBarHandle: function(t) {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return e.repayment_type = t, n.next = 3, e.reload();

                          case 3:
                            e.$apply();

                          case 4:
                          case "end":
                            return n.stop();
                        }
                    }, n, e);
                }))();
            }
        }, r = n, _possibleConstructorReturn(a, r);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "reload",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            type: this.type,
                            repayment_type: this.repayment_type,
                            bu_amount: this.bu_amount,
                            ac_amount: this.ac_amount,
                            month: this.month,
                            bu_interest: this.bu_interest,
                            ac_interest: this.ac_interest,
                            start_date: this.firstGetMoneyDay
                        }, wx.showLoading({
                            title: "加载中..."
                        }), t.next = 4, _api2.default.loanConcaction(e);

                      case 4:
                        n = t.sent, 0 == n.code && (this.list = n.data.list, this.lxTotal = parseFloat(n.data.lxTotal) / 1e4, 
                        this.payTotal = parseFloat(this.loantatal) + parseFloat(this.lxTotal), this.viewLxTotal = this.lxTotal.toFixed(2), 
                        this.viewPayTotal = this.payTotal.toFixed(2)), wx.hideLoading(), this.$apply();

                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "onLoad",
        value: function() {
            function t(t) {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return this.type = e.type || 2, "1" !== this.type && (this.ac_amount = e.ac_amount || 0), 
                        "2" !== this.type && (this.bu_amount = e.bu_amount || 0), this.month = e.month || 0, 
                        this.bu_interest = e.bu_interest || 0, this.ac_interest = e.ac_interest || 0, this.firstGetMoneyDay = e.firstGetMoneyDay, 
                        this.loantatal = (parseFloat(this.ac_amount) + parseFloat(this.bu_amount)) / 1e4, 
                        t.next = 10, this.reload();

                      case 10:
                        this.month && (this.year = this.month / 12), this.$apply();

                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            return _index.share.share("这个贷款计算器好方便~快来试试吧");
        }
    } ]), e;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/tools/pages/houseLoanResult"));