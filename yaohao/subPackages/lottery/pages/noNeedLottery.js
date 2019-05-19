var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");


function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
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

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _slicedToArray = function() {
    function e(e, t) {
        var a = [], r = !0, n = !1, i = void 0;
        try {
            for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (a.push(s.value), 
            !t || a.length !== t); r = !0) ;
        } catch (e) {
            n = !0, i = e;
        } finally {
            try {
                !r && o.return && o.return();
            } finally {
                if (n) throw i;
            }
        }
        return a;
    }
    return function(t, a) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), _createClass = function() {
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _ = _index.underscore, globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, a, r, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
        return a = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationBarTitleText: "摇号剩余",
            navigationBarBackgroundColor: "#3772cc",
            enablePullDownRefresh: !0
        }, r.data = {
            menuIndex: 0,
            showSelect: !1,
            categoryDatas: [ {
                key: "f_type",
                title: "物业类型",
                toggle_val: "",
                data: [ {
                    key: "住宅",
                    val: "1"
                }, {
                    key: "商业",
                    val: "2"
                }, {
                    key: "别墅",
                    val: "3"
                } ]
            }, {
                key: "f_price_type",
                title: "装修",
                toggle_val: "",
                data: [ {
                    key: "清水",
                    val: "清水"
                }, {
                    key: "精装",
                    val: "精装"
                } ]
            }, {
                key: "f_status",
                title: "售卖情况",
                toggle_val: "",
                data: [ {
                    key: "预售",
                    val: "2"
                }, {
                    key: "在售",
                    val: "1"
                }, {
                    key: "售罄",
                    val: "3"
                } ]
            } ],
            pricesDatas: [ {
                key: "f_price",
                title: "单价",
                toggle_val: "",
                data: []
            } ],
            pricesIndex: 0,
            minPrice: "",
            maxPrice: "",
            areasDatas: [ {
                key: "range_me",
                title: "附近",
                toggle_val: "",
                data: [ {
                    key: "不限",
                    val: "0"
                }, {
                    key: "1公里以内",
                    val: "1"
                }, {
                    key: "2公里以内",
                    val: "2"
                }, {
                    key: "3公里以内",
                    val: "3"
                }, {
                    key: "4公里以内",
                    val: "4"
                }, {
                    key: "5公里以内",
                    val: "5"
                } ]
            } ],
            areasIndex: 0,
            sortDatas: [ {
                key: "默认排序",
                val: ""
            }, {
                key: "价格由高到低",
                val: "desc"
            }, {
                key: "价格由低到高",
                val: "asc"
            } ],
            sortIndex: 0,
            params: {},
            inputVal: "",
            inputPlace: "",
            platform: !0,
            page: 1,
            more: !0,
            projects: [],
            location: ""
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.methods = {
            closeSelect: function() {
                this.showSelect = !1, this.$apply();
            },
            switchMenuHandle: function(e, t) {
                this.showSelect = parseInt(e) !== this.menuIndex || "force" === t, this.menuIndex = parseInt(e), 
                this.$apply();
            },
            resetHandle: function() {
                this.params = {}, this.resetFilterData();
            },
            submitHandle: function() {
                this.showSelect = !1, this.reload().then();
            },
            clickCateHandle: function(e, t) {
                var a = this.categoryDatas[e];
                a && (a.toggle_val = a.toggle_val === t ? "" : t, this.params[a.key] = a.toggle_val, 
                this.$apply());
            },
            clickPriceTypeHandle: function(e) {
                var t = this;
                this.pricesIndex = e, this.pricesDatas && this.pricesDatas.forEach(function(e) {
                    e.toggle_val = "", t.params[e.key] = "";
                }), this.minPrice = "", this.maxPrice = "", this.$apply();
            },
            clickPriceHandle: function(e, t) {
                var a = this.pricesDatas[e];
                a && (this.minPrice = this.maxPrice = "", a.toggle_val = a.toggle_val === t ? "" : t, 
                this.params[a.key] = a.toggle_val, this.$apply());
            },
            inputPriceHandle: function(e, t) {
                var a = "min" === e ? "minPrice" : "maxPrice", r = this.pricesDatas[this.pricesIndex], n = r.key;
                this[a] = t.detail.value, r.toggle_val = "", this.params[n] = (this.minPrice || "") + "," + (this.maxPrice || ""), 
                this.params[n] = "," === this.params[n] ? "" : this.params[n], this.$apply();
            },
            clickAreaTypeHandle: function(e) {
                var t = this;
                switch (this.areasIndex = e, parseInt(this.areasIndex)) {
                  case 0:
                    this.params.range = 1;
                    break;

                  case 2:
                    this.params.range = 3;
                    break;

                  default:
                    this.params.range = "";
                }
                this.params.coordinate = "", this.resetAreaData(), this.areasDatas.forEach(function(e) {
                    e.toggle_val && (e.toggle_val = "");
                    var a = e.key;
                    t.params[a] = "";
                }), this.areasDatas[2] && this.areasDatas[2].data && this.areasDatas[2].data.forEach(function(e) {
                    e.data.forEach(function(e) {
                        e.is_toggle = !1;
                    });
                }), this.$apply();
            },
            clickNearHandle: function(e) {
                var t = this.areasDatas[this.areasIndex];
                t && t.data && (t.toggle_val = e, this.params[t.key] = e, this.params.coordinate = this.location, 
                this.$apply());
            },
            clickAreaHandle: function(e, t) {
                var a = this.areasDatas[this.areasIndex];
                if (a && a.data[e] && a.data[e].data[t]) {
                    var r = a.key, n = a.data[e], i = n.data[t], s = [];
                    i.is_toggle = !i.is_toggle, "" === i.val && n.data.forEach(function(e) {
                        e.is_toggle = i.is_toggle;
                    }), a.data.forEach(function(e) {
                        e.data.forEach(function(e) {
                            e.is_toggle && "" !== e.val && s.push(e.val);
                        });
                    }), this.params[r] = s.join(",");
                }
            },
            clickLineHandle: function(e, t) {
                var a = this.areasDatas[e];
                this.params.coordinate = "", a && a.data[t] && (a.def_index = t, a.data.forEach(function(e, a) {
                    a !== parseInt(t) && (e.child_index = 0);
                }), a.data.forEach(function(e) {
                    e.data.forEach(function(e) {
                        e.is_toggle = !1;
                    });
                }), this.$apply());
            },
            clickTubeHandle: function(e) {
                var t = e.currentTarget.dataset, a = t.index, r = t.child, n = this.areasDatas[t.parent];
                if (n && n.data[a] && n.data[a].data[r]) {
                    var i = n.data[a].data;
                    i[r].is_toggle = !i[r].is_toggle;
                    var s = i.reduce(function(e, t) {
                        return t.is_toggle && e.push(t.val), e;
                    }, []);
                    this.params.coordinate = s.join("|"), this.$apply();
                }
            },
            sortHandle: function(e, t) {
                this.sortIndex = t, this.params.price_orderBy = e, this.$apply();
            },
            emptyInputVal: function() {
                this.inputVal = "", this.reload().then();
            },
            inputTyping: function(e) {
                this.inputVal = e.detail.value;
            },
            inputSubmit: function() {
                this.params = {}, this.inputVal || (this.inputVal = this.inputPlace.replace(/搜索：/, "")), 
                this.resetFilterData(), this.reload().then();
            }
        }, n = a, _possibleConstructorReturn(r, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中..."
                        }), e.next = 3, globalModel.getGlobalConfig();

                      case 3:
                        return t = e.sent, this.inputPlace = t.searchText, a = wx.getSystemInfoSync(), this.platform = "android" === a.platform.toLowerCase(), 
                        e.next = 9, this.reload();

                      case 9:
                        wx.hideLoading();

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onReady",
        value: function() {
            var e = this;
            wx.getLocation({
                success: function(t) {
                    e.location = t.longitude + "," + t.latitude;
                },
                fail: function(t) {
                    try {
                        globalModel.getGlobalConfig().then(function(t) {
                            e.location = t.city_info.x_axis + "," + t.city_info.y_axis;
                        });
                    } catch (e) {}
                    return !1;
                }
            }), Promise.all([ _api2.default.cityTrain("", ""), _api2.default.filterTag(3), _api2.default.filterTag(1), _api2.default.getFilterAreaList() ]).then(function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : results, a = _slicedToArray(t, 4), r = a[0], n = a[1], i = a[2], s = a[3];
                e.filtersData = {};
                for (var o = [], l = 0; l < n.data.length; l++) {
                    var c = n.data[l];
                    o.push({
                        key: c.name,
                        val: c.name,
                        is_toggle: !1
                    });
                }
                e.categoryDatas = [ {
                    key: "f_type",
                    title: "物业类型",
                    toggle_val: "",
                    data: o
                }, {
                    key: "f_price_type",
                    title: "装修",
                    toggle_val: "",
                    data: [ {
                        key: "清水",
                        val: "清水"
                    }, {
                        key: "精装",
                        val: "精装"
                    } ]
                }, {
                    key: "f_status",
                    title: "售卖情况",
                    toggle_val: "",
                    data: [ {
                        key: "预售",
                        val: "2"
                    }, {
                        key: "在售",
                        val: "1"
                    }, {
                        key: "售罄",
                        val: "3"
                    } ]
                } ];
                for (var u = [], p = 0; p < s.data.length; p++) {
                    for (var h = s.data[p], f = {
                        title: h.name,
                        data: [ {
                            key: "全选",
                            val: "",
                            is_toggle: !1
                        } ]
                    }, d = 0; d < h.area.length; d++) {
                        var y = h.area[d];
                        f.data.push({
                            key: y.area,
                            val: y.areaid,
                            is_toggle: !1
                        });
                    }
                    u.push(f);
                }
                e.filtersData.areasListDatas = u;
                var g = r.data, v = [];
                for (var _ in g) {
                    for (var m = g[_], k = {
                        title: _ + "号线",
                        val: _,
                        key: "train_tow",
                        child_index: 0,
                        data: []
                    }, x = 0; x < m.length; x++) {
                        var w = m[x];
                        k.data.push({
                            title: w.metro_name,
                            val: w.lng + "," + w.lat,
                            is_toggle: !1
                        });
                    }
                    v.push(k);
                }
                e.filtersData.trainListDatas = v;
                for (var D = [ {
                    key: "价格不限",
                    val: ""
                } ], b = 0; b < i.data.length; b++) {
                    var P = i.data[b];
                    D.push({
                        key: P.name,
                        val: P.filter_min + "," + P.filter_max
                    });
                }
                e.pricesDatas = [ {
                    key: "f_price",
                    title: "单价",
                    toggle_val: "",
                    data: D
                } ], e.resetFilterData();
            }).catch(function(e) {});
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
                        return e.next = 2, this.reload();

                      case 2:
                        wx.stopPullDownRefresh();

                      case 3:
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
                        return e.abrupt("return");

                      case 2:
                        return e.next = 4, this.loadNext();

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
        value: function() {
            return _index.share.share("这里有所有的摇号剩余的楼盘，再也不用到处去找啦");
        }
    }, {
        key: "reload",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.page = 1, this.more = !0, this.projects = [], e.next = 5, this.loadNext();

                      case 5:
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
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = _.extend({}, this.params, {
                            page: this.page,
                            keyword: this.inputVal
                        }), e.next = 3, _api2.default.getNoLotterList(t);

                      case 3:
                        a = e.sent, this.page >= a.data.last_page || !a.data.last_page ? this.more = !1 : this.page++, 
                        this.projects = this.projects.concat(a.data.data), this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "resetAreaData",
        value: function() {
            this.areasDatas[1] = {
                key: "area_id",
                title: "区域",
                data: _index.common.deepCopy(this.filtersData.areasListDatas)
            }, this.$apply();
        }
    }, {
        key: "resetFilterData",
        value: function() {
            this.categoryDatas.forEach(function(e) {
                e.toggle_val = "";
            }), this.pricesDatas.forEach(function(e) {
                e.toggle_val = "";
            }), this.areasDatas[0].toggle_val = "", this.areasDatas[1] = {
                key: "area_id",
                title: "区域",
                data: _index.common.deepCopy(this.filtersData.areasListDatas)
            }, this.areasDatas[2] = {
                key: "train",
                title: "地铁",
                def_index: 0,
                data: _index.common.deepCopy(this.filtersData.trainListDatas)
            }, this.sortIndex = 0, this.$apply();
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/noNeedLottery"));