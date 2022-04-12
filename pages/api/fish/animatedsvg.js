import { main, draw_svg_anim } from '../../../serverComponents/fish';

export default function animatedSvg (req, res) {
  const start = Date.now();
  let { signature, speed } = req.query;
  if (typeof signature === 'string') {
    signature = signature.replace(/[^a-zA-Z\s]/g, '').trim().slice(0, 20) || 'MADE IN CHINA';
  } else {
    signature = 'MADE IN CHINA';
  }
  speed = /^[1-9][0-9]{0, 2}/.test(speed) ? (0.005 / parseInt(speed, 10)) : 0.005;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'max-age=2592000');
  const polylines = main(signature);
  const svg = draw_svg_anim(polylines, speed);
  const end = Date.now();
  res.setHeader('Server-Timing', `app;desc="content";dur=${end - start}`);
  res.send(svg);
};
