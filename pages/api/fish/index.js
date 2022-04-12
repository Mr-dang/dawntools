import { main, draw_svg, draw_svg_anim, draw_ps } from '../../../serverComponents/fish';

export default function fishIndex(req, res) {
  const start = Date.now();
  let { format = 'svg', signature, speed = 0.005 } = req.query;
  res.setHeader('Cache-Control', 'max-age=2592000');
  if (typeof signature === 'string') {
    signature = signature.replace(/[^a-zA-Z\s]/g, '').trim().slice(0, 20) || 'MADE IN CHINA';
  } else {
    signature = 'MADE IN CHINA';
  }
  const polylines = main(signature);
  let result;
  switch (format) {
    case 'json':
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      result = JSON.stringify(polylines);
      break;
    case 'smil':
      res.setHeader('Content-Type', 'image/svg+xml');
      result = draw_svg_anim(polylines, speed);
      break;
    case 'csv':
      res.setHeader('Content-Type', 'text/csv');
      result = polylines.map(x=>x.flat().join(',')).join('\n');
      break;
    case 'ps':
      res.setHeader('Content-Type', 'image/x-photoshop');
      result = draw_ps(polylines);
      break;
    default:
      res.setHeader('Content-Type', 'image/svg+xml');
      result = draw_svg(polylines);
      break;
  }
  const end = Date.now();
  res.setHeader('Server-Timing', `app;desc="content";dur=${end - start}`);
  res.send(result);
};
