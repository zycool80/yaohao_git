var _require = require("./../utils/utilsKit/index.js"), wxRequest = _require.wxRequest, qcloudRequest = wxRequest.qcloudRequest, qcloudPostRequest = wxRequest.qcloudPostRequest, simpleQcloudRequest = wxRequest.simpleQcloudRequest, projectArticle = function(e, t) {
    var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, r = arguments[3], c = arguments[4];
    return qcloudRequest("/article/articleList", {
        type: e,
        project_id: t,
        page: u,
        recommend: r,
        source: c
    });
}, dernSources = function() {
    return qcloudRequest("/sources", {});
}, articleType = function() {
    return qcloudRequest("/article/articleType", {});
}, bigCoffeeDetail = function(e) {
    return qcloudRequest("/sources/authors", {
        id: e
    });
};

module.exports = {
    projectArticle: projectArticle,
    dernSources: dernSources,
    articleType: articleType,
    bigCoffeeDetail: bigCoffeeDetail
};