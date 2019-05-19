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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), _require = require("./../../../models/GlobalModel.js"), ReportError = _require.ReportError, Index = function(e) {
    function t() {
        var e, n, a, r;
        _classCallCheck(this, t);
        for (var s = arguments.length, i = Array(s), o = 0; o < s; o++) i[o] = arguments[o];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        a.config = {
            navigationBarTitleText: "我是置业顾问",
            enablePullDownRefresh: !0
        }, a.data = {
            defaultAvatar: "/images/default_sales_man_avatar.png",
            salesMan_id: "",
            projectList: [],
            projectName: [],
            index: 0,
            project_id: "",
            project_name: "",
            salesManInfo: {},
            content: [],
            shareTitle: "我在这里入驻楼盘",
            weapp: "",
            salesManListWidth: 0,
            salesManBanners: [],
            showInviteView: !1,
            isShare: !1,
            drawCanvas: !1,
            canvasHeight: 0,
            canvasWidth: 0
        }, a.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, a.$repeat = {}, a.$props = {
            BackHome: {}
        }, a.$events = {}, a.components = {
            BackHome: _BackHome2.default
        }, a.methods = {
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
            inviteEnter: function() {
                this.isShare = !0;
            },
            shareTo: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.isShare = !1, e.drawCanvas = !0, t.next = 4, e.drawImage().catch(function(t) {
                                e.drawCanvas = !1, wx.hideLoading(), _index.tip.toast("邀请码生成失败", "", "none"), e.$apply();
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
            stopMove: function(e) {
                return !1;
            },
            cancel: function() {
                this.isShare = !1;
            },
            closeCanvas: function() {
                this.drawCanvas = !1;
            },
            toUrl: function() {
                wx.navigateTo({
                    url: "/subPackages/me/pages/personInfo?id=" + this.salesMan_id
                });
            },
            changeShareTitle: function(e) {
                var t = e.detail.formId;
                _api2.default.sendFromID(t).then(function(e) {}), this.shareTitle = "这里有很多用户，快来和我一起入驻吧！";
            },
            showProjectList: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            n = _wepy2.default.$instance, wx.showActionSheet({
                                itemList: e.projectName,
                                success: function() {
                                    var t = _asyncToGenerator(regeneratorRuntime.mark(function t(a) {
                                        var r;
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                              case 0:
                                                return r = a.tapIndex, wx.setStorageSync("sales_man_id", e.projectList[r].sales_man_id), 
                                                e.project_name = e.projectList[r].project_name, e.project_id = e.projectList[r].project_id, 
                                                e.salesMan_id = e.projectList[r].sales_man_id, t.next = 7, e.methods.reload.call(e);

                                              case 7:
                                                n.refresh_me = !0, e.$apply();

                                              case 9:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t, e);
                                    }));
                                    return function(e) {
                                        return t.apply(this, arguments);
                                    };
                                }()
                            });

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), t.next = 3, _api2.default.salesManDetail2(e.project_id);

                          case 3:
                            n = t.sent, e.salesManInfo = n.data, e.salesManListWidth = 340 * n.data.project_results.length, 
                            e.salesManInfo.advantage && (e.content = e.salesManInfo.advantage.split("\n")), 
                            e.content.forEach(function(e) {
                                e = e.replace(/(\s*)/g, "");
                            }), wx.stopPullDownRefresh(), e.$apply(), wx.hideLoading();

                          case 11:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
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
                var n, a, r, s, i, o, c, l, u = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = _index.cache.get("userinfo") || {}, n && (this.weapp = '{"nickName": "' + n.nickName + '", "city": "' + n.city + '"}'), 
                        this.salesMan_id = t.id, globalModel.getGlobalConfig().then(function(e) {
                            u.salesManBanners = e.salesManBanners;
                        }), e.next = 6, _api2.default.getProjectListWithUser(this.project_id);

                      case 6:
                        for (a = e.sent, this.projectList = a.data, r = !0, s = !1, i = void 0, e.prev = 11, 
                        o = this.projectList[Symbol.iterator](); !(r = (c = o.next()).done); r = !0) l = c.value, 
                        l.sales_man_id === this.salesMan_id && (this.project_name = l.project_name, this.project_id = l.project_id), 
                        this.projectName.push(l.project_name);
                        e.next = 19;
                        break;

                      case 15:
                        e.prev = 15, e.t0 = e.catch(11), s = !0, i = e.t0;

                      case 19:
                        e.prev = 19, e.prev = 20, !r && o.return && o.return();

                      case 22:
                        if (e.prev = 22, !s) {
                            e.next = 25;
                            break;
                        }
                        throw i;

                      case 25:
                        return e.finish(22);

                      case 26:
                        return e.finish(19);

                      case 27:
                        return this.project_id || (this.project_id = a.data[0].project_id), e.next = 30, 
                        this.methods.reload.call(this);

                      case 30:
                        this.$apply();

                      case 31:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 11, 15, 19, 27 ], [ 20, , 22, 26 ] ]);
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
                var t, n, a, r, s, i, o, c, l, u, h, p, f, d, g, v, m, _, w, y, x, b = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return x = function(e, t, n) {
                            for (var a = 0; a < t.length; a++) e.setFontSize(18 * i), e.setTextBaseline("top"), 
                            e.setFillStyle("#d2b899"), e.fillText(t[a], n - 20, 50 * i + 12 * a);
                        }, y = function(e, n) {
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
                            wx.hideLoading(), _index.tip.toast("专属邀请码生成失败", "", "none"), y("资源预下载异常", {
                                err: JSON.stringify(e),
                                params: {
                                    avatar: u,
                                    cover: h,
                                    jin: p,
                                    yin: f,
                                    tong: d,
                                    qrCode: g
                                }
                            }), b.drawCanvas = !1, b.$apply();
                        });

                      case 12:
                        c = e.sent, l = _slicedToArray(c, 6), u = l[0], h = l[1], p = l[2], f = l[3], d = l[4], 
                        g = l[5], u && h && p && f && d && g && (v = {
                            3: p,
                            2: f,
                            1: d
                        }, m = wx.createCanvasContext("myCanvas"), m.drawImage(h, 0, 0, this.canvasWidth, this.canvasHeight), 
                        m.save(), m.arc(60 * i + 120 * i / 2, 50 * i + 120 * i / 2, 60 * i, 0, 2 * Math.PI, !1), 
                        m.clip(), m.drawImage(u, 60 * i, 50 * i, 120 * i, 120 * i), m.restore(), _ = 100 * i, 
                        m.setFontSize(34 * i), m.setFillStyle("#1a1a1a"), m.fillText(this.salesManInfo.name, 205 * i, _), 
                        m.drawImage(v[this.salesManInfo.grade], 205 * i, _ + 27 * i, 21 * i, 28 * i), _ += 50 * i, 
                        m.setFontSize(24 * i), m.setFillStyle("#666"), m.fillText("置业顾问", 240 * i, _), x(m, "成都摇号助手", this.canvasWidth), 
                        _ += 110 * i, m.setFontSize(40 * i), m.setFillStyle("#b3752b"), m.setTextAlign("center"), 
                        m.fillText("我在这里", this.canvasWidth / 2, _), _ += 73 * i, m.setFontSize(40 * i), 
                        m.setFillStyle("#b3752b"), m.setTextAlign("center"), m.fillText("等着你们一起入驻", this.canvasWidth / 2, _), 
                        w = (this.canvasWidth - 300 * i) / 2, _ += 97 * i, m.drawImage(g, w, _, 300 * i, 300 * i), 
                        m.setFontSize(20 * i), m.setFillStyle("#c6955f"), m.setTextAlign("center"), m.fillText("扫码和我一起入驻成都摇号助手", this.canvasWidth / 2, this.canvasHeight - 150 * i), 
                        m.setFontSize(34 * i), m.setFillStyle("#b3752b"), m.fillText(this.salesManInfo.like_num, 90 * i, this.canvasHeight - 100 * i), 
                        m.setFontSize(20 * i), m.setFillStyle("#666"), m.fillText("点赞", 90 * i, this.canvasHeight - 60 * i), 
                        m.setFontSize(34 * i), m.setFillStyle("#b3752b"), m.fillText(this.salesManInfo.recommend_index, this.canvasWidth / 2 - 80 * i, this.canvasHeight - 100 * i), 
                        m.setFontSize(20 * i), m.setFillStyle("#666"), m.fillText("活跃度", this.canvasWidth / 2 - 80 * i, this.canvasHeight - 60 * i), 
                        m.setFontSize(34 * i), m.setFillStyle("#b3752b"), m.fillText(this.salesManInfo.consulting, this.canvasWidth / 2 + 80 * i, this.canvasHeight - 100 * i), 
                        m.setFontSize(20 * i), m.setFillStyle("#666"), m.fillText("咨询量", this.canvasWidth / 2 + 80 * i, this.canvasHeight - 60 * i), 
                        m.setFontSize(34 * i), m.setFillStyle("#b3752b"), m.fillText(this.salesManInfo.page_views, this.canvasWidth - 90 * i, this.canvasHeight - 100 * i), 
                        m.setFontSize(20 * i), m.setFillStyle("#666"), m.fillText("浏览量", this.canvasWidth - 90 * i, this.canvasHeight - 60 * i), 
                        m.draw()), wx.hideLoading(), e.next = 31;
                        break;

                      case 24:
                        e.prev = 24, e.t0 = e.catch(9), _index.tip.toast("专属邀请码生成失败", "", "none"), y("生成时异常", e.t0), 
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
            return _index.share.share(this.shareTitle, "/subPackages/me/pages/salesMan?inviter_id=" + this.salesMan_id);
        }
    }, {
        key: "reload",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中..."
                        }), e.next = 3, _api2.default.salesManDetail2(this.project_id);

                      case 3:
                        t = e.sent, this.salesManInfo = t.data, this.salesManListWidth = 340 * t.data.project_results.length, 
                        this.salesManInfo.advantage && (this.content = this.salesManInfo.advantage.split("\n")), 
                        this.content.forEach(function(e) {
                            e = e.replace(/(\s*)/g, "");
                        }), wx.stopPullDownRefresh(), this.$apply(), wx.hideLoading();

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/salesManInfo"));