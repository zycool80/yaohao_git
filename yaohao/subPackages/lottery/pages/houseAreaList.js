var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, n) {
            function r(a, s) {
                try {
                    var i = e[a](s), o = i.value;
                } catch (t) {
                    return void n(t);
                }
                if (!i.done) return Promise.resolve(o).then(function(t) {
                    r("next", t);
                }, function(t) {
                    r("throw", t);
                });
                t(o);
            }
            return r("next");
        });
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _index = require("./../../../utils/utilsKit/index.js"), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), Index = function(t) {
    function e() {
        var t, n, r, a;
        _classCallCheck(this, e);
        for (var s = arguments.length, i = Array(s), o = 0; o < s; o++) i[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "二手房区域排行",
            enablePullDownRefresh: !0
        }, r.data = {
            array: [],
            year: [],
            month: [],
            index: [ 0, 4 ],
            index2: "",
            newMonth: "",
            data_list: [],
            cont: 1
        }, r.$repeat = {}, r.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, r.methods = {
            switchMonth: function(t) {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            e.cont = 1, r = [], e.array = t.detail.value.split("-"), a = e.array[0] + "-" + e.array[1], 
                            _api2.default.areaRanking("", a).then(function() {
                                var t = _asyncToGenerator(regeneratorRuntime.mark(function t(n) {
                                    var a, s;
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                          case 0:
                                            a = n.data;
                                            for (s in a) r.push(a[s]);
                                            return r.sort(function(t, e) {
                                                return parseInt(e.listed) - parseInt(t.listed);
                                            }), e.data_list = r, e.data_list.forEach(function(t) {
                                                t.listed = parseInt(t.listed), t.cont = e.cont++;
                                            }), t.next = 7, e.dataListChange();

                                          case 7:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t, e);
                                }));
                                return function(e) {
                                    return t.apply(this, arguments);
                                };
                            }()), e.$apply();

                          case 6:
                          case "end":
                            return n.stop();
                        }
                    }, n, e);
                }))();
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "onPullDownRefresh",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, n, r, a, s, i = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return this.year = [], this.array = [], this.month = [], this.cont = 1, this.data_list.length = 0, 
                        e = new Date(), this.year.push(e.getFullYear()), 0 == parseInt((e.getMonth() + 1) / 10) ? this.newMonth = "0" + (e.getMonth() + 1) : this.newMonth = e.getMonth() + 1, 
                        this.array = [ this.year, this.newMonth ], n = e.getFullYear() + "-" + this.newMonth, 
                        t.next = 12, _api2.default.areaRanking("", n);

                      case 12:
                        r = t.sent, this.data_list = r.data, a = [];
                        for (s in this.data_list) a.push(this.data_list[s]);
                        a.sort(function(t, e) {
                            return parseInt(e.listed) - parseInt(t.listed);
                        }), this.data_list = a, this.data_list.forEach(function(t) {
                            t.listed = parseInt(t.listed), t.cont = i.cont++;
                        }), this.dataListChange(), this.$apply(), wx.stopPullDownRefresh();

                      case 22:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "onLoad",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, n, r, a, s, i = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = new Date(), this.year.push(e.getFullYear()), 0 == parseInt((e.getMonth() + 1) / 10) ? this.newMonth = "0" + (e.getMonth() + 1) : this.newMonth = e.getMonth() + 1, 
                        this.array = [ this.year, this.newMonth ], n = e.getFullYear() + "-" + this.newMonth, 
                        t.next = 7, _api2.default.areaRanking("", n);

                      case 7:
                        r = t.sent, this.data_list = r.data, a = [];
                        for (s in this.data_list) a.push(this.data_list[s]);
                        a.sort(function(t, e) {
                            return parseInt(e.listed) - parseInt(t.listed);
                        }), this.data_list = a, this.data_list.forEach(function(t) {
                            t.listed = parseInt(t.listed), t.cont = i.cont++;
                        }), this.dataListChange(), this.$apply();

                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "dataListChange",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        for (e in this.data_list) this.data_list[e].listed_rate < 0 ? (this.data_list[e].listed_type = -1, 
                        this.data_list[e].listed_rate = Math.abs(this.data_list[e].listed_rate)) : this.data_list[e].listed_type = 1, 
                        this.data_list[e].show_house_rate < 0 ? (this.data_list[e].show_house_type = -1, 
                        this.data_list[e].show_house_rate = Math.abs(this.data_list[e].show_house_rate)) : this.data_list[e].show_house_type = 1, 
                        this.data_list[e].new_house_rate < 0 ? (this.data_list[e].new_house_type = -1, this.data_list[e].new_house_rate = Math.abs(this.data_list[e].new_house_rate)) : this.data_list[e].new_house_type = 1;
                        this.$apply();

                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "onShareAppMessage",
        value: function(t) {
            return _index.share.share("二手房的数据在这里等你~");
        }
    } ]), e;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/houseAreaList"));