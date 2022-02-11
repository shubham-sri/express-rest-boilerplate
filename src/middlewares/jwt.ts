import { NextFunction, Request, Response } from 'express'
import { JwtUtils } from '../utils'
import { UserPermissions } from '../types'

export const JwtMiddleware = {
  async verify(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(' ')[1]
      if (token) {
        const [isAuthenticated, cUser] = JwtUtils.verifyToken(token)
        req.isAuthenticated = isAuthenticated
        req.cUser = cUser
      } else {
        req.isAuthenticated = false
      }
    } catch (error) {
      req.isAuthenticated = false
    } finally {
      next()
    }
  },

  filterAuth(permission?: UserPermissions[]) {
    async function check(req: Request, res: Response, next: NextFunction) {
      return await JwtUtils.check(req, res, next, permission)
    }
    return check
  },
}
