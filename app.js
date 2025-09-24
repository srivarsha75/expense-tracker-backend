const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const expenseRoutes = require("./routes/expenseRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/expenses", expenseRoutes);

// DB connection (MongoDB URI from .env file)
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/expenses")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
