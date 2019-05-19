function foundation() {}

var _require = require("./common.js"), extend = _require.extend, getOptions = _require.getOptions, mergeAll = _require.mergeAll, wxRequest = require("./wx_request.js"), tip = require("./tip.js"), qiniuUpload = require("./../../qiniuUploader.js"), config = require("./../config/config.js");

foundation.extend = function(e) {
    extend(this, e);
}, foundation.extend({
    chooseImageSync: function(e) {
        return new Promise(function(n, o) {
            var i = getOptions({
                num: 1,
                sizeType: [ "original", "compressed" ],
                sourceType: [ "album", "camera" ]
            }, e);
            wx.chooseImage({
                count: i.num,
                sizeType: i.sizeType,
                sourceType: i.sourceType,
                success: function(e) {
                    n(e);
                },
                fail: function(e) {
                    o(e);
                },
                complete: function() {}
            });
        });
    },
    chooseVideoSync: function(e) {
        return new Promise(function(n, o) {
            var i = getOptions({
                sourceType: [ "album", "camera" ],
                maxDuration: 30,
                compressed: !0,
                camera: "back"
            }, e);
            wx.chooseVideo({
                sourceType: i.sourceType,
                compressed: i.compressed,
                maxDuration: i.maxDuration,
                camera: i.camera,
                success: function(e) {
                    n(e);
                },
                fail: function(e) {
                    o(e);
                }
            });
        });
    },
    uploadFileSync: function(e, n) {
        return new Promise(function(o, i) {
            function t(e) {
                tip.loaded(), e && e.key ? o({
                    statusCode: 200,
                    data: {
                        status: 0,
                        data: {
                            url: e.imageURL
                        }
                    }
                }) : i();
            }
            function u(e) {
                tip.loaded(), i(e);
            }
            tip.loading("上传中"), wxRequest.simpleQcloudRequest("/upload/qiniu_token", {}).then(function(o) {
                var i = new Date().getTime(), r = parseInt(1e4 * Math.random()), a = {};
                a.key = n || "assert/img/" + i + r + ".jpg";
                var s = mergeAll(config.qiniu, {
                    uptoken: o.data.data
                }, a);
                qiniuUpload.upload(e, t, u, s);
            }).catch(u);
        });
    }
}), module.exports = foundation;