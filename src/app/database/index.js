import mongoose from 'mongoose';

const mongo = {
  url:
    'mongodb+srv://ifood:Ycv5lurIXfBMalgu@cluster0-dr79j.mongodb.net/test?retryWrites=true&w=majority',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
};

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    mongoose.connect(mongo.url, mongo.options);
  }
}

export default new Database();
