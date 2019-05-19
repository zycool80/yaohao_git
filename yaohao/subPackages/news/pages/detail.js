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
            function r(a, o) {
                try {
                    var i = t[a](o), u = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(u);
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
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "文章详情",
            enablePullDownRefresh: !0
        }, r.data = {
            id: "",
            type: 0,
            item: null,
            articleTitle: "",
            banners: []
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {}
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.methods = {
            like: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.articleDood(e.id);

                          case 2:
                            n = t.sent, e.item.is_like = n.data.status, e.item.likeCount = n.data.num, e.$apply();

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            preview: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            r = e, a = [ r ], r && a.length > 0 && wx.previewImage({
                                current: r,
                                urls: a
                            });

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t, n);
                }))();
            },
            showCode: function() {
                wx.previewImage({
                    urls: [ "http://imgcdn.huanjutang.com/qrcode_for_app_banner.jpg" ]
                });
            },
            reloadData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), t.next = 3, _api2.default.projectArticle(e.type, e.id);

                          case 3:
                            n = t.sent, e.item = n.data.data[0];
                            try {
                                e.item.content = decodeURIComponent(e.item.content);
                            } catch (e) {}
                            e.item.content = e.item.content.replace(/<p>|<\/span>|<\/storage>|<\/em>/g, ""), 
                            e.item.content = e.item.content.replace(/<\/p>/g, "\n"), e.item.content = e.item.content.replace(/&nbsp;/g, " "), 
                            e.item.content = e.item.content.replace(/<\/img\s*(src="[^"]+")>/g, "<image $1/>"), 
                            e.item.content = e.item.content.replace(/<\/?(?!(image))[^>]+/g, ""), e.$apply(), 
                            wx.hideLoading();

                          case 13:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.type = t.type, this.id = t.id, e.next = 4, this.methods.reloadData.call(this);

                      case 4:
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
            return this.articleTitle = this.item.title, _index.share.share("【" + this.articleTitle + "】");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/news/pages/detail"));