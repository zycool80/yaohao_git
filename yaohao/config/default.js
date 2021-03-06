"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _prod = require('./prod.js'),
    _prod2 = _interopRequireDefault(_prod),
    _dev = require('./dev.js'),
    _dev2 = _interopRequireDefault(_dev),
    _common = require('./../utils/utilsKit/lib/common.js'),
    env = "production",
    config = {
    fakeId: "271027",
    env: "test",
    version: "8.4.7",
    webviewHost: "http://www.gjwsite.com", //"https://web.huanjutang.com",
    imsdk: {
        sdkappid: "", //"1400110020,
        accountType: "", //31013,
        accountMode: 0
    },
    redisKeys: {
        USER_INFO_KEY: "USER_INFO",
        GLOBAL_CONFIG_KEY: "GLOBAL_CONFIG"
    },
    cacheKeys: {
        USER_INFO_KEY: "userinfo",
        GLOBAL_CONFIG_KEY: "globalConfig"
    },
    API_SECRET_KEY: "", //"8448806f72def45f4baaaed5e4dfd756",
    PLATFORM: 1,
    WX_CODE_KEY: "WX_CODE",
    WX_CODE_IS_USE_KEY: "WX_IS_USE_CODE",
    WX_SYS_INFO_KEY: "WX_SYS_INFO",
    REPORT_ERR_RATE: .7
};

"production" === env ? (0, _common.mergeAll)(config, _prod2.default) : (0, _common.mergeAll)(config, _dev2.default), module.exports = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQuanMiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9wcm9kIiwicmVxdWlyZSIsIl9wcm9kMiIsIl9kZXYiLCJfZGV2MiIsIl9jb21tb24iLCJlbnYiLCJjb25maWciLCJmYWtlSWQiLCJ2ZXJzaW9uIiwid2Vidmlld0hvc3QiLCJpbXNkayIsInNka2FwcGlkIiwiYWNjb3VudFR5cGUiLCJhY2NvdW50TW9kZSIsInJlZGlzS2V5cyIsIlVTRVJfSU5GT19LRVkiLCJHTE9CQUxfQ09ORklHX0tFWSIsImNhY2hlS2V5cyIsIkFQSV9TRUNSRVRfS0VZIiwiUExBVEZPUk0iLCJXWF9DT0RFX0tFWSIsIldYX0NPREVfSVNfVVNFX0tFWSIsIldYX1NZU19JTkZPX0tFWSIsIlJFUE9SVF9FUlJfUkFURSIsIm1lcmdlQWxsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxzQkFBVCxDQUFnQ0MsQ0FBaEMsRUFBbUM7QUFDL0IsV0FBT0EsS0FBS0EsRUFBRUMsVUFBUCxHQUFvQkQsQ0FBcEIsR0FBd0I7QUFDM0JFLGlCQUFTRjtBQURrQixLQUEvQjtBQUdIOztBQUVELElBQUlHLFFBQVFDLFFBQVEsV0FBUixDQUFaO0FBQUEsSUFBa0NDLFNBQVNOLHVCQUF1QkksS0FBdkIsQ0FBM0M7QUFBQSxJQUEwRUcsT0FBT0YsUUFBUSxVQUFSLENBQWpGO0FBQUEsSUFBc0dHLFFBQVFSLHVCQUF1Qk8sSUFBdkIsQ0FBOUc7QUFBQSxJQUE0SUUsVUFBVUosUUFBUSxtQ0FBUixDQUF0SjtBQUFBLElBQW9NSyxNQUFNLFlBQTFNO0FBQUEsSUFBd05DLFNBQVM7QUFDN05DLFlBQVEsUUFEcU47QUFFN05GLFNBQUssTUFGd047QUFHN05HLGFBQVMsT0FIb047QUFJN05DLGlCQUFhLEVBSmdOLEVBSTdNO0FBQ2hCQyxXQUFPO0FBQ0hDLGtCQUFVLEVBRFAsRUFDVTtBQUNiQyxxQkFBYSxFQUZWLEVBRWE7QUFDaEJDLHFCQUFhO0FBSFYsS0FMc047QUFVN05DLGVBQVc7QUFDUEMsdUJBQWUsV0FEUjtBQUVQQywyQkFBbUI7QUFGWixLQVZrTjtBQWM3TkMsZUFBVztBQUNQRix1QkFBZSxVQURSO0FBRVBDLDJCQUFtQjtBQUZaLEtBZGtOO0FBa0I3TkUsb0JBQWdCLEVBbEI2TSxFQWtCMU07QUFDbkJDLGNBQVUsQ0FuQm1OO0FBb0I3TkMsaUJBQWEsU0FwQmdOO0FBcUI3TkMsd0JBQW9CLGdCQXJCeU07QUFzQjdOQyxxQkFBaUIsYUF0QjRNO0FBdUI3TkMscUJBQWlCO0FBdkI0TSxDQUFqTzs7QUEwQkEsaUJBQWlCbEIsR0FBakIsR0FBdUIsQ0FBQyxHQUFHRCxRQUFRb0IsUUFBWixFQUFzQmxCLE1BQXRCLEVBQThCTCxPQUFPSCxPQUFyQyxDQUF2QixHQUF1RSxDQUFDLEdBQUdNLFFBQVFvQixRQUFaLEVBQXNCbEIsTUFBdEIsRUFBOEJILE1BQU1MLE9BQXBDLENBQXZFLEVBQ0EyQixPQUFPQyxPQUFQLEdBQWlCcEIsTUFEakIiLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkge1xuICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7XG4gICAgICAgIGRlZmF1bHQ6IGVcbiAgICB9O1xufVxuXG52YXIgX3Byb2QgPSByZXF1aXJlKFwiLi9wcm9kLmpzXCIpLCBfcHJvZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9kKSwgX2RldiA9IHJlcXVpcmUoXCIuL2Rldi5qc1wiKSwgX2RldjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXYpLCBfY29tbW9uID0gcmVxdWlyZShcIi4vLi4vdXRpbHMvdXRpbHNLaXQvbGliL2NvbW1vbi5qc1wiKSwgZW52ID0gXCJwcm9kdWN0aW9uXCIsIGNvbmZpZyA9IHtcbiAgICBmYWtlSWQ6IFwiMjcxMDI3XCIsXG4gICAgZW52OiBcInRlc3RcIixcbiAgICB2ZXJzaW9uOiBcIjguNC43XCIsXG4gICAgd2Vidmlld0hvc3Q6IFwiXCIsLy9cImh0dHBzOi8vd2ViLmh1YW5qdXRhbmcuY29tXCIsXG4gICAgaW1zZGs6IHtcbiAgICAgICAgc2RrYXBwaWQ6IFwiXCIsLy9cIjE0MDAxMTAwMjAsXG4gICAgICAgIGFjY291bnRUeXBlOiBcIlwiLC8vMzEwMTMsXG4gICAgICAgIGFjY291bnRNb2RlOiAwXG4gICAgfSxcbiAgICByZWRpc0tleXM6IHtcbiAgICAgICAgVVNFUl9JTkZPX0tFWTogXCJVU0VSX0lORk9cIixcbiAgICAgICAgR0xPQkFMX0NPTkZJR19LRVk6IFwiR0xPQkFMX0NPTkZJR1wiXG4gICAgfSxcbiAgICBjYWNoZUtleXM6IHtcbiAgICAgICAgVVNFUl9JTkZPX0tFWTogXCJ1c2VyaW5mb1wiLFxuICAgICAgICBHTE9CQUxfQ09ORklHX0tFWTogXCJnbG9iYWxDb25maWdcIlxuICAgIH0sXG4gICAgQVBJX1NFQ1JFVF9LRVk6IFwiXCIsLy9cIjg0NDg4MDZmNzJkZWY0NWY0YmFhYWVkNWU0ZGZkNzU2XCIsXG4gICAgUExBVEZPUk06IDEsXG4gICAgV1hfQ09ERV9LRVk6IFwiV1hfQ09ERVwiLFxuICAgIFdYX0NPREVfSVNfVVNFX0tFWTogXCJXWF9JU19VU0VfQ09ERVwiLFxuICAgIFdYX1NZU19JTkZPX0tFWTogXCJXWF9TWVNfSU5GT1wiLFxuICAgIFJFUE9SVF9FUlJfUkFURTogLjdcbn07XG5cblwicHJvZHVjdGlvblwiID09PSBlbnYgPyAoMCwgX2NvbW1vbi5tZXJnZUFsbCkoY29uZmlnLCBfcHJvZDIuZGVmYXVsdCkgOiAoMCwgX2NvbW1vbi5tZXJnZUFsbCkoY29uZmlnLCBfZGV2Mi5kZWZhdWx0KSwgXG5tb2R1bGUuZXhwb3J0cyA9IGNvbmZpZzsiXX0=