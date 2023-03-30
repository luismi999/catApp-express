require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");

const app = express();
app.use(cors());
dbConnection();

app.use(express.json());

app.use("/api/cat", require("./routes/cat"));

app.listen(process.env.PORT, () => {
    console.log(`Server running on the port ${process.env.PORT}.`)
});