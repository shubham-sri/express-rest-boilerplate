import { Router } from 'express'
import { JwtTestControllers } from '../../controllers'
import { JwtMiddleware } from '../../middlewares'
import { UserPermissions } from '../../types'

const router = Router()

router.get(
  '/0',
  JwtMiddleware.filterAuth([UserPermissions.all]),
  JwtTestControllers.ok,
)

router.get(
  '/1',
  JwtMiddleware.filterAuth([UserPermissions.allC]),
  JwtTestControllers.ok,
)

export const V0Route = router
