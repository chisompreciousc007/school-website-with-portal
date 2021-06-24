const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
//Setup env as development
const environment = process.env.NODE_ENV || "production";

const studentsRouter = require("./routes/students");
const teachersRouter = require("./routes/teachers");
const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
try {
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
} catch (error) {
  console.log("errrorrrr");
}
app.use(cors());
app.use(express.json());
app.use("/students", studentsRouter);
app.use("/teachers", teachersRouter);

// if (environment === "production") {
//   app.use(express.static("client/build"));
// }
if (environment === "production" || environment === "dev") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
