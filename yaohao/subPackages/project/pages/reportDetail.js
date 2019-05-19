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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) o[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.config = {
            navigationBarTitleText: "垃圾广告信息",
            enablePullDownRefresh: !1
        }, r.data = {
            num: 0,
            imageList: [],
            inputVal: "",
            type: "",
            blowing_type: "",
            id: ""
        }, r.$repeat = {}, r.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, r.methods = {
            inputNum: function(e) {
                this.num = e.detail.value.length, this.inputVal = e.detail.value;
            },
            deletePic: function(e) {
                var t = [];
                for (var n in this.imageList) n != e && t.push(this.imageList[n]);
                this.imageList = t;
            },
            upForm: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (n = e.imageList.join(","), e.inputVal) {
                                t.next = 3;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("内容不能为空", "", "none"));

                          case 3:
                            if (!(e.num > 300)) {
                                t.next = 5;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("字数超过限制", "", "none"));

                          case 5:
                            if (r = void 0, !e.type) {
                                t.next = 12;
                                break;
                            }
                            return t.next = 9, _api2.default.question.whistleSetContent(e.type, e.blowing_type, e.id, e.inputVal, n);

                          case 9:
                            r = t.sent, t.next = 15;
                            break;

                          case 12:
                            return t.next = 14, _api2.default.setPostFeedback(e.type, e.inputVal, n);

                          case 14:
                            r = t.sent;

                          case 15:
                            "举报成功" == r.data && _index.tip.toast("举报成功"), e.inputVal = "", e.imageList = [], 
                            setTimeout(function() {
                                try {
                                    wx.navigateBack();
                                } catch (e) {}
                            }, 600);

                          case 19:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            preview: function(e) {
                var t = e;
                wx.previewImage({
                    urls: [ t ]
                });
            },
            uploadFile: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (6 != e.imageList.length) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("最多上传6张", "", "none"));

                          case 2:
                            return t.prev = 2, t.next = 5, _index.foundation.chooseImageSync();

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
                            e.imageList.push(a.data.url);

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
        value: function(e) {
            this.id = e.id, this.type = e.type, this.blowing_type = e.blowing_type, e.title && wx.setNavigationBarTitle({
                title: e.title
            }), this.$apply();
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/reportDetail"));