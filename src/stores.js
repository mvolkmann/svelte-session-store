import {writableSession} from './store-util';

export const numbers = writableSession('numbers', [1, 2, 3]);
