var _require = require("./../utils/utilsKit/index.js"), wxRequest = _require.wxRequest, qcloudRequest = wxRequest.qcloudRequest, qcloudPostRequest = wxRequest.qcloudPostRequest, simpleQcloudRequest = wxRequest.simpleQcloudRequest, unSafeRequest = wxRequest.unSafeRequest, holidayEvents = function(e, t, u, s) {
    return qcloudPostRequest("/events", {
        vendor_coupon_id: e,
        project_id: t,
        username: u,
        phone: s
    });
}, eventsList = function(e) {
    return qcloudRequest("/events", {
        page: e
    });
}, getEventStatus = function(e, t) {
    return qcloudRequest("/event/isReceived", {
        vendor_coupon_id: e,
        project_id: t
    });
};

module.exports = {
    holidayEvents: holidayEvents,
    eventsList: eventsList,
    getEventStatus: getEventStatus
};