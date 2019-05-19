var regeneratorRuntime = require("../../npm/regenerator-runtime/runtime.js");
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

var _slicedToArray = function() {
    function e(e, t) {
        var n = [], r = !0, a = !1, s = void 0;
        try {
            for (var i, o = e[Symbol.iterator](); !(r = (i = o.next()).done) && (n.push(i.value), 
            !t || n.length !== t); r = !0) ;
        } catch (e) {
            a = !0, s = e;
        } finally {
            try {
                !r && o.return && o.return();
            } finally {
                if (a) throw s;
            }
        }
        return n;
    }
    return function(t, n) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), _createClass = function() {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../api/api.js"), _api2 = _interopRequireDefault(_api), _answer = require("./components/answer.js"), _answer2 = _interopRequireDefault(_answer), _consultationDetail = require("./components/consultationDetail.js"), _consultationDetail2 = _interopRequireDefault(_consultationDetail), _sharingHall = require("./components/sharingHall.js"), _sharingHall2 = _interopRequireDefault(_sharingHall), _utilsKit = require("./../../utils/utilsKit/index.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var s = arguments.length, i = Array(s), o = 0; o < s; o++) i[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            enablePullDownRefresh: !0
        }, r.data = {
            changeType: 1,
            page: 1,
            more: !0,
            articles: [],
            hotArticles: [],
            dernData: [],
            postBanners: [],
            questionBanners: [],
            questionItems: [],
            items: [],
            sendData: {},
            shareIndex: 0,
            newIndex: 1,
            keyword: ""
        }, r.$repeat = {}, r.$props = {
            answerTemplate: {
                "v-bind:questionItems.sync": "questionItems",
                "v-bind:questionBanners.sync": "questionBanners",
                "xmlns:v-on": "",
                "v-bind:more.sync": "more"
            },
            consultTemplate: {
                "xmlns:v-bind": "",
                "v-bind:postBanners.sync": "postBanners",
                "v-bind:articles.sync": "articles",
                "v-bind:hotResult.sync": "hotArticles",
                "v-bind:dernResult.sync": "dernData",
                "v-bind:more.sync": "more"
            },
            sharingTemplate: {
                "v-bind:items.sync": "items",
                "v-bind:more.sync": "more"
            }
        }, r.$events = {
            answerTemplate: {
                "v-on:answerClick": "chooseAnswer"
            },
            sharingTemplate: {
                "v-on:chooseShare": "chooseShareType",
                "v-on:sendInputVal": "sendInputVal"
            }
        }, r.components = {
            answerTemplate: _answer2.default,
            consultTemplate: _consultationDetail2.default,
            sharingTemplate: _sharingHall2.default
        }, r.methods = {
            sendInputVal: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return t.keyword = e, n.next = 3, t.reload();

                          case 3:
                            t.$apply();

                          case 4:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            chooseShareType: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return n.shareIndex = e, n.newIndex = t, r.next = 4, n.reload();

                          case 4:
                            n.$apply();

                          case 5:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            chooseAnswer: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return t.sendData = e, n.next = 3, t.reload();

                          case 3:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            changetype: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return t.changeType = parseInt(e), _utilsKit.cache.set("question_index", t.changeType), 
                            n.next = 4, t.reload();

                          case 4:
                            t.$apply();

                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getNewsData",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, a, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, Promise.all([ _api2.default.article.projectArticle(0, "", this.page, 0, ""), _api2.default.article.projectArticle(0, "", 1, 1, ""), _api2.default.article.dernSources() ]);

                      case 2:
                        t = e.sent, n = _slicedToArray(t, 3), r = n[0], a = n[1], s = n[2], this.hotArticles = a.data.data, 
                        this.dernData = s.data.data, this.page >= r.data.last_page || !r.data.last_page ? this.more = !1 : this.page++, 
                        this.articles = this.articles.concat(r.data.data), this.$apply();

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getQuestionData",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.sendData.page = this.page, e.next = 3, _api2.default.question.getQuestionAnswerList(this.sendData);

                      case 3:
                        t = e.sent, this.page >= t.data.last_page || !t.data.last_page ? this.more = !1 : this.page++, 
                        this.questionItems = this.questionItems.concat(t.data.data), this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getShareRoomData",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.getPosts(this.keyword, "", this.shareIndex, this.newIndex, this.page);

                      case 2:
                        t = e.sent, t.data && t.data.data && 0 !== t.data.data.length ? this.page++ : this.more = !1, 
                        this.items = this.items.concat(t.data.data), this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "loadNext",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        e.t0 = parseInt(this.changeType), e.next = 1 === e.t0 ? 3 : 2 === e.t0 ? 6 : 3 === e.t0 ? 13 : 16;
                        break;

                      case 3:
                        return e.next = 5, this.getNewsData();

                      case 5:
                        return e.abrupt("break", 16);

                      case 6:
                        return e.next = 8, _api2.default.getBannerList(19);

                      case 8:
                        return t = e.sent, this.questionBanners = t.data, e.next = 12, this.getQuestionData();

                      case 12:
                        return e.abrupt("break", 16);

                      case 13:
                        return e.next = 15, this.getShareRoomData();

                      case 15:
                        return e.abrupt("break", 16);

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.changeType = t.changeType || 1, e.next = 3, this.reload();

                      case 3:
                        this.$apply();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onTabItemTap",
        value: function() {
            wx.hideTabBarRedDot({
                index: 2
            });
        }
    }, {
        key: "reload",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中..."
                        }), this.page = 1, this.more = !0, this.articles = [], this.hotArticles = [], this.dernData = [], 
                        this.postBanners = [], this.questionItems = [], this.items = [], e.next = 11, this.loadNext();

                      case 11:
                        wx.hideLoading();

                      case 12:
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
                        wx.stopPullDownRefresh();

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onHide",
        value: function() {
            _utilsKit.cache.set("question_index", "");
        }
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = _utilsKit.cache.get("question_index"), this.changeType = t || this.changeType, 
                        !t) {
                            e.next = 5;
                            break;
                        }
                        return e.next = 5, this.reload();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onReachBottom",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.more) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        return e.next = 4, this.loadNext();

                      case 4:
                        this.$apply();

                      case 5:
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
            return _utilsKit.share.share("我在这里查摇号结果，好方便哦", "/pages/consult/index?changeType=" + this.changeType);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/consult/index"));