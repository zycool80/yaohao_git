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
            function n(o, i) {
                try {
                    var a = t[o](i), u = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(u).then(function(e) {
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), utils = require("./../../../utils/util.js"), Index = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            navigationBarTitleText: "购房资料",
            navigationBarBackgroundColor: "#3772cc"
        }, n.data = {
            address_type: !0,
            project_id: 2593,
            lottery_id: 1527,
            buildingData: {},
            item_one: {},
            item_two: {},
            item_three: {},
            hosingData: {},
            project_name: ""
        }, n.$repeat = {}, n.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, n.methods = {
            imagePre: function(e) {
                var t = [];
                for (var r in e) t.push(e[r]);
                wx.previewImage({
                    urls: t
                });
            },
            preview: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            wx.previewImage({
                                urls: [ e ]
                            });

                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, r, t);
                }))();
            },
            toRules: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n, o, i, a, u;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            wx.showLoading({
                                title: "加载中..."
                            }), n = [ "doc", "xls", "pdf", "docx", "xlsx" ], o = "doc";
                            for (i in n) a = n[i], u = new RegExp("." + a, "i"), u.test(e) && (o = a);
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
                    }, r, t);
                }))();
            }
        }, o = r, _possibleConstructorReturn(n, o);
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
                        return this.project_id = t.project_id, this.lottery_id = t.lottery_id, e.next = 4, 
                        _api2.default.getHousingData(this.lottery_id);

                      case 4:
                        r = e.sent, this.hosingData = r.data, this.project_name = this.hosingData.name || "", 
                        this.$apply();

                      case 8:
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
            var e = this.hosingData.name + "的购房资料", t = "/pages/lotteryDetail?id=&project_id=" + this.project_id + "&id=" + this.lottery_id + "&redirect=" + encodeURIComponent(utils.getCurrentPageUrlWithArgs());
            return _index.share.share(e, t);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/question/pages/purchaseData"));