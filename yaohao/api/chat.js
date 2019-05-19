var _require = require("./../utils/utilsKit/index.js"), wxRequest = _require.wxRequest,
    qcloudRequest = wxRequest.qcloudRequest, qcloudPostRequest = wxRequest.qcloudPostRequest,
    simpleQcloudRequest = wxRequest.simpleQcloudRequest, online = function (e) {
        return qcloudRequest("/chat/online", {
            client_id: e
        });
    }, send = function (e) {
        return qcloudRequest("/chat/send", e);
    }, sendPic = function (e, t) {
        return send({
            receiver_id: e,
            content: t,
            type: 2
        });
    }, sendPhone = function (e, t) {
        return send({
            receiver_id: e,
            content: t,
            type: 3
        });
    }, sendWechat = function (e, t) {
        return send({
            receiver_id: e,
            content: t,
            type: 4
        });
    }, read = function (e) {
        return simpleQcloudRequest("/chat/read", {
            receiver_id: e
        });
    }, recentContacts = function () {
        return qcloudRequest("/chat/recentContacts");
    }, history = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return qcloudRequest("/chat/history", {
            user_id: e,
            last_id: t
        });
    }, getUserInfo = function (e) {
        return qcloudRequest("/chat/getUserInfo", {
            user_id: e
        });
    }, getUserNumber = function (e, t) {
        return qcloudRequest("/chat/getUserNumber", {
            type: e,
            user_id: t
        });
    }, getEvaluate = function (e) {
        return qcloudRequest("/salesMan/getEvaluate", {
            session_id: e
        });
    }, setEvaluate = function (e) {
        return qcloudPostRequest("/salesMan/setEvaluate", e);
    }, settingGetUserInfo = function (e) {
        return qcloudRequest("/chat/settings/userInfo", {
            link_id: e
        });
    }, addToBlacklist = function (e) {
        return qcloudPostRequest("/chat/settings/blackList", e);
    }, deleteContact = function (e) {
        return qcloudPostRequest("/chat/settings/delContact", {
            link_id: e
        });
    }, oftenUseWords = function () {
        return qcloudRequest("/chat/usefulExpressions", {});
    }, getProjectName = function (e) {
        return qcloudRequest("/chat/getRecentProject", {
            receiver_id: e
        });
    }, getSysInfo = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return qcloudRequest("/newChats/systemMessage", {
            page: e,
            size: t,
            id: n
        });
    }, sysMsgList = function () {
        return qcloudRequest("/newChats/sessions");
    }, getUnreadNum = function (e) {
        return qcloudPostRequest("/newChats/unreadNum/" + e);
    };

module.exports = {
    getUnreadNum: getUnreadNum,
    sysMsgList: sysMsgList,
    getSysInfo: getSysInfo,
    getProjectName: getProjectName,
    oftenUseWords: oftenUseWords,
    sendPhone: sendPhone,
    sendWechat: sendWechat,
    online: online,
    send: send,
    sendPic: sendPic,
    recentContacts: recentContacts,
    history: history,
    getEvaluate: getEvaluate,
    setEvaluate: setEvaluate,
    read: read,
    getUserInfo: getUserInfo,
    getUserNumber: getUserNumber,
    addToBlacklist: addToBlacklist,
    deleteContact: deleteContact,
    settingGetUserInfo: settingGetUserInfo
};