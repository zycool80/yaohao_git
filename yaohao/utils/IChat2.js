function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), _events = require("./../npm/events/events.js"), _events2 = _interopRequireDefault(_events), IChat2 = function(e) {
    function t() {
        return _classCallCheck(this, t), _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "init",
        value: function() {
            var e = this;
            this.reconnectCount = 0, this.reconnect(), wx.onSocketClose(function() {
                console.log("socket关闭"), e.reconnect();
            }), wx.onSocketError(function(t) {
                console.log("socket报错：" + t.message), e.reconnect();
            }), wx.onSocketMessage(this.onMessage.bind(this)), setInterval(function() {
                e.ping();
            }, 8e3);
        }
    }, {
        key: "reconnect",
        value: function() {
            var e = this, t = 5e3 * this.reconnectCount;
            t > 15e3 && (t = 15e3), this.reconnectCount++, this.timeoutId && (clearTimeout(this.timeoutId), 
            this.timeoutId = null), this.timeoutId = setTimeout(function() {
                wx.onSocketOpen(function() {
                    console.log("连接成功"), e.reconnectCount = 0;
                }), wx.connectSocket({
                    url: "wss://gateway.huanjutang.com/wss",
                    data: {
                        x: "",
                        y: ""
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    method: "GET"
                });
            }, t);
        }
    }, {
        key: "ping",
        value: function() {
            wx.sendSocketMessage({
                data: "ping"
            });
        }
    }, {
        key: "onMessage",
        value: function(e) {
            var t = {};
            try {
                t = JSON.parse(e.data);
            } catch (e) {
                console.log(e.message);
            }
            var n = t.type || "";
            this.emit(n, t);
        }
    } ], [ {
        key: "instance",
        value: function() {
            return t._instance || (t._instance = new t()), t._instance;
        }
    } ]), t;
}(_events2.default), IChat = IChat2.instance();

module.exports = IChat;