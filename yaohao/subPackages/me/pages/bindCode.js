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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "绑定编码"
        }, r.data = {
            userInfo: {},
            typeIndex: 0,
            maxLength: 200,
            inputCode: "",
            inputRegNum: "",
            inputDetail: "",
            inputLottery: "",
            allLotteries: {},
            id: "",
            title: ""
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
            bindNameChange: function(e) {
                this.inputName = e.detail.value;
            },
            bindCodeChange: function(e) {
                this.inputCode = e.detail.value;
            },
            bindRegNumChange: function(e) {
                this.inputRegNum = e.detail.value;
            },
            submit: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (n = {
                                name: e.inputName ? e.inputName.replace(/[*%&#+!()'"]/g, "") : "",
                                code: e.inputCode ? e.inputCode.replace(/[*%&#+!()'"]/g, "") : "",
                                reg_num: e.inputRegNum ? e.inputRegNum.replace(/[*%&#+!()'"]/g, "") : "",
                                lottery_id: e.id
                            }, !(n.name.length <= 0)) {
                                t.next = 5;
                                break;
                            }
                            return t.next = 4, _wepy2.default.showModal({
                                content: "请输入姓名",
                                showCancel: !1
                            });

                          case 4:
                            return t.abrupt("return");

                          case 5:
                            if (!(n.code.length <= 0 && n.code.length <= 0)) {
                                t.next = 9;
                                break;
                            }
                            return t.next = 8, _wepy2.default.showModal({
                                content: "请输入编码或登记号",
                                showCancel: !1
                            });

                          case 8:
                            return t.abrupt("return");

                          case 9:
                            if (e.id) {
                                t.next = 13;
                                break;
                            }
                            return t.next = 12, _wepy2.default.showModal({
                                content: "您楼盘信息有误，请联系客服解决^_^",
                                showCancel: !1
                            });

                          case 12:
                            return t.abrupt("return");

                          case 13:
                            return wx.showLoading({
                                title: "绑定中..."
                            }), t.next = 16, _api2.default.bindCode(n);

                          case 16:
                            if (r = t.sent, wx.hideLoading(), !r) {
                                t.next = 24;
                                break;
                            }
                            if (wx.showToast({
                                title: "绑定成功",
                                icon: "success",
                                duration: 3e3
                            }), a = getCurrentPages(), !(a.length > 1)) {
                                t.next = 23;
                                break;
                            }
                            return t.abrupt("return", wx.navigateBack());

                          case 23:
                            wx.switchTab({
                                url: "/pages/index"
                            });

                          case 24:
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
                        return this.id = t.id, this.title = decodeURIComponent(t.name), e.next = 4, _api2.default.checkBindIdCard();

                      case 4:
                        if (n = e.sent, !1 !== n.data) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 8, _wepy2.default.showModal({
                            title: "请先绑定个人信息",
                            content: "绑定个人信息之后，部分楼盘可以直接获取摇号编码，查询摇号结果更方便",
                            showCancel: !1
                        });

                      case 8:
                        wx.navigateTo({
                            url: "/subPackages/me/pages/bindIDCard"
                        });

                      case 9:
                        this.$apply();

                      case 10:
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
            return _index.share.share("我在这里查摇号结果，好方便哦", "/pages/index");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/bindCode"));