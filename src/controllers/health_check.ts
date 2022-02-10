import { Request, Response } from 'express'
import { SuccessResponse } from '../models'

export const HealthCheckControllers = {
  async ok(req: Request, res: Response) {
    res.dispatch(new SuccessResponse())
  },
}
