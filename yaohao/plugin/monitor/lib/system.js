function isUpload() {
    return Math.random() > 1 - config.REPORT_ERR_RATE;
}

var report = require("./report.js"), config = require("./../conf/default.js"), system = {
    init: function() {
        this.bindError(), this.bindPageNotFound(), this.bindMemoryWarning(), console.log("SYSTEM: system monitor load");
    },
    bindError: function() {
        wx.onError(function(r) {
            try {
                report.__reportErrorReq({
                    error: JSON.stringify(r)
                });
            } catch (r) {
                console.log(r);
            }
        });
    },
    bindPageNotFound: function() {
        wx.onPageNotFound(function(r) {
            try {
                report.__reportErrorReq({
                    error: JSON.stringify(r)
                });
            } catch (r) {
                console.log(r);
            }
        });
    },
    bindMemoryWarning: function() {
        wx.onMemoryWarning(function() {
            if (isUpload()) try {
                for (var r = getCurrentPages(), o = [], n = r.length - 1; n > 0; n--) o.push(r[n].route);
                report.__reportErrorReq({
                    pageStack: o.join(","),
                    error: "SYSTEM: memory warning"
                });
            } catch (r) {
                console.log(r);
            }
        });
    }
};

system.init();