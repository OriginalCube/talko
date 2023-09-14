require("dotenv").config();
const express = require("express"),
  PORT = process.env.PORT,
  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Socket IO prereq
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
app.use(cors());

//Check connection.
const api_url = "/api/v1";

//Connect to MongoDB
const connectDb = require("./configs/mongo");
connectDb();

app.get(api_url, (req, res) => res.send("hello world"));
app.use(`${api_url}/user`, require("./routers/User"));

const mainServer = app.listen(PORT, () =>
  console.log(`listening on port : ${PORT}`),
);
