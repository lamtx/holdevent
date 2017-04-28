export default class HttpStatusError {
  constructor(statusCode, json) {
    this.json = json;
    this.statusCode = statusCode;
    this.ok = 200 <= statusCode && statusCode < 300;
  }

  unauthorized() {
    return this.statusCode === 401;
  }

  badRequest() {
    return this.statusCode === 400;
  }
}