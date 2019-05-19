var _require = require("./../utils/utilsKit/index.js"), wxRequest = _require.wxRequest, qcloudRequest = wxRequest.qcloudRequest, qcloudPostRequest = wxRequest.qcloudPostRequest, simpleQcloudRequest = wxRequest.simpleQcloudRequest, indexRecommendProject = function() {
    return qcloudRequest("/lottery/recommendProject", {});
}, indexLotterys = function() {
    return qcloudRequest("/lottery/indexLottery", {});
};

module.exports = {
    indexRecommendProject: indexRecommendProject,
    indexLotterys: indexLotterys
};