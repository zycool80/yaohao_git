var _require = require("./../utils/utilsKit/index.js"), wxRequest = _require.wxRequest, qcloudRequest = wxRequest.qcloudRequest, qcloudPostRequest = wxRequest.qcloudPostRequest, simpleQcloudRequest = wxRequest.simpleQcloudRequest, getArticleCategories = function() {
    return qcloudRequest("/article/categories");
}, getArticles = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
    return qcloudRequest("/article/home", {
        page: s,
        keyword: e,
        type: t,
        lottery_id: n
    });
}, sendProjectComment = function(e) {
    return qcloudPostRequest("/project/comment", e);
}, getProjectCommentList = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
    return qcloudRequest("/project/commentListNew", {
        project_id: e,
        page: t,
        type: s,
        is_hot: n,
        id: o
    });
}, getBuyersList = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
    return qcloudRequest("/project/buyer", {
        keyword: e,
        lottery_id: t,
        type: s,
        page: n,
        category: o
    });
}, articleDood = function(e) {
    return qcloudRequest("/article/projectArticleLike", {
        id: e
    });
}, indexToggleCont = function(e) {
    return qcloudRequest("/lottery/recommend", {
        type: e
    });
}, projectArticle = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return qcloudRequest("/article/projectArticle", {
        type: e,
        id: t,
        page: s
    });
}, getHotArticles = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
    return qcloudRequest("/article/hotArticle", {
        type: e,
        page: t,
        pageSize: s
    });
}, getAllRecomment = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return qcloudRequest("/lottery/recommendAll", {
        type: e,
        page: t,
        keyword: s
    });
}, propertyMessage = function(e) {
    return qcloudRequest("/posts/projectComment2", {
        page: e
    });
}, getVersionAndUpdateMessage = function() {
    return qcloudRequest("/version/getVersion", {});
}, getSystemMessage = function() {
    return qcloudRequest("/system/message", {});
}, getSystemMessageList = function(e, t) {
    return qcloudRequest("/system/messageList", {
        type_id: e,
        page: t
    });
}, deleteSystemMessageList = function(e) {
    return qcloudRequest("/system/delete", {
        message_id: e
    });
}, readSystemMessage = function(e) {
    return simpleQcloudRequest("/system/read", {
        message_id: e
    });
}, projectCommentLike = function(e, t) {
    return qcloudRequest("/project/projectCommentLike", {
        comment_id: e,
        pid: t
    });
}, getDynamic = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", s = arguments[2], n = arguments[3];
    return qcloudRequest("/project2/getDynamic", {
        project_id: e,
        type: t,
        index: s,
        page: n
    });
}, addDynamic = function(e) {
    return qcloudPostRequest("/project2/setDynamic", e);
}, isDynamic = function(e) {
    return qcloudRequest("/project2/isUserDynamic", {
        project_id: e
    });
}, myAuditing = function(e, t) {
    return qcloudRequest("/salesMan/myAuditing", {
        page: e,
        salesman_id: t
    });
}, delProjectComment = function(e) {
    return qcloudRequest("/project/delProjectComment", {
        comment_id: e
    });
}, delPostComment = function(e) {
    return qcloudRequest("/posts/delPostComment", {
        comment_id: e
    });
}, salesManToProject = function(e) {
    return qcloudRequest("/salesMan/salesManToProject", {
        sales_man_ids: e
    });
}, getWeChatQrCode = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return qcloudRequest("/chat/weChatQrCode", {
        project_id: e,
        type: t,
        lottery_id: s
    });
}, setQuestion = function(e, t, s, n) {
    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "", i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
    return qcloudPostRequest("/questionAnswer/setQuestion", {
        type: e,
        tags: t,
        content: s,
        img: n,
        project_id: o,
        lottery_id: i
    });
}, discussionTopic = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return qcloudRequest("/discussion/topic", {
        page: e
    });
}, discussionList = function(e, t) {
    var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return qcloudRequest("/discussion/index", {
        topic_id: e,
        is_hot: t,
        page: s
    });
}, topicInfo = function(e) {
    return qcloudRequest("/discussion/topicInfo", {
        topic_id: e
    });
}, setDiscussion = function(e, t) {
    return qcloudPostRequest("/discussion/setDiscussion", {
        topic_id: e,
        content: t
    });
}, questionAnswerType = function(e) {
    return qcloudRequest("/questionAnswer/questionAnswerType", {
        type: e
    });
}, discussionInfo = function(e) {
    return qcloudRequest("/discussion/discussionInfo", {
        discussion_id: e
    });
}, getQuestionAnswerList = function(e, t, s, n) {
    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "", i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
    return qcloudRequest("/questionAnswer/index", {
        page: e,
        status: t,
        type: s,
        tag: n,
        time_order_by: o,
        is_specialist: i
    });
}, getQuestionInfo = function(e) {
    return qcloudRequest("/questionAnswer/questionInfo", {
        question_id: e
    });
}, getAnswerList = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
    return qcloudRequest("/questionAnswer/answerList", {
        question_id: e,
        page: t,
        is_hot: s,
        ids: n
    });
}, getAnswerInfo = function(e) {
    return qcloudRequest("/questionAnswer/answerInfo", {
        answer_id: e
    });
}, questionLike = function(e) {
    return qcloudRequest("/questionAnswer/questionLike", {
        question_id: e
    });
}, questionAttention = function(e) {
    return qcloudRequest("/questionAnswer/questionAttention", {
        question_id: e
    });
}, getAnswerCommentList = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return qcloudRequest("/questionAnswer/answerCommentList", {
        answer_id: e,
        page: t,
        is_hot: s
    });
}, getQuestionType = function(e) {
    return qcloudRequest("/questionAnswer/questionAnswerType", {
        type: e
    });
}, questionPolling = function() {
    return simpleQcloudRequest("/questionAnswer/polling", {});
}, getMyQuestionAnswer = function(e, t) {
    return qcloudRequest("/questionAnswer/myQuestionAnswer", {
        user_id: e,
        sales_man_id: t
    });
}, getMyQuestion = function(e, t) {
    var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", n = arguments[3];
    return qcloudRequest("/questionAnswer/myQuestion", {
        user_id: e,
        tab: t,
        status: s,
        page: n
    });
}, discussionLike = function(e) {
    return qcloudRequest("/discussion/discussionLike", {
        discussion_id: e
    });
}, attentionUser = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    return qcloudRequest("/user/attention", {
        attention_object: e,
        sales_man_id: t
    });
}, questionAnswerMessage = function(e) {
    return qcloudRequest("/questionAnswer/message", {
        page: e
    });
}, discussionCommentList = function(e, t, s) {
    return qcloudRequest("/discussion/discussionCommentList", {
        discussion_id: e,
        page: t,
        is_hot: s
    });
}, setDiscussionComment = function(e, t, s) {
    return qcloudPostRequest("/discussion/setDiscussionComment", {
        parent_id: e,
        content: t,
        discussion_id: s
    });
}, discussionCommentLike = function(e) {
    return qcloudRequest("/discussion/discussionCommentLike", {
        discussion_comment_id: e
    });
}, myAttention = function(e, t) {
    return qcloudRequest("/questionAnswer/myAttention", {
        page: e,
        user_id: t
    });
}, topicAttention = function(e) {
    return qcloudRequest("/discussion/topicAttention", {
        topic_id: e
    });
}, setAnswer = function(e, t, s) {
    return qcloudPostRequest("/questionAnswer/setAnswer", {
        question_id: e,
        content: t,
        img: s
    });
}, answerLike = function(e) {
    return qcloudRequest("/questionAnswer/answerLike", {
        answer_id: e
    });
}, answerAversion = function(e) {
    return qcloudRequest("/questionAnswer/answerAversion", {
        answer_id: e
    });
}, questionAdopt = function(e) {
    return qcloudRequest("/questionAnswer/adopt", {
        answer_id: e
    });
}, myDiscussion = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return qcloudRequest("/questionAnswer/myDiscussion", {
        user_id: e,
        page: t,
        tab: s
    });
}, questionSearch = function(e) {
    return qcloudRequest("/questionAnswer/search", {
        search_text: e
    });
}, setAnswerComment = function(e, t, s) {
    return qcloudPostRequest("/questionAnswer/setAnswerComment", {
        parent_id: e,
        content: t,
        answer_id: s
    });
}, answerCommentLike = function(e) {
    return qcloudRequest("/questionAnswer/answerCommentLike", {
        answer_comment_id: e
    });
}, myAnswer = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return qcloudRequest("/questionAnswer/myAnswer", {
        user_id: e,
        is_adopt: t,
        page: s
    });
}, userLoginLog = function(e) {
    return simpleQcloudRequest("/user/setAxisData", {
        axis: e
    });
}, bindPhone = function(e) {
    return qcloudRequest("/user/bindPhone", {
        phone: e
    });
}, feedbackType = function() {
    return qcloudRequest("/feedback/feedbackType", {});
}, setBugFeedback = function(e, t, s, n, o, i, u) {
    return qcloudPostRequest("/feedback/setBugFeedback", {
        type: e,
        content: t,
        feedback_content: s,
        contact: n,
        img: o,
        feedback_img: i,
        project_id: u
    });
}, getLotteryImages = function(e) {
    return qcloudRequest("/lottery/resultImages", {
        lottery_id: e
    });
}, settings = function() {
    return qcloudRequest("/user/settings", {});
}, changeSettings = function(e) {
    return qcloudRequest("/user/updateSettings", e);
}, statemenList = function() {
    return qcloudRequest("/user/statement", {});
}, areaAxis = function(e) {
    return qcloudRequest("/project2/areaAxis", {
        area_id: e
    });
}, resultBuyerType = function(e, t) {
    return qcloudRequest("/lottery/resultBuyerType", {
        tab: e,
        lottery_id: t
    });
}, delShare = function(e) {
    return qcloudRequest("/posts/delPost", {
        post_id: e
    });
}, setTop = function(e) {
    return qcloudRequest("/posts/setTop", {
        post_id: e
    });
}, postFeedbackType = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return qcloudRequest("/posts/postInformAgainstType", {
        type: e
    });
}, setPostFeedback = function(e, t, s) {
    return qcloudPostRequest("/posts/setPostInformAgainst", {
        type: e,
        content: t,
        img: s
    });
}, chooseRoomResult = function(e, t, s, n) {
    return qcloudRequest("/lottery/chooseRoomResult", {
        lottery_id: e,
        type: t,
        keyword: s,
        page: n
    });
}, chooseRoomResultInfo = function(e) {
    return qcloudRequest("/lottery/chooseRoomResultInfo", {
        id: e
    });
}, delQuestion = function(e) {
    return qcloudRequest("/questionAnswer/delQuestion", {
        question_id: e
    });
}, delAnswer = function(e) {
    return qcloudRequest("/questionAnswer/delAnswer", {
        answer_id: e
    });
}, houseTypePhotos = function(e, t, s, n) {
    return qcloudRequest("/project2/houseTypePhotos", {
        project_id: e,
        lottery_id: t,
        type: s,
        tab: n
    });
}, houseType = function(e, t, s) {
    return qcloudRequest("/project2/houseType", {
        project_id: e,
        lottery_id: t,
        tab: s
    });
}, projectArticles = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return qcloudRequest("/project2/projectArticles", {
        project_id: e,
        page: t,
        is_project_info: s
    });
}, officialAccountsArticles = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return qcloudRequest("/project2/officialAccountsArticles", {
        project_id: e,
        page: t,
        is_project_info: s
    });
}, filterTag = function(e) {
    return qcloudRequest("/project2/filterTag", {
        type: e
    });
}, projectSearch = function(e) {
    return qcloudRequest("/project2/search", {
        search_text: e
    });
}, timeAxisInfo = function(e, t) {
    var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return qcloudRequest("/lottery/timeAxisInfo", {
        lottery_id: e,
        type: t,
        tag: s
    });
}, projectQuestion = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    return qcloudRequest("/project2/projectQuestion", {
        project_id: e,
        lottery_id: t,
        page: s,
        is_list: n
    });
}, questionTypes = function(e) {
    return qcloudRequest("/question/types", {
        parent_id: e
    });
}, shareIsProjectSalesMan = function(e, t) {
    return qcloudRequest("/salesMan/shareIsProjectSalesMan", {
        share_user_id: e,
        project_id: t
    });
}, toQuestionClosely = function(e, t) {
    return qcloudRequest("/questionAnswer/toQuestionClosely", {
        question_id: e,
        content: t
    });
}, addDuilding = function(e, t, s, n) {
    return qcloudPostRequest("/project2/userCreate", {
        project_name: e,
        notNullarea_id: t,
        tel: s,
        remarks: n
    });
}, cityTrain = function(e, t) {
    return qcloudRequest("/city/metro", {
        region_id: e,
        metro_id: t
    });
}, setLookPermission = function(e, t) {
    return qcloudRequest("/questionAnswer/setLookPermission", {
        share_id: e,
        answer_id: t
    });
}, guessYouLike = function(e, t, s) {
    return qcloudRequest("/project2/conjectureLike", {
        project_id: e,
        page: t,
        lottery_id: s
    });
}, consultingNum = function(e) {
    return qcloudRequest("/salesMan/consultingNum", {
        sales_man_id: e
    });
}, setPhotos = function(e, t) {
    return qcloudPostRequest("/project2/setPhotos", {
        arr: e,
        project_id: t
    });
}, voteIndex = function(e, t) {
    var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return qcloudRequest("/activity/voteIndex", {
        keyword: e,
        page: t,
        uniq_id: s
    });
}, userVote = function(e, t) {
    return qcloudRequest("/activity/userVote", {
        player_id: e,
        vote_id: t
    });
}, eventDetails = function(e, t, s) {
    return qcloudRequest("/activity/voteInfo", {
        id: e,
        vote_id: t,
        is_share: s
    });
}, voteQrcode = function(e, t) {
    return qcloudRequest("/activity/voteQrCode", {
        id: e,
        vote_id: t
    });
}, votePlayRanking = function(e, t) {
    var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return qcloudRequest("/activity/votePlayRanking", {
        vote_id: e,
        category_id: t,
        page: s
    });
}, huxingPhotosType = function(e) {
    return qcloudRequest("/project2/huxingPhotosType", {
        type: e
    });
}, getFocusData = function(e) {
    return qcloudRequest("/salesMan/attentionRanking", {
        page: e
    });
}, submit_buiding = function(e) {
    return qcloudPostRequest("/project2/setHuxing", e);
}, getLabel = function(e) {
    return qcloudRequest("/project2/huxingPhotosType", {
        type: e
    });
}, recommendSalesMan = function(e) {
    return qcloudRequest("/salesMan/recommendSalesMan", {
        project_id: e
    });
}, decodePhone = function(e) {
    return simpleQcloudRequest("/salesMan/decodePhone", {}, !1, e);
}, addBuildings = function(e) {
    return qcloudPostRequest("/user/addPkProject", {
        project_id: e
    });
}, deleteBuilding = function(e) {
    return qcloudPostRequest("/user/delPkProject", {
        ids: e
    });
}, findBuildingData = function(e, t) {
    return qcloudRequest("/project/compare", {
        project_id1: e,
        project_id2: t
    });
}, areaRanking = function(e, t) {
    return qcloudRequest("/secondary/area_trade", {
        city_id: e,
        date: t
    });
}, downloadTemplate = function() {
    return qcloudRequest("/upload/common_problem", {});
}, downloadTemplate2 = function() {
    return qcloudRequest("/upload/download_file", {});
}, getCommutationProject = function(e) {
    return qcloudRequest("/salesMan/getCommutationProject", {
        project_id: e
    });
}, getSalesMan = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return qcloudRequest("/salesMan/showList", {
        project_id: e,
        page: t
    });
}, getSalesManOnce = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return qcloudRequest("/salesMan/show", {
        id: e,
        show_real_phone: t
    });
}, getSalesManArticle = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return qcloudRequest("/salesMan/content/" + e, {
        page: t
    });
}, followSalesMan = function(e) {
    return qcloudRequest("/salesMan/salesManAttention", {
        sales_man_id: e
    });
}, getSalesManTop3 = function() {
    return qcloudRequest("/salesMan/LastWeekRanking", {});
}, getSalesManTop20 = function() {
    return qcloudRequest("/salesMan/todayRanking2", {});
}, getNewSalesMan = function() {
    return qcloudRequest("/salesMan/newest", {});
}, salesManLike = function(e) {
    return qcloudRequest("/salesMan/salesManLike", {
        sales_man_id: e
    });
}, joinSalesMan = function(e) {
    return qcloudPostRequest("/salesMan/setSalesMan", e);
}, isSaleMan = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return qcloudRequest("/salesMan/isSalesMan", {
        project_id: e
    });
}, delSalesMan = function(e) {
    return qcloudRequest("/salesMan/delSalesMan", {
        sales_man_id: e
    });
}, getPersonInfo = function(e) {
    return qcloudRequest("/salesMan/getSalesManInfo", {
        sales_man_id: e
    });
}, editPersonInfo = function(e) {
    return qcloudPostRequest("/salesMan/updateSalesManInfo", e);
}, salesManDetail = function(e) {
    return qcloudRequest("/salesMan/detail", {
        project_id: e
    });
}, salesManDetail2 = function(e) {
    return qcloudRequest("/salesMan/detail2", {
        sales_id: e
    });
}, salesManPointLog = function(e, t) {
    return qcloudRequest("/salesMan/pointLog", {
        sales_man_id: e,
        date: t
    });
}, showSalesQuestion = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return qcloudRequest("/salesMan/showQuestion", {
        session_id: e,
        page: t
    });
}, showSalesPosts = function(e, t) {
    var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return qcloudRequest("/salesMan/showPost", {
        session_id: e,
        project_id: t,
        page: s
    });
}, searchSalesMan = function(e, t) {
    return qcloudRequest("/salesMan/searchSalesMan", {
        keywords: e,
        page: t
    });
}, getInviterName = function(e) {
    return qcloudRequest("/salesMan/getInviterName", {
        inviter_id: e
    });
}, userAddresses = function(e) {
    return qcloudPostRequest("/user/addresses", e);
}, getGoods = function(e) {
    return qcloudRequest("/goods", {
        page: e
    });
}, raffleDraws = function(e) {
    return qcloudRequest("/raffle/draws", {
        sku_id: e
    });
}, getGoodsSkus = function(e) {
    return qcloudRequest("/goodsSkus/joins", {
        page: e
    });
}, getGoodsSponsors = function(e) {
    return qcloudRequest("/goods/sponsors", {
        sku_id: e
    });
}, getraffleStatus = function(e) {
    return qcloudRequest("/raffle/status", {
        sku_id: e
    });
}, getAddresses = function(e) {
    return qcloudRequest("/user/address", {
        sku_id: e
    });
}, getShareInfo = function(e) {
    return qcloudRequest("/share/shareInfo", e);
};

module.exports = {
    getShareInfo: getShareInfo,
    getAddresses: getAddresses,
    userAddresses: userAddresses,
    getraffleStatus: getraffleStatus,
    getGoods: getGoods,
    raffleDraws: raffleDraws,
    getGoodsSkus: getGoodsSkus,
    getGoodsSponsors: getGoodsSponsors,
    searchSalesMan: searchSalesMan,
    getSalesMan: getSalesMan,
    getSalesManOnce: getSalesManOnce,
    getSalesManArticle: getSalesManArticle,
    followSalesMan: followSalesMan,
    getSalesManTop3: getSalesManTop3,
    getSalesManTop20: getSalesManTop20,
    getNewSalesMan: getNewSalesMan,
    salesManLike: salesManLike,
    joinSalesMan: joinSalesMan,
    isSaleMan: isSaleMan,
    delSalesMan: delSalesMan,
    getPersonInfo: getPersonInfo,
    editPersonInfo: editPersonInfo,
    salesManDetail: salesManDetail,
    salesManDetail2: salesManDetail2,
    salesManPointLog: salesManPointLog,
    showSalesQuestion: showSalesQuestion,
    showSalesPosts: showSalesPosts,
    getInviterName: getInviterName,
    getCommutationProject: getCommutationProject,
    downloadTemplate2: downloadTemplate2,
    downloadTemplate: downloadTemplate,
    areaRanking: areaRanking,
    findBuildingData: findBuildingData,
    deleteBuilding: deleteBuilding,
    addBuildings: addBuildings,
    decodePhone: decodePhone,
    getLabel: getLabel,
    recommendSalesMan: recommendSalesMan,
    submit_buiding: submit_buiding,
    getFocusData: getFocusData,
    huxingPhotosType: huxingPhotosType,
    userVote: userVote,
    voteIndex: voteIndex,
    setPhotos: setPhotos,
    votePlayRanking: votePlayRanking,
    eventDetails: eventDetails,
    guessYouLike: guessYouLike,
    consultingNum: consultingNum,
    setLookPermission: setLookPermission,
    cityTrain: cityTrain,
    addDuilding: addDuilding,
    toQuestionClosely: toQuestionClosely,
    shareIsProjectSalesMan: shareIsProjectSalesMan,
    questionTypes: questionTypes,
    projectQuestion: projectQuestion,
    projectSearch: projectSearch,
    filterTag: filterTag,
    houseTypePhotos: houseTypePhotos,
    houseType: houseType,
    delQuestion: delQuestion,
    delAnswer: delAnswer,
    projectArticles: projectArticles,
    officialAccountsArticles: officialAccountsArticles,
    areaAxis: areaAxis,
    bindPhone: bindPhone,
    myAnswer: myAnswer,
    myDiscussion: myDiscussion,
    questionAdopt: questionAdopt,
    answerLike: answerLike,
    answerAversion: answerAversion,
    setAnswer: setAnswer,
    getMyQuestionAnswer: getMyQuestionAnswer,
    getMyQuestion: getMyQuestion,
    questionPolling: questionPolling,
    getQuestionAnswerList: getQuestionAnswerList,
    getQuestionInfo: getQuestionInfo,
    getAnswerList: getAnswerList,
    getAnswerInfo: getAnswerInfo,
    questionLike: questionLike,
    questionAttention: questionAttention,
    getAnswerCommentList: getAnswerCommentList,
    getQuestionType: getQuestionType,
    getWeChatQrCode: getWeChatQrCode,
    salesManToProject: salesManToProject,
    myAuditing: myAuditing,
    isDynamic: isDynamic,
    addDynamic: addDynamic,
    getVersionAndUpdateMessage: getVersionAndUpdateMessage,
    getSystemMessage: getSystemMessage,
    getSystemMessageList: getSystemMessageList,
    deleteSystemMessageList: deleteSystemMessageList,
    readSystemMessage: readSystemMessage,
    getAllRecomment: getAllRecomment,
    getHotArticles: getHotArticles,
    projectArticle: projectArticle,
    indexToggleCont: indexToggleCont,
    getBuyersList: getBuyersList,
    sendProjectComment: sendProjectComment,
    getProjectCommentList: getProjectCommentList,
    getArticleCategories: getArticleCategories,
    getArticles: getArticles,
    articleDood: articleDood,
    propertyMessage: propertyMessage,
    projectCommentLike: projectCommentLike,
    getDynamic: getDynamic,
    delProjectComment: delProjectComment,
    delPostComment: delPostComment,
    setQuestion: setQuestion,
    discussionInfo: discussionInfo,
    discussionTopic: discussionTopic,
    discussionList: discussionList,
    topicInfo: topicInfo,
    setDiscussion: setDiscussion,
    questionAnswerType: questionAnswerType,
    topicAttention: topicAttention,
    discussionLike: discussionLike,
    attentionUser: attentionUser,
    questionAnswerMessage: questionAnswerMessage,
    discussionCommentList: discussionCommentList,
    setDiscussionComment: setDiscussionComment,
    discussionCommentLike: discussionCommentLike,
    myAttention: myAttention,
    questionSearch: questionSearch,
    setAnswerComment: setAnswerComment,
    answerCommentLike: answerCommentLike,
    userLoginLog: userLoginLog,
    feedbackType: feedbackType,
    setBugFeedback: setBugFeedback,
    getLotteryImages: getLotteryImages,
    settings: settings,
    changeSettings: changeSettings,
    statemenList: statemenList,
    resultBuyerType: resultBuyerType,
    delShare: delShare,
    setTop: setTop,
    postFeedbackType: postFeedbackType,
    setPostFeedback: setPostFeedback,
    chooseRoomResult: chooseRoomResult,
    chooseRoomResultInfo: chooseRoomResultInfo,
    timeAxisInfo: timeAxisInfo,
    voteQrcode: voteQrcode
};