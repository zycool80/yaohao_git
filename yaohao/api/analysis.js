var _require = require("./../utils/utilsKit/index.js"), simpleQcloudPostRequest = _require.wxRequest.simpleQcloudPostRequest, sendAnalysis = function(e) {
    return simpleQcloudPostRequest("/buried/points", e);
};

module.exports = {
    sendAnalysis: sendAnalysis
};