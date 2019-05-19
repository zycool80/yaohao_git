var _require = require("./../utils/utilsKit/index.js"), wxRequest = _require.wxRequest, qcloudRequest = wxRequest.qcloudRequest, qcloudPostRequest = wxRequest.qcloudPostRequest, simpleQcloudRequest = wxRequest.simpleQcloudRequest, questionType = function() {
    return qcloudRequest("/question/questionTags", {});
}, delQuestion = function(e) {
    return qcloudRequest("/question/delQuestion", {
        question_id: e
    });
}, getQuestionAnswerList = function(e) {
    return qcloudRequest("/question/questionList", e);
}, whistleBlowing = function(e) {
    return qcloudRequest("/whistleBlowing/typeList", {
        type: e
    });
}, whistleSetContent = function(e, t, s, u, i) {
    return qcloudPostRequest("/whistleBlowing/setContent", {
        type: e,
        whistle_blowing_type: t,
        object_id: s,
        content: u,
        img: i
    });
};

module.exports = {
    questionType: questionType,
    getQuestionAnswerList: getQuestionAnswerList,
    delQuestion: delQuestion,
    whistleBlowing: whistleBlowing,
    whistleSetContent: whistleSetContent
};