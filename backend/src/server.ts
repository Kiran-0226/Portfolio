import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import { connectDatabase } from './config/database.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

const PORT = process.env.PORT || 5000

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    message: 'Portfolio API is running',
  })
})

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Portfolio API running on http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.error('❌ Failed to connect to MongoDB:', error)
    process.exit(1)
  })