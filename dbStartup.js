import mongoose from "mongoose";

export default function connectDb() {
    const password = "5U6jPfkQXe4W2xVB"
    mongoose.connect(`mongodb+srv://test:${password}@cluster0-97zcj.mongodb.net/test?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(e => {
        console.log(e); 
    }).then(d => {
        console.log("DB connected");
    })

    mongoose.Promise = global.Promise;
    const db = mongoose.connection;

}