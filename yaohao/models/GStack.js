function Stack(t) {
    Stack.prototype.__MAX = "number" == typeof t ? t : 137;
}

function GStack() {}

var _require = require("./../utils/utilsKit/lib/common.js"), getType = _require.getType;

Stack.constructor = Stack, Stack.prototype = {
    __MAX: 137,
    __DATA: [],
    __LEN: 0
}, Stack.prototype.push = function(t) {
    if (this.__LEN >= this.__MAX) throw new Error("Out of Stack size");
    this.__DATA[this.__LEN++] = t;
}, Stack.prototype.pop = function() {
    return this.__LEN < 1 ? "" : this.__DATA[--this.__LEN];
}, Stack.prototype.last = function() {
    return this.__LEN < 1 ? "" : this.__DATA[this.__LEN - 1];
}, Stack.prototype.first = function() {
    return this.__DATA[0] || "";
}, Stack.prototype.count = function() {
    return this.__LEN || 0;
}, Stack.prototype.clear = function() {
    this.__LEN = 0, this.__DATA = [];
}, Stack.prototype.display = function() {
    if (this.__LEN < 1) return void console.log("stack is empty");
    for (var t = 0; t < this.__LEN; t++) {
        var c = this.__DATA[t];
        console.log("[" + t + "] value:" + ("[object Object]" === getType.call(c) || "[object Array]" === getType.call(c) ? JSON.stringify(c) : c));
    }
}, GStack.constructor = GStack, GStack.prototype = Object.create(Stack.prototype), 
GStack.init = function() {
    if (!(this instanceof GStack)) return new GStack();
}, module.exports = {
    Stack: Stack,
    GStack: GStack,
    _pageStack: GStack.init(),
    _lotNavbarStack: GStack.init()
};