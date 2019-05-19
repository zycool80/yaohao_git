var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, i) {
            function n(a, r) {
                try {
                    var o = e[a](r), s = o.value;
                } catch (t) {
                    return void i(t);
                }
                if (!o.done) return Promise.resolve(s).then(function(t) {
                    n("next", t);
                }, function(t) {
                    n("throw", t);
                });
                t(s);
            }
            return n("next");
        });
    };
}

function _toConsumableArray(t) {
    if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i;
    }
    return Array.from(t);
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
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), TipEvent = require("./../../../utils/TipEvent.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(t) {
    function e() {
        var t, i, n, a;
        _classCallCheck(this, e);
        for (var r = arguments.length, o = Array(r), s = 0; s < r; s++) o[s] = arguments[s];
        return i = n = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(o))), 
        n.config = {
            navigationBarTitleText: "楼盘搜索",
            navigationBarBackgroundColor: "#3772cc"
        }, n.data = {
            type: 1,
            getValue: "",
            getValue2: "",
            getValue3: "",
            community_list: [],
            building_list: [],
            serch_type: 0,
            hotList: [],
            hostory_list: []
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
            delete_list: function() {
                this.hostory_list.length = 0, wx.removeStorageSync("hostory_list");
            },
            add_buidl: function(t) {
                _api2.default.addBuildings(t.project_id).then(function(t) {
                    TipEvent.emit("refreshBuildContrast"), wx.navigateBack();
                }), this.hostory_list.push(this.getValue3), this.hostory_list.length > 10 && this.hostory_list.splice(1, 1), 
                wx.setStorageSync("hostory_list", this.hostory_list);
            },
            hostory_item: function(t) {
                var e = this;
                this.getValue3 = t, _api2.default.projectSearch(this.getValue3).then(function(t) {
                    e.building_list = t.data.data, e.$apply();
                });
            },
            hotList: function(t) {
                var e = this;
                this.getValue3 = t.name, _api2.default.projectSearch(this.getValue3).then(function(t) {
                    e.building_list = t.data.data, e.$apply();
                });
            },
            search_keword2: function() {
                var t = this;
                if (console.log(this.getValue), !this.getValue) return _index.tip.toast("请输入楼盘名", "", "none");
                _api2.default.findCommunity(this.getValue).then(function(e) {
                    t.community_list = e.data.data.list, t.$apply();
                });
            },
            search_keword: function() {
                var t = this;
                if (!this.getValue3) return _index.tip.toast("请输入楼盘名", "", "none");
                _api2.default.projectSearch(this.getValue3).then(function(e) {
                    t.building_list = e.data.data, t.$apply();
                }), this.hostory_list.push(this.getValue3), this.hostory_list.length > 10 && this.hostory_list.splice(0, 1), 
                wx.setStorageSync("hostory_list", this.hostory_list);
                var e = wx.getStorageSync("hostory_list");
                e = new Set(e), this.hostory_list = [].concat(_toConsumableArray(e));
            },
            delete_search2: function() {
                this.community_list.length = 0, this.getValue = "";
            },
            delete_search: function() {
                this.getValue3 = "";
            },
            valueTyping: function(t) {
                var e = this;
                this.getValue = t.detail.value, _api2.default.findCommunity(this.getValue).then(function(t) {
                    e.community_list = t.data.data.list, e.$apply();
                });
            },
            valueTyping3: function(t) {
                var e = this;
                this.getValue3 = t.detail.value, _api2.default.projectSearch(this.getValue3).then(function(t) {
                    e.building_list = t.data.data, e.$apply();
                });
            },
            valueTyping2: function(t) {
                this.getValue2 = t.detail.value;
            },
            get_conmunity: function(t) {
                wx.setStorageSync("community_name", {
                    name: t.resblock_name,
                    id: t.resblock_id
                }), wx.navigateBack();
            },
            get_building: function(t) {
                wx.setStorageSync("building_name", t), wx.navigateBack();
            }
        }, a = i, _possibleConstructorReturn(n, a);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "onLoad",
        value: function() {
            function t(t) {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                var i, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return i = wx.getStorageSync("hostory_list"), i = new Set(i), this.hostory_list = [].concat(_toConsumableArray(i)), 
                        t.next = 5, globalModel.getGlobalConfig();

                      case 5:
                        n = t.sent, this.hotList = n.hotSearch, this.type = parseInt(e.type), 1 === this.type ? wx.setNavigationBarTitle({
                            title: "小区名字"
                        }) : 2 === this.type ? wx.setNavigationBarTitle({
                            title: "楼栋"
                        }) : 3 === this.type && wx.setNavigationBarTitle({
                            title: "楼盘PK搜索"
                        }), this.$apply();

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            return share.share("输入你想看的楼盘，立马获得信息", "/subPackages/lottery/pages/findBuilding?type=" + this.type);
        }
    } ]), e;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/findBuilding"));