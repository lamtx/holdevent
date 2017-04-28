import HttpStatusError from '../model/HttpStatusError';
import Credentials from '../model/Credentials';
import {ensureDate} from '../utility/DateUtils';
import {fixImageUrl} from '../utility/Utils';
import {
  host,
  path
} from '../application/Configuration';

const url = host + path;

/**
 *
 * @param {string} endpoint
 * @param {object} params
 * @param {Credentials} credential
 * @param {string} method
 * @returns {Promise}
 * @private
 */
async function _with(endpoint, params, credential, method) {
  params = fixParams(params);
  let paramsIsEmpty = Object.keys(params).length === 0;
  let body = ((method === 'POST' || method === 'PUT') && !paramsIsEmpty)
    ? JSON.stringify(params)
    : undefined;

  if (method == 'GET' && !paramsIsEmpty) {
    let trailling = Object.keys(params).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
    endpoint += '?' + trailling
  }
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  if (credential) {
    headers['X-User-Token'] = credential.accessToken;
    headers['X-User-Email'] = credential.email;
  }
  let response = await fetch(url + endpoint, {
    method: method,
    body: body,
    headers: headers
  });
  if (response.ok) {
    return await response.json();
  }
  let text = await response.text();
  throw new HttpStatusError(response.status, text);
}

function fixParams(params = {}) {
  let result = {};
  for (let key in params) {
    let value = params[key];
    if (value !== undefined && value !== null && params.hasOwnProperty(key)) {
      result[key] = value;
    }
  }
  return result;
}
/**
 *
 * @param {string} endpoint
 * @param {Credentials|object} credentials
 * @param {object} params
 * @returns {Promise}
 */
function post(endpoint, credentials, params) {
  if (!(credentials instanceof Credentials)) {
    params = credentials;
    credentials = undefined;
  }
  return _with(endpoint, params, credentials, 'POST');
}

function get(endpoint, credentials, params) {
  if (!(credentials instanceof Credentials)) {
    params = credentials;
    credentials = undefined;
  }
  return _with(endpoint, params, credentials, 'GET');
}

function put(endpoint, credentials, params = {}) {
  if (!(credentials instanceof Credentials)) {
    params = credentials;
    credentials = undefined;
  }
  return _with(endpoint, params, credentials, 'PUT');
}

