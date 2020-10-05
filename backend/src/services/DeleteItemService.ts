import { getRepository } from 'typeorm'
import fs from 'fs'
import path from 'path'
import Item from '../models/Item'

import uploadConfig from '../config/upload'

class DeleteItemService {
  public async execute(id: string): Promise<void> {
    const itemRepository = getRepository(Item)

    const item = await itemRepository.findOne(id)

    await itemRepository.delete(id)

    const filePath = item?.image
      ? path.resolve(uploadConfig.tmpFolder, item?.image)
      : ''

    try {
      await fs.promises.stat(filePath)
    } catch (err) {
      return
    }

    await fs.promises.unlink(filePath)
  }
}

export default DeleteItemService
