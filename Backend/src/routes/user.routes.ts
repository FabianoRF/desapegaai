import { Router } from 'express'

import CreateUserService from '../services/CreateUserService'
import CreateSessionService from '../services/CreateSessionService'

const userRouter = Router()

userRouter.post('/sign-in', async (request, response) => {
  const { email, password } = request.body

  const createSession = new CreateSessionService()

  try {
    const { user, token } = await createSession.execute({
      email,
      password
    })
    delete user.password

    return response.json({ user, token })
  } catch (err) {
    return response.status(401).json({ error: err.message })
  }
})

userRouter.post('/sign-up', async (request, response) => {
  const { name, email, password } = request.body

  try {
    const createUserService = new CreateUserService()

    const responseUser = await createUserService.execute({
      name,
      email,
      password
    })

    delete responseUser.password

    return response.json(responseUser)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default userRouter
