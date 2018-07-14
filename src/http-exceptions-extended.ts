import {Unauthorized, PaymentRequired, BadRequest} from './http-exceptions-w3c';

class MissingParameter extends BadRequest {
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

class InvalidParameter extends BadRequest {
  constructor(keyPath: string, expectedType: string, receivedType: string) {
    super(keyPath, expectedType, receivedType);
  }

  template(keyPath: string, expectedType: string, receivedType: string, value: any) : string{
    if (keyPath.includes('.')) {
      return `The parameter at key path ${keyPath} should be a ${expectedType} but ${value} is a ${receivedType}`;
    }

    return `The parameter ${keyPath} should be a ${expectedType} but ${value} is a ${receivedType}`;
  }
}

class MalformedJWT extends Unauthorized {
  template(): string {
    return `The JWT you supplied appears to be malformed`;
  }
}

class MissingScope extends Unauthorized {
  constructor(scope: string, scopes: string[]) {
    super(scope, scopes);
  }

  template(scope: string, scopes: string[]): string {
    return `Use of this api requires the scope ${scope}; your token only includes ${scopes.join(', ')}`;
  }
}

class QuotaExceeded extends PaymentRequired {
  constructor(quota: number) {
    super(quota);
  }

  template(quota: number): string {
    return `You have exceeded your quota of ${quota}`;
  }
}
