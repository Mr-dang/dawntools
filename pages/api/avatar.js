const SHA256Avatar = require('../../serverComponents/SHA256Avatar');

module.exports = function (req, res) {
  const { text, variant } = req.query;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'max-age=2592000');
  let instance = new SHA256Avatar({ text, variant });
  res.send(instance.getSvgContent());
};
