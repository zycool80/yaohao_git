var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _toConsumableArray(t) {
    if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
        return n;
    }
    return Array.from(t);
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, n) {
            function r(a, i) {
                try {
                    var s = e[a](i), o = s.value;
                } catch (t) {
                    return void n(t);
                }
                if (!s.done) return Promise.resolve(o).then(function(t) {
                    r("next", t);
                }, function(t) {
                    r("throw", t);
                });
                t(o);
            }
            return r("next");
        });
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), api = require("./../../../api/api.js"), _require = require("./../../../utils/util.js"), transformRpx = _require.transformRpx, startX = 0, startY = 0, moveStartX = 0, moving = !1, scale = !1, curItem = {
    x: 0,
    y: 0,
    scale: 1
}, animation = null, moveAnimation = null, Index = function(t) {
    function e() {
        var t, n, r, a;
        _classCallCheck(this, e);
        for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(s))), 
        r.config = {
            backgroundColor: "#000000",
            disableScroll: !0
        }, r.data = {
            swiperList: [],
            bannerCountArr: [],
            navbar: [],
            changeIndex: 0,
            nowNumber: 1,
            more: !0,
            project_id: "",
            lottery_id: "",
            isOpen: "",
            isComplete: 1,
            project_name: "",
            animationData: null,
            disabled: !1,
            winWidth: 0,
            winHeight: 0,
            translateX: 0,
            itemIndex: 0
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
            changeNavbarHandle: function(t) {
                for (var e = t.currentTarget.dataset.index, n = 0, r = 0; r < this.bannerCountArr.length && r !== parseInt(e); r++) n += this.bannerCountArr[r];
                this.itemIndex = n, this.translateX = -this.itemIndex * transformRpx(750), animation.translateX(this.translateX).step(), 
                this.animationData = animation.export(), this.nowNumber = 1, this.changeIndex = e, 
                this.$apply();
            },
            touchstart: function(t) {
                if (1 !== t.touches.length || moving) startX = 0, startX = 0, startY = 0, moveStartX = 0; else {
                    var e = t.touches[0], n = e.pageX, r = e.pageY;
                    startX = n, startY = r, moveStartX = n, moving = !0;
                }
            },
            touchmove: function(t) {
                var e = t.changedTouches[0], n = e.pageX, r = e.pageY;
                if (scale) return !1;
                if (!moveStartX) return !1;
                if (!this.touchVerify(startX, startY, n, r)) return !1;
                if (t.touches.length > 1) return !1;
                var a = transformRpx(750) - transformRpx(750) * curItem.scale;
                if (curItem.x > a + 15 && curItem.x < 0) return !1;
                moveStartX = n;
            },
            touchend: function(t) {
                var e = t.changedTouches[0], n = e.pageX, r = e.pageY;
                if (scale) return setTimeout(function() {
                    scale = !1;
                }, 500), moving = !1, !1;
                if (!this.touchVerify(startX, startY, n, r)) return moving = !1, !1;
                var a = transformRpx(750) - transformRpx(750) * curItem.scale;
                if (curItem.x > a + 15 && curItem.x < 0) return moving = !1, !1;
                startX < n && n - startX > 40 ? this.rightScroll() : startX > n && startX - n > 40 ? this.leftScroll() : moving = !1, 
                this.swiperChangeHook(), startX = 0, moveStartX = 0;
            },
            onScale: function(t) {
                var e = t.detail;
                curItem.scale = e.scale, curItem.x = e.x, curItem.y = e.y, scale = !0;
            },
            onChange: function(t) {
                var e = t.detail;
                curItem.x = e.x, curItem.y = e.y;
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "swiperChangeHook",
        value: function() {
            for (var t = this.itemIndex, e = 0, n = 0, r = t + 1, a = 0; a < this.bannerCountArr.length; a++) n += this.bannerCountArr[a], 
            t + 1 > n && (r = t + 1 - n, e++);
            this.nowNumber = r, this.changeIndex = e, this.$apply();
        }
    }, {
        key: "touchVerify",
        value: function(t, e, n, r) {
            return t || Math.abs(e - r) < Math.abs(t - n);
        }
    }, {
        key: "leftScroll",
        value: function() {
            this.itemIndex < this.swiperList.length - 1 && (this.itemIndex++, this.translateX = -this.itemIndex * transformRpx(750), 
            animation.translateX(this.translateX).step(), this.animationData = animation.export(), 
            this.$apply(), curItem.scale = 0, curItem.x = 0, curItem.y = 0), moving = !1, startX = 0, 
            startX = 0, startY = 0, moveStartX = 0;
        }
    }, {
        key: "rightScroll",
        value: function() {
            this.itemIndex > 0 && (this.itemIndex--, this.translateX = -this.itemIndex * transformRpx(750), 
            animation.translateX(this.translateX).step(), this.animationData = animation.export(), 
            this.$apply()), moving = !1, startX = 0, startX = 0, startY = 0, moveStartX = 0;
        }
    }, {
        key: "onLoad",
        value: function() {
            function t(t) {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                var n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中..."
                        }), this.project_id = e.project_id, this.lottery_id = e.lottery_id || "", this.itemIndex = e.index, 
                        this.changeIndex = e.tab || 0, this.nowNumber = e.index ? parseInt(e.index) + 1 : 1, 
                        this.isOpen = e.is_this || "", this.project_name = e.project_name, t.next = 10, 
                        this.reload();

                      case 10:
                        animation = wx.createAnimation({
                            duration: 300,
                            timingFunction: "ease"
                        }), moveAnimation = wx.createAnimation({
                            duration: 0,
                            timingFunction: "linear"
                        }), n = wx.getSystemInfoSync(), this.winWidth = n.windowWidth, this.winHeight = n.windowHeight, 
                        this.itemIndex < this.swiperList.length - 1 && (this.translateX = -this.itemIndex * transformRpx(750), 
                        animation.translateX(this.translateX).step(), this.animationData = animation.export()), 
                        this.$apply(), wx.hideLoading(), setTimeout(function() {
                            wx.setNavigationBarTitle({
                                title: "摇号助手-户型图"
                            });
                        });

                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "reload",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, n, r;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = 1 == this.changeIndex ? this.lottery_id : "", t.next = 3, api.houseTypePhotos(this.project_id, e, 0, "");

                      case 3:
                        if (n = t.sent, this.isComplete = n.is_complete, n.data && n.data.length > 0 && (this.swiperList = [].concat(_toConsumableArray(n.data)), 
                        this.bannerCountArr.push(n.data.length), this.navbar.push({
                            text: "全部户型",
                            number: n.data.length
                        }), 1 == this.changeIndex && (this.current = parseInt(this.current) + n.data.length)), 
                        !this.isOpen || "0" == this.isOpen) {
                            t.next = 11;
                            break;
                        }
                        return t.next = 9, api.houseTypePhotos(this.project_id, e, 0, 1);

                      case 9:
                        r = t.sent, r.data && r.data.length > 0 && (this.swiperList = [].concat(_toConsumableArray(this.swiperList), _toConsumableArray(r.data)), 
                        this.bannerCountArr.push(r.data.length), this.navbar.push({
                            text: "本次开盘",
                            number: r.data.length
                        }));

                      case 11:
                        this.$apply();

                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            return _index.share.share("快来看【" + this.project_name + "】，户型图");
        }
    } ]), e;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/houseTypePhotos"));