import {Exception} from '@ianwremmel/exception';
import {Request} from 'express';

/**
 * Base class for server-side http errors
 */
export class HttpException extends Exception {
  code = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...args: any[]) {
    super();
    const msg = this.template(...args);
    if (msg) {
      this.message = msg;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  template(...args: any[]): string | undefined {
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
