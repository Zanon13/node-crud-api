import express from 'express'
import Client from '../models/client.js'

const router = express.Router()

router.get('/clients', async (req, res) => {
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

    await Client.create(req.body)

    return res.send({ message: 'Client registered!' })
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed' })
  }
})

router.put('/clients/:client_id', async (req, res) => {
  const { _id } = req.body

  try {
    await Client.updateOne({ _id }, req.body)

    return res.send({ message: 'Client updated!' })
  } catch (err) {
    return res.status(400).send({ error: 'This client does not exist!' })
  }
})

router.delete('/clients/:client_id', async (req, res) => {
  const { _id } = req.body

  try {
    await Client.deleteOne({ _id })

    return res.send({ message: 'Client deleted!' })
  } catch (err) {
    return res.status(400).send({ error: 'This client does not exist!' })
  }
})

export default router
