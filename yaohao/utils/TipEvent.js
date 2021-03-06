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

var Events = require("./../npm/events/events.js"), TipEvent = function(t) {
    function e() {
        return _classCallCheck(this, e), _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
    }
    return _inherits(e, t), e;
}(Events), tipEvent = new TipEvent();

module.exports = tipEvent;