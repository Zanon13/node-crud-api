import mongoose from "../database/connection.js"
/* *** Descomente os trechos de código caso queira um _id com auto increment*** 
   *** O método é deprecated e não achei outro jeito de resolver ***
*/
// import mSequence from "mongoose-sequence"
// const AutoIncrement = mSequence(mongoose)

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
//ClientSchema.plugin(AutoIncrement)

const Client = mongoose.model('Client', ClientSchema)

export default Client
