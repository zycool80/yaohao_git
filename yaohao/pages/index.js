function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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


var _request = require('./../utils/request.js');
var _request2 = _interopRequireDefault(_request);

var _slicedToArray = function () {
        function e(e, t) {
            var a = [],
                n = !0,
                i = !1,
                o = void 0;
            try {
                for (var r, s = e[Symbol.iterator](); !(n = (r = s.next()).done) && (a.push(r.value), !t || a.length !== t); n = !0);
            } catch (e) {
                i = !0, o = e;
            } finally {
                try {
                    !n && s.return && s.return();
                } finally {
                    if (i) throw o;
                }
            }
            return a;
        }

        return function (t, a) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, a);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }(),
    _createClass = function () {
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
    }(),
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _api = require("./../api/api.js"),
    _api2 = _interopRequireDefault(_api),
    _index = require("./../utils/utilsKit/index.js"),
    globalModel = require("./../models/GlobalModel.js"),
    Index = function (e) {
        function t() {
            var e, a, n, i;
            _classCallCheck(this, t);
            for (var o = arguments.length, r = Array(o), s = 0; s < o; s++) r[s] = arguments[s];
            return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r))),
                n.config = {
                    enablePullDownRefresh: !0,
                    usingComponents: {
                        // LotteryItem: "../components/LotteryItem",
                        HomeProjectItem: "../components/HomeProjectItem"
                    }
                },
                n.data = {
                    upDataCotent: "",
                    showUpdataView: !1,
                    inputShowed: !1,
                    inputPlace: "",
                    type: 1,
                    banners: [],
                    top: [],
                    grids: [],
                    salesBanner: [],
                    newBanner: [],
                    listData: [],
                    sales_man_data: [],
                    featureImgs: [],
                    articleRecommendData: [],
                    recommend_rule: "",
                    recommendBanners: [],
                    lotteries: [],
                    globalConfig: null,
                    tabIndex: 1,
                    tabContent: [],
                    tabContent1: [],
                    isShow: !1,
                    advertisingBanner: null,
                    showTip: !0,
                    guideImg: [],
                    guideImgIndex: 0,
                    guideShow: !1,
                    is_sales_man_id: "",
                    upDataVersion: "",
                    /*banners: [], // 顶部 banner
                    top: null, // 顶部统计
                    listData: [], // 头条*/
                    hotHouse: [], // 热门推荐
                    housesYS: [], // 即将预售
                    housesYZ: [], // 优质楼盘
                    salesMan: [], // 优秀置业顾问推荐
                }, n.methods = {
                //
                onTapNavigate: function onTapNavigate(url, name, m) {
                    if ('热门文章' == name) {
                        if ('more' == m) {
                            wx.switchTab({ url: url });
                        } else {
                            wx.navigateTo({ url: url });
                        }
                    } else {
                        wx.navigateTo({ url: url });
                    }
                },
                onSubmitSwiper: function onSubmitSwiper(url, n) {
                    this.sendFromID(n.detail.formId);
                    wx.navigateTo({
                        url: url
                    });
                },

                getFormId: function getFormId(e) {
                    this.sendFromID(e.detail.formId);
                },
                stopMoveHandle: function stopMoveHandle() {
                    return false;
                },
                goToUrlHandle: function goToUrlHandle(url, type) {
                    this.isShow = false;
                    if (1 == type) {
                        wx.switchTab({
                            url: url
                        });
                    } else {
                        wx.navigateTo({
                            url: url
                        });
                    }
                },


                closeTipHandle: function () {
                    var e = new Date(),
                        t = e.getFullYear(),
                        a = e.getMonth() + 1,
                        n = e.getDate();
                    a < 10 && (a = "0" + a), n < 10 && (n = "0" + n);
                    var i = t + "-" + a + "-" + n,
                        o = new Date(i).getTime() + 2592e5;
                    _index.cache.setWithTimeout("hide_tip_status", !0, o), this.showTip = !0, this.$apply();
                },
                swiperAdClickHandle: function (e, t) {
                    wx.$Analysis.emit("indexSwiperAdClick", {
                        banner_id: e.id,
                        banner_index: t
                    });
                },
                salesmanClickHandle: function (e, t) {
                    var a = {
                        sales_man_id: t.sales_man_id,
                        sales_man_name: t.sales_man_name,
                        session_id: t.session_id
                    };
                    "left" === e ? wx.$Analysis.emit("indexSalesmanLeftClick", a) : wx.$Analysis.emit("indexSalesmanRightClick", a);
                },
                closeUpdateHandle: function () {
                    this.showUpdataView = !1;
                },
                closeDirectHandle: function () {
                    this.guideImg = [];
                    this.$apply();
                },
                projectAnalysis: function (e) {
                    wx.$Analysis.emit("indexButtonClicks", {
                        type: e
                    });
                },
                gridsJumpHandle: function (e, t, a) {
                    if (a && 1 === parseInt(a)) {
                        var n = e;
                        if (e.indexOf("changeType") > -1) {
                            var i = n.match(/changeType=([^&]*)/);
                            i.length > 1 && _index.cache.set("question_index", i[1]), n = n.replace(/\?.*/, "");
                        }
                        wx.switchTab({
                            url: n
                        });
                    } else wx.navigateTo({
                        url: e
                    });
                    wx.$Analysis.emit("indexButtonClicks", {
                        type: t
                    });
                },
                jumpUrlHandle: function (e, t, a) {
                    /*"热门文章" == t ? ("more" == a ? wx.switchTab({
                     url: e
                     }) : wx.navigateTo({
                     url: e
                     }) : (wx.navigateTo({
                     url: e
                     });*/
                },
                closeHideHandle: function () {
                    this.isShow = !1, this.$apply(), wx.$Analysis.emit("indexAlertClose", {
                        message_id: this.advertisingBanner.id
                    });
                },
                swiperNavHandle: function (e, t, a, n) {
                    this.sendFromID(n.detail.formId), wx.navigateTo({
                        url: e
                    }), wx.$Analysis.emit("indexBannerClick", {
                        banner_id: t,
                        index_banner_sort: a
                    });
                },
                getFormIDHandle: function (e) {
                    wx.$Analysis.emit("indexButtonClicks", {
                        type: "分享"
                    }), this.sendFromID(e.detail.formId);
                },
                sendAnalysisHandle: function (e) {
                    var t = e.currentTarget.dataset.item;
                    wx.$Analysis.emit("projectDetailClick", {
                        project_id: t.project_id,
                        name: t.name,
                        area_id: t.area_id,
                        area: t.area
                    });
                }
            }, i = a, _possibleConstructorReturn(n, i);
        }

        return _inherits(t, e),
            _createClass(t, [{
                key: "onLoad",
                value: function (p) {
                    if (p.redirect) {
                        wx.navigateTo({
                            url: decodeURIComponent(p.redirect)
                        });
                    }
                    this.reload();
                    /*var t = this;
                     if (e.redirect) {
                     var a = decodeURIComponent(e.redirect);
                     wx.navigateTo({
                     url: a
                     });
                     }
                     var n = wx.getStorageSync("index_grids_cache");
                     n && (this.grids = n), this.showTip = !globalModel.isAddMyPrograme(), this.reload(),
                     setTimeout(function () {
                     t.showAD(), t.$apply();
                     });*/
                }
            }, {
                key: "onPullDownRefresh",
                value: function () {
                    this.reload();
                    wx.stopPullDownRefresh();
                }
            }, {
                key: "onReady",
                value: function () {
                    /*var e = _wepy2.default.$instance;
                     this.showUpdataView = e.globalData.showUpdataView, this.upDataCotent = e.globalData.content,
                     this.upDataVersion = e.globalData.version, this.$apply();*/
                }
            }, {
                key: "onTabItemTap",
                value: function () {
                    /*this.showTip = !globalModel.isAddMyPrograme(), this.$apply();*/
                }
            }, {
                key: "onShareAppMessage",
                value: function (e) {
                    /*return _index.share.share("我在这里查摇号结果，好方便哦", "/pages/index");*/
                }
            }, {
                key: "loadGlobalConfig",
                value: function () {
                    /*var e = this;
                     return new Promise(function (t) {
                     globalModel.refreshGlobalConfig().then(function (a) {
                     e.top = a.top, e.grids = a.grids, e.inputPlace = a.searchText, e.$apply(), wx.setStorage({
                     key: "index_grids_cache",
                     data: e.grids
                     }), t(), wx.nextTick(function () {
                     e.listData = a.announcement, e.sales_man_data = a.sales_man_data, e.recommend_rule = a.recommend_rule,
                     e.$apply();
                     });
                     }).catch(function () {
                     t();
                     });
                     });*/
                }
            }, {
                key: "reload",
                value: function () {
                    var _this2 = this;
                    //console.log(_this2);
                    (0, _request2.default)({
                        url: '/api/app/common/getIndexInfo'
                    }).then(function (res) {
                        //console.log(res);
                        _this2.banners = res.data.indexBanners;
                        _this2.top = res.data.houseStatusCount;
                        _this2.listData = res.data.articlesTT;
                        _this2.hotHouse = res.data.housesRM;
                        _this2.housesYS = res.data.housesYS;
                        _this2.housesYZ = res.data.housesYZ;
                        _this2.salesMan = res.data.commonUserList;
                        _this2.$apply();
                    });
                    /*var e = this;
                     wx.showLoading({
                     title: "加载中..."
                     }), this.loadGlobalConfig().then(function () {
                     wx.hideLoading(), Promise.all([_api2.default.indexPage.indexRecommendProject(), _api2.default.indexPage.indexLotterys(), _api2.default.getBannerList(1)]).then(function () {
                     var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : res,
                     a = _slicedToArray(t, 3),
                     n = a[0],
                     i = a[1],
                     o = a[2];
                     e.banners = o.data, e.tabContent = n.data.hot ? n.data.hot.data : [], e.salesBanner = n.data.pro ? n.data.pro.data : [],
                     e.tabContent1 = n.data.fine ? n.data.fine.data : [], e.newBanner = i.data.new_opened ? i.data.new_opened.data : [],
                     e.lotteries = i.data.new_lottery ? i.data.new_lottery.data : [], e.$apply(), Promise.all([_api2.default.featureGoodHouse(), _api2.default.articleRecommend(), _api2.default.isSaleMan(), _api2.default.getGuideImage("app_index"), _api2.default.getBannerList(5)]).then(function () {
                     var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : res,
                     a = _slicedToArray(t, 5),
                     n = a[0],
                     i = a[1],
                     o = a[2],
                     r = a[3],
                     s = a[4];
                     e.featureImgs = n && n.data ? n.data : [], e.articleRecommendData = i && i.data ? i.data : [],
                     e.is_sales_man_id = o.sales_man_id || "", e.guideImg = r.data, e.recommendBanners = s.data,
                     e.$apply();
                     });
                     }).catch(function (e) {
                     });
                     });*/
                }
            }, {
                key: "showAD",
                value: function () {
                    /*var e = this;
                     _api2.default.checkAD().then(function (t) {
                     t && t.data && t.data.id && (e.advertisingBanner = t.data, e.isShow = !0, e.$apply());
                     });*/
                }
            }, {
                key: "sendFromID",
                value: function (e) {
                    /*_api2.default.sendFromID(e).then(function (e) {
                     });*/
                }
            }]),
            t;
    }(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/index"));