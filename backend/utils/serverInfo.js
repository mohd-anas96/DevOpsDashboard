const os = require("os");

function getServerInfo() {
    return {
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        cpuCores: os.cpus().length,
        totalMemoryGB: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2),
        freeMemoryGB: (os.freemem() / 1024 / 1024 / 1024).toFixed(2),
        nodeVersion: process.version,
        uptimeSeconds: Math.floor(process.uptime())
    };
}

module.exports = getServerInfo;