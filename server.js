const express = require("express");
const encryptRoutes = require("./backend/routes/encrypt");
const decryptRoutes = require("./backend/routes/decrypt");

const app = express();
app.use(express.json());

app.use("/api/encrypt", encryptRoutes);
app.use("/api/decrypt", decryptRoutes);

app.listen(3000, () => console.log("CipherX running on port 3000"));
