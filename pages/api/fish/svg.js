import { main, draw_svg } from '../../../serverComponents/fish';

export default function svg(req, res) {
  const start = Date.now();
  let { signature } = req.query;
  if (typeof signature === 'string') {
    signature = signature.replace(/[^a-zA-Z\s]/g, '').trim().slice(0, 20) || 'MADE IN CHINA';
  } else {
    signature = 'MADE IN CHINA';
  }
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'max-age=2592000');
  const polylines = main(signature);
  const svg = draw_svg(polylines);
  const end = Date.now();
  res.setHeader('Server-Timing', `app;desc="content";dur=${end - start}`);
  res.send(svg);
};
