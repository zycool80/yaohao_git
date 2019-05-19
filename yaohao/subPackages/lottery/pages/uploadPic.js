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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationBarTitleText: "上传相册",
            enablePullDownRefresh: !1
        }, n.data = {
            project_id: "",
            imgNum: 6,
            huxingType: "",
            dataArr: []
        }, n.$repeat = {}, n.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, n.methods = {
            switchType: function(e, t) {
                this.dataArr[e].houseIndex = t.detail.value;
            },
            delHouse: function(e) {
                this.dataArr.splice(e, 1);
            },
            upFiles: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n, a, i, o, s, u, c, p, l;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            r = [], n = !0, a = !1, i = void 0, t.prev = 4, o = e.dataArr[Symbol.iterator]();

                          case 6:
                            if (n = (s = o.next()).done) {
                                t.next = 16;
                                break;
                            }
                            u = s.value, c = [];
                            for (p in u.imageList) c.push(u.imageList[p]);
                            if (r.push({
                                img: c.join(","),
                                type: u.houseType[u.houseIndex].id
                            }), c.length > 0) {
                                t.next = 13;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("图片不能为空", "", "none"));

                          case 13:
                            n = !0, t.next = 6;
                            break;

                          case 16:
                            t.next = 22;
                            break;

                          case 18:
                            t.prev = 18, t.t0 = t.catch(4), a = !0, i = t.t0;

                          case 22:
                            t.prev = 22, t.prev = 23, !n && o.return && o.return();

                          case 25:
                            if (t.prev = 25, !a) {
                                t.next = 28;
                                break;
                            }
                            throw i;

                          case 28:
                            return t.finish(25);

                          case 29:
                            return t.finish(22);

                          case 30:
                            return wx.showLoading({
                                title: "上传中...",
                                mask: !0
                            }), t.next = 33, _api2.default.setPhotos(r, e.project_id);

                          case 33:
                            if (l = t.sent, wx.hideLoading(), "上传成功" !== l.message) {
                                t.next = 39;
                                break;
                            }
                            return t.next = 38, _index.tip.toast(l.message);

                          case 38:
                            wx.navigateBack({
                                url: "/subPackages/project/pages/photos?project_id=" + e.project_id
                            });

                          case 39:
                          case "end":
                            return t.stop();
                        }
                    }, t, e, [ [ 4, 18, 22, 30 ], [ 23, , 25, 29 ] ]);
                }))();
            },
            addHouse: function() {
                this.dataArr.push({
                    houseType: JSON.parse(this.huxingType),
                    houseIndex: 0,
                    imageList: []
                });
            },
            deletePic: function(e, t) {
                var r = [];
                for (var n in this.dataArr[e].imageList) n != t && r.push(this.dataArr[e].imageList[n]);
                this.dataArr[e].imageList = r;
            },
            preview: function(e) {
                wx.previewImage({
                    urls: [ e ]
                });
            },
            uploadFile: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n, a, i, o, s, u, c, p, l;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            if (t.imgNum = 6 - t.dataArr[e].imageList.length, !(t.dataArr[e].imageList.length > 6)) {
                                r.next = 3;
                                break;
                            }
                            return r.abrupt("return", _index.tip.toast("最多上传6张", "", "none"));

                          case 3:
                            return r.prev = 3, r.next = 6, _index.foundation.chooseImageSync({
                                num: t.imgNum
                            });

                          case 6:
                            n = r.sent, a = !0, i = !1, o = void 0, r.prev = 10, s = n.tempFilePaths[Symbol.iterator]();

                          case 12:
                            if (a = (u = s.next()).done) {
                                r.next = 28;
                                break;
                            }
                            return c = u.value, r.next = 16, _index.foundation.uploadFileSync(c);

                          case 16:
                            if (p = r.sent, "200" == p.statusCode) {
                                r.next = 21;
                                break;
                            }
                            return r.abrupt("return", _index.tip.error("图片上传失败"));

                          case 21:
                            if (l = p.data, "0" == l.status) {
                                r.next = 24;
                                break;
                            }
                            return r.abrupt("return", _index.tip.error("图片上传失败"));

                          case 24:
                            t.dataArr[e].imageList.push(l.data.url);

                          case 25:
                            a = !0, r.next = 12;
                            break;

                          case 28:
                            r.next = 34;
                            break;

                          case 30:
                            r.prev = 30, r.t0 = r.catch(10), i = !0, o = r.t0;

                          case 34:
                            r.prev = 34, r.prev = 35, !a && s.return && s.return();

                          case 37:
                            if (r.prev = 37, !i) {
                                r.next = 40;
                                break;
                            }
                            throw o;

                          case 40:
                            return r.finish(37);

                          case 41:
                            return r.finish(34);

                          case 42:
                            r.next = 46;
                            break;

                          case 44:
                            r.prev = 44, r.t1 = r.catch(3);

                          case 46:
                            wx.hideLoading(), t.$apply();

                          case 48:
                          case "end":
                            return r.stop();
                        }
                    }, r, t, [ [ 3, 44 ], [ 10, 30, 34, 42 ], [ 35, , 37, 41 ] ]);
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
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.project_id = t.project_id, e.next = 3, _api2.default.huxingPhotosType(2);

                      case 3:
                        r = e.sent, this.huxingType = JSON.stringify(r.data), this.dataArr.push({
                            houseType: JSON.parse(this.huxingType),
                            houseIndex: 0,
                            imageList: []
                        }), this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function(e) {
            return _index.share.share("我在这里上传相册图");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/uploadPic"));