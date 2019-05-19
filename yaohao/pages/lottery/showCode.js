var regeneratorRuntime = require("../../npm/regenerator-runtime/runtime.js");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, i) {
                try {
                    var s = t[a](i), o = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(o);
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

var _slicedToArray = function() {
    function e(e, t) {
        var n = [], r = !0, a = !1, i = void 0;
        try {
            for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (n.push(s.value), 
            !t || n.length !== t); r = !0) ;
        } catch (e) {
            a = !0, i = e;
        } finally {
            try {
                !r && o.return && o.return();
            } finally {
                if (a) throw i;
            }
        }
        return n;
    }
    return function(t, n) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), _createClass = function() {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../utils/utilsKit/index.js"), _ = _index.underscore, globalModel = require("./../../models/GlobalModel.js"), Lottery = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationBarTitleText: "摇号结果详情",
            enablePullDownRefresh: !0
        }, r.data = {
            title: "",
            id: null,
            item: {},
            banner: "/images/banner.png",
            myCodes: [],
            userInfo: {},
            code: "",
            type: 0,
            shareTitle: "",
            drawCanvas: !1,
            canvasWidth: 0,
            canvasHeight: 0,
            project_name: ""
        }, r.computed = {
            cover: function() {
                return this.item.id ? this.item.cover ? this.item.cover : "/images/placeholder.gif" : "";
            },
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {}
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.methods = {
            reloadData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (wx.showLoading({
                                title: "加载中..."
                            }), e.id) {
                                t.next = 3;
                                break;
                            }
                            return t.abrupt("return");

                          case 3:
                            return t.next = 5, _api2.default.getLotteryCodeDetail(e.id || "", e.code, e.type);

                          case 5:
                            n = t.sent, e.item = n.data, e.project_name = e.item.lottery_name, e.myCodes = e.item.myCodes, 
                            wx.stopPullDownRefresh(), e.$apply(), wx.hideLoading();

                          case 12:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            showCode: function() {
                wx.previewImage({
                    urls: [ this.item.qr_code ]
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
                    var n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _wepy2.default.showActionSheet({
                                itemList: [ "普通摇号结果", "棚改摇号结果" ]
                            });

                          case 2:
                            n = e.sent;

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, t, e);
                }))();
            },
            getUserInfo: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            r = t.userInfo = _index.cache.get("userinfo"), a = e.detail.userInfo, a && (r = _.defaults(r, a), 
                            t.userInfo = r, _api2.default.updateUserInfo(a)), t.$apply();

                          case 3:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            closeCanvas: function() {
                this.drawCanvas = !1;
            },
            shareTo: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.drawCanvas = !0, t.next = 3, e.drawImage().catch(function(t) {
                                e.drawCanvas = !1, wx.hideLoading(), _index.tip.toast("生成图片失败", "", "none"), e.$apply();
                            });

                          case 3:
                            e.$apply();

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            saveShareImage: function() {
                var e = this;
                return this.drawCanvas = !1, new Promise(function(t, n) {
                    wx.canvasToTempFilePath({
                        x: 0,
                        y: 0,
                        width: e.canvasWidth,
                        height: e.canvasHeight,
                        canvasId: "myCanvas",
                        success: function(e) {
                            var t = e.tempFilePath;
                            wx.saveImageToPhotosAlbum({
                                filePath: t,
                                success: function(e) {
                                    e && _index.tip.toast("保存成功", "", "none");
                                },
                                fail: function(e) {
                                    _index.tip.toast("保存失败", "", "none");
                                }
                            });
                        },
                        fail: function(e) {
                            _index.tip.toast("保存失败", "", "none");
                        }
                    }), e.$apply();
                });
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "drawImage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, a, i, s, o, u, c, l, h, f;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showLoading({
                            title: "生成中..."
                        }), this.drawCanvas = !0, t = wx.getSystemInfoSync(), n = t.windowWidth, r = 690, 
                        a = 1334, i = n / r, this.canvasWidth = r * i * .9, this.canvasHeight = a * i * .7, 
                        e.prev = 5, e.next = 8, Promise.all([ this.downloadFile("https://imgcdn.huanjutang.com/assert/img/1553053849571942.jpg"), this.downloadFile(this.item.qr_code) ]);

                      case 8:
                        s = e.sent, o = _slicedToArray(s, 2), u = o[0], c = o[1], l = wx.createCanvasContext("myCanvas"), 
                        l.drawImage(u, 0, 0, this.canvasWidth, this.canvasHeight), l.setFontSize(42 * i), 
                        l.setTextAlign("center"), l.setFillStyle("#e73e3a"), l.fillText(this.item.code, this.canvasWidth / 2, 250 * i), 
                        l.setFontSize(44 * i), h = null, f = 400 * i, e.t0 = parseInt(this.item.type), e.next = 1 === e.t0 ? 24 : 2 === e.t0 ? 26 : 3 === e.t0 ? 28 : 30;
                        break;

                      case 24:
                        return h = "普通", e.abrupt("break", 30);

                      case 26:
                        return h = "棚改", e.abrupt("break", 30);

                      case 28:
                        return h = "刚需", e.abrupt("break", 30);

                      case 30:
                        this.item.num ? (l.setFillStyle("#1a1a1a"), l.fillText(h, this.canvasWidth / 2 - 100 * i, f), 
                        l.fillText("第" + this.item.num + "号", this.canvasWidth / 2 + 70 * i, f)) : (l.setFillStyle("#999"), 
                        l.setFontSize(30 * i), l.setTextAlign("center"), l.fillText("未查询到结果", this.canvasWidth / 2, f - 20), 
                        l.fillText("是不是信息输错了呐~", this.canvasWidth / 2, f + 10)), f += 134 * i, l.setFontSize(30 * i), 
                        l.setFillStyle("#3772cc"), l.setTextAlign("left"), l.fillText(this.item.lottery_name, 64 * i, f), 
                        l.setFontSize(34 * i), l.setFillStyle("#e73e3a"), l.setTextAlign("left"), l.fillText(this.item.rows[0].num, 64 * i, 600 * i), 
                        l.setFontSize(20 * i), l.setFillStyle("#999999"), l.setTextAlign("left"), l.fillText(this.item.rows[0].text, 64 * i, 640 * i), 
                        l.setFontSize(34 * i), l.setFillStyle("#e73e3a"), l.fillText(this.item.rows[1].num, this.canvasWidth / 2 - 80 * i, 600 * i), 
                        l.setFontSize(20 * i), l.setFillStyle("#999999"), l.fillText(this.item.rows[1].text, this.canvasWidth / 2 - 80 * i, 640 * i), 
                        l.setFontSize(34 * i), l.setFillStyle("#e73e3a"), l.fillText(this.item.rows[2].num, this.canvasWidth / 2 + 50 * i, 600 * i), 
                        l.setFontSize(20 * i), l.setFillStyle("#999999"), l.fillText(this.item.rows[2].text, this.canvasWidth / 2 + 50 * i, 640 * i), 
                        this.item.rows[3] && (l.setFontSize(34 * i), l.setFillStyle("#e73e3a"), l.fillText(this.item.rows[3].num, this.canvasWidth / 2 + 170 * i, 600 * i), 
                        l.setFontSize(20 * i), l.setFillStyle("#999999"), l.fillText(this.item.rows[3].text, this.canvasWidth / 2 + 170 * i, 640 * i)), 
                        l.drawImage(c, (this.canvasWidth - 170 * i) / 2, 700 * i, 160 * i, 170 * i), l.draw(), 
                        wx.hideLoading(), e.next = 68;
                        break;

                      case 62:
                        e.prev = 62, e.t1 = e.catch(5), _index.tip.toast("生成图片失败", "", "none"), this.drawCanvas = !1, 
                        this.$apply(), wx.hideLoading();

                      case 68:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 5, 62 ] ]);
            }));
            return e;
        }()
    }, {
        key: "downloadFile",
        value: function(e) {
            return new Promise(function(t, n) {
                if (!e) return n("下载对象里面没有路径");
                e = e.replace(/^http:/, "https:"), wx.downloadFile({
                    url: e,
                    success: function(e) {
                        t(e.tempFilePath);
                    },
                    fail: function(e) {
                        n(e);
                    }
                });
            });
        }
    }, {
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
                        this.type = t.type, e.next = 6, this.methods.reloadData.call(this);

                      case 6:
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
            return _index.share.share("快来看【" + this.project_name + "】的摇号结果");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Lottery, "pages/lottery/showCode"));