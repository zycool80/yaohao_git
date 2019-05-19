var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
    }
    return Array.from(e);
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, a) {
                try {
                    var s = t[o](a), i = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
            }
            return r("next");
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

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _IChat = require("./../../../utils/IChat2.js"), _IChat2 = _interopRequireDefault(_IChat), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), parseJSON = _index.common.toJSON, globalModel = require("./../../../models/GlobalModel.js"), __self = null, bindMsgNotify = function(e) {
    String(e.content.sender_id) === String(__self.user_id) && (!e.content.content || 61 != e.content.type && 62 != e.content.type && 51 != e.content.type && 52 != e.content.type || (e.content.content = parseJSON(e.content.content)), 
    e.content.content && 71 == e.content.type && (e.content.content = e.content.content.split("||")), 
    e.content.read_status = 2, __self.historyList.push(e.content), _api2.default.chat.read(__self.user_id).then(function() {
        __self.$apply();
    }), __self.$apply(), __self.pageScrollBottom());
}, bindUserStatus = function() {}, bindSessionRead = function(e) {
    if (String(e.user_id) === String(__self.user_id)) {
        var t = !0, n = !1, r = void 0;
        try {
            for (var o, a = __self.historyList[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                o.value.read_status = 2;
            }
        } catch (e) {
            n = !0, r = e;
        } finally {
            try {
                !t && a.return && a.return();
            } finally {
                if (n) throw r;
            }
        }
        __self.$apply();
    }
}, bindSystemChat = function(e) {
    String(e.content.sender_id) === String(__self.user_id) && (!e.content.content || 61 != e.content.type && 62 != e.content.type && 51 != e.content.type && 52 != e.content.type || (e.content.content = parseJSON(e.content.content)), 
    e.content.content && 71 == e.content.type && (e.content.content = e.content.content.split("||")), 
    __self.historyList.push(e.content), __self.$apply(), __self.pageScrollBottom());
}, Index = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationBarTitleText: "我的聊天",
            enablePullDownRefresh: !1
        }, r.data = {
            navbarData: {
                title: "我的聊天",
                showCapsule: 1
            },
            project: null,
            oftenWordsView: !1,
            bindTelView: !1,
            moreThing: !1,
            callView: !1,
            avatar_url: "/images/default_sales_man_avatar.png",
            placeHolder: "/images/placeholder2.jpg",
            user_id: 0,
            sales_man_id: 0,
            historyList: [],
            loginInfo: null,
            userInfo: null,
            isFocus: !1,
            comment_cont: "",
            more: !0,
            sort: {
                1: "铜牌顾问",
                2: "银牌顾问",
                3: "金牌顾问"
            },
            broker: {
                1: "铜牌经纪人",
                2: "银牌经纪人",
                3: "金牌经纪人"
            },
            font_color: {
                1: "#8c7374",
                2: "#8d92a3",
                3: "#c86601"
            },
            formID: "",
            session_avatar: "",
            showCamera: !1,
            baseInfo: {},
            getPhoneView: !1,
            oftenWordsList: [],
            bottom: 0,
            project_id: "",
            project_img: "",
            project_name: "",
            projectHeight: 50,
            showProjectInfo: !0
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            },
            backHomeBottom: function() {
                return 340;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {
                "xmlns:v-bind": "",
                "v-bind:bottom.sync": "backHomeBottom"
            }
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.methods = {
            getFocus: function(e) {
                this.showProjectInfo = !1, this.bottom = e.detail.height, this.projectHeight = parseInt(this.bottom), 
                this.$apply();
            },
            loseFocus: function() {
                this.bottom = 0, this.$apply();
            },
            toUrl: function(e) {
                this.showProjectInfo = !1, wx.navigateTo({
                    url: "/pages/lotteryDetail?project_id=" + e
                });
            },
            makePhone: function(e) {
                this.showProjectInfo = !1, wx.showModal({
                    title: "提示",
                    content: "拨通后请说明来自成都摇号助手",
                    success: function(t) {
                        t.confirm && wx.makePhoneCall({
                            phoneNumber: e
                        });
                    }
                });
            },
            copyCode: function(e) {
                this.showProjectInfo = !1, wx.setClipboardData({
                    data: e
                });
            },
            preView: function(e) {
                wx.previewImage({
                    urls: [ e ]
                });
            },
            refuseGet: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var o, a;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            if (n.showProjectInfo = !1, "phone" !== e) {
                                r.next = 10;
                                break;
                            }
                            return r.next = 4, _api2.default.chat.send({
                                receiver_id: n.user_id,
                                content: "",
                                type: 61,
                                is_agreed: 0,
                                parent_id: n.historyList[t].id
                            });

                          case 4:
                            o = r.sent, n.historyList[t].is_operated = 1, n.historyList.push(o.data), n.$apply(), 
                            r.next = 16;
                            break;

                          case 10:
                            return r.next = 12, _api2.default.chat.send({
                                receiver_id: n.user_id,
                                content: "",
                                type: 62,
                                is_agreed: 0,
                                parent_id: n.historyList[t].id
                            });

                          case 12:
                            a = r.sent, n.historyList[t].is_operated = 1, n.historyList.push(a.data), n.$apply();

                          case 16:
                            n.pageScrollBottom();

                          case 17:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            greenGet: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var o;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            if (n.showProjectInfo = !1, o = null, "phone" !== e) {
                                r.next = 11;
                                break;
                            }
                            return r.next = 5, _api2.default.chat.send({
                                receiver_id: n.user_id,
                                content: "",
                                type: 61,
                                is_agreed: 1,
                                parent_id: n.historyList[t].id
                            });

                          case 5:
                            o = r.sent, n.historyList[t].is_operated = 1, n.historyList.push(o.data), n.$apply(), 
                            r.next = 17;
                            break;

                          case 11:
                            return r.next = 13, _api2.default.chat.send({
                                receiver_id: n.user_id,
                                content: "",
                                type: 62,
                                is_agreed: 1,
                                parent_id: n.historyList[t].id
                            });

                          case 13:
                            o = r.sent, n.historyList[t].is_operated = 1, n.historyList.push(o.data), n.$apply();

                          case 17:
                            n.pageScrollBottom();

                          case 18:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            pageHide: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.oftenWordsView = !1, e.moreThing = !1, e.$apply(), e.pageScrollBottom();

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            stopMove: function() {
                if (this.oftenWordsView || this.moreThing) return !1;
            },
            getOftenWords: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.showProjectInfo = !1, t.next = 3, _api2.default.chat.oftenUseWords();

                          case 3:
                            n = t.sent, e.oftenWordsList = n.data, e.oftenWordsView = !e.oftenWordsView, e.moreThing = !1, 
                            e.methods.stopMove(), e.$apply();

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            useOftenWords: function(e) {
                this.showProjectInfo = !1, this.oftenWordsView = !1, this.comment_cont = this.oftenWordsList[e], 
                this.isFocus = !0;
            },
            askPhone: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e.showProjectInfo = !1, 1 !== e.baseInfo.is_sales_man) {
                                t.next = 8;
                                break;
                            }
                            return t.next = 4, _api2.default.getPhoneNum(e.sales_man_id, 1);

                          case 4:
                            n = t.sent, 0 === n.code && wx.makePhoneCall({
                                phoneNumber: n.data.phone
                            }), t.next = 16;
                            break;

                          case 8:
                            return wx.showLoading({
                                title: "请求中..."
                            }), t.next = 11, _api2.default.chat.send({
                                receiver_id: e.user_id,
                                content: "",
                                type: 51
                            });

                          case 11:
                            r = t.sent, r.data.content = parseJSON(r.data.content), e.historyList.push(r.data), 
                            wx.hideLoading(), e.$apply();

                          case 16:
                            e.pageScrollBottom();

                          case 17:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            askWeixin: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.showProjectInfo = !1, wx.showLoading({
                                title: "请求中..."
                            }), t.next = 4, _api2.default.chat.send({
                                receiver_id: e.user_id,
                                content: "",
                                type: 52
                            });

                          case 4:
                            e.$apply(), wx.hideLoading(), e.pageScrollBottom();

                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            sendProjectInfo: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "请求中..."
                            }), n = e.project_name + "||" + e.project_id + "||" + e.project_img, t.next = 4, 
                            _api2.default.chat.send({
                                receiver_id: e.user_id,
                                content: n,
                                type: 71
                            });

                          case 4:
                            r = t.sent, r.data.content = r.data.content.split("||"), e.historyList.push(r.data), 
                            e.showProjectInfo = !1, e.$apply(), wx.hideLoading(), e.pageScrollBottom();

                          case 11:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            followSalesMan: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.showProjectInfo = !1, wx.showLoading({
                                title: "关注中",
                                mask: !0
                            }), t.next = 4, _api2.default.attentionUser(e.user_id);

                          case 4:
                            n = t.sent, "关注成功" === n.message ? e.baseInfo.is_attention = 1 : e.baseInfo.is_attention = 0, 
                            wx.hideLoading(), e.$apply();

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            openPhotos: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r, o, a, s;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _index.foundation.chooseImageSync().catch(function(e) {
                                console.log(e);
                            });

                          case 2:
                            if (n = t.sent) {
                                t.next = 5;
                                break;
                            }
                            return t.abrupt("return", !1);

                          case 5:
                            return wx.showLoading({
                                title: "发送中",
                                mask: !0
                            }), r = n.tempFilePaths[0], t.next = 9, _index.foundation.uploadFileSync(r).catch(function(e) {
                                console.log(e), wx.hideLoading(), _index.tip.toast("图片上传失败");
                            });

                          case 9:
                            return o = t.sent, a = o.data, s = a.data.url, t.next = 14, _api2.default.chat.sendPic(e.user_id, s).catch(function() {
                                wx.hideLoading(), _index.tip.toast("图片发送失败");
                            });

                          case 14:
                            o = t.sent, wx.hideLoading(), e.historyList.push(o.data), e.moreThing = !1, e.$apply(), 
                            e.pageScrollBottom();

                          case 20:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            sendMessage: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (!(e.comment_cont.length < 1)) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请输入你要发送的内容"));

                          case 2:
                            return wx.showLoading({
                                title: "加载中...",
                                mask: !0
                            }), t.next = 5, _api2.default.chat.send({
                                receiver_id: e.user_id,
                                content: e.comment_cont,
                                type: 1
                            });

                          case 5:
                            n = t.sent, wx.hideLoading(), e.historyList.push(n.data), e.comment_cont = "", e.isFocus = !1, 
                            e.$apply(), e.pageScrollBottom();

                          case 12:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            getMore: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.oftenWordsView = !1, e.moreThing = !e.moreThing;

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            loadMore: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中",
                                mask: !0
                            }), n = "", e.historyList.length > 0 && (n = e.historyList[0].id), t.next = 5, _api2.default.chat.history(e.user_id, n);

                          case 5:
                            r = t.sent, r.data.length < 1 && (e.more = !1), e.historyList = [].concat(_toConsumableArray(r.data), _toConsumableArray(e.historyList)), 
                            wx.hideLoading(), e.$apply();

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            preview: function(e) {
                this.showProjectInfo = !1, wx.previewImage({
                    urls: [ e ]
                });
            },
            sendFromID: function() {
                _api2.default.sendFromID(this.formID).then(function() {});
            },
            formSubmit: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            t.formID = e.detail.formId, t.methods.sendFromID.call(t);

                          case 2:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            bindContChange: function(e) {
                var t = e.detail.value;
                this.comment_cont = t, this.isFocus = t.length > 0;
            }
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, r, o, a, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = _wepy2.default.$instance, n.globalData.im_message = !1, this.user_id = t.user_id, 
                        this.session_avatar = t.avatar, this.project_id = t.project_id ? t.project_id : 0, 
                        this.project_img = t.project_img, this.project_name = t.project_name, this.userInfo = _index.cache.get("userinfo"), 
                        this.my_phone = this.userInfo.phone, this.my_phone || wx.redirectTo({
                            url: "/subPackages/tools/pages/telLogin?direct=" + encodeURIComponent("/subPackages/me/pages/chatInterface?user_id=" + this.user_id + "&avatar=" + this.session_avatar + "&project_id=" + this.project_id + "&project_name=" + this.project_name + "&project_img=" + this.project_img)
                        }), this.$apply(), e.next = 13, _api2.default.chat.read(this.user_id);

                      case 13:
                        return e.next = 15, _api2.default.chat.getUserInfo(this.user_id);

                      case 15:
                        return r = e.sent, this.sales_man_id = r.data.sales_man_id, this.baseInfo = r.data, 
                        this.session_avatar || (this.session_avatar = this.baseInfo.avatar_url), e.next = 21, 
                        _api2.default.chat.getProjectName(this.user_id);

                      case 21:
                        return o = e.sent, this.project = o.data, this.$apply(), e.next = 26, _api2.default.chat.send({
                            receiver_id: this.user_id,
                            content: "",
                            type: 3,
                            session_id: this.user_id,
                            project_id: this.project_id
                        });

                      case 26:
                        return e.next = 28, _api2.default.chat.history(this.user_id, "");

                      case 28:
                        a = e.sent;
                        for (s in a.data) 71 == a.data[s].type && (a.data[s].content = a.data[s].content.split("||"));
                        this.historyList = a.data, this.$apply(), __self = this, _IChat2.default.on("single_chat", bindMsgNotify).on("user_status", bindUserStatus).on("session_read", bindSessionRead).on("system_chat", bindSystemChat), 
                        this.pageScrollBottom();

                      case 35:
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
            _IChat2.default.removeListener("single_chat", bindMsgNotify), _IChat2.default.removeListener("user_status", bindUserStatus), 
            _IChat2.default.removeListener("session_read", bindSessionRead), _IChat2.default.removeListener("system_chat", bindSystemChat);
        }
    }, {
        key: "onReachBottom",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            return _index.share.share("一起加入我们的讨论呗!");
        }
    }, {
        key: "getNowTime",
        value: function() {
            var e = new Date(), t = e.getFullYear(), n = e.getMonth() + 1, r = e.getDate(), o = e.getHours(), a = e.getMinutes(), s = e.getSeconds();
            return n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), o < 10 && (o = "0" + o), 
            a < 10 && (a = "0" + a), s < 10 && (s = "0" + s), t + "-" + n + "-" + r + " " + o + ":" + a + ":" + s;
        }
    }, {
        key: "pageScrollBottom",
        value: function() {
            setTimeout(function() {
                try {
                    wx.createSelectorQuery().select("#chatInterface").boundingClientRect(function(e) {
                        wx.pageScrollTo({
                            scrollTop: e && e.height ? e.height : 0,
                            duration: 0
                        });
                    }).exec();
                } catch (e) {}
            }, 100);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/chatInterface"));