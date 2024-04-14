import * as crypto from 'node:crypto';

export const createSHA256 = (line: string, salt: string): string => {
  const cryptoHash = crypto.createHmac('sha256', salt);
  return cryptoHash.update(line).digest('hex');
};
