const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const database = require("./config/database");

const routesApiVer1 = require("./api/v1/routes/index.route");

const app = express();
const port = process.env.PORT;

database.connect();

//Cookie
app.use(cookieParser(""));

// Dùng cors để ngăn chặn lỗi BE không kết nối được với FE
app.use(cors());

//parse application/json (API)
app.use(bodyParser.json())

routesApiVer1(app);

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
})
