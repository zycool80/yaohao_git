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
                    var o = t[a](i), l = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(l).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(l);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _circle = require("./../../../utils/circle.js"), _circle2 = _interopRequireDefault(_circle), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _TipEvent = require("./../../../utils/TipEvent.js"), _TipEvent2 = _interopRequireDefault(_TipEvent), __self = void 0, bindReloadData = function() {
    __self.reload();
}, Pie = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), l = 0; l < i; l++) o[l] = arguments[l];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.props = {
            title: {
                type: String,
                default: ""
            },
            isEnable: {
                type: Boolean,
                default: !0
            },
            dataSource: {
                type: Array,
                default: []
            },
            time: {
                type: String,
                default: ""
            }
        }, r.data = {
            radius: 100,
            slashLength: 10,
            fontSize: 12,
            canvasMargin: 15,
            canvasWidth: 0,
            canvasHeight: 250,
            lineColor: "#808080",
            textColor: "#010101",
            tipVal: "",
            touchItem: null
        }, r.computed = {
            totalCount: function() {
                var e = 0;
                return this.dataSource.forEach(function(t) {
                    e += t.count;
                }), e;
            },
            centerX: function() {
                return this.canvasWidth / 2;
            },
            centerY: function() {
                return this.canvasHeight / 2;
            },
            lineLength: function() {
                return .9 * (this.canvasWidth / 2 - this.radius);
            }
        }, r.methods = {
            onTapCanvas: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a, i, o, l, s, u, c, f, h, p, d, v, _, y, g, b, m;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (r = e.currentTarget, a = r.offsetLeft, i = r.offsetTop, o = e.detail, l = o.x, 
                            s = o.y, u = l - a, c = s - i, _circle2.default.isPointInHollowCircle(u, c, t.centerX, t.centerY, t.radius, .5 * t.radius)) {
                                n.next = 6;
                                break;
                            }
                            return n.abrupt("return");

                          case 6:
                            f = _circle2.default.getAngleWithPoint(u, c, t.centerX, t.centerY), h = 0, p = !0, 
                            d = !1, v = void 0, n.prev = 11, _ = t.dataSource[Symbol.iterator]();

                          case 13:
                            if (p = (y = _.next()).done) {
                                n.next = 27;
                                break;
                            }
                            if (g = y.value, b = g.count / t.totalCount * 360, !(h <= f && f <= h + b)) {
                                n.next = 23;
                                break;
                            }
                            return t.$emit("onTapCanvasItem", g), t.touchItem = g, n.next = 21, _api2.default.getTransactionAreaData(t.time, g.area_id);

                          case 21:
                            m = n.sent, t.tipVal = m.data;

                          case 23:
                            h += b;

                          case 24:
                            p = !0, n.next = 13;
                            break;

                          case 27:
                            n.next = 33;
                            break;

                          case 29:
                            n.prev = 29, n.t0 = n.catch(11), d = !0, v = n.t0;

                          case 33:
                            n.prev = 33, n.prev = 34, !p && _.return && _.return();

                          case 36:
                            if (n.prev = 36, !d) {
                                n.next = 39;
                                break;
                            }
                            throw v;

                          case 39:
                            return n.finish(36);

                          case 40:
                            return n.finish(33);

                          case 41:
                            t.$apply();

                          case 42:
                          case "end":
                            return n.stop();
                        }
                    }, n, t, [ [ 11, 29, 33, 41 ], [ 34, , 36, 40 ] ]);
                }))();
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "drawCanvas",
        value: function() {
            for (var e = _wepy2.default.createCanvasContext("myCanvasPie"), t = this.radius, n = this.centerX, r = this.centerY, a = -90, i = 0, o = 0; o < this.dataSource.length; o++) {
                var l = this.dataSource[o], s = l.color, u = l.count;
                if (0 !== u) {
                    var c = u / this.totalCount * 360;
                    i = a + c, e.beginPath(), e.moveTo(n, r), e.arc(n, r, t, _circle2.default.getRadianFromAngle(a), _circle2.default.getRadianFromAngle(i)), 
                    e.setFillStyle(s), e.setLineWidth(2), e.setStrokeStyle("#ffffff"), e.fill(), e.stroke(), 
                    e.closePath();
                    var f = a + 90 + c / 2, h = f > 0 && f < 180, p = h ? 1 : -1, d = t, v = t + this.slashLength, _ = Math.sin(_circle2.default.getRadianFromAngle(f)), y = Math.cos(_circle2.default.getRadianFromAngle(f)), g = {
                        x: n + _ * v,
                        y: r - y * v
                    };
                    e.beginPath(), e.moveTo(n + _ * d, r - y * d), e.lineTo(g.x, g.y), e.moveTo(g.x, g.y), 
                    e.lineTo(g.x + this.lineLength * p, g.y), e.setLineWidth(1), e.setStrokeStyle(this.lineColor), 
                    e.closePath(), e.stroke();
                    var b = h ? "right" : "left";
                    e.beginPath(), e.setFontSize(this.fontSize), e.setFillStyle(this.textColor), e.setTextAlign(b), 
                    e.closePath(), e.fillText(l.value, g.x + this.lineLength * p, g.y - 4), a = i;
                }
            }
            e.moveTo(n, r), e.arc(n, r, t / 2, 0, 2 * Math.PI), e.setFillStyle("#fff"), e.fill(), 
            e.draw(!1);
        }
    }, {
        key: "initContextWidth",
        value: function() {
            var e = _wepy2.default.getSystemInfoSync();
            this.canvasWidth = e.screenWidth - 2 * this.canvasMargin, this.$apply();
        }
    }, {
        key: "onLoad",
        value: function() {
            __self = this, _TipEvent2.default.on("reloadDataEvent", bindReloadData);
        }
    }, {
        key: "onUnload",
        value: function() {
            _TipEvent2.default.removeListener("reloadDataEvent", bindReloadData), __self = null;
        }
    }, {
        key: "reload",
        value: function() {
            this.initContextWidth(), this.drawCanvas(), this.tipVal = [], this.touchItem = null, 
            this.$apply();
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = Pie;