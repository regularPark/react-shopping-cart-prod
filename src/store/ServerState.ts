import { atom } from 'recoil';

export const serverState = atom<string>({
  key: 'serverState',
  default: process.env.PUBLIC_URL,
});
