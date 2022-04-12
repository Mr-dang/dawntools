const SHA256Avatar = require('../../serverComponents/SHA256Avatar');

module.exports = function (req, res) {
  const start = Date.now();
  const { text, variant } = req.query;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'max-age=2592000');
  let instance = new SHA256Avatar({ text, variant });
  const content = instance.getSvgContent();
  const end = Date.now();
  res.setHeader('Server-Timing', `app;desc="content";dur=${end - start}`);
  res.send(content);
};
