
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}


Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _request = require('./../utils/request.js');
var _request2 = _interopRequireDefault(_request);


Page({
    data: {
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
    },

    onLoad: function(){

        var e = this;

        var _this2 = this;

        (0, _request2.default)({
            url: '/api/bos/house/housePage'
        }).then(function (res) {
            e.setData({
                lotteries: res.data.content
            });
        });

    },


    stopMove: function(e) {
        return !1;
    },
    closeFliterView: function() {
        this.switchNum = !1;
    },
    chooseArea: function() {
        this.switchNum = !this.switchNum;
    },
    inputTyping: function(e) {
        this.inputVal = e.detail.value;
    },
    clearInput: function() {
        var e = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
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
    doSearch: function() {
        var e = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
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
    resetHandle: function() {
        this.areaIds = "", this.resetAreaData();
    },
    submitHandle: function() {
        this.switchNum = !1, this.reload().then();
    },
    clickAreaHandle: function(e, t) {
        var r = this.areasDatas;
        if (r && r[e] && r[e].data[t]) {
            var n = r[e], a = n.data[t], i = [];
            a.is_toggle = !a.is_toggle, "" === a.val && n.data.forEach(function(e) {
                e.is_toggle = a.is_toggle;
            }), r.forEach(function(e) {
                e.data.forEach(function(e) {
                    e.is_toggle && "" !== e.val && i.push(e.val);
                });
            }), this.areaIds = i.join(","), this.$apply();
        }
    }
});
