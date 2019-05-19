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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _urijs = require("./../../../npm/urijs/src/URI.js"), _urijs2 = _interopRequireDefault(_urijs), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "复核名单",
            navigationBarBackgroundColor: "#3772cc",
            enablePullDownRefresh: !0
        }, n.data = {
            inputVal: "",
            lottery_id: 0,
            lottery_name: "",
            more: !0,
            page: 1,
            items: []
        }, n.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, n.$repeat = {}, n.$props = {
            BackHome: {}
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.methods = {
            clearInput: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.inputVal = "", t.next = 3, e.methods.reload.call(e);

                          case 3:
                            e.$apply();

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            inputTyping: function(e) {
                this.inputVal = e.detail.value;
            },
            doSearch: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e.inputVal) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请输入关键字", "", "none"));

                          case 2:
                            return t.next = 4, e.methods.reload.call(e);

                          case 4:
                            e.$apply();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            addBuyers: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            wx.showModal({
                                title: "提示",
                                content: "是否将此编码添加到我的编码中？后续可以查看此摇号结果",
                                success: function(t) {
                                    var r = this;
                                    return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                                        var a;
                                        return regeneratorRuntime.wrap(function(r) {
                                            for (;;) switch (r.prev = r.next) {
                                              case 0:
                                                if (!t.confirm) {
                                                    r.next = 5;
                                                    break;
                                                }
                                                return r.next = 3, _api2.default.bindBuyers({
                                                    code: e.code,
                                                    lottery_id: e.lottery_id,
                                                    reg_num: e.reg_num,
                                                    name: e.name.join(",")
                                                });

                                              case 3:
                                                a = r.sent, "0" == a.code && _index.tip.toast("添加成功");

                                              case 5:
                                              case "end":
                                                return r.stop();
                                            }
                                        }, n, r);
                                    }))();
                                }
                            });

                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, r, t);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getBuyersList(e.inputVal, e.lottery_id, "", e.page);

                          case 2:
                            r = t.sent, e.page >= r.data.last_page || !r.data.last_page ? e.more = !1 : e.page++, 
                            e.items = e.items.concat(r.data.data), e.$apply();

                          case 6:
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
                            return wx.showLoading({
                                title: "加载中..."
                            }), e.more = !0, e.page = 1, e.items = [], t.next = 6, e.methods.loadNext.call(e);

                          case 6:
                            wx.stopPullDownRefresh(), e.$apply(), wx.hideLoading();

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
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t.q ? (r = (0, _urijs2.default)(decodeURIComponent(t.q)), n = r.search(!0), 
                        this.lottery_id = n.id, this.lottery_name = n.name || "") : (this.lottery_id = t.lottery_id, 
                        this.lottery_name = decodeURIComponent(t.lottery_name)), e.next = 3, this.methods.reload.call(this);

                      case 3:
                        this.$apply();

                      case 4:
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
        key: "onReachBottom",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.more) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        return e.next = 4, this.methods.loadNext.call(this);

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
        key: "onShareAppMessage",
        value: function(e) {
            return _index.share.share("快来看【" + this.lottery_name + "】的复核名单，全都在这儿");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/buyers"));