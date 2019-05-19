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

function timestampToTime(t) {
    var e = new Date(t);
    return e.getFullYear() + "-" + (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-" + (e.getDate() < 10 ? "0" + e.getDate() : e.getDate());
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var i = e[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, a, i) {
        return a && t(e.prototype, a), i && t(e, i), e;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), Index = function(t) {
    function e() {
        var t, a, i, n;
        _classCallCheck(this, e);
        for (var o = arguments.length, s = Array(o), l = 0; l < o; l++) s[l] = arguments[l];
        return a = i = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(s))), 
        i.config = {
            navigationBarTitleText: "房贷计算"
        }, i.data = {
            type: 2,
            loanRatio: [ {
                text: "三成",
                val: "0.3"
            }, {
                text: "五成",
                val: "0.5"
            }, {
                text: "六成",
                val: "0.6"
            }, {
                text: "七成",
                val: "0.7"
            } ],
            loanRatioIndex: .3,
            firstPayMoney: "",
            inputToatalMoney: "",
            toatalYear: [],
            yearIndex: 0,
            startDay: "",
            firstGetMoneyDay: "",
            loanYear: 30,
            bu_interest: 4.9,
            ac_interest: 3.25,
            bu_multiple: 1,
            ac_multiple: 1,
            bu_interestData: 4.9,
            ac_interestData: 3.25,
            ac_totalMoney: "",
            bu_totalMoney: "",
            loan: ""
        }, i.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, i.$repeat = {}, i.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, i.$events = {}, i.components = {
            BackHome: _BackHome2.default
        }, i.methods = {
            interestRate: function(t, e) {
                "bu" === t ? this.bu_interest = e.detail.value : this.ac_interest = e.detail.value, 
                this.bu_interest && this.bu_multiple && (this.bu_interestData = this.bu_interest * this.bu_multiple), 
                this.ac_interest && this.ac_multiple && (this.ac_interestData = this.ac_interest * this.ac_multiple), 
                this.$apply();
            },
            insterestMultiple: function(t, e) {
                "bu" === t ? this.bu_multiple = e.detail.value : this.ac_multiple = e.detail.value, 
                this.bu_interest && this.bu_multiple && (this.bu_interestData = this.bu_interest * this.bu_multiple), 
                this.ac_interest && this.ac_multiple && (this.ac_interestData = this.ac_interest * this.ac_multiple), 
                this.$apply();
            },
            totalLoan: function(t) {
                this.inputToatalMoney = t.detail.value, this.inputToatalMoney > 0 ? this.calculation() : (this.ac_totalMoney = "", 
                this.bu_totalMoney = "", this.inputToatalMoney = "", this.firstPayMoney = ""), this.$apply();
            },
            toatalmoney: function(t, e) {
                "bu" === t ? this.bu_totalMoney = e.detail.value : "ac" === t && (this.ac_totalMoney = e.detail.value);
            },
            loanTermChange: function(t) {
                var e = t.detail.value;
                this.loanYear = this.toatalYear[e], this.$apply();
            },
            loanTimeChange: function(t) {
                this.firstGetMoneyDay = t.detail.value, this.$apply();
            },
            loanCalculationHandle: function(t) {
                if (this.loanRatioIndex = t, !this.inputToatalMoney) return !1;
                this.calculation(), this.$apply();
            },
            switchBarHandle: function(t) {
                this.bu_interest = 4.9, this.ac_interest = 3.25, this.bu_multiple = 1, this.ac_multiple = 1, 
                this.bu_interestData = 4.9, this.ac_interestData = 3.25, this.type = t, 1 == this.loan ? this.calculation() : (this.ac_totalMoney = "", 
                this.bu_totalMoney = "", this.inputToatalMoney = "", this.firstPayMoney = ""), this.$apply();
            },
            getResultHandle: function() {
                if (!(1 == this.type && this.bu_totalMoney > 0 && this.bu_interestData > 0 || 2 == this.type && this.ac_totalMoney > 0 && this.ac_interestData > 0 || 3 == this.type && this.bu_totalMoney > 0 && this.ac_totalMoney > 0 && this.ac_interestData > 0 && this.bu_interestData > 0)) return _index.tip.toast("请输入价格/利率", "", "none");
                wx.navigateTo({
                    url: "/subPackages/tools/pages/houseLoanResult?type=" + this.type + "&bu_amount=" + 1e4 * parseFloat(this.bu_totalMoney || 0) + "&ac_amount=" + 1e4 * parseFloat(this.ac_totalMoney || 0) + "&month=" + 12 * this.loanYear + "&bu_interest=" + parseFloat(this.bu_interestData) / 100 + "&ac_interest=" + parseFloat(this.ac_interestData) / 100 + "&firstGetMoneyDay=" + this.firstGetMoneyDay + "&firstGetMoneyDay=" + this.firstGetMoneyDay
                });
            }
        }, n = a, _possibleConstructorReturn(i, n);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "calculation",
        value: function() {
            this.firstPayMoney = (this.inputToatalMoney * this.loanRatioIndex).toFixed(0), 2 == this.type ? this.ac_totalMoney = (this.inputToatalMoney - this.firstPayMoney).toFixed(0) : 1 == this.type ? this.bu_totalMoney = (this.inputToatalMoney - this.firstPayMoney).toFixed(0) : (this.ac_totalMoney = "", 
            this.bu_totalMoney = "");
        }
    }, {
        key: "onLoad",
        value: function(t) {
            for (var e = 30; e > 0; e--) this.toatalYear.push(e);
            var a = new Date().getTime();
            this.firstGetMoneyDay = timestampToTime(a), this.inputToatalMoney = t.totalPrice, 
            this.loan = t.loan || "", 1 == this.loan && (this.startDay = this.firstGetMoneyDay), 
            this.inputToatalMoney && (this.firstPayMoney = (.3 * this.inputToatalMoney).toFixed(0), 
            this.ac_totalMoney = (this.inputToatalMoney - this.firstPayMoney).toFixed(0)), this.$apply();
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            return _index.share.share("这个贷款计算器好方便~快来试试吧");
        }
    } ]), e;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/tools/pages/houseLoan"));