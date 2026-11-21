import cors from 'cors'
import express from 'express'
import { connect } from 'mongoose'
import morgan from 'morgan'
import 'dotenv/config'
import indexRouter from './routes/index.js'
import { clientErrorHandler, errorHandler } from './routes/errors.js'

const app = express()
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'))
app.use(cors())
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api', indexRouter)
app.use(clientErrorHandler)
app.use(errorHandler)

connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () =>
    console.log(`Server listening on port ${PORT}`)
  )
}).catch(err => {
  console.error(err)
  console.log('Failed to connect to MongoDB')
})
