import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import { ResponseControllers } from './controllers'
import { IndexRoute } from './routes'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use(IndexRoute)

app.use(ResponseControllers.throwNotFoundError)

app.use(ResponseControllers.handleError)

export const App = app
