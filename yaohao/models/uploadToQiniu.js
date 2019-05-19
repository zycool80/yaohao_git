function uploadVideo() {
    return new Promise(function(o, e) {
        foundation.chooseVideoSync().then(function(e) {
            o(e);
        }).catch(function(o) {
            console.log(o), e(o);
        });
    });
}

var _require = require("./../utils/utilsKit/index.js"), foundation = _require.foundation;

module.exports = {
    uploadVideo: uploadVideo
};