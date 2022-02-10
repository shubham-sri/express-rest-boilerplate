import { Router } from 'express'
import { V0Route } from './v0'
import { HealthCheckControllers, VersionControllers } from '../controllers'

const router = Router()

router.use('/v0', V0Route)

router.get('/health-check', HealthCheckControllers.ok)
router.get('/version', VersionControllers.get)

export const IndexRoute = router
