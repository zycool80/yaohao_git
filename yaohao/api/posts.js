var _require = require("./../utils/utilsKit/index.js"), wxRequest = _require.wxRequest, qcloudRequest = wxRequest.qcloudRequest, qcloudPostRequest = wxRequest.qcloudPostRequest, simpleQcloudRequest = wxRequest.simpleQcloudRequest, getProjectListWithUser = function() {
    return qcloudRequest("/posts/publish", {});
}, createPostsContent = function(t) {
    return qcloudPostRequest("/posts/setContent", t);
}, getPosts = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
    return qcloudRequest("/post/index2", {
        keyword: t,
        post_id: e,
        type: o,
        post_index: n,
        page: s
    });
}, profileUploadHome = function() {
    return qcloudRequest("/profile/uploadHome", {});
}, updateUserInfo = function(t) {
    return qcloudRequest("/user/updateUserInfo", t);
}, postsLike = function(t) {
    return qcloudRequest("/posts/like", {
        id: t
    });
}, areaList = function(t) {
    return qcloudRequest("/user/getHousePurchaseIntention", {
        city_id: t
    });
}, addAreaList = function(t, e, o, n, s) {
    return qcloudPostRequest("/user/setHousePurchaseIntention", {
        budget: t,
        house_type: e,
        acreage: o,
        area: n,
        peculiarity: s
    });
}, commentSocket = function() {
    return simpleQcloudRequest("/polling", {});
}, notLotteryList = function(t) {
    return qcloudRequest("/lottery/notLotteryList", {
        page: t
    });
}, getPostsComment = function(t, e) {
    return qcloudRequest("/posts/comment2", {
        post_id: t,
        page: e
    });
}, addComment = function(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0", o = arguments[2];
    return qcloudRequest("/posts/" + t + "/addComment", {
        pid: e,
        content: o
    });
}, getUserMessages = function(t) {
    return qcloudRequest("/posts/push2", {
        page: t
    });
}, followAttention = function(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    return qcloudRequest("/lottery/attention", {
        project_id: t,
        lottery_id: e
    });
}, projectPostsList = function(t) {
    return qcloudRequest("/posts/listByPid", {
        project_id: t
    });
}, getFollowSales = function(t) {
    return qcloudRequest("/user/mySalesMan", {
        page: t
    });
}, getFollowLottery = function(t) {
    return qcloudRequest("/user/myProjects", {
        page: t
    });
}, getTransaction = function() {
    return qcloudRequest("/posts/transaction", {});
}, getTransactionLotteryData = function(t) {
    return qcloudRequest("/transaction/lottery_data", {
        time_at: t
    });
}, getTransactionhotAreaLottery = function(t) {
    return qcloudRequest("/transaction/hot_area_lottery", {
        time_at: t
    });
}, getTransactionAreaData = function(t, e) {
    return qcloudRequest("/transaction/area_data", {
        time_at: t,
        area_id: e
    });
}, getTransactionlotteryTimeLine = function(t, e) {
    return qcloudRequest("/transaction/lottery_time_line", {
        time_at: t,
        area_id: e
    });
}, getTransactionTradingTrend = function() {
    return qcloudRequest("/transaction/successful_trading_trend", {});
}, getsecondaryList = function(t, e, o) {
    return qcloudRequest("/secondary", {
        sort: t,
        rank: e,
        page: o
    });
}, getSecondaryDetails = function(t) {
    return qcloudRequest("/secondary/details", {
        secondary_id: t
    });
}, getSecondaryTrade = function() {
    return qcloudRequest("/secondary/trade", {});
}, getQiniuToken = function() {
    return qcloudRequest("/upload/qiniu_token", {});
};

module.exports = {
    getQiniuToken: getQiniuToken,
    getSecondaryTrade: getSecondaryTrade,
    getsecondaryList: getsecondaryList,
    getSecondaryDetails: getSecondaryDetails,
    getTransactionTradingTrend: getTransactionTradingTrend,
    getTransactionhotAreaLottery: getTransactionhotAreaLottery,
    getTransactionLotteryData: getTransactionLotteryData,
    getTransactionAreaData: getTransactionAreaData,
    getTransactionlotteryTimeLine: getTransactionlotteryTimeLine,
    notLotteryList: notLotteryList,
    addAreaList: addAreaList,
    getProjectListWithUser: getProjectListWithUser,
    createPostsContent: createPostsContent,
    getPosts: getPosts,
    profileUploadHome: profileUploadHome,
    updateUserInfo: updateUserInfo,
    postsLike: postsLike,
    areaList: areaList,
    commentSocket: commentSocket,
    getPostsComment: getPostsComment,
    addComment: addComment,
    getUserMessages: getUserMessages,
    followAttention: followAttention,
    projectPostsList: projectPostsList,
    getFollowSales: getFollowSales,
    getFollowLottery: getFollowLottery,
    getTransaction: getTransaction
};