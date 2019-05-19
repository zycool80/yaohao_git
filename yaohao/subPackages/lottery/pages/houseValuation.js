var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function o(r, i) {
                try {
                    var a = t[r](i), u = a.value;
                } catch (e) {
                    return void n(e);
                }
                if (!a.done) return Promise.resolve(u).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(u);
            }
            return o("next");
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
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _index = require("./../../../utils/utilsKit/index.js"), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        o.config = {
            navigationBarTitleText: "房产估价",
            navigationBarBackgroundColor: "#3772cc"
        }, o.data = {
            getValue: "",
            type: !1,
            foot_type: !1,
            community: [],
            conmunity_id: ""
        }, o.$repeat = {}, o.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, o.$events = {}, o.components = {
            BackHome: _BackHome2.default
        }, o.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, o.methods = {
            guess_price: function() {
                var e = {
                    name: this.getValue,
                    id: this.conmunity_id
                };
                this.getValue ? (wx.setStorageSync("community_name", e), wx.navigateTo({
                    url: "/subPackages/lottery/pages/addDetailsPrice"
                })) : wx.showToast({
                    title: "不能为空",
                    duration: 1e3,
                    icon: "none"
                });
            },
            getItem: function(e) {
                this.getValue = e.resblock_name, this.conmunity_id = e.resblock_id, this.foot_type = !1;
            },
            type_on: function() {
                this.type = !0;
            },
            type_under: function() {
                this.type = !1;
            },
            delete_value: function() {
                this.getValue = "", this.foot_type = !1;
            },
            inputTyping: function(e) {
                var t = this;
                this.getValue = e.detail.value, this.getValue ? (_api2.default.findCommunity(this.getValue).then(function(e) {
                    t.community = e.data.data.list, t.$apply();
                }), this.foot_type = !0) : this.foot_type = !1;
            }
        }, r = n, _possibleConstructorReturn(o, r);
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
            return _index.share.share("查一查你的房子值多少钱");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/houseValuation"));