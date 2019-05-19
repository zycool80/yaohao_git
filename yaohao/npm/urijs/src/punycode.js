!function(e) {
    function o(e) {
        throw new RangeError(T[e]);
    }
    function n(e, o) {
        for (var n = e.length, t = []; n--; ) t[n] = o(e[n]);
        return t;
    }
    function t(e, o) {
        var t = e.split("@"), r = "";
        return t.length > 1 && (r = t[0] + "@", e = t[1]), e = e.replace(S, "."), r + n(e.split("."), o).join(".");
    }
    function r(e) {
        for (var o, n, t = [], r = 0, u = e.length; r < u; ) o = e.charCodeAt(r++), o >= 55296 && o <= 56319 && r < u ? (n = e.charCodeAt(r++), 
        56320 == (64512 & n) ? t.push(((1023 & o) << 10) + (1023 & n) + 65536) : (t.push(o), 
        r--)) : t.push(o);
        return t;
    }
    function u(e) {
        return n(e, function(e) {
            var o = "";
            return e > 65535 && (e -= 65536, o += P(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), 
            o += P(e);
        }).join("");
    }
    function i(e) {
        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : b;
    }
    function f(e, o) {
        return e + 22 + 75 * (e < 26) - ((0 != o) << 5);
    }
    function c(e, o, n) {
        var t = 0;
        for (e = n ? M(e / j) : e >> 1, e += M(e / o); e > L * C >> 1; t += b) e = M(e / L);
        return M(t + (L + 1) * e / (e + m));
    }
    function l(e) {
        var n, t, r, f, l, s, d, p, a, h, v = [], g = e.length, w = 0, m = I, j = A;
        for (t = e.lastIndexOf(E), t < 0 && (t = 0), r = 0; r < t; ++r) e.charCodeAt(r) >= 128 && o("not-basic"), 
        v.push(e.charCodeAt(r));
        for (f = t > 0 ? t + 1 : 0; f < g; ) {
            for (l = w, s = 1, d = b; f >= g && o("invalid-input"), p = i(e.charCodeAt(f++)), 
            (p >= b || p > M((x - w) / s)) && o("overflow"), w += p * s, a = d <= j ? y : d >= j + C ? C : d - j, 
            !(p < a); d += b) h = b - a, s > M(x / h) && o("overflow"), s *= h;
            n = v.length + 1, j = c(w - l, n, 0 == l), M(w / n) > x - m && o("overflow"), m += M(w / n), 
            w %= n, v.splice(w++, 0, m);
        }
        return u(v);
    }
    function s(e) {
        var n, t, u, i, l, s, d, p, a, h, v, g, w, m, j, F = [];
        for (e = r(e), g = e.length, n = I, t = 0, l = A, s = 0; s < g; ++s) (v = e[s]) < 128 && F.push(P(v));
        for (u = i = F.length, i && F.push(E); u < g; ) {
            for (d = x, s = 0; s < g; ++s) (v = e[s]) >= n && v < d && (d = v);
            for (w = u + 1, d - n > M((x - t) / w) && o("overflow"), t += (d - n) * w, n = d, 
            s = 0; s < g; ++s) if (v = e[s], v < n && ++t > x && o("overflow"), v == n) {
                for (p = t, a = b; h = a <= l ? y : a >= l + C ? C : a - l, !(p < h); a += b) j = p - h, 
                m = b - h, F.push(P(f(h + j % m, 0))), p = M(j / m);
                F.push(P(f(p, 0))), l = c(t, w, u == i), t = 0, ++u;
            }
            ++t, ++n;
        }
        return F.join("");
    }
    function d(e) {
        return t(e, function(e) {
            return F.test(e) ? l(e.slice(4).toLowerCase()) : e;
        });
    }
    function p(e) {
        return t(e, function(e) {
            return O.test(e) ? "xn--" + s(e) : e;
        });
    }
    var a = "object" == typeof exports && exports && !exports.nodeType && exports, h = "object" == typeof module && module && !module.nodeType && module, v = "object" == typeof global && global;
    v.global !== v && v.window !== v && v.self !== v || (e = v);
    var g, w, x = 2147483647, b = 36, y = 1, C = 26, m = 38, j = 700, A = 72, I = 128, E = "-", F = /^xn--/, O = /[^\x20-\x7E]/, S = /[\x2E\u3002\uFF0E\uFF61]/g, T = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
    }, L = b - y, M = Math.floor, P = String.fromCharCode;
    if (g = {
        version: "1.3.2",
        ucs2: {
            decode: r,
            encode: u
        },
        decode: l,
        encode: s,
        toASCII: p,
        toUnicode: d
    }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function() {
        return g;
    }); else if (a && h) if (module.exports == a) h.exports = g; else for (w in g) g.hasOwnProperty(w) && (a[w] = g[w]); else e.punycode = g;
}(this);