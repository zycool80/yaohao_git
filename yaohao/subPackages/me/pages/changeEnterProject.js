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
            function a(n, i) {
                try {
                    var o = t[n](i), u = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(u).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(u);
            }
            return a("next");
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
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), Index = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) o[u] = arguments[u];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        a.config = {
            navigationBarTitleText: "申请更换楼盘"
        }, a.data = {
            inputData: {
                name: "",
                phone: "",
                wechat: "",
                project_name: "",
                individual_resume: "",
                wechat_qrcode: "",
                card: "",
                old_project_name: "",
                shop: "",
                old_shop: "",
                corporation: "",
                old_corporation: ""
            },
            project_id: "",
            showModel: !1,
            showTextarea: !0,
            sales_man_id: "",
            type: "",
            gui_url: "",
            invite_url: "",
            is_broker: null
        }, a.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, a.$repeat = {}, a.$props = {
            BackHome: {}
        }, a.$events = {}, a.components = {
            BackHome: _BackHome2.default
        }, a.methods = {
            delImg: function(e) {
                1 == e ? this.inputData.wechat_qrcode = "" : this.inputData.card = "";
            },
            changType: function() {
                this.type = "";
            },
            rules_in: function() {
                wx.navigateTo({
                    url: this.gui_url
                });
            },
            getFormID: function(e) {
                var t = e.detail.formId;
                _api2.default.sendFromID(t).then(function(e) {});
            },
            preview: function(e) {
                var t = e.currentTarget.dataset, r = t.preview;
                wx.previewImage({
                    urls: [ r ]
                });
            },
            uploadFile: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var a, n, i;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return r.prev = 0, r.next = 3, _index.foundation.chooseImageSync();

                          case 3:
                            return a = r.sent, r.next = 6, _index.foundation.uploadFileSync(a.tempFilePaths[0]);

                          case 6:
                            if (n = r.sent, "200" == n.statusCode) {
                                r.next = 11;
                                break;
                            }
                            _index.tip.error("图片上传失败"), r.next = 15;
                            break;

                          case 11:
                            if (i = n.data, "0" == i.status) {
                                r.next = 14;
                                break;
                            }
                            return r.abrupt("return", _index.tip.error("图片上传失败"));

                          case 14:
                            1 == e ? t.inputData.wechat_qrcode = i.data.url : t.inputData.card = i.data.url;

                          case 15:
                            r.next = 20;
                            break;

                          case 17:
                            r.prev = 17, r.t0 = r.catch(0), _index.tip.error("图片上传失败");

                          case 20:
                            t.$apply();

                          case 21:
                          case "end":
                            return r.stop();
                        }
                    }, r, t, [ [ 0, 17 ] ]);
                }))();
            },
            inputValue: function(e, t) {
                this.inputData[e] = t.detail.value;
            },
            loseFocus: function(e, t) {
                if (this.inputData[e] = t.detail.value, !/^1[3456789]\d{9}$/.test(this.inputData.phone)) return _index.tip.alert("手机号有误");
            },
            submit: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (r = {
                                project_id: e.project_id
                            }, e.inputData.name) {
                                t.next = 3;
                                break;
                            }
                            return t.abrupt("return", _index.tip.alert("请填写姓名"));

                          case 3:
                            if (r.name = e.inputData.name, e.inputData.wechat) {
                                t.next = 6;
                                break;
                            }
                            return t.abrupt("return", _index.tip.alert("请填写微信号"));

                          case 6:
                            if (r.wechat = e.inputData.wechat, e.inputData.phone) {
                                t.next = 9;
                                break;
                            }
                            return t.abrupt("return", _index.tip.alert("请填写手机号"));

                          case 9:
                            if (r.phone = e.inputData.phone, e.inputData.card) {
                                t.next = 12;
                                break;
                            }
                            return t.abrupt("return", _index.tip.alert("请上传名片或工牌"));

                          case 12:
                            if (r.card = e.inputData.card, e.inputData.wechat_qrcode) {
                                t.next = 15;
                                break;
                            }
                            return t.abrupt("return", _index.tip.alert("请上传二维码"));

                          case 15:
                            if (r.wechat_qrcode = e.inputData.wechat_qrcode, e.inputData.individual_resume) {
                                t.next = 18;
                                break;
                            }
                            return t.abrupt("return", _index.tip.alert("请填写个性签名"));

                          case 18:
                            if (r.individual_resume = e.inputData.individual_resume, 1 != e.is_broker) {
                                t.next = 32;
                                break;
                            }
                            if (e.inputData.old_shop) {
                                t.next = 22;
                                break;
                            }
                            return t.abrupt("return", _index.tip.alert("请填写原店面名"));

                          case 22:
                            if (e.inputData.shop) {
                                t.next = 24;
                                break;
                            }
                            return t.abrupt("return", _index.tip.alert("请填写更换后店面名"));

                          case 24:
                            if (r.shop = e.inputData.shop, e.inputData.old_corporation) {
                                t.next = 27;
                                break;
                            }
                            return t.abrupt("return", _index.tip.alert("请填写原公司名"));

                          case 27:
                            if (e.inputData.corporation) {
                                t.next = 29;
                                break;
                            }
                            return t.abrupt("return", _index.tip.alert("请填写更换后公司名"));

                          case 29:
                            r.corporation = e.inputData.corporation, t.next = 34;
                            break;

                          case 32:
                            if (e.inputData.old_project_name) {
                                t.next = 34;
                                break;
                            }
                            return t.abrupt("return", _index.tip.alert("请填写原驻楼盘名称"));

                          case 34:
                            if (e.inputData.project_name) {
                                t.next = 36;
                                break;
                            }
                            return t.abrupt("return", _index.tip.alert("请填写更换后楼盘名"));

                          case 36:
                            return r.commutation_project = e.inputData.project_name, wx.showLoading({
                                title: "加载中..."
                            }), t.next = 40, _api2.default.sales.setCommutationProject(r);

                          case 40:
                            a = t.sent, 0 == a.code && wx.redirectTo({
                                url: "/subPackages/news/pages/salesManTip?type=" + (1 == e.is_broker ? "2" : "1")
                            }), e.$apply(), wx.hideLoading();

                          case 44:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            getQrcode: function() {
                wx.previewImage({
                    urls: [ "http://imgcdn.huanjutang.com/assets/img/20181210/5c0e4bce82eff.jpg" ]
                });
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a, n, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = _index.cache.get("userinfo"), this.project_id = t.project_id, this.sales_man_id = r.sales_man_id, 
                        e.next = 5, _api2.default.sales.getCommutationProject(this.project_id);

                      case 5:
                        return a = e.sent, a.data && (n = a.data, this.inputData = _index.common.mergeAll(this.inputData, {
                            name: n.name,
                            phone: n.phone,
                            wechat: n.wechat_code,
                            individual_resume: n.individual_resume,
                            wechat_qrcode: n.wechat_qrcode,
                            card: n.card,
                            old_project_name: n.project_name,
                            old_shop: n.shop,
                            old_corporation: n.corporation
                        }), this.is_broker = a.data.is_broker), e.next = 9, _api2.default.isSaleMan();

                      case 9:
                        i = e.sent, this.gui_url = i.url, this.invite_url = i.invite_url, 1 == t.type && (this.showModel = !0, 
                        this.showTextarea = !1), this.$apply();

                      case 14:
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
            return _index.share.share("我在这里等着你一起入驻", "/subPackages/me/pages/salesMan?inviter_id=" + this.sales_man_id || 0);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/changeEnterProject"));