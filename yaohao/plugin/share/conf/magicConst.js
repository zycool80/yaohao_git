var _require = require("./../../../models/GlobalModel.js"), getUserInfo = _require.getUserInfo, utils = require("./../../../utils/util.js"), magicConst = {
    $_USER_ID: function() {
        var e = getUserInfo();
        return e ? e.id : "";
    },
    $_SALESMAN_ID: function() {
        var e = getUserInfo();
        return e ? e.sales_man_id : "";
    },
    $_USERINFO: function() {
        return getUserInfo() || {};
    },
    $_CURRENT_URL: function() {
        return utils.getCurrentPageUrlWithArgs();
    },
    $_CURRENT_URL_ENCODED: function() {
        var e = utils.getCurrentPageUrlWithArgs();
        return encodeURIComponent(e);
    }
};

module.exports = {
    $_USER_ID: magicConst.$_USER_ID,
    $_SALESMAN_ID: magicConst.$_SALESMAN_ID,
    $_USERINFO: magicConst.$_USERINFO,
    $_CURRENT_URL: magicConst.$_CURRENT_URL,
    $_CURRENT_URL_ENCODED: magicConst.$_CURRENT_URL_ENCODED
};