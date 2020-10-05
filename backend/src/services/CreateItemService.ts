import { getRepository } from 'typeorm'
import Item from '../models/Item'

interface IRequest {
  user_id: string
  title: string
  description: string
  price: number
  image: string
}

class CreateItemService {
  public async execute({
    user_id,
    title,
    description,
    price,
    image
  }: IRequest): Promise<Item> {
    const itemRepository = getRepository(Item)

    const item = itemRepository.create({
      user_id,
      title,
      description,
      price,
      image
    })

    await itemRepository.save(item)

    return item
  }
}

export default CreateItemService
