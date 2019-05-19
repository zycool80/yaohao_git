var _require = require("./../utils/utilsKit/index.js"), wxRequest = _require.wxRequest, qcloudRequest = wxRequest.qcloudRequest, qcloudPostRequest = wxRequest.qcloudPostRequest, simpleQcloudRequest = wxRequest.simpleQcloudRequest, unSafeRequest = wxRequest.unSafeRequest, globalConfig = function() {
    return qcloudRequest("/globalConfig2", {});
}, addPoints = function(e) {
    return qcloudPostRequest("/user/entryWxShareAddPoint", e);
}, mapLookHouse = function(e, t, n) {
    var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
    return qcloudRequest("/project2/mapLookHouse", {
        map1: e,
        map2: t,
        scale: n,
        type: u,
        area_id: o
    });
}, signAdd = function() {
    return simpleQcloudRequest("/user/userShareAddPoint", {});
}, login = function(e) {
    return qcloudRequest("/user/login", {}, !1, e);
}, signInStatus = function() {
    return qcloudRequest("/lottery/signStatus", {});
}, signIn = function() {
    return simpleQcloudRequest("/lottery/sign", {});
}, sendFromID = function(e) {
    return simpleQcloudRequest("/lottery/setFormId", {
        form_id: e
    });
}, lotterySign = function() {
    return qcloudRequest("/lottery/sign", {});
}, getCityList = function() {
    return qcloudRequest("/project/city", {});
}, houseNumSalesData = function(e, t, n) {
    return qcloudRequest("/stats/houseNumSalesData", {
        start_time: e,
        end_time: t,
        area_id: n
    });
}, housePriceSalesData = function(e, t, n) {
    return qcloudRequest("/stats/housePriceSalesData", {
        start_time: e,
        end_time: t,
        area_id: n
    });
}, houseNumSalesList = function(e, t, n, u) {
    return qcloudRequest("/stats/houseNumSalesList", {
        start_time: e,
        end_time: t,
        area_id: n,
        order_by_type: u
    });
}, housePriceSalesList = function(e, t, n, u) {
    return qcloudRequest("/stats/housePriceSalesList", {
        start_time: e,
        end_time: t,
        area_id: n,
        order_by_type: u
    });
}, checkAD = function() {
    return qcloudRequest("/feedback/advertising", {});
}, chatGetUserSig = function() {
    return qcloudRequest("/chat/getUserSig", {});
}, reportError = function(e) {
    return unSafeRequest("/error/setError", e, "POST");
}, editAvatar = function(e, t) {
    return qcloudPostRequest("/user/updateSessionInfo", {
        avatar_url: e,
        nick_name: t
    });
}, getPhoneNum = function(e, t) {
    return qcloudRequest("/callcenter/getPhoneNum", {
        id: e,
        type: t
    });
}, yearActivity = function(e) {
    return qcloudRequest("/activity/category", {
        vote_id: e
    });
}, yearActivityList = function(e, t, n, u, o) {
    return qcloudRequest("/activity/palayList", {
        category_id: e,
        vote_id: t,
        keyword: n,
        page: u,
        uniq_id: o
    });
}, phoneLog = function() {
    return qcloudRequest("/salesman/callNum", {});
}, askPhoneLog = function(e) {
    return qcloudRequest("/salesman/callLogs", {
        date: e
    });
}, getQrCode = function(e) {
    return qcloudRequest("/qrcode/create", {
        url: e
    });
}, commentRules = function() {
    return qcloudRequest("/buildings/commentRule", {});
}, joinGroup = function(e) {
    return qcloudRequest("/buildings/getProjectQrCode", {
        project_id: e
    });
}, joinPrice = function(e, t, n) {
    return qcloudPostRequest("/biddings", {
        salesman_id: e,
        project_id: t,
        integral: n
    });
}, auctionLog = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
    return qcloudRequest("/biddings", {
        project_id: e,
        page: t,
        size: n
    });
}, auctionResults = function(e, t) {
    return qcloudRequest("/biddings/result", {
        salesman_id: e,
        project_id: t
    });
}, auctionPoints = function(e, t) {
    return qcloudRequest("/biddings/enableIndex", {
        salesman_id: e,
        project_id: t
    });
}, joinHomeSalesMan = function() {
    return qcloudRequest("/biddings/index", {});
}, joinHomeProject = function() {
    return qcloudRequest("/biddings/project", {});
}, auctionRules = function() {
    return qcloudRequest("/biddings/rules", {});
}, totalIntegral = function() {
    return qcloudRequest("/salesMan/totalIntegral", {});
}, loanConcaction = function(e) {
    return qcloudRequest("/mortgage/calcs", e);
}, shareMessage = function() {
    return qcloudRequest("/share/copyWriter", {});
}, weather = function() {
    return qcloudRequest("/weathers");
}, regBuilding = function() {
    return qcloudRequest("/morningPapers/todaySigns");
}, todayLotteries = function() {
    return qcloudRequest("/morningPapers/todayLotteries");
}, getGuideImage = function(e) {
    return qcloudRequest("/guidance/guideImage", {
        page_name: e
    });
}, getBannerList = function(e) {
    return qcloudRequest("/banner/bannerList", {
        type: e
    });
};

module.exports = {
    getBannerList: getBannerList,
    getGuideImage: getGuideImage,
    shareMessage: shareMessage,
    todayLotteries: todayLotteries,
    regBuilding: regBuilding,
    loanConcaction: loanConcaction,
    totalIntegral: totalIntegral,
    auctionRules: auctionRules,
    auctionPoints: auctionPoints,
    joinHomeSalesMan: joinHomeSalesMan,
    joinHomeProject: joinHomeProject,
    auctionResults: auctionResults,
    auctionLog: auctionLog,
    joinPrice: joinPrice,
    joinGroup: joinGroup,
    commentRules: commentRules,
    getQrCode: getQrCode,
    askPhoneLog: askPhoneLog,
    phoneLog: phoneLog,
    yearActivityList: yearActivityList,
    yearActivity: yearActivity,
    getPhoneNum: getPhoneNum,
    editAvatar: editAvatar,
    globalConfig: globalConfig,
    addPoints: addPoints,
    mapLookHouse: mapLookHouse,
    signAdd: signAdd,
    login: login,
    signInStatus: signInStatus,
    signIn: signIn,
    sendFromID: sendFromID,
    lotterySign: lotterySign,
    getCityList: getCityList,
    houseNumSalesData: houseNumSalesData,
    housePriceSalesData: housePriceSalesData,
    houseNumSalesList: houseNumSalesList,
    housePriceSalesList: housePriceSalesList,
    chatGetUserSig: chatGetUserSig,
    checkAD: checkAD,
    reportError: reportError,
    weather: weather
};