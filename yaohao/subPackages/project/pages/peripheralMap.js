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
            function n(a, o) {
                try {
                    var i = t[a](o), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _ = _index.underscore, utils = require("./../../../utils/util.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {}, n.data = {
            type: 1,
            mapContext: null,
            fn: null,
            leftBottomPoint: "",
            rightTopPoint: "",
            long: 0,
            lat: 0,
            markers: [],
            iconType: [ {
                src: "https://imgcdn.huanjutang.com/assert/img/15531326054276647.jpg"
            }, {
                src: "https://imgcdn.huanjutang.com/assert/img/15531326831996364.jpg"
            }, {
                src: "https://imgcdn.huanjutang.com/assert/img/15531326989235881.jpg"
            }, {
                src: "https://imgcdn.huanjutang.com/assert/img/15531327169463252.jpg"
            }, {
                src: "https://imgcdn.huanjutang.com/assert/img/15531327332904496.jpg"
            }, {
                src: "https://imgcdn.huanjutang.com/assert/img/15531390238802643.jpg"
            }, {
                src: "https://imgcdn.huanjutang.com/assert/img/15531390958751955.jpg"
            }, {
                src: "https://imgcdn.huanjutang.com/assert/img/15531390033818893.jpg"
            } ],
            project_name: "",
            project_id: ""
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
            regChange: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            "end" === e.type && t.mapContext.getRegion({
                                success: function(e) {
                                    t.fn(e);
                                }
                            });

                          case 1:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            changeType: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return t.type = e, r.next = 3, t.methods.reloadData.call(t);

                          case 3:
                            t.$apply();

                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            reloadData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n, a, o, i, s, c, u;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.localSearch(e.project_id, e.long + "," + e.lat, e.rightTopPoint, e.leftBottomPoint, e.type);

                          case 2:
                            if (r = t.sent, n = [ {
                                iconPath: "/images/icons/marker.png",
                                longitude: e.long,
                                latitude: e.lat,
                                id: e.project_id,
                                zIndex: -1,
                                callout: {
                                    content: "" + e.project_name,
                                    fontSize: 14,
                                    bgColor: "#999999",
                                    color: "#ffffff",
                                    padding: 4,
                                    borderRadius: 3,
                                    display: "BYCLICK",
                                    textAlign: "center"
                                },
                                width: 28,
                                height: 30
                            } ], r.data) {
                                t.next = 6;
                                break;
                            }
                            return t.abrupt("return", !1);

                          case 6:
                            for (a = !0, o = !1, i = void 0, t.prev = 9, s = r.data[Symbol.iterator](); !(a = (c = s.next()).done); a = !0) u = c.value, 
                            n.push({
                                id: u.id,
                                zIndex: -1,
                                iconPath: e.iconType[parseInt(e.type) - 1].src,
                                longitude: u.long,
                                latitude: u.lat,
                                width: 28,
                                height: 30,
                                callout: {
                                    content: "" + u.title,
                                    fontSize: 14,
                                    bgColor: "#1365e1",
                                    color: "#ffffff",
                                    padding: 4,
                                    borderRadius: 3,
                                    display: "BYCLICK",
                                    textAlign: "center"
                                }
                            });
                            t.next = 17;
                            break;

                          case 13:
                            t.prev = 13, t.t0 = t.catch(9), o = !0, i = t.t0;

                          case 17:
                            t.prev = 17, t.prev = 18, !a && s.return && s.return();

                          case 20:
                            if (t.prev = 20, !o) {
                                t.next = 23;
                                break;
                            }
                            throw i;

                          case 23:
                            return t.finish(20);

                          case 24:
                            return t.finish(17);

                          case 25:
                            e.markers = n, e.$apply();

                          case 27:
                          case "end":
                            return t.stop();
                        }
                    }, t, e, [ [ 9, 13, 17, 25 ], [ 18, , 20, 24 ] ]);
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
                var r, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = t.axis.split(","), this.long = r[0], this.lat = r[1], this.project_name = decodeURIComponent(t.project_name), 
                        this.project_id = t.project_id, this.type = t.type || 1, this.fn = _.debounce(function() {
                            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return n.rightTopPoint = t.northeast.longitude + "," + t.northeast.latitude, n.leftBottomPoint = t.southwest.longitude + "," + t.southwest.latitude, 
                                        e.next = 4, n.methods.reloadData.call(n);

                                      case 4:
                                        n.$apply();

                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, n);
                            }));
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        }(), 400), this.mapContext = wx.createMapContext("localSearchMap"), e.next = 10, 
                        this.methods.reloadData.call(this);

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

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/peripheralMap"));