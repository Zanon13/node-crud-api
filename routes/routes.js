import express from 'express'
import mongoose from 'mongoose'
import Client from '../models/client.js'

const router = express.Router()
mongoose.connect('mongodb://localhost/node-crud-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

router.use((req, res, next) => {
  console.log('Algo acontece aqui!')
  next()
})

router.get('/showAll', async (req, res) => {
  const client = await Client.find()

  if (client.length === 0) {
    return res.status(400).send({ error: 'No clients to show!' })
  }

  return res.send({ client })
})

router.post('/addClient', async (req, res) => {
  const { cpf } = req.body

  try {
    if (await Client.findOne({ cpf })) {
      return res.status(400).send({ error: 'Client already exists!' })
    }

    const client = await Client.create(req.body)

    return res.send({ message: 'Client registered!' })
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed' })
  }
})

export default router
