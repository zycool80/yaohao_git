var regeneratorRuntime = require("../../npm/regenerator-runtime/runtime.js");
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
            function n(o, a) {
                try {
                    var i = t[o](a), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
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

var _createClass = function() {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../api/api.js"), _api2 = _interopRequireDefault(_api), _util = require("./../../utils/util.js"), _util2 = _interopRequireDefault(_util), _ProjectItem = require("./../../components/ProjectItem/ProjectItem.js"), _ProjectItem2 = _interopRequireDefault(_ProjectItem), _BackHome = require("./../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../utils/utilsKit/index.js"), globalModel = require("./../../models/GlobalModel.js"), Lottery = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "楼盘搜索",
            navigationBarBackgroundColor: "#3772cc",
            enablePullDownRefresh: !0
        }, n.data = {
            type: 0,
            inputVal: "",
            inputPlace: "",
            loading: !1,
            projectsItems: [],
            historySearch: [],
            showContent: !1,
            cursor: "",
            hotSearchs: []
        }, n.$repeat = {}, n.$props = {
            BackHome: {},
            ProjectItem: {
                "xmlns:v-bind": "",
                "v-bind:items.sync": "projectsItems"
            }
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default,
            ProjectItem: _ProjectItem2.default
        }, n.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, n.methods = {
            inputTyping: function(e) {
                this.cursor != e.detail.cursor && (this.inputVal = e.detail.value), this.cursor = e.detail.cursor, 
                this.$apply();
            },
            clearHistory: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.historySearch = [], _index.storagePlus.removeOne("historySearch_projects");

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            doSearch: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return n = e.detail.formId, _api2.default.sendFromID(n).then(function(e) {}), t.inputVal || (t.inputVal = t.inputPlace.replace(/搜索：/, "")), 
                            t.projectsItems = [], r.next = 6, t.methods.setHistorySearch.call(t, t.inputVal);

                          case 6:
                            t.$apply();

                          case 7:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.showContent = !0, e.loading = !1, t.next = 4, _api2.default.projectSearch(e.inputVal);

                          case 4:
                            r = t.sent, e.projectsItems = r.data.data, e.loading = !0, e.$apply();

                          case 8:
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
                            wx.showLoading({
                                title: "加载中..."
                            }), e.projectsItems = [], e.inputVal ? e.methods.loadNext.call(e) : e.showContent = !1, 
                            e.$apply(), wx.hideLoading();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            setHistorySearch: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            if (wx.showLoading({
                                title: "加载中..."
                            }), !e) {
                                r.next = 8;
                                break;
                            }
                            return t.historySearch.unshift(e), n = new Set(t.historySearch), t.historySearch = [].concat(_toConsumableArray(n)), 
                            t.projectsItems = [], r.next = 8, t.methods.loadNext.call(t);

                          case 8:
                            t.$apply(), wx.hideLoading();

                          case 10:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            setInputVal: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return t.inputVal = e, r.next = 3, t.methods.setHistorySearch.call(t, e);

                          case 3:
                            t.$apply();

                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            hideInput: function() {
                wx.navigateBack();
            },
            clearInput: function() {
                this.inputVal = "", this.projectsItems = [], this.showContent = !1;
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
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
                        return this.type = t.type || 1, this.title = decodeURIComponent(t.title), this.historySearch = _index.storagePlus.getAll("historySearch_projects") || [], 
                        e.next = 5, globalModel.getGlobalConfig();

                      case 5:
                        r = e.sent, this.hotSearchs = r.hotSearch, this.inputPlace = r.searchText, this.$apply();

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onHide",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.historySearch = this.historySearch.slice(0, 10), wx.setStorageSync("historySearch_projects", this.historySearch.join(","));

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onUnload",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.historySearch = this.historySearch.slice(0, 10), wx.setStorageSync("historySearch_projects", this.historySearch.join(","));

                      case 2:
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
        value: function(e) {
            return _index.share.share("这里有所有的摇号项目，再也不用到处去找啦");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Lottery, "pages/project/search"));