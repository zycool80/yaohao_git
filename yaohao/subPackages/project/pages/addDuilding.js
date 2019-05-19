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
                    var i = t[a](o), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "添加楼盘"
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
        }, n.data = {
            project_name: "",
            notNullarea_id: "",
            tel: "",
            remarks: "",
            areaList: [],
            areaIndex: 0
        }, n.methods = {
            addDuiding: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e.project_name) {
                                t.next = 4;
                                break;
                            }
                            return t.next = 3, _wepy2.default.showModal({
                                content: "楼盘名不能为空",
                                showCancel: !1
                            });

                          case 3:
                            return t.abrupt("return", t.sent);

                          case 4:
                            return wx.showLoading({
                                title: "正在添加..."
                            }), t.next = 7, _api2.default.addDuilding(e.project_name, e.notNullarea_id, e.tel, e.remarks);

                          case 7:
                            r = t.sent, wx.hideLoading(), "新增成功" === r.data && wx.showToast({
                                title: "添加成功",
                                icon: "success",
                                duration: 1e3,
                                success: function() {
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                }
                            });

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            areaListChange: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            n = e.detail.value, t.areaIndex = n, t.notNullarea_id = t.areaList[n].id, t.$apply();

                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            buildingName: function(e) {
                this.project_name = e.detail.value;
            },
            phone: function(e) {
                this.tel = e.detail.value;
            },
            other: function(e) {
                this.remarks = e.detail.value;
            }
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.areaList();

                      case 2:
                        if (t = e.sent, t.data && t.data.area) for (r in t.data.area) this.areaList.push({
                            name: t.data.area[r],
                            id: r
                        });
                        this.notNullarea_id = this.areaList && this.areaList[0] ? this.areaList[0].id : "", 
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
        key: "onShareAppMessage",
        value: function() {
            return _index.share.share("我在这里查摇号结果，好方便哦", "/pages/index");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/addDuilding"));