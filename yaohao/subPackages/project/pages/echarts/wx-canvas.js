function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
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
}(), WxCanvas = function() {
    function e(t, n) {
        _classCallCheck(this, e), this.ctx = t, this.canvasId = n, this.chart = null, this._initStyle(t), 
        this._initEvent();
    }
    return _createClass(e, [ {
        key: "getContext",
        value: function(e) {
            if ("2d" === e) return this.ctx;
        }
    }, {
        key: "setChart",
        value: function(e) {
            this.chart = e;
        }
    }, {
        key: "attachEvent",
        value: function() {}
    }, {
        key: "detachEvent",
        value: function() {}
    }, {
        key: "_initCanvas",
        value: function(e, t) {
            e.util.getContext = function() {
                return t;
            }, e.util.$override("measureText", function(e, n) {
                return t.font = n || "12px sans-serif", t.measureText(e);
            });
        }
    }, {
        key: "_initStyle",
        value: function(e) {
            var t = arguments;
            [ "fillStyle", "strokeStyle", "globalAlpha", "textAlign", "textBaseAlign", "shadow", "lineWidth", "lineCap", "lineJoin", "lineDash", "miterLimit", "fontSize" ].forEach(function(t) {
                Object.defineProperty(e, t, {
                    set: function(n) {
                        ("fillStyle" !== t && "strokeStyle" !== t || "none" !== n && null !== n) && e["set" + t.charAt(0).toUpperCase() + t.slice(1)](n);
                    }
                });
            }), e.createRadialGradient = function() {
                return e.createCircularGradient(t);
            };
        }
    }, {
        key: "_initEvent",
        value: function() {
            var e = this;
            this.event = {}, [ {
                wxName: "touchStart",
                ecName: "mousedown"
            }, {
                wxName: "touchMove",
                ecName: "mousemove"
            }, {
                wxName: "touchEnd",
                ecName: "mouseup"
            }, {
                wxName: "touchEnd",
                ecName: "click"
            } ].forEach(function(t) {
                e.event[t.wxName] = function(n) {
                    var a = n.touches[0];
                    e.chart._zr.handler.dispatch(t.ecName, {
                        zrX: "tap" === t.wxName ? a.clientX : a.x,
                        zrY: "tap" === t.wxName ? a.clientY : a.y
                    });
                };
            });
        }
    } ]), e;
}();

exports.default = WxCanvas;