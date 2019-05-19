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
            function r(a, o) {
                try {
                    var i = t[a](o), u = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(u);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "摇号助手—个人资料",
            enablePullDownRefresh: !0
        }, r.data = {
            inputData: [],
            default_avatar: "/images/default_sales_man_avatar.png",
            saleMan_id: "",
            tip: "",
            bottom: 0
        }, r.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.methods = {
            uploadFile: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r, a, o;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.prev = 0, t.next = 3, _index.foundation.chooseImageSync();

                          case 3:
                            return n = t.sent, t.next = 6, _index.foundation.uploadFileSync(n.tempFilePaths[0]);

                          case 6:
                            if (r = t.sent, "200" == r.statusCode) {
                                t.next = 9;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("图片上传失败", "", "none"));

                          case 9:
                            if (a = r.data, "0" == a.status) {
                                t.next = 12;
                                break;
                            }
                            return t.abrupt("return", _index.tip.error("图片上传失败"));

                          case 12:
                            return t.next = 14, _api2.default.sales.updateSalesMan({
                                avatar_url: a.data.url
                            });

                          case 14:
                            o = t.sent, 0 == o.code ? (e.default_avatar = a.data.url, _index.tip.toast("修改成功", "", "none")) : _index.tip.toast("修改失败", "", "none"), 
                            t.next = 21;
                            break;

                          case 18:
                            t.prev = 18, t.t0 = t.catch(0), _index.tip.toast("图片上传失败", "", "none");

                          case 21:
                            e.$apply();

                          case 22:
                          case "end":
                            return t.stop();
                        }
                    }, t, e, [ [ 0, 18 ] ]);
                }))();
            },
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getPersonInfo(e.salesMan_id);

                          case 2:
                            n = t.sent, e.default_avatar = n.data.avatar_url, e.inputData = n.data, wx.stopPullDownRefresh(), 
                            e.$apply();

                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, a = n, _possibleConstructorReturn(r, a);
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
                        this.salesMan_id = t.id, this.$apply();

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
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function(e) {
            this.methods.reload.call(this);
        }
    }, {
        key: "onShareAppMessage",
        value: function(e) {
            return _index.share.share("我在这里查摇号结果，好方便哦", "/pages/index");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/personInfo"));