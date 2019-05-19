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
            function r(a, i) {
                try {
                    var o = t[a](i), u = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(u).then(function(e) {
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) o[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.config = {
            navigationBarTitleText: "申请上架",
            enablePullDownRefresh: !1
        }, r.data = {
            inputVal: "",
            typeIndex: 0,
            true_tp: [],
            num: 0,
            sureNum: 0,
            sales_man_id: "",
            title: ""
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
            upMsg: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return n = e.true_tp.join(","), console.log(e.sales_man_id), t.next = 4, _api2.default.sales.putAways(e.sales_man_id, e.inputVal, n);

                          case 4:
                            r = t.sent, 0 == r.code && (_index.tip.toast(r.data), e.inputVal = "", e.true_tp = [], 
                            wx.navigateBack({
                                number: 2
                            })), e.$apply();

                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            deletePic: function(e) {
                var t = [];
                for (var n in this.true_tp) n != e && t.push(this.true_tp[n]);
                this.true_tp = t;
            },
            inputNum: function(e) {
                return this.num = e.detail.value.length, this.inputVal = e.detail.value, this.inputVal ? this.num > 300 ? _index.tip.toast("字数超过限制", "", "none") : void 0 : _index.tip.toast("内容不能为空", "", "none");
            },
            preview: function(e) {
                wx.previewImage({
                    urls: [ e ]
                });
            },
            uploadFile: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (!(e.true_tp.length >= 6)) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("最多上传6张", "", "none"));

                          case 2:
                            return t.prev = 2, t.next = 5, _index.foundation.chooseImageSync({
                                num: 1
                            });

                          case 5:
                            return n = t.sent, t.next = 8, _index.foundation.uploadFileSync(n.tempFilePaths[0]);

                          case 8:
                            if (r = t.sent, "200" == r.statusCode) {
                                t.next = 13;
                                break;
                            }
                            _index.tip.error("图片上传失败", "", "none"), t.next = 17;
                            break;

                          case 13:
                            if (a = r.data, "0" == a.status) {
                                t.next = 16;
                                break;
                            }
                            return t.abrupt("return", _index.tip.error("图片上传失败"));

                          case 16:
                            e.true_tp.push(a.data.url);

                          case 17:
                            t.next = 21;
                            break;

                          case 19:
                            t.prev = 19, t.t0 = t.catch(2);

                          case 21:
                            wx.hideLoading(), e.$apply();

                          case 23:
                          case "end":
                            return t.stop();
                        }
                    }, t, e, [ [ 2, 19 ] ]);
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
                        this.sales_man_id = t.sales_man_id, this.title = t.title, this.$apply();

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/applyShelves"));