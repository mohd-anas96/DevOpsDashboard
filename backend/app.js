const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const logger = require("./middleware/logger");

const dashboardRoutes = require("./routes/dashboardRoutes");
const healthRoutes = require("./routes/healthRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

/*
-----------------------------------
API Routes
-----------------------------------
*/

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/health", healthRoutes);

/*
-----------------------------------
React Production Build
-----------------------------------
*/

const distPath = path.join(__dirname, "dist");

app.use(express.static(distPath));

app.use((req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`🚀 Server running on http://localhost:${PORT}`);

});