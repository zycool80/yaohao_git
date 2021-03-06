function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function keyCheck(t, e) {
    return "function" == typeof t[e] ? (console.warn('You are not allowed to define a function "' + e + '" in data.'), 
    0) : -1 !== [ "data", "props", "methods", "events", "mixins" ].indexOf(e) ? (console.warn('"' + e + '" is reserved word, please fix it.'), 
    0) : "$" === e[0] ? (console.warn('"' + e + ': You can not define a property started with "$"'), 
    0) : 1;
}

function getEventsFn(t, e) {
    var i = t.events ? t.events[e] : t.$events[e] ? t.$events[e] : void 0, n = void 0 === i ? "undefined" : _typeof(i), o = void 0;
    if ("string" === n) {
        var a = t.methods && t.methods[i];
        "function" == typeof a && (o = a);
    } else ("function" === n || Array.isArray(i)) && (o = i);
    return o;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e;
    };
}(), _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, _event = require("./event.js"), _event2 = _interopRequireDefault(_event), _util = require("./util.js"), _util2 = _interopRequireDefault(_util), Props = {
    check: function(t, e) {
        switch (t) {
          case String:
            return "string" == typeof e;

          case Number:
            return "number" == typeof e;

          case Boolean:
            return "boolean" == typeof e;

          case Function:
            return "function" == typeof e;

          case Object:
            return "object" === (void 0 === e ? "undefined" : _typeof(e));

          case Array:
            return "[object Array]" === toString.call(e);

          default:
            return e instanceof t;
        }
    },
    build: function(t) {
        var e = {};
        return "string" == typeof t ? e[t] = {} : "[object Array]" === toString.call(t) ? t.forEach(function(t) {
            e[t] = {};
        }) : Object.keys(t).forEach(function(i) {
            "function" == typeof t[i] ? e[i] = {
                type: [ t[i] ]
            } : "[object Array]" === toString.call(t[i]) ? e[i] = {
                type: t[i]
            } : e[i] = t[i], e[i].type && "[object Array]" !== toString.call(e[i].type) && (e[i].type = [ e[i].type ]);
        }), e;
    },
    valid: function(t, e, i) {
        var n = this, o = !1;
        if (t[e]) {
            if (t[e].type) return t[e].type.some(function(t) {
                return n.check(t, i);
            });
            o = !0;
        }
        return o;
    },
    getValue: function(t, e, i, n) {
        var o;
        return o = void 0 !== i && this.valid(t, e, i) ? i : "function" == typeof t[e].default ? t[e].default() : t[e].default, 
        t[e].coerce ? t[e].coerce.call(n, o) : o;
    }
}, _class = function() {
    function t() {
        _classCallCheck(this, t), this.$com = {}, this.$events = {}, this.$mixins = [], 
        this.$isComponent = !0, this.$prefix = "", this.$mappingProps = {}, this.data = {}, 
        this.methods = {};
    }
    return _createClass(t, [ {
        key: "$init",
        value: function(t, e, i) {
            var n = this;
            this.$wxpage = t, this.$isComponent && (this.$root = e || this.$root, this.$parent = i || this.$parent, 
            this.$wxapp = this.$root.$parent.$wxapp), this.props && (this.props = Props.build(this.props));
            var o = void 0, a = {}, r = this.props, s = void 0, p = void 0, f = void 0, h = !1, c = void 0;
            if (void 0 === this.$initData ? this.$initData = _util2.default.$copy(this.data, !0) : this.data = _util2.default.$copy(this.$initData, !0), 
            this.$props) for (s in this.$props) for (f in this.$props[s]) /\.sync$/.test(f) && (this.$mappingProps[this.$props[s][f]] || (this.$mappingProps[this.$props[s][f]] = {}), 
            this.$mappingProps[this.$props[s][f]][s] = f.substring(7, f.length - 5));
            if (r) for (s in r) keyCheck(this, s) && (p = void 0, i && i.$props && i.$props[this.$name] && (p = i.$props[this.$name][s], 
            f = i.$props[this.$name]["v-bind:" + s + ".once"] || i.$props[this.$name]["v-bind:" + s + ".sync"], 
            f ? "object" === (void 0 === f ? "undefined" : _typeof(f)) ? function() {
                r[s].repeat = f.for, r[s].item = f.item, r[s].index = f.index, r[s].key = f.key, 
                r[s].value = f.value, h = !0;
                var t = f.for, e = i;
                t.split(".").forEach(function(t) {
                    e = e ? e[t] : {};
                }), !e || "object" !== (void 0 === e ? "undefined" : _typeof(e)) && "string" != typeof e || (c = Object.keys(e)[0]), 
                n.$mappingProps[s] || (n.$mappingProps[s] = {}), n.$mappingProps[s].parent = {
                    mapping: f.for,
                    from: s
                };
            }() : (p = i[f], r[s].twoWay && (this.$mappingProps[s] || (this.$mappingProps[s] = {}), 
            this.$mappingProps[s].parent = f)) : "object" === (void 0 === p ? "undefined" : _typeof(p)) && void 0 !== p.value && (this.data[s] = p.value)), 
            this.data[s] || r[s].repeat || (p = Props.getValue(r, s, p, this), this.data[s] = p));
            "function" == typeof this.data && (this.data = this.data.apply(this.data));
            for (o in this.data) keyCheck(this, o) && (a["" + this.$prefix + o] = this.data[o], 
            this[o] = this.data[o]);
            if (this.$data = _util2.default.$copy(this.data, !0), h && void 0 !== c && this.$setIndex(c), 
            this.computed) for (o in this.computed) if (keyCheck(this, o)) {
                var u = this.computed[o];
                a["" + this.$prefix + o] = u.call(this), this[o] = _util2.default.$copy(a["" + this.$prefix + o], !0);
            }
            this.setData(a);
            var $ = Object.getOwnPropertyNames(this.$com);
            $.length && $.forEach(function(t) {
                n.$com[t].$init(n.getWxPage(), e, n);
            });
        }
    }, {
        key: "$initMixins",
        value: function() {
            var t = this;
            this.mixins ? "function" == typeof this.mixins && (this.mixins = [ this.mixins ]) : this.mixins = [], 
            this.mixins.forEach(function(e) {
                var i = new e();
                i.$init(t), t.$mixins.push(i);
            });
        }
    }, {
        key: "$onLoad",
        value: function() {
            for (var t = this, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
            [].concat(this.$mixins, this).forEach(function(e) {
                e.onLoad && e.onLoad.apply(t, i);
            });
            var o = Object.getOwnPropertyNames(this.$com);
            o.length && o.forEach(function(e) {
                var i = t.$com[e];
                i.$onLoad.call(i);
            });
        }
    }, {
        key: "$onUnload",
        value: function() {
            for (var t = this, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
            var o = Object.getOwnPropertyNames(this.$com);
            o.length && o.forEach(function(e) {
                var i = t.$com[e];
                i.$onUnload.call(i);
            }), [].concat(this.$mixins, this).forEach(function(e) {
                e.onUnload && e.onUnload.apply(t, i);
            });
        }
    }, {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onUnload",
        value: function() {}
    }, {
        key: "setData",
        value: function(t, e) {
            if ("string" == typeof t) {
                if (e) {
                    var i = {};
                    i[t] = e, t = i;
                } else {
                    var n = {};
                    n[t] = this.data["" + t], t = n;
                }
                return this.$wxpage.setData(t);
            }
            var o = null, a = new RegExp("^" + this.$prefix.replace(/\$/g, "\\$"), "ig");
            for (o in t) {
                var r = o.replace(a, "");
                this.$data[r] = _util2.default.$copy(t[o], !0), _util2.default.isImmutable(t[o]) && (t[o] = t[o].toJS()), 
                void 0 === t[o] && delete t[o];
            }
            return "function" == typeof e ? this.$root.$wxpage.setData(t, e) : this.$root.$wxpage.setData(t);
        }
    }, {
        key: "getWxPage",
        value: function() {
            return this.$wxpage;
        }
    }, {
        key: "getCurrentPages",
        value: function(t) {
            function e() {
                return t.apply(this, arguments);
            }
            return e.toString = function() {
                return t.toString();
            }, e;
        }(function() {
            return getCurrentPages();
        })
    }, {
        key: "$setIndex",
        value: function(t) {
            var e = this;
            this.$index = t;
            var i = this.props, n = this.$parent, o = void 0, a = void 0, r = void 0;
            if (i) {
                for (o in i) a = void 0, n && n.$props && n.$props[this.$name] && (a = n.$props[this.$name][o], 
                (r = n.$props[this.$name]["v-bind:" + o + ".once"] || n.$props[this.$name]["v-bind:" + o + ".sync"]) && "object" === (void 0 === r ? "undefined" : _typeof(r)) && function() {
                    var s = r.for, p = n;
                    if (0 === s.indexOf("[")) {
                        var f = [];
                        s = s.substr(1, s.length - 2).trim(), s.split(",").forEach(function(t) {
                            var e = n;
                            t.trim().split(".").forEach(function(t) {
                                e = e ? e[t] : {};
                            }), f.push(e);
                        }), p = f;
                    } else s.split(".").forEach(function(t) {
                        p = p ? p[t] : {};
                    });
                    t = Array.isArray(p) ? +t : t, a = i[o].value === i[o].item ? p[t] : i[o].value === i[o].index ? t : i[o].value === i[o].key ? t : n[i[o].value], 
                    e.$index = t, e.data[o] = a, e[o] = a, e.$data[o] = _util2.default.$copy(e[o], !0);
                }());
                for (o in this.$com) this.$com[o].$index = void 0;
            }
        }
    }, {
        key: "$getComponent",
        value: function(t) {
            var e = this;
            if ("string" == typeof t) {
                if (-1 === t.indexOf("/")) return this.$com[t];
                if ("/" === t) return this.$parent;
                t.split("/").forEach(function(i, n) {
                    0 === n ? t = "" === i ? e.$root : "." === i ? e : ".." === i ? e.$parent : e.$getComponent(i) : i && (t = t.$com[i]);
                });
            }
            return "object" !== (void 0 === t ? "undefined" : _typeof(t)) ? null : t;
        }
    }, {
        key: "$invoke",
        value: function(t, e) {
            if (!(t = this.$getComponent(t))) throw new Error("Invalid path: " + t);
            for (var i = t.methods ? t.methods[e] : "", n = arguments.length, o = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) o[a - 2] = arguments[a];
            if ("function" == typeof i) {
                var r = new _event2.default("", this, "invoke"), s = i.apply(t, o.concat(r));
                return t.$apply(), s;
            }
            if ("function" == typeof (i = t[e])) return i.apply(t, o);
            throw new Error("Invalid method: " + e);
        }
    }, {
        key: "$broadcast",
        value: function(t) {
            for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
            for (var o = this, a = "string" == typeof t ? new _event2.default(t, this, "broadcast") : a, r = [ o ]; r.length && a.active; ) {
                var s = r.shift();
                for (var p in s.$com) {
                    if ("break" === function(e) {
                        e = s.$com[e], r.push(e);
                        var n = getEventsFn(e, t);
                        if (n && e.$apply(function() {
                            n.apply(e, i.concat(a));
                        }), !a.active) return "break";
                        p = e;
                    }(p)) break;
                }
            }
        }
    }, {
        key: "$emit",
        value: function(t) {
            for (var e = this, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
            var a = this, r = this, s = new _event2.default(t, r, "emit");
            if (n = n.concat(s), this.$parent && this.$parent.$events && this.$parent.$events[this.$name]) {
                var p = this.$parent.$events[this.$name]["v-on:" + t];
                if (p && this.$parent.methods) {
                    var f = this.$parent.methods[p];
                    if ("function" == typeof f) return void this.$parent.$apply(function() {
                        f.apply(e.$parent, n);
                    });
                    throw new Error("Invalid method from emit, component is " + this.$parent.$name + ", method is " + p + ". Make sure you defined it already.\n");
                }
            }
            for (;a && void 0 !== a.$isComponent && s.active; ) !function() {
                var e = a, i = getEventsFn(e, t);
                i && ("function" == typeof i ? e.$apply(function() {
                    i.apply(e, n);
                }) : Array.isArray(i) && (i.forEach(function(t) {
                    t.apply(e, n);
                }), e.$apply())), a = e.$parent;
            }();
        }
    }, {
        key: "$on",
        value: function(t, e) {
            var i = this;
            if ("string" == typeof t) (this.$events[t] || (this.$events[t] = [])).push(e); else if (Array.isArray(t)) t.forEach(function(t) {
                i.$on(t, e);
            }); else if ("object" === (void 0 === t ? "undefined" : _typeof(t))) for (var n in t) this.$on(n, t[n]);
            return this;
        }
    }, {
        key: "$once",
        value: function(t, e) {
            var i = this, n = function n() {
                i.$off(t, n), e.apply(i, arguments);
            };
            n.fn = e, this.$on(t, n);
        }
    }, {
        key: "$off",
        value: function(t, e) {
            var i = this;
            if (void 0 === t) this.$events = {}; else if ("string" == typeof t) if (e) {
                for (var n = this.$events[t], o = n.length; o--; ) if (e === n[o] || e === n[o].fn) {
                    n.splice(o, 1);
                    break;
                }
            } else this.$events[t] = []; else Array.isArray(t) && t.forEach(function(t) {
                i.$off(t, e);
            });
            return this;
        }
    }, {
        key: "$apply",
        value: function(t) {
            "function" == typeof t ? (t.call(this), this.$apply()) : this.$$phase ? this.$$phase = "$apply" : this.$digest();
        }
    }, {
        key: "$digest",
        value: function() {
            var t = this, e = void 0, i = this.$data;
            for (this.$$phase = "$digest", this.$$dc = 0; this.$$phase; ) {
                if (++this.$$dc >= 3) throw new Error("Can not call $apply in $apply process");
                var n = {};
                if (this.computed) for (e in this.computed) {
                    var o = this.computed[e], a = o.call(this);
                    _util2.default.$isEqual(this[e], a) || (n[this.$prefix + e] = a, this[e] = _util2.default.$copy(a, !0));
                }
                for (e in i) if (!_util2.default.$isEqual(this[e], i[e])) {
                    if (this.watch && this.watch[e] && ("function" == typeof this.watch[e] ? this.watch[e].call(this, this[e], i[e]) : "string" == typeof this.watch[e] && "function" == typeof this.methods[e] && this.methods[e].call(this, this[e], i[e])), 
                    n[this.$prefix + e] = this[e], this.data[e] = this[e], i[e] = _util2.default.$copy(this[e], !0), 
                    this.$repeat && this.$repeat[e]) {
                        var r = this.$repeat[e];
                        this.$com[r.com].data[r.props] = this[e], this.$com[r.com].$setIndex(0), this.$com[r.com].$apply();
                    }
                    this.$mappingProps[e] && Object.keys(this.$mappingProps[e]).forEach(function(i) {
                        var n = t.$mappingProps[e][i];
                        "object" === (void 0 === n ? "undefined" : _typeof(n)) ? t.$parent.$apply() : "parent" !== i || _util2.default.$isEqual(t.$parent.$data[n], t[e]) ? "parent" === i || _util2.default.$isEqual(t.$com[i].$data[n], t[e]) || (t.$com[i][n] = t[e], 
                        t.$com[i].data[n] = t[e], t.$com[i].$apply()) : (t.$parent[n] = t[e], t.$parent.data[n] = t[e], 
                        t.$parent.$apply());
                    });
                }
                if (Object.keys(n).length) this.setData(n, function() {
                    if (t.$$nextTick) {
                        var e = t.$$nextTick;
                        t.$$nextTick = null, e.promise ? e() : e.call(t);
                    }
                }); else if (this.$$nextTick) {
                    var s = this.$$nextTick;
                    this.$$nextTick = null, s.promise ? s() : s.call(this);
                }
                this.$$phase = "$apply" === this.$$phase && "$digest";
            }
        }
    }, {
        key: "$nextTick",
        value: function(t) {
            var e = this;
            if (void 0 === t) return new Promise(function(t, i) {
                e.$$nextTick = function() {
                    t();
                }, e.$$nextTick.promise = !0;
            });
            this.$$nextTick = t;
        }
    } ]), t;
}();

exports.default = _class;