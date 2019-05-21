var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
            function r(a, o) {
                try {
                    var i = t[a](o), u = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(u).then(function (e) {
                    r("next", e);
                }, function (e) {
                    r("throw", e);
                });
                e(u);
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

var _request = require('../../../utils/request.js');
var _request2 = _interopRequireDefault(_request);

var _createClass = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy),
    _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api),
    _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome),
    _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"),
    Index = function (e) {
        function t() {
            var e, n, r, a;
            _classCallCheck(this, t);
            for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u];
            return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                r.config = {
                    navigationBarTitleText: "楼盘相册",
                    enablePullDownRefresh: !0
                }, r.data = {
                scrollViewWidth: 0,
                type: 2,
                page: 1,
                more: !0,
                items: [],
                project_id: 0,
                project_name: "",
                type_title: "",
                shijing_count: 0,
                xiaoguo_count: 0,
                yangban_count: 0,
                zhoubian_count: 0,
                is_sales_man: 2,
                liaokan_count: 0
            }, r.computed = {
                showHome: function () {
                    return 1 === getCurrentPages().length;
                }
            }, r.$repeat = {}, r.$props = {
                BackHome: {}
            }, r.$events = {}, r.components = {
                BackHome: _BackHome2.default
            }, r.methods = {
                uploadProjectImg: function () {
                    wx.navigateTo({
                        url: "/subPackages/lottery/pages/uploadPic?project_id=" + this.project_id
                    });
                },
                switchTabBar: function (e) {
                    var t = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                        return regeneratorRuntime.wrap(function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    return t.type = e, n.next = 3, t.methods.reload.call(t);

                                case 3:
                                    t.$apply();

                                case 4:
                                case "end":
                                    return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                reload: function () {
                    var e = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                        var n;
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return n = {
                                        2: "实景图",
                                        3: "周边图",
                                        4: "样板图",
                                        5: "效果图",
                                        6: "鸟瞰图"
                                    }, e.more = !0, e.page = 1, e.items = [], e.type_title = n[e.type], wx.setNavigationBarTitle({
                                        title: e.type_title
                                    }), t.next = 8, e.methods.loadNext.call(e);

                                case 8:
                                    wx.stopPullDownRefresh(), e.$apply();

                                case 10:
                                case "end":
                                    return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                loadNext: function () {
                    /*var e = this;
                    return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                        var n;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return wx.showLoading({
                                    title: "加载中..."
                                }), t.next = 3, _api2.default.lotteryPhotos(e.project_id, e.type, e.page);

                              case 3:
                                n = t.sent, e.items = n.data.data, e.shijing_count = n.data.shijing_count, e.xiaoguo_count = n.data.xiaoguo_count,
                                e.yangban_count = n.data.yangban_count, e.zhoubian_count = n.data.zhoubian_count,
                                e.liaokan_count = n.data.liaokan_count, e.is_sales_man = n.data.is_sales_man, e.$apply(),
                                wx.hideLoading();

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();*/
                    var self = this;
                    (0, _request2.default)({
                        url: '/api/bos/house/detail',
                        data: {
                            id: self.project_id
                        }
                    }).then(function (res) {
                        if(res.data.houseAlbum.shijingImages){
                            self.shijing_count = 1;
                            self.items.push({image:res.data.houseAlbum.shijingImages})
                        }
                        if(res.data.houseAlbum.xiaoguoImages){
                            self.xiaoguo_count = 1;
                            self.items.push({image:res.data.houseAlbum.xiaoguoImages})
                        }
                        if(res.data.houseAlbum.yangbanImages){
                            self.yangban_count = 1;
                            self.items.push({image:res.data.houseAlbum.yangbanImages})
                        }
                        if(res.data.houseAlbum.zhoubianImages){
                            self.zhoubian_count = 1;
                            self.items.push({image:res.data.houseAlbum.zhoubianImages})
                        }

                        self.$apply();
                    });
                },
                preview: function (e) {
                    var t = this.items[e].image, n = this.items.map(function (e) {
                        return e.image;
                    });
                    wx.previewImage({
                        current: t,
                        urls: n
                    });
                }
            }, a = n, _possibleConstructorReturn(r, a);
        }

        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function () {
                function e(e) {
                    return t.apply(this, arguments);
                }

                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return this.project_id = t.project_id, this.project_name = decodeURIComponent(t.project_name),
                                    this.type = t.type || 2, e.next = 5, this.methods.reload.call(this);

                            case 5:
                                this.$apply();

                            case 6:
                            case "end":
                                return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, {
            key: "onPullDownRefresh",
            value: function () {
                function e() {
                    return t.apply(this, arguments);
                }

                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.methods.reload.call(this);

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
            key: "onReachBottom",
            value: function () {
                function e() {
                    return t.apply(this, arguments);
                }

                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (this.more) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return", !1);

                            case 2:
                                return e.next = 4, this.methods.loadNext.call(this);

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
            value: function () {
                return _index.share.share("快来看~【" + this.project_name + "】" + this.type_title);
            }
        }]), t;
    }(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/photos"));