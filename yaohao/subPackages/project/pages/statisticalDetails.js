var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, i) {
                try {
                    var o = t[n](i), s = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(s);
            }
            return a("next");
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
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), _wxCanvas = require("./echarts/wx-canvas.js"), _wxCanvas2 = _interopRequireDefault(_wxCanvas), _echarts = require("./echarts/echarts.js"), echarts = _interopRequireWildcard(_echarts), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        a.config = {
            navigationBarTitleText: "实时统计详情"
        }, a.data = {
            ershou_data: [],
            new_data: [],
            project_id: 2855,
            lottery_id: 1527,
            buildingData: {},
            buildingDataName: "",
            pre_order_id: 1551,
            created_at: "",
            predictDtae: [],
            predicNums: []
        }, a.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, a.$repeat = {}, a.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, a.$events = {}, a.components = {
            BackHome: _BackHome2.default
        }, a.methods = {
            toMap: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            wx.openLocation({
                                latitude: parseFloat(t.buildingData.axis_y),
                                longitude: parseFloat(t.buildingData.axis_x),
                                name: null != t.buildingData.project_location && t.buildingData.project_location ? t.buildingData.project_location : ""
                            });

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a, n, i, o, s, u, c, l, p, h, d, f, _, y, g = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.project_id = t.project_id, this.lottery_id = t.lottery_id, e.next = 4, 
                        _api2.default.getLotteryDetail(this.project_id, this.lottery_id);

                      case 4:
                        return r = e.sent, this.pre_order_id = r.data.pre_order_id, e.next = 8, _api2.default.getPopleNums(this.project_id, 1551);

                      case 8:
                        return a = e.sent, n = a.data.list, n.forEach(function(e) {
                            e.created_at = e.created_at.replace(/-/g, "/");
                        }), n.length < 2 ? (i = new Date(n[0].created_at), o = new Date(parseInt(i.getTime()) - 864e5), 
                        s = o.getFullYear(), u = o.getMonth() + 1 > 10 ? o.getMonth() + 1 : "0" + (o.getMonth() + 1), 
                        c = o.getDay() > 10 ? o.getDay() : "0" + o.getDay(), l = s + "/" + u + "/" + c, 
                        p = new Date(n[0].created_at), h = p.getFullYear(), d = p.getMonth() + 1 > 10 ? p.getMonth() + 1 : "0" + (p.getMonth() + 1), 
                        f = p.getDay() > 10 ? p.getDay() : "0" + p.getDay(), _ = h + "/" + d + "/" + f + " ", 
                        y = 30 * Math.random() + 20, this.predictDtae = [ l, _ ], this.predicNums = [ parseInt(n[0].num - y), n[0].num ], 
                        this.created_at = h + "/" + d + "/" + f + " 18:00") : (n.forEach(function(e) {
                            var t = new Date(e.created_at), r = t.getFullYear(), a = t.getMonth() + 1 > 10 ? t.getMonth() + 1 : "0" + (t.getMonth() + 1), n = t.getDay() > 10 ? t.getDay() : "0" + t.getDay(), i = r + "/" + a + "/" + n + " 18:00";
                            e.created_at = i, g.predictDtae.push(r + "/" + a + "/" + n), g.predicNums.push(e.num);
                        }), this.created_at = n[n.length - 1].created_at), this.buildingData = r.data, this.buildingDataName = r.data.name, 
                        e.next = 16, this.loadNext();

                      case 16:
                        this.$apply();

                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "businessData",
        value: function() {
            function e(e, r, a, n) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a, n) {
                var i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return i = {
                            xAxis: {
                                type: "category",
                                data: this.predictDtae,
                                splitNumber: 1,
                                splitLine: {
                                    show: !0,
                                    lineStyle: {
                                        color: "#e2e2e2"
                                    }
                                }
                            },
                            yAxis: {
                                type: "value",
                                name: a,
                                nameGap: 30,
                                splitNumber: 4,
                                splitLine: {
                                    show: !1
                                },
                                axisTick: {
                                    show: !1
                                },
                                boundaryGap: !1
                            },
                            grid: {
                                left: 0,
                                right: 0,
                                bottom: 0,
                                containLabel: !0
                            },
                            series: [ {
                                data: this.predicNums,
                                type: "line",
                                smooth: !0,
                                symbol: "diamond",
                                symbolSize: 1,
                                label: {
                                    normal: {
                                        show: !0,
                                        color: "#1a1a1a"
                                    }
                                },
                                lineStyle: {
                                    normal: {
                                        width: 2,
                                        shadowColor: "rgba(0,0,0,0.1)",
                                        shadowBlur: 1,
                                        shadowOffsetY: 4,
                                        color: {
                                            type: "linear",
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [ {
                                                offset: 0,
                                                color: "#2bb0a7"
                                            }, {
                                                offset: 1,
                                                color: "#2686ae"
                                            } ],
                                            globalCoord: !1
                                        }
                                    }
                                },
                                areaStyle: {
                                    normal: {
                                        color: {
                                            type: "linear",
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [ {
                                                offset: 0,
                                                color: "#a5ece7"
                                            }, {
                                                offset: 1,
                                                color: "#ffffff"
                                            } ],
                                            globalCoord: !1
                                        }
                                    }
                                }
                            } ]
                        }, this.$apply(), e.next = 4, this.initECharts(t, r, i);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "initECharts",
        value: function() {
            function e(e, r, a) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
                var n, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = wx.createCanvasContext(t, this), i = new _wxCanvas2.default(n, t), echarts.setCanvasCreator(function() {
                            return i;
                        }), e.next = 4, this.createSelectQuery(i, r, a).catch(function(e) {});

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "createSelectQuery",
        value: function(e, t, r) {
            var a = this;
            return new Promise(function(n, i) {
                wx.createSelectorQuery().select(t).boundingClientRect(function(t) {
                    t && t.width && t.height ? (a.buildECharts(e, t.width, t.height, r), n()) : i();
                }).exec();
            });
        }
    }, {
        key: "buildECharts",
        value: function(e, t, r, a) {
            var n = echarts.init(e, null, {
                width: t,
                height: r
            });
            return e.setChart(n), n.setOption(a), n;
        }
    }, {
        key: "changeDada",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = {}, a = [], n = [], e.next = 5, t.forEach(function(e) {
                            a.push(e), n.push(e.name);
                        });

                      case 5:
                        return r.yAxis = a, r.timeLine = t[0].timeLine, r.xAxis = n, e.abrupt("return", r);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "loadNext",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, a, n, i, o, s, u, c, l;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.getTransactionTradingTrend();

                      case 2:
                        t = e.sent, r = [];
                        for (a in t.data) r.push({
                            id: a,
                            data: t.data[a]
                        });
                        return n = r[1].data, i = r[0].data, e.next = 9, this.changeDada(n);

                      case 9:
                        return this.newTrendData = e.sent, e.next = 12, this.changeDada(i);

                      case 12:
                        return this.ershouTrendData = e.sent, e.next = 15, this.businessData("ec-Canvas", ".ec-Canvas", "人数(人)", this.newTrendData);

                      case 15:
                        return this.$apply(), e.next = 18, _api2.default.getTransaction();

                      case 18:
                        o = e.sent, this.day = o.data.day, s = JSON.parse(o.data.ershou_data);
                        for (u in s) this.ershou_data.push(s[u]);
                        c = JSON.parse(o.data.new_data);
                        for (l in c) this.new_data.push(c[l]);
                        this.$apply();

                      case 25:
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
            return _index.share.share(this.buildingDataName + "楼盘的实时统计详情");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/statisticalDetails"));