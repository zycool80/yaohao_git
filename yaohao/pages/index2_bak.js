var regeneratorRuntime = require("../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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

function _asyncToGenerator(e) {
    return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, r) {
            function n(a, i) {
                try {
                    var o = t[a](i), s = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(s).then(function (e) {
                    n("next", e);
                }, function (e) {
                    n("throw", e);
                });
                e(s);
            }

            return n("next");
        });
    };
}


Object.defineProperty(exports, "__esModule", {
    value: !0
});


var _createClass = function () {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }

        return function (t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
        };
    }(),
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../utils/request.js');
var _request2 = _interopRequireDefault(_request);

var Index = function (e) {
    function t() {
        var e, a, n, i;
        _classCallCheck(this, t);
        for (var o = arguments.length, r = Array(o), s = 0; s < o; s++) r[s] = arguments[s];
        return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r))),
            n.config = {
                enablePullDownRefresh: !0,
                usingComponents: {
                    // LotteryItem: "../components/LotteryItem",
                    HomeProjectItem: "../components/HomeProjectItem"
                }
            },
            n.data = {
                switchNum: !1,
                inputVal: "",
                inputPlace: "",
                platform: !0,
                type: null,
                lotteries: [],
                title: "",
                page: 1,
                more: !0,
                areaIds: "",
                areasDatas: []
            }, n.methods = {
            stopMove: function (e) {
                return !1;
            },
            closeFliterView: function () {
                this.switchNum = !1;
            },
            chooseArea: function () {
                this.switchNum = !this.switchNum;
            },
            inputTyping: function (e) {
                this.inputVal = e.detail.value;
            },
            clearInput: function () {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return e.inputVal = "", t.next = 3, e.reload();

                            case 3:
                                e.$apply();

                            case 4:
                            case "end":
                                return t.stop();
                        }
                    }, t, e);
                }))();
            },
            doSearch: function () {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return e.inputVal || (e.inputVal = e.inputPlace.replace(/搜索：/, "")), e.page = 1,
                                    e.area = "", e.lotteries = [], t.next = 6, e.loadNext();

                            case 6:
                                e.$apply();

                            case 7:
                            case "end":
                                return t.stop();
                        }
                    }, t, e);
                }))();
            },
            resetHandle: function () {
                this.areaIds = "", this.resetAreaData();
            },
            submitHandle: function () {
                this.switchNum = !1, this.reload().then();
            },
            clickAreaHandle: function (e, t) {
                var r = this.areasDatas;
                if (r && r[e] && r[e].data[t]) {
                    var n = r[e], a = n.data[t], i = [];
                    a.is_toggle = !a.is_toggle, "" === a.val && n.data.forEach(function (e) {
                        e.is_toggle = a.is_toggle;
                    }), r.forEach(function (e) {
                        e.data.forEach(function (e) {
                            e.is_toggle && "" !== e.val && i.push(e.val);
                        });
                    }), this.areaIds = i.join(","), this.$apply();
                }
            }
        }, i = a, _possibleConstructorReturn(n, i);
    }

    return _inherits(t, e), _createClass(t, [{
        key: "filtersData",
        value: function () {
        }
    }, {
        key: "onLoad",
        value: function () {
            //this.reload();
            /*function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return this.type = t.type, this.title = decodeURIComponent(t.title) || "最新摇号", wx.setNavigationBarTitle({
                                title: this.title
                            }), e.next = 5, globalModel.getGlobalConfig();

                        case 5:
                            return r = e.sent, this.inputPlace = r.searchText, n = wx.getSystemInfoSync(), this.platform = "android" === n.platform.toLowerCase(),
                                e.next = 11, this.reload();

                        case 11:
                        case "end":
                            return e.stop();
                    }
                }, e, this);
            }));
            return e;*/
        }()
    }, {
        key: "onReady",
        value: function () {

            var self = this;
            (0, _request2.default)({
                url: '/api/bos/house/housePage'
            }).then(function (res) {
                self.lotteries = res.data.content;
                self.page >= res.data.last || !res.data.last ? self.more = !1 : self.page++;
                self.$apply();
            });

            /*var e = this;
            _api2.default.getFilterAreaList().then(function(t) {
                e.filtersData = {};
                for (var r = [], n = 0; n < t.data.length; n++) {
                    for (var a = t.data[n], i = {
                        title: a.name,
                        data: [ {
                            key: "全选",
                            val: "",
                            is_toggle: !1
                        } ]
                    }, o = 0; o < a.area.length; o++) {
                        var s = a.area[o];
                        i.data.push({
                            key: s.area,
                            val: s.areaid,
                            is_toggle: !1
                        });
                    }
                    r.push(i);
                }
                e.filtersData.areasListDatas = r, e.resetAreaData();
            });*/
        }
    }, {
        key: "onPullDownRefresh",
        value: function () {
            /*function e() {
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
            return e;*/
        }()
    }, {
        key: "onReachBottom",
        value: function () {
            /*function e() {
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
            return e;*/
        }()
    }, {
        key: "onShareAppMessage",
        value: function () {
            var e = "";
            return "即将摇号" === this.title && (e = "这里有所有即将摇号的楼盘详情，再也不用到处去找啦,快来看看吧！"), "即将预售" === this.title && (e = "这里有所有即将预售的楼盘详情，再也不用到处去找啦,快来看看吧！"),
            "最近新增" === this.title && (e = "这里有所有即将报名的楼盘详情，再也不用到处去找啦,快来看看吧！"), "正在登记" === this.title && (e = "这里有所有正在报名的楼盘详情，再也不用到处去找啦,快来看看吧！"),
            "最新开盘" === this.title && (e = "这里有所有最新开盘的楼盘详情，再也不用到处去找啦,快来看看吧！"), "已摇号" === this.title && (e = "这里有所有已摇号的楼盘详情，再也不用到处去找啦,快来看看吧！"),
            "最新摇号" === this.title && (e = "这里有所有最新摇号的楼盘详情，再也不用到处去找啦,快来看看吧！"), _index.share.share(e);
        }
    }, {
        key: "reload",
        value: function () {

        }()
    }, {
        key: "loadNext",
        value: function () {
            /*function e() {
                return t.apply(this, arguments);
            }
            console.log(e);
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {

                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            /!*return e.next = 2, _api2.default.getLotteries(this.inputVal, this.type, this.page, this.areaIds);*!/

                        case 2:
                            t = e.sent, this.lotteries = this.lotteries.concat(t.data.data), this.page >= t.data.last_page || !t.data.last_page ? this.more = !1 : this.page++,
                                this.$apply();

                        case 6:
                        case "end":
                            return e.stop();
                    }
                }, e, this);
            }));
            return e;*/
        }()
    }, {
        key: "resetAreaData",
        value: function () {
            this.areasDatas = _index.common.deepCopy(this.filtersData.areasListDatas), this.$apply();
        }
    }]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/index2"));

