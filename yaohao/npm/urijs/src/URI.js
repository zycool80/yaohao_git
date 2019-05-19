!function(t, e) {
    "use strict";
    "object" == typeof module && module.exports ? module.exports = e(require("./punycode.js"), require("./IPv6.js"), require("./SecondLevelDomains.js")) : "function" == typeof define && define.amd ? define([ "./punycode", "./IPv6", "./SecondLevelDomains" ], e) : t.URI = e(t.punycode, t.IPv6, t.SecondLevelDomains, t);
}(this, function(t, e, r, n) {
    "use strict";
    function s(t, e) {
        var r = arguments.length >= 1, n = arguments.length >= 2;
        if (!(this instanceof s)) return r ? n ? new s(t, e) : new s(t) : new s();
        if (void 0 === t) {
            if (r) throw new TypeError("undefined is not a valid argument for URI");
            t = "undefined" != typeof location ? location.href + "" : "";
        }
        if (null === t && r) throw new TypeError("null is not a valid argument for URI");
        return this.href(t), void 0 !== e ? this.absoluteTo(e) : this;
    }
    function i(t) {
        return /^[0-9]+$/.test(t);
    }
    function a(t) {
        return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    }
    function o(t) {
        return void 0 === t ? "Undefined" : String(Object.prototype.toString.call(t)).slice(8, -1);
    }
    function h(t) {
        return "Array" === o(t);
    }
    function u(t, e) {
        var r, n, s = {};
        if ("RegExp" === o(e)) s = null; else if (h(e)) for (r = 0, n = e.length; r < n; r++) s[e[r]] = !0; else s[e] = !0;
        for (r = 0, n = t.length; r < n; r++) {
            (s && void 0 !== s[t[r]] || !s && e.test(t[r])) && (t.splice(r, 1), n--, r--);
        }
        return t;
    }
    function p(t, e) {
        var r, n;
        if (h(e)) {
            for (r = 0, n = e.length; r < n; r++) if (!p(t, e[r])) return !1;
            return !0;
        }
        var s = o(e);
        for (r = 0, n = t.length; r < n; r++) if ("RegExp" === s) {
            if ("string" == typeof t[r] && t[r].match(e)) return !0;
        } else if (t[r] === e) return !0;
        return !1;
    }
    function c(t, e) {
        if (!h(t) || !h(e)) return !1;
        if (t.length !== e.length) return !1;
        t.sort(), e.sort();
        for (var r = 0, n = t.length; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
    }
    function l(t) {
        var e = /^\/+|\/+$/g;
        return t.replace(e, "");
    }
    function d(t) {
        return escape(t);
    }
    function f(t) {
        return encodeURIComponent(t).replace(/[!'()*]/g, d).replace(/\*/g, "%2A");
    }
    function m(t) {
        return function(e, r) {
            return void 0 === e ? this._parts[t] || "" : (this._parts[t] = e || null, this.build(!r), 
            this);
        };
    }
    function g(t, e) {
        return function(r, n) {
            return void 0 === r ? this._parts[t] || "" : (null !== r && (r += "", r.charAt(0) === e && (r = r.substring(1))), 
            this._parts[t] = r, this.build(!n), this);
        };
    }
    var y = n && n.URI;
    s.version = "1.19.1";
    var v = s.prototype, _ = Object.prototype.hasOwnProperty;
    s._parts = function() {
        return {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            urn: null,
            port: null,
            path: null,
            query: null,
            fragment: null,
            preventInvalidHostname: s.preventInvalidHostname,
            duplicateQueryParameters: s.duplicateQueryParameters,
            escapeQuerySpace: s.escapeQuerySpace
        };
    }, s.preventInvalidHostname = !1, s.duplicateQueryParameters = !1, s.escapeQuerySpace = !0, 
    s.protocol_expression = /^[a-z][a-z0-9.+-]*$/i, s.idn_expression = /[^a-z0-9\._-]/i, 
    s.punycode_expression = /(xn--)/i, s.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, 
    s.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, 
    s.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi, 
    s.findUri = {
        start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
        end: /[\s\r\n]|$/,
        trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,
        parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g
    }, s.defaultPorts = {
        http: "80",
        https: "443",
        ftp: "21",
        gopher: "70",
        ws: "80",
        wss: "443"
    }, s.hostProtocols = [ "http", "https" ], s.invalid_hostname_characters = /[^a-zA-Z0-9\.\-:_]/, 
    s.domAttributes = {
        a: "href",
        blockquote: "cite",
        link: "href",
        base: "href",
        script: "src",
        form: "action",
        img: "src",
        area: "href",
        iframe: "src",
        embed: "src",
        source: "src",
        track: "src",
        input: "src",
        audio: "src",
        video: "src"
    }, s.getDomAttribute = function(t) {
        if (t && t.nodeName) {
            var e = t.nodeName.toLowerCase();
            if ("input" !== e || "image" === t.type) return s.domAttributes[e];
        }
    }, s.encode = f, s.decode = decodeURIComponent, s.iso8859 = function() {
        s.encode = escape, s.decode = unescape;
    }, s.unicode = function() {
        s.encode = f, s.decode = decodeURIComponent;
    }, s.characters = {
        pathname: {
            encode: {
                expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                map: {
                    "%24": "$",
                    "%26": "&",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "=",
                    "%3A": ":",
                    "%40": "@"
                }
            },
            decode: {
                expression: /[\/\?#]/g,
                map: {
                    "/": "%2F",
                    "?": "%3F",
                    "#": "%23"
                }
            }
        },
        reserved: {
            encode: {
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                map: {
                    "%3A": ":",
                    "%2F": "/",
                    "%3F": "?",
                    "%23": "#",
                    "%5B": "[",
                    "%5D": "]",
                    "%40": "@",
                    "%21": "!",
                    "%24": "$",
                    "%26": "&",
                    "%27": "'",
                    "%28": "(",
                    "%29": ")",
                    "%2A": "*",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "="
                }
            }
        },
        urnpath: {
            encode: {
                expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,
                map: {
                    "%21": "!",
                    "%24": "$",
                    "%27": "'",
                    "%28": "(",
                    "%29": ")",
                    "%2A": "*",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "=",
                    "%40": "@"
                }
            },
            decode: {
                expression: /[\/\?#:]/g,
                map: {
                    "/": "%2F",
                    "?": "%3F",
                    "#": "%23",
                    ":": "%3A"
                }
            }
        }
    }, s.encodeQuery = function(t, e) {
        var r = s.encode(t + "");
        return void 0 === e && (e = s.escapeQuerySpace), e ? r.replace(/%20/g, "+") : r;
    }, s.decodeQuery = function(t, e) {
        t += "", void 0 === e && (e = s.escapeQuerySpace);
        try {
            return s.decode(e ? t.replace(/\+/g, "%20") : t);
        } catch (e) {
            return t;
        }
    };
    var b, w = {
        encode: "encode",
        decode: "decode"
    }, Q = function(t, e) {
        return function(r) {
            try {
                return s[e](r + "").replace(s.characters[t][e].expression, function(r) {
                    return s.characters[t][e].map[r];
                });
            } catch (t) {
                return r;
            }
        };
    };
    for (b in w) s[b + "PathSegment"] = Q("pathname", w[b]), s[b + "UrnPathSegment"] = Q("urnpath", w[b]);
    var A = function(t, e, r) {
        return function(n) {
            var i;
            i = r ? function(t) {
                return s[e](s[r](t));
            } : s[e];
            for (var a = (n + "").split(t), o = 0, h = a.length; o < h; o++) a[o] = i(a[o]);
            return a.join(t);
        };
    };
    s.decodePath = A("/", "decodePathSegment"), s.decodeUrnPath = A(":", "decodeUrnPathSegment"), 
    s.recodePath = A("/", "encodePathSegment", "decode"), s.recodeUrnPath = A(":", "encodeUrnPathSegment", "decode"), 
    s.encodeReserved = Q("reserved", "encode"), s.parse = function(t, e) {
        var r;
        return e || (e = {
            preventInvalidHostname: s.preventInvalidHostname
        }), r = t.indexOf("#"), r > -1 && (e.fragment = t.substring(r + 1) || null, t = t.substring(0, r)), 
        r = t.indexOf("?"), r > -1 && (e.query = t.substring(r + 1) || null, t = t.substring(0, r)), 
        "//" === t.substring(0, 2) ? (e.protocol = null, t = t.substring(2), t = s.parseAuthority(t, e)) : (r = t.indexOf(":")) > -1 && (e.protocol = t.substring(0, r) || null, 
        e.protocol && !e.protocol.match(s.protocol_expression) ? e.protocol = void 0 : "//" === t.substring(r + 1, r + 3) ? (t = t.substring(r + 3), 
        t = s.parseAuthority(t, e)) : (t = t.substring(r + 1), e.urn = !0)), e.path = t, 
        e;
    }, s.parseHost = function(t, e) {
        t || (t = ""), t = t.replace(/\\/g, "/");
        var r, n, i = t.indexOf("/");
        if (-1 === i && (i = t.length), "[" === t.charAt(0)) r = t.indexOf("]"), e.hostname = t.substring(1, r) || null, 
        e.port = t.substring(r + 2, i) || null, "/" === e.port && (e.port = null); else {
            var a = t.indexOf(":"), o = t.indexOf("/"), h = t.indexOf(":", a + 1);
            -1 !== h && (-1 === o || h < o) ? (e.hostname = t.substring(0, i) || null, e.port = null) : (n = t.substring(0, i).split(":"), 
            e.hostname = n[0] || null, e.port = n[1] || null);
        }
        return e.hostname && "/" !== t.substring(i).charAt(0) && (i++, t = "/" + t), e.preventInvalidHostname && s.ensureValidHostname(e.hostname, e.protocol), 
        e.port && s.ensureValidPort(e.port), t.substring(i) || "/";
    }, s.parseAuthority = function(t, e) {
        return t = s.parseUserinfo(t, e), s.parseHost(t, e);
    }, s.parseUserinfo = function(t, e) {
        var r, n = t.indexOf("/"), i = t.lastIndexOf("@", n > -1 ? n : t.length - 1);
        return i > -1 && (-1 === n || i < n) ? (r = t.substring(0, i).split(":"), e.username = r[0] ? s.decode(r[0]) : null, 
        r.shift(), e.password = r[0] ? s.decode(r.join(":")) : null, t = t.substring(i + 1)) : (e.username = null, 
        e.password = null), t;
    }, s.parseQuery = function(t, e) {
        if (!t) return {};
        if (!(t = t.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, ""))) return {};
        for (var r, n, i, a = {}, o = t.split("&"), h = o.length, u = 0; u < h; u++) r = o[u].split("="), 
        n = s.decodeQuery(r.shift(), e), i = r.length ? s.decodeQuery(r.join("="), e) : null, 
        _.call(a, n) ? ("string" != typeof a[n] && null !== a[n] || (a[n] = [ a[n] ]), a[n].push(i)) : a[n] = i;
        return a;
    }, s.build = function(t) {
        var e = "";
        return t.protocol && (e += t.protocol + ":"), t.urn || !e && !t.hostname || (e += "//"), 
        e += s.buildAuthority(t) || "", "string" == typeof t.path && ("/" !== t.path.charAt(0) && "string" == typeof t.hostname && (e += "/"), 
        e += t.path), "string" == typeof t.query && t.query && (e += "?" + t.query), "string" == typeof t.fragment && t.fragment && (e += "#" + t.fragment), 
        e;
    }, s.buildHost = function(t) {
        var e = "";
        return t.hostname ? (s.ip6_expression.test(t.hostname) ? e += "[" + t.hostname + "]" : e += t.hostname, 
        t.port && (e += ":" + t.port), e) : "";
    }, s.buildAuthority = function(t) {
        return s.buildUserinfo(t) + s.buildHost(t);
    }, s.buildUserinfo = function(t) {
        var e = "";
        return t.username && (e += s.encode(t.username)), t.password && (e += ":" + s.encode(t.password)), 
        e && (e += "@"), e;
    }, s.buildQuery = function(t, e, r) {
        var n, i, a, o, u = "";
        for (i in t) if (_.call(t, i) && i) if (h(t[i])) for (n = {}, a = 0, o = t[i].length; a < o; a++) void 0 !== t[i][a] && void 0 === n[t[i][a] + ""] && (u += "&" + s.buildQueryParameter(i, t[i][a], r), 
        !0 !== e && (n[t[i][a] + ""] = !0)); else void 0 !== t[i] && (u += "&" + s.buildQueryParameter(i, t[i], r));
        return u.substring(1);
    }, s.buildQueryParameter = function(t, e, r) {
        return s.encodeQuery(t, r) + (null !== e ? "=" + s.encodeQuery(e, r) : "");
    }, s.addQuery = function(t, e, r) {
        if ("object" == typeof e) for (var n in e) _.call(e, n) && s.addQuery(t, n, e[n]); else {
            if ("string" != typeof e) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
            if (void 0 === t[e]) return void (t[e] = r);
            "string" == typeof t[e] && (t[e] = [ t[e] ]), h(r) || (r = [ r ]), t[e] = (t[e] || []).concat(r);
        }
    }, s.setQuery = function(t, e, r) {
        if ("object" == typeof e) for (var n in e) _.call(e, n) && s.setQuery(t, n, e[n]); else {
            if ("string" != typeof e) throw new TypeError("URI.setQuery() accepts an object, string as the name parameter");
            t[e] = void 0 === r ? null : r;
        }
    }, s.removeQuery = function(t, e, r) {
        var n, i, a;
        if (h(e)) for (n = 0, i = e.length; n < i; n++) t[e[n]] = void 0; else if ("RegExp" === o(e)) for (a in t) e.test(a) && (t[a] = void 0); else if ("object" == typeof e) for (a in e) _.call(e, a) && s.removeQuery(t, a, e[a]); else {
            if ("string" != typeof e) throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");
            void 0 !== r ? "RegExp" === o(r) ? !h(t[e]) && r.test(t[e]) ? t[e] = void 0 : t[e] = u(t[e], r) : t[e] !== String(r) || h(r) && 1 !== r.length ? h(t[e]) && (t[e] = u(t[e], r)) : t[e] = void 0 : t[e] = void 0;
        }
    }, s.hasQuery = function(t, e, r, n) {
        switch (o(e)) {
          case "String":
            break;

          case "RegExp":
            for (var i in t) if (_.call(t, i) && e.test(i) && (void 0 === r || s.hasQuery(t, i, r))) return !0;
            return !1;

          case "Object":
            for (var a in e) if (_.call(e, a) && !s.hasQuery(t, a, e[a])) return !1;
            return !0;

          default:
            throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter");
        }
        switch (o(r)) {
          case "Undefined":
            return e in t;

          case "Boolean":
            return r === Boolean(h(t[e]) ? t[e].length : t[e]);

          case "Function":
            return !!r(t[e], e, t);

          case "Array":
            if (!h(t[e])) return !1;
            return (n ? p : c)(t[e], r);

          case "RegExp":
            return h(t[e]) ? !!n && p(t[e], r) : Boolean(t[e] && t[e].match(r));

          case "Number":
            r = String(r);

          case "String":
            return h(t[e]) ? !!n && p(t[e], r) : t[e] === r;

          default:
            throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");
        }
    }, s.joinPaths = function() {
        for (var t = [], e = [], r = 0, n = 0; n < arguments.length; n++) {
            var i = new s(arguments[n]);
            t.push(i);
            for (var a = i.segment(), o = 0; o < a.length; o++) "string" == typeof a[o] && e.push(a[o]), 
            a[o] && r++;
        }
        if (!e.length || !r) return new s("");
        var h = new s("").segment(e);
        return "" !== t[0].path() && "/" !== t[0].path().slice(0, 1) || h.path("/" + h.path()), 
        h.normalize();
    }, s.commonPath = function(t, e) {
        var r, n = Math.min(t.length, e.length);
        for (r = 0; r < n; r++) if (t.charAt(r) !== e.charAt(r)) {
            r--;
            break;
        }
        return r < 1 ? t.charAt(0) === e.charAt(0) && "/" === t.charAt(0) ? "/" : "" : ("/" === t.charAt(r) && "/" === e.charAt(r) || (r = t.substring(0, r).lastIndexOf("/")), 
        t.substring(0, r + 1));
    }, s.withinString = function(t, e, r) {
        r || (r = {});
        var n = r.start || s.findUri.start, i = r.end || s.findUri.end, a = r.trim || s.findUri.trim, o = r.parens || s.findUri.parens, h = /[a-z0-9-]=["']?$/i;
        for (n.lastIndex = 0; ;) {
            var u = n.exec(t);
            if (!u) break;
            var p = u.index;
            if (r.ignoreHtml) {
                var c = t.slice(Math.max(p - 3, 0), p);
                if (c && h.test(c)) continue;
            }
            for (var l = p + t.slice(p).search(i), d = t.slice(p, l), f = -1; ;) {
                var m = o.exec(d);
                if (!m) break;
                var g = m.index + m[0].length;
                f = Math.max(f, g);
            }
            if (d = f > -1 ? d.slice(0, f) + d.slice(f).replace(a, "") : d.replace(a, ""), !(d.length <= u[0].length || r.ignore && r.ignore.test(d))) {
                l = p + d.length;
                var y = e(d, p, l, t);
                void 0 !== y ? (y = String(y), t = t.slice(0, p) + y + t.slice(l), n.lastIndex = p + y.length) : n.lastIndex = l;
            }
        }
        return n.lastIndex = 0, t;
    }, s.ensureValidHostname = function(e, r) {
        var n = !!e, i = !!r, a = !1;
        if (i && (a = p(s.hostProtocols, r)), a && !n) throw new TypeError("Hostname cannot be empty, if protocol is " + r);
        if (e && e.match(s.invalid_hostname_characters)) {
            if (!t) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');
            if (t.toASCII(e).match(s.invalid_hostname_characters)) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-:_]');
        }
    }, s.ensureValidPort = function(t) {
        if (t) {
            var e = Number(t);
            if (!(i(e) && e > 0 && e < 65536)) throw new TypeError('Port "' + t + '" is not a valid port');
        }
    }, s.noConflict = function(t) {
        if (t) {
            var e = {
                URI: this.noConflict()
            };
            return n.URITemplate && "function" == typeof n.URITemplate.noConflict && (e.URITemplate = n.URITemplate.noConflict()), 
            n.IPv6 && "function" == typeof n.IPv6.noConflict && (e.IPv6 = n.IPv6.noConflict()), 
            n.SecondLevelDomains && "function" == typeof n.SecondLevelDomains.noConflict && (e.SecondLevelDomains = n.SecondLevelDomains.noConflict()), 
            e;
        }
        return n.URI === this && (n.URI = y), this;
    }, v.build = function(t) {
        return !0 === t ? this._deferred_build = !0 : (void 0 === t || this._deferred_build) && (this._string = s.build(this._parts), 
        this._deferred_build = !1), this;
    }, v.clone = function() {
        return new s(this);
    }, v.valueOf = v.toString = function() {
        return this.build(!1)._string;
    }, v.protocol = m("protocol"), v.username = m("username"), v.password = m("password"), 
    v.hostname = m("hostname"), v.port = m("port"), v.query = g("query", "?"), v.fragment = g("fragment", "#"), 
    v.search = function(t, e) {
        var r = this.query(t, e);
        return "string" == typeof r && r.length ? "?" + r : r;
    }, v.hash = function(t, e) {
        var r = this.fragment(t, e);
        return "string" == typeof r && r.length ? "#" + r : r;
    }, v.pathname = function(t, e) {
        if (void 0 === t || !0 === t) {
            var r = this._parts.path || (this._parts.hostname ? "/" : "");
            return t ? (this._parts.urn ? s.decodeUrnPath : s.decodePath)(r) : r;
        }
        return this._parts.urn ? this._parts.path = t ? s.recodeUrnPath(t) : "" : this._parts.path = t ? s.recodePath(t) : "/", 
        this.build(!e), this;
    }, v.path = v.pathname, v.href = function(t, e) {
        var r;
        if (void 0 === t) return this.toString();
        this._string = "", this._parts = s._parts();
        var n = t instanceof s, i = "object" == typeof t && (t.hostname || t.path || t.pathname);
        if (t.nodeName) {
            t = t[s.getDomAttribute(t)] || "", i = !1;
        }
        if (!n && i && void 0 !== t.pathname && (t = t.toString()), "string" == typeof t || t instanceof String) this._parts = s.parse(String(t), this._parts); else {
            if (!n && !i) throw new TypeError("invalid input");
            var a = n ? t._parts : t;
            for (r in a) "query" !== r && _.call(this._parts, r) && (this._parts[r] = a[r]);
            a.query && this.query(a.query, !1);
        }
        return this.build(!e), this;
    }, v.is = function(t) {
        var e = !1, n = !1, i = !1, a = !1, o = !1, h = !1, u = !1, p = !this._parts.urn;
        switch (this._parts.hostname && (p = !1, n = s.ip4_expression.test(this._parts.hostname), 
        i = s.ip6_expression.test(this._parts.hostname), e = n || i, a = !e, o = a && r && r.has(this._parts.hostname), 
        h = a && s.idn_expression.test(this._parts.hostname), u = a && s.punycode_expression.test(this._parts.hostname)), 
        t.toLowerCase()) {
          case "relative":
            return p;

          case "absolute":
            return !p;

          case "domain":
          case "name":
            return a;

          case "sld":
            return o;

          case "ip":
            return e;

          case "ip4":
          case "ipv4":
          case "inet4":
            return n;

          case "ip6":
          case "ipv6":
          case "inet6":
            return i;

          case "idn":
            return h;

          case "url":
            return !this._parts.urn;

          case "urn":
            return !!this._parts.urn;

          case "punycode":
            return u;
        }
        return null;
    };
    var P = v.protocol, x = v.port, I = v.hostname;
    v.protocol = function(t, e) {
        if (t && (t = t.replace(/:(\/\/)?$/, ""), !t.match(s.protocol_expression))) throw new TypeError('Protocol "' + t + "\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");
        return P.call(this, t, e);
    }, v.scheme = v.protocol, v.port = function(t, e) {
        return this._parts.urn ? void 0 === t ? "" : this : (void 0 !== t && (0 === t && (t = null), 
        t && (t += "", ":" === t.charAt(0) && (t = t.substring(1)), s.ensureValidPort(t))), 
        x.call(this, t, e));
    }, v.hostname = function(t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (void 0 !== t) {
            var r = {
                preventInvalidHostname: this._parts.preventInvalidHostname
            };
            if ("/" !== s.parseHost(t, r)) throw new TypeError('Hostname "' + t + '" contains characters other than [A-Z0-9.-]');
            t = r.hostname, this._parts.preventInvalidHostname && s.ensureValidHostname(t, this._parts.protocol);
        }
        return I.call(this, t, e);
    }, v.origin = function(t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (void 0 === t) {
            var r = this.protocol();
            return this.authority() ? (r ? r + "://" : "") + this.authority() : "";
        }
        var n = s(t);
        return this.protocol(n.protocol()).authority(n.authority()).build(!e), this;
    }, v.host = function(t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (void 0 === t) return this._parts.hostname ? s.buildHost(this._parts) : "";
        if ("/" !== s.parseHost(t, this._parts)) throw new TypeError('Hostname "' + t + '" contains characters other than [A-Z0-9.-]');
        return this.build(!e), this;
    }, v.authority = function(t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (void 0 === t) return this._parts.hostname ? s.buildAuthority(this._parts) : "";
        if ("/" !== s.parseAuthority(t, this._parts)) throw new TypeError('Hostname "' + t + '" contains characters other than [A-Z0-9.-]');
        return this.build(!e), this;
    }, v.userinfo = function(t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (void 0 === t) {
            var r = s.buildUserinfo(this._parts);
            return r ? r.substring(0, r.length - 1) : r;
        }
        return "@" !== t[t.length - 1] && (t += "@"), s.parseUserinfo(t, this._parts), this.build(!e), 
        this;
    }, v.resource = function(t, e) {
        var r;
        return void 0 === t ? this.path() + this.search() + this.hash() : (r = s.parse(t), 
        this._parts.path = r.path, this._parts.query = r.query, this._parts.fragment = r.fragment, 
        this.build(!e), this);
    }, v.subdomain = function(t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (void 0 === t) {
            if (!this._parts.hostname || this.is("IP")) return "";
            var r = this._parts.hostname.length - this.domain().length - 1;
            return this._parts.hostname.substring(0, r) || "";
        }
        var n = this._parts.hostname.length - this.domain().length, i = this._parts.hostname.substring(0, n), o = new RegExp("^" + a(i));
        if (t && "." !== t.charAt(t.length - 1) && (t += "."), -1 !== t.indexOf(":")) throw new TypeError("Domains cannot contain colons");
        return t && s.ensureValidHostname(t, this._parts.protocol), this._parts.hostname = this._parts.hostname.replace(o, t), 
        this.build(!e), this;
    }, v.domain = function(t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if ("boolean" == typeof t && (e = t, t = void 0), void 0 === t) {
            if (!this._parts.hostname || this.is("IP")) return "";
            var r = this._parts.hostname.match(/\./g);
            if (r && r.length < 2) return this._parts.hostname;
            var n = this._parts.hostname.length - this.tld(e).length - 1;
            return n = this._parts.hostname.lastIndexOf(".", n - 1) + 1, this._parts.hostname.substring(n) || "";
        }
        if (!t) throw new TypeError("cannot set domain empty");
        if (-1 !== t.indexOf(":")) throw new TypeError("Domains cannot contain colons");
        if (s.ensureValidHostname(t, this._parts.protocol), !this._parts.hostname || this.is("IP")) this._parts.hostname = t; else {
            var i = new RegExp(a(this.domain()) + "$");
            this._parts.hostname = this._parts.hostname.replace(i, t);
        }
        return this.build(!e), this;
    }, v.tld = function(t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if ("boolean" == typeof t && (e = t, t = void 0), void 0 === t) {
            if (!this._parts.hostname || this.is("IP")) return "";
            var n = this._parts.hostname.lastIndexOf("."), s = this._parts.hostname.substring(n + 1);
            return !0 !== e && r && r.list[s.toLowerCase()] ? r.get(this._parts.hostname) || s : s;
        }
        var i;
        if (!t) throw new TypeError("cannot set TLD empty");
        if (t.match(/[^a-zA-Z0-9-]/)) {
            if (!r || !r.is(t)) throw new TypeError('TLD "' + t + '" contains characters other than [A-Z0-9]');
            i = new RegExp(a(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(i, t);
        } else {
            if (!this._parts.hostname || this.is("IP")) throw new ReferenceError("cannot set TLD on non-domain host");
            i = new RegExp(a(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(i, t);
        }
        return this.build(!e), this;
    }, v.directory = function(t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (void 0 === t || !0 === t) {
            if (!this._parts.path && !this._parts.hostname) return "";
            if ("/" === this._parts.path) return "/";
            var r = this._parts.path.length - this.filename().length - 1, n = this._parts.path.substring(0, r) || (this._parts.hostname ? "/" : "");
            return t ? s.decodePath(n) : n;
        }
        var i = this._parts.path.length - this.filename().length, o = this._parts.path.substring(0, i), h = new RegExp("^" + a(o));
        return this.is("relative") || (t || (t = "/"), "/" !== t.charAt(0) && (t = "/" + t)), 
        t && "/" !== t.charAt(t.length - 1) && (t += "/"), t = s.recodePath(t), this._parts.path = this._parts.path.replace(h, t), 
        this.build(!e), this;
    }, v.filename = function(t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if ("string" != typeof t) {
            if (!this._parts.path || "/" === this._parts.path) return "";
            var r = this._parts.path.lastIndexOf("/"), n = this._parts.path.substring(r + 1);
            return t ? s.decodePathSegment(n) : n;
        }
        var i = !1;
        "/" === t.charAt(0) && (t = t.substring(1)), t.match(/\.?\//) && (i = !0);
        var o = new RegExp(a(this.filename()) + "$");
        return t = s.recodePath(t), this._parts.path = this._parts.path.replace(o, t), i ? this.normalizePath(e) : this.build(!e), 
        this;
    }, v.suffix = function(t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (void 0 === t || !0 === t) {
            if (!this._parts.path || "/" === this._parts.path) return "";
            var r, n, i = this.filename(), o = i.lastIndexOf(".");
            return -1 === o ? "" : (r = i.substring(o + 1), n = /^[a-z0-9%]+$/i.test(r) ? r : "", 
            t ? s.decodePathSegment(n) : n);
        }
        "." === t.charAt(0) && (t = t.substring(1));
        var h, u = this.suffix();
        if (u) h = t ? new RegExp(a(u) + "$") : new RegExp(a("." + u) + "$"); else {
            if (!t) return this;
            this._parts.path += "." + s.recodePath(t);
        }
        return h && (t = s.recodePath(t), this._parts.path = this._parts.path.replace(h, t)), 
        this.build(!e), this;
    }, v.segment = function(t, e, r) {
        var n = this._parts.urn ? ":" : "/", s = this.path(), i = "/" === s.substring(0, 1), a = s.split(n);
        if (void 0 !== t && "number" != typeof t && (r = e, e = t, t = void 0), void 0 !== t && "number" != typeof t) throw new Error('Bad segment "' + t + '", must be 0-based integer');
        if (i && a.shift(), t < 0 && (t = Math.max(a.length + t, 0)), void 0 === e) return void 0 === t ? a : a[t];
        if (null === t || void 0 === a[t]) if (h(e)) {
            a = [];
            for (var o = 0, u = e.length; o < u; o++) (e[o].length || a.length && a[a.length - 1].length) && (a.length && !a[a.length - 1].length && a.pop(), 
            a.push(l(e[o])));
        } else (e || "string" == typeof e) && (e = l(e), "" === a[a.length - 1] ? a[a.length - 1] = e : a.push(e)); else e ? a[t] = l(e) : a.splice(t, 1);
        return i && a.unshift(""), this.path(a.join(n), r);
    }, v.segmentCoded = function(t, e, r) {
        var n, i, a;
        if ("number" != typeof t && (r = e, e = t, t = void 0), void 0 === e) {
            if (n = this.segment(t, e, r), h(n)) for (i = 0, a = n.length; i < a; i++) n[i] = s.decode(n[i]); else n = void 0 !== n ? s.decode(n) : void 0;
            return n;
        }
        if (h(e)) for (i = 0, a = e.length; i < a; i++) e[i] = s.encode(e[i]); else e = "string" == typeof e || e instanceof String ? s.encode(e) : e;
        return this.segment(t, e, r);
    };
    var S = v.query;
    return v.query = function(t, e) {
        if (!0 === t) return s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ("function" == typeof t) {
            var r = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace), n = t.call(this, r);
            return this._parts.query = s.buildQuery(n || r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), 
            this.build(!e), this;
        }
        return void 0 !== t && "string" != typeof t ? (this._parts.query = s.buildQuery(t, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), 
        this.build(!e), this) : S.call(this, t, e);
    }, v.setQuery = function(t, e, r) {
        var n = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ("string" == typeof t || t instanceof String) n[t] = void 0 !== e ? e : null; else {
            if ("object" != typeof t) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
            for (var i in t) _.call(t, i) && (n[i] = t[i]);
        }
        return this._parts.query = s.buildQuery(n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), 
        "string" != typeof t && (r = e), this.build(!r), this;
    }, v.addQuery = function(t, e, r) {
        var n = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return s.addQuery(n, t, void 0 === e ? null : e), this._parts.query = s.buildQuery(n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), 
        "string" != typeof t && (r = e), this.build(!r), this;
    }, v.removeQuery = function(t, e, r) {
        var n = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return s.removeQuery(n, t, e), this._parts.query = s.buildQuery(n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), 
        "string" != typeof t && (r = e), this.build(!r), this;
    }, v.hasQuery = function(t, e, r) {
        var n = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return s.hasQuery(n, t, e, r);
    }, v.setSearch = v.setQuery, v.addSearch = v.addQuery, v.removeSearch = v.removeQuery, 
    v.hasSearch = v.hasQuery, v.normalize = function() {
        return this._parts.urn ? this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build();
    }, v.normalizeProtocol = function(t) {
        return "string" == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), 
        this.build(!t)), this;
    }, v.normalizeHostname = function(r) {
        return this._parts.hostname && (this.is("IDN") && t ? this._parts.hostname = t.toASCII(this._parts.hostname) : this.is("IPv6") && e && (this._parts.hostname = e.best(this._parts.hostname)), 
        this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!r)), this;
    }, v.normalizePort = function(t) {
        return "string" == typeof this._parts.protocol && this._parts.port === s.defaultPorts[this._parts.protocol] && (this._parts.port = null, 
        this.build(!t)), this;
    }, v.normalizePath = function(t) {
        var e = this._parts.path;
        if (!e) return this;
        if (this._parts.urn) return this._parts.path = s.recodeUrnPath(this._parts.path), 
        this.build(!t), this;
        if ("/" === this._parts.path) return this;
        e = s.recodePath(e);
        var r, n, i, a = "";
        for ("/" !== e.charAt(0) && (r = !0, e = "/" + e), "/.." !== e.slice(-3) && "/." !== e.slice(-2) || (e += "/"), 
        e = e.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/"), r && (a = e.substring(1).match(/^(\.\.\/)+/) || "") && (a = a[0]); ;) {
            if (-1 === (n = e.search(/\/\.\.(\/|$)/))) break;
            0 !== n ? (i = e.substring(0, n).lastIndexOf("/"), -1 === i && (i = n), e = e.substring(0, i) + e.substring(n + 3)) : e = e.substring(3);
        }
        return r && this.is("relative") && (e = a + e.substring(1)), this._parts.path = e, 
        this.build(!t), this;
    }, v.normalizePathname = v.normalizePath, v.normalizeQuery = function(t) {
        return "string" == typeof this._parts.query && (this._parts.query.length ? this.query(s.parseQuery(this._parts.query, this._parts.escapeQuerySpace)) : this._parts.query = null, 
        this.build(!t)), this;
    }, v.normalizeFragment = function(t) {
        return this._parts.fragment || (this._parts.fragment = null, this.build(!t)), this;
    }, v.normalizeSearch = v.normalizeQuery, v.normalizeHash = v.normalizeFragment, 
    v.iso8859 = function() {
        var t = s.encode, e = s.decode;
        s.encode = escape, s.decode = decodeURIComponent;
        try {
            this.normalize();
        } finally {
            s.encode = t, s.decode = e;
        }
        return this;
    }, v.unicode = function() {
        var t = s.encode, e = s.decode;
        s.encode = f, s.decode = unescape;
        try {
            this.normalize();
        } finally {
            s.encode = t, s.decode = e;
        }
        return this;
    }, v.readable = function() {
        var e = this.clone();
        e.username("").password("").normalize();
        var r = "";
        if (e._parts.protocol && (r += e._parts.protocol + "://"), e._parts.hostname && (e.is("punycode") && t ? (r += t.toUnicode(e._parts.hostname), 
        e._parts.port && (r += ":" + e._parts.port)) : r += e.host()), e._parts.hostname && e._parts.path && "/" !== e._parts.path.charAt(0) && (r += "/"), 
        r += e.path(!0), e._parts.query) {
            for (var n = "", i = 0, a = e._parts.query.split("&"), o = a.length; i < o; i++) {
                var h = (a[i] || "").split("=");
                n += "&" + s.decodeQuery(h[0], this._parts.escapeQuerySpace).replace(/&/g, "%26"), 
                void 0 !== h[1] && (n += "=" + s.decodeQuery(h[1], this._parts.escapeQuerySpace).replace(/&/g, "%26"));
            }
            r += "?" + n.substring(1);
        }
        return r += s.decodeQuery(e.hash(), !0);
    }, v.absoluteTo = function(t) {
        var e, r, n, i = this.clone(), a = [ "protocol", "username", "password", "hostname", "port" ];
        if (this._parts.urn) throw new Error("URNs do not have any generally defined hierarchical components");
        if (t instanceof s || (t = new s(t)), i._parts.protocol) return i;
        if (i._parts.protocol = t._parts.protocol, this._parts.hostname) return i;
        for (r = 0; n = a[r]; r++) i._parts[n] = t._parts[n];
        return i._parts.path ? (".." === i._parts.path.substring(-2) && (i._parts.path += "/"), 
        "/" !== i.path().charAt(0) && (e = t.directory(), e = e || (0 === t.path().indexOf("/") ? "/" : ""), 
        i._parts.path = (e ? e + "/" : "") + i._parts.path, i.normalizePath())) : (i._parts.path = t._parts.path, 
        i._parts.query || (i._parts.query = t._parts.query)), i.build(), i;
    }, v.relativeTo = function(t) {
        var e, r, n, i, a, o = this.clone().normalize();
        if (o._parts.urn) throw new Error("URNs do not have any generally defined hierarchical components");
        if (t = new s(t).normalize(), e = o._parts, r = t._parts, i = o.path(), a = t.path(), 
        "/" !== i.charAt(0)) throw new Error("URI is already relative");
        if ("/" !== a.charAt(0)) throw new Error("Cannot calculate a URI relative to another relative URI");
        if (e.protocol === r.protocol && (e.protocol = null), e.username !== r.username || e.password !== r.password) return o.build();
        if (null !== e.protocol || null !== e.username || null !== e.password) return o.build();
        if (e.hostname !== r.hostname || e.port !== r.port) return o.build();
        if (e.hostname = null, e.port = null, i === a) return e.path = "", o.build();
        if (!(n = s.commonPath(i, a))) return o.build();
        var h = r.path.substring(n.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "../");
        return e.path = h + e.path.substring(n.length) || "./", o.build();
    }, v.equals = function(t) {
        var e, r, n, i = this.clone(), a = new s(t), o = {}, u = {}, p = {};
        if (i.normalize(), a.normalize(), i.toString() === a.toString()) return !0;
        if (e = i.query(), r = a.query(), i.query(""), a.query(""), i.toString() !== a.toString()) return !1;
        if (e.length !== r.length) return !1;
        o = s.parseQuery(e, this._parts.escapeQuerySpace), u = s.parseQuery(r, this._parts.escapeQuerySpace);
        for (n in o) if (_.call(o, n)) {
            if (h(o[n])) {
                if (!c(o[n], u[n])) return !1;
            } else if (o[n] !== u[n]) return !1;
            p[n] = !0;
        }
        for (n in u) if (_.call(u, n) && !p[n]) return !1;
        return !0;
    }, v.preventInvalidHostname = function(t) {
        return this._parts.preventInvalidHostname = !!t, this;
    }, v.duplicateQueryParameters = function(t) {
        return this._parts.duplicateQueryParameters = !!t, this;
    }, v.escapeQuerySpace = function(t) {
        return this._parts.escapeQuerySpace = !!t, this;
    }, s;
});