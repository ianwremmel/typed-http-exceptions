'use strict';

/* eslint-disable class-methods-use-this */

import {Exception} from '@ianwremmel/exception'
import {Request} from 'express';

/**
 * Base class for server-side http errors
 */
export class HttpException extends Exception {
  /**
   * Http Status Code
   * @returns {number} - HTTP Status Code
   */
  code = 0;

  /**
   * @returns {Request | null}
   */
  req = null;

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
