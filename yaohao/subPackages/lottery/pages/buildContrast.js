var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _toConsumableArray(t) {
    if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i;
    }
    return Array.from(t);
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, i) {
            function n(r, a) {
                try {
                    var s = e[r](a), o = s.value;
                } catch (t) {
                    return void i(t);
                }
                if (!s.done) return Promise.resolve(o).then(function(t) {
                    n("next", t);
                }, function(t) {
                    n("throw", t);
                });
                t(o);
            }
            return n("next");
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
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _index2 = require("./../../../utils/utilsKit/index.js"), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), TipEvent = require("./../../../utils/TipEvent.js"), __self = void 0, bindRefreshBuildContrast = function() {
    __self.project_id.length = 0, __self.buiding_id.length = 0, _api2.default.getContrastList(__self.page, __self.size).then(function(t) {
        t.data.list.forEach(function(t) {
            t.project_id == __self.on_project_id ? (t.type = !0, __self.project_id.push(t.project_id), 
            __self.buiding_id.push(t.id)) : t.type = !1;
        }), __self.data_list = t.data, __self.$apply();
    });
}, Index = function(t) {
    function e() {
        var t, i, n, r;
        _classCallCheck(this, e);
        for (var a = arguments.length, s = Array(a), o = 0; o < a; o++) s[o] = arguments[o];
        return i = n = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(s))), 
        n.config = {
            navigationBarTitleText: "PK列表",
            enablePullDownRefresh: !0
        }, n.data = {
            opt_type: !1,
            page: 1,
            page2: 2,
            size: 10,
            size2: 1e8,
            data_list: {},
            project_id: [],
            buiding_id: [],
            total: "",
            all_page: "",
            more: !0,
            loging_type: !1,
            on_project_id: "",
            newList: []
        }, n.$repeat = {}, n.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, n.methods = {
            compareBegan: function() {
                2 === this.project_id.length && wx.navigateTo({
                    url: "/subPackages/lottery/pages/contrastDetail?one_id=" + this.project_id[0] + "&two_id=" + this.project_id[1]
                });
            },
            delete_item: function() {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var i, n, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!(t.project_id.length > 0)) {
                                e.next = 15;
                                break;
                            }
                            return e.next = 3, _api2.default.deleteBuilding(t.buiding_id.toString());

                          case 3:
                            return e.next = 5, _api2.default.getContrastList(t.page, t.size);

                          case 5:
                            i = e.sent, i.data.list.forEach(function(t) {
                                t.type = !1;
                            }), n = _index2.redis.get("refreshPkIconStatus"), n = n ? new Set(n.split(",")) : new Set();
                            for (r in t.project_id) n.add(t.project_id[r]);
                            _index2.redis.set("refreshPkIconStatus", [].concat(_toConsumableArray(n)).toString(), 60), 
                            t.data_list = i.data, t.project_id.length = 0, t.buiding_id.length = 0, t.$apply();

                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            opting: function(t, e) {
                if (this.project_id.length < 2) if (t.type) {
                    for (var i = this.project_id.length, n = 0; n < i; n++) this.project_id[n] == t.project_id && (this.project_id.splice(n, 1), 
                    this.buiding_id.splice(n, 1));
                    this.data_list.list[e].type = !this.data_list.list[e].type;
                } else this.data_list.list[e].type = !this.data_list.list[e].type, this.project_id.push(t.project_id), 
                this.buiding_id.push(this.data_list.list[e].id); else if (t.type) {
                    for (var r = this.project_id.length, a = 0; a < r; a++) this.project_id[a] == t.project_id && (this.project_id.splice(a, 1), 
                    this.buiding_id.splice(a, 1));
                    this.data_list.list[e].type = !this.data_list.list[e].type;
                } else wx.showToast({
                    title: "只能选择两个楼盘",
                    duration: 1e3,
                    icon: "none"
                });
            },
            add_building: function() {
                wx.navigateTo({
                    url: "/subPackages/lottery/pages/findBuilding?type=3"
                });
            }
        }, r = i, _possibleConstructorReturn(n, r);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "onLoad",
        value: function() {
            function t(t) {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                var i, n, r, a, s, o = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return this.on_project_id = e.project_id, __self = this, TipEvent.on("refreshBuildContrast", bindRefreshBuildContrast), 
                        t.next = 5, _api2.default.addBuildings(this.on_project_id);

                      case 5:
                        return t.next = 7, _api2.default.getContrastList(this.page, this.size2);

                      case 7:
                        if (i = t.sent, i.data.list.length > 10) {
                            for (n in i.data.list) r = i.data.list[n], r.project_id == this.on_project_id ? (this.newList.push(r), 
                            this.project_id.push(r.project_id), this.buiding_id.push(r.id), r.type = !0) : r.type = !1;
                            this.all_page = Math.ceil(parseInt(i.data.total) / 10), i.data.list.length = 10, 
                            i.data.list.forEach(function(t, e) {
                                o.newList[0].project_id == t.project_id && i.data.list.splice(e, 1);
                            }), this.data_list.list = [].concat(_toConsumableArray(this.newList), _toConsumableArray(i.data.list)), 
                            wx.setStorageSync("data_list", this.data_list.list), this.loging_type = !0, this.$apply();
                        } else {
                            for (a in i.data.list) s = i.data.list[a], s.project_id == this.on_project_id ? (this.newList.push(s), 
                            this.project_id.push(s.project_id), this.buiding_id.push(s.id), s.type = !0) : s.type = !1;
                            this.all_page = Math.ceil(parseInt(i.data.total) / 10), i.data.list.forEach(function(t, e) {
                                o.newList[0].project_id == t.project_id && i.data.list.splice(e, 1);
                            }), this.data_list.list = [].concat(_toConsumableArray(this.newList), _toConsumableArray(i.data.list)), 
                            wx.setStorageSync("data_list", this.data_list.list), this.loging_type = !0, this.$apply();
                        }

                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "onUnload",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        __self = null, TipEvent.removeListener("refreshBuildContrast", bindRefreshBuildContrast);

                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "onPullDownRefresh",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, i, n, r, a = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return this.more = !0, this.project_id.length = 0, this.buiding_id.length = 0, this.page2 = 2, 
                        this.newList.length = 0, wx.showLoading({
                            title: "加载中"
                        }), t.next = 8, _api2.default.getContrastList(this.page, this.size2);

                      case 8:
                        e = t.sent;
                        for (i in e.data.list) n = e.data.list[i], n.project_id == this.on_project_id ? (this.newList.push(n), 
                        this.project_id.push(n.project_id), this.buiding_id.push(n.id), n.type = !0) : n.type = !1;
                        this.all_page = Math.ceil(parseInt(e.data.total) / 10), e.data.list.length = 10, 
                        e.data.list.forEach(function(t, i) {
                            try {
                                a.newList[0].project_id == t.project_id && e.data.list.splice(i, 1);
                            } catch (t) {}
                        }), this.data_list.list = [].concat(_toConsumableArray(this.newList), _toConsumableArray(e.data.list)), 
                        r = [], this.data_list.list.forEach(function(t) {
                            t && r.push(t);
                        }), this.data_list.list = r, wx.setStorageSync("data_list", this.data_list.list), 
                        this.loging_type = !0, this.$apply(), wx.stopPullDownRefresh(), wx.hideLoading();

                      case 22:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "onReachBottom",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, i = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (this.more) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return", !1);

                      case 2:
                        return wx.showLoading({
                            title: "加载中"
                        }), t.next = 5, _api2.default.getContrastList(this.page2, this.size);

                      case 5:
                        e = t.sent, this.page2 >= this.all_page || !this.all_page ? this.more = !1 : this.page2++, 
                        e.data.list.forEach(function(t, n) {
                            try {
                                i.newList[0].project_id == t.project_id && e.data.list.splice(n, 1);
                            } catch (t) {}
                        }), this.data_list.list = this.data_list.list.concat(e.data.list), wx.setStorageSync("data_list", this.data_list.list), 
                        this.$apply(), wx.hideLoading();

                      case 12:
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
            return _index2.share.share("对比楼盘，让优缺无处可逃");
        }
    } ]), e;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/buildContrast"));