/* eslint-disable @typescript-eslint/naming-convention */

import * as path from 'path';

export const MDX_DIR_NAME = 'posts';
export const MDX_DIR_PATH = path.join('posts');

export const ENV = {
  isDevelopment: process.env.NODE_ENV !== 'production',
  isProduction: process.env.NODE_ENV === 'production',
};
