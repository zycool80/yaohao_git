var constants = require("./constants.js"), SESSION_KEY = "weapp_session_" + constants.WX_SESSION_MAGIC_ID, Session = {
    get: function() {
        return wx.getStorageSync(SESSION_KEY) || null;
    },
    set: function(S) {
        wx.setStorageSync(SESSION_KEY, S);
    },
    clear: function() {
        wx.removeStorageSync(SESSION_KEY);
    }
};

module.exports = Session;