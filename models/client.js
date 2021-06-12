import mongoose from "../database/connection.js"

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  }
})

const Client = mongoose.model('Client', ClientSchema)

export default Client
