!function() {
    var e = require("./../../api/api.js"), t = require("./../../models/GlobalModel.js"), a = t.getUserInfo, i = require("./../../utils/utilsKit/lib/cache.js"), r = (require("./../../utils/utilsKit/lib/md5.js"), 
    require("./lib/Cache.js"), require("./lib/ExParser.js")), s = require("./conf/igonre.js"), l = Page, n = (Object.prototype.toString, 
    {
        __shareData: {},
        init: function() {
            e.shareMessage().then(function(e) {
                for (var t = e.data, a = 0; a < t.length; a++) {
                    var i = t[a];
                    n.__shareData[i.page_url] = {
                        images: i.images,
                        titles: i.titles,
                        url: i.url,
                        default_title: i.default_title,
                        page_url: i.page_url
                    };
                }
            }), this.rewritePage();
        },
        rewritePage: function() {
            var e = this;
            Page = function(t) {
                function n() {
                    var t = "/" + this.route, s = e.__shareData, l = s[t] ? s[t] : null;
                    if (l) {
                        var n = l.url, h = l.titles, p = l.images, c = h[g(h.length)], o = p[g(p.length)];
                        h = h.length > 0 ? c.content : "", p = p.length > 0 ? o.image_url : "", /(\$_[A-Z_0-9]+)/g.test(n) && (n = r.parseMagicConst.call(this, n)), 
                        /(\$[A-z0-9]+)/g.test(n) && (n = r.parseMagicVariable.call(this, n)), n && (n = n.replace(/\$[^&=]/g, "")), 
                        /(\$_[A-Z_0-9]+)/g.test(h) && (h = r.parseMagicConst.call(this, h)), /(\$[A-z0-9]+)/g.test(h) && (h = r.parseMagicVariable.call(this, h)), 
                        h && (h = h.replace(/\$[^&=]/g, "")), /(\$_[A-Z_0-9]+)/g.test(p) && (p = r.parseMagicConst.call(this, p)), 
                        /(\$[A-z0-9]+)/g.test(p) && (p = r.parseMagicVariable.call(this, p)), p && (p = p.replace(/\$[^&=]/g, ""));
                        var _ = {
                            title: h || "这里有你最想要的买房信息，点击获取",
                            path: n || t,
                            imageUrl: p
                        }, d = a(), f = i.get("sales_man_id");
                        return _.path += (_.path.indexOf("?") > -1 ? "&" : "?") + "u_id=" + d.id + "&s_id=" + f, 
                        _;
                    }
                    if (u) return u.apply(this, arguments);
                    var M = a(), m = i.get("sales_man_id");
                    return {
                        title: "这里有你最想要的买房信息，点击获取",
                        path: "/pages/index?u_id=" + M.id + "&=s_id=" + m
                    };
                }
                function g(e) {
                    return Math.floor(Math.random() * e);
                }
                var u = t.onShareAppMessage;
                t.onShareAppMessage = function() {
                    var e = "/" + this.route;
                    return s.indexOf(e) > -1 || !this.data ? u && u.apply(this, arguments) : n.apply(this, arguments);
                }, l(t);
            };
        }
    });
    n.init();
}();