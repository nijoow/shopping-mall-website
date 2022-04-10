const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const config = require("./config/key");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api/users", require("./routes/users"));
app.use("/api/products", require("./routes/products"));
app.use("/uploads", express.static("uploads"));
const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
