!function(t, e) {
    "use strict";
    "object" == typeof module && module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.IPv6 = e(t);
}(this, function(t) {
    "use strict";
    function e(t) {
        var e = t.toLowerCase(), i = e.split(":"), n = i.length, o = 8;
        "" === i[0] && "" === i[1] && "" === i[2] ? (i.shift(), i.shift()) : "" === i[0] && "" === i[1] ? i.shift() : "" === i[n - 1] && "" === i[n - 2] && i.pop(), 
        n = i.length, -1 !== i[n - 1].indexOf(".") && (o = 7);
        var r;
        for (r = 0; r < n && "" !== i[r]; r++) ;
        if (r < o) for (i.splice(r, 1, "0000"); i.length < o; ) i.splice(r, 0, "0000");
        for (var f, s = 0; s < o; s++) {
            f = i[s].split("");
            for (var l = 0; l < 3 && ("0" === f[0] && f.length > 1); l++) f.splice(0, 1);
            i[s] = f.join("");
        }
        var c = -1, u = 0, p = 0, h = -1, v = !1;
        for (s = 0; s < o; s++) v ? "0" === i[s] ? p += 1 : (v = !1, p > u && (c = h, u = p)) : "0" === i[s] && (v = !0, 
        h = s, p = 1);
        p > u && (c = h, u = p), u > 1 && i.splice(c, u, ""), n = i.length;
        var a = "";
        for ("" === i[0] && (a = ":"), s = 0; s < n && (a += i[s], s !== n - 1); s++) a += ":";
        return "" === i[n - 1] && (a += ":"), a;
    }
    function i() {
        return t.IPv6 === this && (t.IPv6 = n), this;
    }
    var n = t && t.IPv6;
    return {
        best: e,
        noConflict: i
    };
});