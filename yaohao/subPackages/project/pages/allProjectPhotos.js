var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, n) {
            function a(r, i) {
                try {
                    var o = e[r](i), s = o.value;
                } catch (t) {
                    return void n(t);
                }
                if (!o.done) return Promise.resolve(s).then(function(t) {
                    a("next", t);
                }, function(t) {
                    a("throw", t);
                });
                t(s);
            }
            return a("next");
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
            var a = e[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    return function(e, n, a) {
        return n && t(e.prototype, n), a && t(e, a), e;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), api = require("./../../../api/api.js"), _require = require("./../../../utils/util.js"), transformRpx = _require.transformRpx, startX = 0, startY = 0, moveStartX = 0, moving = !1, scale = !1, curItem = {
    x: 0,
    y: 0,
    scale: 1
}, animation = null, moveAnimation = null, Index = function(t) {
    function e() {
        var t, n, a, r;
        _classCallCheck(this, e);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return n = a = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(o))), 
        a.config = {
            navigationBarTitleText: "楼盘相册",
            backgroundColor: "#000000",
            disableScroll: !0
        }, a.data = {
            swiperList: [],
            bannerCountArr: [],
            isSalesMan: 2,
            navbar: [],
            changeIndex: 0,
            nowNumber: 1,
            projectId: 0,
            projectName: "",
            type: "",
            page: 1,
            more: !0,
            animationData: null,
            disabled: !1,
            winWidth: 0,
            winHeight: 0,
            translateX: 0,
            itemIndex: 0
        }, a.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, a.$repeat = {}, a.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, a.$events = {}, a.components = {
            BackHome: _BackHome2.default
        }, a.methods = {
            changeNavbarHandle: function(t) {
                for (var e = t.currentTarget.dataset.index, n = 0, a = 0; a < this.bannerCountArr.length && a !== parseInt(e); a++) n += this.bannerCountArr[a];
                this.itemIndex = n, this.translateX = -this.itemIndex * transformRpx(750), animation.translateX(this.translateX).step(), 
                this.animationData = animation.export(), this.nowNumber = 1, this.changeIndex = e, 
                this.$apply();
            },
            goToPhotos: function() {
                wx.navigateTo({
                    url: "/subPackages/project/pages/photos?project_id=" + this.projectId + "&project_name=" + this.projectName
                });
            },
            touchstart: function(t) {
                if (1 !== t.touches.length || moving) startX = 0, startX = 0, startY = 0, moveStartX = 0; else {
                    var e = t.touches[0], n = e.pageX, a = e.pageY;
                    startX = n, startY = a, moveStartX = n, moving = !0;
                }
            },
            touchmove: function(t) {
                var e = t.changedTouches[0], n = e.pageX, a = e.pageY;
                if (scale) return !1;
                if (!moveStartX) return !1;
                if (!this.touchVerify(startX, startY, n, a)) return !1;
                if (t.touches.length > 1) return !1;
                var r = transformRpx(750) - transformRpx(750) * curItem.scale;
                if (curItem.x > r + 15 && curItem.x < 0) return !1;
                moveStartX = n;
            },
            touchend: function(t) {
                var e = t.changedTouches[0], n = e.pageX, a = e.pageY;
                if (scale) return setTimeout(function() {
                    scale = !1;
                }, 500), moving = !1, !1;
                if (!this.touchVerify(startX, startY, n, a)) return moving = !1, !1;
                var r = transformRpx(750) - transformRpx(750) * curItem.scale;
                if (curItem.x > r + 15 && curItem.x < 0) return moving = !1, !1;
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
        }, r = n, _possibleConstructorReturn(a, r);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "swiperChangeHook",
        value: function() {
            for (var t = this.itemIndex, e = 0, n = 0, a = t + 1, r = 0; r < this.bannerCountArr.length; r++) n += this.bannerCountArr[r], 
            t + 1 > n && (a = t + 1 - n, e++);
            this.nowNumber = a, this.changeIndex = e, this.$apply();
        }
    }, {
        key: "touchVerify",
        value: function(t, e, n, a) {
            return t || Math.abs(e - a) < Math.abs(t - n);
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
                            title: "加载中",
                            mask: !0
                        }), this.projectId = e.project_id, this.projectName = e.project_name, t.next = 5, 
                        this.reload();

                      case 5:
                        animation = wx.createAnimation({
                            duration: 300,
                            timingFunction: "ease"
                        }), moveAnimation = wx.createAnimation({
                            duration: 0,
                            timingFunction: "linear"
                        }), n = wx.getSystemInfoSync(), this.winWidth = n.windowWidth, this.winHeight = n.windowHeight, 
                        this.$apply(), wx.hideLoading();

                      case 12:
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
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return this.page = 1, this.more = !0, t.next = 4, this.loadData();

                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "loadData",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, n, a;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, api.lotteryPhotos(this.projectId, this.type, this.page);

                      case 2:
                        e = t.sent, this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page++, 
                        n = [], a = [], this.swiperList = this.swiperList.concat(e.data.data), e.data.shijing_count > 0 && (a.push(e.data.shijing_count), 
                        n.push({
                            type: 2,
                            text: "实景图",
                            number: e.data.shijing_count
                        })), e.data.zhoubian_count > 0 && (a.push(e.data.zhoubian_count), n.push({
                            type: 3,
                            text: "周边图",
                            number: e.data.zhoubian_count
                        })), e.data.yangban_count > 0 && (a.push(e.data.yangban_count), n.push({
                            type: 4,
                            text: "样板间",
                            number: e.data.yangban_count
                        })), e.data.xiaoguo_count > 0 && (a.push(e.data.xiaoguo_count), n.push({
                            type: 5,
                            text: "效果图",
                            number: e.data.xiaoguo_count
                        })), this.isSalesMan = e.data.is_sales_man, this.navbar = n, this.swiperList = e.data.data, 
                        this.bannerCountArr = a, this.$apply();

                      case 15:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "onShareAppMessage",
        value: function(t) {
            return _index.share.share("我在这里查看楼盘相册", "subPackages/project/pages/allProjectPhotos?project_id=" + this.projectId + "&project_name=" + this.projectName);
        }
    } ]), e;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/allProjectPhotos"));