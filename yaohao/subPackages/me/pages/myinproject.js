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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), ReportError = globalModel.ReportError, Myinproject = function(e) {
    function t() {
        var e, n, a, r;
        _classCallCheck(this, t);
        for (var s = arguments.length, i = Array(s), o = 0; o < s; o++) i[o] = arguments[o];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        a.config = {
            navigationBarTitleText: "入驻的楼盘",
            enablePullDownRefresh: !0
        }, a.data = {
            optionType: 1,
            isShare: !1,
            initialData: "-1000rpx",
            endData: "0",
            bouncedType: !1,
            drawCanvas: !1,
            shareTitle: "",
            salesMan_id: "",
            canvasHeight: 0,
            canvasWidth: 0,
            is_broker: 0,
            exchange: {},
            type: 1,
            userType: 1,
            salesManId: "",
            salesManInfo: {},
            more: !0,
            page: 1,
            items: [],
            tabLoading: !0,
            loading: !0
        }, a.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
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
            toUrlSaleManHandle: function() {
                1 == this.is_broker && wx.navigateTo({
                    url: "/subPackages/me/pages/broker"
                }), 2 == this.is_broker && wx.navigateTo({
                    url: "/subPackages/me/pages/salesMan"
                });
            },
            goToUrl3: function(e) {
                wx.navigateTo({
                    url: "/subPackages/me/pages/saleManStatus?salesman_id=" + e.salesman_id + "&type=99"
                });
            },
            goToUrl2: function(e) {
                wx.setStorageSync("exchange", e.exchange), wx.navigateTo({
                    url: "/subPackages/me/pages/saleManStatus?salesman_id=" + e.salesman_id
                });
            },
            goToUrl: function(e) {
                wx.navigateTo({
                    url: e
                });
            },
            changeProject: function(e) {
                wx.navigateTo({
                    url: "/subPackages/me/pages/changeEnterProject?project_id=" + e
                });
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
                                    e && _index.tip.success("保存成功");
                                },
                                fail: function(e) {
                                    _index.tip.toast("保存失败", "", "none");
                                }
                            });
                        },
                        fail: function(e) {
                            _index.tip.toast("邀请码生成失败", "", "none");
                        }
                    }), e.$apply();
                });
            },
            waitFine: function() {
                var e = this;
                setTimeout(function() {
                    e.bouncedType = !1, e.$apply(), setTimeout(function() {
                        e.isShare = !1, e.$apply();
                    }, 300);
                }, 10);
            },
            shutDown: function() {
                this.methods.waitFine.call(this);
            },
            cancel: function() {
                this.methods.waitFine.call(this);
            },
            inviteEnter: function() {
                var e = this;
                this.isShare = !0, setTimeout(function() {
                    e.bouncedType = !0, e.$apply();
                }, 10);
            },
            hurry: function() {
                var e = wx.getStorageSync("clickCont");
                if (!e) {
                    var t = parseInt(new Date().getDate()) - 1;
                    wx.setStorageSync("clickCont", {
                        date: t
                    });
                }
                if (parseInt(new Date().getDate()) === parseInt(e.date)) wx.showModal({
                    title: "温馨提示",
                    content: "每天只能催一次哦",
                    confirmText: "我知道了",
                    showCancel: !1
                }); else {
                    var n = new Date().getDate();
                    wx.setStorageSync("clickCont", {
                        date: n
                    }), wx.showModal({
                        title: "成功催了一下",
                        content: "请耐心等待 客服正在为您处理",
                        confirmText: "我知道了",
                        showCancel: !1
                    });
                }
            },
            changeType: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return t.type = parseInt(e), n.next = 3, t.reload();

                          case 3:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            shareTo: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.drawCanvas = !0, t.next = 3, e.drawImage().catch(function(t) {
                                e.drawCanvas = !1, wx.hideLoading(), _index.tip.toast("邀请码生成失败", "", "none"), e.$apply();
                            });

                          case 3:
                            return e.$apply(), t.next = 6, e.methods.waitFine.call(e);

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, r = n, _possibleConstructorReturn(a, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "downloadFile",
        value: function(e) {
            return new Promise(function(t, n) {
                e || _index.tip.toast("下载对象里面没有路径", "", "none"), e = e.replace(/^http:/, "https:"), 
                wx.downloadFile({
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
        key: "drawImage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, a, r, s, i, o, c, l, u, h, p, f, d, g, m, y, v, w, x, b, _ = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return b = function(e, t, n) {
                            for (var a = 0; a < t.length; a++) e.setFontSize(18 * i), e.setTextBaseline("top"), 
                            e.setFillStyle("#d2b899"), e.fillText(t[a], n - 20, 50 * i + 12 * a);
                        }, x = function(e, n) {
                            ReportError.send({
                                errMsg: e,
                                data: JSON.stringify(n),
                                path: "subPackages/me/pages/salesManInfo",
                                params: {
                                    is_broker: t.salesManInfo.is_broker,
                                    salesMan_id: t.salesMan_id
                                }
                            });
                        }, wx.showLoading({
                            title: "生成中..."
                        }), t = this, n = wx.getSystemInfoSync(), a = n.windowWidth, r = 690, s = 1334, 
                        i = a / r, this.canvasWidth = r * i * .9, this.canvasHeight = s * i * .7, e.next = 8, 
                        _api2.default.sales.shareQrCode(this.salesManInfo.id);

                      case 8:
                        return o = e.sent, e.prev = 9, e.next = 12, Promise.all([ this.downloadFile(this.salesManInfo.avatar_url), this.downloadFile("https://imgcdn.huanjutang.com/assets/img/20181112/5be92c4123e50.png"), this.downloadFile("https://imgcdn.huanjutang.com/assets/img/20181113/5bea8fe4da199.png"), this.downloadFile("https://imgcdn.huanjutang.com/assets/img/20181113/5bea8ff1a1b3b.png"), this.downloadFile("https://imgcdn.huanjutang.com/assets/img/20181113/5bea8ffae97a8.png"), this.downloadFile(o.data) ]).catch(function(e) {
                            wx.hideLoading(), _index.tip.toast("专属邀请码生成失败", "", "none"), x("资源预下载异常", {
                                err: JSON.stringify(e),
                                params: {
                                    avatar: u,
                                    cover: h,
                                    jin: p,
                                    yin: f,
                                    tong: d,
                                    qrCode: g
                                }
                            }), _.drawCanvas = !1, _.$apply();
                        });

                      case 12:
                        c = e.sent, l = _slicedToArray(c, 6), u = l[0], h = l[1], p = l[2], f = l[3], d = l[4], 
                        g = l[5], u && h && p && f && d && g && (m = {
                            3: p,
                            2: f,
                            1: d
                        }, y = wx.createCanvasContext("myCanvas"), y.drawImage(h, 0, 0, this.canvasWidth, this.canvasHeight), 
                        y.save(), y.arc(60 * i + 120 * i / 2, 50 * i + 120 * i / 2, 60 * i, 0, 2 * Math.PI, !1), 
                        y.clip(), y.drawImage(u, 60 * i, 50 * i, 120 * i, 120 * i), y.restore(), v = 100 * i, 
                        y.setFontSize(34 * i), y.setFillStyle("#1a1a1a"), y.fillText(this.salesManInfo.name, 205 * i, v), 
                        y.drawImage(m[this.salesManInfo.grade], 205 * i, v + 27 * i, 21 * i, 28 * i), v += 50 * i, 
                        y.setFontSize(24 * i), y.setFillStyle("#666"), y.fillText(2 == this.is_broker ? "置业顾问" : "经纪人", 240 * i, v), 
                        b(y, "成都摇号助手", this.canvasWidth), v += 110 * i, y.setFontSize(40 * i), y.setFillStyle("#b3752b"), 
                        y.setTextAlign("center"), y.fillText("我在这里", this.canvasWidth / 2, v), v += 73 * i, 
                        y.setFontSize(40 * i), y.setFillStyle("#b3752b"), y.setTextAlign("center"), y.fillText("等着你们一起入驻", this.canvasWidth / 2, v), 
                        w = (this.canvasWidth - 300 * i) / 2, v += 97 * i, y.drawImage(g, w, v, 300 * i, 300 * i), 
                        y.setFontSize(20 * i), y.setFillStyle("#c6955f"), y.setTextAlign("center"), y.fillText("扫码和我一起入驻成都摇号助手", this.canvasWidth / 2, this.canvasHeight - 150 * i), 
                        y.setFontSize(34 * i), y.setFillStyle("#b3752b"), y.fillText(this.salesManInfo.like_num, 90 * i, this.canvasHeight - 100 * i), 
                        y.setFontSize(20 * i), y.setFillStyle("#666"), y.fillText("点赞", 90 * i, this.canvasHeight - 60 * i), 
                        y.setFontSize(34 * i), y.setFillStyle("#b3752b"), y.fillText(this.salesManInfo.recommend_index, this.canvasWidth / 2 - 80 * i, this.canvasHeight - 100 * i), 
                        y.setFontSize(20 * i), y.setFillStyle("#666"), y.fillText("活跃度", this.canvasWidth / 2 - 80 * i, this.canvasHeight - 60 * i), 
                        y.setFontSize(34 * i), y.setFillStyle("#b3752b"), y.fillText(this.salesManInfo.consulting, this.canvasWidth / 2 + 80 * i, this.canvasHeight - 100 * i), 
                        y.setFontSize(20 * i), y.setFillStyle("#666"), y.fillText("咨询量", this.canvasWidth / 2 + 80 * i, this.canvasHeight - 60 * i), 
                        y.setFontSize(34 * i), y.setFillStyle("#b3752b"), y.fillText(this.salesManInfo.page_views, this.canvasWidth - 90 * i, this.canvasHeight - 100 * i), 
                        y.setFontSize(20 * i), y.setFillStyle("#666"), y.fillText("浏览量", this.canvasWidth - 90 * i, this.canvasHeight - 60 * i), 
                        y.draw()), wx.hideLoading(), e.next = 31;
                        break;

                      case 24:
                        e.prev = 24, e.t0 = e.catch(9), _index.tip.toast("专属邀请码生成失败", "", "none"), x("生成时异常", e.t0), 
                        this.drawCanvas = !1, this.$apply(), wx.hideLoading();

                      case 31:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 9, 24 ] ]);
            }));
            return e;
        }()
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.shareTitle = "这里有很多用户，快来和我一起入驻吧！", e.next = 3, _api2.default.getUserDetails();

                      case 3:
                        n = e.sent, this.userType = n.data.type, e.t0 = parseInt(this.userType), e.next = 1 === e.t0 ? 8 : 2 === e.t0 ? 10 : 3 === e.t0 ? 12 : 14;
                        break;

                      case 8:
                        return this.type = 0, e.abrupt("break", 14);

                      case 10:
                        return this.type = 1, e.abrupt("break", 14);

                      case 12:
                        return this.type = 0, e.abrupt("break", 14);

                      case 14:
                        return this.salesManId = t.salesMan_id, e.next = 17, _api2.default.salesManDetail2(this.salesManId);

                      case 17:
                        return a = e.sent, this.salesManInfo = a.data, e.next = 21, this.reload();

                      case 21:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "reload",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.items = [], this.more = !0, this.page = 1, this.loading = !0, e.next = 6, 
                        this.loadNext();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "loadNext",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.tabLoading = !1, e.next = 3, _api2.default.getSalesManApply(this.type, this.page);

                      case 3:
                        t = e.sent, this.is_broker = t.data.data[0].is_broker, this.page >= t.data.lastPage || !t.data.lastPage ? this.more = !1 : this.page++, 
                        this.items = this.items.concat(t.data.data), this.tabLoading = !0, this.loading = !1, 
                        this.$apply();

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
            var e = "";
            1 == this.is_broker && (e = "/subPackages/me/pages/broker?inviter_id=" + this.salesManId), 
            2 == this.is_broker && (e = "/subPackages/me/pages/salesMan?inviter_id=" + this.salesManId);
            return _index.share.share(this.shareTitle, e, "http://imgcdn.huanjutang.com/assets/img/20181227/5c2494e7618aa.jpg");
        }
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
                        return e.next = 2, this.reload();

                      case 2:
                        wx.stopPullDownRefresh();

                      case 3:
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
                        return e.next = 4, this.loadNext();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Myinproject, "subPackages/me/pages/myinproject"));