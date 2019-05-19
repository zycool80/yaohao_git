var shareCache = {
    __CACHE: null,
    init: function() {
        this.__CACHE = wx.$_HASHTABLES = {};
    },
    get: function(t) {
        var e = this.__computed(t);
        return this.__CACHE[e] || "";
    },
    set: function(t, e) {
        var _ = this.__computed(t);
        this.__CACHE[_] = e;
    },
    __computed: function(t) {
        return "_" + t;
    }
};

shareCache.init(), module.exports = shareCache;