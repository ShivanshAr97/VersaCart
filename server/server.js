const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:5173',
    method: ["GET", "POST"]
}

app.use(cors(corsOptions));

// middlewares
app.use(express.json({ extended: false }));
app.use("/payment", require("./routes/payment"));
app.listen(port, () => console.log(`server started on port ${port}`));