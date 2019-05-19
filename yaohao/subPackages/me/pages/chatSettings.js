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
            function r(a, o) {
                try {
                    var s = t[a](o), i = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
            }
            return r("next");
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
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationBarTitleText: "设置"
        }, r.data = {
            avatar: "/images/default_sales_man_avatar.png",
            session_id: null,
            hideReport: !1,
            userInfo: {},
            reason: [],
            sales_man_id: ""
        }, r.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.methods = {
            stopMove: function() {
                if (this.hideReport) return !1;
            },
            toUrl: function() {
                wx.navigateTo({
                    url: "/pages/lotterrDetail?id={{ this.userInfo }}"
                });
            },
            showReportModal: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r, a, o, s;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return n = "2" === e.userInfo.is_broker ? 1 : 2, t.next = 3, _api2.default.postFeedbackType(n);

                          case 3:
                            r = t.sent, a = r.data;
                            for (o in a) e.reason.push({
                                id: o,
                                text: a[o]
                            });
                            for (s in e.reason) "其他" == e.reason[s].text && (e.reason.push(e.reason[s]), e.reason.splice(s, 1));
                            e.hideReport = !0, e.$apply();

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            cancelReportModal: function() {
                this.hideReport = !1, this.$apply();
            },
            deleteContact: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            wx.showModal({
                                content: "你确认删除此联系人吗？",
                                success: function() {
                                    var t = _asyncToGenerator(regeneratorRuntime.mark(function t(n) {
                                        var r;
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                              case 0:
                                                if (!n.confirm) {
                                                    t.next = 5;
                                                    break;
                                                }
                                                return t.next = 3, _api2.default.chat.deleteContact(e.session_id);

                                              case 3:
                                                r = t.sent, "0" == r.code ? (_index.tip.toast("删除成功"), wx.navigateBack({
                                                    delta: 2
                                                })) : _index.tip.toast("删除失败");

                                              case 5:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t, e);
                                    }));
                                    return function(e) {
                                        return t.apply(this, arguments);
                                    };
                                }()
                            }), e.$apply();

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            switchChangeFollow: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _api2.default.attentionUser(t.session_id);

                          case 2:
                            n = e.sent, "关注成功" === n.message ? t.userInfo.is_follow = 1 : t.userInfo.is_follow = 0, 
                            t.$apply();

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            switchChangeBlacklist: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return r = e.detail.value, n.next = 3, _api2.default.chat.addToBlacklist({
                                link_id: t.session_id,
                                is_blacklist: r
                            });

                          case 3:
                            a = n.sent, "拉黑成功" === a.message ? t.userInfo.is_blacklist = !0 : t.userInfo.is_blacklist = !1, 
                            t.$apply();

                          case 6:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.session_id = t.session_id, this.sales_man_id = t.sales_man_id, e.next = 4, 
                        _api2.default.chat.settingGetUserInfo(this.session_id);

                      case 4:
                        n = e.sent, this.userInfo = n.data, this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/chatSettings"));