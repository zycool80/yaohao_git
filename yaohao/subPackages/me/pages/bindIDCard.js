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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) o[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.config = {
            navigationBarTitleText: "添加身份信息"
        }, r.data = {
            inputIdCard: "",
            inputName: "",
            inputPhone: "",
            id: ""
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
            bindNameChange: function(e) {
                this.inputName = e.detail.value;
            },
            bindIdCardChange: function(e) {
                this.inputIdCard = e.detail.value;
            },
            bindPhoneChange: function(e) {
                this.inputPhone = e.detail.value;
            },
            submit: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (n = {
                                name: e.inputName ? e.inputName.replace(/[*%&#+!()'"]/g, "") : "",
                                idCard: e.inputIdCard ? e.inputIdCard.replace(/[*%&#+!()'"]/g, "") : "",
                                phone: e.inputPhone ? e.inputPhone.replace(/[*%&#+!()'"]/g, "") : ""
                            }, e.id && (n.id = e.id), !(n.name.length < 1)) {
                                t.next = 6;
                                break;
                            }
                            return t.next = 5, _wepy2.default.showModal({
                                content: "请输入姓名",
                                showCancel: !1
                            });

                          case 5:
                            return t.abrupt("return");

                          case 6:
                            if (!(n.idCard.length < 1)) {
                                t.next = 10;
                                break;
                            }
                            return t.next = 9, _wepy2.default.showModal({
                                content: "请输入身份证",
                                showCancel: !1
                            });

                          case 9:
                            return t.abrupt("return");

                          case 10:
                            if (/^1[3456789][0-9]{9}$/.test(n.phone) && !(e.inputPhone.length < 1)) {
                                t.next = 14;
                                break;
                            }
                            return t.next = 13, _wepy2.default.showModal({
                                content: "请输入正确的手机号码",
                                showCancel: !1
                            });

                          case 13:
                            return t.abrupt("return");

                          case 14:
                            return wx.showLoading({
                                title: "加载中..."
                            }), t.next = 17, _api2.default.bindIdCard(n);

                          case 17:
                            r = t.sent, wx.hideLoading(), 0 == r.code && (wx.showToast({
                                title: "绑定成功",
                                icon: "success",
                                duration: 1e3
                            }), setTimeout(function() {
                                wx.navigateBack();
                            }, 1500));

                          case 20:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            unbind: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _wepy2.default.showModal({
                                content: "确定要解绑？",
                                showCancel: !0
                            });

                          case 2:
                            if (n = t.sent, !n.confirm) {
                                t.next = 9;
                                break;
                            }
                            return t.next = 6, _api2.default.unbindIdCard({
                                id: e.id
                            });

                          case 6:
                            r = t.sent, 0 == r.code && wx.showToast({
                                title: "解绑成功",
                                icon: "success",
                                duration: 3e3
                            }), wx.navigateBack();

                          case 9:
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
                        if (this.type = t.type || 1, this.id = t.id, 2 != this.type) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 5, _api2.default.getMyIdCard(this.id);

                      case 5:
                        n = e.sent, this.inputIdCard = n.data.id_card, this.inputPhone = n.data.phone, this.inputName = n.data.name;

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

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/bindIDCard"));