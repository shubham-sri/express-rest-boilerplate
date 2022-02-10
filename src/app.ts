import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use('/api/v0', (_req, res) => {
  res.send('ok')
})

// app.use(ErrorControllers.create404Error)

// app.use(ErrorControllers.dispatch)

export const App = app
