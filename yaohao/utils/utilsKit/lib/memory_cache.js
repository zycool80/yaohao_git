function MemoryCache() {}

var _require = require("./common.js"), extend = _require.extend, getType = _require.getType, encryptKey = "CACHE_", globalData = {};

MemoryCache.extend = function(e) {
    return extend(this, e);
}, MemoryCache.extend({
    get: function(e) {
        return this.__getCache(e);
    },
    getReference: function(e) {
        return this.__getCacheReference(e);
    },
    set: function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
        return this.__setCache(e, t, r);
    },
    setReference: function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
        return this.__setCacheReference(e, t, r);
    },
    remove: function(e) {
        return this.__removeCache(e);
    },
    has: function(e) {
        return !this.checkTimeout(e);
    },
    checkTimeout: function(e) {
        return this.__checkTimeout(e);
    },
    encrypt: function(e) {
        return this.__encrypt(e);
    }
}), Object.defineProperty(MemoryCache, "__getCache", {
    configurable: !1,
    writable: !1,
    enumerable: !1,
    value: function(e) {
        var t = this.__encrypt(e), r = globalData[t];
        if (r) {
            if (!this.__checkTimeout(e)) return "[object Array]" === getType.call(r.__value) || "[object Object]" === getType.call(r.__value) ? JSON.parse(JSON.stringify(r.__value)) : r.__value;
            delete globalData[t];
        }
        return "";
    }
}), Object.defineProperty(MemoryCache, "__getCacheReference", {
    configurable: !1,
    writable: !1,
    enumerable: !1,
    value: function(e) {
        var t = this.__encrypt(e);
        if (globalData[t]) {
            if (!this.__checkTimeout(e)) return globalData[e];
            delete globalData[e];
        }
        return "";
    }
}), Object.defineProperty(MemoryCache, "__setCacheReference", {
    configurable: !1,
    writable: !1,
    enumerable: !1,
    value: function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12, a = this.__encrypt(e);
        globalData[a] = {
            __date: new Date().getTime() + 60 * r * 1e3,
            __value: t
        };
    }
}), Object.defineProperty(MemoryCache, "__setCache", {
    configurable: !1,
    writable: !1,
    enumerable: !1,
    value: function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12, a = this.__encrypt(e);
        globalData[a] = {
            __date: new Date().getTime() + 60 * r * 1e3,
            __value: "[object Array]" === getType.call(t) || "[object Object]" === getType.call(t) ? JSON.parse(JSON.stringify(t)) : t
        };
    }
}), Object.defineProperty(MemoryCache, "__removeCache", {
    configurable: !1,
    writable: !1,
    enumerable: !1,
    value: function(e) {
        var t = this.__encrypt(e);
        globalData[t] && delete globalData[t];
    }
}), Object.defineProperty(MemoryCache, "__checkTimeout", {
    configurable: !1,
    writable: !1,
    enumerable: !1,
    value: function(e) {
        var t = this.__encrypt(e), r = new Date().getTime(), a = globalData[t];
        return !a || a.__date < r;
    }
}), Object.defineProperty(MemoryCache, "__encrypt", {
    configurable: !1,
    writable: !1,
    enumerable: !1,
    value: function(e) {
        return encryptKey + e;
    }
}), Object.defineProperty(MemoryCache, "__printStack", {
    configurable: !1,
    writable: !1,
    enumerable: !1,
    value: function() {
        return JSON.stringify(globalData);
    }
}), module.exports = MemoryCache;