function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _index = require("./../../../utils/utilsKit/index.js"), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), Index = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.config = {
            navigationBarTitleText: "资料模版"
        }, o.data = {
            data_list: [],
            tempFilePath: ""
        }, o.$repeat = {}, o.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, o.$events = {}, o.components = {
            BackHome: _BackHome2.default
        }, o.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, o.methods = {
            preview_img: function(e) {
                wx.previewImage({
                    urls: [ e.image ]
                });
            },
            downloadFile_img: function(e) {
                var t = e.url;
                wx.downloadFile({
                    url: t,
                    success: function(e) {
                        wx.saveImageToPhotosAlbum({
                            filePath: e.tempFilePath,
                            success: function() {
                                wx.showToast({
                                    title: "保存成功",
                                    duration: 1e3,
                                    icon: "none"
                                });
                            },
                            fail: function() {
                                wx.showToast({
                                    title: "保存失败",
                                    duration: 1e3,
                                    icon: "none"
                                });
                            }
                        });
                    }
                }).onProgressUpdate(function(e) {
                    wx.showLoading({
                        title: e.progress + "%"
                    }), 100 === parseInt(e.progress) && wx.hideLoading();
                });
            }
        }, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            var t = this;
            _api2.default.downloadTemplate().then(function(e) {
                t.data_list = e.data, t.$apply();
            });
        }
    }, {
        key: "onShareAppMessage",
        value: function(e) {
            return _index.share.share("你要的购房资料模版这里都有");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/commonProblems"));