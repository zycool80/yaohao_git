var request = require("./../lib/wx_request.js");

module.exports = {
    uploadUrl: request.requestUrl("/upload/image"),
    qiniu: {
        uploadURL: "https://up-z2.qbox.me",
        domain: "https://imgcdn.huanjutang.com/"
    }
};