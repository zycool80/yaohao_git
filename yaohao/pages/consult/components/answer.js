var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, s) {
                try {
                    var i = t[a](s), o = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(o).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(o);
            }
            return r("next");
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
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), globalModel = require("./../../../models/GlobalModel.js"), answer = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var s = arguments.length, i = Array(s), o = 0; o < s; o++) i[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.props = {
            questionBanners: {
                type: Array,
                default: []
            },
            questionItems: {
                type: Array,
                default: []
            },
            more: {
                type: Boolean,
                default: !0
            }
        }, r.data = {
            avatar_url: "/images/default_sales_man_avatar.png",
            userInfo: [],
            questionNavs: [],
            newQuestionAnswer: !1,
            sortList: [ {
                name: "默认排序",
                index: ""
            }, {
                name: "时间由远到近",
                index: 1
            }, {
                name: "时间由近到远",
                index: 2
            }, {
                name: "按热度排序",
                index: 3
            } ],
            answerType: [ {
                name: "全部"
            }, {
                name: "未回答"
            }, {
                name: "已回答"
            }, {
                name: "已解决"
            } ],
            answerIndex: 0,
            sortIndex: 0,
            filterView: !1,
            grandparentIndex: 0,
            parentIndex: 0,
            switchIndex: 0,
            sort: "",
            sendData: {},
            answerDelModel: !1
        }, r.methods = {
            createQuestionAnalysis: function() {
                wx.$Analysis.sendEvent("问答-提问", {});
            },
            delBox: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            t.delModel = !0, r = t.questionItems[e], a = [], t.userInfo.id == r.user_id && a.push("删除"), 
                            a.push("举报"), wx.showActionSheet({
                                itemList: a,
                                success: function() {
                                    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
                                        var s, i;
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                s = a[n.tapIndex], e.t0 = s, e.next = "删除" === e.t0 ? 4 : "举报" === e.t0 ? 19 : 21;
                                                break;

                                              case 4:
                                                if (t.userInfo.id != r.user_id) {
                                                    e.next = 17;
                                                    break;
                                                }
                                                return e.next = 7, _api2.default.delQuestion(r.id);

                                              case 7:
                                                if (i = e.sent, "删除成功" != i.data) {
                                                    e.next = 14;
                                                    break;
                                                }
                                                return tip.toast("删除成功"), e.next = 12, t.methods.reload.call(t);

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
                                                    url: "/subPackages/project/pages/reportType?type=2&id=" + r.id
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
                                fail: function(e) {}
                            }), t.$apply();

                          case 7:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            closeCancel: function() {
                this.filterView = !1, this.$apply();
            },
            submitData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.$emit("answerClick", e.sendData), e.filterView = !1, e.$apply();

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            preview: function(e, t) {
                var n = [];
                e.img.forEach(function(e) {
                    n = n.concat(e);
                });
                var r = t.currentTarget.dataset, a = r.preview;
                a && n.length > 0 && wx.previewImage({
                    current: a,
                    urls: n
                });
            },
            resetData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.grandparentIndex = 0, e.parentIndex = 0, e.sortIndex = 0, e.switchIndex = 0, e.answerIndex = 0, 
                            e.sort = "", e.sendData = {}, e.filterView = !1, e.$emit("answerClick", e.sendData);

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            typeFilter: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var a, s, i;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            r.t0 = parseInt(t), r.next = 1 === r.t0 ? 3 : 2 === r.t0 ? 7 : 3 === r.t0 ? 9 : 13;
                            break;

                          case 3:
                            return n.parentIndex = 0, n.grandparentIndex = e, n.switchIndex = e, r.abrupt("break", 13);

                          case 7:
                            return n.parentIndex = e, r.abrupt("break", 13);

                          case 9:
                            return n.switchIndex = e, n.grandparentIndex = e, n.parentIndex = 0, r.abrupt("break", 13);

                          case 13:
                            a = n.questionNavs[n.grandparentIndex], s = a ? a.id : "", i = a ? a.tags[n.parentIndex].name : "", 
                            "全部" == a.tags[n.parentIndex].name && (i = ""), n.sendData.tag = i, n.sendData.type = s, 
                            3 == t && (n.filterView = !1, n.$emit("answerClick", n.sendData)), n.$apply();

                          case 21:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            toUrl: function(e) {
                wx.navigateTo({
                    url: e
                });
            },
            answerSort: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            t.filterView = !1, t.answerIndex = parseInt(e.detail.value), t.sendData.status = t.answerIndex, 
                            t.$emit("answerClick", t.sendData), t.$apply();

                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            pickerSort: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            t.filterView = !1, r = t.sortIndex = parseInt(e.detail.value), t.sort = t.sortList[r].index, 
                            t.sendData.time_order_by = t.sort, t.$emit("answerClick", t.sendData), t.$apply();

                          case 6:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            openSwitch: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.filterView = !e.filterView, e.$apply();

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.userInfo = globalModel.getUserInfo(), e.next = 3, _api2.default.question.questionType();

                      case 3:
                        if (n = e.sent, this.questionNavs = n.data, r = [], this.questionNavs.length > 0) {
                            for (a in this.questionNavs) r.push({
                                name: this.questionNavs[a].type_text,
                                id: this.questionNavs[a].id
                            });
                            this.questionNavs.forEach(function(e) {
                                e.tags.length > 1 && e.tags.unshift({
                                    name: "全部",
                                    id: ""
                                });
                            });
                        }
                        this.$apply();

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.component);

exports.default = answer;