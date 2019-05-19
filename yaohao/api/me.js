var _require = require("./../utils/utilsKit/index.js"), wxRequest = _require.wxRequest, qcloudRequest = wxRequest.qcloudRequest, qcloudPostRequest = wxRequest.qcloudPostRequest, simpleQcloudRequest = wxRequest.simpleQcloudRequest, feedback = function(e) {
    return qcloudRequest("/feedback/create", e);
}, bindCode = function(e) {
    return qcloudRequest("/user/bindCode", e);
}, removeBindCode = function(e) {
    return qcloudRequest("/user/removeBindCode", e);
}, myCodes = function(e) {
    return qcloudRequest("/user/myCodes", e);
}, getMyLotteries2 = function(e) {
    return qcloudRequest("/user/getMyLotteries2", e);
}, syncData = function(e) {
    return qcloudRequest("/user/syncData", e);
}, bindIdCard = function(e) {
    return qcloudRequest("/user/bindIdCard", e);
}, unbindIdCard = function(e) {
    return qcloudRequest("/user/unbindIdCard", e);
}, checkBindIdCard = function() {
    return qcloudRequest("/user/checkBindIdCard");
}, getMyIdCards = function() {
    return qcloudRequest("/user/getMyIdCards");
}, getMyIdCard = function(e) {
    return qcloudRequest("/user/getMyIdCard", {
        id: e
    });
}, getPhoneVerifyCode = function(e) {
    return qcloudPostRequest("/user/getPhoneVerifyCode", {
        phone: e
    });
}, setPhoneVerify = function(e, t) {
    return qcloudPostRequest("/user/setPhoneVerify", {
        phone: e,
        verify_code: t
    });
}, verifyRead = function() {
    return qcloudRequest("/user/verifyRead", {});
}, delMyLotteries = function(e) {
    return qcloudRequest("/user/delLottery", {
        id: e
    });
}, delMyCodes = function(e) {
    return qcloudRequest("/user/delMyCodes", {
        id: e
    });
}, bindBuyers = function(e) {
    return qcloudPostRequest("/user/setUserCode", e);
}, getChatComment = function(e) {
    return qcloudRequest("/chat/getComment", {
        object_id: e
    });
}, setChatComment = function(e) {
    return qcloudPostRequest("/chat/setComment", e);
}, getUserData = function(e) {
    return qcloudRequest("/user/getUserIntention", {
        session_id: e
    });
}, delUserData = function() {
    return qcloudPostRequest("/user/delUserIntention", {});
}, TagConfig = function() {
    return qcloudRequest("/user/myTagConfig", {});
}, buildingLetters = function(e, t) {
    return qcloudRequest("/my/messages/expresses", {
        page: e,
        size: t
    });
}, articleMessage = function(e, t) {
    return qcloudRequest("/my/messages/posts", {
        page: e,
        size: t
    });
}, deleteItem = function(e) {
    return qcloudPostRequest("/my/messages/delete/" + e, {});
}, attentionUserList = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
    return qcloudRequest("/my/messages/attentions", {
        page: e,
        size: t
    });
}, unreadMessage = function(e) {
    return qcloudPostRequest("/my/messages/unread/{" + e + "}", {
        type: e
    });
}, inviteMessage = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
    return qcloudRequest("/my/messages/invites", {
        page: e,
        size: t
    });
}, myMessageList = function() {
    return qcloudRequest("/my/messages/contacts", {});
}, getSalesManApply = function(e, t) {
    var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
    return qcloudRequest("/salesmen/applies", {
        type: e,
        page: t,
        size: s
    });
}, deleteSalesManJilu = function(e) {
    return qcloudRequest("/salesMan/delSalesMan", {
        sales_man_id: e
    });
}, myRecommendIndex = function() {
    return qcloudRequest("/salesMan2/recommendIndex", {});
}, myPoints = function() {
    return qcloudRequest("/salesMan2/points", {});
}, pointsDetail = function(e, t) {
    return qcloudRequest("/salesMan2/pointsDetail", {
        year: e,
        month: t
    });
}, recommendIndexDetail = function() {
    return qcloudRequest("/salesMan2/recommendIndexDetail", {});
}, pointsAssignment = function() {
    return qcloudRequest("/salesMan2/assignment", {});
}, salesManGuide = function(e) {
    return qcloudRequest("/salesMan2/guide", {
        type: e
    });
}, getUserDetails = function() {
    return qcloudRequest("/salesMan/projectType", {});
}, coinsCharge = function(e) {
    return qcloudPostRequest("/coins/charge", {
        integral: e
    });
}, coinsLogs = function(e, t, s) {
    return qcloudRequest("/coins/logs", {
        type: e,
        page: t,
        date: s
    });
}, coinsUserInfo = function() {
    return qcloudRequest("/userinfo", {});
}, coinsSalesManCharge = function(e) {
    return qcloudRequest("/salesMan/charge", {
        price: e
    });
}, isGetPromise = function() {
    return qcloudRequest("/user/bindService", {});
}, getQuanDatas = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
    return qcloudRequest("/my/coupons", {
        page: e,
        size: t
    });
};

module.exports = {
    isGetPromise: isGetPromise,
    getUserDetails: getUserDetails,
    deleteSalesManJilu: deleteSalesManJilu,
    getSalesManApply: getSalesManApply,
    salesManGuide: salesManGuide,
    pointsAssignment: pointsAssignment,
    recommendIndexDetail: recommendIndexDetail,
    pointsDetail: pointsDetail,
    myPoints: myPoints,
    myRecommendIndex: myRecommendIndex,
    myMessageList: myMessageList,
    deleteItem: deleteItem,
    articleMessage: articleMessage,
    buildingLetters: buildingLetters,
    inviteMessage: inviteMessage,
    unreadMessage: unreadMessage,
    attentionUserList: attentionUserList,
    TagConfig: TagConfig,
    delUserData: delUserData,
    getUserData: getUserData,
    getPhoneVerifyCode: getPhoneVerifyCode,
    verifyRead: verifyRead,
    setPhoneVerify: setPhoneVerify,
    getChatComment: getChatComment,
    setChatComment: setChatComment,
    feedback: feedback,
    bindCode: bindCode,
    removeBindCode: removeBindCode,
    myCodes: myCodes,
    getMyLotteries2: getMyLotteries2,
    syncData: syncData,
    bindIdCard: bindIdCard,
    unbindIdCard: unbindIdCard,
    checkBindIdCard: checkBindIdCard,
    getMyIdCards: getMyIdCards,
    getMyIdCard: getMyIdCard,
    delMyLotteries: delMyLotteries,
    delMyCodes: delMyCodes,
    bindBuyers: bindBuyers,
    coinsCharge: coinsCharge,
    coinsLogs: coinsLogs,
    coinsUserInfo: coinsUserInfo,
    coinsSalesManCharge: coinsSalesManCharge,
    getQuanDatas: getQuanDatas
};