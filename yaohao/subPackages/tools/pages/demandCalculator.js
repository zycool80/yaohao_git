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
            function r(s, o) {
                try {
                    var i = t[s](o), a = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(a).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(a);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, n, r, s;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "刚需资格查询"
        }, r.data = {
            avatarDefault: "http://imgcdn.huanjutang.com/assets/img/20190108/5c344828d0e9f.png",
            userInfo: {},
            code: "",
            page: 1,
            showAnswers: [],
            answerObject: {},
            qualified: !0,
            show: {},
            isComputed: !1,
            questions: [ {
                title: "1、购房人以及家庭成员在大成都区域内名下是否均有自有房产住房？",
                page: 1,
                answers: [ {
                    text: "均无自有产权住房",
                    next: 2,
                    isChecked: !1,
                    done: !1
                }, {
                    text: "有自有产权住房",
                    next: !1,
                    isChecked: !1,
                    done: !0
                } ]
            }, {
                title: "2、购房人以及家庭成员自2016年10月1日以来有无住房转让记录？",
                page: 2,
                answers: [ {
                    text: "无转让记录",
                    next: 3,
                    isChecked: !1,
                    done: !1
                }, {
                    text: "有转让记录",
                    next: !1,
                    isChecked: !1,
                    done: !0
                } ]
            }, {
                title: "3、登记购房人的婚姻情况？",
                page: 3,
                answers: [ {
                    text: "单身",
                    next: 4,
                    isChecked: !1,
                    done: !1
                }, {
                    text: "已婚",
                    next: !1,
                    isChecked: !1,
                    done: !0
                }, {
                    text: "离异",
                    next: 5,
                    isChecked: !1,
                    done: !1
                } ]
            }, {
                title: "4、年龄是否已满：男士22周岁，女士20周岁？",
                page: 4,
                answers: [ {
                    text: "已满足",
                    next: !1,
                    isChecked: !1,
                    done: !0
                }, {
                    text: "不满足",
                    next: !1,
                    isChecked: !1,
                    done: !0
                } ]
            }, {
                title: "4、购房登记人时离婚是否已满2年？",
                page: 5,
                answers: [ {
                    text: "已满足",
                    next: !1,
                    isChecked: !1,
                    done: !0
                }, {
                    text: "不满足",
                    next: !1,
                    isChecked: !1,
                    done: !0
                } ]
            } ]
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.methods = {
            nextQuestionHandle: function(e, t, n) {
                var r = this.questions[e], s = r.answers[t];
                r.answers.forEach(function(e) {
                    e.isChecked = !1;
                }), s.isChecked = !0, this.answerObject["page_" + r.page] = r, n ? this.isComputed = !0 : (this.isComputed = !1, 
                this.page = s.next), this.$apply();
            },
            backQuestionHandle: function(e) {
                this.isComputed = !1, delete this.answerObject["page_" + e], 1 == e ? wx.redirectTo({
                    url: "/pages/webview2?redirect=https%3A%2F%2Fweb.huanjutang.com%2Flottery%2FbuyHouseStartPage%3Ftitle%3D%E5%BF%AB%E7%9C%8B%E7%9C%8B%E6%82%A8%E6%98%AF%E5%90%A6%E5%85%B7%E6%9C%89%E5%88%9A%E9%9C%80%E8%B5%84%E6%A0%BC%EF%BC%9F"
                }) : this.page = parseInt(e) - 1, this.$apply();
            },
            retestHandle: function() {
                this.answerObject = {}, this.page = 1, this.isComputed = !1, this.showAnswers = [], 
                this.show = {}, this.questions.forEach(function(e) {
                    e.answers.forEach(function(e, t) {
                        e.isChecked = !1;
                    });
                });
            },
            submitHandle: function() {
                var e = this;
                this.answerObject = this.answerObject ? this.answerObject : {};
                for (var t in this.answerObject) this.showAnswers.push(this.answerObject[t]);
                var n = 0;
                this.showAnswers.forEach(function(t) {
                    t.answers.forEach(function(r, s) {
                        n += r.isChecked ? s + 1 : 0, !0 === r.isChecked && (e.show[t.title] = r.text);
                    });
                }), this.qualified = -1 === [ 2, 3, 5, 7 ].indexOf(n), this.page = 6, this.$apply();
            },
            previewImageHandle: function(e) {
                var t = e.target.dataset.src;
                wx.previewImage({
                    current: t,
                    urls: [ t ]
                });
            }
        }, s = n, _possibleConstructorReturn(r, s);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.userInfo = globalModel.getUserInfo(), e.next = 3, globalModel.getGlobalConfig();

                      case 3:
                        n = e.sent, this.code = n.gangxu_img, this.$apply();

                      case 6:
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
            return _index.share.share("测一测你是否有刚需资格");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/tools/pages/demandCalculator"));