// this the api server for the note app
// to be implemented:
//          login features(cookie, jwt)
//          users can add and view notes

// basic login features: if user does not exists then create user,
// user needs to be loged in to perform functions
const mongoose = require("mongoose");

const app = require("./app");

const DB_URL =
  process.env.DB_URL || "DB_URL=mongodb://localhost:27017/ssr-server-temp";
const PORT = process.env.PORT || 7000;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log("Server running on port..." + PORT);
    });
  })
  .catch((err) => {
    console.log("Error in connection", err);
  });
