import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/node-crud-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

export default mongoose
