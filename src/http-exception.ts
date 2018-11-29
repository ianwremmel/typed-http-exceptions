'use strict';

/* eslint-disable class-methods-use-this */

import {Exception} from '@ianwremmel/exception'
import {Request} from 'express';

/**
 * Base class for server-side http errors
 */
export class HttpException extends Exception {
  code = 0;

  constructor(...args: any[]) {
    super();
    const msg = this.template(...args);
    if (msg) {
      this.message = msg;
    }
  }

  template(...args: any[]): string|undefined {
    return args[0];
  }
}

export interface HttpException {
  /**
   * Http Status Code
   * @returns {number} - HTTP Status Code
   */
  code: number;
  req: Request | null;
}
