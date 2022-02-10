import { Response, response } from 'express'
import { DispatchPayload, HttpStatus, ResponseSetup } from '../types'
import { ErrorResponse, SuccessResponse } from '../models'

export const ResponseUtils: ResponseSetup = {
  setup() {
    // defining dispatch function to send response in specific format
    response.dispatch = this.dispatch
  },

  dispatch<ResBody = any>(body: DispatchPayload): Response<ResBody> {
    if (body instanceof SuccessResponse) {
      return this.send(body)
    } else {
      this.status(body.status)
      return this.send(body)
    }
  },
}
