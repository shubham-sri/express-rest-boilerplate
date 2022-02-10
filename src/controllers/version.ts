import { Request, Response } from 'express'
import * as packageFile from '../../package.json'
import { SuccessResponse } from '../models'

export const VersionControllers = {
  async get(req: Request, res: Response) {
    res.dispatch(
      new SuccessResponse(
        { version: packageFile.version },
        'Get version success',
      ),
    )
  },
}
