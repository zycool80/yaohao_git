var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(i, a) {
                try {
                    var o = t[i](a), s = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
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

var _slicedToArray = function() {
    function e(e, t) {
        var r = [], n = !0, i = !1, a = void 0;
        try {
            for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), 
            !t || r.length !== t); n = !0) ;
        } catch (e) {
            i = !0, a = e;
        } finally {
            try {
                !n && s.return && s.return();
            } finally {
                if (i) throw a;
            }
        }
        return r;
    }
    return function(t, r) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), _createClass = function() {
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), OneHouseOnePrice = function(e) {
    function t() {
        var e, r, n, i;
        _classCallCheck(this, t);
        for (var a = arguments.length, o = Array(a), s = 0; s < a; s++) o[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationBarTitleText: "一房一价",
            enablePullDownRefresh: !0
        }, n.$repeat = {}, n.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, n.data = {
            loading: !0,
            page: 1,
            more: !0,
            houseList: [],
            lottery_id: "",
            title: "",
            params: {},
            buildPickerArr: [ 0, 0 ],
            buildList: [ [], [] ],
            decorationList: [],
            decorationIndex: 0,
            houseTypeList: [ {
                value: "全部",
                id: ""
            }, {
                value: "清水",
                id: "1"
            }, {
                value: "精装",
                id: "2"
            } ],
            houseTypeIndex: 0,
            sortList: [ {
                value: "总价从低到高",
                id: "asc",
                val: "total_price_order_by"
            }, {
                value: "总价从高到低",
                id: "desc",
                val: "total_price_order_by"
            }, {
                value: "单价从低到高",
                id: "asc",
                val: "univalence_order_by"
            }, {
                value: "单价从高到低",
                id: "desc",
                val: "univalence_order_by"
            }, {
                value: "面积从小到大",
                id: "asc",
                val: "square_order_by"
            }, {
                value: "面积从大到小",
                id: "desc",
                val: "square_order_by"
            } ],
            sortIndex: 0,
            showFilterView: !1,
            filterIndex: 0,
            beginAnimate: !1,
            hidePosition: "1000rpx",
            showPosition: "0",
            priceTipContent: ""
        }, n.methods = {
            closeHandle: function() {
                this.priceTipContent = "", this.$apply();
            },
            showHardcover: function() {
                wx.showModal({
                    title: "精装说明",
                    content: "由于不同户型对应装修风格和价格不一样，需要您选择并确认本户型对应的装修价格。",
                    showCancel: !1
                });
            },
            showFilter: function(e) {
                var t = this;
                this.filterIndex = e, this.showFilterView = !0, this.$apply(), setTimeout(function() {
                    t.beginAnimate = !0, t.$apply();
                }, 100);
            },
            closeFilter: function() {
                this.showFilterView = !1, this.beginAnimate = !1, this.$apply();
            },
            priceFilter: function(e) {
                var t = this;
                this.decorationIndex = e, this.params.price = this.decorationList[e].price, this.params.style = this.decorationList[e].id, 
                this.throttleReloadFn(), setTimeout(function() {
                    t.methods.closeFilter.call(t);
                }, 200);
            },
            houseTypeFilter: function(e) {
                var t = this;
                this.houseTypeIndex = e, this.params.decoration = this.houseTypeList[e].id, this.throttleReloadFn(), 
                setTimeout(function() {
                    t.methods.closeFilter.call(t);
                }, 200);
            },
            sortFilter: function(e) {
                var t = this;
                this.sortIndex = e, this.sortList.forEach(function(e) {
                    t.params[e.val] = "";
                });
                var r = this.sortList[e];
                r && (this.params[r.val] = r.id), this.throttleReloadFn(), setTimeout(function() {
                    t.methods.closeFilter.call(t);
                }, 200);
            },
            stopMove: function() {
                return !1;
            },
            getBuilding: function(e) {
                var t = e.detail.column, r = e.detail.value;
                t < 1 && this.throttleGetUnit(this.buildList[0][r]);
            },
            submitBuilding: function(e) {
                var t = e.detail.value[0], r = e.detail.value[1];
                0 === parseInt(t) ? (this.params.building = "", this.params.unit = "") : (this.params.building = this.buildList[0][t], 
                this.params.unit = this.buildList[1][r]), this.throttleReloadFn();
            }
        }, i = r, _possibleConstructorReturn(n, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "throttleReloadFn",
        value: function() {}
    }, {
        key: "throttleGetUnit",
        value: function() {}
    }, {
        key: "loadNext",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.getHousePrice(Object.assign(this.params, {
                            lottery_id: this.lottery_id,
                            page: this.page
                        }));

                      case 2:
                        t = e.sent, this.page >= t.data.last_page || !t.data ? this.more = !1 : this.page++, 
                        t.data && t.data.data && (this.houseList = this.houseList.concat(t.data.data)), 
                        this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "reload",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.page = 1, this.more = !0, this.loading = !0, this.houseList = [], e.next = 6, 
                        this.loadNext();

                      case 6:
                        setTimeout(function() {
                            t.loading = !1, t.$apply();
                        }, 300);

                      case 7:
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
                var r, n, i, a, o, s, u = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.lottery_id = t.lottery_id || "", this.title = t.name || "", e.next = 4, 
                        Promise.all([ _api2.default.geiBuildingList(this.lottery_id), _api2.default.decorationStyle(this.lottery_id) ]);

                      case 4:
                        if (r = e.sent, n = _slicedToArray(r, 2), i = n[0], a = n[1], i.data && (i.data.sort(function(e, t) {
                            return parseInt(e) - parseInt(t);
                        }), this.buildList[0] = (o = [ "全部" ]).concat.apply(o, _toConsumableArray(i.data))), 
                        this.decorationList = a.data, this.$apply(), !(this.decorationList.length > 1)) {
                            e.next = 16;
                            break;
                        }
                        return e.next = 14, _api2.default.getGuideImage("house_price");

                      case 14:
                        s = e.sent, this.priceTipContent = s.text || "";

                      case 16:
                        this.throttleReloadFn = _index.underscore.throttle(function() {
                            u.reload().then();
                        }, 500), this.throttleReloadFn(), this.throttleGetUnit = _index.underscore.throttle(function(e) {
                            _api2.default.getUnitBuiling(u.lottery_id, e).then(function(e) {
                                u.buildList[1] = e.data, u.$apply();
                            });
                        }, 500);

                      case 19:
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
                        return e.abrupt("return", !1);

                      case 2:
                        return e.next = 4, this.loadNext();

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
            return _index.share.share("这里有" + this.title + "的一房一价");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(OneHouseOnePrice, "subPackages/project/pages/oneHouseOnePrice"));