'use strict';

(function () {

  var config = {
    qiniuRegion: '',
    qiniuImageURLPrefix: '',
    qiniuUploadToken: '',
    qiniuUploadTokenURL: '',
    qiniuUploadTokenFunction: null,
    qiniuShouldUseQiniuFileName: false
  };

  module.exports = {
    init: init,
    upload: upload

    // 在整个程序生命周期中，只需要 init 一次即可
    // 如果需要变更参数，再调用 init 即可
  };function init(options) {
    config = {
      qiniuRegion: '',
      qiniuImageURLPrefix: '',
      qiniuUploadToken: '',
      qiniuUploadTokenURL: '',
      qiniuUploadTokenFunction: null,
      qiniuShouldUseQiniuFileName: false
    };
    updateConfigWithOptions(options);
  }

  function updateConfigWithOptions(options) {
    if (options.region) {
      config.qiniuRegion = options.region;
    } else {
      console.error('qiniu uploader need your bucket region');
    }
    if (options.uptoken) {
      config.qiniuUploadToken = options.uptoken;
    } else if (options.uptokenURL) {
      config.qiniuUploadTokenURL = options.uptokenURL;
    } else if (options.uptokenFunc) {
      config.qiniuUploadTokenFunction = options.uptokenFunc;
    }
    if (options.domain) {
      config.qiniuImageURLPrefix = options.domain;
    }
    config.qiniuShouldUseQiniuFileName = options.shouldUseQiniuFileName;
  }

  function upload(filePath, success, fail, options, progress, cancelTask) {
    if (null == filePath) {
      console.error('qiniu uploader need filePath to upload');
      return;
    }
    if (options) {
      updateConfigWithOptions(options);
    }
    if (config.qiniuUploadToken) {
      doUpload(filePath, success, fail, options, progress, cancelTask);
    } else if (config.qiniuUploadTokenURL) {
      getQiniuToken(function () {
        doUpload(filePath, success, fail, options, progress, cancelTask);
      });
    } else if (config.qiniuUploadTokenFunction) {
      config.qiniuUploadToken = config.qiniuUploadTokenFunction();
      if (null == config.qiniuUploadToken && config.qiniuUploadToken.length > 0) {
        console.error('qiniu UploadTokenFunction result is null, please check the return value');
        return;
      }
      doUpload(filePath, success, fail, options, progress, cancelTask);
    } else {
      console.error('qiniu uploader need one of [uptoken, uptokenURL, uptokenFunc]');
      return;
    }
  }

  function doUpload(filePath, _success, _fail, options, progress, cancelTask) {
    if (null == config.qiniuUploadToken && config.qiniuUploadToken.length > 0) {
      console.error('qiniu UploadToken is null, please check the init config or networking');
      return;
    }
    var url = uploadURLFromRegionCode(config.qiniuRegion);
    var fileName = filePath.split('//')[1];
    if (options && options.key) {
      fileName = options.key;
    }
    var formData = {
      'token': config.qiniuUploadToken
    };
    if (!config.qiniuShouldUseQiniuFileName) {
      formData['key'] = fileName;
    }
    var uploadTask = wx.uploadFile({
      url: url,
      filePath: filePath,
      name: 'file',
      formData: formData,
      success: function success(res) {
        var dataString = res.data;
        if (res.data.hasOwnProperty('type') && res.data.type === 'Buffer') {
          dataString = String.fromCharCode.apply(null, res.data.data);
        }
        try {
          var dataObject = JSON.parse(dataString);
          //do something
          var imageUrl = config.qiniuImageURLPrefix + '/' + dataObject.key;
          dataObject.imageURL = imageUrl;
          if (_success) {
            _success(dataObject);
          }
        } catch (e) {
          console.log('parse JSON failed, origin String is: ' + dataString);
          if (_fail) {
            _fail(e);
          }
        }
      },
      fail: function fail(error) {
        console.error(error);
        if (_fail) {
          _fail(error);
        }
      }
    });

    uploadTask.onProgressUpdate(function (res) {
      progress && progress(res);
    });

    cancelTask && cancelTask(function () {
      uploadTask.abort();
    });
  }

  function getQiniuToken(callback) {
    wx.request({
      url: config.qiniuUploadTokenURL,
      success: function success(res) {
        var token = res.data.uptoken;
        if (token && token.length > 0) {
          config.qiniuUploadToken = token;
          if (callback) {
            callback();
          }
        } else {
          console.error('qiniuUploader cannot get your token, please check the uptokenURL or server');
        }
      },
      fail: function fail(error) {
        console.error('qiniu UploadToken is null, please check the init config or networking: ' + error);
      }
    });
  }

  function uploadURLFromRegionCode(code) {
    var uploadURL = null;
    switch (code) {
      case 'ECN':
        uploadURL = 'https://up.qbox.me';break;
      case 'NCN':
        uploadURL = 'https://up-z1.qbox.me';break;
      case 'SCN':
        uploadURL = 'https://up-z2.qbox.me';break;
      case 'NA':
        uploadURL = 'https://up-na0.qbox.me';break;
      case 'ASG':
        uploadURL = 'https://up-as0.qbox.me';break;
      default:
        console.error('please make the region is with one of [ECN, SCN, NCN, NA, ASG]');
    }
    return uploadURL;
  }
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFpbml1VXBsb2FkZXIuanMiXSwibmFtZXMiOlsiY29uZmlnIiwicWluaXVSZWdpb24iLCJxaW5pdUltYWdlVVJMUHJlZml4IiwicWluaXVVcGxvYWRUb2tlbiIsInFpbml1VXBsb2FkVG9rZW5VUkwiLCJxaW5pdVVwbG9hZFRva2VuRnVuY3Rpb24iLCJxaW5pdVNob3VsZFVzZVFpbml1RmlsZU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5pdCIsInVwbG9hZCIsIm9wdGlvbnMiLCJ1cGRhdGVDb25maWdXaXRoT3B0aW9ucyIsInJlZ2lvbiIsImNvbnNvbGUiLCJlcnJvciIsInVwdG9rZW4iLCJ1cHRva2VuVVJMIiwidXB0b2tlbkZ1bmMiLCJkb21haW4iLCJzaG91bGRVc2VRaW5pdUZpbGVOYW1lIiwiZmlsZVBhdGgiLCJzdWNjZXNzIiwiZmFpbCIsInByb2dyZXNzIiwiY2FuY2VsVGFzayIsImRvVXBsb2FkIiwiZ2V0UWluaXVUb2tlbiIsImxlbmd0aCIsInVybCIsInVwbG9hZFVSTEZyb21SZWdpb25Db2RlIiwiZmlsZU5hbWUiLCJzcGxpdCIsImtleSIsImZvcm1EYXRhIiwidXBsb2FkVGFzayIsInd4IiwidXBsb2FkRmlsZSIsIm5hbWUiLCJyZXMiLCJkYXRhU3RyaW5nIiwiZGF0YSIsImhhc093blByb3BlcnR5IiwidHlwZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGx5IiwiZGF0YU9iamVjdCIsIkpTT04iLCJwYXJzZSIsImltYWdlVXJsIiwiaW1hZ2VVUkwiLCJlIiwibG9nIiwib25Qcm9ncmVzc1VwZGF0ZSIsImFib3J0IiwiY2FsbGJhY2siLCJyZXF1ZXN0IiwidG9rZW4iLCJjb2RlIiwidXBsb2FkVVJMIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBVzs7QUFFVixNQUFJQSxTQUFTO0FBQ1hDLGlCQUFhLEVBREY7QUFFWEMseUJBQXFCLEVBRlY7QUFHWEMsc0JBQWtCLEVBSFA7QUFJWEMseUJBQXFCLEVBSlY7QUFLWEMs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QkFBWSxvQkFBWixDQUFrQztBQUM5QyxXQUFLLEtBQUw7QUFBWUEsb0JBQVksdUJBQVosQ0FBcUM7QUFDakQsV0FBSyxLQUFMO0FBQVlBLG9CQUFZLHVCQUFaLENBQXFDO0FBQ2pELFdBQUssSUFBTDtBQUFXQSxvQkFBWSx3QkFBWixDQUFzQztBQUNqRCxXQUFLLEtBQUw7QUFBWUEsb0JBQVksd0JBQVosQ0FBc0M7QUFDbEQ7QUFBUzlDLGdCQUFRQyxLQUFSLENBQWMsZ0VBQWQ7QUFOWDtBQVFBLFdBQU82QyxTQUFQO0FBQ0Q7QUFFRixDQXZLRCIsImZpbGUiOiJxaW5pdVVwbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuXG4gIHZhciBjb25maWcgPSB7XG4gICAgcWluaXVSZWdpb246ICcnLFxuICAgIHFpbml1SW1hZ2VVUkxQcmVmaXg6ICcnLFxuICAgIHFpbml1VXBsb2FkVG9rZW46ICcnLFxuICAgIHFpbml1VXBsb2FkVG9rZW5VUkw6ICcnLFxuICAgIHFpbml1VXBsb2FkVG9rZW5GdW5jdGlvbjogbnVsbCxcbiAgICBxaW5pdVNob3VsZFVzZVFpbml1RmlsZU5hbWU6IGZhbHNlXG4gIH1cblxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0OiBpbml0LFxuICAgIHVwbG9hZDogdXBsb2FkXG4gIH1cblxuLy8g5Zyo5pW05Liq56iL5bqP55Sf5ZG95ZGo5pyf5Lit77yM5Y+q6ZyA6KaBIGluaXQg5LiA5qyh5Y2z5Y+vXG4vLyDlpoLmnpzpnIDopoHlj5jmm7Tlj4LmlbDvvIzlho3osIPnlKggaW5pdCDljbPlj69cbiAgZnVuY3Rpb24gaW5pdChvcHRpb25zKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgcWluaXVSZWdpb246ICcnLFxuICAgICAgcWluaXVJbWFnZVVSTFByZWZpeDogJycsXG4gICAgICBxaW5pdVVwbG9hZFRva2VuOiAnJyxcbiAgICAgIHFpbml1VXBsb2FkVG9rZW5VUkw6ICcnLFxuICAgICAgcWluaXVVcGxvYWRUb2tlbkZ1bmN0aW9uOiBudWxsLFxuICAgICAgcWluaXVTaG91bGRVc2VRaW5pdUZpbGVOYW1lOiBmYWxzZVxuICAgIH07XG4gICAgdXBkYXRlQ29uZmlnV2l0aE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDb25maWdXaXRoT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMucmVnaW9uKSB7XG4gICAgICBjb25maWcucWluaXVSZWdpb24gPSBvcHRpb25zLnJlZ2lvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcigncWluaXUgdXBsb2FkZXIgbmVlZCB5b3VyIGJ1Y2tldCByZWdpb24nKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudXB0b2tlbikge1xuICAgICAgY29uZmlnLnFpbml1VXBsb2FkVG9rZW4gPSBvcHRpb25zLnVwdG9rZW47XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnVwdG9rZW5VUkwpIHtcbiAgICAgIGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuVVJMID0gb3B0aW9ucy51cHRva2VuVVJMO1xuICAgIH0gZWxzZSBpZihvcHRpb25zLnVwdG9rZW5GdW5jKSB7XG4gICAgICBjb25maWcucWluaXVVcGxvYWRUb2tlbkZ1bmN0aW9uID0gb3B0aW9ucy51cHRva2VuRnVuYztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZG9tYWluKSB7XG4gICAgICBjb25maWcucWluaXVJbWFnZVVSTFByZWZpeCA9IG9wdGlvbnMuZG9tYWluO1xuICAgIH1cbiAgICBjb25maWcucWluaXVTaG91bGRVc2VRaW5pdUZpbGVOYW1lID0gb3B0aW9ucy5zaG91bGRVc2VRaW5pdUZpbGVOYW1lXG4gIH1cblxuICBmdW5jdGlvbiB1cGxvYWQoZmlsZVBhdGgsIHN1Y2Nlc3MsIGZhaWwsIG9wdGlvbnMsIHByb2dyZXNzLCBjYW5jZWxUYXNrKSB7XG4gICAgaWYgKG51bGwgPT0gZmlsZVBhdGgpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3Fpbml1IHVwbG9hZGVyIG5lZWQgZmlsZVBhdGggdG8gdXBsb2FkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICB1cGRhdGVDb25maWdXaXRoT3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuKSB7XG4gICAgICBkb1VwbG9hZChmaWxlUGF0aCwgc3VjY2VzcywgZmFpbCwgb3B0aW9ucywgcHJvZ3Jlc3MsIGNhbmNlbFRhc2spO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLnFpbml1VXBsb2FkVG9rZW5VUkwpIHtcbiAgICAgIGdldFFpbml1VG9rZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvVXBsb2FkKGZpbGVQYXRoLCBzdWNjZXNzLCBmYWlsLCBvcHRpb25zLCBwcm9ncmVzcywgY2FuY2VsVGFzayk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuRnVuY3Rpb24pIHtcbiAgICAgIGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuID0gY29uZmlnLnFpbml1VXBsb2FkVG9rZW5GdW5jdGlvbigpO1xuICAgICAgaWYgKG51bGwgPT0gY29uZmlnLnFpbml1VXBsb2FkVG9rZW4gJiYgY29uZmlnLnFpbml1VXBsb2FkVG9rZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdxaW5pdSBVcGxvYWRUb2tlbkZ1bmN0aW9uIHJlc3VsdCBpcyBudWxsLCBwbGVhc2UgY2hlY2sgdGhlIHJldHVybiB2YWx1ZScpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGRvVXBsb2FkKGZpbGVQYXRoLCBzdWNjZXNzLCBmYWlsLCBvcHRpb25zLCBwcm9ncmVzcywgY2FuY2VsVGFzayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3Fpbml1IHVwbG9hZGVyIG5lZWQgb25lIG9mIFt1cHRva2VuLCB1cHRva2VuVVJMLCB1cHRva2VuRnVuY10nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkb1VwbG9hZChmaWxlUGF0aCwgc3VjY2VzcywgZmFpbCwgb3B0aW9ucywgcHJvZ3Jlc3MsIGNhbmNlbFRhc2spIHtcbiAgICBpZiAobnVsbCA9PSBjb25maWcucWluaXVVcGxvYWRUb2tlbiAmJiBjb25maWcucWluaXVVcGxvYWRUb2tlbi5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdxaW5pdSBVcGxvYWRUb2tlbiBpcyBudWxsLCBwbGVhc2UgY2hlY2sgdGhlIGluaXQgY29uZmlnIG9yIG5ldHdvcmtpbmcnKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgdXJsID0gdXBsb2FkVVJMRnJvbVJlZ2lvbkNvZGUoY29uZmlnLnFpbml1UmVnaW9uKTtcbiAgICB2YXIgZmlsZU5hbWUgPSBmaWxlUGF0aC5zcGxpdCgnLy8nKVsxXTtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmtleSkge1xuICAgICAgZmlsZU5hbWUgPSBvcHRpb25zLmtleTtcbiAgICB9XG4gICAgdmFyIGZvcm1EYXRhID0ge1xuICAgICAgJ3Rva2VuJzogY29uZmlnLnFpbml1VXBsb2FkVG9rZW5cbiAgICB9O1xuICAgIGlmICghY29uZmlnLnFpbml1U2hvdWxkVXNlUWluaXVGaWxlTmFtZSkge1xuICAgICAgZm9ybURhdGFbJ2tleSddID0gZmlsZU5hbWVcbiAgICB9XG4gICAgdmFyIHVwbG9hZFRhc2sgPSB3eC51cGxvYWRGaWxlKHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgZmlsZVBhdGg6IGZpbGVQYXRoLFxuICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgZm9ybURhdGE6IGZvcm1EYXRhLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgZGF0YVN0cmluZyA9IHJlcy5kYXRhXG4gICAgICAgIGlmKHJlcy5kYXRhLmhhc093blByb3BlcnR5KCd0eXBlJykgJiYgcmVzLmRhdGEudHlwZSA9PT0gJ0J1ZmZlcicpe1xuICAgICAgICAgIGRhdGFTdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHJlcy5kYXRhLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgZGF0YU9iamVjdCA9IEpTT04ucGFyc2UoZGF0YVN0cmluZyk7XG4gICAgICAgICAgLy9kbyBzb21ldGhpbmdcbiAgICAgICAgICB2YXIgaW1hZ2VVcmwgPSBjb25maWcucWluaXVJbWFnZVVSTFByZWZpeCArICcvJyArIGRhdGFPYmplY3Qua2V5O1xuICAgICAgICAgIGRhdGFPYmplY3QuaW1hZ2VVUkwgPSBpbWFnZVVybDtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgc3VjY2VzcyhkYXRhT2JqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXJzZSBKU09OIGZhaWxlZCwgb3JpZ2luIFN0cmluZyBpczogJyArIGRhdGFTdHJpbmcpXG4gICAgICAgICAgaWYgKGZhaWwpIHtcbiAgICAgICAgICAgIGZhaWwoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICBpZiAoZmFpbCkge1xuICAgICAgICAgIGZhaWwoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHVwbG9hZFRhc2sub25Qcm9ncmVzc1VwZGF0ZSgocmVzKSA9PiB7XG4gICAgICBwcm9ncmVzcyAmJiBwcm9ncmVzcyhyZXMpXG4gICAgfSlcblxuICAgIGNhbmNlbFRhc2sgJiYgY2FuY2VsVGFzaygoKSA9PiB7XG4gICAgICB1cGxvYWRUYXNrLmFib3J0KClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UWluaXVUb2tlbihjYWxsYmFjaykge1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBjb25maWcucWluaXVVcGxvYWRUb2tlblVSTCxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIHRva2VuID0gcmVzLmRhdGEudXB0b2tlbjtcbiAgICAgICAgaWYgKHRva2VuICYmIHRva2VuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25maWcucWluaXVVcGxvYWRUb2tlbiA9IHRva2VuO1xuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcigncWluaXVVcGxvYWRlciBjYW5ub3QgZ2V0IHlvdXIgdG9rZW4sIHBsZWFzZSBjaGVjayB0aGUgdXB0b2tlblVSTCBvciBzZXJ2ZXInKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Fpbml1IFVwbG9hZFRva2VuIGlzIG51bGwsIHBsZWFzZSBjaGVjayB0aGUgaW5pdCBjb25maWcgb3IgbmV0d29ya2luZzogJyArIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gdXBsb2FkVVJMRnJvbVJlZ2lvbkNvZGUoY29kZSkge1xuICAgIHZhciB1cGxvYWRVUkwgPSBudWxsO1xuICAgIHN3aXRjaChjb2RlKSB7XG4gICAgICBjYXNlICdFQ04nOiB1cGxvYWRVUkwgPSAnaHR0cHM6Ly91cC5xYm94Lm1lJzsgYnJlYWs7XG4gICAgICBjYXNlICdOQ04nOiB1cGxvYWRVUkwgPSAnaHR0cHM6Ly91cC16MS5xYm94Lm1lJzsgYnJlYWs7XG4gICAgICBjYXNlICdTQ04nOiB1cGxvYWRVUkwgPSAnaHR0cHM6Ly91cC16Mi5xYm94Lm1lJzsgYnJlYWs7XG4gICAgICBjYXNlICdOQSc6IHVwbG9hZFVSTCA9ICdodHRwczovL3VwLW5hMC5xYm94Lm1lJzsgYnJlYWs7XG4gICAgICBjYXNlICdBU0cnOiB1cGxvYWRVUkwgPSAnaHR0cHM6Ly91cC1hczAucWJveC5tZSc7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogY29uc29sZS5lcnJvcigncGxlYXNlIG1ha2UgdGhlIHJlZ2lvbiBpcyB3aXRoIG9uZSBvZiBbRUNOLCBTQ04sIE5DTiwgTkEsIEFTR10nKTtcbiAgICB9XG4gICAgcmV0dXJuIHVwbG9hZFVSTDtcbiAgfVxuXG59KSgpO1xuIl19