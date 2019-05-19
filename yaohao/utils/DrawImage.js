var regeneratorRuntime = require("../npm/regenerator-runtime/runtime.js");
function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, s) {
                try {
                    var i = t[n](s), o = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(o).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(o);
            }
            return a("next");
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

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), api = require("./../api/api.js"), _require = require("./utilsKit/index.js"), underscore = _require.underscore, _ = underscore, DrawImages = function() {
    function e(t) {
        _classCallCheck(this, e);
        var r = {
            canvasWidth: 0,
            canvasHeight: 0,
            canvasScale: 0,
            defaultWidth: 750,
            defaultHeight: 1334
        };
        if (!t.canvasIDs) throw new Error("没有传入要绘制的画布ID");
        if (this.canvasIDs = [].concat(_toConsumableArray(t.canvasIDs)), this.options = t ? _.extend(r, t) : r, 
        this.options.canvasWidth < 1 || this.options.canvasHeight < 1) {
            var a = wx.getSystemInfoSync();
            this.options.canvasWidth = a.width, this.options.canvasHeight = a.height, this.options.canvasScale = this.options.canvasWidth / this.options.defaultWidth;
        }
        this.options.canvasScale || (this.options.canvasScale = this.options.canvasWidth / this.options.defaultWidth), 
        this.options.canvasWidth = parseInt(this.options.canvasWidth), this.options.canvasHeight = parseInt(this.options.canvasHeight), 
        this.__sourcesMap = [], this.__sourceTempFiles = {}, this.__qrcodeUrl = "", this.params = "";
    }
    return _createClass(e, [ {
        key: "start",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.params = t, r = this.params.cover, this.__sourcesMap = [ {
                            name: "cover",
                            path: r
                        }, {
                            name: "four_cover",
                            path: r
                        }, {
                            name: "five_cover",
                            path: r
                        }, {
                            name: "tow_cover_bg",
                            path: "https://imgcdn.huanjutang.com/assets/img/20180802/5b62830b5d452.png?imageView2/0/q/75/w/" + this.options.canvasWidth + "/h/" + this.options.canvasWidth + "/interlace/1|imageslim"
                        }, {
                            name: "four_cover_bg",
                            path: "http://imgcdn.huanjutang.com/assets/img/20180802/5b62ae7733a4e.png?imageView2/0/q/75/w/" + this.options.canvasWidth + "/h/" + this.options.canvasWidth + "/interlace/1|imageslim"
                        }, {
                            name: "five_cover_bg",
                            path: "http://imgcdn.huanjutang.com/assets/img/20180802/5b62ae6357900.png?imageView2/0/w/" + 3 * this.options.canvasWidth + "/h/" + 3 * this.options.canvasWidth + "/interlace/1|imageslim"
                        }, {
                            name: "tow_bg",
                            path: "https://imgcdn.huanjutang.com/assets/img/20180802/5b626b043877d.png"
                        } ], e.next = 5, this.__downloadSource();

                      case 5:
                        return e.next = 7, this.__createQRCode().catch(function(e) {
                            throw new Error("生成二维码错误");
                        });

                      case 7:
                        this.__qrcodeUrl = e.sent;

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "drawImage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this, e.abrupt("return", new Promise(function() {
                            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(a, n) {
                                var s;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return s = [ r.__drawStyleOne(), r.__drawStyleTow(), r.__drawStyleThree(), r.__drawStyleFour(), r.__drawStyleFive() ], 
                                        e.next = 3, Promise.all(s).then(function() {
                                            a();
                                        }).catch(function(e) {
                                            t.__postError(e, "绘制画布内容失败"), n(e);
                                        });

                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, r);
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments);
                            };
                        }()));

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "__downloadSource",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, a, n, s, i, o, c, h, l, u, v, f, p;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        for (t = [], r = !0, a = !1, n = void 0, e.prev = 4, s = this.__sourcesMap[Symbol.iterator](); !(r = (i = s.next()).done); r = !0) o = i.value, 
                        t.push(this.downloadFile(o));
                        e.next = 12;
                        break;

                      case 8:
                        e.prev = 8, e.t0 = e.catch(4), a = !0, n = e.t0;

                      case 12:
                        e.prev = 12, e.prev = 13, !r && s.return && s.return();

                      case 15:
                        if (e.prev = 15, !a) {
                            e.next = 18;
                            break;
                        }
                        throw n;

                      case 18:
                        return e.finish(15);

                      case 19:
                        return e.finish(12);

                      case 20:
                        return e.next = 22, Promise.all(t).catch(function(e) {
                            throw new Error(e);
                        });

                      case 22:
                        if (!(c = e.sent)) {
                            e.next = 43;
                            break;
                        }
                        for (h = !0, l = !1, u = void 0, e.prev = 27, v = c[Symbol.iterator](); !(h = (f = v.next()).done); h = !0) p = f.value, 
                        this.__sourceTempFiles[p.name] = p.path;
                        e.next = 35;
                        break;

                      case 31:
                        e.prev = 31, e.t1 = e.catch(27), l = !0, u = e.t1;

                      case 35:
                        e.prev = 35, e.prev = 36, !h && v.return && v.return();

                      case 38:
                        if (e.prev = 38, !l) {
                            e.next = 41;
                            break;
                        }
                        throw u;

                      case 41:
                        return e.finish(38);

                      case 42:
                        return e.finish(35);

                      case 43:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 4, 8, 12, 20 ], [ 13, , 15, 19 ], [ 27, 31, 35, 43 ], [ 36, , 38, 42 ] ]);
            }));
            return e;
        }()
    }, {
        key: "__drawStyleOne",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, a, n, s, i, o, c, h, l, u, v, f, p, d, g, m, _, x, w, S, y, T, b, F, k, W, I, z, R, C, H, A;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this.options, r = wx.createCanvasContext(this.canvasIDs[0]), a = t.canvasScale, 
                        n = this.__sourceTempFiles.cover, s = this.params, r.drawImage(n, 0, 0, t.canvasWidth, t.canvasHeight), 
                        r.save(), r.restore(), i = '"' + s.name + '"', o = s.avg_price ? s.avg_price + "元/平方" : "待定", 
                        c = "一开倾城，万众热捧", h = t.canvasWidth / 2, r.setFillStyle("#ffffff"), r.setTextAlign("center"), 
                        r.setShadow(0, 4, 6, "rgba(0,0,0,.4)"), l = 54 * a, u = r.measureText(i), v = 188 * a, 
                        f = 5.4 * a, !(u.width * f + 20 > t.canvasWidth)) {
                            e.next = 42;
                            break;
                        }
                        if (p = (t.canvasWidth - 40) / (i.length - 2), d = [], !(i.length >= 16)) {
                            e.next = 38;
                            break;
                        }
                        for (g = void 0, m = void 0, g = m = 0, _ = 0; _ < i.length; _++) (_ + 1) % 16 == 0 ? (g = 16 * ((_ + 1) / 16 - 1), 
                        m = (_ + 1) / 16 * 16, d.push(i.slice(g, m))) : _ + 1 >= i.length && (g = (i.length - (_ + 1) % 16) / 16, 
                        m = _ + 1, d.push(i.slice(16 * g, m)));
                        for (r.setFontSize(40 * a), x = !0, w = !1, S = void 0, e.prev = 20, y = d[Symbol.iterator](); !(x = (T = y.next()).done); x = !0) b = T.value, 
                        r.fillText(b, h, v), v += 20;
                        e.next = 28;
                        break;

                      case 24:
                        e.prev = 24, e.t0 = e.catch(20), w = !0, S = e.t0;

                      case 28:
                        e.prev = 28, e.prev = 29, !x && y.return && y.return();

                      case 31:
                        if (e.prev = 31, !w) {
                            e.next = 34;
                            break;
                        }
                        throw S;

                      case 34:
                        return e.finish(31);

                      case 35:
                        return e.finish(28);

                      case 36:
                        e.next = 40;
                        break;

                      case 38:
                        p > l ? r.setFontSize(l) : r.setFontSize(p), r.fillText(i, h, v);

                      case 40:
                        e.next = 44;
                        break;

                      case 42:
                        r.setFontSize(l), r.fillText(i, h, v);

                      case 44:
                        return v += (l + 40) * a, r.setFontSize(36 * a), r.fillText(o, h, v), v += 20 * a, 
                        F = "/images/share_bg.png", e.next = 51, this.getImgParams(F);

                      case 51:
                        k = e.sent, r.drawImage(F, (t.canvasWidth - k.width * a) / 2, v, k.width * a, k.height * a), 
                        r.save(), v += 62 * a, r.setFontSize(32 * a), r.fillText(c, h, v), W = 540 * a, 
                        I = 170 * a, z = (t.canvasWidth - W) / 2, v = t.canvasHeight - (I + 50 * a), r.setFillStyle("rgba(255,255,255,.85)"), 
                        r.fillRect(z, v, W, I), R = 150 * a, C = 150 * a, H = z + 10 * a, A = v + 10 * a, 
                        r.setShadow(0, 0, 0, "rgba(0,0,0,0)"), r.setTextAlign("left"), r.setFillStyle("#343434"), 
                        r.setFontSize(36 * a), z = z + R + 20 * a, v += 70 * a, r.fillText("长按识别小程序码", z, v), 
                        r.setFontSize(26 * a), v += 50 * a, r.fillText("查看更多楼盘信息", z, v), r.drawImage(this.__qrcodeUrl, H, A, R, C), 
                        r.draw();

                      case 74:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 20, 24, 28, 36 ], [ 29, , 31, 35 ] ]);
            }));
            return e;
        }()
    }, {
        key: "__drawStyleTow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, a, n, s, i, o, c, h, l, u, v, f, p, d, g, m, _, x, w, S, y, T, b, F, k, W, I, z, R, C, H, A;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this.options, r = wx.createCanvasContext(this.canvasIDs[1]), a = t.canvasScale, 
                        n = this.params, s = this.__sourceTempFiles.tow_cover_bg, i = this.__sourceTempFiles.cover, 
                        r.drawImage(i, 0, 0, t.canvasWidth, t.canvasHeight), r.drawImage(s, 0, 0, t.canvasWidth, t.canvasHeight), 
                        o = 540 * a, c = 170 * a, h = (t.canvasWidth - o) / 2, l = t.canvasHeight - (c + 50 * a), 
                        u = 150 * a, v = 150 * a, f = h + 10 * a, p = l + 10 * a, r.setShadow(0, 0, 0, "rgba(0,0,0,0)"), 
                        r.setTextAlign("left"), r.setFillStyle("#343434"), r.setFontSize(36 * a), h = h + u + 20 * a, 
                        l += 70 * a, r.fillText("长按识别小程序码", h, l), r.setFontSize(26 * a), l += 50 * a, r.fillText("查看更多楼盘信息", h, l), 
                        r.drawImage(this.__qrcodeUrl, f, p, u, v), d = n.avg_price ? n.avg_price + "元/平方" : "待定", 
                        g = t.canvasWidth / 2, m = n.name, l -= 160 * a, r.setTextAlign("center"), r.setFillStyle("#fc855b"), 
                        r.setFontSize(36 * a), r.fillText(d, g, l), l -= 100 * a, _ = "/images/share_style_one_bg.png", 
                        e.next = 26, this.getImgParams(_);

                      case 26:
                        if (x = e.sent, r.drawImage(_, (t.canvasWidth - x.width * a) / 2, l, x.width * a, x.height * a), 
                        l -= 40 * a, r.setFillStyle("#222222"), r.setFontSize(32 * a), r.fillText("一开倾城，万众热捧", g, l), 
                        l -= 70 * a, w = 54 * a, S = r.measureText(m), y = 5.4 * a, !(S.width * y + 20 > t.canvasWidth)) {
                            e.next = 68;
                            break;
                        }
                        if (T = (t.canvasWidth - 40) / (m.length - 2), b = [], !(m.length >= 16)) {
                            e.next = 64;
                            break;
                        }
                        for (F = void 0, k = void 0, F = k = 0, W = 0; W < m.length; W++) (W + 1) % 16 == 0 ? (F = 16 * ((W + 1) / 16 - 1), 
                        k = (W + 1) / 16 * 16, b.push(m.slice(F, k))) : W + 1 >= m.length && (F = (m.length - (W + 1) % 16) / 16, 
                        k = W + 1, b.push(m.slice(16 * F, k)));
                        for (b.reverse(), r.setFontSize(40 * a), I = !0, z = !1, R = void 0, e.prev = 46, 
                        C = b[Symbol.iterator](); !(I = (H = C.next()).done); I = !0) A = H.value, r.fillText(A, g, l), 
                        l -= 20;
                        e.next = 54;
                        break;

                      case 50:
                        e.prev = 50, e.t0 = e.catch(46), z = !0, R = e.t0;

                      case 54:
                        e.prev = 54, e.prev = 55, !I && C.return && C.return();

                      case 57:
                        if (e.prev = 57, !z) {
                            e.next = 60;
                            break;
                        }
                        throw R;

                      case 60:
                        return e.finish(57);

                      case 61:
                        return e.finish(54);

                      case 62:
                        e.next = 66;
                        break;

                      case 64:
                        T > w ? r.setFontSize(w) : r.setFontSize(T), r.fillText(m, g, l);

                      case 66:
                        e.next = 70;
                        break;

                      case 68:
                        r.setFontSize(w), r.fillText(m, g, l);

                      case 70:
                        r.draw();

                      case 71:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 46, 50, 54, 62 ], [ 55, , 57, 61 ] ]);
            }));
            return e;
        }()
    }, {
        key: "__drawStyleThree",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, a, n, s, i, o, c, h, l, u, v, f, p, d, g, m, _, x, w, S, y, T, b, F, k, W, I, z, R, C, H, A, P, q;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this.options, r = wx.createCanvasContext(this.canvasIDs[2]), a = t.canvasScale, 
                        n = this.params, s = this.__sourceTempFiles.cover, i = this.__sourceTempFiles.tow_bg, 
                        r.drawImage(s, 0, 0, t.canvasWidth, t.canvasHeight), r.save(), o = t.canvasHeight / 2.5, 
                        r.drawImage(i, 0, o, t.canvasWidth, t.canvasHeight - o), r.save(), r.restore(), 
                        c = 540 * a, h = 170 * a, l = (t.canvasWidth - c) / 2, u = t.canvasHeight - (h + 50 * a), 
                        v = 150 * a, f = 150 * a, p = l + 10 * a, d = u + 10 * a, r.setShadow(0, 0, 0, "rgba(0,0,0,0)"), 
                        r.setTextAlign("left"), r.setFillStyle("#343434"), r.setFontSize(36 * a), l = l + v + 20 * a, 
                        u += 70 * a, r.fillText("长按识别小程序码", l, u), r.setFontSize(26 * a), u += 50 * a, r.fillText("查看更多楼盘信息", l, u), 
                        r.drawImage(this.__qrcodeUrl, p, d, v, f), g = '"' + n.name + '"', m = "一开倾城，万众热捧", 
                        _ = n.avg_price ? n.avg_price + "元/平方" : "待定", x = t.canvasWidth / 2, u -= 160 * a, 
                        r.setFontSize(36 * a), r.setTextAlign("center"), r.setFillStyle("#fc855b"), w = r.measureText(_).width, 
                        r.fillText(_, x, u), u -= 60 * a, r.setFontSize(32 * a), r.setTextAlign("center"), 
                        r.setFillStyle("#000"), S = r.measureText(m).width, r.fillText(m, x, u), r.setFillStyle("#000"), 
                        r.setTextAlign("center"), y = 54 * a, T = r.measureText(g), b = 5.4 * a, u -= 60 * a, 
                        !(T.width * b + 20 > t.canvasWidth)) {
                            e.next = 71;
                            break;
                        }
                        if (F = (t.canvasWidth - 40) / (g.length - 2), k = [], !(g.length >= 18)) {
                            e.next = 67;
                            break;
                        }
                        for (W = void 0, I = void 0, W = I = 0, z = 0; z < g.length; z++) (z + 1) % 16 == 0 ? (W = 16 * ((z + 1) / 16 - 1), 
                        I = (z + 1) / 16 * 16, k.push(g.slice(W, I))) : z + 1 >= g.length && (W = (g.length - (z + 1) % 16) / 16, 
                        I = z + 1, k.push(g.slice(16 * W, I)));
                        for (k.reverse(), r.setFontSize(36 * a), R = !0, C = !1, H = void 0, e.prev = 49, 
                        A = k[Symbol.iterator](); !(R = (P = A.next()).done); R = !0) q = P.value, r.fillText(q, x, u), 
                        u -= 20;
                        e.next = 57;
                        break;

                      case 53:
                        e.prev = 53, e.t0 = e.catch(49), C = !0, H = e.t0;

                      case 57:
                        e.prev = 57, e.prev = 58, !R && A.return && A.return();

                      case 60:
                        if (e.prev = 60, !C) {
                            e.next = 63;
                            break;
                        }
                        throw H;

                      case 63:
                        return e.finish(60);

                      case 64:
                        return e.finish(57);

                      case 65:
                        e.next = 69;
                        break;

                      case 67:
                        F > y ? r.setFontSize(y) : r.setFontSize(F), r.fillText(g, x, u);

                      case 69:
                        e.next = 73;
                        break;

                      case 71:
                        r.setFontSize(y), r.fillText(g, x, u);

                      case 73:
                        r.draw();

                      case 74:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 49, 53, 57, 65 ], [ 58, , 60, 64 ] ]);
            }));
            return e;
        }()
    }, {
        key: "__drawStyleFour",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, a, n, s, i, o, c, h, l, u, v, f, p, d, g, m, _, x, w, S, y, T, b, F, k, W, I, z, R, C, H, A, P, q, G, D, E, j;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this.options, r = wx.createCanvasContext(this.canvasIDs[3]), a = t.canvasScale, 
                        n = this.params, s = this.__sourceTempFiles.four_cover_bg, i = this.__sourceTempFiles.four_cover, 
                        r.drawImage(s, 0, 0, t.canvasWidth, t.canvasHeight), o = (t.defaultWidth - 693) * a, 
                        c = (t.defaultHeight - 502) * a, h = t.canvasWidth - o, l = t.canvasHeight - c, 
                        u = (t.canvasWidth - h) / 2, v = 60 * a, r.drawImage(i, u, v, h, l), f = .9 * h, 
                        p = .9 * l, u += (h - f) / 2, v += (l - p) / 2, r.setStrokeStyle("#fff"), r.strokeRect(u, v, f, p), 
                        r.restore(), r.setFillStyle("#ffffff"), r.setFontSize(70 * a), r.fillText("+", u + 20, v + 25), 
                        v += 140 * a + l, d = n.avg_price ? n.avg_price + "元/平方" : "待定", g = t.canvasWidth / 2, 
                        m = n.name, r.setTextAlign("center"), r.setFillStyle("#467bcb"), _ = 54 * a, x = r.measureText(m), 
                        w = 5.4 * a, !(x.width * w + 20 > t.canvasWidth)) {
                            e.next = 52;
                            break;
                        }
                        if (S = (t.canvasWidth - 60) / m.length, y = [], !(m.length >= 16)) {
                            e.next = 48;
                            break;
                        }
                        for (T = void 0, b = void 0, T = b = 0, F = 0; F < m.length; F++) (F + 1) % 16 == 0 ? (T = 16 * ((F + 1) / 16 - 1), 
                        b = (F + 1) / 16 * 16, y.push(m.slice(T, b))) : F + 1 >= m.length && (T = (m.length - (F + 1) % 16) / 16, 
                        b = F + 1, y.push(m.slice(16 * T, b)));
                        for (r.setFontSize(40 * a), k = !0, W = !1, I = void 0, e.prev = 30, z = y[Symbol.iterator](); !(k = (R = z.next()).done); k = !0) C = R.value, 
                        r.fillText(C, g, v), v += 20;
                        e.next = 38;
                        break;

                      case 34:
                        e.prev = 34, e.t0 = e.catch(30), W = !0, I = e.t0;

                      case 38:
                        e.prev = 38, e.prev = 39, !k && z.return && z.return();

                      case 41:
                        if (e.prev = 41, !W) {
                            e.next = 44;
                            break;
                        }
                        throw I;

                      case 44:
                        return e.finish(41);

                      case 45:
                        return e.finish(38);

                      case 46:
                        e.next = 50;
                        break;

                      case 48:
                        S > _ ? r.setFontSize(_) : r.setFontSize(S), r.fillText(m, g, v);

                      case 50:
                        e.next = 54;
                        break;

                      case 52:
                        r.setFontSize(_), r.fillText(m, g, v);

                      case 54:
                        return v += 60 * a, r.setFontSize(32 * a), r.fillText("一开倾城，万众热捧", g, v), v += 40 * a, 
                        H = "/images/share_style_four_bg.png", e.next = 61, this.getImgParams(H);

                      case 61:
                        A = e.sent, r.drawImage(H, (t.canvasWidth - A.width * a) / 2, v, A.width * a, A.height * a), 
                        v += 40 * a + A.height, r.setFillStyle("#fc855b"), r.setFontSize(36 * a), r.fillText(d, g, v), 
                        P = 540 * a, q = 170 * a, u = (t.canvasWidth - P) / 2, v = t.canvasHeight - (q + 50 * a), 
                        G = 150 * a, D = 150 * a, E = u + 10 * a, j = v + 10 * a, r.setShadow(0, 0, 0, "rgba(0,0,0,0)"), 
                        r.setTextAlign("left"), r.setFillStyle("#343434"), r.setFontSize(36 * a), u = u + G + 20 * a, 
                        v += 70 * a, r.fillText("长按识别小程序码", u, v), r.setFontSize(26 * a), v += 50 * a, r.fillText("查看更多楼盘信息", u, v), 
                        r.drawImage(this.__qrcodeUrl, E, j, G, D), r.draw();

                      case 83:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 30, 34, 38, 46 ], [ 39, , 41, 45 ] ]);
            }));
            return e;
        }()
    }, {
        key: "__drawStyleFive",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, a, n, s, i, o, c, h, l, u, v, f, p, d, g, m, _, x, w, S, y, T, b, F, k, W, I, z, R, C, H, A, P, q, G, D;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this.options, r = wx.createCanvasContext(this.canvasIDs[4]), a = t.canvasScale, 
                        n = this.params, s = this.__sourceTempFiles.five_cover_bg, i = this.__sourceTempFiles.five_cover, 
                        r.drawImage(s, 0, 0, t.canvasWidth, t.canvasHeight), o = (t.defaultWidth - 610) * a, 
                        c = (t.defaultHeight - 500) * a, h = t.canvasWidth - o, l = t.canvasHeight - c, 
                        u = (t.canvasWidth - h) / 2, v = 60 * a, r.drawImage(i, u, v, h, l), r.restore(), 
                        v += 140 * a + l, f = n.avg_price ? n.avg_price + "元/平方" : "待定", p = t.canvasWidth / 2, 
                        d = n.name, r.setFillStyle("#467bcb"), g = 54 * a, m = r.measureText(d), _ = 5.4 * a, 
                        r.setTextAlign("center"), !(m.width * _ + 60 > t.canvasWidth)) {
                            e.next = 44;
                            break;
                        }
                        if (x = (t.canvasWidth - 60) / (d.length - 2), w = [], !(d.length >= 16)) {
                            e.next = 40;
                            break;
                        }
                        for (S = void 0, y = void 0, S = y = 0, T = 0; T < d.length; T++) (T + 1) % 16 == 0 ? (S = 16 * ((T + 1) / 16 - 1), 
                        y = (T + 1) / 16 * 16, w.push(d.slice(S, y))) : T + 1 >= d.length && (S = (d.length - (T + 1) % 16) / 16, 
                        y = T + 1, w.push(d.slice(16 * S, y)));
                        for (r.setFontSize(40 * a), b = !0, F = !1, k = void 0, e.prev = 22, W = w[Symbol.iterator](); !(b = (I = W.next()).done); b = !0) z = I.value, 
                        r.fillText(z, p, v), v += 20;
                        e.next = 30;
                        break;

                      case 26:
                        e.prev = 26, e.t0 = e.catch(22), F = !0, k = e.t0;

                      case 30:
                        e.prev = 30, e.prev = 31, !b && W.return && W.return();

                      case 33:
                        if (e.prev = 33, !F) {
                            e.next = 36;
                            break;
                        }
                        throw k;

                      case 36:
                        return e.finish(33);

                      case 37:
                        return e.finish(30);

                      case 38:
                        e.next = 42;
                        break;

                      case 40:
                        x > g ? r.setFontSize(g) : r.setFontSize(x), r.fillText(d, p, v);

                      case 42:
                        e.next = 46;
                        break;

                      case 44:
                        r.setFontSize(g), r.fillText(d, p, v);

                      case 46:
                        return v += 60 * a, r.setFontSize(32 * a), r.fillText("一开倾城，万众热捧", p, v), v += 40 * a, 
                        R = "/images/share_style_four_bg.png", e.next = 53, this.getImgParams(R);

                      case 53:
                        C = e.sent, r.drawImage(R, (t.canvasWidth - C.width * a) / 2, v, C.width * a, C.height * a), 
                        v += 40 * a + C.height, r.setFillStyle("#fc855b"), r.setFontSize(36 * a), r.fillText(f, p, v), 
                        H = 540 * a, A = 170 * a, u = (t.canvasWidth - H) / 2, v = t.canvasHeight - (A + 50 * a), 
                        P = 150 * a, q = 150 * a, G = u + 10 * a, D = v + 10 * a, r.setShadow(0, 0, 0, "rgba(0,0,0,0)"), 
                        r.setTextAlign("left"), r.setFillStyle("#343434"), r.setFontSize(36 * a), u = u + P + 20 * a, 
                        v += 70 * a, r.fillText("长按识别小程序码", u, v), r.setFontSize(26 * a), v += 50 * a, r.fillText("查看更多楼盘信息", u, v), 
                        r.drawImage(this.__qrcodeUrl, G, D, P, q), r.draw();

                      case 75:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 22, 26, 30, 38 ], [ 31, , 33, 37 ] ]);
            }));
            return e;
        }()
    }, {
        key: "saveCanvasToTempFile",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r = this, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this, e.abrupt("return", new Promise(function(e, n) {
                            wx.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: r.options.canvasWidth,
                                height: r.options.canvasHeight,
                                canvasId: r.canvasIDs[a],
                                success: function(r) {
                                    var a = r.tempFilePath;
                                    wx.saveImageToPhotosAlbum({
                                        filePath: a,
                                        success: function(t) {
                                            e(t);
                                        },
                                        fail: function(e) {
                                            t.__postError(e, "保存画图内容到临时目录失败"), n(e);
                                        }
                                    });
                                },
                                fail: function(e) {
                                    t.__postError(e, "生成临时文件失败"), n(e);
                                }
                            });
                        }));

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getImgParams",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = this, e.abrupt("return", new Promise(function(e, a) {
                            wx.getImageInfo({
                                src: t,
                                success: function(t) {
                                    e(t);
                                },
                                fail: function(e) {
                                    r.__postError(e, "获取图片属性失败"), a(e);
                                }
                            });
                        }));

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "downloadFile",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = t.path, a = this, r = r.replace(/^http:/, "https:"), e.abrupt("return", new Promise(function(e, n) {
                            if (!r) return a.__postError("path 为空", "下载对象里面没有路径"), n("下载对象里面没有路径");
                            wx.downloadFile({
                                url: r,
                                success: function(r) {
                                    e({
                                        name: t.name,
                                        path: r.tempFilePath
                                    });
                                },
                                fail: function(e) {
                                    a.__postError(e, "图片资源下载失败"), n("图片资源下载失败");
                                }
                            });
                        }));

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "__createQRCode",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, api.getWeChatQrCode(this.params.project_id, this.params.type, this.params.lottery_id || "");

                      case 2:
                        return t = e.sent, e.next = 5, this.downloadFile({
                            name: "qrcode",
                            path: t.data
                        });

                      case 5:
                        return r = e.sent, e.abrupt("return", r.path);

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "__postError",
        value: function(e, t) {}
    } ]), e;
}();

module.exports = DrawImages;