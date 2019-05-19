function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, a) {
                try {
                    var i = t[o](a), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
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
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigatorBarTitleText: "预售"
        }, n.data = {
            lottery_id: 0,
            name: "",
            projectToggle: 1,
            item_one: {},
            item_two: {},
            item_three: {}
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
            toRules: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n, o, a, i, u;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            wx.showLoading({
                                title: "加载中..."
                            }), n = [ "doc", "xls", "pdf", "docx", "xlsx" ], o = "doc";
                            for (a in n) i = n[a], u = new RegExp("." + i, "i"), u.test(e) && (o = i);
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
            changeProjectToggle: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return t.projectToggle = e, r.next = 3, t.methods.loadData.call(t);

                          case 3:
                            t.$apply();

                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            loadData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n, o;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.timeAxisInfo(e.lottery_id, 1, 1);

                          case 2:
                            return r = t.sent, t.next = 5, _api2.default.timeAxisInfo(e.lottery_id, 1, 2);

                          case 5:
                            return n = t.sent, t.next = 8, _api2.default.timeAxisInfo(e.lottery_id, 1, 3);

                          case 8:
                            o = t.sent, e.item_one = r.data, e.item_two = n.data, e.item_three = o.data, e.$apply();

                          case 13:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
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
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.lottery_id = t.lottery_id, this.name = decodeURIComponent(t.name), wx.setNavigationBarTitle({
                            title: this.name
                        }), e.next = 5, this.methods.loadData.call(this);

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
        key: "onShareAppMessage",
        value: function() {
            return _index.share.share("【" + this.name + "】预售");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/preSale"));