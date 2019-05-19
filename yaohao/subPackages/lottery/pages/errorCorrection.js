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
                    var u = t[a](i), o = u.value;
                } catch (e) {
                    return void n(e);
                }
                if (!u.done) return Promise.resolve(o).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(o);
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
        for (var i = arguments.length, u = Array(i), o = 0; o < i; o++) u[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
        r.config = {
            navigationBarTitleText: "纠错",
            enablePullDownRefresh: !1
        }, r.data = {
            true_inputVal: "",
            false_inputVal: "",
            typeIndex: 0,
            typeList: [],
            inputData: {
                true_tp: [],
                false_tp: []
            },
            phoneNumber: "",
            num: 0,
            sureNum: 0,
            type: 5,
            project_id: ""
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
            upMsg: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return n = e.inputData.true_tp.join(","), r = e.inputData.false_tp.join(","), t.next = 4, 
                            _api2.default.setBugFeedback(e.type, e.true_inputVal, e.false_inputVal, "", n, r, e.project_id);

                          case 4:
                            a = t.sent, "提交成功" == a.data && (_index.tip.toast("提交成功"), e.false_inputVal = "", 
                            e.true_inputVal = "", e.phoneNumber = "", e.inputData.true_tp = [], e.inputData.false_tp = [], 
                            e.type = 5), e.$apply();

                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            deletePic: function(e, t) {
                var n = [];
                if (1 == e) {
                    for (var r in this.inputData.true_tp) r != t && n.push(this.inputData.true_tp[r]);
                    this.inputData.true_tp = n;
                }
                if (2 == e) {
                    for (var a in this.inputData.false_tp) a != t && n.push(this.inputData.false_tp[a]);
                    this.inputData.false_tp = n;
                }
            },
            bindTypePickerChange: function(e) {
                this.typeIndex = e.detail.value, this.type = this.typeList[this.typeIndex].index;
            },
            inputNum: function(e, t) {
                if (1 == e) {
                    if (this.num = t.detail.value.length, this.true_inputVal = t.detail.value, !this.true_inputVal) return _index.tip.toast("内容不能为空", "", "none");
                    if (this.num > 300) return _index.tip.toast("字数超过限制", "", "none");
                }
                if (2 == e && (this.sureNum = t.detail.value.length, this.false_inputVal = t.detail.value, 
                this.sureNum > 300)) return _index.tip.toast("字数超过限制", "", "none");
            },
            preview: function(e) {
                wx.previewImage({
                    urls: [ e ]
                });
            },
            uploadFile: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a, i;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (1 != e || 6 != t.inputData.true_tp.length) {
                                n.next = 2;
                                break;
                            }
                            return n.abrupt("return", _index.tip.toast("最多上传6张", "", "none"));

                          case 2:
                            if (2 != e || 6 != t.inputData.false_tp.length) {
                                n.next = 4;
                                break;
                            }
                            return n.abrupt("return", _index.tip.toast("最多上传6张", "", "none"));

                          case 4:
                            return n.prev = 4, n.next = 7, _index.foundation.chooseImageSync({
                                num: 1
                            });

                          case 7:
                            return r = n.sent, n.next = 10, _index.foundation.uploadFileSync(r.tempFilePaths[0]);

                          case 10:
                            if (a = n.sent, "200" == a.statusCode) {
                                n.next = 15;
                                break;
                            }
                            _index.tip.error("图片上传失败", "", "none"), n.next = 19;
                            break;

                          case 15:
                            if (i = a.data, "0" == i.status) {
                                n.next = 18;
                                break;
                            }
                            return n.abrupt("return", _index.tip.error("图片上传失败"));

                          case 18:
                            1 == e ? t.inputData.true_tp.push(i.data.url) : t.inputData.false_tp.push(i.data.url);

                          case 19:
                            n.next = 23;
                            break;

                          case 21:
                            n.prev = 21, n.t0 = n.catch(4);

                          case 23:
                            wx.hideLoading(), t.$apply();

                          case 25:
                          case "end":
                            return n.stop();
                        }
                    }, n, t, [ [ 4, 21 ] ]);
                }))();
            },
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), t.next = 3, _api2.default.feedbackType();

                          case 3:
                            n = t.sent;
                            for (r in n.data) e.typeList.push({
                                index: r,
                                name: n.data[r]
                            });
                            e.$apply(), wx.hideLoading();

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
                        return this.project_id = t.id, e.next = 3, this.methods.reload.call(this);

                      case 3:
                        this.$apply();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/errorCorrection"));