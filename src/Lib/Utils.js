import moment from 'moment';
import { getCurrentUser, setCurrentUser } from '../Models/Auth';

var isAuthenticated = function () {
  return JSON.parse(localStorage.getItem('currentUser'));
}

var clearLocal = function () {
  for (var key in localStorage) {
    if (localStorage.hasOwnProperty(key) && key) {
      localStorage.removeItem(key)
    }
  }
}

var getHeaders = function (contentType) {
  var currentUser = isAuthenticated();

  if (!currentUser) {
    return {
      'Accept': 'application/json',
      'Content-Type': contentType,
      // 'dataType': 'json',
    };
  } else {
    return {
      'Accept': 'application/json',
      'Content-Type': contentType,
      // 'dataType': 'json',
      'Authorization': currentUser.token
    };
  }
}

let refreshToken = (token) => {
  let userAttributes = getCurrentUser()
  userAttributes['token'] = token;
  setCurrentUser(userAttributes)
}

let timeParser = (date) => {
  date = date.replace(" +0000 UTC", "");
  return moment(date).utc().format('LLL')
}

let unixToLocal = (unix) => {
  return moment.unix(unix).format("DD-MM-YYYY HH:mm a");
}


export {
  isAuthenticated,
  getHeaders,
  clearLocal,
  timeParser,
  refreshToken,
  unixToLocal,
}