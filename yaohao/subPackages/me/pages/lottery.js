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
                    var i = t[a](o), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "我的摇号",
            enablePullDownRefresh: !0,
            backgroundColor: "#f2f2f2"
        }, n.data = {
            nowTab: 1,
            salesMore: !0,
            lotteryMore: !0,
            myLotteryList: [],
            myCodeList: [],
            idCards: [],
            index: 0,
            haveShow: !1,
            syncTitle: "同步数据",
            updateTime: "",
            syncing: !1
        }, n.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            },
            idCardsPicker: function() {
                return this.idCards.map(function(e) {
                    return e.name;
                });
            }
        }, n.$repeat = {}, n.$props = {
            BackHome: {}
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.methods = {
            bindPickerChange: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return t.index = e.detail.value, r.next = 3, t.methods.loadNext.call(t);

                          case 3:
                            t.$apply();

                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            delMyCodes: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            _index.tip.confirm("确认删除吗?", "提示").then(function() {
                                var r = _asyncToGenerator(regeneratorRuntime.mark(function r(n) {
                                    return regeneratorRuntime.wrap(function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                          case 0:
                                            if (!n) {
                                                r.next = 5;
                                                break;
                                            }
                                            return r.next = 3, _api2.default.delMyCodes(e);

                                          case 3:
                                            t.methods.reload.call(t), t.$apply();

                                          case 5:
                                          case "end":
                                            return r.stop();
                                        }
                                    }, r, t);
                                }));
                                return function(e) {
                                    return r.apply(this, arguments);
                                };
                            }()).catch(function() {});

                          case 1:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            delMyLotteries: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            _index.tip.confirm("确认删除吗？", "提示").then(function() {
                                var r = _asyncToGenerator(regeneratorRuntime.mark(function r(n) {
                                    return regeneratorRuntime.wrap(function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                          case 0:
                                            if (!n) {
                                                r.next = 5;
                                                break;
                                            }
                                            return r.next = 3, _api2.default.delMyLotteries(e);

                                          case 3:
                                            t.methods.reload.call(t), t.$apply();

                                          case 5:
                                          case "end":
                                            return r.stop();
                                        }
                                    }, r, t);
                                }));
                                return function(e) {
                                    return r.apply(this, arguments);
                                };
                            }()).catch(function() {});

                          case 1:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            toggleTab: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return t.nowTab = e, r.next = 3, t.methods.loadNext.call(t);

                          case 3:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (1 != e.nowTab) {
                                t.next = 20;
                                break;
                            }
                            return t.next = 3, _api2.default.getMyIdCards();

                          case 3:
                            if (r = t.sent, r.data && 0 !== r.data.length) {
                                t.next = 11;
                                break;
                            }
                            if (e.haveShow) {
                                t.next = 10;
                                break;
                            }
                            return t.next = 8, _wepy2.default.showModal({
                                title: "请先绑定个人信息",
                                content: "绑定个人信息之后，部分楼盘可以直接获取摇号编码，查询摇号结果更方便",
                                showCancel: !1
                            });

                          case 8:
                            wx.navigateTo({
                                url: "/subPackages/me/pages/bindIDCard"
                            }), e.haveShow = !0;

                          case 10:
                            return t.abrupt("return", !1);

                          case 11:
                            return e.idCards = r.data, t.next = 14, _api2.default.getMyLotteries2({
                                id: e.idCards[e.index].id
                            });

                          case 14:
                            n = t.sent, e.myLotteryList = n.data, e.updateTime = n.time, "1" === String(n.status) ? (e.syncTitle = "同步中...", 
                            e.syncing = !0) : (e.syncTitle = "同步数据", e.syncing = !1), t.next = 24;
                            break;

                          case 20:
                            return t.next = 22, _api2.default.myCodes();

                          case 22:
                            a = t.sent, e.myCodeList = a.data;

                          case 24:
                            e.$apply();

                          case 25:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, e.methods.loadNext.call(e);

                          case 2:
                            e.$apply();

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            syncData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.syncTitle = "同步中...", e.syncing = !0, t.next = 4, _api2.default.syncData({
                                id: e.idCards[e.index].id
                            });

                          case 4:
                            e.$apply();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            showCode: function() {
                wx.previewImage({
                    urls: [ "http://imgcdn.huanjutang.com/qrcode_for_app_banner.jpg" ]
                });
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
                        this.nowTab = t.nowTab ? t.nowTab : 1;

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.methods.reload.call(this);

                      case 2:
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
                        return e.next = 2, this.methods.reload.call(this);

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
        value: function(e) {
            return _index.share.share("我在这里查摇号我的摇号结果，好方便哦");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/lottery"));