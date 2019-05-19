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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _ProjectItem = require("./../../../components/ProjectItem/ProjectItem.js"), _ProjectItem2 = _interopRequireDefault(_ProjectItem), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        a.config = {
            navigatorBarTitleText: "",
            enablePullDownRefresh: !0
        }, a.data = {
            switchNum: !1,
            type: 1,
            title: "",
            items: [],
            more: !0,
            page: 1,
            inputPlace: "",
            inputVal: "",
            loading: !0,
            areasDatas: [],
            areaIds: "",
            params: {}
        }, a.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, a.$repeat = {}, a.$props = {
            ProjectItem: {
                "xmlns:v-bind": "",
                "v-bind:items.sync": "items"
            },
            BackHome: {
                "xmlns:wx": ""
            }
        }, a.$events = {}, a.components = {
            ProjectItem: _ProjectItem2.default,
            BackHome: _BackHome2.default
        }, a.methods = {
            stopMove: function() {
                return !1;
            },
            closeFliterView: function() {
                this.switchNum = !1;
            },
            chooseArea: function() {
                this.switchNum = !this.switchNum;
            },
            inputTyping: function(e) {
                this.inputVal = e.detail.value;
            },
            clearInput: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.inputVal = "", t.next = 3, e.reload();

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            doSearch: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.inputVal || (e.inputVal = e.inputPlace.replace(/搜索：/, "")), e.area = "", 
                            t.next = 4, e.loadNext();

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            resetHandle: function() {
                this.areaIds = "", this.resetAreaData();
            },
            submitHandle: function() {
                this.switchNum = !1, this.reload().then();
            },
            clickAreaHandle: function(e, t) {
                var r = this.areasDatas;
                if (r && r[e] && r[e].data[t]) {
                    var a = r[e], n = a.data[t], i = [];
                    n.is_toggle = !n.is_toggle, "" === n.val && a.data.forEach(function(e) {
                        e.is_toggle = n.is_toggle;
                    }), r.forEach(function(e) {
                        e.data.forEach(function(e) {
                            e.is_toggle && "" !== e.val && i.push(e.val);
                        });
                    }), this.areaIds = i.join(","), this.$apply();
                }
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "filtersData",
        value: function() {}
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中..."
                        }), e.next = 3, globalModel.getGlobalConfig();

                      case 3:
                        return r = e.sent, this.inputPlace = r.searchText, this.title = t.title, this.type = t.type, 
                        this.title && wx.setNavigationBarTitle({
                            title: this.title
                        }), e.next = 10, this.reload();

                      case 10:
                        wx.hideLoading();

                      case 11:
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
            _api2.default.getFilterAreaList().then(function(t) {
                e.filtersData = {};
                for (var r = [], a = 0; a < t.data.length; a++) {
                    for (var n = t.data[a], i = {
                        title: n.name,
                        data: [ {
                            key: "全选",
                            val: "",
                            is_toggle: !1
                        } ]
                    }, o = 0; o < n.area.length; o++) {
                        var s = n.area[o];
                        i.data.push({
                            key: s.area,
                            val: s.areaid,
                            is_toggle: !1
                        });
                    }
                    r.push(i);
                }
                e.filtersData.areasListDatas = r, e.resetAreaData();
            });
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
                        if (this.loading = !0, t = null, "热门楼盘" !== this.title) {
                            e.next = 8;
                            break;
                        }
                        return e.next = 5, _api2.default.getAllRecomment(1, this.page);

                      case 5:
                        t = e.sent, e.next = 17;
                        break;

                      case 8:
                        if ("优质楼盘" !== this.title) {
                            e.next = 14;
                            break;
                        }
                        return e.next = 11, _api2.default.getAllRecomment(2, this.page);

                      case 11:
                        t = e.sent, e.next = 17;
                        break;

                      case 14:
                        return e.next = 16, _api2.default.getProjects({
                            keyword: this.inputVal,
                            type: this.type,
                            page: this.page,
                            area_id: this.areaIds
                        });

                      case 16:
                        t = e.sent;

                      case 17:
                        this.page >= t.data.last_page || !t.data.last_page ? this.more = !1 : this.page++, 
                        this.loading = !1, t.data && t.data.data && (this.items = [].concat(_toConsumableArray(this.items), _toConsumableArray(t.data.data))), 
                        this.$apply();

                      case 21:
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
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.items = [], this.more = !0, this.page = 1, e.next = 5, this.loadNext();

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
            return _index.share.share("最新" + this.title + "等着你");
        }
    }, {
        key: "resetAreaData",
        value: function() {
            this.areasDatas = this.filtersData.areasListDatas ? _index.common.deepCopy(this.filtersData.areasListDatas) : {}, 
            this.$apply();
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/payProject"));