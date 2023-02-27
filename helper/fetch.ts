import axios from 'axios';
import moment from 'moment';
import {octopusSdk} from '../helper/init';

var getUriSearchParams = function getUriSearchParams(parameters) {
  const keys = Object.keys(parameters);
  const _return = new URLSearchParams();

  keys.forEach(k => {
    if(undefined !== parameters[k] && '' !== parameters[k] && (!Array.isArray(parameters[k]) ||  parameters[k].length)) {
      _return.append(k, parameters[k]);
    }
  });
  return _return;
};

var createAuthenticatedFetchHeader = function createAuthenticatedFetchHeader() {
  return new Promise((resolve) => {
    if(!octopusSdk.oAuthParam){resolve(undefined);}
    const currentTime = moment();
    const expirationDate = moment(octopusSdk.oAuthParam.expiration);
    if (currentTime.isAfter(expirationDate)) {
      refreshToken().then((data: any) => {
        if (data) {
          octopusSdk.oAuthParam.expiration = new Date(
            Date.now() + data.expires_in * 1000
          );
          octopusSdk.oAuthParam.accessToken = data.access_token;
          octopusSdk.oAuthParam.refreshToken = data.refresh_token;
          resolve({ Authorization: 'Bearer ' + data.access_token });
        }
      });
    } else {
      const bearerToken = octopusSdk.oAuthParam.accessToken;
      resolve({ Authorization: 'Bearer ' + bearerToken });
    }
  });
};

var refreshToken = function refreshToken() {
  return new Promise((resolve, reject) => {
    const params =
      'refresh_token=' +
      octopusSdk.oAuthParam.refreshToken +
      '&grant_type=refresh_token' +
      '&client_id=' +
      octopusSdk.oAuthParam.clientId;
    const uri = octopusSdk.oAuthParam.accessTokenUri;
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


export default {
  getUriSearchParams: getUriSearchParams,
  createAuthenticatedFetchHeader: createAuthenticatedFetchHeader,
}
