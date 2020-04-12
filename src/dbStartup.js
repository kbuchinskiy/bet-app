import mongoose from 'mongoose';
import config from './config';

export default function connectDb() {
  mongoose.Promise = global.Promise;

  mongoose.connect(`mongodb+srv://test:${config.db.password}@cluster0-97zcj.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }).catch((e) => {
    console.log(e);
  }).then(() => {
    console.log('DB connected');
  });
}
