'use strict';

/* eslint-env mocha */
/* eslint-disable require-jsdoc */
/* eslint-disable max-nested-callbacks */

const {assert} = require('chai');

const {
  BadRequest,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  ProxyAuthenticationRequired,
  RequestTimeout,
  Conflict,
  Gone,
  LengthRequired,
  PreconditionFailed,
  RequestEntityTooLarge,
  RequestUriTooLong,
  UnsupportedMediaType,
  RequestRangeNotSatisfiable,
  ExpectationFailed,
  InternalServerError,
  NotImplemented,
  BadGateway,
  ServiceUnavailable,
  GatewayTimeout,
  HttpVersionNotSupported
  // This is targeting built code, so it will usually fail lint
  // eslint-disable-next-line import/no-unresolved
} = require('../../../');

[
  [
    BadRequest,
    400
  ],
  [
    Unauthorized,
    401
  ],
  [
    PaymentRequired,
    402
  ],
  [
    Forbidden,
    403
  ],
  [
    NotFound,
    404
  ],
  [
    MethodNotAllowed,
    405
  ],
  [
    NotAcceptable,
    406
  ],
  [
    ProxyAuthenticationRequired,
    407
  ],
  [
    RequestTimeout,
    408
  ],
  [
    Conflict,
    409
  ],
  [
    Gone,
    410
  ],
  [
    LengthRequired,
    411
  ],
  [
    PreconditionFailed,
    412
  ],
  [
    RequestEntityTooLarge,
    413
  ],
  [
    RequestUriTooLong,
    414
  ],
  [
    UnsupportedMediaType,
    415
  ],
  [
    RequestRangeNotSatisfiable,
    416
  ],
  [
    ExpectationFailed,
    417
  ],
  [
    InternalServerError,
    500
  ],
  [
    NotImplemented,
    501
  ],
  [
    BadGateway,
    502
  ],
  [
    ServiceUnavailable,
    503
  ],
  [
    GatewayTimeout,
    504
  ],
  [
    HttpVersionNotSupported,
    505
  ]
].forEach(verifyCode);

function verifyCode([
  Constructor,
  code
]) {
  describe(Constructor.name, () => {
    describe('#code', () => {
      it('is defined', () => {
        const e = new Constructor();
        assert.equal(e.code, code);
      });
    });
  });
}
