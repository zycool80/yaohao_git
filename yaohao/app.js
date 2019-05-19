function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, a) {
    if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, a) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !a || "object" != typeof a && "function" != typeof a ? e : a;
}

function _inherits(e, a) {
    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
    e.prototype = Object.create(a && a.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function () {
    function e(e, a) {
        for (var s = 0; s < a.length; s++) {
            var t = a[s];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0),
                Object.defineProperty(e, t.key, t);
        }
    }

    return function (a, s, t) {
        return s && e(a.prototype, s), t && e(a, t), a;
    };
}(),
    _wepy = require("./npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy);

//require("./npm/wepy-async-function/index.js");

//var _cache = require("./utils/utilsKit/lib/cache.js"), _cache2 = _interopRequireDefault(_cache);

//("./utils/ald-stat.js"), require("./plugin/share/managementShare.js"), require("./plugin/monitor/index.js");

//var _require = require("./models/Analysis.js"), AnalysisEvent = _require.AnalysisEvent;

//wx.$Analysis = AnalysisEvent;

var regeneratorRuntime = require("./npm/regenerator-runtime/runtime.js");

var api = require("./api/api.js"), _class = function (e) {
    function a() {
        _classCallCheck(this, a);
        var e = _possibleConstructorReturn(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
        return e.config = {
            navigationBarTitleText: "成都摇号助手",
            permission: {
                "scope.userLocation": {
                    desc: "获取地理位置"
                }
            },
            navigateToMiniProgramAppIdList: ["wxba2b83f614aabe46", "wx427d97dcecaf9d0d", "wx56e7d11c3d442700", "wx173dab6b85581480", "wx307458db245a39a0"],
            pages: ["pages/index", "pages/me/index", "pages/index2", "pages/lotteryDetail", "pages/lotteryResult", "pages/webview", "pages/webview2", "pages/lottery/showCode", "pages/project/index", "pages/project/search", "pages/posts/detail", "pages/salesMan/index", "pages/salesMan/detail", "pages/consult/index"],
            window: {
                navigationBarTextStyle: "white",
                navigationBarTitleText: "成都摇号助手",
                navigationBarBackgroundColor: "#2d8cf0",
                backgroundColor: "#f2f2f2"
            },
            networkTimeout: {
                request: 6e4,
                connectSocket: 1e4,
                uploadFile: 3e4,
                downloadFile: 1e4
            },
            tabBar: {
                color: "#999",
                selectedColor: "#000",
                backgroundColor: "#fff",
                borderStyle: "white",
                list: [{
                    pagePath: "pages/index",
                    text: "首页",
                    iconPath: "/images/icons/homepage.png",
                    selectedIconPath: "/images/icons/homepage_fill.png",
                    selectedColor: "#000",
                    active: !1
                }, {
                    pagePath: "pages/project/index",
                    text: "楼盘",
                    iconPath: "/images/icons/createtask.png",
                    selectedIconPath: "/images/icons/createtask_fill.png",
                    selectedColor: "#000",
                    active: !1
                }, {
                    pagePath: "pages/consult/index",
                    text: "发现",
                    iconPath: "/images/icons/question.png",
                    selectedIconPath: "/images/icons/question_fill.png",
                    selectedColor: "#000",
                    active: !1
                }, {
                    pagePath: "pages/me/index",
                    text: "我的",
                    iconPath: "/images/icons/mine.png",
                    selectedIconPath: "/images/icons/mine_fill.png",
                    selectedColor: "#000",
                    active: !1
                }],
                position: "bottom"
            },
            /*subPackages: [{
             root: "subPackages/news",
             pages: ["pages/search", "pages/detail", "pages/salesManTip", "pages/statement", "pages/createStatement", "pages/secondaryDetail", "pages/morningPaper", "pages/bigCoffeeDetail", "pages/dailyConsultation", "pages/hotArticle"]
             }, {
             root: "subPackages/me",
             pages: ["pages/lottery", "pages/feedback", "pages/about", "pages/addUser", "pages/bindCode", "pages/myCodes", "pages/bindIDCard", "pages/myIDCard", "pages/manageUsers", "pages/salesMan", "pages/inviteIntro", "pages/myCollection", "pages/signIn", "pages/publicNumber", "pages/saleManStatus", "pages/personInfo", "pages/salesManInfo", "pages/brokerInfo", "pages/advisory", "pages/chatInterface", "pages/settings", "pages/pushCode", "pages/service", "pages/strangerDirect", "pages/myFocus", "pages/myInvite", "pages/chatSettings", "pages/settingNotes", "pages/broker", "pages/evaluate", "pages/helpFeedback", "pages/changeEnterProject", "pages/applyShelves", "pages/editAvatar", "pages/businessCard", "pages/myAdvisor", "pages/phoneLog", "pages/follows", "pages/myIntergral", "pages/vitalityIntegral", "pages/nowInteral", "pages/myinproject", "pages/myGold", "pages/meCoupons", "pages/goldRecharge", "pages/sysMessage", "pages/changeInfoPhone", "pages/changeInfoIntroduce"]
             }, {
             root: "subPackages/comment",
             pages: ["pages/project_comment", "pages/discuss", "pages/participation"]
             }, {
             root: "subPackages/lottery",
             pages: ["pages/buyers", "pages/noNeedLottery", "pages/errorCorrection", "pages/map", "pages/lotteryResult", "pages/houseResults", "pages/lotteryNews", "pages/addHouseIn", "pages/uploadPic", "pages/houseIntention", "pages/ordinaryUser", "pages/houseValuation", "pages/findBuilding", "pages/houseAreaList", "pages/priceResult", "pages/addDetailsPrice", "pages/buildContrast", "pages/contrastDetail", "pages/commonProblems", "pages/claimProject", "pages/purchaseIntention", "pages/loginIndex", "pages/loginIndexDetail"]
             }, {
             root: "subPackages/salesMan",
             pages: ["pages/hotList", "pages/enteringSalesMan", "pages/salesmanSearchList", "pages/submitAudit", "pages/submissionOfInformation", "pages/redme"]
             }, {
             root: "subPackages/project",
             pages: ["pages/mapLookHouse", "pages/payProject", "pages/peripheralMap", "pages/projectDetail", "pages/peripheral", "pages/photos", "pages/calculation", "pages/propertyData", "pages/housePlan", "pages/reportType", "pages/reportDetail", "pages/check", "pages/preSale", "pages/registry", "pages/projectArticles", "pages/oldHousePlan", "pages/projectQuestionList", "pages/addDuilding", "pages/projectCommentDetail", "pages/noLimitPay", "pages/roomPrice", "pages/buildingsNum", "pages/buildingsNumDetail", "pages/statisticalDetails", "pages/projectLotteryDetail", "pages/oneHouseOnePrice", "pages/buildingLetters", "pages/allProjects", "pages/housePlanDetail", "pages/allProjectPhotos", "pages/houseTypePhotos", "pages/featureProject"]
             }, {
             root: "subPackages/tools",
             pages: ["pages/houseLoan", "pages/transaction", "pages/reportCode", "pages/companyCode", "pages/joinUs", "pages/telLogin", "pages/playVideoPage", "pages/commentInp", "pages/groupCode", "pages/demandCalculator", "pages/houseLoanResult", "pages/houseLoanDetail"]
             }, {
             root: "subPackages/question",
             pages: ["pages/questionDetail", "pages/questionOther", "pages/questionComment", "pages/askQuestion", "pages/questionMessages", "pages/questionSearch", "pages/myDiscuss", "pages/questionList", "pages/attentionList", "pages/answerDetail", "pages/myQuestion", "pages/userQuestion", "pages/answerList", "pages/answerComment", "pages/questionCloselyDetail", "pages/commonProblems", "pages/purchaseData", "pages/discussList"]
             }, {
             root: "subPackages/posts",
             pages: ["pages/create"]
             }, {
             root: "subPackages/activity",
             pages: ["pages/projectVote", "pages/voteRanking", "pages/buildingVote", "pages/myPrize", "pages/prizeList", "pages/allUser", "pages/drawDetails", "pages/sponsor", "pages/addAddress", "pages/yearEndActivity", "pages/yearEndActivityDetail", "pages/yearEndActivityRank", "pages/housePurchaseHoliday", "pages/specialPrice"]
             }]*/
        }, e.globalData = {
            signStatus: 0,
            loginInfo: null,
            me_message: !1,
            im_message: !1,
            refresh_me: !1,
            question_message: !1,
            show_me_badge: !1,
            showUpdataView: !1,
            content: "",
            version: "",
            hideTip: !0
        }, e.use("promisify"), e.use("requestfix"), e;
    }

    return _inherits(a, e), _createClass(a, [{
        key: "onLaunch",
        value: function (e) {
            /*var a = this, s = require("./models/GStack.js");
             s._pageStack.clear(), s = null, setTimeout(function () {
             a.checkVersion().then(function () {
             a.getLocation(), a.loopSocket();
             }), api.chat.recentContacts().then(function (e) {
             var s = !0, t = !1, o = void 0;
             try {
             for (var n, i = e.data[Symbol.iterator](); !(s = (n = i.next()).done); s = !0) {
             if (n.value.unread_count > 0) {
             wx.showTabBarRedDot({
             index: 3
             }), a.globalData.im_message = !0, a.globalData.show_me_badge = !0;
             break;
             }
             }
             } catch (e) {
             t = !0, o = e;
             } finally {
             try {
             !s && i.return && i.return();
             } finally {
             if (t) throw o;
             }
             }
             }), api.chat.sysMsgList().then(function (e) {
             var s = !0, t = !1, o = void 0;
             try {
             for (var n, i = e.data.data[Symbol.iterator](); !(s = (n = i.next()).done); s = !0) {
             if (n.value.unread_num > 0) {
             wx.showTabBarRedDot({
             index: 3
             }), a.globalData.im_message = !0, a.globalData.show_me_badge = !0;
             break;
             }
             }
             } catch (e) {
             t = !0, o = e;
             } finally {
             try {
             !s && i.return && i.return();
             } finally {
             if (t) throw o;
             }
             }
             });
             });
             var t = require("./utils/IChat2.js");
             t.on("init", function (e) {
             api.chat.online(e.client_id).then();
             }).on("single_chat", function (e) {
             wx.showTabBarRedDot({
             index: 3
             }), a.globalData.im_message = !0, a.globalData.show_me_badge = !0;
             }).on("online", function (e) {
             }), t.init();*/
        }
    }, {
        key: "getLocation",
        value: function () {
            wx.getLocation({
                type: "gcj02",
                success: function (e) {
                    /*setTimeout(function () {
                     api.userLoginLog(e.latitude + "," + e.longitude).then(function () {
                     });
                     }, 500);*/
                }
            });
        }
    }, {
        key: "checkVersion",
        value: function () {
            /*var e = this;
             return new Promise(function (a, s) {
             if (!wx.canIUse("getUpdateManager")) return a();
             var t = wx.getUpdateManager();
             t.onCheckForUpdate(function (s) {
             s.hasUpdate ? api.getVersionAndUpdateMessage().then(function (s) {
             var o = s.data.content;
             o = o.replace(/<p>/g, ""), o = o.replace(/<\/p>/g, "\n"), o = o.replace(/<\/?[^>]+>/g, ""),
             o = o.replace(/&nbsp;/, " "), s.data && s.data.content ? (e.globalData.showUpdataView = !0,
             e.globalData.content = o, e.globalData.version = s.data.version, t.onUpdateReady(function () {
             t.applyUpdate(), a();
             })) : t.onUpdateReady(function () {
             t.applyUpdate(), a();
             });
             }) : a();
             });
             });*/
        }
    }, {
        key: "onShow",
        value: function (e) {
            e.query.u_id && api.addPoints({
                shareUserId: e.query.u_id,
                sales_man_id: e.query.s_id || "",
                path: JSON.stringify(e)
            }).then();
        }
    }, {
        key: "loopSocket",
        value: function () {
            /*var e = this;
             setInterval(function() {
             api.questionPolling().then(function(a) {
             if (a && a.data && a.data.data) wx.showTabBarRedDot({
             index: 2
             }), e.globalData.question_message = !0; else {
             try {
             wx.hideTabBarRedDot({
             index: 2
             });
             } catch (e) {}
             e.globalData.question_message = !1;
             }
             }).catch(function(e) {});
             }, 1e4);*/
        }
    }]), a;
}(_wepy2.default.app);

App(require("./npm/wepy/lib/wepy.js").default.$createApp(_class, {}));