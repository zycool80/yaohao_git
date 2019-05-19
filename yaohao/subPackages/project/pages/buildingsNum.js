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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) o[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationBarTitleText: "栋数",
            enablePullDownRefresh: !0
        }, n.data = {
            background: [ "", "#d3f9ef", "#fde5e5", "#e0f8fa", "#f5f5f5" ],
            color: [ "", "#16c295", "#f7776a", "#16a5af", "#666666" ],
            scrollWidth: 0,
            shareView: !1,
            tab: 0,
            id: "",
            buildingUnit: [],
            buildingFloor: [],
            unitId: "",
            title: ""
        }, n.$repeat = {}, n.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, n.methods = {
            preview: function(e) {
                wx.previewImage({
                    url: [ e ]
                });
            },
            switchTab: function(e, t) {
                var r = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return r.tab = e, r.unitId = t, n.next = 4, r.methods.reload.call(r);

                          case 4:
                          case "end":
                            return n.stop();
                        }
                    }, n, r);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.buildingFloor(e.unitId);

                          case 2:
                            if ((r = t.sent) && r.data) for (n in r.data) e.buildingFloor.push({
                                key: n,
                                data: r.data[n]
                            });
                            e.$apply();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), e.buildingFloor = [], t.next = 4, e.methods.loadNext.call(e);

                          case 4:
                            wx.stopPullDownRefresh(), wx.hideLoading(), e.$apply();

                          case 7:
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
                var r, n, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = t.buildingNum, this.title = t.title, n = t.id, wx.setNavigationBarTitle({
                            title: r
                        }), e.next = 6, _api2.default.buildingUnit(n);

                      case 6:
                        return a = e.sent, a && a.data && (this.buildingUnit = a.data, this.unitId = this.buildingUnit[0].id, 
                        this.scrollWidth = 130 * this.buildingUnit.length), e.next = 10, this.methods.reload.call(this);

                      case 10:
                        this.$apply();

                      case 11:
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
                        return e.next = 2, this.methods.reload.call(this);

                      case 2:
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
            return _index.share.share(this.title + "楼盘的一房一价出炉，快来摇号助手看看吧！");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/buildingsNum"));