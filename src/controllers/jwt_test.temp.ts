import { Request, Response } from 'express'
import { SuccessResponse } from '../models'
import { JwtPayload } from '../models/jwt'
import { JwtUtils } from '../utils'

export const JwtTestControllers = {
  async ok(req: Request, res: Response) {
    console.log(req.cUser)

    const jwtPayload = JwtPayload.fromJson({
      type: 'access',
      user: {
        id: 2,
        deleted: false,
        username: 'shubhams@geekyants.com',
        role: {
          id: 10,
          name: 'super_admin',
          label: 'Super Admin',
        },
      },
      permissions: ['all'],
    })
    res.dispatch(
      new SuccessResponse({
        token: {
          access: JwtUtils.getToken(jwtPayload),
        },
      }),
    )
  },
}
