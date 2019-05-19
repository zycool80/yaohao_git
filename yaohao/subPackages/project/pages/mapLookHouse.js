var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, o) {
                try {
                    var i = t[a](o), s = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), _ = _index.underscore, globalModel = require("./../../../models/GlobalModel.js"), __self = void 0, __fn = _.debounce(_asyncToGenerator(regeneratorRuntime.mark(function e() {
    return regeneratorRuntime.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return __self.changeArea ? __self.changeArea = !1 : (__self.areaIndex = 0, __self.area_id = ""), 
            e.next = 3, __self.methods.loadData.call(__self);

          case 3:
            __self.$apply();

          case 4:
          case "end":
            return e.stop();
        }
    }, e, void 0);
})), 400), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "地图找房"
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.components = {
            BackHome: _BackHome2.default
        }, r.data = {
            winHeight: 0,
            keyword: "",
            leftBottomPoint: "",
            rightTopPoint: "",
            mapContext: null,
            markers: [],
            long: 0,
            lat: 0,
            scale: 14,
            fn: null,
            markerType: 1,
            sendScale: 14,
            showHome: !1,
            areaIndex: 0,
            areaList: [ {
                name: "全部区域",
                id: 0
            } ],
            areaNameList: [],
            type: "",
            houseType: [ {
                name: "全部类型",
                value: ""
            }, {
                name: "待售",
                value: 1
            }, {
                name: "即将预售",
                value: 2
            }, {
                name: "在售",
                value: 3
            }, {
                name: "已清盘",
                value: 9
            } ],
            houseTypeName: "全部类型",
            houseTypeList: [ "全部类型", "待售", "即将预售", "在售", "已清盘" ],
            mapHeight: 0,
            authSetting: null,
            loading: !1,
            area_id: "",
            changeArea: !1
        }, r.methods = {
            backHome: function() {
                wx.navigateTo({
                    url: "/pages/index",
                    "open-type": "switchTab"
                });
            },
            __getLocation: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, e.getLocation();

                          case 2:
                            e.long += 1e-10, e.lat += 1e-10, e.$apply();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            showHouseType: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            n = e, wx.showActionSheet({
                                itemList: e.houseTypeList,
                                success: function(e) {
                                    var t = this;
                                    return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                                        var a, o;
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                              case 0:
                                                return a = e.tapIndex, o = n.houseType[a], n.houseTypeName = o.name, n.type = o.value, 
                                                t.next = 5, n.getScale();

                                              case 5:
                                                return n.sendScale = t.sent, t.next = 8, n.methods.loadData.call(n);

                                              case 8:
                                                n.$apply();

                                              case 9:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, r, t);
                                    }))();
                                }
                            });

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            showHouseArea: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a, o, i, s;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (r = e.detail.value, !t.areaList || !t.areaList[r]) {
                                n.next = 17;
                                break;
                            }
                            if (a = t.areaList[r], o = a ? a.id : "", t.changeArea = !0, t.areaIndex = r, !o) {
                                n.next = 12;
                                break;
                            }
                            return n.next = 8, _api2.default.areaAxis(o);

                          case 8:
                            i = n.sent, i.data && (s = i.data, t.area_id = o, t.long = s.x_axis, t.lat = s.y_axis, 
                            t.scale = 13 + Math.random()), n.next = 17;
                            break;

                          case 12:
                            return n.next = 14, t.getLocation();

                          case 14:
                            t.areaIndex = 0, t.area_id = "", t.scale = 13 + Math.random();

                          case 17:
                            t.$apply();

                          case 18:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            regChange: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            "end" === e.type && t.mapContext && t.mapContext.getRegion({
                                success: function() {
                                    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                return t.leftBottomPoint = n.southwest.longitude + "," + n.southwest.latitude, t.rightTopPoint = n.northeast.longitude + "," + n.northeast.latitude, 
                                                e.next = 4, t.getScale();

                                              case 4:
                                                t.sendScale = e.sent, __fn();

                                              case 6:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e, t);
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                }()
                            }), t.$apply();

                          case 2:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            loadData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r, a, o, i, s, u, c, l, p, f;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.mapLookHouse(e.leftBottomPoint, e.rightTopPoint, e.sendScale, e.type, e.area_id);

                          case 2:
                            n = t.sent, e.markerType = e.sendScale < 12 ? 2 : 1, r = [], a = 0, o = !0, i = !1, 
                            s = void 0, t.prev = 9, u = n.data[Symbol.iterator]();

                          case 11:
                            if (o = (c = u.next()).done) {
                                t.next = 35;
                                break;
                            }
                            if (l = c.value, 2 != l.type) {
                                t.next = 18;
                                break;
                            }
                            r.push({
                                id: a,
                                iconPath: "/images/empty.png",
                                longitude: l.x_axis,
                                latitude: l.y_axis,
                                callout: {
                                    content: l.name + "\n" + l.num + "套",
                                    fontSize: 14,
                                    bgColor: "#1365e1",
                                    color: "#ffffff",
                                    padding: 4,
                                    borderRadius: 3,
                                    display: "ALWAYS",
                                    textAlign: "center"
                                },
                                width: 1,
                                height: 1
                            }), a++, t.next = 32;
                            break;

                          case 18:
                            p = l.avg_price && 0 != l.avg_price ? "\n￥" + l.avg_price : "", f = "#1365e1", t.t0 = l.status, 
                            t.next = 1 === t.t0 ? 23 : 2 === t.t0 ? 25 : 3 === t.t0 ? 27 : 9 === t.t0 ? 29 : 31;
                            break;

                          case 23:
                            return f = "#16a4ae", t.abrupt("break", 31);

                          case 25:
                            return f = "#ee557d", t.abrupt("break", 31);

                          case 27:
                            return f = "#df8534", t.abrupt("break", 31);

                          case 29:
                            return f = "#777", t.abrupt("break", 31);

                          case 31:
                            r.push({
                                id: encodeURIComponent(l.url),
                                iconPath: "/images/empty.png",
                                longitude: l.x_axis,
                                latitude: l.y_axis,
                                callout: {
                                    content: "" + l.name + p,
                                    fontSize: 12,
                                    bgColor: f,
                                    color: "#ffffff",
                                    padding: 4,
                                    borderRadius: 3,
                                    display: "ALWAYS",
                                    textAlign: "center"
                                },
                                width: 1,
                                height: 1
                            });

                          case 32:
                            o = !0, t.next = 11;
                            break;

                          case 35:
                            t.next = 41;
                            break;

                          case 37:
                            t.prev = 37, t.t1 = t.catch(9), i = !0, s = t.t1;

                          case 41:
                            t.prev = 41, t.prev = 42, !o && u.return && u.return();

                          case 44:
                            if (t.prev = 44, !i) {
                                t.next = 47;
                                break;
                            }
                            throw s;

                          case 47:
                            return t.finish(44);

                          case 48:
                            return t.finish(41);

                          case 49:
                            e.markers = r, e.$apply();

                          case 51:
                          case "end":
                            return t.stop();
                        }
                    }, t, e, [ [ 9, 37, 41, 49 ], [ 42, , 44, 48 ] ]);
                }))();
            },
            calloutTap: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (r = e.markerId, 2 !== t.markerType) {
                                n.next = 13;
                                break;
                            }
                            return n.next = 4, t.getScale();

                          case 4:
                            a = n.sent, t.scale = a > 14 ? a : a + 2.5, t.sendScale = 13, t.long = t.markers[r].longitude, 
                            t.lat = t.markers[r].latitude, t.mapContext.moveToLocation(), t.$apply(), n.next = 14;
                            break;

                          case 13:
                            wx.navigateTo({
                                url: decodeURIComponent(r)
                            });

                          case 14:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, a, o = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return __self = this, e.next = 3, globalModel.getGlobalConfig();

                      case 3:
                        return t = e.sent, n = t.city_info, r = wx.getSystemInfoSync(), this.winHeight = r.windowHeight, 
                        this.mapHeight = this.winHeight - 40, wx.showLoading({
                            title: "加载中"
                        }), this.loading = !1, e.next = 12, this.isOpenLocation();

                      case 12:
                        if (!(a = e.sent)) {
                            e.next = 18;
                            break;
                        }
                        return e.next = 16, this.getLocation();

                      case 16:
                        e.next = 20;
                        break;

                      case 18:
                        this.long = n.x_axis, this.lat = n.y_axis;

                      case 20:
                        this.loading = !0, wx.hideLoading(), this.$apply(), wx.nextTick(_asyncToGenerator(regeneratorRuntime.mark(function e() {
                            var t, n, r;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, _api2.default.areaList();

                                  case 2:
                                    if (t = e.sent, n = [], t && t.data) {
                                        for (r in t.data.area) n.push({
                                            name: t.data.area[r],
                                            id: r
                                        });
                                        o.areaList = o.areaList.concat(n);
                                    }
                                    o.mapContext = wx.createMapContext("map"), o.mapContext.getRegion({
                                        success: function() {
                                            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                        return o.leftBottomPoint = t.southwest.longitude + "," + t.southwest.latitude, o.rightTopPoint = t.northeast.longitude + "," + t.northeast.latitude, 
                                                        e.next = 4, o.getScale();

                                                      case 4:
                                                        return o.sendScale = e.sent, e.next = 7, o.methods.loadData.call(o);

                                                      case 7:
                                                        o.$apply();

                                                      case 8:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e, o);
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments);
                                            };
                                        }()
                                    });

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, o);
                        })));

                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "isOpenLocation",
        value: function() {
            return new Promise(function(e) {
                if (!wx.getSetting) return e(!1);
                wx.getSetting({
                    success: function(t) {
                        e(!0);
                    },
                    fail: function() {
                        e(!1);
                    }
                });
            });
        }
    }, {
        key: "getLocation",
        value: function() {
            var e = this;
            return new Promise(function(t, n) {
                wx.getLocation({
                    type: "gcj02",
                    success: function(n) {
                        e.long = n.longitude, e.lat = n.latitude, t();
                    }
                });
            });
        }
    }, {
        key: "getScale",
        value: function() {
            var e = this;
            return new Promise(function(t, n) {
                e.mapContext.getScale({
                    success: function(e) {
                        t(e.scale);
                    }
                });
            });
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            return _index.share.share("地图找房【摇号助手】");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/mapLookHouse"));