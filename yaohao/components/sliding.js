var regeneratorRuntime = require("../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, a) {
            function n(i, r) {
                try {
                    var o = e[i](r), l = o.value;
                } catch (t) {
                    return void a(t);
                }
                if (!o.done) return Promise.resolve(l).then(function(t) {
                    n("next", t);
                }, function(t) {
                    n("throw", t);
                });
                t(l);
            }
            return n("next");
        });
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var n = e[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, a, n) {
        return a && t(e.prototype, a), n && t(e, n), e;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), util = require("./../utils/utilsKit/util.js"), Sliding = function(t) {
    function e() {
        var t, a, n, i;
        _classCallCheck(this, e);
        for (var r = arguments.length, o = Array(r), l = 0; l < r; l++) o[l] = arguments[l];
        return a = n = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(o))), 
        n.config = {
            navigationBarTitleText: "测试",
            component: !0
        }, n.data = {
            min: 0,
            max: 0,
            leftValue: 0,
            rightValue: "不限",
            totalLength: 0,
            bigLength: 0,
            ratio: .5,
            sliderLength: 40,
            containerLeft: 0,
            hideOption: ""
        }, n.props = {
            items: [],
            min: {
                type: Number,
                default: "null",
                twoWay: !0
            },
            max: {
                type: Number,
                default: "null",
                twoWay: !0
            },
            step: {
                type: Number,
                default: "null",
                twoWay: !0
            },
            minValue: {
                type: Number,
                default: "null",
                twoWay: !0
            },
            maxValue: {
                type: Number,
                default: "null",
                twoWay: !0
            },
            blockColor: {
                type: String,
                default: "null",
                twoWay: !0
            },
            backgroundColor: {
                type: String,
                default: "null",
                twoWay: !0
            },
            selectedColor: {
                type: String,
                default: "null",
                twoWay: !0
            }
        }, n.methods = {
            _minMove: function(t) {
                var e = t.changedTouches[0].pageX / this.data.ratio - this.data.containerLeft - this.data.sliderLength / 1.4;
                e + this.data.sliderLength >= this.data.rightValue ? e = this.data.rightValue - this.data.sliderLength : e <= 0 && (e = 0), 
                this.leftValue = e, this.$apply();
                var a = parseInt(e / this.bigLength * parseInt(this.data.max) + this.data.min), n = {
                    lowValue: a
                };
                this.$emit("lowValueChange", n);
            },
            _maxMove: function(t) {
                var e = t.changedTouches[0].pageX / this.data.ratio - this.data.containerLeft - this.data.sliderLength / 1.4;
                e <= this.data.leftValue + this.data.sliderLength ? e = this.data.leftValue + this.data.sliderLength : e >= this.data.totalLength && (e = this.data.totalLength), 
                this.rightValue = e, this.$apply(), e -= this.data.sliderLength;
                var a = parseInt(e / this.data.bigLength * this.data.max), n = {
                    heighValue: a
                };
                this.$emit("heighValueChange", n);
            }
        }, i = a, _possibleConstructorReturn(n, i);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "_propertyLeftValueChange",
        value: function() {
            var t = this.data.minValue / this.data.max * this.data.bigLength, e = this.data.min / this.data.max * this.data.bigLength;
            this.leftValue = t - e, this.$apply();
        }
    }, {
        key: "_propertyRightValueChange",
        value: function() {
            var t = this.data.maxValue / this.data.max * this.data.bigLength + this.data.sliderLength;
            this.rightValue = t, this.$apply();
        }
    }, {
        key: "onLoad",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        setTimeout(function() {
                            var t = e;
                            util.wxPromisify(wx.getSystemInfo)().then(function(t) {
                                var a = t.windowWidth / 750;
                                e.ratio = a, e.$apply();
                            }).then(function() {
                                wx.createSelectorQuery().select(".container").boundingClientRect(function(e) {
                                    t.totalLength = e.width / t.data.ratio - t.data.sliderLength, t.bigLength = e.width / t.data.ratio - 2 * t.data.sliderLength, 
                                    t.rightValue = e.width / t.data.ratio - t.data.sliderLength, t.containerLeft = e.left / t.data.ratio, 
                                    t.$apply(), t._propertyLeftValueChange(), t._propertyRightValueChange();
                                }).exec();
                            });
                        }, 500);

                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    } ]), e;
}(_wepy2.default.component);

exports.default = Sliding;