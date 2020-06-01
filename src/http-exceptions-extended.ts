import {Unauthorized, PaymentRequired, BadRequest} from './http-exceptions-w3c';

export class MissingParameter extends BadRequest {
  // eslint-disable-next-line no-useless-constructor
  constructor(keyPath: string, expectedType: string) {
    super(keyPath, expectedType);
  }

  template(keyPath: string, expectedType: string): string {
    if (keyPath.includes('.')) {
      return `The parameter at key path ${keyPath} is required and should be a ${expectedType}`;
    }

    return `The parameter ${keyPath} is required and should be a ${expectedType}`;
  }
}

export class InvalidParameter extends BadRequest {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    keyPath: string,
    expectedType: string,
    receivedType: string,
    value: string
  ) {
    super(keyPath, expectedType, receivedType, value);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  template(
    keyPath: string,
    expectedType: string,
    receivedType: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
  ): string {
    if (keyPath.includes('.')) {
      return `The parameter at key path ${keyPath} should be a ${expectedType} but ${value} is a ${receivedType}`;
    }

    return `The parameter ${keyPath} should be a ${expectedType} but ${value} is a ${receivedType}`;
  }
}

export class MalformedJWT extends Unauthorized {
  template(): string {
    return `The JWT you supplied appears to be malformed`;
  }
}

export class MissingScope extends Unauthorized {
  // eslint-disable-next-line no-useless-constructor
  constructor(scope: string, scopes: string[]) {
    super(scope, scopes);
  }

  template(scope: string, scopes: string[]): string {
    return `Use of this api requires the scope ${scope}; your token only includes ${scopes.join(
      ', '
    )}`;
  }
}

export class QuotaExceeded extends PaymentRequired {
  // eslint-disable-next-line no-useless-constructor
  constructor(quota: number) {
    super(quota);
  }

  template(quota: number): string {
    return `You have exceeded your quota of ${quota}`;
  }
}
