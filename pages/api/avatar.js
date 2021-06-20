const SHA256Avatar = require('../../serverComponents/SHA256Avatar');

export default function(req, res) {
  const { text } = req.query;
  res.set('Content-Type', 'image/svg+xml');
  let instance = new SHA256Avatar({ text });
  res.send(instance.getSvgContent());
}