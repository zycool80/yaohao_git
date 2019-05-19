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
            function n(a, o) {
                try {
                    var i = t[a](o), s = i.value;
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "我的审核",
            enablePullDownRefresh: !0
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
        }, n.data = {
            items: [],
            more: !0,
            page: 1,
            footerText: "",
            wechat_qrcode: "",
            weapp: "",
            down_toggle: !0,
            status_toggle: !0,
            item: {},
            changetype: !1,
            salesman_id: "",
            nowApply: !1
        }, n.methods = {
            toggle: function(e) {
                1 == e ? this.down_toggle = !this.down_toggle : this.status_toggle = !this.status_toggle;
            },
            service: function() {},
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), e.items = [], e.more = !0, e.page = 1, t.next = 6, e.methods.loadNext.call(e);

                          case 6:
                            wx.stopPullDownRefresh(), e.$apply(), wx.hideLoading();

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.myAuditing(e.page, e.salesman_id);

                          case 2:
                            r = t.sent, e.page >= r.data.last_page || !r.data.last_page ? e.more = !1 : e.page++, 
                            e.items = [].concat(_toConsumableArray(e.items), _toConsumableArray(r.data.data)), 
                            e.footerText = r.data.text, e.wechat_qrcode = r.data.wechat_qrcode, e.$apply();

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            saveQrCode: function() {
                wx.showLoading({
                    title: "加载中..."
                }), wx.downloadFile({
                    url: this.wechat_qrcode,
                    success: function(e) {
                        var t = e.tempFilePath;
                        wx.saveImageToPhotosAlbum({
                            filePath: t,
                            success: function() {
                                _index.tip.success("保存成功");
                            },
                            complete: function() {
                                wx.hideLoading();
                            }
                        });
                    },
                    complete: function() {
                        wx.hideLoading();
                    }
                });
            },
            deleteAuditing: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return r.next = 2, _api2.default.delSalesMan(e);

                          case 2:
                            n = r.sent, 0 == n.code && _index.tip.toast("删除成功", _asyncToGenerator(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, t.methods.reload.call(t);

                                      case 2:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, t);
                            })));

                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
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
                        return 99 == t.type ? (this.changetype = !0, this.nowApply = !0) : (r = wx.getStorageSync("exchange")) && (r.commutation_data = JSON.parse(r.commutation_data), 
                        r.primeval_data = JSON.parse(r.primeval_data), this.item = r, this.changetype = !0, 
                        wx.removeStorageSync("exchange")), this.salesman_id = t.salesman_id, e.next = 4, 
                        this.methods.reload.call(this);

                      case 4:
                        n = _index.cache.get("userinfo") || {}, n && (this.weapp = '{"nickName": "' + n.nickName + '", "city": "' + n.city + '"}'), 
                        this.$apply();

                      case 7:
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
                        return e.abrupt("return", !1);

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
        value: function() {
            return _index.share.share("我在这里查看我入驻的楼盘，好方便哦");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/saleManStatus"));