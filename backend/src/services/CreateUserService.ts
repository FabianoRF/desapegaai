import { getCustomRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import UsersRepository from '../repositories/UsersRepository'
import User from '../models/User'

interface IRequest {
  name: string
  email: string
  password: string
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository)

    const checkUserExists = await usersRepository.findByEmail(email)

    if (checkUserExists) {
      throw new Error('Email already used')
    }

    const encriptedPassword = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      password: encriptedPassword
    })

    await usersRepository.save(user)

    return user
  }
}

export default CreateUserService
