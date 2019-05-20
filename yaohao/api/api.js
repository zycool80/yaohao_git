var _require = require("./../utils/utilsKit/index.js"),
    common = _require.common,
    chatApi = require("./chat.js"),
    globalApi = require("./global.js"),
    meApi = require("./me.js"),
    oldApi = require("./old.js"),
    postsApi = require("./posts.js"),
    projectApi = require("./project.js"),
    salesApi = require("./sales.js"),
    indexPageApi = require("./indexPage.js"),
    activityApi = require("./activity.js"),
    questionApi = require("./question.js"),
    articleApi = require("./article.js"), apiObj = {};

apiObj.extend = function(e) {
    return common.extend(this, e);
}, apiObj.extend({
    chat: chatApi
}), apiObj.extend(globalApi), apiObj.extend(meApi), apiObj.extend(oldApi), apiObj.extend(postsApi), 
apiObj.extend(projectApi), apiObj.extend({
    sales: salesApi
}), apiObj.extend({
    indexPage: indexPageApi
}), apiObj.extend({
    activity: activityApi
}), apiObj.extend({
    question: questionApi
}), apiObj.extend({
    article: articleApi
}), module.exports = apiObj;