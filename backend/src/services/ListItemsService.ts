import { getRepository } from 'typeorm'
import Item from '../models/Item'

interface IRequest {
  user_id?: string | undefined
}

class ListItemService {
  public async execute({ user_id }: IRequest): Promise<Item[]> {
    const itemRepository = getRepository(Item)

    const items = user_id
      ? itemRepository.find({
          where: { user_id }
        })
      : itemRepository.find()

    return items
  }
}

export default ListItemService
