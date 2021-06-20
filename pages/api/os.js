const os = require('os');

export default function(req, res) {

  res.status(200).json({
    cpus: os.cpus(),
    freemem: os.freemem(),
    platform: os.platform(),
    processVersions: process.versions,
    env: process.env,
  });
}