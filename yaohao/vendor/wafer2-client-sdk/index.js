var constants = require("./lib/constants.js"), login = require("./lib/login.js"), Session = require("./lib/session.js"), request = require("./lib/request.js"), Tunnel = require("./lib/tunnel.js"), authHeader = function() {
    return request.buildAuthHeader(Session.get());
}, _exports = module.exports = {
    login: login.login,
    LoginError: login.LoginError,
    clearSession: Session.clear,
    request: request.request,
    login2: request.login,
    RequestError: request.RequestError,
    authHeader: authHeader,
    Tunnel: Tunnel,
    SESSION_KEY: "weapp_session_" + constants.WX_SESSION_MAGIC_ID
};

Object.keys(constants).forEach(function(e) {
    0 === e.indexOf("ERR_") && (_exports[e] = constants[e]);
});