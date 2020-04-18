import mongoose from 'mongoose';
import config from './config';

export default async function connectDb() {
  mongoose.Promise = global.Promise;

  try {
    await mongoose.connect(`mongodb+srv://test:${config.db.password}@cluster0-97zcj.mongodb.net/test?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (err) {
    console.log('db connection failed');
    console.log(err);
  }
}
