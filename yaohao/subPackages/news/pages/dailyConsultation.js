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
                    var o = t[a](i), s = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _articleStyle = require("./../../../components/articleStyle.js"), _articleStyle2 = _interopRequireDefault(_articleStyle), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationBarTitleText: "成都摇号助手",
            enablePullDownRefresh: !0
        }, n.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, n.$repeat = {
            articles: {
                com: "articleStyle",
                props: "item.sync"
            }
        }, n.$props = {
            articleStyle: {
                "xmlns:v-bind": {
                    value: "",
                    for: "articles",
                    item: "article",
                    index: "i",
                    key: "key"
                },
                "v-bind:item.sync": {
                    value: "article",
                    type: "item",
                    for: "articles",
                    item: "article",
                    index: "i",
                    key: "key"
                }
            },
            BackHome: {
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            articleStyle: _articleStyle2.default,
            BackHome: _BackHome2.default
        }, n.data = {
            more: !0,
            type: "",
            page: 1,
            articles: [],
            banner: [],
            loading: !1
        }, n.methods = {}, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "loadNext",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = "", this.loading = !1, 5 != this.type) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 5, _api2.default.article.projectArticle(0, "", this.page, 1, "");

                      case 5:
                        t = e.sent;

                      case 6:
                        if (5 == this.type) {
                            e.next = 10;
                            break;
                        }
                        return e.next = 9, _api2.default.article.projectArticle(this.type, "", this.page, 0, "");

                      case 9:
                        t = e.sent;

                      case 10:
                        r = t.data.data, this.page >= t.data.last_page || !t.data.last_page ? this.more = !1 : this.page++, 
                        r.forEach(function(e) {
                            e.content = e.content.replace(/<\/?[^>]+>/gi, ""), e.content = e.content.replace(/(&nbsp;|\s|\n|\t)/g, "");
                        }), this.articles = this.articles.concat(t.data.data), this.loading = !0, this.$apply();

                      case 16:
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
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.type = t.type || 0, r = "", wx.showLoading({
                            title: "加载中..."
                        }), e.t0 = parseInt(this.type), e.next = 0 === e.t0 ? 6 : 1 === e.t0 ? 12 : 2 === e.t0 ? 18 : 3 === e.t0 ? 24 : 4 === e.t0 ? 30 : 5 === e.t0 ? 36 : 42;
                        break;

                      case 6:
                        return wx.setNavigationBarTitle({
                            title: "资讯推荐"
                        }), e.next = 9, _api2.default.getBannerList(18);

                      case 9:
                        return r = e.sent, this.banner = r.data, e.abrupt("break", 42);

                      case 12:
                        return wx.setNavigationBarTitle({
                            title: "买房干货"
                        }), e.next = 15, _api2.default.getBannerList(14);

                      case 15:
                        return r = e.sent, this.banner = r.data, e.abrupt("break", 42);

                      case 18:
                        return wx.setNavigationBarTitle({
                            title: "政策解读"
                        }), e.next = 21, _api2.default.getBannerList(15);

                      case 21:
                        return r = e.sent, this.banner = r.data, e.abrupt("break", 42);

                      case 24:
                        return wx.setNavigationBarTitle({
                            title: "楼盘文章"
                        }), e.next = 27, _api2.default.getBannerList(16);

                      case 27:
                        return r = e.sent, this.banner = r.data, e.abrupt("break", 42);

                      case 30:
                        return wx.setNavigationBarTitle({
                            title: "房产投资"
                        }), e.next = 33, _api2.default.getBannerList(17);

                      case 33:
                        return r = e.sent, this.banner = r.data, e.abrupt("break", 42);

                      case 36:
                        return wx.setNavigationBarTitle({
                            title: "热门推荐"
                        }), e.next = 39, _api2.default.getBannerList(18);

                      case 39:
                        return r = e.sent, this.banner = r.data, e.abrupt("break", 42);

                      case 42:
                        return e.next = 44, this.loadNext();

                      case 44:
                        this.$apply(), wx.hideLoading();

                      case 46:
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
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中..."
                        }), this.page = 1, this.articles = [], e.next = 5, this.loadNext();

                      case 5:
                        this.$apply(), wx.hideLoading();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
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
                        if (this.more) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 2:
                        return e.next = 4, this.loadNext();

                      case 4:
                        this.$apply();

                      case 5:
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
                        wx.stopPullDownRefresh();

                      case 3:
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
            return _index.share.share("我在这里查摇号结果，好方便哦");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/news/pages/dailyConsultation"));