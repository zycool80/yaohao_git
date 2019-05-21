'use strict';

var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _wepy = require('../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('../../../utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _GlobalModel = require('../../../models/GlobalModel.js');

var _GlobalModel2 = _interopRequireDefault(_GlobalModel);

var _api = require("./../../../api/api.js"),
    _api2 = _interopRequireDefault(_api);

function _asyncToGenerator(e) {
    return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, r) {
            function n(i, a) {
                try {
                    var o = t[i](a), s = o.value;
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


function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this),
            _this.$repeat = {},
            _this.$props = {},
            _this.$events = {},
            _this.components = {},
            _this.data = {
                loading: !0,
                page: 1,
                more: !0,
                houseList: [],
                lottery_id: "",
                title: "",
                params: {},
                buildPickerArr: [0, 0],
                buildList: [[], []],
                decorationList: [],
                decorationIndex: 0,
                houseTypeList: [{
                    value: "全部",
                    id: ""
                }, {
                    value: "清水",
                    id: "1"
                }, {
                    value: "精装",
                    id: "2"
                }],
                houseTypeIndex: 0,
                sortList: [{
                    value: "总价从低到高",
                    id: "asc",
                    val: "total_price_order_by"
                }, {
                    value: "总价从高到低",
                    id: "desc",
                    val: "total_price_order_by"
                }, {
                    value: "单价从低到高",
                    id: "asc",
                    val: "univalence_order_by"
                }, {
                    value: "单价从高到低",
                    id: "desc",
                    val: "univalence_order_by"
                }, {
                    value: "面积从小到大",
                    id: "asc",
                    val: "square_order_by"
                }, {
                    value: "面积从大到小",
                    id: "desc",
                    val: "square_order_by"
                }],
                sortIndex: 0,
                showFilterView: !1,
                filterIndex: 0,
                beginAnimate: !1,
                hidePosition: "1000rpx",
                showPosition: "0",
                priceTipContent: ""
            },
            _this.methods = {
                closeHandle: function () {
                    this.priceTipContent = "", this.$apply();
                },
                showHardcover: function () {
                    wx.showModal({
                        title: "精装说明",
                        content: "由于不同户型对应装修风格和价格不一样，需要您选择并确认本户型对应的装修价格。",
                        showCancel: !1
                    });
                },
                showFilter: function (e) {
                    var t = this;
                    this.filterIndex = e, this.showFilterView = !0, this.$apply(), setTimeout(function () {
                        t.beginAnimate = !0, t.$apply();
                    }, 100);
                },
                closeFilter: function () {
                    this.showFilterView = !1, this.beginAnimate = !1, this.$apply();
                },
                priceFilter: function (e) {
                    var t = this;
                    this.decorationIndex = e, this.params.price = this.decorationList[e].price, this.params.style = this.decorationList[e].id,
                        this.throttleReloadFn(), setTimeout(function () {
                        t.methods.closeFilter.call(t);
                    }, 200);
                },
                houseTypeFilter: function (e) {
                    var t = this;
                    this.houseTypeIndex = e, this.params.decoration = this.houseTypeList[e].id, this.throttleReloadFn(),
                        setTimeout(function () {
                            t.methods.closeFilter.call(t);
                        }, 200);
                },
                sortFilter: function (e) {
                    var t = this;
                    this.sortIndex = e, this.sortList.forEach(function (e) {
                        t.params[e.val] = "";
                    });
                    var r = this.sortList[e];
                    r && (this.params[r.val] = r.id), this.throttleReloadFn(), setTimeout(function () {
                        t.methods.closeFilter.call(t);
                    }, 200);
                },
                stopMove: function () {
                    return !1;
                },
                getBuilding: function (e) {
                    var t = e.detail.column, r = e.detail.value;
                    t < 1 && this.throttleGetUnit(this.buildList[0][r]);
                },
                submitBuilding: function (e) {
                    var t = e.detail.value[0], r = e.detail.value[1];
                    0 === parseInt(t) ? (this.params.building = "", this.params.unit = "") : (this.params.building = this.buildList[0][t],
                        this.params.unit = this.buildList[1][r]), this.throttleReloadFn();
                }
            },
            _temp),
            _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [

        {
            key: "throttleReloadFn",
            value: function () {
            }
        }, {
            key: "throttleGetUnit",
            value: function () {
            }
        }, {
            key: "loadNext",
            value: function () {


                /*function e() {
                    return t.apply(this, arguments);
                }

                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                console.log(this);
                                return e.next = 2, _api2.default.getHousePrice(Object.assign(this.params, {
                                    lottery_id: this.lottery_id,
                                    page: this.page
                                }));

                            case 2:
                                t = e.sent, this.page >= t.data.last_page || !t.data ? this.more = !1 : this.page++,
                                t.data && t.data.data && (this.houseList = this.houseList.concat(t.data.data)),
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
            key: "reload",
            value: function () {
                /*console.log(this, 'reload');
                function e() {
                    return t.apply(this, arguments);
                }

                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return this.page = 1, this.more = !0, this.loading = !0, this.houseList = [], e.next = 6,
                                    this.loadNext();

                            case 6:
                                setTimeout(function () {
                                    t.loading = !1, t.$apply();
                                }, 300);

                            case 7:
                            case "end":
                                return e.stop();
                        }
                    }, e, this);
                }));
                return e;*/
            }()
        }, {
            key: "onLoad",
            value: function () {

                // 获取楼栋
                function e(e) {
                    return t.apply(this, arguments);
                }

                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n, i, a, o, s, u = this;
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return this.lottery_id = t.lottery_id || "", this.title = t.name || "", e.next = 4,
                                    Promise.all([_api2.default.geiBuildingList(this.lottery_id), _api2.default.decorationStyle(this.lottery_id)]);

                            case 4:

                                if (r = e.sent, n = _slicedToArray(r, 2), i = n[0], a = n[1], i.data && (i.data.sort(function (e, t) {
                                    return parseInt(e) - parseInt(t);
                                }), this.buildList[0] = (o = ["全部"]).concat.apply(o, _toConsumableArray(i.data))),
                                    this.decorationList = a.data, this.$apply(), !(this.decorationList.length > 1)) {
                                    e.next = 16;
                                    break;
                                }
                                return e.next = 14, _api2.default.getGuideImage("house_price");

                            case 14:
                                s = e.sent, this.priceTipContent = s.text || "";

                            case 16:
                                console.log(16);
                                this.throttleReloadFn = _index.underscore.throttle(function () {
                                    u.reload().then();
                                }, 500), this.throttleReloadFn(), this.throttleGetUnit = _index.underscore.throttle(function (e) {
                                    _api2.default.getUnitBuiling(u.lottery_id, e).then(function (e) {
                                        u.buildList[1] = e.data, u.$apply();
                                    });
                                }, 500);

                            case 19:
                            case "end":
                                return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, {
            key: "onReady",
            value: function (e) {
                var self = this;
                console.log(self);
                (0, _request2.default)({
                    url: '/api/bos/house/getHouseFJ',
                    id: self.lottery_id
                }).then(function (res) {

                    res.data.content.forEach(function (i, t) {
                        i.price_three = i.zongjia ? Math.floor(i.zongjia / 10000 * 0.3) : '';
                        i.price_six = i.zongjia ? Math.floor(i.zongjia / 10000 * 0.6) : '';
                        i.price_total = i.zongjia ? Math.floor(i.zongjia / 10000) : '';
                    });
                    self.houseList = res.data.content;
                    self.loading = false;

                    self.$apply();
                });
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
                                return e.abrupt("return", !1);

                            case 2:
                                return e.next = 4, this.loadNext();

                            case 4:
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
                return _index.share.share("这里有" + this.title + "的一房一价");
            }
        }

    ]);

    return Index;

}(_wepy2.default.page);


Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/oneHouseOnePrice"));

