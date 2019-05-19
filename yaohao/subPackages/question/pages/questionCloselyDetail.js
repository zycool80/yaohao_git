var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, i) {
                try {
                    var o = t[a](i), u = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
            }
            return n("next");
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
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) o[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationBarTitleText: "我要追问",
            enablePullDownRefresh: !1
        }, n.data = {
            uploadPath: _index.wxRequest.requestUrl("/upload/image"),
            num: 0,
            maxNum: 300,
            id: 0,
            item: [],
            inputVal: "",
            my_id: "",
            imageList: []
        }, n.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, n.$repeat = {}, n.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.methods = {
            preview: function(e, t) {
                var r = [];
                e.img.forEach(function(e) {
                    r = r.concat(e);
                });
                var n = t.currentTarget.dataset, a = n.preview;
                a && r.length > 0 && wx.previewImage({
                    current: a,
                    urls: r
                });
            },
            toUrl: function(e) {
                return wx.navigateTo({
                    url: e
                }), !1;
            },
            binInput: function(e) {
                this.num = e.detail.value.length, this.inputVal = e.detail.value;
            },
            deletePic: function(e) {
                var t = [];
                for (var r in this.imageList) r != e && t.push(this.imageList[r]);
                this.imageList = t;
            },
            submit: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e.inputVal) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请输入您的追问内容", "", "none"));

                          case 2:
                            return t.next = 4, _api2.default.toQuestionClosely(e.id, e.inputVal);

                          case 4:
                            if (r = t.sent, "追问成功" !== r.data) {
                                t.next = 10;
                                break;
                            }
                            e.inputVal = "", wx.redirectTo({
                                url: "/subPackages/question/pages/questionDetail?id=" + e.id
                            }), t.next = 11;
                            break;

                          case 10:
                            return t.abrupt("return", _index.tip.toast("追问失败", "", "none"));

                          case 11:
                            e.$apply();

                          case 12:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            reloadData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getQuestionInfo(e.id);

                          case 2:
                            r = t.sent, e.item = r.data, e.$apply();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = _index.cache.get("userinfo") || {}, this.my_id = r.id, this.id = t.id, 
                        e.next = 5, this.methods.reloadData.call(this);

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
        key: "onPullDownRefresh",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.methods.reloadData.call(this);

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
        key: "onShareAppMessage",
        value: function() {
            return _index.share.share("如果你有买房相关的任何问题，都可以来这里问问哦～");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/question/pages/questionCloselyDetail"));