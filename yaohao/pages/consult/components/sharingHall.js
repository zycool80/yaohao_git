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
            function n(a, o) {
                try {
                    var i = t[a](o), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), globalModel = require("./../../../models/GlobalModel.js"), sharingHall = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.props = {
            items: {
                type: Array,
                default: []
            },
            more: {
                type: Boolean,
                default: !0
            }
        }, n.data = {
            userInfo: null,
            inputPlace: "",
            inputVal: "",
            shareIndex: 0,
            newIndex: 0,
            delModel: !1,
            myType: [ {
                type: 1,
                value: "最新分享"
            }, {
                type: 2,
                value: "最热分享"
            } ],
            shareType: [ {
                type: "",
                value: "全部"
            }, {
                type: 1,
                value: "公寓"
            }, {
                type: 2,
                value: "住宅"
            }, {
                type: 3,
                value: "我的关注"
            } ]
        }, n.methods = {
            inputTyping: function(e) {
                this.inputVal = e.detail.value;
            },
            closeVideoView: function(e) {
                this.items[e].imageView = !1, this.$apply();
            },
            viewVideo: function(e) {
                var t = !0, r = !1, n = void 0;
                try {
                    for (var a, o = this.items[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                        a.value.imageView = !1;
                    }
                } catch (e) {
                    r = !0, n = e;
                } finally {
                    try {
                        !t && o.return && o.return();
                    } finally {
                        if (r) throw n;
                    }
                }
                this.items[e].imageView = !0, this.$apply();
            },
            like: function(e, t) {
                var r = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var a, o;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return a = e.id, n.next = 3, _api2.default.postsLike(a);

                          case 3:
                            o = n.sent, r.items[t].like_num = o.data.num, r.items[t].numstatus = o.data.status, 
                            r.$apply();

                          case 7:
                          case "end":
                            return n.stop();
                        }
                    }, n, r);
                }))();
            },
            preview: function(e, t) {
                var r = [];
                e.images.forEach(function(e) {
                    r = r.concat(e);
                });
                var n = t.currentTarget.dataset, a = n.preview;
                a && r.length > 0 && wx.previewImage({
                    current: a,
                    urls: r
                });
            },
            talkdelBox: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n, a;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            t.delModel = !0, n = t.items[e], a = [], t.userInfo.id == n.session_id && a.push("删除"), 
                            a.push("举报"), wx.showActionSheet({
                                itemList: a,
                                success: function() {
                                    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                                        var o, i;
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                o = a[r.tapIndex], e.t0 = o, e.next = "删除" === e.t0 ? 4 : "举报" === e.t0 ? 19 : 21;
                                                break;

                                              case 4:
                                                if (t.userInfo.id != n.session_id) {
                                                    e.next = 17;
                                                    break;
                                                }
                                                return e.next = 7, wx.$api.posts.delShare(n.id);

                                              case 7:
                                                if (i = e.sent, "删除成功" !== i.data) {
                                                    e.next = 14;
                                                    break;
                                                }
                                                return tip.toast("删除成功"), e.next = 12, t.reload();

                                              case 12:
                                                e.next = 15;
                                                break;

                                              case 14:
                                                tip.toast("删除失败", "", "none");

                                              case 15:
                                                e.next = 18;
                                                break;

                                              case 17:
                                                tip.toast("非本人不能操作", "", "none");

                                              case 18:
                                                return e.abrupt("break", 21);

                                              case 19:
                                                return wx.navigateTo({
                                                    url: "/subPackages/project/pages/reportType?type=1&id=" + n.session_id
                                                }), e.abrupt("break", 21);

                                              case 21:
                                                t.$apply();

                                              case 22:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e, t);
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                }(),
                                fail: function(e) {
                                    console.log(e.errMsg);
                                }
                            }), t.$apply();

                          case 7:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            focus: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return r.next = 2, _api2.default.followSalesMan(t.items[e].sales_man_id);

                          case 2:
                            t.items[e].attention = 1 == t.items[e].attention ? "2" : "1", t.$apply();

                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            clearInput: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.inputVal = "", e.$emit("sendInputVal", e.inputVal), e.$apply();

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            doSearch: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.inputVal || (e.inputVal = e.inputPlace.replace(/搜索：/, "")), e.$emit("sendInputVal", e.inputVal), 
                            e.$apply();

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            chooseShareType: function(e, t) {
                var r = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            "one" == e && (r.shareIndex = t.detail.value), "two" == e && (r.newIndex = t.detail.value), 
                            r.$emit("chooseShare", parseInt(r.shareIndex), parseInt(r.newIndex) + 1);

                          case 3:
                          case "end":
                            return n.stop();
                        }
                    }, n, r);
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
                var r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        globalModel.getGlobalConfig().then(function(e) {
                            r.inputPlace = e.searchText, r.$apply();
                        }), this.userInfo = globalModel.getUserInfo();

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.component);

exports.default = sharingHall;