import { Router } from 'express'
import { ErrorResponse } from '../../models'
import { HttpStatus } from '../../types'

const router = Router()

router.use('/', (req, res) => {
  res.dispatch(new ErrorResponse(HttpStatus.NotFound))
})

export const V0Route = router
