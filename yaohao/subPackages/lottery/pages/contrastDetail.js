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
            function o(n, i) {
                try {
                    var a = t[n](i), c = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(c).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(c);
            }
            return o("next");
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
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _index = require("./../../../utils/utilsKit/index.js"), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _urijs = require("./../../../npm/urijs/src/URI.js"), _urijs2 = _interopRequireDefault(_urijs), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, o, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), c = 0; c < i; c++) a[c] = arguments[c];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        o.config = {
            navigationBarTitleText: "PK详情"
        }, o.data = {
            project1: [],
            project1_id: "",
            project2_id: "",
            project2: [],
            data_list: [],
            all_list: [],
            page: 0,
            size: 10,
            index: 0,
            index2: 1,
            left_opt: [],
            right_opt: [],
            qrcode: ""
        }, o.$repeat = {}, o.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, o.$events = {}, o.components = {
            BackHome: _BackHome2.default
        }, o.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, o.methods = {
            look_more: function() {
                wx.previewImage({
                    urls: [ this.qrcode ]
                });
            },
            change_left: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var o, n, i;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return t.index = e.detail.value, t.all_list.forEach(function(e) {
                                e.project.name == t.left_opt[t.index] && (t.project1_id = e.project_id);
                            }), r.next = 4, _api2.default.findBuildingData(t.project1_id, t.project2_id);

                          case 4:
                            o = r.sent, t.project1 = o.data.project1;
                            for (n in t.project1) for (i in t.project1[n]) t.project1[n][i] && "null" != t.project1[n][i] || (t.project1[n][i] = "暂无");
                            t.left_opt.length = 0, t.right_opt.length = 0, t.all_list.forEach(function(e) {
                                t.left_opt.push(e.project.name), t.right_opt.push(e.project.name);
                            }), t.left_opt.forEach(function(e, r) {
                                e == t.project2.base.name && t.left_opt.splice(r, 1);
                            }), t.right_opt.forEach(function(e, r) {
                                e == t.project1.base.name && t.right_opt.splice(r, 1);
                            }), t.left_opt.forEach(function(e, r) {
                                e == t.project1.base.name && (t.index = r);
                            }), t.right_opt.forEach(function(e, r) {
                                e == t.project2.base.name && (t.index2 = r);
                            }), t.$apply();

                          case 15:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            change_right: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var o, n, i;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return t.index2 = e.detail.value, t.all_list.forEach(function(e) {
                                e.project.name == t.right_opt[t.index2] && (t.project2_id = e.project_id);
                            }), r.next = 4, _api2.default.findBuildingData(t.project1_id, t.project2_id);

                          case 4:
                            o = r.sent, t.project2 = o.data.project2;
                            for (n in t.project2) for (i in t.project2[n]) t.project2[n][i] && "null" != t.project2[n][i] || (t.project2[n][i] = "暂无");
                            t.left_opt.length = 0, t.right_opt.length = 0, t.all_list.forEach(function(e) {
                                t.left_opt.push(e.project.name), t.right_opt.push(e.project.name);
                            }), t.left_opt.forEach(function(e, r) {
                                e == t.project2.base.name && t.left_opt.splice(r, 1);
                            }), t.right_opt.forEach(function(e, r) {
                                e == t.project1.base.name && t.right_opt.splice(r, 1);
                            }), t.left_opt.forEach(function(e, r) {
                                e == t.project1.base.name && (t.index = r);
                            }), t.right_opt.forEach(function(e, r) {
                                e == t.project2.base.name && (t.index2 = r);
                            }), t.$apply();

                          case 15:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            }
        }, n = r, _possibleConstructorReturn(o, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, o, n, i, a, c, p = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t.q ? (r = (0, _urijs2.default)(decodeURIComponent(t.q)).search(!0), this.project1_id = r.one_id, 
                        this.project2_id = r.two_id) : (this.project1_id = t.one_id, this.project2_id = t.two_id), 
                        e.next = 3, _api2.default.findBuildingData(this.project1_id, this.project2_id);

                      case 3:
                        o = e.sent, this.project1 = o.data.project1, this.project2 = o.data.project2, this.left_opt.push(this.project1.base.name), 
                        this.right_opt.push(this.project2.base.name), this.qrcode = o.data.qrcode;
                        for (n in this.project1) for (i in this.project1[n]) this.project1[n][i] && "null" != this.project1[n][i] || (this.project1[n][i] = "暂无");
                        for (a in this.project2) for (c in this.project2[a]) this.project2[a][c] && "null" != this.project2[a][c] || (this.project2[a][c] = "暂无");
                        this.$apply(), this.all_list = wx.getStorageSync("data_list"), this.all_list.forEach(function(e) {
                            p.left_opt.push(e.project.name), p.right_opt.push(e.project.name);
                        }), this.left_opt.forEach(function(e, t) {
                            e == p.project2.base.name && p.left_opt.splice(t, 1);
                        }), this.right_opt.forEach(function(e, t) {
                            e == p.project1.base.name && p.right_opt.splice(t, 1);
                        }), this.left_opt = new Set(this.left_opt), this.left_opt = [].concat(_toConsumableArray(this.left_opt)), 
                        this.right_opt = new Set(this.right_opt), this.right_opt = [].concat(_toConsumableArray(this.right_opt)), 
                        this.left_opt.forEach(function(e, t) {
                            e == p.project1.base.name && (p.index = t);
                        }), this.right_opt.forEach(function(e, t) {
                            e == p.project2.base.name && (p.index2 = t);
                        }), this.$apply();

                      case 23:
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
            return _index.share.share("对比楼盘，让优缺无处可逃");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/contrastDetail"));