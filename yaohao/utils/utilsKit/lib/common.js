function getOptions(e, t) {
    return _.extend({}, e, t);
}

function merge(e, t) {
    for (var r = +t.length, n = 0, o = e.length; n < r; n++) e[o++] = t[n];
    return e.length = o, e;
}

function mergeAll() {
    var e = arguments, t = void 0, r = 0, n = e.length;
    if (n < 1) return {};
    for (t = e[0], "[object Object]" !== getType.call(t) && (t = {}), r++; r < n; r++) {
        var o = e[r];
        if ("[object Object]" === getType.call(o)) for (var i in o) t[i] = o[i];
    }
    return t;
}

function isFunction(e) {
    return "function" == typeof e;
}

function extend(e, t) {
    if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return _.extend({}, e, t);
    for (var r in t) e[r] = t[r];
    return e;
}

function toJSON(e) {
    if (!e || "" === e) return {};
    var t = {};
    try {
        t = "[object Object]" === getType.call(e) || "[object Array]" === getType.call(e) ? e : JSON.parse(e);
    } catch (e) {}
    return t;
}

function deepCopy(e) {
    return e ? JSON.parse(JSON.stringify(e)) : {};
}

var _ = require("./../../../npm/underscore/underscore.js"), getType = Object.prototype.toString, getProto = Object.getPrototypeOf;

module.exports = {
    deepCopy: deepCopy,
    _: _,
    getType: getType,
    getProto: getProto,
    getOptions: getOptions,
    merge: merge,
    mergeAll: mergeAll,
    isFunction: isFunction,
    extend: extend,
    toJSON: toJSON
};