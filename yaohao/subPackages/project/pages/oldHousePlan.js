var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var i = t[a](o), s = i.value;
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), utils = require("./../../../utils/util.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "户型",
            enablePullDownRefresh: !0
        }, n.data = {
            page: 1,
            more: !0,
            items: [],
            project_id: 0,
            project_name: "",
            is_sales_man: 2,
            scrollWidth: 0,
            scrollWidthNow: 0,
            lottery_id: 0,
            typeList: [],
            typeListNow: [],
            type: 0,
            typeTo: 0,
            tab: "",
            loading: !0,
            attetionList: null,
            phone: "",
            isComplete: 2,
            is_this: ""
        }, n.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, n.$repeat = {}, n.$props = {
            BackHome: {}
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.methods = {
            toPhotoDetailHandle: function(e) {
                wx.navigateTo({
                    url: "/subPackages/project/pages/housePlanDetail?id=" + e + "&project_id=" + this.project_id + "&project_name=" + this.project_name
                });
            },
            openPreviewImg: function(e) {
                for (var t = [], r = 0; r < this.items.length; r++) t.push(this.items[r].original_image);
                wx.previewImage({
                    current: this.items[e].original_image,
                    urls: t
                });
            },
            phoneCall: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n, a;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            if (n = /^(0|1)\d{10}$/, !n.test(e)) {
                                r.next = 6;
                                break;
                            }
                            return r.next = 4, _api2.default.getPhoneNum(t.project_id, 2);

                          case 4:
                            a = r.sent, 0 === a.code && (e = a.data.phone);

                          case 6:
                            wx.showModal({
                                title: "提示",
                                content: "拨通后请说明来自成都摇号助手",
                                success: function(t) {
                                    t.confirm && wx.makePhoneCall({
                                        phoneNumber: e
                                    });
                                }
                            });

                          case 7:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            toUrl: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            wx.navigateTo({
                                url: "/pages/salesMan/index?id=" + e.project_id + "&title=" + e.project_name
                            });

                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            getSaleMan: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.isSaleMan(e.project_id);

                          case 2:
                            r = t.sent, e.is_sales_man = r.data;

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            uploadProjectImg: function() {
                wx.navigateTo({
                    url: "/subPackages/lottery/pages/addHouseIn?project_id=" + this.project_id
                });
            },
            switchTab: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return t.type = e, n = 1 == t.tab ? t.typeListNow[e] : t.typeList[e], t.typeTo = n.type, 
                            r.next = 5, t.methods.reload.call(t);

                          case 5:
                            t.$apply();

                          case 6:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            changType: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return t.tab = e, t.type = 0, t.typeTo = 0, r.next = 5, t.methods.loadNext.call(t);

                          case 5:
                            t.$apply();

                          case 6:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.more = !0, e.loading = !0, e.page = 1, e.items = [], t.next = 6, e.methods.loadNext.call(e);

                          case 6:
                            return t.next = 8, e.methods.getSaleMan.call(e);

                          case 8:
                            wx.stopPullDownRefresh(), e.$apply();

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return r = 1 == e.tab ? e.lottery_id : "", t.next = 3, _api2.default.houseTypePhotos(e.project_id, r, e.typeTo, e.tab);

                          case 3:
                            n = t.sent, e.loading = !1, e.items = n.data, e.phone = n.phone, e.isComplete = n.is_complete, 
                            e.$apply(), wx.hideLoading();

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            preview: function(e) {
                var t = "";
                this.items && this.items[e] && (t = this.items[e].image);
                var r = this.items.map(function(e) {
                    return e.image;
                });
                wx.previewImage({
                    current: t,
                    urls: r
                });
            }
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n, a, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.is_this = t.is_this, this.project_id = t.project_id, this.lottery_id = t.lottery_id || "", 
                        this.project_name = decodeURIComponent(t.project_name), r = [ {
                            text: "全部",
                            type: 0
                        } ], e.next = 7, _api2.default.getBtnStatus(this.lottery_id, this.project_id);

                      case 7:
                        return n = e.sent, this.attetionList = n.data, e.next = 11, _api2.default.houseType(this.project_id, "", 1);

                      case 11:
                        return a = e.sent, this.typeListNow = r.concat(a.data), this.scrollWidthNow = 95 * parseInt(this.typeListNow.length), 
                        e.next = 16, _api2.default.houseType(this.project_id, "", "");

                      case 16:
                        return o = e.sent, this.typeList = r.concat(o.data), this.scrollWidth = 95 * parseInt(this.typeList.length), 
                        e.next = 21, this.methods.reload.call(this);

                      case 21:
                        if (!(1 == this.tab && this.items.length < 1)) {
                            e.next = 24;
                            break;
                        }
                        return e.next = 24, this.methods.changType.call(this, "");

                      case 24:
                        this.$apply();

                      case 25:
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
                        return e.next = 4, this.methods.loadNext.call(this);

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
            return _index.share.share("快来看~【" + this.project_name + "】户型图", "/pages/lotteryDetail?id=" + this.lottery_id + "&project_id=" + this.project_id + "&redirect=" + encodeURIComponent(utils.getCurrentPageUrlWithArgs()));
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/oldHousePlan"));