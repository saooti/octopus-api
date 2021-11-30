const axios = require('axios');
const moment = require('moment');
const init = require('../helper/init');

var getUriSearchParams = function getUriSearchParams(parameters) {
  const keys = Object.keys(parameters);
  const _return = new URLSearchParams();

  keys.forEach(k => {
    if(undefined !== parameters[k] && '' !== parameters[k]) {
      _return.append(k, parameters[k]);
    }
  });
  return _return;
};

var createAuthenticatedFetchHeader = function createAuthenticatedFetchHeader() {
  return new Promise((resolve) => {
    if(!init.octopusSdk.oAuthParam){resolve(undefined);}
    const currentTime = moment();
    const expirationDate = moment(init.octopusSdk.oAuthParam.expiration);
    if (currentTime.isAfter(expirationDate)) {
      refreshToken().then((data: any) => {
        if (data) {
          init.octopusSdk.oAuthParam.expiration = new Date(
            Date.now() + data.expires_in * 1000
          );
          init.octopusSdk.oAuthParam.accessToken = data.access_token;
          init.octopusSdk.oAuthParam.refreshToken = data.refresh_token;
          resolve({ Authorization: 'Bearer ' + data.access_token });
        }
      });
    } else {
      const bearerToken = init.octopusSdk.oAuthParam.accessToken;
      resolve({ Authorization: 'Bearer ' + bearerToken });
    }
  });
};

var refreshToken = function refreshToken() {
  return new Promise((resolve, reject) => {
    const params =
      'refresh_token=' +
      init.octopusSdk.oAuthParam.refreshToken +
      '&grant_type=refresh_token' +
      '&client_id=' +
      init.octopusSdk.oAuthParam.clientId;
    const uri = init.octopusSdk.oAuthParam.accessTokenUri;
    axios
      .post(uri, params, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      })
      .then(function (data) {
        resolve(data.data);
      })
      .catch(() => {
        /* window.location = '/sso/logout'; */
        reject();
      });
  });
};


module.exports ={
  getUriSearchParams: getUriSearchParams,
  createAuthenticatedFetchHeader: createAuthenticatedFetchHeader,
}
