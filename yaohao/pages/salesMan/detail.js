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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _urijs = require("./../../npm/urijs/src/URI.js"), _urijs2 = _interopRequireDefault(_urijs), _api = require("./../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../utils/utilsKit/index.js"), _BackHome = require("./../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../models/GlobalModel.js"), userRoute = "", userInfo = {}, Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationBarTitleText: "置业顾问详情",
            enablePullDownRefresh: !0
        }, r.data = {
            sales_id: null,
            project_id: null,
            session_id: null,
            project_name: "",
            salesManName: "",
            project_img: "",
            switchType: 1,
            item: null,
            list: [],
            page: 1,
            more: !0,
            loading: !0,
            showModel: !1,
            serviceQrCode: "",
            projectsScrollWidth: 0,
            color: {
                1: "http://imgcdn.huanjutang.com/assets/img/20180713/5b487eb85cca2.jpg",
                2: "http://imgcdn.huanjutang.com/assets/img/20180713/5b487ec8284d9.jpg",
                3: "http://imgcdn.huanjutang.com/assets/img/20180713/5b487ead2f79b.jpg"
            },
            img: {
                1: "/images/tong.png",
                2: "/images/yin.png",
                3: "/images/jin.png"
            },
            font_color: {
                1: "#8c7374",
                2: "#8d92a3",
                3: "#c86601"
            },
            sort: {
                1: "铜牌顾问",
                2: "银牌顾问",
                3: "金牌顾问"
            }
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {}
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.methods = {
            cancelModel: function() {
                this.showModel = !1;
            },
            saveCode: function() {
                var e = this;
                wx.downloadFile({
                    url: this.serviceQrCode,
                    success: function(t) {
                        wx.saveImageToPhotosAlbum({
                            filePath: t.tempFilePath,
                            success: function() {
                                e.showModel = !1, e.$apply(), _index.tip.toast("保存成功");
                            },
                            fail: function() {
                                e.showModel = !1, e.$apply(), _index.tip.toast("保存失败");
                            }
                        });
                    },
                    fail: function() {
                        e.showModel = !1;
                    }
                });
            },
            viewVideo: function(e) {
                wx.navigateTo({
                    url: "/subPackages/tools/pages/playVideoPage?url=" + e
                });
            },
            switchTabBar: function(e) {
                this.switchType = e, this.page = 1, this.more = !0, this.list = [], this.loadNext().then(function() {});
            },
            likeSalesMan: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), t.next = 3, _api2.default.salesManLike(e.sales_id);

                          case 3:
                            n = t.sent, e.item.is_like = 1 === parseInt(e.item.is_like) ? 2 : 1, e.item.like_count = n.data.count, 
                            e.$apply(), wx.hideLoading();

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            editPostsHandle: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a, i, s = function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return i.page = 1, i.list = [], i.more = !0, i.loading = !0, e.next = 6, i.loadNext();

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }();
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            r = t.list[e], a = [], i = t, userInfo.id == t.item.session_id && (a.push("删除"), 
                            1 == r.top ? a.push("取消置顶") : a.push("置顶")), a.push("举报"), wx.showActionSheet({
                                itemList: a,
                                success: function() {
                                    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
                                        var i, o;
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                i = a[n.tapIndex], e.t0 = i, e.next = "删除" === e.t0 ? 4 : "举报" === e.t0 ? 21 : "取消置顶" === e.t0 ? 23 : "置顶" === e.t0 ? 32 : 41;
                                                break;

                                              case 4:
                                                if (userInfo.id != t.item.session_id) {
                                                    e.next = 19;
                                                    break;
                                                }
                                                return wx.showLoading({
                                                    title: "删除中...",
                                                    mask: !0
                                                }), e.next = 8, _api2.default.delShare(r.id);

                                              case 8:
                                                if (o = e.sent, wx.hideLoading(), "删除成功" !== o.data) {
                                                    e.next = 16;
                                                    break;
                                                }
                                                return _index.tip.toast("删除成功"), e.next = 14, s();

                                              case 14:
                                                e.next = 17;
                                                break;

                                              case 16:
                                                _index.tip.toast("删除失败", "", "none");

                                              case 17:
                                                e.next = 20;
                                                break;

                                              case 19:
                                                _index.tip.toast("非本人不能操作", "", "none");

                                              case 20:
                                                return e.abrupt("break", 41);

                                              case 21:
                                                return wx.navigateTo({
                                                    url: "/subPackages/project/pages/reportType?type=1&id=" + t.item.session_id
                                                }), e.abrupt("break", 41);

                                              case 23:
                                                if (userInfo.id != t.item.session_id) {
                                                    e.next = 30;
                                                    break;
                                                }
                                                return e.next = 26, _api2.default.setTop(r.id);

                                              case 26:
                                                return e.next = 28, s();

                                              case 28:
                                                e.next = 31;
                                                break;

                                              case 30:
                                                _index.tip.toast("非本人不能操作", "", "none");

                                              case 31:
                                                return e.abrupt("break", 41);

                                              case 32:
                                                if (userInfo.id != t.item.session_id) {
                                                    e.next = 39;
                                                    break;
                                                }
                                                return e.next = 35, _api2.default.setTop(r.id);

                                              case 35:
                                                return e.next = 37, s();

                                              case 37:
                                                e.next = 40;
                                                break;

                                              case 39:
                                                _index.tip.toast("非本人不能操作", "", "none");

                                              case 40:
                                                return e.abrupt("break", 41);

                                              case 41:
                                                t.$apply();

                                              case 42:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e, t);
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                }(),
                                fail: function(e) {}
                            });

                          case 4:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            phoneCall: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            n.t0 = t.andrees, n.next = "detail" === n.t0 ? 3 : "indexleft" === n.t0 ? 5 : "indexright" === n.t0 ? 7 : 9;
                            break;

                          case 3:
                            return wx.$Analysis.emit("indexCallClick", {
                                details_selseman_call_id: t.item.session_id,
                                details_selseman_call_name: t.item.name
                            }), n.abrupt("break", 9);

                          case 5:
                            return wx.$Analysis.emit("indexCallClick", {
                                index_selseman_call_left_id: t.item.session_id,
                                index_selseman_call_left_name: t.item.name
                            }), n.abrupt("break", 9);

                          case 7:
                            return wx.$Analysis.emit("indexCallClick", {
                                index_selseman_call_right_id: t.item.session_id,
                                index_selseman_call_right_name: t.item.name
                            }), n.abrupt("break", 9);

                          case 9:
                            return n.next = 11, _api2.default.getPhoneNum(e, 1);

                          case 11:
                            r = n.sent, 0 === r.code && wx.showModal({
                                title: "提示",
                                content: "拨通后请说明来自成都摇号助手",
                                success: function(e) {
                                    e.confirm && wx.makePhoneCall({
                                        phoneNumber: r.data.phone
                                    });
                                }
                            });

                          case 13:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            toIMPage: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            t.t0 = userRoute, t.next = "detail" === t.t0 ? 3 : "indexleft" === t.t0 ? 5 : "indexright" === t.t0 ? 7 : 9;
                            break;

                          case 3:
                            return wx.$Analysis.emit("indexCallClick", {
                                details_selseman_access_id: e.item.session_id,
                                details_selseman_access_name: e.item.name
                            }), t.abrupt("break", 9);

                          case 5:
                            return wx.$Analysis.emit("indexCallClick", {
                                index_selseman_access_left_id: e.item.session_id,
                                index_selseman_access_left_name: e.item.name
                            }), t.abrupt("break", 9);

                          case 7:
                            return wx.$Analysis.emit("indexCallClick", {
                                index_selseman_access_right_id: e.item.session_id,
                                index_selseman_access_right_name: e.item.name
                            }), t.abrupt("break", 9);

                          case 9:
                            wx.navigateTo({
                                url: "/subPackages/me/pages/chatInterface?user_id=" + e.item.session_id + "&project_id=" + e.project_id + "&avatar=" + e.item.avatar_url + "&project_name=" + e.project_name + "&project_img=" + e.project_img
                            });

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            preview: function(e, t) {
                var n = [];
                e.images.forEach(function(e) {
                    n = n.concat(e);
                });
                var r = t.currentTarget.dataset, a = r.preview;
                a && n.length > 0 && wx.previewImage({
                    current: a,
                    urls: n
                });
            },
            likePosts: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return r = t.list[e].id, n.next = 3, _api2.default.postsLike(r);

                          case 3:
                            a = n.sent, t.list[e].like_num = a.data.num, t.list[e].is_like = a.data.status, 
                            t.$apply();

                          case 7:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            follow: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.followSalesMan(e.sales_id);

                          case 2:
                            e.item.attention = 1 === e.item.attention ? 2 : 1, e.showModel = !0, e.$apply();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
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
                var n, r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return userInfo = globalModel.getUserInfo(), t.q ? (n = (0, _urijs2.default)(decodeURIComponent(t.q)).search(!0), 
                        this.sales_id = n.id, this.project_id = n.project_id || "", this.project_name = n.title, 
                        this.project_img = n.project_img) : (this.sales_id = t.id, this.project_name = t.title, 
                        this.project_id = t.project_id || "", this.project_img = t.project_img), e.next = 4, 
                        this.reload();

                      case 4:
                        t.andrees && (userRoute = t.andrees), globalModel.getGlobalConfig().then(function(e) {
                            e.serviceQrCode && (r.serviceQrCode = e.serviceQrCode), r.$apply();
                        });

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onUnload",
        value: function() {
            userRoute = null, userInfo = null;
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
    }, {
        key: "onShareAppMessage",
        value: function() {
            var e = this.item && this.item.project_name ? this.item.project_name : "", t = this.item && this.item.name ? this.item.name : "";
            return _index.share.share("我是【" + e + "】的置业顾问【" + t + "】，这是我的名片", "/pages/salesMan/detail?id=" + this.sales_id, "http://imgcdn.huanjutang.com/assets/img/20190124/5c4966bcb616d.jpg");
        }
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
                        if (t = void 0, 1 != this.switchType) {
                            e.next = 7;
                            break;
                        }
                        return e.next = 4, _api2.default.showSalesPosts(this.item.session_id, this.project_id, this.page);

                      case 4:
                        t = e.sent, e.next = 10;
                        break;

                      case 7:
                        return e.next = 9, _api2.default.showSalesQuestion(this.item.session_id, this.page);

                      case 9:
                        t = e.sent;

                      case 10:
                        this.page >= t.data.last_page || !t.data.last_page ? this.more = !1 : this.page++, 
                        t.data.data && (this.list = this.list.concat(t.data.data)), this.loading = !1, this.$apply();

                      case 14:
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
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中...",
                            mask: !0
                        }), this.page = 1, this.more = !0, this.loading = !0, this.list = [], e.next = 7, 
                        _api2.default.getSalesManOnce(this.sales_id);

                      case 7:
                        t = e.sent, this.item = t.data, this.item.evaluate_num && (this.item.evaluate_num = Number(this.item.evaluate_num).toFixed(2)), 
                        this.project_name || (this.project_name = this.item && this.item.project_name ? this.item.project_name : ""), 
                        this.project_img || (this.project_img = this.item.projects[0] ? this.item.projects[0].cover : ""), 
                        this.salesManName = this.item.name, this.projectsScrollWidth = 122 * this.item.projects.length, 
                        this.item.wechat_qrcode = this.item.wechat_qrcode ? this.item.wechat_qrcode.replace(/^https|http/, "https") : "", 
                        2 == this.item.is_broker ? wx.setNavigationBarTitle({
                            title: "置业顾问详情"
                        }) : wx.setNavigationBarTitle({
                            title: "经纪人详情"
                        }), this.$apply(), wx.stopPullDownRefresh(), wx.hideLoading(), this.loadNext().then(function() {});

                      case 20:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/salesMan/detail"));