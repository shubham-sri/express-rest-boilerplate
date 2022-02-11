import { Request, Response, NextFunction } from 'express'
import { ErrorResponse, SuccessResponse } from '../models'
import { HttpStatus, HttpDefaultMessage } from '../types'

export const ResponseControllers = {
  async throwNotFoundError(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    return next(
      new ErrorResponse(HttpStatus.NotFound, HttpDefaultMessage.notFound),
    )
  },

  async handleError(
    error: ErrorResponse,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> {
    res.status(error.status)
    return res.send(error)
  },
}
