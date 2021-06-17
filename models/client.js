import mongoose from "../database/connection.js"

import mSequence from "mongoose-sequence"
const AutoIncrement = mSequence(mongoose) 

const ClientSchema = new mongoose.Schema({ 
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  }
}, { _id: false })
ClientSchema.plugin(AutoIncrement)

const Client = mongoose.model('Client', ClientSchema)

export default Client
