var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function a(r, s) {
                try {
                    var o = t[r](s), i = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(i).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(i);
            }
            return a("next");
        });
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

function formatDateTime(e) {
    var t = void 0;
    t = e ? new Date(e) : new Date();
    var n = (t.getFullYear(), t.getMonth() + 1), a = t.getDate(), r = t.getHours(), s = t.getMinutes(), o = t.getSeconds();
    return n < 10 && (n = "0" + n), a < 10 && (a = "0" + a), r < 10 && (r = "0" + r), 
    s < 10 && (s = "0" + s), o < 10 && (o = "0" + o), isNaN(r) || isNaN(s) ? "" : r + ":" + s;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _IChat = require("./../../../utils/IChat2.js"), _IChat2 = _interopRequireDefault(_IChat), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), __self = void 0, bindMsgNotify = function(e) {
    _wepy2.default.$instance.globalData.im_message = !0, __self.chatList.reduce(function(e, t) {
        return e.concat(t.user.id);
    }, []).indexOf(String(e.user_id)) < 0 ? _api2.default.chat.recentContacts().then(function(e) {
        __self.chatList = e.data, __self.$apply();
    }) : (__self.chatList.forEach(function(t) {
        if (String(t.user.id) === String(e.user_id)) {
            switch (t.unread_count = parseInt(t.unread_count) + 1, parseInt(e.content.type)) {
              case 1:
                t.last_message.content = e.content.content;
                break;

              case 2:
                t.last_message.content = "[图片]";
                break;

              case 3:
                t.last_message.content = "[信息卡片]";
                break;

              case 4:
                t.last_message.content = "[系统提示]";
                break;

              case 51:
                t.last_message.content = "[请求获取手机号]";
                break;

              case 52:
                t.last_message.content = "[请求获取微信号]";
                break;

              case 61:
                t.last_message.content = "[申请手机号结果]";
                break;

              case 62:
                t.last_message.content = "[申请微信号结果]";
                break;

              case 71:
                t.last_message.content = "[楼盘信息卡片]";
            }
            t.last_message.updated_at = formatDateTime(e.content.updated_at);
        }
    }), __self.$apply());
}, Index = function(e) {
    function t() {
        var e, n, a, r;
        _classCallCheck(this, t);
        for (var s = arguments.length, o = Array(s), i = 0; i < s; i++) o[i] = arguments[i];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        a.config = {
            navigationBarTitleText: "我的消息",
            enablePullDownRefresh: !0
        }, a.data = {
            avatar_url: "/images/default_sales_man_avatar.png",
            chatList: [],
            sysMsgList: [],
            userInfo: null,
            loading: !1,
            closeHandle: !1
        }, a.$repeat = {}, a.$props = {
            BackHome: {}
        }, a.$events = {}, a.components = {
            BackHome: _BackHome2.default
        }, a.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, a.methods = {
            closeBtn: function() {
                this.closeHandle = !0;
                var e = new Date(), t = e.getHours(), n = 24 - t;
                _index.cache.set("msgAddPublic", this.closeHandle, n);
            },
            clearUnRead: function(e, t) {
                var n = this.chatList[e];
                n && ("sys" === t ? n.unread_num = 0 : n.unread_count = 0);
            }
        }, r = n, _possibleConstructorReturn(a, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return __self = this, this.userInfo = globalModel.getUserInfo(), e.next = 4, _api2.default.isGetPromise();

                      case 4:
                        t = e.sent, 1 == t.data ? this.closeHandle = !0 : this.closeHandle = _index.cache.get("msgAddPublic"), 
                        this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "reload",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.loading = !1, wx.showLoading({
                            title: "加载中..."
                        }), e.next = 4, _api2.default.chat.recentContacts();

                      case 4:
                        return t = e.sent, e.next = 7, _api2.default.chat.sysMsgList();

                      case 7:
                        n = e.sent, this.chatList = t.data, n.data.data && n.data.data.length > 0 && (this.sysMsgList = [].concat(n.data.data[0])), 
                        wx.hideLoading(), this.loading = !0, this.$apply();

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onPullDownRefresh",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.reload();

                      case 2:
                        wx.stopPullDownRefresh(), this.$apply();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = _wepy2.default.$instance, t.globalData.im_message = !1, _IChat2.default.on("single_chat", bindMsgNotify), 
                        e.next = 5, this.reload();

                      case 5:
                        this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onHide",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        _IChat2.default.removeListener("single_chat", bindMsgNotify);

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onUnload",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        _IChat2.default.removeListener("single_chat", bindMsgNotify);

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/advisory"));