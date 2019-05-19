var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    return t.default = e, t;
}

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
    return Array.from(e);
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, i) {
                try {
                    var s = t[n](i), o = s.value;
                } catch (e) {
                    return void a(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(o);
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

function getIntRandom(e) {
    return Math.floor(Math.random() * e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var r = t[a];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, a, r) {
        return a && e(t.prototype, a), r && e(t, r), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _wxCanvas = require("./echarts/wx-canvas.js"), _wxCanvas2 = _interopRequireDefault(_wxCanvas), _echarts = require("./echarts/echarts.js"), echarts = _interopRequireWildcard(_echarts), _index = require("./../../../utils/utilsKit/index.js"), _Pie = require("./Pie.js"), _Pie2 = _interopRequireDefault(_Pie), _TipEvent = require("./../../../utils/TipEvent.js"), _TipEvent2 = _interopRequireDefault(_TipEvent), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, a, r, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
        return a = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationBarTitleText: "房产数据",
            navigationBarBackgroundColor: "#3772cc",
            enablePullDownRefresh: !0
        }, r.data = {
            hideCanvas: !1,
            date: " ",
            area_id: " ",
            areaList: [],
            areaIndex: 0,
            axis: [],
            newTrendData: [],
            ershouTrendData: [],
            duolieIndexs: [],
            lineChart: null,
            toggle: 1,
            istoggle: 1,
            averageList: [],
            tabIndex: 0,
            rankRiseFailData: [],
            trendRiseFailData: [],
            TrendData1: [],
            TrendData2: [],
            preciateIndex: 0,
            preciateListIndex: 0,
            preciate: [ {
                name: "降价排行"
            }, {
                name: "涨价排行"
            } ],
            depreciateList: [ {
                name: "今日降价"
            } ],
            page: 1,
            priceChannel: " ",
            ertshouChannel: " ",
            more: !0,
            type: 1,
            title: "这里有实用的房产预售数据",
            lotterydata: [],
            timeLineData: [],
            houseNumSalesData: [],
            housePriceSalesData: [],
            houseNumSalesList: [],
            housePriceSalesList: [],
            index: 0,
            ershou_data: [],
            day: "",
            simulation2: "",
            new_data: [],
            dataSource: [],
            __scrollFn: null,
            shareContent: null
        }, r.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {},
            Pie: {
                "xmlns:v-bind": "",
                "v-bind:dataSource.sync": "dataSource",
                "v-bind:time.sync": "date"
            }
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default,
            Pie: _Pie2.default
        }, r.methods = {
            save_detail: function(e) {
                wx.setStorageSync("save_detail", e), wx.navigateTo({
                    url: "/subPackages/news/pages/secondaryDetail?id=" + e.secondary_id
                });
            },
            changeTab: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function a() {
                    return regeneratorRuntime.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return t.toggle = e, a.next = 3, t.methods.reload.call(t);

                          case 3:
                            t.$apply();

                          case 4:
                          case "end":
                            return a.stop();
                        }
                    }, a, t);
                }))();
            },
            changeBar: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function a() {
                    return regeneratorRuntime.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            if (t.istoggle = e, 1 != t.istoggle) {
                                a.next = 9;
                                break;
                            }
                            return a.next = 4, t.methods.loadTrendData.call(t);

                          case 4:
                            return a.next = 6, t.businessData("ec-Canvas3", ".ec-Canvas3", "均价（元/平方米）", t.TrendData1);

                          case 6:
                            return a.next = 8, t.businessData("ec-Canvas4", ".ec-Canvas4", "数量", t.TrendData2);

                          case 8:
                            t.$apply();

                          case 9:
                            if (2 != t.istoggle) {
                                a.next = 13;
                                break;
                            }
                            return a.next = 12, t.methods.reloadrankData.call(t);

                          case 12:
                            t.$apply();

                          case 13:
                          case "end":
                            return a.stop();
                        }
                    }, a, t);
                }))();
            },
            reloadrankData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.page = 1, e.preciateIndex = 0, e.preciateListIndex = 0, e.rankRiseFailData = [], 
                            t.next = 6, e.methods.loadTabData.call(e);

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            tabIndex: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function a() {
                    return regeneratorRuntime.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return t.preciateIndex = e.detail.value, 0 == t.preciateIndex && (t.depreciateList = [ {
                                name: "今日降价"
                            } ]), 1 == t.preciateIndex && (t.depreciateList = [ {
                                name: "今日涨价"
                            } ]), t.page = 1, t.rankRiseFailData = [], a.next = 7, t.methods.loadTabData.call(t);

                          case 7:
                            t.$apply();

                          case 8:
                          case "end":
                            return a.stop();
                        }
                    }, a, t);
                }))();
            },
            tabListIndex: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function a() {
                    return regeneratorRuntime.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return t.page = 1, t.preciateListIndex = e.detail.value, t.rankRiseFailData = [], 
                            t.$apply(), a.next = 6, t.methods.loadTabData.call(t);

                          case 6:
                          case "end":
                            return a.stop();
                        }
                    }, a, t);
                }))();
            },
            loadTrendData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getSecondaryTrade();

                          case 2:
                            a = t.sent, e.trendRiseFailData = a.data.data;

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            loadTabData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getsecondaryList(e.preciateIndex, e.preciateListIndex, e.page);

                          case 2:
                            a = t.sent, e.page >= a.data.last_page || !a.data.last_page ? e.more = !1 : e.page++, 
                            e.rankRiseFailData = e.rankRiseFailData.concat(a.data.data), e.$apply();

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            chooseDate: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function a() {
                    var r;
                    return regeneratorRuntime.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return t.date = e.detail.value, r = e.detail.value.split("-"), t.simulation2 = r[0] + "年" + r[1] + "月", 
                            a.next = 5, t.methods.loadNext.call(t);

                          case 5:
                            _TipEvent2.default.emit("reloadDataEvent");

                          case 6:
                          case "end":
                            return a.stop();
                        }
                    }, a, t);
                }))();
            },
            getArea: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function a() {
                    var r, n;
                    return regeneratorRuntime.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return t.axis = [], t.areaIndex = parseInt(e.detail.value), t.area_id = t.areaList[t.areaIndex].id, 
                            a.next = 5, _api2.default.getTransactionlotteryTimeLine(t.date, t.area_id);

                          case 5:
                            r = a.sent;
                            for (n in r.data) t.axis.push({
                                id: n,
                                data: r.data[n]
                            });
                            t.$apply();

                          case 8:
                          case "end":
                            return a.stop();
                        }
                    }, a, t);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var a, r, n, i, s, o, u, c, l, p, d, h, f, g, m, v, x, y, _, w, b, k, D, R, T, C;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (1 != e.toggle) {
                                t.next = 23;
                                break;
                            }
                            return a = [], t.next = 4, _api2.default.areaList();

                          case 4:
                            r = t.sent;
                            for (n in r.data.area) a.push({
                                name: r.data.area[n],
                                id: n
                            });
                            return e.areaList = [ {
                                id: "0",
                                name: "全部区域"
                            } ], e.areaList = [].concat(_toConsumableArray(e.areaList), a), t.next = 11, e.methods.getArea.call(e, {
                                detail: {
                                    value: 0
                                }
                            });

                          case 11:
                            return t.next = 13, _api2.default.getTransactionLotteryData(e.date);

                          case 13:
                            return i = t.sent, e.lotterydata = i.data, e.dataSource = [], t.next = 18, _api2.default.getTransactionhotAreaLottery(e.date);

                          case 18:
                            s = t.sent, o = s.data;
                            for (u in o) c = parseInt(u) + 1, l = o[u].value.replace("%", ""), p = 100 * parseInt(l), 
                            e.dataSource.push({
                                value: o[u].name + " " + o[u].value,
                                count: p,
                                name: o[u].name,
                                color: o[u].color,
                                key: c,
                                area_id: o[u].area_id
                            });
                            e.$apply(), _TipEvent2.default.emit("reloadDataEvent");

                          case 23:
                            if (2 != e.toggle) {
                                t.next = 51;
                                break;
                            }
                            return t.next = 26, _api2.default.getTransactionTradingTrend();

                          case 26:
                            d = t.sent, h = [];
                            for (f in d.data) h.push({
                                id: f,
                                data: d.data[f]
                            });
                            return g = h[1].data, m = h[0].data, t.next = 33, e.changeDada(g);

                          case 33:
                            return e.newTrendData = t.sent, t.next = 36, e.changeDada(m);

                          case 36:
                            return e.ershouTrendData = t.sent, t.next = 39, e.businessData("ec-Canvas", ".ec-Canvas", "套数", e.newTrendData);

                          case 39:
                            return t.next = 41, e.businessData("ec-Canvas2", ".ec-Canvas2", "套数", e.ershouTrendData);

                          case 41:
                            return e.$apply(), t.next = 44, _api2.default.getTransaction();

                          case 44:
                            v = t.sent, e.day = v.data.day, x = JSON.parse(v.data.ershou_data);
                            for (y in x) e.ershou_data.push(x[y]);
                            _ = JSON.parse(v.data.new_data);
                            for (w in _) e.new_data.push(_[w]);
                            e.$apply();

                          case 51:
                            if (3 != e.toggle) {
                                t.next = 76;
                                break;
                            }
                            return t.next = 54, _api2.default.getSecondaryTrade();

                          case 54:
                            b = t.sent, k = [];
                            for (D in b.data) k.push({
                                id: D,
                                data: b.data[D]
                            });
                            return R = k[1].data, T = k[0].data, e.priceChannel = R.channel, e.ertshouChannel = R.channel, 
                            t.next = 63, e.changeDada2(R);

                          case 63:
                            return e.TrendData1 = t.sent, t.next = 66, e.changeDada2(T);

                          case 66:
                            return e.TrendData2 = t.sent, t.next = 69, e.businessData("ec-Canvas3", ".ec-Canvas3", "均价（元/平方米）", e.TrendData1);

                          case 69:
                            return t.next = 71, e.businessData("ec-Canvas4", ".ec-Canvas4", "数量", e.TrendData2);

                          case 71:
                            return t.next = 73, _api2.default.notLotteryAreaMaster();

                          case 73:
                            C = t.sent, e.averageList = C.data, e.$apply();

                          case 76:
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
                                title: "加载中...",
                                mask: !0
                            }), t.next = 3, e.concatDate();

                          case 3:
                            return e.axis = [], e.page = [], e.areaList = [ {
                                id: "0",
                                name: "全部区域"
                            } ], e.methods.loadNext.call(e), t.next = 9, e.methods.tabIndex.call(e, {
                                detail: {
                                    value: 0
                                }
                            });

                          case 9:
                            return t.next = 11, e.methods.reloadrankData.call(e);

                          case 11:
                            wx.stopPullDownRefresh(), e.$apply(), wx.hideLoading();

                          case 14:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, n = a, _possibleConstructorReturn(r, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var a, r, n, i = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t.type && (this.toggle = t.type), t.type2 && (this.istoggle = t.type2), e.next = 4, 
                        this.concatDate();

                      case 4:
                        return e.next = 6, this.methods.reload.call(this);

                      case 6:
                        return e.next = 8, this.needHideCanvasHeight();

                      case 8:
                        return a = e.sent, this.__scrollFn = this.pageScrollLevelFn(function(e) {
                            var t = e.scrollTop;
                            i.hideCanvas = a > 0 && a - 20 < t, i.$apply();
                        }, 100), r = {
                            page_name: "/subPackages/project/pages/propertyData"
                        }, e.next = 13, _api2.default.getShareInfo(r);

                      case 13:
                        if (!(n = e.sent) || !n.data || 0 != n.data.length) {
                            e.next = 16;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 16:
                        this.shareContent = n.data, this.$apply();

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "needHideCanvasHeight",
        value: function() {
            var e = this;
            return new Promise(function(t) {
                var a = wx.createSelectorQuery();
                switch (parseInt(e.toggle)) {
                  case 1:
                    a.select(".echarts-top").boundingClientRect().exec(function(e) {
                        t(e && e[0] ? e[0].top || 0 : 0);
                    });
                    break;

                  case 2:
                  case 3:
                    a.select(".price_echarts-form").boundingClientRect().exec(function(e) {
                        t(e && e[0] ? e[0].top || 0 : 0);
                    });
                }
            });
        }
    }, {
        key: "onPageScroll",
        value: function(e) {
            this.__scrollFn && this.__scrollFn(e);
        }
    }, {
        key: "pageScrollLevelFn",
        value: function(e, t) {
            var a = void 0, r = this;
            return function() {
                var n = arguments;
                a || (a = setTimeout(function() {
                    a = null, e.apply(r, n);
                }, t));
            };
        }
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
            var e = "";
            e = 1 == this.toggle ? this.shareContent.title["tabBar1:"][0] : 2 == this.toggle ? this.shareContent.title["tabBar2:"][0] : this.shareContent.title["tabBar3:"][0];
            var t = this.shareContent.image || "", a = this.shareContent.url || "";
            if (a) {
                var r = a.match(/(\$[A-z0-9]+)/g);
                for (var n in r) {
                    var i = r[n];
                    i = i.replace("$", ""), a = a.replace("$" + i, this[i]);
                }
            }
            return _index.share.share(e, a, t);
        }
    }, {
        key: "changeDada2",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var a, r, n, i, s, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        a = {}, r = [], n = [], i = [], e.t0 = regeneratorRuntime.keys(t);

                      case 5:
                        if ((e.t1 = e.t0()).done) {
                            e.next = 22;
                            break;
                        }
                        s = e.t1.value, o = "", e.t2 = String(s), e.next = "houseAmount" === e.t2 ? 11 : "showAmount" === e.t2 ? 13 : "listPrice" === e.t2 ? 15 : "dealPrice" === e.t2 ? 17 : 19;
                        break;

                      case 11:
                        return o = "新增房源量", e.abrupt("break", 19);

                      case 13:
                        return o = "带看量", e.abrupt("break", 19);

                      case 15:
                        return o = "挂牌均价", e.abrupt("break", 19);

                      case 17:
                        return o = "参考均价", e.abrupt("break", 19);

                      case 19:
                        o && r.push({
                            data: t[s],
                            name: o
                        }), e.next = 5;
                        break;

                      case 22:
                        return r.forEach(function(e) {
                            n.push(e), i.push(e.name);
                        }), a.yAxis = n, a.xAxis = i, a.timeLine = t.month, e.abrupt("return", a);

                      case 27:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "changeDada",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var a, r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return a = {}, r = [], n = [], e.next = 5, t.forEach(function(e) {
                            r.push(e), n.push(e.name);
                        });

                      case 5:
                        return a.yAxis = r, a.timeLine = t[0].timeLine, a.xAxis = n, e.abrupt("return", a);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "concatDate",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t = new Date(), a = t.getFullYear(), r = t.getMonth() + 1, r < 10 && (r = "0" + r), 
                        this.date = a + "-" + r, this.simulation2 = a + "年" + r + "月", this.$apply();

                      case 7:
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
            function e(e, a, r, n) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r, n) {
                var i, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return i = {
                            option: {
                                tooltip: {
                                    trigger: "axis"
                                },
                                legend: null,
                                series: []
                            }
                        }, s = [], i.option.legend = {
                            itemWidth: 10,
                            itemHeight: 10,
                            bottom: 10,
                            icon: "circle",
                            left: "center",
                            data: n.xAxis
                        }, i.option.grid = {
                            left: "3%",
                            right: "4%",
                            bottom: 40,
                            containLabel: !0
                        }, i.option.xAxis = {
                            type: "category",
                            boundaryGap: !1,
                            data: n.timeLine
                        }, i.option.yAxis = {
                            type: "value",
                            name: r
                        }, e.next = 7, n.yAxis.forEach(function(e) {
                            s.push({
                                name: e.name,
                                type: "line",
                                data: e.data
                            });
                        });

                      case 7:
                        return i.option.series = s, this.$apply(), e.next = 11, this.initECharts(t, a, i.option);

                      case 11:
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
            function e(e, a, r) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a, r) {
                var n, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = wx.createCanvasContext(t, this), i = new _wxCanvas2.default(n, t), echarts.setCanvasCreator(function() {
                            return i;
                        }), e.next = 4, this.createSelectQuery(i, a, r).catch(function(e) {});

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
        value: function(e, t, a) {
            var r = this;
            return new Promise(function(n, i) {
                wx.createSelectorQuery().select(t).boundingClientRect(function(t) {
                    t && t.width && t.height ? (r.buildECharts(e, t.width, t.height, a), n()) : i();
                }).exec();
            });
        }
    }, {
        key: "buildECharts",
        value: function(e, t, a, r) {
            var n = echarts.init(e, null, {
                width: t,
                height: a
            });
            return e.setChart(n), n.setOption(r), n;
        }
    }, {
        key: "parseTime",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var a, r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return a = new Date(t), r = a.getFullYear(), n = a.getMonth() + 1, n < 10 && (n = "0" + n), 
                        e.abrupt("return", r + "-" + n);

                      case 5:
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
                        return e.next = 4, this.methods.loadTabData.call(this);

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
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/propertyData"));