'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = request;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _underscore = require('./../npm/underscore/underscore.js');

var _underscore2 = _interopRequireDefault(_underscore);

var _util = require('./util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseUrl = _wepy2.default.$appConfig.baseUrl;
var Debug = _wepy2.default.$appConfig.debug;

BaseUrl = 'http://www.gjwsite.com';


/**
 * 全局请求方法
 * @param param
 *  param.url 如果本身是完整链接, 则不补全, 否则使用 defaultServerAddress 补全
 *  param.method 默认 'GET'
 *  param.data 提交的参数
 *  param.header 自定header object
 * @returns {Promise}
 */

function request(param) {
  var _this = this;

  return new Promise(function (resolve, reject) {
    if (!param.url && Debug) {
      console.error("need url");
      return;
    }
    var url = !/((http:)|(https:))/.test(param.url) ? '' + BaseUrl + param.url : param.url;
    var requestData = {
      url: url,
      method: param.method ? param.method : 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function success(res) {
        wx.hideNavigationBarLoading();
        if (res.data.code == 200) {
          resolve(res.data);
        } else if (res.data.code == 401) {
          // 清空本地数据
          // wx.reLaunch({
          //   url: '/pages/index/index'
          // });
          // return
        } else {
          var msg = void 0;
          if (res.data && res.data.message) {
            msg = res.data.msg;
          } else {
            msg = res.data.message;
          }
          if (Debug) {
            console.error('\u8BF7\u6C42 ' + param.url + ' \u9519\u8BEF, \u9519\u8BEF\u4FE1\u606F: ' + msg);
          }
          reject(res.data);
        }
      },
      fail: function fail(e) {
        wx.hideNavigationBarLoading();
        if (Debug) {
          console.error(e.errMsg);
        }
        _this.showError(e.errMsg);
        reject(e);
      }
    };
    if (param.data) {
      requestData.data = param.data;
    }
    if (param.header) {
      _underscore2.default.each(Object.keys(param.header), function (value, key) {
        requestData.header[key] = value;
      });
    }
    // if (this.globalData.token) {
    //   requestData.header.Authorization = `Bearer ${this.globalData.token}`
    // }
    if (Debug) {
      (0, _util.logInfo)(param.url, '发起请求:');
    }
    wx.showNavigationBarLoading();
    wx.request(requestData);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsicmVxdWVzdCIsIkJhc2VVcmwiLCJ3ZXB5IiwiJGFwcENvbmZpZyIsImJhc2VVcmwiLCJEZWJ1ZyIsImRlYnVnIiwicGFyYW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybCIsImNvbnNvbGUiLCJlcnJvciIsInRlc3QiLCJyZXF1ZXN0RGF0YSIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJ3eCIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsImRhdGEiLCJjb2RlIiwibXNnIiwibWVzc2FnZSIsImZhaWwiLCJlIiwiZXJyTXNnIiwic2hvd0Vycm9yIiwiXyIsImVhY2giLCJPYmplY3QiLCJrZXlzIiwidmFsdWUiLCJrZXkiLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7O2tCQWdCd0JBLE87O0FBaEJ4Qjs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFIQSxJQUFNQyxVQUFVQyxlQUFLQyxVQUFMLENBQWdCQyxPQUFoQztBQUNBLElBQU1DLFFBQVFILGVBQUtDLFVBQUwsQ0FBZ0JHLEtBQTlCOzs7QUFJQTs7Ozs7Ozs7OztBQVVlLFNBQVNOLE9BQVQsQ0FBaUJPLEtBQWpCLEVBQXdCO0FBQUE7O0FBRXJDLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFvQjtBQUNyQyxRQUFJLENBQUNILE1BQU1JLEdBQVAsSUFBY04sS0FBbEIsRUFBeUI7QUFDdkJPLGNBQVFDLEtBQVIsQ0FBYyxVQUFkO0FBQ0E7QUFDRDtBQUNELFFBQUlGLE1BQU0sQ0FBQyxxQkFBcUJHLElBQXJCLENBQTBCUCxNQUFNSSxHQUFoQyxDQUFELFFBQTJDVixPQUEzQyxHQUFxRE0sTUFBTUksR0FBM0QsR0FBbUVKLE1BQU1JLEdBQW5GO0FBQ0EsUUFBSUksY0FBYztBQUNoQkosV0FBS0EsR0FEVztBQUVoQkssY0FBUVQsTUFBTVMsTUFBTixHQUFlVCxNQUFNUyxNQUFyQixHQUE4QixLQUZ0QjtBQUdoQkMsY0FBUTtBQUNOLHdCQUFnQjtBQURWLE9BSFE7QUFNaEJDLGVBQVMsaUJBQUNDLEdBQUQsRUFBUTtBQUNmQyxXQUFHQyx3QkFBSDtBQUNBLFlBQUlGLElBQUlHLElBQUosQ0FBU0MsSUFBVCxJQUFpQixHQUFyQixFQUEwQjtBQUN4QmQsa0JBQVFVLElBQUlHLElBQVo7QUFDRCxTQUZELE1BRU8sSUFBSUgsSUFBSUcsSUFBSixDQUFTQyxJQUFULElBQWlCLEdBQXJCLEVBQTBCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxTQU5NLE1BTUE7QUFDTCxjQUFJQyxZQUFKO0FBQ0EsY0FBSUwsSUFBSUcsSUFBSixJQUFZSCxJQUFJRyxJQUFKLENBQVNHLE9BQXpCLEVBQWtDO0FBQ2hDRCxrQkFBTUwsSUFBSUcsSUFBSixDQUFTRSxHQUFmO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLGtCQUFNTCxJQUFJRyxJQUFKLENBQVNHLE9BQWY7QUFDRDtBQUNELGNBQUlwQixLQUFKLEVBQVc7QUFDVE8sb0JBQVFDLEtBQVIsbUJBQW9CTixNQUFNSSxHQUExQixpREFBMkNhLEdBQTNDO0FBQ0Q7QUFDRGQsaUJBQU9TLElBQUlHLElBQVg7QUFDRDtBQUNGLE9BNUJlO0FBNkJoQkksWUFBTSxjQUFDQyxDQUFELEVBQU07QUFDVlAsV0FBR0Msd0JBQUg7QUFDQSxZQUFJaEIsS0FBSixFQUFXO0FBQ1RPLGtCQUFRQyxLQUFSLENBQWNjLEVBQUVDLE1BQWhCO0FBQ0Q7QUFDRCxjQUFLQyxTQUFMLENBQWVGLEVBQUVDLE1BQWpCO0FBQ0FsQixlQUFPaUIsQ0FBUDtBQUNEO0FBcENlLEtBQWxCO0FBc0NBLFFBQUlwQixNQUFNZSxJQUFWLEVBQWdCO0FBQ2RQLGtCQUFZTyxJQUFaLEdBQW1CZixNQUFNZSxJQUF6QjtBQUNEO0FBQ0QsUUFBSWYsTUFBTVUsTUFBVixFQUFrQjtBQUNoQmEsMkJBQUVDLElBQUYsQ0FBT0MsT0FBT0MsSUFBUCxDQUFZMUIsTUFBTVUsTUFBbEIsQ0FBUCxFQUFrQyxVQUFDaUIsS0FBRCxFQUFRQyxHQUFSLEVBQWU7QUFDL0NwQixvQkFBWUUsTUFBWixDQUFtQmtCLEdBQW5CLElBQTBCRCxLQUExQjtBQUNELE9BRkQ7QUFHRDtBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQUk3QixLQUFKLEVBQVc7QUFDVCx5QkFBUUUsTUFBTUksR0FBZCxFQUFtQixPQUFuQjtBQUNEO0FBQ0RTLE9BQUdnQix3QkFBSDtBQUNBaEIsT0FBR3BCLE9BQUgsQ0FBV2UsV0FBWDtBQUNELEdBNURNLENBQVA7QUE2REQiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5jb25zdCBCYXNlVXJsID0gd2VweS4kYXBwQ29uZmlnLmJhc2VVcmxcbmNvbnN0IERlYnVnID0gd2VweS4kYXBwQ29uZmlnLmRlYnVnXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJ1xuaW1wb3J0IHtsb2dJbmZvfSBmcm9tIFwiLi91dGlsXCI7XG5cbi8qKlxuICog5YWo5bGA6K+35rGC5pa55rOVXG4gKiBAcGFyYW0gcGFyYW1cbiAqICBwYXJhbS51cmwg5aaC5p6c5pys6Lqr5piv5a6M5pW06ZO+5o6lLCDliJnkuI3ooaXlhagsIOWQpuWImeS9v+eUqCBkZWZhdWx0U2VydmVyQWRkcmVzcyDooaXlhahcbiAqICBwYXJhbS5tZXRob2Qg6buY6K6kICdHRVQnXG4gKiAgcGFyYW0uZGF0YSDmj5DkuqTnmoTlj4LmlbBcbiAqICBwYXJhbS5oZWFkZXIg6Ieq5a6aaGVhZGVyIG9iamVjdFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdChwYXJhbSkge1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcbiAgICBpZiAoIXBhcmFtLnVybCAmJiBEZWJ1Zykge1xuICAgICAgY29uc29sZS5lcnJvcihcIm5lZWQgdXJsXCIpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IHVybCA9ICEvKChodHRwOil8KGh0dHBzOikpLy50ZXN0KHBhcmFtLnVybCkgPyBgJHtCYXNlVXJsfSR7cGFyYW0udXJsfWAgOiBwYXJhbS51cmxcbiAgICBsZXQgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIG1ldGhvZDogcGFyYW0ubWV0aG9kID8gcGFyYW0ubWV0aG9kIDogJ0dFVCcsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChyZXMpPT4ge1xuICAgICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICB9IGVsc2UgaWYgKHJlcy5kYXRhLmNvZGUgPT0gNDAxKSB7XG4gICAgICAgICAgLy8g5riF56m65pys5Zyw5pWw5o2uXG4gICAgICAgICAgLy8gd3gucmVMYXVuY2goe1xuICAgICAgICAgIC8vICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xuICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgIC8vIHJldHVyblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBtc2dcbiAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgbXNnID0gcmVzLmRhdGEubXNnXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1zZyA9IHJlcy5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKERlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGDor7fmsYIgJHtwYXJhbS51cmx9IOmUmeivrywg6ZSZ6K+v5L+h5oGvOiAke21zZ31gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWplY3QocmVzLmRhdGEpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiAoZSk9PiB7XG4gICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgICAgIGlmIChEZWJ1Zykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5lcnJNc2cpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93RXJyb3IoZS5lcnJNc2cpXG4gICAgICAgIHJlamVjdChlKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyYW0uZGF0YSkge1xuICAgICAgcmVxdWVzdERhdGEuZGF0YSA9IHBhcmFtLmRhdGFcbiAgICB9XG4gICAgaWYgKHBhcmFtLmhlYWRlcikge1xuICAgICAgXy5lYWNoKE9iamVjdC5rZXlzKHBhcmFtLmhlYWRlciksICh2YWx1ZSwga2V5KT0+IHtcbiAgICAgICAgcmVxdWVzdERhdGEuaGVhZGVyW2tleV0gPSB2YWx1ZVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8gaWYgKHRoaXMuZ2xvYmFsRGF0YS50b2tlbikge1xuICAgIC8vICAgcmVxdWVzdERhdGEuaGVhZGVyLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7dGhpcy5nbG9iYWxEYXRhLnRva2VufWBcbiAgICAvLyB9XG4gICAgaWYgKERlYnVnKSB7XG4gICAgICBsb2dJbmZvKHBhcmFtLnVybCwgJ+WPkei1t+ivt+axgjonKVxuICAgIH1cbiAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgIHd4LnJlcXVlc3QocmVxdWVzdERhdGEpXG4gIH0pXG59XG4iXX0=