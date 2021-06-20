module.exports = function (req, res) {

  res.status(200).json({
    text: 'Hello',
    reqKeys: Object.keys(req),
    resKeys: Object.keys(res),
    query: req.query,
    httpVersion: req.httpVersion,
    headers: req.headers,
    rawHeaders: req.rawHeaders,
    url: req.url,
    method: req.method,
    statusCode: req.statusCode,
    cookie: req.cookie,
    body: req.body,
  });
}