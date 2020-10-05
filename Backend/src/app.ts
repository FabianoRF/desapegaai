import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import './database'

import route from './routes'

import uploadConfig from './config/upload'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/files', express.static(uploadConfig.tmpFolder))
app.use(route)

export default app
