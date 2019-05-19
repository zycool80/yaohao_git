var foundation = require("./lib/foundation.js"), common = require("./lib/common.js"), cache = require("./lib/cache.js"), share = require("./lib/share.js"), storagePlus = require("./lib/storage_plus.js"), md5 = require("./lib/md5.js"), tip = require("./lib/tip.js"), wxRequest = require("./lib/wx_request.js"), memoryCache = require("./lib/memory_cache.js"), canvasPlus = require("./lib/canvas_plus.js");

common._extend = function(e) {
    common.extend(this, e);
}, module.exports = {
    foundation: foundation,
    common: common,
    underscore: common._,
    cache: cache,
    share: share,
    storagePlus: storagePlus,
    md5: md5,
    tip: tip,
    wxRequest: wxRequest,
    redis: memoryCache,
    canvasPlus: canvasPlus
};