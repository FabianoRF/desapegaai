import { Router } from 'express'
import multer from 'multer'

import CreateItemService from '../services/CreateItemService'
import ListItemService from '../services/ListItemsService'
import DeleteItemService from '../services/DeleteItemService'

import ensureAutenticated from '../middlewares/ensureAutheticated'
import multerConfig from '../config/upload'

const itemRouter = Router()

itemRouter.use(ensureAutenticated)
const upload = multer(multerConfig)

itemRouter.post('/', upload.single('image'), async (request, response) => {
  const { title, user_id, description, price } = request.body

  console.log(' *** request: ', request.file)
  const image = request.file.filename

  const createItemService = new CreateItemService()

  const item = await createItemService.execute({
    title,
    user_id,
    description,
    price,
    image
  })

  return response.json(item)
})

itemRouter.get('/', async (request, response) => {
  const { user_id } = request.query

  const listItem = new ListItemService()

  try {
    const items = await listItem.execute({ user_id })

    return response.json(items)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

itemRouter.delete('/:id', async (request, response) => {
  const { id } = request.params
  const deleteItem = new DeleteItemService()

  await deleteItem.execute(id)

  return response.status(204).send()
})

export default itemRouter
