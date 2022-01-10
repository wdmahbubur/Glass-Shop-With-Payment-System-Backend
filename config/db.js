require("dotenv").config();

const user = process.env.MONGODB_USERNAME;
const pass = process.env.MONGODB_PASSWORD;

module.exports = {
  mongoURIDev: "mongodb://localhost:27017/Glass-Shop",
  mongoURI:
    `mongodb+srv://${user}:${pass}@cluster0.ni4ot.mongodb.net/Glass-Shop?retryWrites=true&w=majority`,
};
