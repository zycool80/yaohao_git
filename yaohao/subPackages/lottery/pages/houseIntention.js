var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, i) {
            function a(n, r) {
                try {
                    var s = t[n](r), o = s.value;
                } catch (e) {
                    return void i(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(o);
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
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, i, a) {
        return i && e(t.prototype, i), a && e(t, a), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _sliding = require("./../../../components/sliding.js"), _sliding2 = _interopRequireDefault(_sliding), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, i, a, n;
        _classCallCheck(this, t);
        for (var r = arguments.length, s = Array(r), o = 0; o < r; o++) s[o] = arguments[o];
        return i = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        a.config = {
            navigationBarTitleText: "购房意向",
            enablePullDownRefresh: !0
        }, a.data = {
            usPrice: "不限",
            areaList: [],
            hsType: [],
            sourceType: [],
            house_type: [],
            area: [],
            peculiarity: [],
            city_id: 510100,
            minValue: 0,
            maxValue: 2e4,
            min: 0,
            max: 2e4,
            low: 0,
            heigh: 2e4,
            minValue2: 0,
            maxValue2: 200,
            min2: 0,
            max2: 200,
            low2: 0,
            heigh2: 200,
            housePrise: "",
            houseSare: "",
            component_type: !1,
            saveData: ""
        }, a.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, a.$repeat = {}, a.$props = {
            BackHome: {
                "xmlns:wx": ""
            },
            Slider: {
                "xmlns:v-bind": "",
                "v-bind:minValue.sync": "minValue",
                "v-bind:maxValue.sync": "maxValue",
                "v-bind:min.sync": "min",
                "v-bind:max.sync": "max",
                "xmlns:v-on": "",
                blockColor: "#0099FF",
                backgroundColor: "#e6e6e6",
                selectedColor: "#eb734e"
            },
            Sliders: {
                "v-bind:minValue.sync": "minValue2",
                "v-bind:maxValue.sync": "maxValue2",
                "v-bind:min.sync": "min2",
                "v-bind:max.sync": "max2",
                blockColor: "#0099FF",
                backgroundColor: "#f2f2f2",
                selectedColor: "#eb734e"
            }
        }, a.$events = {
            Slider: {
                "v-on:lowValueChange": "lowValueChangeAction",
                "v-on:heighValueChange": "heighValueChangeAction"
            },
            Sliders: {
                "v-on:lowValueChange": "lowValueChangeAction1",
                "v-on:heighValueChange": "heighValueChangeAction1"
            }
        }, a.components = {
            BackHome: _BackHome2.default,
            Slider: _sliding2.default,
            Sliders: _sliding2.default
        }, a.methods = {
            generations: function(e) {
                var t = this;
                e || (this.area.length = 0, this.component_type = !0, this.areaList.forEach(function(e) {
                    e.type = !1, t.area.push(e.area_id);
                }));
            },
            submit_list: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var i;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.housePrise = e.low + "-" + e.heigh, e.houseSare = e.low2 + "-" + e.heigh2, 
                            e.house_type[0] || e.house_type.splice(0, 1), e.area[0] || e.area.splice(0, 1), 
                            e.peculiarity[0] || e.peculiarity.splice(0, 1), t.next = 7, _api2.default.addAreaList(e.housePrise, e.house_type.toString(), e.houseSare, e.area.toString(), e.peculiarity.toString());

                          case 7:
                            i = t.sent, 0 == i.code ? (wx.showToast({
                                title: "提交成功",
                                duration: 1e3
                            }), setTimeout(function() {
                                wx.navigateBack();
                            }, 1e3)) : wx.showToast({
                                title: "提交失败",
                                duration: 2e3,
                                iocn: "none"
                            });

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            lowValueChangeAction: function(e) {
                this.low = 100 * Math.floor(e.lowValue / 100), this.$apply();
            },
            heighValueChangeAction: function(e) {
                this.heigh = 100 * Math.ceil(e.heighValue / 100), this.$apply();
            },
            lowValueChangeAction1: function(e) {
                this.low2 = e.lowValue, this.$apply();
            },
            heighValueChangeAction1: function(e) {
                this.heigh2 = e.heighValue, this.$apply();
            },
            selectHouse: function(e, t) {
                if (t.type) {
                    for (var i = 0; i < this.house_type.length; i++) t.house_id == this.house_type[i] && this.house_type.splice(i, 1);
                    this.hsType[e].type = !t.type;
                } else this.hsType[e].type = !t.type, this.house_type.push(t.house_id);
                this.$apply();
            },
            selectLocal: function(e, t) {
                if (this.component_type) {
                    if (this.area.length = 0, this.component_type = !1, t.type) {
                        for (var i = 0; i < this.area.length; i++) t.area_id == this.area[i] && this.area.splice(i, 1);
                        this.areaList[e].type = !t.type;
                    } else this.areaList[e].type = !t.type, this.area.push(t.area_id);
                    this.$apply();
                } else {
                    if (t.type) {
                        for (var a = 0; a < this.area.length; a++) t.area_id == this.area[a] && this.area.splice(a, 1);
                        this.areaList[e].type = !t.type;
                    } else this.areaList[e].type = !t.type, this.area.push(t.area_id);
                    this.$apply();
                }
            },
            selectSource: function(e, t) {
                if (t.type) {
                    for (var i = 0; i < this.peculiarity.length; i++) t.air_id == this.peculiarity[i] && this.peculiarity.splice(i, 1);
                    this.sourceType[e].type = !t.type;
                } else this.sourceType[e].type = !t.type, this.peculiarity.push(t.air_id);
            }
        }, n = i, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getAreaList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, i, a, n, r, s, o, h, u, l, p, c, y, f, d, g, m, _;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.areaList();

                      case 2:
                        t = e.sent, this.min = t.data.budget.min, this.max = t.data.budget.max, this.min2 = t.data.acreage.min, 
                        this.max2 = t.data.acreage.max, i = t.data.peculiarity, a = t.data.house_type, n = t.data.area, 
                        this.$apply(), t.data.item.budget ? (r = t.data.item.budget.split("-"), this.low = 100 * Math.floor(parseInt(r[0]) / 100), 
                        this.heigh = 100 * Math.ceil(parseInt(r[1]) / 100), this.minValue = parseInt(r[0]), 
                        this.maxValue = parseInt(r[1]), this.$apply()) : (this.low = 0, this.heigh = 2e4, 
                        this.minValue = 0, this.maxValue = 2e4, this.$apply()), t.data.item.acreage ? (s = t.data.item.acreage.split("-"), 
                        this.low2 = parseInt(s[0]), this.heigh2 = parseInt(s[1]), this.minValue2 = parseInt(s[0]), 
                        this.maxValue2 = parseInt(s[1]), this.$apply()) : (this.low2 = 0, this.heigh2 = 200, 
                        this.minValue2 = 0, this.maxValue2 = 200, this.$apply());
                        for (o in n) this.areaList.push({
                            area_id: o,
                            area_name: n[o],
                            type: !1
                        });
                        for (h in a) this.hsType.push({
                            house_id: h,
                            house_name: a[h],
                            type: !1
                        });
                        for (u in i) this.sourceType.push({
                            air_id: u,
                            air_name: i[u],
                            type: !1
                        });
                        if (this.$apply(), l = t.data.item.area.split(","), p = t.data.item.house_type.split(","), 
                        c = t.data.item.peculiarity.split(","), this.house_type = p, this.area = l, this.peculiarity = c, 
                        this.$apply(), this.areaList.length == l.length) this.component_type = !0; else for (y = 0; y < this.areaList.length; y++) for (f = 0; f < l.length; f++) this.areaList[y].area_id == l[f] && (this.areaList[y].type = !0, 
                        this.$apply());
                        for (d = 0; d < this.hsType.length; d++) for (g = 0; g < p.length; g++) this.hsType[d].house_id == p[g] && (this.hsType[d].type = !0, 
                        this.$apply());
                        for (m = 0; m < this.sourceType.length; m++) for (_ = 0; _ < c.length; _++) this.sourceType[m].air_id == c[_] && (this.sourceType[m].type = !0, 
                        this.$apply());

                      case 27:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        wx.showLoading({
                            title: "加载中"
                        }), this.getAreaList(), wx.hideLoading();

                      case 3:
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
            return _index.share.share("填写购房意向，精准匹配优质好房");
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {
            this.areaList = [], this.hsType = [], this.sourceType = [], wx.showLoading({
                title: "加载中"
            }), this.getAreaList(), wx.hideLoading(), wx.stopPullDownRefresh();
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/houseIntention"));