var _require = require("./common.js"), mergeAll = _require.mergeAll, getType = _require.getType, isFunction = _require.isFunction, _extend = _require.extend, CanvasPlus = {
    DIRECTION: {
        LEFT: 0,
        TOP: 1,
        RIGHT: 2,
        BOTTOM: 3,
        LEFT_TOP: 4,
        LEFT_BOTTOM: 5,
        RIGHT_TOP: 6,
        RIGHT_BOTTOM: 7,
        CENTER: 8
    },
    verticalText: function(e, r, i, t, n) {
        if (!e || "[object String]" !== getType.call(r) || "" === r) throw new Error("cxt or str is undefined");
        isFunction(t) && t();
        var o = mergeAll({
            x: 0,
            y: 0,
            space: 0,
            size: 14,
            color: "#f3d279"
        }, i), s = o.size;
        e.setFontSize(o.size), e.setFillStyle(o.color);
        for (var c = 0; c < r.length; c++) e.fillText(r[c], o.x, o.y), o.y = o.y + s + o.space;
        isFunction(n) && n();
    },
    setGradientStyle: function(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments[2], t = arguments[3], n = arguments[4], o = arguments[5];
        if (!e) throw new Error("cxt is not object");
        isFunction(t) && t();
        var s = mergeAll({
            x: 0,
            y: 0,
            endX: 0,
            endY: 0,
            radius: 100,
            inColor: "#ffffff",
            toColor: "#000000"
        }, r), c = i ? e.createCircularGradient(s.x, s.y, s.radius) : e.createLinearGradient(s.x, s.y, s.endX, s.endY);
        return isFunction(o) ? (o(c), c) : (c.addColorStop(0, s.inColor), c.addColorStop(1, s.toColor), 
        isFunction(n) && n(), c);
    },
    drawCircle: function(e, r, i, t) {
        if (!e) throw new Error("cxt is not object");
        isFunction(i) && i();
        var n = this.DIRECTION, o = mergeAll({
            x: 0,
            y: 0,
            size: 100,
            color: "#ffffff",
            direction: n.LEFT_TOP
        }, r), s = o.size, c = s / 2;
        switch (o.direction) {
          case n.TOP:
            o.y += c;
            break;

          case n.BOTTOM:
            o.y -= c;
            break;

          case n.LEFT:
            o.x += c;
            break;

          case n.RIGHT:
            o.x -= c;
            break;

          case n.LEFT_TOP:
            o.x += c, o.y += c;
            break;

          case n.LEFT_BOTTOM:
            o.x += c, o.y -= c;
            break;

          case n.RIGHT_TOP:
            o.x -= c, o.y += c;
            break;

          case n.RIGHT_BOTTOM:
            o.x -= c, o.y -= c;
        }
        e.beginPath(), e.arc(o.x, o.y, o.size / 2, 0, 2 * Math.PI), e.setFillStyle(o.color), 
        e.fill(), isFunction(t) && t();
    },
    drawCircleAvatar: function(e, r, i, t, n) {
        if (!e) throw new Error("cxt is not object");
        isFunction(t) && t();
        var o = this.DIRECTION, s = mergeAll({
            x: 0,
            y: 0,
            size: 100,
            direction: o.LEFT_TOP
        }, i);
        e.save(), this.drawCircle(e, {
            x: s.x,
            y: s.y,
            size: s.size,
            direction: o.LEFT_TOP
        }), e.clip(), e.drawImage(r, s.x, s.y, s.size, s.size), e.restore(), isFunction(n) && n();
    },
    drawRect: function() {},
    extend: function(e) {
        return _extend(this, e);
    }
};

module.exports = CanvasPlus;