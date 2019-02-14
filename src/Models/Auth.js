import API from '../Lib/API';
import * as Routes from '../Config/Routes';

var systemPing = function (options) {
  // eslint-disable-next-line
  let { onSuccess, onError } = options;

  var currentUser = getCurrentUser();
  if (currentUser) {
    fetchCurrentUser({
      onSuccess: function (data) {
        var localCurrentUser = Object.assign({}, getCurrentUser(), data.response);
        setCurrentUser(localCurrentUser);
        onSuccess(data);
      },
      onError: function (data) {
        onError(data);
      }
    });
  } else {
    onError();
  }
}

var fetchCurrentUser = function (options) {
  let { onSuccess, onError } = options;
  var url = Routes.CURRENT_USER_INFO;
  API.get(url).then(function (data) {
    onSuccess(data);
  }).catch(function (error) {
    onError(error);
  })
}


var setCurrentUser = function (userData) {
  localStorage.setItem('currentUser', JSON.stringify(userData));
}

var getCurrentUser = function (userData) {
  return JSON.parse(localStorage.getItem('currentUser'));
}

var logout = function (options) {
  localStorage.removeItem('currentUser');
  // let { onSuccess, onError } = options;
  // API.post(Routes.LOGOUT, {}).then(function (data) {
  //   localStorage.removeItem('currentUser');
  //   onSuccess(data);
  // }).catch(function (error) {
  //   onError(error);
  // })
}

var getOrganizationsToLocal = function (participants) {
  return JSON.parse(localStorage.getItem('organizations'));
}



export {
  systemPing,
  getCurrentUser,
  getOrganizationsToLocal,
  logout,
  setCurrentUser,

};