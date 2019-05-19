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
            function n(i, o) {
                try {
                    var a = t[i](o), s = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
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

var _slicedToArray = function() {
    function e(e, t) {
        var r = [], n = !0, i = !1, o = void 0;
        try {
            for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), 
            !t || r.length !== t); n = !0) ;
        } catch (e) {
            i = !0, o = e;
        } finally {
            try {
                !n && s.return && s.return();
            } finally {
                if (i) throw o;
            }
        }
        return r;
    }
    return function(t, r) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), _createClass = function() {
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, n, i;
        _classCallCheck(this, t);
        for (var o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            navigationBarTitleText: "每日早报"
        }, n.data = {
            time: "",
            weather: "",
            month: "",
            prompt: "",
            resData: {},
            lotteries: {},
            show: "",
            regshow: "",
            morning_qr_code: "",
            morning_text: ""
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
        }, n.methods = {
            preview: function(e) {
                wx.previewImage({
                    urls: [ e ]
                });
            }
        }, i = r, _possibleConstructorReturn(n, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getTime",
        value: function() {
            var e = new Date();
            return {
                year: e.getFullYear(),
                month: e.getMonth() + 1,
                day: e.getDate()
            };
        }
    }, {
        key: "getPrompt",
        value: function() {
            var e = parseInt(this.weather.temperature), t = "";
            return e < 5 ? t = "要想身体好，保暖要做好" : e >= 5 && e <= 10 ? t = "天凉就要多穿衣，身体健康靠自己" : e > 10 && (t = "这温度刚刚好，这心情妙妙妙"), 
            t;
        }
    }, {
        key: "getSignTime",
        value: function() {
            var e = this;
            for (var t in this.resData) this.resData[t].forEach(function(t) {
                var r = new Date(t.sign_start_time.replace(/-/g, "/")), n = new Date(t.sign_end_time.replace(/-/g, "/")), i = e.getTimeFormat(r.getMonth() + 1), o = e.getTimeFormat(n.getMonth() + 1), a = e.getTimeFormat(r.getDate()), s = e.getTimeFormat(n.getDate());
                t.time = i + "." + a + "~" + o + "." + s;
            }), this.$apply();
        }
    }, {
        key: "getlotteriesTime",
        value: function() {
            var e = this;
            for (var t in this.lotteries) this.lotteries[t].forEach(function(t) {
                var r = new Date(t.lottery_start_time.replace(/-/g, "/")), n = e.getTimeFormat(r.getMonth() + 1), i = e.getTimeFormat(r.getDate()), o = e.getTimeFormat(r.getHours()), a = e.getTimeFormat(r.getMinutes());
                t.time = "00" == o && "00" == a ? n + "." + i : n + "." + i + " " + o + ":" + a;
            });
            this.$apply();
        }
    }, {
        key: "getTimeFormat",
        value: function(e) {
            return e >= 10 ? e : "0" + e;
        }
    }, {
        key: "onLoad",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, i, o, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.time = this.getTime(), this.month = this.time.month < 10 ? "0" + this.time.month : this.time.month, 
                        e.next = 4, Promise.all([ _api2.default.weather(), _api2.default.regBuilding(), _api2.default.todayLotteries(), globalModel.getGlobalConfig() ]);

                      case 4:
                        t = e.sent, r = _slicedToArray(t, 4), n = r[0], i = r[1], o = r[2], a = r[3], this.morning_qr_code = a.morning_qr_code, 
                        this.morning_text = a.morning_text, this.weather = n.data, i && i.data && (this.resData = i.data), 
                        o && o.data && (this.lotteries = o.data), this.prompt = this.getPrompt(), this.getlotteriesTime(), 
                        this.getSignTime(), this.$apply();

                      case 19:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            return _index.share.share("每日早报，点击查看有没有你关注的盘呢？");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/news/pages/morningPaper"));