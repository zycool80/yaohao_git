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
            function r(o, a) {
                try {
                    var i = t[o](a), s = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
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

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), utils = require("./../../../utils/util.js"), Index = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "楼盘详情信息",
            enablePullDownRefresh: !0
        }, r.data = {
            mTType: {
                1: "lineOneIcon",
                2: "lineTwoIcon",
                3: "lineThreeIcon",
                4: "lineFourIcon",
                7: "lineSevenIcon",
                10: "lineTenIcon"
            },
            project_id: "",
            lottery_id: "",
            area: "",
            title: "",
            content: "",
            item: {},
            main_message: [],
            property_message: [],
            periphery: [],
            zhoubian: [],
            lottery_detail: [],
            phone: "",
            attetionList: null
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
            openRJTipView: function() {
                wx.showModal({
                    title: "容积率说明",
                    content: "容积率：项目土地上总建筑面积与总用地面积的比值，间接反映了单位土地上所承载的各种人为功能的使用量，容积率越低，居住密度越小，表示居住舒适度较高；一个良好的居住小区，高层住宅容积率应不超过5，改善型小区的容积率一般在2-3，新房别墅的容积率一般在1-1.5。",
                    showCancel: !1
                });
            },
            toUrl: function() {
                wx.navigateTo({
                    url: "/pages/salesMan/index?id=" + this.project_id + "&title=" + this.title
                });
            },
            toMap: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            wx.openLocation({
                                latitude: parseFloat(t.item.y_axis),
                                longitude: parseFloat(t.item.x_axis),
                                name: e
                            });

                          case 1:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            phoneCall: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, o, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (r = /^(0|1)\d{10}$/, !r.test(e)) {
                                n.next = 8;
                                break;
                            }
                            return n.next = 4, _api2.default.getPhoneNum(t.project_id, 2);

                          case 4:
                            o = n.sent, 0 === o.code && (a = o.data.phone, wx.showModal({
                                title: "提示",
                                content: "拨通后请说明来自成都摇号助手",
                                success: function(e) {
                                    e.confirm && wx.makePhoneCall({
                                        phoneNumber: a
                                    });
                                }
                            })), n.next = 9;
                            break;

                          case 8:
                            wx.showModal({
                                title: "提示",
                                content: "拨通后请说明来自成都摇号助手",
                                success: function(t) {
                                    t.confirm && wx.makePhoneCall({
                                        phoneNumber: e
                                    });
                                }
                            });

                          case 9:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getProjectDetailsData(e.project_id, e.lottery_id);

                          case 2:
                            return n = t.sent, t.next = 5, _api2.default.getBtnStatus(e.lottery_id, e.project_id);

                          case 5:
                            r = t.sent, e.attetionList = r.data, e.item = n.data, e.area = n.data.area, e.title = n.data.name, 
                            e.content = n.data.content, e.main_message = n.data.rows[0], e.periphery = n.data.rows[1], 
                            e.lottery_detail = n.data.rows[2], e.property_message = n.data.rows[3], wx.stopPullDownRefresh(), 
                            e.$apply();

                          case 17:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.lottery_id = t.lottery_id, this.project_id = t.project_id, e.next = 4, 
                        this.methods.reload.call(this);

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
        key: "onShareAppMessage",
        value: function() {
            var e = "【" + this.title + "】的详细信息";
            return _index.share.share(e, "/pages/lotteryDetail?id=" + this.lottery_id + "&project_id=" + this.project_id + "&redirect=" + encodeURIComponent(utils.getCurrentPageUrlWithArgs()));
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/projectDetail"));