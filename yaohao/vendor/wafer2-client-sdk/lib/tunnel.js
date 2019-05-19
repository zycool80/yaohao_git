function Tunnel(n) {
    function t() {
        return D.status === STATUS_CLOSED;
    }
    function e() {
        return D.status === STATUS_CONNECTING;
    }
    function T() {
        return D.status === STATUS_ACTIVE;
    }
    function E() {
        return D.status === STATUS_RECONNECTING;
    }
    function c(n) {
        D.status !== n && (D.status = n);
    }
    function o(n, t) {
        "function" == typeof t && y.push([ n, t ]);
    }
    function u(n, t) {
        y.forEach(function(e) {
            var T = e[0], E = e[1];
            "*" === T ? E(n, t) : T === n && E(t);
        });
    }
    function i(n, t) {
        w.indexOf(n) > -1 && (n = "@" + n), u(n, t);
    }
    function C() {
        function t(n) {
            v ? (c(STATUS_CLOSED), u("error", {
                code: ERR_CONNECT_SERVICE,
                message: "连接信道服务失败，网络错误或者信道服务没有正确响应",
                detail: n || null
            })) : G(n);
        }
        k || (k = !0, c(v ? STATUS_CONNECTING : STATUS_RECONNECTING), requestLib.request({
            url: n,
            method: "GET",
            success: function(n) {
                200 == +n.statusCode && n.data && n.data.data.connectUrl ? s(D.socketUrl = n.data.data.connectUrl) : t(n);
            },
            fail: t,
            complete: function() {
                return k = !1;
            }
        }));
    }
    function s(n) {
        wxTunnel.listen({
            onOpen: _,
            onMessage: r,
            onClose: L,
            onError: g
        }), wx.connectSocket({
            url: n
        }), v = !1;
    }
    function _() {
        e() ? u("connect") : E() && (u("reconnect"), m()), c(STATUS_ACTIVE), a(), P();
    }
    function r(n) {
        A(n.data);
    }
    function S(n) {
        T() ? N(n) : x.push(n);
    }
    function N(n) {
        var t = [ n.type ];
        n.content && t.push(JSON.stringify(n.content)), wx.sendSocketMessage({
            data: t.join(":"),
            fail: g
        });
    }
    function a() {
        x.forEach(S), x.length = 0;
    }
    function l(n, t) {
        S({
            type: PACKET_TYPE_MESSAGE,
            content: {
                type: n,
                content: t
            }
        });
    }
    function R() {
        S({
            type: PACKET_TYPE_PING
        });
    }
    function O() {
        S({
            type: PACKET_TYPE_CLOSE
        });
    }
    function A(n) {
        var t = n.split(":"), e = t.shift(), T = t.join(":") || null, E = {
            type: e
        };
        if (T) try {
            E.content = JSON.parse(T);
        } catch (n) {}
        switch (E.type) {
          case PACKET_TYPE_MESSAGE:
            f(E);
            break;

          case PACKET_TYPE_PONG:
            U(E);
            break;

          case PACKET_TYPE_TIMEOUT:
            I(E);
            break;

          case PACKET_TYPE_CLOSE:
            K(E);
        }
    }
    function f(n) {
        var t = n.content;
        i(t.type, t.content);
    }
    function I(n) {
        var t = 1e3 * n.content;
        isNaN(t) || (V = t, h());
    }
    function U(n) {
        P();
    }
    function P() {
        clearTimeout(q), clearTimeout(b), q = setTimeout(h, V);
    }
    function h() {
        T() && (R(), b = setTimeout(p, V));
    }
    function p() {
        G("服务器已失去响应");
    }
    function G(n) {
        j >= F ? (M(), u("error", {
            code: ERR_RECONNECT,
            message: "重连失败",
            detail: n
        })) : (wx.closeSocket(), X += J, c(STATUS_RECONNECTING), z = setTimeout(d, X)), 
        0 === j && u("reconnecting"), j += 1;
    }
    function d() {
        C();
    }
    function m() {
        j = 0, X = 0;
    }
    function K(n) {
        M();
    }
    function L() {
        B || T() && G("链接已断开");
    }
    function M() {
        B = !0, Y(), c(STATUS_CLOSED), m(), v = !1, clearTimeout(q), clearTimeout(b), clearTimeout(z), 
        u("close"), B = !1;
    }
    function Y(n) {
        T() && !1 !== n && O(), wx.closeSocket();
    }
    function g(n) {
        switch (D.status) {
          case Tunnel.STATUS_CONNECTING:
            u("error", {
                code: ERR_SOCKET_ERROR,
                message: "连接信道失败，网络错误或者信道服务不可用",
                detail: n
            });
        }
    }
    if (currentTunnel && currentTunnel.status !== STATUS_CLOSED) throw new Error("当前有未关闭的信道，请先关闭之前的信道，再打开新信道");
    currentTunnel = this;
    var D = this;
    this.serviceUrl = n, this.socketUrl = null, this.status = null, this.open = C, this.on = o, 
    this.emit = l, this.close = M, this.isClosed = t, this.isConnecting = e, this.isActive = T, 
    this.isReconnecting = E, c(STATUS_CLOSED);
    var w = "connect,close,reconnecting,reconnect,error".split(","), y = [], v = !0, k = !1, x = [], V = 15e3, q = 0, b = 0, j = 0, F = Tunnel.MAX_RECONNECT_TRY_TIMES || DEFAULT_MAX_RECONNECT_TRY_TIMES, X = 0, J = Tunnel.RECONNECT_TIME_INCREASE || DEFAULT_RECONNECT_TIME_INCREASE, z = 0, B = !1;
}

var requestLib = require("./request.js"), wxTunnel = require("./wxTunnel.js"), currentTunnel = null, STATUS_CLOSED = Tunnel.STATUS_CLOSED = "CLOSED", STATUS_CONNECTING = Tunnel.STATUS_CONNECTING = "CONNECTING", STATUS_ACTIVE = Tunnel.STATUS_ACTIVE = "ACTIVE", STATUS_RECONNECTING = Tunnel.STATUS_RECONNECTING = "RECONNECTING", ERR_CONNECT_SERVICE = Tunnel.ERR_CONNECT_SERVICE = 1001, ERR_CONNECT_SOCKET = Tunnel.ERR_CONNECT_SOCKET = 1002, ERR_RECONNECT = Tunnel.ERR_RECONNECT = 2001, ERR_SOCKET_ERROR = Tunnel.ERR_SOCKET_ERROR = 3001, PACKET_TYPE_MESSAGE = "message", PACKET_TYPE_PING = "ping", PACKET_TYPE_PONG = "pong", PACKET_TYPE_TIMEOUT = "timeout", PACKET_TYPE_CLOSE = "close", DEFAULT_MAX_RECONNECT_TRY_TIMES = 5, DEFAULT_RECONNECT_TIME_INCREASE = 1e3;

module.exports = Tunnel;