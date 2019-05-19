function sendData(n, e) {
    var _ = getUserInfo() || {};
    e = extend(e, {
        version: config.version,
        user_id: _.id || "",
        nick_name: _.nickName || "",
        cityid: 330100,
        platform: config.PLATFORM
    }), ald().sendEvent(n, e);
}

var Events = require("./../npm/events/events.js"), config = require("./../config/default.js"), _require = require("./GlobalModel.js"), getUserInfo = _require.getUserInfo, _require2 = require("./../utils/utilsKit/lib/common.js"), extend = _require2.extend, ald = function() {
    return getApp().aldstat;
}, _AnalysisTable = {
    INDEX_BANNER_CLICK_TABLE: "首页banner点击",
    INDEX_ALERT_CLICK_TABLE: "首页弹框广告点击",
    INDEX_ALERT_CLOSE_TABLE: "首页弹框广告关闭",
    PROJECT_DETAIL_CLICK_TABLE: "进入楼盘详情",
    HOT_PROJECT_AD_CLICK_TABLE: "热门楼盘banner点击",
    INDEX_SWIPER_AD_CLICK_TABLE: "首页滚动广告位点击",
    INDEX_SALESMAN_LEFT_CLICK_TABLE: "首页置业顾问左侧点击",
    INDEX_SALESMAN_RIGHT_CLICK_TABLE: "首页置业顾问右侧点击",
    DETAILS_SALESMAN_ACCESS: "访问置业顾问",
    PROJECT_DETAILS_CLICK: "楼盘详情点击量",
    HOT_PROJECT_AREA_CLICK_TABLE: "热门楼盘区域点击",
    ESTATE_DETAILS_CLICK_TABLE: "楼盘查看详情点击",
    ESTATE_ICONS_DETAILS_CLICK_TABLE: "楼盘icon详情点击",
    ESTATE_LOT_DETAILS_CLICK_TABLE: "楼盘摇号icon",
    ESTATE_STATEMENT_CLICK_TABLE: "动态",
    INDEX_BUTTON_CLICK_TABLE: "首页圆形按钮及分享",
    MY_WEB_CLICK_TABLE: "我的页面签到、分享",
    INDEX_ARTICLE_SORT_TABLE: "首页文章点击排序"
}, AnalysisEvent = new Events();

AnalysisEvent.on("projectDtailsClick", function(n) {
    sendData(_AnalysisTable.PROJECT_DETAILS_CLICK, n);
}), AnalysisEvent.on("indexCallClick", function(n) {
    sendData(_AnalysisTable.DETAILS_SALESMAN_ACCESS, n);
}), AnalysisEvent.on("indexBannerClick", function(n) {
    sendData(_AnalysisTable.INDEX_BANNER_CLICK_TABLE, n);
}), AnalysisEvent.on("indexAlertClick", function(n) {
    sendData(_AnalysisTable.INDEX_ALERT_CLICK_TABLE, n);
}), AnalysisEvent.on("indexAlertClose", function(n) {
    sendData(_AnalysisTable.INDEX_ALERT_CLOSE_TABLE, n);
}), AnalysisEvent.on("projectDetailClick", function(n) {
    sendData(_AnalysisTable.PROJECT_DETAIL_CLICK_TABLE, n);
}), AnalysisEvent.on("hotProjectAdClick", function(n) {
    sendData(_AnalysisTable.HOT_PROJECT_AD_CLICK_TABLE, n);
}), AnalysisEvent.on("indexSwiperAdClick", function(n) {
    sendData(_AnalysisTable.INDEX_SWIPER_AD_CLICK_TABLE, n);
}), AnalysisEvent.on("indexSalesmanLeftClick", function(n) {
    sendData(_AnalysisTable.INDEX_SALESMAN_LEFT_CLICK_TABLE, n);
}), AnalysisEvent.on("indexSalesmanRightClick", function(n) {
    sendData(_AnalysisTable.INDEX_SALESMAN_RIGHT_CLICK_TABLE, n);
}), AnalysisEvent.on("hotProjectAreaClick", function(n) {
    sendData(_AnalysisTable.HOT_PROJECT_AREA_CLICK_TABLE, n);
}), AnalysisEvent.on("estateDetailsClick", function(n) {
    sendData(_AnalysisTable.ESTATE_DETAILS_CLICK_TABLE, n);
}), AnalysisEvent.on("estateIconsDetailsClicks", function(n) {
    sendData(_AnalysisTable.ESTATE_ICONS_DETAILS_CLICK_TABLE, n);
}), AnalysisEvent.on("estateLotDetailsClicks", function(n) {
    sendData(_AnalysisTable.ESTATE_LOT_DETAILS_CLICK_TABLE, n);
}), AnalysisEvent.on("estateStatementClicks", function(n) {
    sendData(_AnalysisTable.ESTATE_STATEMENT_CLICK_TABLE, n);
}), AnalysisEvent.on("indexButtonClicks", function(n) {
    sendData(_AnalysisTable.INDEX_BUTTON_CLICK_TABLE, n);
}), AnalysisEvent.on("myWebButtonClicks", function(n) {
    sendData(_AnalysisTable.MY_WEB_CLICK_TABLE, n);
}), AnalysisEvent.on("indexArticleSortClicks", function(n) {
    sendData(_AnalysisTable.INDEX_ARTICLE_SORT_TABLE, n);
}), AnalysisEvent.sendEvent = sendData, module.exports = {
    AnalysisEvent: AnalysisEvent
};