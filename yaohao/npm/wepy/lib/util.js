function isImmutable(t) {
    return !(!t || "object" !== (void 0 === t ? "undefined" : _typeof(t))) && !![ "@@__IMMUTABLE_ITERABLE__@@", "@@__IMMUTABLE_KEYED__@@", "@@__IMMUTABLE_INDEXED__@@", "@@__IMMUTABLE_ORDERED__@@", "@@__IMMUTABLE_RECORD__@@" ].filter(function(e) {
        return t[e];
    }).length;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

exports.default = {
    $isEmpty: function(t) {
        return 0 === Object.keys(t).length;
    },
    $isEqual: function(t, e, r, n) {
        if (isImmutable(t)) return t.equals(e);
        if (isImmutable(e)) return e.equals(t);
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (t !== t) return e !== e;
        if (!t || !e) return t === e;
        var o = void 0 === t ? "undefined" : _typeof(t);
        return ("function" === o || "object" === o || "object" === (void 0 === e ? "undefined" : _typeof(e))) && this.$isDeepEqual(t, e, r, n);
    },
    $isDeepEqual: function(t, e, r, n) {
        isImmutable(t) && (t = t.toJS()), isImmutable(e) && (e = e.toJS());
        var o = this, i = toString.call(t);
        if (i !== toString.call(e)) return !1;
        switch (i) {
          case "[object RegExp]":
          case "[object String]":
            return "" + t == "" + e;

          case "[object Number]":
            return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;

          case "[object Date]":
          case "[object Boolean]":
            return +t == +e;

          case "[object Symbol]":
            var u = "undefined" != typeof Symbol ? Symbol.prototype : null;
            return u.valueOf.call(t) === u.valueOf.call(e);
        }
        var c = "[object Array]" === i;
        if (!c) {
            if ("object" !== (void 0 === t ? "undefined" : _typeof(t)) || "object" !== (void 0 === e ? "undefined" : _typeof(e))) return t === e;
            var a = t.constructor, l = e.constructor;
            if (a !== l && !("function" == typeof a && a instanceof a && "function" == typeof l && l instanceof l) && "constructor" in t && "constructor" in e) return !1;
        }
        r = r || [], n = n || [];
        for (var f = r.length; f--; ) if (r[f] === t) return n[f] === e;
        if (r.push(t), n.push(e), c) {
            if ((f = t.length) !== e.length) return !1;
            for (;f--; ) if (!o.$isEqual(t[f], e[f], r, n)) return !1;
        } else {
            var s, p = Object.keys(t);
            if (f = p.length, Object.keys(e).length !== f) return !1;
            for (;f--; ) if (s = p[f], !o.$has(e, s) || !o.$isEqual(t[s], e[s], r, n)) return !1;
        }
        return r.pop(), n.pop(), !0;
    },
    $has: function(t, e) {
        if ("[object Array]" !== toString.call(e)) return t && hasOwnProperty.call(t, e);
        for (var r = e.length, n = 0; n < r; n++) {
            var o = e[n];
            if (!t || !hasOwnProperty.call(t, o)) return !1;
            t = t[o];
        }
        return !!r;
    },
    $extend: function() {
        var t, e, r, n, o, i, u = arguments[0] || {}, c = 1, a = arguments.length, l = !1, f = this;
        for ("boolean" == typeof u && (l = u, u = arguments[c] || {}, c++), "object" !== (void 0 === u ? "undefined" : _typeof(u)) && "function" != typeof u && (u = {}), 
        c === a && (u = this, c--); c < a; c++) if (t = arguments[c]) for (e in t) r = u[e], 
        n = t[e], u !== n && (l && n && (f.$isPlainObject(n) || (o = Array.isArray(n))) ? (o ? (o = !1, 
        i = r && Array.isArray(r) ? r : []) : i = r && f.$isPlainObject(r) ? r : {}, u[e] = f.$extend(l, i, n)) : u[e] = n);
        return u;
    },
    $copy: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Array.isArray(t) ? this.$extend(e, [], t) : "" + t == "null" ? t : "object" === (void 0 === t ? "undefined" : _typeof(t)) ? isImmutable(t) ? t : this.$extend(e, {}, t) : t;
    },
    $isPlainObject: function(t) {
        var e, r;
        return !(!t || "[object Object]" !== Object.prototype.toString.call(t)) && (!(e = Object.getPrototypeOf(t)) || "function" == typeof (r = Object.prototype.hasOwnProperty.call(e, "constructor") && e.constructor) && Object.prototype.hasOwnProperty.toString.call(r) === Object.prototype.hasOwnProperty.toString.call(Object));
    },
    $resolvePath: function(t, e) {
        if (!e) return t;
        if ("/" === e[0]) return e = e.substr(1), this.$resolvePath("", e);
        if ("." !== e[0]) return this.$resolvePath(t, "./" + e);
        var r = t.split("/");
        return "." === e[0] && "/" === e[1] ? (e = e.substr(2), "." !== e[0] ? (r.length ? r[r.length - 1] = e : r = [ e ], 
        1 === r.length ? "/" + r[0] : r.join("/")) : this.$resolvePath(r.join("/"), e)) : "." === e[0] && "." === e[1] && "/" === e[2] ? (e = e.replace(/^\.*/gi, ""), 
        r.pop(), this.$resolvePath(r.join("/"), "." + e)) : "." === e[0] ? this.$resolvePath(t, e.substr(1)) : void 0;
    },
    $getParams: function(t) {
        var e = {}, r = t.indexOf("?");
        if (-1 !== r) {
            var n = t.substr(r + 1), o = void 0;
            n.split("&").forEach(function(t) {
                o = t.split("="), e[o[0]] = decodeURIComponent(o[1]);
            });
        }
        return e;
    },
    isImmutable: isImmutable,
    hyphenate: function(t) {
        return t.replace(/([^-])([A-Z])/g, "$1-$2").replace(/([^-])([A-Z])/g, "$1-$2").toLowerCase();
    },
    camelize: function(t) {
        return t.replace(/-(\w)/g, function(t, e) {
            return e ? e.toUpperCase() : "";
        });
    }
};