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
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), Index = function(e) {
    function t() {
        var e, r, i, o;
        _classCallCheck(this, t);
        for (var n = arguments.length, a = Array(n), s = 0; s < n; s++) a[s] = arguments[s];
        return r = i = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        i.config = {
            navigationBarTitleText: "估价结果",
            navigationBarBackgroundColor: "#3772cc"
        }, i.data = {
            modal_type: !1,
            title: "",
            house: "",
            result_data: "",
            price: "",
            qrcode: ""
        }, i.$repeat = {}, i.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, i.$events = {}, i.components = {
            BackHome: _BackHome2.default
        }, i.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, i.methods = {
            look_ruls: function() {
                this.modal_type = !0;
            },
            guanbi: function() {
                this.modal_type = !1;
            },
            preview_img: function() {
                wx.previewImage({
                    urls: [ this.qrcode ]
                });
            }
        }, o = r, _possibleConstructorReturn(i, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            var t = this;
            if (this.title = e.title, this.house = e.house, this.result_data = wx.getStorageSync("item_details"), 
            this.price = parseInt(this.result_data.price), this.result_data.build_size) {
                var r = this.result_data.build_size.split(" ");
                this.result_data.build_size = r[1];
            }
            _api2.default.getMiniProgramQrcode(1).then(function(e) {
                t.qrcode = e.data.qrcode, t.$apply();
            });
        }
    }, {
        key: "onShareAppMessage",
        value: function(e) {
            return _index.share.share("查一查你的房子值多少钱", "/subPackages/lottery/pages/priceResult?title=" + this.title + "&house=" + this.house);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/priceResult"));