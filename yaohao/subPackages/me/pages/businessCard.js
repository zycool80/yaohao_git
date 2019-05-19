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
            function a(r, s) {
                try {
                    var i = t[r](s), o = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(o).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(o);
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

var _slicedToArray = function() {
    function e(e, t) {
        var n = [], a = !0, r = !1, s = void 0;
        try {
            for (var i, o = e[Symbol.iterator](); !(a = (i = o.next()).done) && (n.push(i.value), 
            !t || n.length !== t); a = !0) ;
        } catch (e) {
            r = !0, s = e;
        } finally {
            try {
                !a && o.return && o.return();
            } finally {
                if (r) throw s;
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
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _index = require("./../../../utils/utilsKit/index.js"), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _GlobalModel = require("./../../../models/GlobalModel.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), Index = function(e) {
    function t() {
        var e, n, a, r;
        _classCallCheck(this, t);
        for (var s = arguments.length, i = Array(s), o = 0; o < s; o++) i[o] = arguments[o];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        a.config = {
            navigationBarTitleText: "名片",
            enablePullDownRefresh: !0
        }, a.data = {
            drawCanvas: !1,
            salesManInfo: null,
            project_name: "",
            sort: {
                1: "铜牌顾问",
                2: "银牌顾问",
                3: "金牌顾问"
            },
            defaultAvatar: "/images/default_sales_man_avatar.png",
            canvasWidth: 0,
            canvasHeight: 0,
            sales_man_id: "",
            showView: !1,
            project_type: "",
            qrCode: "",
            userName: ""
        }, a.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, a.$repeat = {}, a.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, a.$events = {}, a.components = {
            BackHome: _BackHome2.default
        }, a.methods = {
            closeCanvas: function() {
                this.drawCanvas = !1;
            },
            stopMove: function(e) {
                return !1;
            },
            shareTo: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function a() {
                    return regeneratorRuntime.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return n.project_name = e, n.project_type = t, n.drawCanvas = !0, a.next = 5, n.drawImage().catch(function(e) {
                                n.drawCanvas = !1, wx.hideLoading(), _index.tip.toast("名片生成失败", "", "none"), n.$apply();
                            });

                          case 5:
                            n.$apply();

                          case 6:
                          case "end":
                            return a.stop();
                        }
                    }, a, n);
                }))();
            },
            saveBusinessCard: function() {
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
                                    e && _index.tip.success("保存成功");
                                },
                                fail: function(e) {
                                    _index.tip.toast("保存失败", "", "none");
                                }
                            });
                        },
                        fail: function(e) {
                            _index.tip.toast("名片生成失败", "", "none");
                        }
                    }), e.$apply();
                });
            }
        }, r = n, _possibleConstructorReturn(a, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, a, r, s, i, o, c, u, l;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中..."
                        }), this.sales_man_id = t.id, e.next = 4, _api2.default.getSalesManOnce(this.sales_man_id);

                      case 4:
                        if (n = e.sent, 0 != n.code || !n.data) {
                            e.next = 27;
                            break;
                        }
                        for (this.salesManInfo = n.data, a = !0, r = !1, s = void 0, e.prev = 10, i = this.salesManInfo.projects[Symbol.iterator](); !(a = (o = i.next()).done); a = !0) c = o.value, 
                        c.id && (this.showView = !0);
                        e.next = 18;
                        break;

                      case 14:
                        e.prev = 14, e.t0 = e.catch(10), r = !0, s = e.t0;

                      case 18:
                        e.prev = 18, e.prev = 19, !a && i.return && i.return();

                      case 21:
                        if (e.prev = 21, !r) {
                            e.next = 24;
                            break;
                        }
                        throw s;

                      case 24:
                        return e.finish(21);

                      case 25:
                        return e.finish(18);

                      case 26:
                        this.userName = this.salesManInfo.name;

                      case 27:
                        if (!t.u_id && !t.s_id) {
                            e.next = 31;
                            break;
                        }
                        return u = t.project_name, e.next = 31, this.methods.shareTo.call(this, u);

                      case 31:
                        return e.next = 33, _api2.default.getQrCode("/pages/salesMan/detail?id=" + this.sales_man_id);

                      case 33:
                        l = e.sent, 0 === parseInt(l.code) && (this.qrCode = l.data.qrcode), wx.hideLoading(), 
                        this.$apply();

                      case 37:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 10, 14, 18, 26 ], [ 19, , 21, 25 ] ]);
            }));
            return e;
        }()
    }, {
        key: "drawImage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, a, r, s, i, o, c, u, l, d, p, f, h, _, m, v, w;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (w = function(e, n) {
                            _GlobalModel.ReportError.send({
                                errMsg: e,
                                data: JSON.stringify(n),
                                path: "subPackages/me/pages/businessCard",
                                params: {
                                    sales_man_id: t.salesManInfo.id
                                }
                            });
                        }, wx.showLoading({
                            title: "生成中..."
                        }), t = this, n = wx.getSystemInfoSync(), a = .77 * n.windowWidth, r = 750, s = 1334, 
                        i = a / r, this.canvasWidth = r * i, this.canvasHeight = s * i, this.qrCode) {
                            e.next = 11;
                            break;
                        }
                        return _index.tip.toast("二维码为空", "", "none"), w("二维码下载失败", new Error("二维码下载失败")), 
                        this.drawCanvas = !1, this.$apply(), e.abrupt("return");

                      case 11:
                        return e.prev = 11, e.next = 14, Promise.all([ this.downloadFile("http://imgcdn.huanjutang.com/assets/img/20190228/5c77831655ca2.png"), this.downloadFile("http://imgcdn.huanjutang.com/assets/img/20190301/5c78d6a6aeee0.png"), this.downloadFile(this.salesManInfo.avatar_url), this.downloadFile(this.qrCode) ]);

                      case 14:
                        o = e.sent, c = _slicedToArray(o, 4), u = c[0], l = c[1], d = c[2], p = c[3], u && p && (f = wx.createCanvasContext("myCanvas"), 
                        f.drawImage(u, 0, 0, this.canvasWidth, this.canvasHeight), f.setTextBaseline("top"), 
                        _index.canvasPlus.verticalText(f, this.salesManInfo.name, {
                            x: 530 * i,
                            y: 142 * i,
                            space: 4,
                            size: 63 * i
                        }), _index.canvasPlus.verticalText(f, this.project_name + "·" + (2 == this.salesManInfo.is_broker ? "置业顾问" : "经纪人"), {
                            x: 630 * i,
                            y: 142 * i,
                            space: 4,
                            size: 36 * i
                        }), f.setTextBaseline("normal"), h = _index.canvasPlus.setGradientStyle(f, {
                            x: 76 * i,
                            y: 117 * i,
                            endX: 448 * i,
                            endY: 117 * i,
                            inColor: "#ffeca2",
                            toColor: "#eaa458"
                        }), _index.canvasPlus.drawCircle(f, {
                            x: 76 * i,
                            y: 117 * i,
                            size: 371 * i,
                            color: h
                        }), _index.canvasPlus.drawCircleAvatar(f, d, {
                            x: 92 * i,
                            y: 133 * i,
                            size: 339 * i
                        }), f.drawImage(l, 93 * i, 600 * i, 480 * i, 245 * i), _ = 329, m = 374, v = 150 * i / _, 
                        f.drawImage(p, 93 * i, 914 * i, 150 * i, m * v), f.setTextAlign("left"), f.setFillStyle("#deb891"), 
                        f.setFontSize(28 * i), f.fillText("扫码查看详情", 93 * i, 1145 * i), f.draw()), wx.hideLoading(), 
                        e.next = 30;
                        break;

                      case 24:
                        e.prev = 24, e.t0 = e.catch(11), _index.tip.toast("专属邀请码生成失败", "", "none"), this.drawCanvas = !1, 
                        this.$apply(), wx.hideLoading();

                      case 30:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 11, 24 ] ]);
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
        key: "onShareAppMessage",
        value: function(e) {
            return _index.share.share(this.userName + "的名片", "/pages/salesMan/detail?id=" + this.sales_man_id);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/businessCard"));