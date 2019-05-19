var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function a(i, s) {
                try {
                    var r = t[i](s), o = r.value;
                } catch (e) {
                    return void n(e);
                }
                if (!r.done) return Promise.resolve(o).then(function(e) {
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
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _index = require("./../../../utils/utilsKit/index.js"), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, n, a, i;
        _classCallCheck(this, t);
        for (var s = arguments.length, r = Array(s), o = 0; o < s; o++) r[o] = arguments[o];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(r))), 
        a.config = {
            navigationBarTitleText: "估价详情"
        }, a.data = {
            arr_value: [ 0, 0, 0 ],
            opt_type: !1,
            simulation: [ {
                name: "满五唯一",
                id: "is_sales_tax,is_sole"
            }, {
                name: "唯一不满五",
                id: "is_sale_tax"
            } ],
            simulation_fang: [ {
                name: "东",
                id: "east"
            }, {
                name: "南",
                id: "south"
            }, {
                name: "西",
                id: "west"
            }, {
                name: "北",
                id: "north"
            }, {
                name: "东北",
                id: "northeast"
            }, {
                name: "东南",
                id: "southeast"
            }, {
                name: "西北",
                id: "northwest"
            }, {
                name: "西南",
                id: "southwest"
            }, {
                name: "东西",
                id: "eastwest"
            }, {
                name: "南北",
                id: "southnorth"
            } ],
            simulation2: [ [ "1室", "2室", "3室", "4室", "5室", "6室", "7室", "8室", "9室" ], [ "1厅", "2厅", "3厅", "4厅", "5厅", "6厅", "7厅", "8厅", "9厅" ], [ "1卫", "2卫", "3卫", "4卫", "5卫", "6卫", "7卫", "8卫", "9卫" ] ],
            simulation3: [ {
                name: "近地铁",
                type: !1
            }, {
                name: "满五年",
                type: !1
            }, {
                name: "随意看",
                type: !1
            } ],
            opt_list: [],
            community_name: "长江向东流",
            building_name: "",
            index: 0,
            value: "",
            index2: 0,
            index3: 0,
            value3: "",
            value_fang: "",
            first_value: "",
            second_value: "",
            thread_value: "",
            house: "",
            area: "",
            get_layers: "",
            all_layers: "",
            community_id: "",
            year_list: [],
            fangxiang: [],
            value_fang2: "",
            manwuweiyi: [],
            value33: "",
            shi: "",
            ting: "",
            wei: ""
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
            reset_all: function() {
                this.index = 0, this.index2 = 0, this.index3 = 0, this.house = "", this.value = "", 
                this.value3 = "", this.area = "", this.get_layers = "", this.all_layers = "", this.opt_list.length = 0, 
                this.simulation3.forEach(function(e) {
                    e.type = !1;
                }), this.arr_value = [ 0, 0, 0 ], this.$apply();
            },
            set_list: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (!(parseInt(e.get_layers) >= parseInt(e.all_layers))) {
                                t.next = 7;
                                break;
                            }
                            return t.next = 3, _api2.default.findValuation(e.community_id, e.area, e.shi, e.ting, e.wei, e.value_fang, e.all_layers, e.get_layers, e.value3, 1);

                          case 3:
                            n = t.sent, 0 == n.code && (wx.setStorageSync("item_details", n.data), wx.navigateTo({
                                url: "/subPackages/lottery/pages/priceResult?title=" + e.community_name + "&house=" + e.shi + "室" + e.ting + "厅" + e.wei + "卫"
                            })), t.next = 8;
                            break;

                          case 7:
                            wx.showToast({
                                title: "总楼层不能小于现住楼层",
                                duration: 1e3,
                                icon: "none"
                            });

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            get_layer: function(e) {
                var t = this, n = e.detail.value;
                (isNaN(n) || parseInt(n) <= 0) && wx.showModal({
                    title: "提示",
                    content: "不能以数字0开头",
                    showCancel: !1,
                    success: function(e) {
                        e.confirm && (t.get_layers = "", t.$apply());
                    }
                }), this.get_layers = n;
            },
            all_layer: function(e) {
                var t = this, n = e.detail.value;
                (isNaN(n) || parseInt(n) <= 0) && wx.showModal({
                    title: "提示",
                    content: "不能以数字0开头",
                    showCancel: !1,
                    success: function(e) {
                        e.confirm && (t.all_layers = "", t.$apply());
                    }
                }), this.all_layers = n;
            },
            opt_item: function(e) {
                var t = this;
                this.opt_list = [], this.simulation3[e].type = !this.simulation3[e].type, this.$apply(), 
                this.simulation3.forEach(function(e) {
                    e.type && t.opt_list.push(e.name);
                });
            },
            get_area: function(e) {
                var t = this, n = e.detail.value;
                (isNaN(n) || parseInt(n) <= 0) && wx.showModal({
                    title: "提示",
                    content: "不能以数字0开头",
                    showCancel: !1,
                    success: function(e) {
                        e.confirm && (t.area = "", t.$apply());
                    }
                }), this.area = n;
            },
            towardHanlde: function(e) {
                this.index = e.detail.value, this.value_fang = this.simulation_fang[this.index].id, 
                this.value_fang2 = this.fangxiang[this.index];
            },
            towardHanlde2: function(e) {
                this.index2 = e.detail.value;
            },
            towardHanlde3: function(e) {
                this.index3 = e.detail.value, this.value3 = this.simulation[this.index3].id, this.value33 = this.manwuweiyi[this.index3];
            },
            columns_hanlde: function(e) {
                this.house = this.simulation2[0][e.detail.value[0]] + " " + this.simulation2[1][e.detail.value[1]] + " " + this.simulation2[2][e.detail.value[2]], 
                this.arr_value = [ e.detail.value[0], e.detail.value[1], e.detail.value[2] ], this.shi = this.simulation2[0][e.detail.value[0]].slice(0, 1), 
                this.ting = this.simulation2[1][e.detail.value[1]].slice(0, 1), this.wei = this.simulation2[2][e.detail.value[2]].slice(0, 1), 
                this.$apply();
            }
        }, i = n, _possibleConstructorReturn(a, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, a, i = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        try {
                            t = wx.getStorageSync("community_name"), t && (this.community_name = t.name, this.community_id = t.id);
                        } catch (e) {}
                        for (wx.removeStorageSync("building_name"), n = new Date().getFullYear(), a = 1960; a <= n; a++) this.year_list.push(a);
                        this.index2 = this.year_list.length - 1, this.simulation_fang.forEach(function(e) {
                            i.fangxiang.push(e.name);
                        }), this.simulation.forEach(function(e) {
                            i.manwuweiyi.push(e.name);
                        });

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        try {
                            t = wx.getStorageSync("community_name"), t && (this.community_name = t.name, this.community_id = t.id), 
                            this.building_name = wx.getStorageSync("building_name");
                        } catch (e) {}

                      case 1:
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
            return _index.share.share("查一查你的房子值多少钱");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/addDetailsPrice"));