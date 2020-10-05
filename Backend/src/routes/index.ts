import { Router } from 'express'

import userRouter from './user.routes'
import itemRouter from './item.routes'

const router = Router()

router.use(userRouter)
router.use('/item', itemRouter)

export default router
