import { Response } from 'express'
import { DispatchPayload } from './types'
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
  }
}
