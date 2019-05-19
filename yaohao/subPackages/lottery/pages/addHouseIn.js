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
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), Index = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var s = arguments.length, i = Array(s), o = 0; o < s; o++) i[o] = arguments[o];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        a.config = {
            navigationBarTitleText: "上传户型图"
        }, a.data = {
            num: [ "1" ],
            dataArr: [ {
                house_live: "住宅",
                shi: "",
                ting: "",
                wei: "",
                house_class: "",
                house_area: "",
                house_shared: "",
                house_item: "",
                imageList: []
            } ],
            itemList: [],
            type: 1,
            newList: [],
            project_id: ""
        }, a.$repeat = {}, a.$props = {
            BackHome: {}
        }, a.$events = {}, a.components = {
            BackHome: _BackHome2.default
        }, a.methods = {
            getLabel: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getLabel(e.type);

                          case 2:
                            r = t.sent, e.itemList = r.data, e.$apply();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            submit: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, a, n, s, i, o, u, c;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            r = [], a = !0, n = !1, s = void 0, t.prev = 4, i = e.dataArr[Symbol.iterator]();

                          case 6:
                            if (a = (o = i.next()).done) {
                                t.next = 14;
                                break;
                            }
                            if (u = o.value, u.shi && u.house_live && u.house_class && u.house_area && u.house_live && u.imageList[0] && !(u.imageList[0].length < 1)) {
                                t.next = 10;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("内容不能为空，请审查", "", "none"));

                          case 10:
                            r.push({
                                tag: u.house_live,
                                num_bed_room: u.shi,
                                num_living_room: u.ting,
                                num_rest_room: u.wei,
                                name: u.house_class,
                                outer_square: u.house_area,
                                public_square: u.house_shared,
                                price_avg: u.house_item,
                                img: u.imageList[0]
                            });

                          case 11:
                            a = !0, t.next = 6;
                            break;

                          case 14:
                            t.next = 20;
                            break;

                          case 16:
                            t.prev = 16, t.t0 = t.catch(4), n = !0, s = t.t0;

                          case 20:
                            t.prev = 20, t.prev = 21, !a && i.return && i.return();

                          case 23:
                            if (t.prev = 23, !n) {
                                t.next = 26;
                                break;
                            }
                            throw s;

                          case 26:
                            return t.finish(23);

                          case 27:
                            return t.finish(20);

                          case 28:
                            return t.next = 30, _api2.default.submit_buiding({
                                arr: r,
                                project_id: e.project_id
                            });

                          case 30:
                            c = t.sent, 0 == c.code && (e.dataArr = [ {
                                house_live: "住宅",
                                shi: "",
                                ting: "",
                                wei: "",
                                house_class: "",
                                house_area: "",
                                house_shared: "",
                                house_item: "",
                                imageList: []
                            } ], _index.tip.toast("上传成功", function() {
                                wx.navigateBack();
                            })), e.$apply();

                          case 33:
                          case "end":
                            return t.stop();
                        }
                    }, t, e, [ [ 4, 16, 20, 28 ], [ 21, , 23, 27 ] ]);
                }))();
            },
            inputValue: function(e, t, r) {
                var a = this.dataArr[e], n = r.detail.value;
                switch (t) {
                  case "shi":
                    n = isNaN(n) || parseInt(n) <= 0 ? 0 : parseInt(n), a.shi = n;
                    break;

                  case "ting":
                    n = isNaN(n) || parseInt(n) <= 0 ? 0 : parseInt(n), a.ting = n;
                    break;

                  case "wei":
                    n = isNaN(n) || parseInt(n) <= 0 ? 0 : parseInt(n), a.wei = n;
                    break;

                  case "house_class":
                    a.house_class = r.detail.value;
                    break;

                  case "house_area":
                    n = isNaN(n) || parseInt(n) <= 0 ? 0 : parseInt(n), a.house_area = n;
                    break;

                  case "house_shared":
                    n = isNaN(n) || parseInt(n) <= 0 ? 0 : parseInt(n), a.house_shared = n;
                    break;

                  case "house_item":
                    n = isNaN(n) || parseInt(n) <= 0 ? 0 : parseInt(n), a.house_item = n;
                }
            },
            appendHouse: function() {
                this.dataArr.push({
                    house_live: "住宅",
                    shi: "",
                    ting: "",
                    wei: "",
                    house_style: "",
                    house_class: "",
                    house_area: "",
                    house_shared: "",
                    house_item: "",
                    imageList: []
                });
            },
            deleteHouse: function(e) {
                this.dataArr.splice(e, 1);
            },
            uploadFile: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var a, n, s, i;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            if (a = t.dataArr[e], !(a.imageList.length > 0)) {
                                r.next = 3;
                                break;
                            }
                            return r.abrupt("return", _index.tip.toast("最多上传1张", "", "none"));

                          case 3:
                            return r.prev = 3, r.next = 6, _index.foundation.chooseImageSync();

                          case 6:
                            return n = r.sent, wx.showLoading({
                                title: "上传中"
                            }), r.next = 10, _index.foundation.uploadFileSync(n.tempFilePaths[0]);

                          case 10:
                            if (s = r.sent, "200" == s.statusCode) {
                                r.next = 15;
                                break;
                            }
                            _index.tip.error("图片上传失败"), r.next = 19;
                            break;

                          case 15:
                            if (i = s.data, "0" == i.status) {
                                r.next = 18;
                                break;
                            }
                            return r.abrupt("return", _index.tip.error("图片上传失败"));

                          case 18:
                            a.imageList.push(i.data.url);

                          case 19:
                            r.next = 24;
                            break;

                          case 21:
                            r.prev = 21, r.t0 = r.catch(3), _index.tip.error("图片上传失败");

                          case 24:
                            wx.hideLoading(), t.$apply();

                          case 26:
                          case "end":
                            return r.stop();
                        }
                    }, r, t, [ [ 3, 21 ] ]);
                }))();
            },
            deletePic: function(e, t) {
                var r = [], a = this.dataArr[e];
                for (var n in a.imageList) n != t && r.push(a.imageList[n]);
                a.imageList = r;
            },
            preview: function(e) {
                wx.previewImage({
                    urls: [ e ]
                });
            },
            optHouse: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var a, n;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            a = t.dataArr[e], n = t, n.newList = [], n.itemList.map(function(e) {
                                n.newList.push(e.text);
                            }), wx.showActionSheet({
                                itemList: n.newList,
                                success: function(e) {
                                    a.house_live = n.newList[e.tapIndex], n.$apply();
                                },
                                fail: function(e) {}
                            });

                          case 5:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.project_id = t.project_id, this.methods.getLabel.call(this);

                      case 2:
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
            return _index.share.share("我在这里查摇号结果，好方便哦", "/pages/index");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/addHouseIn"));