var _require = require("./../utils/utilsKit/index.js"), wxRequest = _require.wxRequest, qcloudRequest = wxRequest.qcloudRequest, qcloudPostRequest = wxRequest.qcloudPostRequest, simpleQcloudRequest = wxRequest.simpleQcloudRequest, putAways = function(e, t, s) {
    return qcloudPostRequest("/salesMan/putaways", {
        sales_man_id: e,
        putaway_reason: t,
        images: s
    });
}, shareQrCode = function(e) {
    return qcloudRequest("/salesMan/shareQrCode", {
        sales_man_id: e
    });
}, getCommutationProject = function(e) {
    return qcloudRequest("/salesMan/getCommutationProject", {
        project_id: e
    });
}, setCommutationProject = function(e) {
    return qcloudPostRequest("/salesMan/setCommutationProject", e);
}, claimProject = function(e) {
    return qcloudPostRequest("/user/claimProjects", {
        project_id: e
    });
}, getQrCode = function(e) {
    return qcloudRequest("", {
        sale_man_id: e
    });
}, salesManRankList = function() {
    return qcloudRequest("/salesMan2/livenessRanking", {});
}, getAuditsTypes = function() {
    return qcloudRequest("/audits/types", {});
}, getSubmitAuditList = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return qcloudRequest("/audits/pages", {
        page: e
    });
}, getTypeIsLegal = function(e) {
    return qcloudRequest("/audits/isLegal", {
        audit_type_id: e
    });
}, postAuditsApplies = function(e) {
    return qcloudPostRequest("/audits/applies", e);
}, updateSalesMan = function(e) {
    return qcloudPostRequest("/salesMan/updateSalesMan", e);
};

module.exports = {
    salesManRankList: salesManRankList,
    getQrCode: getQrCode,
    claimProject: claimProject,
    putAways: putAways,
    shareQrCode: shareQrCode,
    getCommutationProject: getCommutationProject,
    setCommutationProject: setCommutationProject,
    getAuditsTypes: getAuditsTypes,
    postAuditsApplies: postAuditsApplies,
    getSubmitAuditList: getSubmitAuditList,
    getTypeIsLegal: getTypeIsLegal,
    updateSalesMan: updateSalesMan
};