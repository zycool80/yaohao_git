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
            function a(r, i) {
                try {
                    var o = t[r](i), u = o.value;
                } catch (e) {
                    return void n(e);
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
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), _require = require("./../../../models/GlobalModel.js"), getUserInfo = _require.getUserInfo, Index = function(e) {
    function t() {
        var e, n, a, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) o[u] = arguments[u];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        a.config = {
            navigationBarTitleText: "我是经纪人"
        }, a.data = {
            lotteryList: "",
            selectLottery: "请选择已有的楼盘",
            newProjectName: "",
            second: 0,
            showType: !1,
            changeInput: "获取验证码",
            searchValue: "",
            textAreaStyle: "26",
            showLot: !1,
            step: !0,
            page: 1,
            last_page: "",
            lotData: [],
            inputData: {
                name: null,
                phone: null,
                code: null,
                wechat: null,
                inviter_name: null,
                project_name: "",
                content: null,
                wechat_qrcode: !1,
                card: !1,
                company_name: null,
                store_name: null,
                inviter_id: 0
            },
            project_id: "",
            showModel: !1,
            showTextarea: !0,
            weapp: {
                nickName: "",
                city: ""
            },
            manage_man_id: "",
            type: "",
            gui_url: "",
            invite_url: "",
            is_broker: "",
            shareTitle: ""
        }, a.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, a.$repeat = {}, a.$props = {
            BackHome: {}
        }, a.$events = {}, a.components = {
            BackHome: _BackHome2.default
        }, a.methods = {
            toUrl: function(e) {
                wx.navigateTo({
                    url: e
                });
            },
            clearInput: function() {
                this.selectLottery = "请选择已有的楼盘", this.inputData.project_name = "", this.$apply();
            },
            chooseLottery: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.lotData = [], e.page = 1, t.next = 4, _api2.default.searchProject(e.searchValue, e.page);

                          case 4:
                            n = t.sent, e.last_page = n.data.last_page, e.lotData = n.data.data, e.showType = !0, 
                            e.$apply();

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            closeModel: function() {
                this.showType = !1, this.$apply();
            },
            pre: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.step = !0, e.$apply();

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            getVerify: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getPhoneVerifyCode(e.inputData.phone);

                          case 2:
                            n = t.sent, 0 == n.code && (e.second = 60, a = setInterval(function() {
                                e.second -= 1, e.changeInput = e.second + "s后重获", e.second <= 0 && (clearInterval(a), 
                                e.changeInput = "获取验证码"), e.$apply();
                            }, 1e3)), e.$apply();

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            newInputLot: function(e) {
                this.selectLottery = "请选择已有的楼盘", this.newProjectName = e.detail.value, this.inputData.project_name = e.detail.value, 
                this.$apply();
            },
            showNewLot: function() {
                this.showLot = !0, this.showType = !1, this.$apply();
            },
            inputTyping: function(e) {
                this.searchValue = e.detail.value, this.$apply();
            },
            searchSure: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.page = 1, t.next = 3, _api2.default.searchProject(e.searchValue, e.page);

                          case 3:
                            n = t.sent, e.lotData = n.data.data, e.$apply();

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            scroll: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (!(e.page >= e.last_page) && e.last_page) {
                                t.next = 4;
                                break;
                            }
                            return t.abrupt("return", !1);

                          case 4:
                            e.page++;

                          case 5:
                            return t.next = 8, _api2.default.searchProject(e.searchValue, e.page);

                          case 8:
                            n = t.sent, e.lotData = e.lotData.concat(n.data.data), e.$apply();

                          case 11:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            setLotname: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            t.selectLottery = e, t.showType = !1, t.newProjectName = "", t.inputData.project_name = e, 
                            t.$apply();

                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            chang_type: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.isSaleMan();

                          case 2:
                            n = t.sent, e.type = n.data, e.gui_url = n.url, e.invite_url = n.invite_url, e.is_broker = n.is_broker, 
                            e.$apply();

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            delImg: function(e) {
                1 == e ? this.inputData.wechat_qrcode = "" : this.inputData.card = "";
            },
            changType: function() {
                this.type = "", this.$apply();
            },
            rules_in: function() {
                wx.navigateTo({
                    url: this.gui_url
                });
            },
            cancelModel: function() {
                this.showModel = !1, this.showTextarea = !0, this.$apply();
            },
            getFormID: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            a = e.detail.formId, _api2.default.sendFromID(a).then(function(e) {}), t.$apply();

                          case 3:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            preview: function(e) {
                var t = e.currentTarget.dataset, n = t.preview;
                wx.previewImage({
                    urls: [ n ]
                });
            },
            uploadFile: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var a, r, i;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return n.prev = 0, n.next = 3, _index.foundation.chooseImageSync();

                          case 3:
                            return a = n.sent, n.next = 6, _index.foundation.uploadFileSync(a.tempFilePaths[0]);

                          case 6:
                            if (r = n.sent, "200" == r.statusCode) {
                                n.next = 11;
                                break;
                            }
                            _index.tip.toast("图片上传失败", "", "none"), n.next = 15;
                            break;

                          case 11:
                            if (i = r.data, "0" == i.status) {
                                n.next = 14;
                                break;
                            }
                            return n.abrupt("return", _index.tip.toast("图片上传失败", "", "none"));

                          case 14:
                            1 == e ? t.inputData.wechat_qrcode = i.data.url : t.inputData.card = i.data.url;

                          case 15:
                            n.next = 20;
                            break;

                          case 17:
                            n.prev = 17, n.t0 = n.catch(0), _index.tip.toast("图片上传失败", "", "none");

                          case 20:
                            t.$apply();

                          case 21:
                          case "end":
                            return n.stop();
                        }
                    }, n, t, [ [ 0, 17 ] ]);
                }))();
            },
            inputValue: function(e, t) {
                this.inputData[e] = t.detail.value;
            },
            next: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e.inputData.name && !e.inputData.name.match(/^\s*$/)) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请填写姓名", "", "none"));

                          case 2:
                            if (e.inputData.wechat && !e.inputData.wechat.match(/^\s*$/)) {
                                t.next = 4;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请填写微信号", "", "none"));

                          case 4:
                            if (e.inputData.content && !e.inputData.content.match(/^\s*$/)) {
                                t.next = 6;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请填写个人简介", "", "none"));

                          case 6:
                            if (e.inputData.company_name && !e.inputData.company_name.match(/^\s*$/)) {
                                t.next = 8;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请填写公司名称", "", "none"));

                          case 8:
                            if (e.inputData.store_name && !e.inputData.store_name.match(/^\s*$/)) {
                                t.next = 10;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请填写门店名称", "", "none"));

                          case 10:
                            if (e.inputData.wechat_qrcode) {
                                t.next = 12;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请上传二维码", "", "none"));

                          case 12:
                            if (e.inputData.card) {
                                t.next = 14;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请上传名片或工牌", "", "none"));

                          case 14:
                            e.step = !1;

                          case 15:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            submit: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e.inputData.phone && !e.inputData.phone.match(/^\s*$/)) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请填写手机号", "", "none"));

                          case 2:
                            if (n = /^1[3456789]\d{9}$/, n.test(e.inputData.phone)) {
                                t.next = 5;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("手机号有误", "", "none"));

                          case 5:
                            if (e.inputData.code && !e.inputData.code.match(/^\s*$/)) {
                                t.next = 7;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请填写验证码", "", "none"));

                          case 7:
                            return wx.showLoading({
                                title: "加载中..."
                            }), t.next = 10, _api2.default.joinSalesMan({
                                name: e.inputData.name,
                                phone: e.inputData.phone,
                                code: e.inputData.code,
                                wechat: e.inputData.wechat,
                                inviter_name: e.inputData.inviter_name,
                                project_name: e.inputData.project_name,
                                corporation: e.inputData.company_name,
                                shop: e.inputData.store_name,
                                content: e.inputData.content,
                                wechat_qrcode: e.inputData.wechat_qrcode,
                                card: e.inputData.card,
                                project_id: e.project_id,
                                is_broker: 1,
                                inviter_id: e.inputData.inviter_id
                            });

                          case 10:
                            a = t.sent, 0 == a.code && wx.redirectTo({
                                url: "/subPackages/news/pages/salesManTip?type=2"
                            }), e.$apply(), wx.hideLoading();

                          case 14:
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
        }, r = n, _possibleConstructorReturn(a, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, a, r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.methods.chang_type.call(this), this.project_id = t.id, this.manage_man_id = _index.cache.get("sales_man_id"), 
                        1 == t.type && (this.showModel = !0, this.showTextarea = !1), this.$apply(), t.inviter_id && _api2.default.getInviterName(t.inviter_id).then(function(e) {
                            e.data && (r.inputData.inviter_id = t.inviter_id, r.inputData.inviter_name = e.data, 
                            r.$apply());
                        }), n = this, wx.getSystemInfo({
                            success: function(e) {
                                e.model.indexOf("iPhone 6") > -1 && (n.textAreaStyle = "10");
                            }
                        }), a = getUserInfo(), a && a.nickName && a.city && (this.weapp = '{"nickName": "' + a.nickName + '", "city": "' + a.city + '"}'), 
                        this.$apply();

                      case 11:
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
            var t = getUserInfo();
            return _index.share.share("我在这里等着你一起入驻", "/subPackages/me/pages/broker?inviter_id=" + t.sales_man_id || 0, "http://imgcdn.huanjutang.com/assets/img/20181227/5c2494e7618aa.jpg");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/broker"));