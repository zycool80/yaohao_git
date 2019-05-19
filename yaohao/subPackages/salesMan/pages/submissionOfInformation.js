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
            function i(r, a) {
                try {
                    var o = t[r](a), s = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    i("next", e);
                }, function(e) {
                    i("throw", e);
                });
                e(s);
            }
            return i("next");
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
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _GlobalModel = require("./../../../models/GlobalModel.js"), _GlobalModel2 = _interopRequireDefault(_GlobalModel), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), SubmitAudit = function(e) {
    function t() {
        var e, n, i, r;
        _classCallCheck(this, t);
        for (var a = arguments.length, o = Array(a), s = 0; s < a; s++) o[s] = arguments[s];
        return n = i = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        i.config = {
            navigationBarTitleText: "提交资料"
        }, i.$repeat = {}, i.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, i.$events = {}, i.components = {
            BackHome: _BackHome2.default
        }, i.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, i.data = {
            sales_man_id: 0,
            imgTypeArr: [],
            postAuditsArr: [ {
                imgTypeIndex: 0,
                image: ""
            } ]
        }, i.methods = {
            bindPickerChange: function(e) {
                var t = e.detail.value, n = e.currentTarget.dataset.index, i = this.postAuditsArr[n];
                i && (i.imgTypeIndex = t, this.$apply());
            },
            delAuditsHandle: function(e) {
                this.postAuditsArr = this.postAuditsArr.filter(function(t, n) {
                    return n !== parseInt(e);
                }), this.$apply();
            },
            deletePicHandle: function(e) {
                var t = this.postAuditsArr[e];
                t && (t.image = "", this.$apply());
            },
            addAuditsHandle: function() {
                this.postAuditsArr.push({
                    imgTypeIndex: 0,
                    image: ""
                });
            },
            uploadImgHandle: function(e) {
                var t = this, n = this.postAuditsArr[e];
                n && _index.foundation.chooseImageSync().then(function(e) {
                    wx.showLoading({
                        title: "上传中...",
                        mask: !0
                    }), _index.foundation.uploadFileSync(e.tempFilePaths[0]).then(function(e) {
                        if (wx.hideLoading(), 200 !== e.statusCode) return _index.tip.toast("图片上传失败");
                        n.image = e.data.data.url, t.$apply();
                    }).catch(function(e) {
                        return wx.hideLoading(), _index.tip.toast("图片上传失败");
                    });
                }).catch(function(e) {});
            },
            deletePic: function() {
                this.item.image = [], this.$apply();
            },
            submitHandle: function() {
                var e = this;
                if (!(this.postAuditsArr.length > 0)) return _index.tip.toast("没有添加上传的内容");
                for (var t = [], n = 0; n < this.postAuditsArr.length; n++) {
                    var i = this.postAuditsArr[n];
                    if (!i.image) return _index.tip.showModal("请上传第" + (n + 1) + "个审核的图片");
                    t.push({
                        audit_type_id: this.imgTypeArr[i.imgTypeIndex].id,
                        image: i.image
                    });
                }
                _index.tip.confirm("是否确认提交").then(function(n) {
                    n && (wx.showLoading({
                        title: "提交中",
                        mask: !0
                    }), _api2.default.sales.postAuditsApplies({
                        data: JSON.stringify(t),
                        salesman_id: e.sales_man_id
                    }).then(function(e) {
                        wx.hideLoading(), _index.tip.toast("提交成功", function() {
                            wx.switchTab({
                                url: "/pages/me/index"
                            });
                        });
                    }).catch(function(e) {
                        wx.hideLoading();
                    }));
                });
            }
        }, r = n, _possibleConstructorReturn(i, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = _GlobalModel2.default.getUserInfo(), this.sales_man_id = n.sales_man_id, 
                        e.next = 4, _api2.default.sales.getAuditsTypes();

                      case 4:
                        i = e.sent, this.imgTypeArr = i.data, this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(SubmitAudit, "subPackages/salesMan/pages/submissionOfInformation"));