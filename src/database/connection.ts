import mongoose from 'mongoose';

export default function connectToMongoDB(): void {
  mongoose.connect('mongodb://localhost:27017/node-crud-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
}
