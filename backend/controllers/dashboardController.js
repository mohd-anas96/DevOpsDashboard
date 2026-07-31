const getServerInfo = require("../utils/serverInfo");

exports.getDashboard = (req, res) => {

    res.json({

        application: "DevOps Dashboard",

        version: "1.0.0",

        environment: process.env.NODE_ENV || "Development",

        deploymentStatus: "Successful",

        activeUsers: 512,

        totalUsers: 1248,

        lastDeployment: new Date().toLocaleString(),

        server: getServerInfo()

    });

};