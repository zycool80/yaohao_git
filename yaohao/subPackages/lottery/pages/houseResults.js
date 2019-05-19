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
                    var i = t[o](a), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), _ = _index.underscore, globalModel = require("./../../../models/GlobalModel.js"), Lottery = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "选房详情",
            navigationBarBackgroundColor: "#3772cc",
            enablePullDownRefresh: !0
        }, n.data = {
            id: null,
            item: {},
            banner: "/images/banner.png",
            myCodes: [],
            userInfo: {},
            typeTexts: {
                1: "普通",
                2: "棚改",
                3: "刚需"
            },
            code: "",
            type: 0,
            title: "",
            shareTitle: ""
        }, n.computed = {
            cover: function() {
                return this.item.id ? this.item.cover ? this.item.cover : "/images/placeholder.gif" : "";
            },
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, n.$repeat = {}, n.$props = {
            BackHome: {}
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.methods = {
            showCode: function() {
                wx.previewImage({
                    urls: [ "http://imgcdn.huanjutang.com/yhzs_qrcode.jpg" ]
                });
            },
            submit: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _wepy2.default.showModal({
                                content: "么么哒~我们会尽快完善此数据 :-)",
                                showCancel: !1
                            });

                          case 2:
                            e.$apply();

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            showType: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _wepy2.default.showActionSheet({
                                itemList: [ "普通摇号结果", "棚改摇号结果" ]
                            });

                          case 2:
                            r = e.sent;

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, t, e);
                }))();
            },
            getUserInfo: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n, o;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            n = t.userInfo = _index.cache.get("userinfo"), o = e.detail.userInfo, o && (n = _.defaults(n, o), 
                            t.userInfo = n, _api2.default.updateUserInfo(o)), t.$apply();

                          case 3:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            reloadData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), t.next = 3, _api2.default.chooseRoomResultInfo(e.id);

                          case 3:
                            r = t.sent, e.item = r.data, e.myCodes = e.item.myCodes, e.item.overview ? e.shareTitle = "恭喜您，小主摇中了【" + e.item.name + "】第" + e.item.overview2 + "号，共" + e.item.overview3 + "套房" : e.shareTitle = "【" + e.title + "】暂时未查到小主人的选房结果", 
                            wx.stopPullDownRefresh(), e.$apply(), wx.hideLoading();

                          case 10:
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
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.userInfo = _index.cache.get("userinfo"), this.id = t.id, this.code = t.code, 
                        this.type = t.type, this.title = t.title, e.next = 7, this.methods.reloadData.call(this);

                      case 7:
                        this.$apply();

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onPullDownRefresh",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.methods.reloadData.call(this);

                      case 2:
                        wx.stopPullDownRefresh(), this.$apply();

                      case 4:
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
            return this.item.overview ? _index.share.share("恭喜您，小主摇中了【" + this.item.name + "】第" + this.item.overview2 + "号，共" + this.item.overview3 + "套房") : _index.share.share("【" + this.title + "】暂时未查到小主人的选房结果");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Lottery, "subPackages/lottery/pages/houseResults"));