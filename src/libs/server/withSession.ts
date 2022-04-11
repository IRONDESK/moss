import { withIronSessionApiRoute } from 'iron-session/next';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id?: number;
    };
  }
}

const cookieOptions = {
  cookieName: 'moss-session',
  password: process.env.COOKIE_PW!, //Encrypt
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
