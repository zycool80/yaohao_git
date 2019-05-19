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
            function a(n, o) {
                try {
                    var s = t[n](o), i = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(i);
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
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        a.config = {
            navigationBarTitleText: "签到厅",
            navigationBarBackgroundColor: "#3772cc"
        }, a.data = {
            type: "",
            grades: "",
            userInfo: null,
            days: "",
            allDays: "",
            formID: !1,
            signStatus: "",
            isShow: !1,
            item: 0,
            color: "blue-color",
            color1: "blue-color",
            status: "",
            addPoint: "",
            needPoint: "",
            imgLists: [],
            defaultAvatar: "/images/default_sales_man_avatar.png",
            shareProgress: 0,
            commentProgress: 0,
            signExplainPath: "",
            pointExplainPath: "",
            banners: "",
            touch: 0,
            shareProcessLen: 15,
            commentProcessLen: 15
        }, a.$repeat = {}, a.$props = {
            BackHome: {}
        }, a.$events = {}, a.components = {
            BackHome: _BackHome2.default
        }, a.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, a.methods = {
            share: function() {
                wx.switchTab({
                    url: "/pages/index"
                });
            },
            toUrl: function(e) {
                this.touch = e, this.isShow = !1, wx.switchTab({
                    url: "/pages/index"
                });
            },
            close: function() {
                this.isShow = !1;
            },
            signBtn: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中"
                            }), t.next = 3, _api2.default.signIn();

                          case 3:
                            if (r = t.sent, wx.hideLoading(), 1 == r.data.code) {
                                t.next = 16;
                                break;
                            }
                            return e.status = r.data.data.signStatus, e.days = r.data.data.days, e.allDays = r.data.data.allDay, 
                            e.grades = r.data.data.points, e.addPoint = r.data.data.addPoint, e.isShow = !0, 
                            e.$apply(), t.abrupt("return", wx.showToast({
                                title: r.data.data.prompt,
                                icon: "none",
                                mask: !0,
                                duration: 1e3
                            }));

                          case 16:
                            return e.$apply(), t.abrupt("return", wx.showToast({
                                title: r.data.message,
                                icon: "none",
                                mask: !0,
                                duration: 1e3
                            }));

                          case 18:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            preview: function(e, t) {
                var r = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var a, n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            a = e, n = [ a ], a && n.length > 0 && wx.previewImage({
                                current: a,
                                urls: n
                            });

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t, r);
                }))();
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.userInfo = _index.cache.get("userinfo") || {}, e.next = 3, globalModel.getGlobalConfig();

                      case 3:
                        return t = e.sent, this.banners = t.banners, e.next = 7, _api2.default.signInStatus();

                      case 7:
                        r = e.sent, 0 == r.code && (this.status = r.data.signStatus, this.days = r.data.days, 
                        this.allDays = r.data.allDay, this.grades = r.data.points, this.addPoint = r.data.addPoint, 
                        this.shareProgress = r.data.shareProgress, this.commentProgress = r.data.commentProgress, 
                        this.shareProcessLen = 460 * parseInt(this.shareProgress), this.commentProcessLen = 460 / 3 * parseInt(this.commentProgress), 
                        this.signExplainPath = r.data.signExplainPath, this.pointExplainPath = r.data.pointExplainPath, 
                        1 == this.shareProgress && (this.color = "gray-color"), 3 == this.commentProgress && (this.color1 = "gray-color"), 
                        this.imgLists = r.data.exchange), this.$apply();

                      case 10:
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
            return _index.share.share("在这里可以签到赚幸运豆");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/signIn"));