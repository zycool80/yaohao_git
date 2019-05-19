function listen(o) {
    o ? (onOpen = o.onOpen, onClose = o.onClose, onMessage = o.onMessage, onError = o.onError) : (onOpen = noop, 
    onClose = noop, onMessage = noop, onError = noop);
}

function bind() {
    wx.onSocketOpen(function(o) {
        return onOpen(o);
    }), wx.onSocketClose(function(o) {
        return onClose(o);
    }), wx.onSocketMessage(function(o) {
        return onMessage(o);
    }), wx.onSocketError(function(o) {
        return onError(o);
    });
}

var noop = function() {}, onOpen = void 0, onClose = void 0, onMessage = void 0, onError = void 0;

listen(null), bind(), module.exports = {
    listen: listen
};