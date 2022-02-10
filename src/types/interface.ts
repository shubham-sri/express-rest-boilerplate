import { Send } from 'express'
import { ErrorResponse, SuccessResponse } from '../models'

export interface ResponseSetup {
  setup: VoidFunction
  dispatch: any
  send?: any
  status?: any
}

export type DispatchPayload<T = Record<string, any>> =
  | SuccessResponse<T>
  | ErrorResponse
