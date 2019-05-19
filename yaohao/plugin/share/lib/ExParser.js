var defMagicConst = require("./../conf/magicConst.js"), magicFnReg = /(__FUNCTION__{{.*?}})/g, magicFnESReg = /__FUNCTION__{{(.*?)}}/g, getType = Object.prototype.toString, ExParser = {
    parse: function(r, e, t) {
        if (!r) throw new Error("str is undefined");
        if ("[object RegExp]" !== getType.call(e)) throw new Error("typeof `regular` is not RegExp");
        if (!t) throw new Error("target is undefined");
        for (var n = r.match(e), a = r, i = 0; i < n.length; i++) {
            var c = n[i], o = "";
            "[object Function]" === getType.call(t) && (o = t.call(this, c)), "[object Array]" === getType.call(t) && (o = t[c] || ""), 
            a = a.replace(c, o);
        }
        return a;
    },
    parseMagicConst: function(r) {
        function e(r) {
            return r && r in defMagicConst ? defMagicConst[r]() : "";
        }
        var t = /(\$_[A-Z_0-9]+)/g;
        return ExParser.parse.call(this, r, t, e);
    },
    parseMagicVariable: function(r) {
        function e(r) {
            var e = this.data, t = r.replace("$", "");
            return t && e && t in e ? e[t] : "";
        }
        var t = /(\$[A-z0-9]+)/g;
        return ExParser.parse.call(this, r, t, e);
    },
    parseMagicFn: function(r) {
        function e(r) {
            var e = magicFnESReg.exec(r);
            return e = e && e[1] ? e[1] : 'return "";', new Function("__SELF__", e)(this.data);
        }
        return ExParser.parse.call(this, r, magicFnReg, e);
    }
};

module.exports = ExParser;