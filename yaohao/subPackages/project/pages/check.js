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
                    var a = t[o](i), u = a.value;
                } catch (e) {
                    return void n(e);
                }
                if (!a.done) return Promise.resolve(u).then(function(e) {
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
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        r.config = {
            navigationBarTitleText: "核验"
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {}
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.data = {
            lottery_id: 0,
            name: "",
            contents: []
        }, r.methods = {
            toRules: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, o, i, a, u;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            wx.showLoading({
                                title: "加载中..."
                            }), r = [ "doc", "xls", "pdf", "docx", "xlsx" ], o = "doc";
                            for (i in r) a = r[i], u = new RegExp("." + a, "i"), u.test(e) && (o = a);
                            wx.downloadFile({
                                url: e,
                                success: function(e) {
                                    var t = e.tempFilePath;
                                    wx.openDocument({
                                        filePath: t,
                                        fileType: o
                                    });
                                },
                                complete: function() {
                                    wx.hideLoading();
                                }
                            });

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, n, t);
                }))();
            },
            previewImg: function() {
                wx.previewImage({
                    urls: [ this.contents.url ],
                    current: this.contents.url
                });
            },
            savePicture: function() {
                wx.showLoading({
                    title: "保存中"
                }), wx.downloadFile({
                    url: this.contents.url,
                    success: function(e) {
                        var t = e.tempFilePath;
                        wx.saveImageToPhotosAlbum({
                            filePath: t,
                            success: function(e) {
                                _index.tip.toast("保存成功");
                            },
                            fail: function(e) {
                                _index.tip.toast("保存失败", "", "");
                            },
                            complete: function() {
                                wx.hideLoading();
                            }
                        });
                    },
                    fail: function() {
                        wx.hideLoading();
                    }
                });
            },
            loadData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), t.next = 3, _api2.default.timeAxisInfo(e.lottery_id, 3);

                          case 3:
                            n = t.sent, e.contents = n.data, e.$apply(), wx.hideLoading();

                          case 7:
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
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.lottery_id = t.lottery_id, this.name = decodeURIComponent(t.name), e.next = 4, 
                        this.methods.loadData.call(this);

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
        key: "onShareAppMessage",
        value: function(e) {
            return _index.share.share(this.name + "楼盘的线下提交资料清单明细");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/check"));