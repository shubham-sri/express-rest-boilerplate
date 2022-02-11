import { Response } from 'express'
import { DispatchPayload } from './types'
import { JwtPayload } from './models/jwt'
declare global {
  namespace Express {
    namespace ExpresRestBoilerplate {
      type Dispatch<ResBody = any, T = Response<ResBody>> = (
        body: DispatchPayload,
      ) => T
    }
    interface Response<ResBody = any> {
      dispatch: ExpresRestBoilerplate.Dispatch<ResBody, this>
    }

    interface Request {
      isAuthenticated: boolean
      cUser?: JwtPayload
    }
  }
}
