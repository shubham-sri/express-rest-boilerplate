import { sign, verify } from 'jsonwebtoken'
import { JwtPayload } from '../models/jwt'
import {
  ACCESS_TOKEN_EXPIRES,
  JWT_ISSUER,
  JWT_SECRET,
  REFRESH_TOKEN_EXPIRES,
} from '../config'
import { NextFunction, Request, Response } from 'express'
import { HttpDefaultMessage, HttpStatus, UserPermissions } from '../types'
import { ErrorResponse } from '../models'

export const JwtUtils = {
  getToken(payload: JwtPayload) {
    const expiresIn =
      payload.type === 'access' ? ACCESS_TOKEN_EXPIRES : REFRESH_TOKEN_EXPIRES
    return sign(payload.toJson(), JWT_SECRET, {
      expiresIn,
      issuer: JWT_ISSUER,
      subject: payload.user.username,
    })
  },

  verifyToken(token: string): [boolean, JwtPayload | undefined] {
    try {
      const decoded = verify(token, JWT_SECRET)
      return [true, JwtPayload.fromJson(decoded)]
    } catch (error) {
      return [false, undefined]
    }
  },

  async check(
    req: Request,
    res: Response,
    next: NextFunction,
    permissions?: UserPermissions[],
  ): Promise<void> {
    if (req.isAuthenticated) {
      if (permissions) {
        if (req.cUser?.permissions.some((item) => permissions.includes(item))) {
          next()
        } else {
          next(
            new ErrorResponse(
              HttpStatus.forbidden,
              HttpDefaultMessage.forbidden,
            ),
          )
        }
      } else {
        next()
      }
    } else {
      next(
        new ErrorResponse(
          HttpStatus.unauthorized,
          HttpDefaultMessage.unauthorized,
        ),
      )
    }
  },
}
