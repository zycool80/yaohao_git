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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _popupWindow = require("./../../../components/popupWindow.js"), _popupWindow2 = _interopRequireDefault(_popupWindow), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _TipEvent = require("./../../../utils/TipEvent.js"), _TipEvent2 = _interopRequireDefault(_TipEvent), _index = require("./../../../utils/utilsKit/index.js"), Index = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        r.config = {
            navigationBarTitleText: "发表评论"
        }, r.data = {
            placeholder: "你觉得楼盘位置如何，环境怎么样？配套规划还满意吗？说说你的看法...",
            name: "",
            comment_cont: "",
            pid: 0,
            lottery_id: 0,
            project_id: 0,
            comment_show: !1,
            rules: "",
            title: ""
        }, r.$repeat = {}, r.$props = {
            BackHome: {
                "xmlns:wx": ""
            },
            Popup: {
                "xmlns:v-bind": "",
                "v-bind:rules_show.sync": "comment_show",
                "v-bind:rules.sync": "rules",
                rules_title: "评论规则及注意事项"
            }
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default,
            Popup: _popupWindow2.default
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.methods = {
            lookRules: function() {
                this.comment_show = !0;
            },
            inputVal: function(e) {
                this.comment_cont = e.detail.value, this.$apply();
            },
            formSubmit: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e.comment_cont) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请输入评论内容", "", "none"));

                          case 2:
                            return wx.showLoading({
                                title: "加载中..."
                            }), t.next = 5, _api2.default.sendProjectComment({
                                project_id: e.project_id,
                                content: e.comment_cont,
                                pid: e.pid,
                                lottery_id: e.lottery_id
                            });

                          case 5:
                            n = t.sent, e.comment_cont = "", n.data ? (_index.tip.toast("评论成功"), wx.navigateBack({
                                delta: 1
                            }), _TipEvent2.default.emit("reloadDataEvent")) : _index.tip.toast("评论失败", "", "none"), 
                            e.$apply(), wx.hideLoading();

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
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
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.name = t.name || "", this.pid = t.id, this.title = t.title, this.lottery_id = t.lottery_id || "", 
                        this.project_id = t.project_id || "", this.placeholder = this.name ? "回复@" + this.name : "你觉得楼盘位置如何，环境怎么样？配套规划还满意吗？说说你的看法...", 
                        e.next = 8, _api2.default.commentRules();

                      case 8:
                        n = e.sent, this.rules = n.data.content, this.rules = this.rules.replace(/<\/?br\/?>/g, "\n"), 
                        this.rules = this.rules.replace(/<[^\/>]+>/g, ""), this.rules = this.rules.replace(/<\/p>/g, "\n"), 
                        this.rules = this.rules.replace(/<[^>]+>/g, ""), this.$apply();

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
            return _index.share.share("我在这里评价", "/subPackages/tools/pages/commentInp?title=" + this.title + "&name=" + this.name + "&pid=" + this.pid + "&lottery_id=" + this.lottery_id + "&project_id=" + this.project_id);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/tools/pages/commentInp"));