const BASE_URL = process.env.REACT_APP_BASE_ENDPOINT + "/api/v1";

// Authentication
const SYSTEM_PING = BASE_URL + "/user/me";
const CURRENT_USER_INFO = BASE_URL + "/user/me";

export {
  // Authentication
  SYSTEM_PING,
  CURRENT_USER_INFO,
}