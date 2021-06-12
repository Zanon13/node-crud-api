import express from 'express'
import mongoose from 'mongoose'
import Client from '../models/client.js'

const router = express.Router()
mongoose.connect('mongodb://localhost/node-crud-api',
  { useNewUrlParser: true, useUnifiedTopology: true })

router.get('/', (req, res) => {
  res.json({ message: 'Bem Vindo!' })
})

export default router
