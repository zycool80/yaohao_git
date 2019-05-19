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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _popupWindow = require("./../../../components/popupWindow.js"), _popupWindow2 = _interopRequireDefault(_popupWindow), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) o[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.config = {
            navigationBarTitleText: "我要回答",
            enablePullDownRefresh: !0
        }, r.data = {
            num: 0,
            maxNum: 520,
            id: 0,
            item: [],
            inputVal: "",
            my_id: "",
            imageList: [],
            answer_show: !1,
            rules: "【问答规则】：\n\n\n1.问答区不得留下任何诱导、广告、违反本平台相关规定的信息（如联系方式、引导加微信）。\n2.禁止发布与房产无关的内容，且回答内容需与提问主题相符。\n3.若违反以上任何一点，我们有权对其内容进行删除，对相应用户进行违规处理措施。\n4.本规则成都摇号助手拥有所有权。\n\n\n\n温馨提示：避免误导他人，提供的内容确保真实、正确，若不确定内容的正确性，请核实后再作答。"
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {
                "xmlns:wx": ""
            },
            Popup: {
                "xmlns:v-bind": "",
                "v-bind:rules_show.sync": "answer_show",
                "v-bind:rules.sync": "rules",
                rules_title: "回答规则及注意事项"
            }
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default,
            Popup: _popupWindow2.default
        }, r.methods = {
            lookRules: function() {
                this.answer_show = !0;
            },
            preview: function(e, t) {
                var n = [];
                e.img.forEach(function(e) {
                    n = n.concat(e);
                });
                var r = t.currentTarget.dataset, a = r.preview;
                a && n.length > 0 && wx.previewImage({
                    current: a,
                    urls: n
                });
            },
            toUrl: function(e) {
                return wx.navigateTo({
                    url: e
                }), !1;
            },
            binInput: function(e) {
                this.num = e.detail.value.length, this.inputVal = e.detail.value;
            },
            deletePic: function(e) {
                var t = [];
                for (var n in this.imageList) n != e && t.push(this.imageList[n]);
                this.imageList = t;
            },
            upFile: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (r = e.detail.formId, _api2.default.sendFromID(r).then(function(e) {}), t.inputVal) {
                                n.next = 4;
                                break;
                            }
                            return n.abrupt("return", _index.tip.toast("请输入您的回答内容", "", "none"));

                          case 4:
                            return n.next = 6, _api2.default.setAnswer(t.id, t.inputVal, t.imageList.join(","));

                          case 6:
                            if (a = n.sent, "回答成功" !== a.data) {
                                n.next = 12;
                                break;
                            }
                            t.inputVal = "", wx.redirectTo({
                                url: "/subPackages/question/pages/questionDetail?id=" + t.id
                            }), n.next = 13;
                            break;

                          case 12:
                            return n.abrupt("return", _index.tip.toast("回答失败", "", "none"));

                          case 13:
                            t.$apply();

                          case 14:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            uploadFile: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (6 !== e.imageList.length) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("最多上传6张", "", "none"));

                          case 2:
                            return t.prev = 2, t.next = 5, _index.foundation.chooseImageSync();

                          case 5:
                            return n = t.sent, wx.showLoading({
                                title: "上传中"
                            }), t.next = 9, _index.foundation.uploadFileSync(n.tempFilePaths[0]);

                          case 9:
                            if (r = t.sent, "200" == r.statusCode) {
                                t.next = 14;
                                break;
                            }
                            _index.tip.error("图片上传失败"), t.next = 18;
                            break;

                          case 14:
                            if (a = r.data, "0" == a.status) {
                                t.next = 17;
                                break;
                            }
                            return t.abrupt("return", _index.tip.error("图片上传失败"));

                          case 17:
                            e.imageList.push(a.data.url);

                          case 18:
                            t.next = 23;
                            break;

                          case 20:
                            t.prev = 20, t.t0 = t.catch(2), _index.tip.error("图片上传失败");

                          case 23:
                            wx.hideLoading(), e.$apply();

                          case 25:
                          case "end":
                            return t.stop();
                        }
                    }, t, e, [ [ 2, 20 ] ]);
                }))();
            },
            reloadData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getQuestionInfo(e.id);

                          case 2:
                            n = t.sent, e.item = n.data, e.$apply();

                          case 5:
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
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = _index.cache.get("userinfo") || {}, this.my_id = n.id, this.id = t.id, 
                        e.next = 5, this.methods.reloadData.call(this);

                      case 5:
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
        key: "onPullDownRefresh",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.methods.reloadData.call(this);

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
        value: function() {
            return _index.share.share("如果你有买房相关的任何问题，都可以来这里问问哦～");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/question/pages/answerDetail"));