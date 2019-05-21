var regeneratorRuntime = require("../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, a) {
            function n(i, r) {
                try {
                    var o = t[i](r), s = o.value;
                } catch (e) {
                    return void a(e);
                }
                if (!o.done) return Promise.resolve(s).then(function (e) {
                    n("next", e);
                }, function (e) {
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

function getElemHeightById(e) {
    return new Promise(function (t) {
        wx.createSelectorQuery().select(e).boundingClientRect(function (e) {
            t(e && e.height ? e.height : 0);
        }).exec();
    });
}

function getTopByElem(e) {
    return new Promise(function (t) {
        var a = wx.createSelectorQuery();
        a.select("#top-swiper").boundingClientRect(), a.select(e).boundingClientRect(),
            a.exec(function (e) {
                t(e && e.length > 1 && e[1] ? Math.abs(e[1].top - e[0].top) - 80 : 0);
            });
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _request = require('./../utils/request.js');
var _request2 = _interopRequireDefault(_request);

var _slicedToArray = function () {
        function e(e, t) {
            var a = [], n = !0, i = !1, r = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (a.push(o.value),
                !t || a.length !== t); n = !0) ;
            } catch (e) {
                i = !0, r = e;
            } finally {
                try {
                    !n && s.return && s.return();
                } finally {
                    if (i) throw r;
                }
            }
            return a;
        }

        return function (t, a) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, a);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }(), _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, _createClass = function () {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }

        return function (t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
        };
    }(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy),
    _api = require("./../api/api.js"), _api2 = _interopRequireDefault(_api),
    _DrawImage = require("./../utils/DrawImage.js"), _DrawImage2 = _interopRequireDefault(_DrawImage),
    _addApplets = require("./../components/addApplets.js"), _addApplets2 = _interopRequireDefault(_addApplets),
    _popupWindow = require("./../components/popupWindow.js"), _popupWindow2 = _interopRequireDefault(_popupWindow),
    _BackHome = require("./../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome),
    _require = require("./../utils/utilsKit/index.js"), share = _require.share, tip = _require.tip,
    common = _require.common, redis = _require.redis, cache = _require.cache, underscore = _require.underscore,
    _require2 = require("./../models/GlobalModel.js"), ReportError = _require2.ReportError,
    getUserInfo = _require2.getUserInfo, getGlobalConfig = _require2.getGlobalConfig,
    isAddMyPrograme = _require2.isAddMyPrograme, _require3 = require("./../models/GStack.js"),
    _pageStack = _require3._pageStack, _lotNavbarStack = _require3._lotNavbarStack, Lottery = function (e) {
        function t() {
            var e, a, n, i;
            _classCallCheck(this, t);
            for (var r = arguments.length, o = Array(r), s = 0; s < r; s++) o[s] = arguments[s];
            return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))),
                n.config = {
                    navigationBarTitleText: "摇号详情",
                    navigationBarBackgroundColor: "#3772cc",
                    enablePullDownRefresh: !0
                }, n.data = {
                navbarItems: [{
                    id: "#house",
                    title: "楼盘",
                    ischecked: !0
                }, {
                    id: "#housetype",
                    title: "户型",
                    ischecked: !1
                }, {
                    id: "#comment",
                    title: "评论",
                    ischecked: !1
                }],
                serviceQrCode: "",
                u_id: 0,
                s_id: 0,
                project_id: 0,
                id: 0,
                sales_man_id: 0,
                showTip: !1,
                searchTopPadding: 0,
                is_not_lottery: 0,
                not_lottery_total: 0,
                showType: !1,
                shareMessage: null,
                swiperList: [],

                houseAlbum: {
                    photos: []
                },

                swiperIndex: 0,
                baseDetail: {},
                priceList: [],
                houseList: [],
                salesmanList: [],
                lotteryInfo: [],
                sourceList: [],
                timeLineList: [],
                dynamics: {
                    count: 0,
                    list: []
                },
                historyLottery: [],
                groupImgList: [],
                comments: {
                    list: [],
                    count: 0
                },
                articles: {
                    list: [],
                    count: 0
                },
                youLikeList: [],
                guideImageData: [],
                activityList: [],
                btnStatus: [],
                navbarItemsShow: !1,
                historyLotteryShow: !1,
                guideShow: !0,
                shareShow: !1,
                followModelShow: !1,
                isComplete: 2,
                drawCanvas: !1,
                canvasWidth: 0,
                canvasHeight: 0,
                canvasIndex: 0,
                drawContext: null,
                aplName: "",
                aplPhone: "",
                project_time: "",
                couponsRules: "",
                projectCoupon: [],
                answer_show: !1
            }, n.computed = {
                showHome: function () {
                    return 1 === getCurrentPages().length;
                }
            }, n.$repeat = {}, n.$props = {
                BackHome: {
                    "xmlns:wx": ""
                }
            }, n.$events = {}, n.components = {
                Addapplets: _addApplets2.default,
                Popup: _popupWindow2.default,
                BackHome: _BackHome2.default
            }, n.methods = {
                closeTip: function () {
                    _wepy2.default.$instance.globalData.hideTip = !0;
                    var e = new Date(), t = e.getFullYear(), a = e.getMonth() + 1, n = e.getDate();
                    a < 10 && (a = "0" + a), n < 10 && (n = "0" + n);
                    var i = t + "-" + a + "-" + n, r = new Date(i).getTime() + 2592e5;
                    cache.setWithTimeout("hide_tip_status", !0, r), this.showTip = !0, this.searchTopPadding = 0,
                        this.$apply();
                },
                hideCoupon: function () {
                    var e = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    e.showType = !1, e.$apply();

                                case 2:
                                case "end":
                                    return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                toggleCoupon: function () {
                    var e = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                        var a;
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, _api2.default.activity.getEventStatus(e.projectCoupon.id, e.project_id);

                                case 2:
                                    a = t.sent, 0 == a.code && (e.showType = !e.showType), e.$apply();

                                case 5:
                                case "end":
                                    return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                viewMore: function (e) {
                    var t = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function a() {
                        return regeneratorRuntime.wrap(function (a) {
                            for (; ;) switch (a.prev = a.next) {
                                case 0:
                                    t.lotteries[e].showToggle = !t.lotteries[e].showToggle, t.$apply();

                                case 2:
                                case "end":
                                    return a.stop();
                            }
                        }, a, t);
                    }))();
                },
                aplNameChange: function (e) {
                    this.aplName = e.detail.value, this.$apply();
                },
                aplPhoneChange: function (e) {
                    this.aplPhone = e.detail.value, this.$apply();
                },
                getDiscount: function () {
                    var e = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                        var a, n, i;
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (a = e.aplName ? e.aplName.trim() : "", n = e.aplPhone ? e.aplPhone.trim() : "",
                                        a) {
                                        t.next = 3;
                                        break;
                                    }
                                    return t.abrupt("return", tip.toast("请输入名字", "", "none"));

                                case 3:
                                    if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(n)) {
                                        t.next = 5;
                                        break;
                                    }
                                    return t.abrupt("return", tip.toast("请输入正确电话号码", "", "none"));

                                case 5:
                                    return wx.showLoading({
                                        title: "领取中...",
                                        mask: !0
                                    }), t.next = 8, _api2.default.activity.holidayEvents(e.projectCoupon.id, e.project_id, e.aplName, e.aplPhone);

                                case 8:
                                    i = t.sent, e.project_time = e.projectCoupon.coupon.started_at + "-" + e.projectCoupon.coupon.ended_at,
                                        wx.hideLoading(), 0 == i.code && (tip.toast("提交成功", "", "none"), wx.navigateTo({
                                        url: "/subPackages/activity/pages/specialPrice?project_name=" + e.baseDetail.name + "&price=" + e.projectCoupon.coupon.amount + "&project_time=" + e.project_time + "&project_id=" + e.project_id
                                    }), e.showType = !1, e.$apply());

                                case 12:
                                case "end":
                                    return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                swiperPreviewHandle: function (e) {
                    var t = e.currentTarget.dataset.index, a = [];
                    this.swiperList.photos.forEach(function (e) {
                        a.push(e.image);
                    }), wx.previewImage({
                        current: a[t],
                        urls: a
                    });
                },
                onSlideChangeEnd: function (e) {
                    this.swiperIndex = e.detail.current;
                },
                playVideoHandle: function () {
                    wx.navigateTo({
                        url: "/subPackages/tools/pages/playVideoPage?url=" + this.baseDetail.video_url
                    });
                },
                toProjectHandle: function () {
                    wx.openLocation({
                        latitude: parseFloat(this.baseDetail.y_axis),
                        longitude: parseFloat(this.baseDetail.x_axis),
                        name: this.baseDetail.project_location || ""
                    });
                },
                changePkColor: function () {
                    this.baseDetail.pk || "object" === _typeof(this.baseDetail.pk) ? this.baseDetail.pk = common.mergeAll(this.baseDetail.pk, {
                        bg: "#f7776a"
                    }) : this.baseDetail.pk = {
                        bg: "#f7776a"
                    }, this.$apply();
                },
                lotteryRemindHandle: function () {
                    var e = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                        var a, n;
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, _api2.default.getlotteryRemind(e.project_id);

                                case 2:
                                    return a = t.sent, "success" === a.message && (e.baseDetail.remind = a.data.status,
                                        e.$apply(), n = 0 == e.baseDetail.remind ? "取消成功" : "设置成功", wx.showModal({
                                        title: "提示",
                                        content: n ? n : '',
                                        showCancel: !1
                                    })), t.next = 6, e.methods.btnEventTrack.call(e, "楼盘摇号提醒");

                                case 6:
                                case "end":
                                    return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                clickMenuHandle: function (e, t) {
                    this.navbarItemClickFn(e, t);
                },
                navigateToHandle: function (e) {
                    wx.navigateTo({
                        url: e
                    });
                },
                historyYaoShowHandle: function () {
                    this.historyLotteryShow = !this.historyLotteryShow;
                },
                guideHideHandle: function () {
                    this.guideShow = !1;
                },
                contactSalesHandle: function () {
                    var e = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                        var a, n;
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, _api2.default.recommendSalesMan(e.project_id);

                                case 2:
                                    if (a = t.sent, n = getUserInfo(), e.isEnteringChat = a.data, e.answer_show = !1,
                                    !n || !n.phone) {
                                        t.next = 14;
                                        break;
                                    }
                                    if (!e.isThatSalesMan) {
                                        t.next = 9;
                                        break;
                                    }
                                    return t.abrupt("return", wx.navigateTo({
                                        url: "/subPackages/me/pages/chatInterface?user_id=" + e.u_id + "_" + e.s_id
                                    }));

                                case 9:
                                    if (!e.isEnteringChat) {
                                        t.next = 11;
                                        break;
                                    }
                                    return t.abrupt("return", wx.navigateTo({
                                        url: "/subPackages/me/pages/chatInterface?user_id=" + e.isEnteringChat
                                    }));

                                case 11:
                                    wx.navigateTo({
                                        url: "/pages/salesMan/index?id=" + e.project_id + "&title=" + e.baseDetail.name + "&andrees=detail&project_img=" + e.swiperList.cover
                                    }), t.next = 15;
                                    break;

                                case 14:
                                    wx.redirectTo({
                                        url: "/subPackages/tools/pages/telLogin?direct=" + encodeURIComponent("/pages/lotteryDetail?project_id=" + e.project_id + "&id=" + e.id + "&sales_man_id=" + e.sales_man_id)
                                    });

                                case 15:
                                case "end":
                                    return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                followHandle: function () {
                    var e = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                        var a;
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return a = e.btnStatus.attention, t.next = 3, _api2.default.followAttention(e.project_id, e.id);

                                case 3:
                                    e.btnStatus.attention = 1 == a ? 2 : 1, e.followModelShow = !0, e.$apply();

                                case 6:
                                case "end":
                                    return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                phoneCallHandle: function (e) {
                    var t = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function a() {
                        var n;
                        return regeneratorRuntime.wrap(function (a) {
                            for (; ;) switch (a.prev = a.next) {
                                case 0:
                                    if (!/^(0|1)\d{10}$/.test(e)) {
                                        a.next = 5;
                                        break;
                                    }
                                    return a.next = 3, _api2.default.getPhoneNum(t.project_id, 2);

                                case 3:
                                    n = a.sent, 0 === n.code && (e = n.data.phone);

                                case 5:
                                    wx.showModal({
                                        title: "提示",
                                        content: "拨通后请说明来自成都摇号助手",
                                        success: function (t) {
                                            t.confirm && wx.makePhoneCall({
                                                phoneNumber: e
                                            });
                                        }
                                    });

                                case 6:
                                case "end":
                                    return a.stop();
                            }
                        }, a, t);
                    }))();
                },
                toStatementHandle: function () {
                    wx.$Analysis.emit("projectDtailsClick", {
                        new_dynamic: "new_dynamic"
                    }), this.dynamics.list.length > 0 && wx.navigateTo({
                        url: "/subPackages/news/pages/statement?lottery_id=" + this.id + "&project_id=" + this.project_id + "&title=" + this.baseDetail.name
                    }), this.dynamics.list.length < 1 && wx.navigateTo({
                        url: "/subPackages/news/pages/createStatement?lottery_id=" + this.id + "&project_id=" + this.project_id + "&project_name=" + this.baseDetail.name
                    });
                },
                photoActive: function () {
                    this.swiperIndex = this.baseDetail.video_url ? 1 : 0, this.$apply();
                },
                videoActive: function () {
                    this.swiperIndex = 0, this.$apply();
                },
                toPhotosHandle: function () {
                    wx.navigateTo({
                        url: "/subPackages/project/pages/photos?project_id=" + this.project_id + "&project_name=" + this.baseDetail.name
                    });
                },
                toRulesHandle: function (e, t) {
                    /*wx.showLoading({
                        title: "加载中..."
                    }), wx.$Analysis.emit("estateLotDetailsClicks", {
                        name: t
                    });*/
                    var a = ["doc", "xls", "pdf", "docx", "xlsx"], n = "doc";
                    if (/(\.jpg|\.png|\.jpeg|\.gif)$/i.test(e)) wx.hideLoading(), wx.previewImage({
                        urls: [e]
                    }); else {
                        for (var i in a) {
                            var r = a[i];
                            new RegExp("." + r, "i").test(e) && (n = r);
                        }
                        wx.downloadFile({
                            url: e,
                            success: function (e) {
                                if (200 === e.statusCode) {
                                    var t = e.tempFilePath;
                                    wx.openDocument({
                                        filePath: t,
                                        fileType: n
                                    });
                                }
                            },
                            complete: function () {
                                wx.hideLoading();
                            }
                        });
                    }
                },
                stopMoveHandle: function () {
                    return !1;
                },
                toggleShareHandle: function (e) {
                    var t = e.currentTarget.dataset.toggle;
                    this.shareShow = "open" === t, this.$apply();
                },
                createPosterHandle: function () {
                    var e = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return e.shareShow = !1, e.drawCanvas = !0, e.$apply(), t.next = 5, e.drawImage().catch(function (t) {
                                        e.drawCanvas = !1, wx.hideLoading(), tip.toast("楼盘海报生成失败", "", "none"), e.$apply();
                                    });

                                case 5:
                                case "end":
                                    return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                closeCanvasHandle: function () {
                    this.drawCanvas = !1, this.$apply();
                },
                switchCanvasHandle: function () {
                    var e = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    e.canvasIndex >= e.canvasLength - 1 ? e.canvasIndex = 0 : e.canvasIndex++, e.$apply();

                                case 2:
                                case "end":
                                    return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                saveShareImageHandle: function () {
                    var e = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.drawContext.saveCanvasToTempFile(e.canvasIndex);

                                case 3:
                                    tip.success("保存成功"), t.next = 9;
                                    break;

                                case 6:
                                    t.prev = 6, t.t0 = t.catch(0), tip.toast("保存失败", "", "none");

                                case 9:
                                    return t.prev = 9, e.drawCanvas = !1, e.$apply(), t.finish(9);

                                case 13:
                                case "end":
                                    return t.stop();
                            }
                        }, t, e, [[0, 6, 9, 13]]);
                    }))();
                },
                saveQrcodeHandle: function () {
                    var e = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    wx.downloadFile({
                                        url: e.serviceQrCode,
                                        success: function (t) {
                                            wx.saveImageToPhotosAlbum({
                                                filePath: t.tempFilePath,
                                                success: function () {
                                                    e.followModelShow = !1, e.$apply(), tip.toast("保存成功");
                                                },
                                                fail: function () {
                                                    e.followModelShow = !1, e.$apply(), tip.toast("保存失败");
                                                }
                                            });
                                        },
                                        fail: function () {
                                            e.followModelShow = !1, e.$apply();
                                        }
                                    });

                                case 1:
                                case "end":
                                    return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                hideFollowModelHandle: function () {
                    this.followModelShow = !1, this.$apply();
                },
                lotteryRule: function () {
                    this.answer_show = !0, this.$apply();
                },
                cancelRulesShow: function () {
                    this.answer_show = !1, this.$apply();
                },
                toHouseTypeHandle: function (e) {
                    wx.navigateTo({
                        url: "/subPackages/project/pages/housePlanDetail?id=" + e + "&project_id=" + this.project_id + "&project_name=" + this.baseDetail.name
                    });
                },
                openPreviewImg: function (e) {
                    for (var t = [], a = 0; a < this.houseList.length; a++) t.push(this.houseList[a].original_image);
                    wx.previewImage({
                        current: this.houseList[e].original_image,
                        urls: t
                    });
                },
                btnEventTrack: function (e) {
                    /*wx.$Analysis.sendEvent(e, {
                        name: this.baseDetail.name,
                        project_id: this.baseDetail.project_id
                    });*/
                },
                shake: function (e) {
                    return wx.$Analysis.emit("estateLotDetailsClicks", {
                        name: e
                    }), tip.toast("暂无" + e, "", "none");
                },
                buryHandle: function (e) {
                    wx.$Analysis.emit("estateLotDetailsClicks", {
                        name: e
                    });
                },
                guessYouLike: function () {
                    wx.$Analysis.emit("projectDtailsClick", {
                        guessYouLike: "guessYouLike"
                    });
                },
                historyYao: function () {
                    wx.$Analysis.emit("projectDtailsClick", {
                        historyYao: "historyYao"
                    });
                },
                discussionGroups: function (e, t, a) {
                    4 == t ? wx.navigateToMiniProgram({
                        appId: a,
                        path: e,
                        envVersion: "release",
                        fail: function () {
                            tip.toast("跳转失败", "", "none");
                        }
                    }) : 1 == t ? wx.switchTab({
                        url: e
                    }) : wx.navigateTo({
                        url: e
                    }), wx.$Analysis.emit("projectDtailsClick", {
                        discussionGroups: "discussionGroups"
                    });
                },
                userComments: function () {
                    wx.$Analysis.emit("projectDtailsClick", {
                        user_comments: "user_comments"
                    });
                },
                yaohao: function () {
                    wx.$Analysis.emit("projectDtailsClick", {
                        yaohao: "yaohao"
                    });
                },
                lookBuyHouseData: function () {
                    wx.$Analysis.emit("projectDtailsClick", {
                        lookBuyHouseData: "lookBuyHouseData"
                    });
                },
                moreSalesMan: function () {
                    wx.$Analysis.emit("projectDtailsClick", {
                        more_salseman: "more_salseman"
                    });
                },
                estateDetailsHandle: function () {
                    wx.$Analysis.emit("estateDetailsClick", {
                        name: "查看详情"
                    });
                }
            }, i = a, _possibleConstructorReturn(n, i);
        }

        return _inherits(t, e), _createClass(t, [{
            key: "scrollPageFn",
            value: function () {
            }
        }, {
            key: "navbarItemClickFn",
            value: function () {
            }
        }, {
            key: "onLoad",
            value: function (e) {
                /*var t = this;
                this.pageInit(e), _pageStack.push(e), /!*wx.showLoading({
                    title: "加载中"
                }), *!/this.loadBaseDetailInfo().then(function () {
                    if (e.redirect) {
                        var a = decodeURIComponent(e.redirect);
                        wx.navigateTo({
                            url: a
                        });
                    }
                    return t.loadOtherData();
                }).then(), wx.hideLoading();*/
                var t = this;
                this.pageInit(e);
                _pageStack.push(e);
                this.loadBaseDetailInfo();
            }
        }, {
            key: "onShow",
            value: function () {
                var e = this, t = (_wepy2.default.$instance, _lotNavbarStack.last());
                this.showTip = !isAddMyPrograme(), this.searchTopPadding = this.showTip ? 0 : 38,
                t && (this.navbarItems = t), this.$apply();
                var a = redis.get("refreshPkIconStatus");
                if (a && this.baseDetail && this.baseDetail.project_id) {
                    wx.setNavigationBarTitle({
                        title: "摇号助手-" + this.baseDetail.name
                    });
                    var n = a.split(",");
                    n.indexOf(this.project_id) > -1 && _api2.default.getDetails(this.project_id, this.id).then(function (t) {
                        console.log(t);
                        e.baseDetail = t.data, e.$apply(), n.splice(n.indexOf(e.project_id), 1), redis.set("refreshPkIconStatus", n.toString(), 60);
                    });
                }
            }
        }, {
            key: "onReady",
            value: function () {
                /*function e(e) {
                    var t = this, n = e.scrollTop;
                    a().then(function (e) {
                        if (n > e.swiper) {
                            t.navbarItemsShow = !0;
                            var a = 0, i = e["#house"], r = e["#housetype"], o = e["#lottery"], s = e["#comment"];
                            e["#recommend"];
                            n < r && (a = 0), n > i && a++, n > r + 200 && a++, o && n > o + 200 && a++, n > s + 300 && a++;
                            for (var c = 0; c < t.navbarItems.length; c++) t.navbarItems[c].ischecked = c == a;
                        } else t.navbarItemsShow = !1;
                        t.$apply();
                    });
                }

                function t(e, t) {
                    for (var a = 0; a < this.navbarItems.length; a++) this.navbarItems[a].ischecked = a == t;
                    getTopByElem(e).then(function (e) {
                        wx.pageScrollTo({
                            scrollTop: e,
                            duration: 0
                        });
                    });
                }

                this.lazyloadPageDatas(), _lotNavbarStack.push(common.deepCopy(this.navbarItems));
                var a = this.getNavbarItemsTop();
                a().then(), this.scrollPageFn = underscore.throttle(e, 400), this.navbarItemClickFn = underscore.throttle(t, 200);*/
            }
        }, {
            key: "onUnload",
            value: function () {
                _pageStack.pop(), _lotNavbarStack.pop();
            }
        }, {
            key: "onPageScroll",
            value: function (e) {
                this.scrollPageFn && this.scrollPageFn(e);
            }
        }, {
            key: "onReachBottom",
            value: function () {
                for (var e = 0, t = this.navbarItems.length; e < t; e++) this.navbarItems[e].ischecked = e === t - 1;
                this.$apply();
            }
        }, {
            key: "onPullDownRefresh",
            value: function () {
                /*var e = this, t = _pageStack.last();
                t && this.pageInit(t), wx.showLoading({
                    title: "加载中"
                }), this.loadBaseDetailInfo().then(function () {
                    wx.stopPullDownRefresh(), wx.hideLoading(), e.lazyloadPageDatas();
                });*/
                this.loadBaseDetailInfo();
            }
        }, {
            key: "lazyloadPageDatas",
            value: function () {
                /*var e = this;
                this.secondScreen().then(function () {
                    return e.lastScreen();
                }).then(function () {
                    return e.fourScreen();
                }).then(function () {
                    e.lotteryInfo.length > 0 ? e.youLikeList.length > 0 ? e.navbarItems = [{
                        id: "#house",
                        title: "楼盘",
                        ischecked: !0
                    }, {
                        id: "#housetype",
                        title: "户型",
                        ischecked: !1
                    }, {
                        id: "#lottery",
                        title: "摇号",
                        ischecked: !1
                    }, {
                        id: "#comment",
                        title: "评论",
                        ischecked: !1
                    }, {
                        id: "#recommend",
                        title: "推荐",
                        ischecked: !1
                    }] : e.navbarItems = [{
                        id: "#house",
                        title: "楼盘",
                        ischecked: !0
                    }, {
                        id: "#housetype",
                        title: "户型",
                        ischecked: !1
                    }, {
                        id: "#lottery",
                        title: "摇号",
                        ischecked: !1
                    }, {
                        id: "#comment",
                        title: "评论",
                        ischecked: !1
                    }] : e.youLikeList.length > 0 && (e.navbarItems = [{
                        id: "#house",
                        title: "楼盘",
                        ischecked: !0
                    }, {
                        id: "#housetype",
                        title: "户型",
                        ischecked: !1
                    }, {
                        id: "#comment",
                        title: "评论",
                        ischecked: !1
                    }, {
                        id: "#recommend",
                        title: "推荐",
                        ischecked: !1
                    }]), e.$apply();
                }).catch();*/
            }
        }, {
            key: "drawImage",
            value: function () {
                function e() {
                    return t.apply(this, arguments);
                }

                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, a, n, i, r, o = this;
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return wx.showLoading({
                                    title: "生成中..."
                                }), t = wx.getSystemInfoSync(), a = t.windowWidth, n = 750, i = 1334, r = a / n,
                                    this.canvasWidth = n * r * .7, this.canvasHeight = i * r * .7, this.drawContext = new _DrawImage2.default({
                                    canvasWidth: this.canvasWidth,
                                    canvasHeight: this.canvasHeight,
                                    canvasScale: .8 * r,
                                    canvasIDs: ["myCanvas1", "myCanvas2", "myCanvas3", "myCanvas4", "myCanvas5"]
                                }), this.canvasLength = this.drawContext.canvasIDs.length, this.sumWidth = this.drawContext.canvasIDs.length * this.canvasWidth,
                                    e.next = 9, this.drawContext.start({
                                    name: this.baseDetail.name,
                                    cover: this.swiperList.cover.replace(/-original\.jpg/, ""),
                                    project_id: this.baseDetail.project_id,
                                    lottery_id: this.baseDetail.lottery_id || "",
                                    avg_price: this.baseDetail.avg_price
                                });

                            case 9:
                                return e.next = 11, this.drawContext.drawImage().catch(function (e) {
                                    ReportError.send({
                                        errMsg: "楼盘海报生成失败",
                                        data: JSON.stringify(e),
                                        path: "pages/lotteryDetail",
                                        params: {
                                            id: o.id,
                                            u_id: o.u_id,
                                            s_id: o.s_id,
                                            project_id: o.project_id
                                        }
                                    });
                                });

                            case 11:
                                wx.hideLoading();

                            case 12:
                            case "end":
                                return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, {
            key: "loadBaseDetailInfo",
            value: function () {
                var self = this;
                //console.log(self);

                (0, _request2.default)({
                    url: '/api/bos/house/detail',
                    data: {
                        id: self.project_id
                    }
                }).then(function (res) {
                    //console.log(res);
                    self.baseDetail = res.data.house;
                    res.data.housePartImages.map(function (i,t) {
                        i.imageUrl = i.imageUrl.replace(/\["|"\]/ig, '');
                    });
                    self.houseList = res.data.housePartImages;

                    self.comments.count = res.data.houseComments.length;
                    self.comments.list = res.data.houseComments;

                    self.articles.count = res.data.houseArticles.length;
                    self.articles.list = res.data.houseArticles;

                    self.dynamics.count = res.data.houseDynamics.length;
                    self.dynamics.list = res.data.houseDynamics;

                    self.houseAlbum.photos = function(){
                        var arr = [];
                        if(res.data.houseAlbum.shijingImages){
                            arr.push({image:res.data.houseAlbum.shijingImages})
                        }
                        if(res.data.houseAlbum.xiaoguoImages){
                            arr.push({image:res.data.houseAlbum.xiaoguoImages})
                        }
                        if(res.data.houseAlbum.yangbanImages){
                            arr.push({image:res.data.houseAlbum.yangbanImages})
                        }
                        if(res.data.houseAlbum.zhoubianImages){
                            arr.push({image:res.data.houseAlbum.zhoubianImages})
                        }
                        return arr;
                    }();
                    if(self.houseAlbum.photos.length){
                        self.swiperList.cover = self.houseAlbum.photos[0].image;
                    }

                    //console.log(self.houseAlbum.photos,self.swiperList.cover, self.swiperList);

                    self.$apply();
                });


                // base info
                //console.log('loadBaseDetailInfo');
                /*return new Promise(function (t) {
                    Promise.all([_api2.default.getSwiperImage(e.project_id), _api2.default.getDetails(e.project_id, e.id, e.is_not_lottery)]).then(function (x) {
                        /!*var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : res,
                            n = _slicedToArray(a, 4), i = n[0], r = n[1], o = n[2], s = n[3];
                        e.priceList = i.data.prices ? common.toJSON(i.data.prices) : [], e.swiperList = r.data,
                            e.baseDetail = o.data, e.shareMessage = s.data, e.baseDetail.not_lottery && (e.not_lottery_total = e.baseDetail.not_lottery.reduce(function (e, t) {
                            return e += t.surplus_count ? parseInt(t.surplus_count) : 0;
                        }, 0)), e.id = e.baseDetail.lottery_id, wx.setNavigationBarTitle({
                            title: "摇号助手-" + e.baseDetail.name
                        }), e.$apply(), t();*!/

                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : res,
                            n = _slicedToArray(a, 4), i = n[0], r = n[1], o = n[2], s = n[3];

                        console.log(arguments);

                        e.$apply();

                    }).catch(function (e) {
                        t();
                    });
                });*/
            }
        }, {
            key: "secondScreen",
            value: function () {
                var e = this;
                // 户型图
                //console.log('huxingtu');
                /*return new Promise(function (t) {
                    Promise.all([_api2.default.houseTypePhotos(e.project_id, e.id, 0, e.id ? 1 : ""), _api2.default.getLotsalesMan(e.project_id), _api2.default.getLotCategories(e.id)]).then(function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : res,
                            n = _slicedToArray(a, 3), i = n[0], r = n[1], o = n[2];
                        e.houseList = i.data, e.isComplete = i.is_complete, e.salesmanList = r.data, e.lotteryInfo = o.data,
                            e.$apply(), t();
                    }).catch(function (e) {
                        t();
                    });
                });*/
            }
        }, {
            key: "lastScreen",
            value: function () {
                /*var e = this;
                return new Promise(function (t) {
                    Promise.all([_api2.default.getlotButtonList(e.id), _api2.default.getLotLines(e.id), _api2.default.getDynamic(e.project_id, "", "1", "")]).then(function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : res,
                            n = _slicedToArray(a, 3), i = n[0], r = n[1], o = n[2];
                        e.sourceList = i.data, r.data && (e.timeLineList = r.data), e.dynamics = {
                            list: o.data.data,
                            count: o.data.count
                        }, e.$apply(), t();
                    }).catch(function (e) {
                        t();
                    });
                });*/
            }
        }, {
            key: "fourScreen",
            value: function () {
                /*var e = this;
                return new Promise(function (t) {
                    Promise.all([_api2.default.historyLottery(e.project_id, e.id), _api2.default.getProjectCommentList(e.project_id), _api2.default.projectArticles(e.project_id), _api2.default.guessYouLike(e.project_id, 1), _api2.default.getLotMaterial(e.id, e.project_id)]).then(function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : res,
                            n = _slicedToArray(a, 5), i = n[0], r = n[1], o = n[2], s = n[3], c = n[4];
                        e.historyLottery = i.data, e.comments = {
                            list: r.data.data,
                            count: r.data.num
                        }, e.articles = {
                            list: o.data.data,
                            count: o.data.count
                        }, e.youLikeList = s.data.data, e.groupImgList = c.data, e.$apply(), t();
                    }).catch(function (e) {
                        t();
                    });
                });*/
            }
        }, {
            key: "loadOtherData",
            value: function () {
                var e = this;
                return new Promise(function (t) {
                    parseInt(e.u_id) && parseInt(e.s_id) && _api2.default.shareIsProjectSalesMan(e.u_id, e.project_id).then(function (t) {
                        t.data && t.data.length > 0 && (e.isThatSalesMan = !0, e.sales_man_id && _api2.default.getSalesManOnce(e.sales_man_id).then(function (t) {
                            e.salesManInfo = t.data, e.$apply();
                        }));
                    }), Promise.all([_api2.default.getlotActivity(), _api2.default.getGuideImage("lottery_detail"), _api2.default.getBtnStatus(e.id, e.project_id), _api2.default.getProjectCoupon(e.project_id), getGlobalConfig()]).then(function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : res,
                            n = _slicedToArray(a, 5), i = n[0], r = n[1], o = n[2], s = n[3], c = n[4];
                        e.activityList = i.data, e.guideImageData = r.data, e.btnStatus = o.data, e.serviceQrCode = c.serviceQrCode,
                            e.couponsRules = c.activity_rules, s.data && s.data.data && (e.projectCoupon = s.data.data),
                            e.$apply(), t();
                    }).catch(function (e) {
                        t();
                    });
                });
            }
        }, {
            key: "getNavbarItemsTop",
            value: function () {
                var e = {}, t = [], a = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var i, r, o;
                    return regeneratorRuntime.wrap(function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                if (t.length < 1) for (i in a.navbarItems) t.push(a.navbarItems[i].id);
                                if (e.swiper && !(e.swiper < 1)) {
                                    n.next = 5;
                                    break;
                                }
                                return n.next = 4, getElemHeightById("#top-swiper");

                            case 4:
                                e.swiper = n.sent;

                            case 5:
                                r = 0;

                            case 6:
                                if (!(r < t.length)) {
                                    n.next = 16;
                                    break;
                                }
                                if (o = t[r], !(e[o] && e[o] > 0)) {
                                    n.next = 10;
                                    break;
                                }
                                return n.abrupt("break", 16);

                            case 10:
                                return n.next = 12, getTopByElem(o);

                            case 12:
                                e[o] = n.sent;

                            case 13:
                                r++, n.next = 6;
                                break;

                            case 16:
                                return n.abrupt("return", e);

                            case 17:
                            case "end":
                                return n.stop();
                        }
                    }, n, this);
                }));
            }
        }, {
            key: "pageInit",
            value: function (e) {
                this.u_id = e.u_id || "", this.s_id = e.s_id || 0, this.project_id = e.project_id,
                    this.id = e.id || "", this.sales_man_id = e.sales_man_id || "", this.is_not_lottery = e.is_not_lottery || 0;
            }
        }, {
            key: "onShareAppMessage",
            value: function () {
                var e = {
                    title: "",
                    path: "",
                    imageUrl: ""
                };
                return this.shareMessage && (e.title = this.shareMessage.title, e.path = this.shareMessage.url),
                    share.share(e.title, e.path, e.imageUrl);
            }
        }]), t;
    }(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Lottery, "pages/lotteryDetail"));