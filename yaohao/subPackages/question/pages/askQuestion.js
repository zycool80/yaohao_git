var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, i) {
                try {
                    var o = t[a](i), s = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
            }
            return n("next");
        });
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationBarTitleText: "我要提问",
            enablePullDownRefresh: !1
        }, n.data = {
            items: [],
            smallItems: [],
            showReviewModel: !1,
            content: "",
            typeList: [],
            type: [],
            content_disable: !1,
            imageList: [],
            project_id: 0,
            lottery_id: 0,
            beans: 30
        }, n.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, n.$repeat = {}, n.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.methods = {
            showQuestionType: function() {
                this.content_disable = !0, this.showReviewModel = !0;
            },
            deleteType: function(e) {
                for (var t = this.typeList[e], r = 0; r < this.items.length; r++) {
                    var n = !0, a = !1, i = void 0;
                    try {
                        for (var o, s = this.items[r].item[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                            var l = o.value;
                            t === l.value && (l.checked = !1);
                        }
                    } catch (e) {
                        a = !0, i = e;
                    } finally {
                        try {
                            !n && s.return && s.return();
                        } finally {
                            if (a) throw i;
                        }
                    }
                }
                for (var u = 0; u < this.smallItems.length; u++) {
                    var c = !0, h = !1, f = void 0;
                    try {
                        for (var d, p = this.smallItems[u].item[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                            var y = d.value;
                            t === y.value && (y.checked = !1);
                        }
                    } catch (e) {
                        h = !0, f = e;
                    } finally {
                        try {
                            !c && p.return && p.return();
                        } finally {
                            if (h) throw f;
                        }
                    }
                }
                this.typeList.splice(e, 1);
            },
            getTextNum: function(e) {
                this.content = e.detail.value;
            },
            cancelReviewModel: function() {
                this.content_disable = !1, this.showReviewModel = !1;
            },
            clearReviewModel: function() {
                this.typeList = [], this.type = [];
                var e = !0, t = !1, r = void 0;
                try {
                    for (var n, a = this.items[Symbol.iterator](); !(e = (n = a.next()).done); e = !0) {
                        var i = n.value, o = !0, s = !1, l = void 0;
                        try {
                            for (var u, c = i.item[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) {
                                var h = u.value;
                                h.checked = !1, h.disable = !1;
                            }
                        } catch (e) {
                            s = !0, l = e;
                        } finally {
                            try {
                                !o && c.return && c.return();
                            } finally {
                                if (s) throw l;
                            }
                        }
                    }
                } catch (e) {
                    t = !0, r = e;
                } finally {
                    try {
                        !e && a.return && a.return();
                    } finally {
                        if (t) throw r;
                    }
                }
                var f = !0, d = !1, p = void 0;
                try {
                    for (var y, v = this.smallItems[Symbol.iterator](); !(f = (y = v.next()).done); f = !0) {
                        var m = y.value, b = !0, x = !1, w = void 0;
                        try {
                            for (var _, g = m.item[Symbol.iterator](); !(b = (_ = g.next()).done); b = !0) {
                                var k = _.value;
                                k.checked = !1, k.disable = !1;
                            }
                        } catch (e) {
                            x = !0, w = e;
                        } finally {
                            try {
                                !b && g.return && g.return();
                            } finally {
                                if (x) throw w;
                            }
                        }
                    }
                } catch (e) {
                    d = !0, p = e;
                } finally {
                    try {
                        !f && v.return && v.return();
                    } finally {
                        if (d) throw p;
                    }
                }
            },
            choose: function(e, t, r) {
                var n = new Set([].concat(_toConsumableArray(this.typeList))), a = new Set([].concat(_toConsumableArray(this.type)));
                if ("0" === e) for (var i = 0; i < this.items.length; i++) for (var o = 0; o < this.items[i].item.length; o++) {
                    var s = this.items[i].item[o];
                    if (i == t && o == r) {
                        s.checked = !s.checked, s.checked ? n.add(s.value) : n.delete(s.value);
                        var l = this.items[i].index;
                        this.hasCheckedNum(this.items[i].item) ? a.add(l) : a.delete(l);
                    }
                } else for (var u = 0; u < this.smallItems.length; u++) for (var c = 0; c < this.smallItems[u].item.length; c++) {
                    var h = this.smallItems[u].item[c];
                    if (u == t && c == r) {
                        h.checked = !h.checked, h.checked ? n.add(h.value) : n.delete(h.value);
                        var f = this.smallItems[u].index;
                        this.hasCheckedNum(this.smallItems[u].item) ? a.add(f) : a.delete(f);
                    }
                }
                if (n.size > 2) {
                    var d = !0, p = !1, y = void 0;
                    try {
                        for (var v, m = this.items[Symbol.iterator](); !(d = (v = m.next()).done); d = !0) {
                            var b = v.value, x = !0, w = !1, _ = void 0;
                            try {
                                for (var g, k = b.item[Symbol.iterator](); !(x = (g = k.next()).done); x = !0) {
                                    var R = g.value;
                                    n.has(R.value) || (R.disable = !0);
                                }
                            } catch (e) {
                                w = !0, _ = e;
                            } finally {
                                try {
                                    !x && k.return && k.return();
                                } finally {
                                    if (w) throw _;
                                }
                            }
                        }
                    } catch (e) {
                        p = !0, y = e;
                    } finally {
                        try {
                            !d && m.return && m.return();
                        } finally {
                            if (p) throw y;
                        }
                    }
                    var S = !0, L = !1, j = void 0;
                    try {
                        for (var C, I = this.smallItems[Symbol.iterator](); !(S = (C = I.next()).done); S = !0) {
                            var P = C.value, T = !0, q = !1, A = void 0;
                            try {
                                for (var M, O = P.item[Symbol.iterator](); !(T = (M = O.next()).done); T = !0) {
                                    var $ = M.value;
                                    n.has($.value) || ($.disable = !0);
                                }
                            } catch (e) {
                                q = !0, A = e;
                            } finally {
                                try {
                                    !T && O.return && O.return();
                                } finally {
                                    if (q) throw A;
                                }
                            }
                        }
                    } catch (e) {
                        L = !0, j = e;
                    } finally {
                        try {
                            !S && I.return && I.return();
                        } finally {
                            if (L) throw j;
                        }
                    }
                } else {
                    var B = !0, D = !1, H = void 0;
                    try {
                        for (var G, F = this.items[Symbol.iterator](); !(B = (G = F.next()).done); B = !0) {
                            var N = G.value, E = !0, Q = !1, z = void 0;
                            try {
                                for (var K, J = N.item[Symbol.iterator](); !(E = (K = J.next()).done); E = !0) {
                                    K.value.disable = !1;
                                }
                            } catch (e) {
                                Q = !0, z = e;
                            } finally {
                                try {
                                    !E && J.return && J.return();
                                } finally {
                                    if (Q) throw z;
                                }
                            }
                        }
                    } catch (e) {
                        D = !0, H = e;
                    } finally {
                        try {
                            !B && F.return && F.return();
                        } finally {
                            if (D) throw H;
                        }
                    }
                    var U = !0, V = !1, W = void 0;
                    try {
                        for (var X, Y = this.smallItems[Symbol.iterator](); !(U = (X = Y.next()).done); U = !0) {
                            var Z = X.value, ee = !0, te = !1, re = void 0;
                            try {
                                for (var ne, ae = Z.item[Symbol.iterator](); !(ee = (ne = ae.next()).done); ee = !0) {
                                    ne.value.disable = !1;
                                }
                            } catch (e) {
                                te = !0, re = e;
                            } finally {
                                try {
                                    !ee && ae.return && ae.return();
                                } finally {
                                    if (te) throw re;
                                }
                            }
                        }
                    } catch (e) {
                        V = !0, W = e;
                    } finally {
                        try {
                            !U && Y.return && Y.return();
                        } finally {
                            if (V) throw W;
                        }
                    }
                }
                this.typeList = [].concat(_toConsumableArray(n)), this.type = [].concat(_toConsumableArray(a));
            },
            deletePic: function(e) {
                var t = [];
                for (var r in this.imageList) r != e && t.push(this.imageList[r]);
                this.imageList = t;
            },
            upForm: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n, a, i;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (wx.showLoading({
                                title: "加载中",
                                mask: !0
                            }), e.content) {
                                t.next = 3;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("内容不能为空", "", "none"));

                          case 3:
                            if (!(e.num > 300)) {
                                t.next = 5;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("字数超过限制", "", "none"));

                          case 5:
                            return r = e.imageList.join(","), n = e.typeList.join(","), a = e.type.join(","), 
                            t.next = 10, _api2.default.setQuestion(a, n, e.content, r, e.project_id, e.lottery_id);

                          case 10:
                            i = t.sent, _index.tip.toast(i.data.data), i && wx.redirectTo({
                                url: "/subPackages/question/pages/questionDetail?id=" + i.data.id
                            }), e.typeList = [], e.content = "", wx.hideLoading(), e.$apply();

                          case 17:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            preview: function(e) {
                this.imageList.length > 0 && wx.previewImage({
                    current: e,
                    urls: this.imageList
                });
            },
            uploadFile: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (6 !== e.imageList.length) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("最多上传6张", "", "none"));

                          case 2:
                            return t.prev = 2, t.next = 5, _index.foundation.chooseImageSync();

                          case 5:
                            return r = t.sent, wx.showLoading({
                                title: "上传中"
                            }), t.next = 9, _index.foundation.uploadFileSync(r.tempFilePaths[0]);

                          case 9:
                            if (n = t.sent, "200" == n.statusCode) {
                                t.next = 14;
                                break;
                            }
                            _index.tip.error("图片上传失败"), t.next = 18;
                            break;

                          case 14:
                            if (a = n.data, "0" == a.status) {
                                t.next = 17;
                                break;
                            }
                            return t.abrupt("return", _index.tip.error("图片上传失败"));

                          case 17:
                            e.imageList.push(a.data.url);

                          case 18:
                            t.next = 23;
                            break;

                          case 20:
                            t.prev = 20, t.t0 = t.catch(2), _index.tip.error("图片上传失败");

                          case 23:
                            wx.hideLoading(), e.$apply();

                          case 25:
                          case "end":
                            return t.stop();
                        }
                    }, t, e, [ [ 2, 20 ] ]);
                }))();
            }
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.signInStatus();

                      case 2:
                        return r = e.sent, n = r.data, this.beans = n.points, t.project_id && (this.project_id = t.project_id), 
                        t.lottery_id && (this.lottery_id = t.lottery_id), e.next = 9, this.reload();

                      case 9:
                        this.$apply();

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onPullDownRefresh",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.reload();

                      case 2:
                        wx.stopPullDownRefresh(), this.$apply();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            return _index.share.share("如果你有买房相关的任何问题，都可以来这里问问哦～");
        }
    }, {
        key: "hasCheckedNum",
        value: function(e) {
            var t = !1, r = !0, n = !1, a = void 0;
            try {
                for (var i, o = e[Symbol.iterator](); !(r = (i = o.next()).done); r = !0) {
                    if (i.value.checked) {
                        t = !0;
                        break;
                    }
                }
            } catch (e) {
                n = !0, a = e;
            } finally {
                try {
                    !r && o.return && o.return();
                } finally {
                    if (n) throw a;
                }
            }
            return t;
        }
    }, {
        key: "reload",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, n, a, i, o, s, l, u, c, h, f, d, p, y, v, m, b, x, w, _;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中..."
                        }), e.next = 3, _api2.default.questionTypes("");

                      case 3:
                        t = e.sent, r = t.data, this.items = [], this.smallItems = [], n = !0, a = !1, i = void 0, 
                        e.prev = 10, o = r[Symbol.iterator]();

                      case 12:
                        if (n = (s = o.next()).done) {
                            e.next = 61;
                            break;
                        }
                        if (l = s.value, u = [], !(l.subclass.length > 2)) {
                            e.next = 38;
                            break;
                        }
                        for (c = !0, h = !1, f = void 0, e.prev = 19, d = l.subclass[Symbol.iterator](); !(c = (p = d.next()).done); c = !0) y = p.value, 
                        u.push({
                            value: y.name,
                            checked: !1,
                            disable: !1
                        });
                        e.next = 27;
                        break;

                      case 23:
                        e.prev = 23, e.t0 = e.catch(19), h = !0, f = e.t0;

                      case 27:
                        e.prev = 27, e.prev = 28, !c && d.return && d.return();

                      case 30:
                        if (e.prev = 30, !h) {
                            e.next = 33;
                            break;
                        }
                        throw f;

                      case 33:
                        return e.finish(30);

                      case 34:
                        return e.finish(27);

                      case 35:
                        this.items.push({
                            item: u,
                            text: l.name,
                            index: l.id
                        }), e.next = 58;
                        break;

                      case 38:
                        for (v = !0, m = !1, b = void 0, e.prev = 41, x = l.subclass[Symbol.iterator](); !(v = (w = x.next()).done); v = !0) _ = w.value, 
                        u.push({
                            value: _.name,
                            checked: !1,
                            disable: !1
                        });
                        e.next = 49;
                        break;

                      case 45:
                        e.prev = 45, e.t1 = e.catch(41), m = !0, b = e.t1;

                      case 49:
                        e.prev = 49, e.prev = 50, !v && x.return && x.return();

                      case 52:
                        if (e.prev = 52, !m) {
                            e.next = 55;
                            break;
                        }
                        throw b;

                      case 55:
                        return e.finish(52);

                      case 56:
                        return e.finish(49);

                      case 57:
                        this.smallItems.push({
                            item: u,
                            text: l.name,
                            index: l.id
                        });

                      case 58:
                        n = !0, e.next = 12;
                        break;

                      case 61:
                        e.next = 67;
                        break;

                      case 63:
                        e.prev = 63, e.t2 = e.catch(10), a = !0, i = e.t2;

                      case 67:
                        e.prev = 67, e.prev = 68, !n && o.return && o.return();

                      case 70:
                        if (e.prev = 70, !a) {
                            e.next = 73;
                            break;
                        }
                        throw i;

                      case 73:
                        return e.finish(70);

                      case 74:
                        return e.finish(67);

                      case 75:
                        wx.hideLoading(), this.$apply();

                      case 77:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 10, 63, 67, 75 ], [ 19, 23, 27, 35 ], [ 28, , 30, 34 ], [ 41, 45, 49, 57 ], [ 50, , 52, 56 ], [ 68, , 70, 74 ] ]);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/question/pages/askQuestion"));