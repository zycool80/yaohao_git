'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _qiniuUploader = require('./qiniuUploader.js');

var _qiniuUploader2 = _interopRequireDefault(_qiniuUploader);

var _request = require('./request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var qiniu = _wepy2.default.$appConfig.qiniu;
var uploadToken = '';

function upload(file, noMessage) {
  return new Promise(function (resolve, reject, progress) {
    if (!uploadToken) {
      console.error("请先调用 getUploadToken");
      reject("请先调用 getUploadToken");
      return;
    }
    if (!noMessage) {
      wx.showLoading({
        title: '上传中..',
        mask: true
      });
    }
    _qiniuUploader2.default.upload(file, function (res) {
      if (!noMessage) {
        wx.hideLoading();
        wx.showToast({
          title: '上传成功',
          icon: 'success',
          mask: true
        });
      }
      resolve(qiniu.domain + "/" + res.key);
    }, function (e) {
      wx.hideLoading();
      wx.showToast({
        title: '上传失败!',
        icon: 'none',
        duration: 4000
      });
      reject(e);
    }, {
      region: qiniu.region,
      uptoken: uploadToken
    });
  });
}

// 获取七牛 token
function getUploadToken() {
  return new Promise(function (resolve, reject) {
    if (uploadToken) {
      resolve(uploadToken);
    } else {
      (0, _request2.default)({
        url: '/api/common/util/getUploadToken',
        method: 'get'
      }).then(function (res) {
        console.log(res);
        // uploadToken = res.data
        resolve(res);
      }).catch(function (e) {
        wx.showToast({
          title: '获取token失败!',
          icon: 'none',
          duration: 4000
        });
        reject(e);
      });
    }
  });
}

module.exports = {
  upload: upload,
  getUploadToken: getUploadToken
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC5qcyJdLCJuYW1lcyI6WyJxaW5pdSIsIndlcHkiLCIkYXBwQ29uZmlnIiwidXBsb2FkVG9rZW4iLCJ1cGxvYWQiLCJmaWxlIiwibm9NZXNzYWdlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9ncmVzcyIsImNvbnNvbGUiLCJlcnJvciIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJxaW5pdVVwbG9hZGVyIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzaG93VG9hc3QiLCJpY29uIiwiZG9tYWluIiwia2V5IiwiZSIsImR1cmF0aW9uIiwicmVnaW9uIiwidXB0b2tlbiIsImdldFVwbG9hZFRva2VuIiwidXJsIiwibWV0aG9kIiwidGhlbiIsImxvZyIsImNhdGNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLElBQU1BLFFBQVFDLGVBQUtDLFVBQUwsQ0FBZ0JGLEtBQTlCO0FBQ0EsSUFBSUcsY0FBYyxFQUFsQjs7QUFFQSxTQUFTQyxNQUFULENBQWdCQyxJQUFoQixFQUFzQkMsU0FBdEIsRUFBaUM7QUFDL0IsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQWtCQyxRQUFsQixFQUE4QjtBQUMvQyxRQUFJLENBQUNQLFdBQUwsRUFBa0I7QUFDaEJRLGNBQVFDLEtBQVIsQ0FBYyxxQkFBZDtBQUNBSCxhQUFPLHFCQUFQO0FBQ0E7QUFDRDtBQUNELFFBQUksQ0FBQ0gsU0FBTCxFQUFnQjtBQUNkTyxTQUFHQyxXQUFILENBQWU7QUFDYkMsZUFBTyxPQURNO0FBRWJDLGNBQU07QUFGTyxPQUFmO0FBSUQ7QUFDREMsNEJBQWNiLE1BQWQsQ0FBcUJDLElBQXJCLEVBQTJCLFVBQUNhLEdBQUQsRUFBUztBQUNsQyxVQUFJLENBQUNaLFNBQUwsRUFBZ0I7QUFDZE8sV0FBR00sV0FBSDtBQUNBTixXQUFHTyxTQUFILENBQWE7QUFDWEwsaUJBQU8sTUFESTtBQUVYTSxnQkFBTSxTQUZLO0FBR1hMLGdCQUFNO0FBSEssU0FBYjtBQUtEO0FBQ0RSLGNBQVFSLE1BQU1zQixNQUFOLEdBQWUsR0FBZixHQUFxQkosSUFBSUssR0FBakM7QUFDRCxLQVZELEVBVUcsVUFBQ0MsQ0FBRCxFQUFPO0FBQ1JYLFNBQUdNLFdBQUg7QUFDQU4sU0FBR08sU0FBSCxDQUFhO0FBQ1hMLGVBQU8sT0FESTtBQUVYTSxjQUFNLE1BRks7QUFHWEksa0JBQVU7QUFIQyxPQUFiO0FBS0FoQixhQUFPZSxDQUFQO0FBQ0QsS0FsQkQsRUFrQkc7QUFDREUsY0FBUTFCLE1BQU0wQixNQURiO0FBRURDLGVBQVN4QjtBQUZSLEtBbEJIO0FBc0JELEdBbENNLENBQVA7QUFtQ0Q7O0FBRUQ7QUFDQSxTQUFTeUIsY0FBVCxHQUEwQjtBQUN4QixTQUFPLElBQUlyQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQW9CO0FBQ3JDLFFBQUlOLFdBQUosRUFBaUI7QUFDZkssY0FBUUwsV0FBUjtBQUNELEtBRkQsTUFFTztBQUNMLDZCQUFRO0FBQ04wQiw4Q0FETTtBQUVOQyxnQkFBUTtBQUZGLE9BQVIsRUFHR0MsSUFISCxDQUdRLFVBQUNiLEdBQUQsRUFBUTtBQUNkUCxnQkFBUXFCLEdBQVIsQ0FBWWQsR0FBWjtBQUNBO0FBQ0FWLGdCQUFRVSxHQUFSO0FBQ0QsT0FQRCxFQU9HZSxLQVBILENBT1MsVUFBQ1QsQ0FBRCxFQUFLO0FBQ1pYLFdBQUdPLFNBQUgsQ0FBYTtBQUNYTCxpQkFBTyxZQURJO0FBRVhNLGdCQUFNLE1BRks7QUFHWEksb0JBQVU7QUFIQyxTQUFiO0FBS0FoQixlQUFPZSxDQUFQO0FBQ0QsT0FkRDtBQWVEO0FBQ0YsR0FwQk0sQ0FBUDtBQXFCRDs7QUFHRFUsT0FBT0MsT0FBUCxHQUFpQjtBQUNmL0IsVUFBUUEsTUFETztBQUVmd0Isa0JBQWdCQTtBQUZELENBQWpCIiwiZmlsZSI6InVwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgcWluaXVVcGxvYWRlciBmcm9tICcuL3Fpbml1VXBsb2FkZXInXG5pbXBvcnQgcmVxdWVzdCBmcm9tICdAL3V0aWxzL3JlcXVlc3QnXG5jb25zdCBxaW5pdSA9IHdlcHkuJGFwcENvbmZpZy5xaW5pdVxudmFyIHVwbG9hZFRva2VuID0gJydcblxuZnVuY3Rpb24gdXBsb2FkKGZpbGUsIG5vTWVzc2FnZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCwgcHJvZ3Jlc3MpPT4ge1xuICAgIGlmICghdXBsb2FkVG9rZW4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLor7flhYjosIPnlKggZ2V0VXBsb2FkVG9rZW5cIilcbiAgICAgIHJlamVjdChcIuivt+WFiOiwg+eUqCBnZXRVcGxvYWRUb2tlblwiKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghbm9NZXNzYWdlKSB7XG4gICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAn5LiK5Lyg5LitLi4nLFxuICAgICAgICBtYXNrOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgICBxaW5pdVVwbG9hZGVyLnVwbG9hZChmaWxlLCAocmVzKSA9PiB7XG4gICAgICBpZiAoIW5vTWVzc2FnZSkge1xuICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfkuIrkvKDmiJDlip8nLFxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICBtYXNrOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXNvbHZlKHFpbml1LmRvbWFpbiArIFwiL1wiICsgcmVzLmtleSlcbiAgICB9LCAoZSkgPT4ge1xuICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfkuIrkvKDlpLHotKUhJyxcbiAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICBkdXJhdGlvbjogNDAwMFxuICAgICAgfSlcbiAgICAgIHJlamVjdChlKVxuICAgIH0sIHtcbiAgICAgIHJlZ2lvbjogcWluaXUucmVnaW9uLFxuICAgICAgdXB0b2tlbjogdXBsb2FkVG9rZW5cbiAgICB9KVxuICB9KVxufVxuXG4vLyDojrflj5bkuIPniZsgdG9rZW5cbmZ1bmN0aW9uIGdldFVwbG9hZFRva2VuKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG4gICAgaWYgKHVwbG9hZFRva2VuKSB7XG4gICAgICByZXNvbHZlKHVwbG9hZFRva2VuKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgL2FwaS9jb21tb24vdXRpbC9nZXRVcGxvYWRUb2tlbmAsXG4gICAgICAgIG1ldGhvZDogJ2dldCdcbiAgICAgIH0pLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgLy8gdXBsb2FkVG9rZW4gPSByZXMuZGF0YVxuICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgIH0pLmNhdGNoKChlKT0+e1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6I635Y+WdG9rZW7lpLHotKUhJyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDQwMDBcbiAgICAgICAgfSlcbiAgICAgICAgcmVqZWN0KGUpXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdXBsb2FkOiB1cGxvYWQsXG4gIGdldFVwbG9hZFRva2VuOiBnZXRVcGxvYWRUb2tlblxufVxuIl19