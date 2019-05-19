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
            function r(o, i) {
                try {
                    var a = t[o](i), s = a.value;
                } catch (e) {
                    return void n(e);
                }
                if (!a.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        r.config = {
            navigationBarTitleText: "发布动态"
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {}
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.data = {
            second: 6,
            secondShow: !0,
            comment_show: !1,
            content: "",
            type: "",
            lottery_id: 0,
            project_id: 0,
            project_name: "",
            types: [ "楼盘动态", "预售证", "开盘", "交房" ],
            typeIndex: 0,
            relief_url: "/pages/webview2?redirect=https%3A%2F%2Fweb.huanjutang.com%2Fuser%2Fstatement%3Fid%3D15%26open_id%3DooEsM5FYDJ33Kb9f_cCWEyNKWFgA%26src%3DminiProgram%26time%3D1552370389%26sign%3Db6a5a7af16661b3748f024e1e5f5f75a",
            inputTitle: "",
            titleLen: 0,
            maxTitleLen: 30,
            inputContent: "",
            contentLen: 0,
            maxContentLength: 300
        }, r.methods = {
            cancelCommentShow: function() {
                this.second <= 0 && (this.comment_show = !1);
            },
            CommentShow: function() {
                this.second <= 0 && (this.comment_show = !1);
            },
            bindTypeChange: function(e) {
                this.typeIndex = e.detail.value;
            },
            bindTitleChange: function(e) {
                this.inputTitle = e.detail.value, this.titleLen = this.inputTitle.length;
            },
            bindContentChange: function(e) {
                this.inputContent = e.detail.value, this.contentLen = this.inputContent.length;
            },
            navigato: function(e) {
                return wx.navigateTo({
                    url: e
                }), !1;
            },
            submit: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r, o;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return n = {
                                project_id: e.project_id,
                                title: e.inputTitle,
                                content: e.inputContent,
                                type: parseInt(e.typeIndex) + 1
                            }, r = e, wx.showLoading({
                                title: "加载中..."
                            }), t.next = 5, _api2.default.addDynamic(n);

                          case 5:
                            o = t.sent, wx.hideLoading(), "0" === o.code.toString() && wx.showModal({
                                title: "提示",
                                showCancel: !1,
                                content: "动态发布成功，等待客服人员审核",
                                success: function(e) {
                                    wx.navigateTo({
                                        url: "/pages/lotteryDetail?project_id=" + r.project_id + "&id=" + r.lottery_id
                                    });
                                }
                            }), e.$apply();

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "showModel",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.getDynamic(this.project_id, this.type, 2, 1);

                      case 2:
                        t = e.sent, this.secondShow = !0, this.comment_show = !0, this.content = t.data.content, 
                        n = setInterval(function() {
                            r.second -= 1, r.second <= 0 && (clearInterval(n), r.secondShow = !1), r.$apply();
                        }, 1e3);

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.lottery_id = t.lottery_id, this.project_id = t.project_id, this.project_name = t.project_name, 
                        this.type = t.type, n = t.status, e.next = 7, _api2.default.isSaleMan(this.project_id);

                      case 7:
                        if (r = e.sent, 1 == r.data) {
                            e.next = 12;
                            break;
                        }
                        return e.next = 11, _index.tip.confirm("你不是该楼盘置业顾问，无法发布动态");

                      case 11:
                        return e.abrupt("return", wx.navigateBack());

                      case 12:
                        if (2 != n) {
                            e.next = 15;
                            break;
                        }
                        return e.next = 15, this.showModel();

                      case 15:
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
            return _index.share.share("快来发【" + this.project_name + "】楼盘的动态");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/news/pages/createStatement"));