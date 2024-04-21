// import type { JwtPayload } from "jsonwebtoken";

// eslint-disable-next-line no-unused-vars
declare namespace Express {
  export interface Request {
    // user: string | JwtPayload;
    user: any;
  }
  export interface Response {
    // user: string | JwtPayload;
    user: any;
  }
}
