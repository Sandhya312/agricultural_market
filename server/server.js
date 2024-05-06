//node server
require("dotenv").config();
require("express-async-errors");
const express = require("express");
const statusMonitor = require("express-status-monitor-plus");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGO_URI;
const connectDB = require("./db/db");
const app = express();

app.use(cors());
//express body json parsing middleware
app.use(express.json());
//express url parsing middleware
app.use(express.urlencoded({ extended: false }));

app.use(
  statusMonitor({
    path: "/api/status",
  })
);


app.use(require("./middleware/globalErrorHandler"));
app.use("/api/order",  require("./router/order"));
app.use("/api/products", require("./router/products"));
app.use("/api/account", require("./router/account"));
app.use("/api/cart", require("./router/cart"));


//start server and connet to db
(async () => {
  try {
    await connectDB(DB_URL);
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server Started at port ${PORT}`);
    
    });
  } catch (error) {
    console.log(error);
  }
}
)();
