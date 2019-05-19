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
            function n(i, o) {
                try {
                    var a = t[i](o), s = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(s).then(function(e) {
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), utils = require("./../../../utils/util.js"), Index = function(e) {
    function t() {
        var e, r, n, i;
        _classCallCheck(this, t);
        for (var o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            navigationBarTitleText: "周边配套",
            enablePullDownRefresh: !1
        }, n.data = {
            show_long: 0,
            show_lat: 0,
            axis_long: 0,
            axis_lat: 0,
            markers: [],
            items: [],
            project_name: "",
            project_id: 0,
            axis: ""
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
            showMarker: function(e, t, r) {
                this.show_long = e, this.show_lat = t, this.markers = [ {
                    iconPath: "/images/icons/marker.png",
                    latitude: this.axis_lat,
                    longitude: this.axis_long,
                    width: 28,
                    height: 30,
                    callout: {
                        content: this.project_name,
                        color: "#666",
                        fontSize: 13,
                        borderRadius: 4,
                        bgColor: "#ffffff",
                        padding: 5,
                        textAlign: "center",
                        display: "ALWAYS"
                    }
                }, {
                    iconPath: "/images/icons/marker.png",
                    latitude: t,
                    longitude: e,
                    width: 28,
                    height: 30,
                    callout: {
                        content: r,
                        color: "#666",
                        fontSize: 13,
                        borderRadius: 4,
                        bgColor: "#ffffff",
                        padding: 5,
                        textAlign: "center",
                        display: "ALWAYS"
                    }
                } ];
            },
            showMoreLocal: function() {
                wx.navigateTo({
                    url: "/subPackages/project/pages/peripheralMap?axis=" + this.axis_long + "," + this.axis_lat + "&project_name=" + this.project_name + "&project_id=" + this.project_id
                });
            },
            toggle: function(e) {
                this.items[e].is_toggle = !this.items[e].is_toggle;
            },
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.localSearch(e.project_id, e.axis_long + "," + e.axis_lat);

                          case 2:
                            r = t.sent, e.items = r.data;
                            for (n in e.items) e.items[n].is_toggle = !0;
                            e.$apply();

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, i = r, _possibleConstructorReturn(n, i);
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
                        return this.axis = t.axis, r = this.axis.split(","), this.axis_long = this.show_long = r[0] || "", 
                        this.axis_lat = this.show_lat = r[1] || "", this.project_id = t.project_id, this.project_name = decodeURIComponent(t.project_name), 
                        this.markers = [ {
                            iconPath: "/images/icons/marker.png",
                            id: 0,
                            latitude: this.axis_lat,
                            longitude: this.axis_long,
                            width: 28,
                            height: 30,
                            callout: {
                                content: this.project_name,
                                color: "#666",
                                fontSize: 13,
                                borderRadius: 4,
                                bgColor: "#ffffff",
                                padding: 5,
                                textAlign: "center",
                                display: "ALWAYS"
                            }
                        } ], e.next = 9, this.methods.reload.call(this);

                      case 9:
                        this.$apply();

                      case 10:
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
            var e = "快来看【" + this.project_name + "】的周边配套设施", t = "/pages/lotteryDetail?id=&project_id=" + this.project_id + "&redirect=" + encodeURIComponent(utils.getCurrentPageUrlWithArgs());
            return _index.share.share(e, t);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/peripheral"));