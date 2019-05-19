function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var r = n[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(n, t, r) {
        return t && e(n.prototype, t), r && e(n, r), n;
    };
}(), Circle = function() {
    function e() {
        _classCallCheck(this, e);
    }
    return _createClass(e, null, [ {
        key: "isPointInHollowCircle",
        value: function(e, n, t, r, a, l) {
            var u = t - e, o = r - n, i = u * u + o * o;
            return !(i > a * a || i < l * l);
        }
    }, {
        key: "getAngleFromRadian",
        value: function(e) {
            return 180 * e / Math.PI;
        }
    }, {
        key: "getRadianFromAngle",
        value: function(e) {
            return e * Math.PI / 180;
        }
    }, {
        key: "getAngleWithPoint",
        value: function(e, n, t, r) {
            var a = t - e, l = r - n, u = 180 * Math.atan(l / a) / Math.PI + 90;
            return a < 0 ? u : u + 180;
        }
    } ]), e;
}();

exports.default = Circle;