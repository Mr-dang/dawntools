# dawntools

[dawntools](https://dawntools.vercel.app/) 是基于 `Nextjs` 开发的一系列常用工具集合网站，主要是方便自己平日使用，也是作为练习使用 `React` 的一个项目。

## 环境变量、端口号

开发环境默认端口号是 `10001`, 在 `.env` 文件中定义的，若需自定义端口号，在项目根目录下创建文件 `.env.development` 设置 `PORT`值即可。

`.env.development` 文件不会被提交至代码仓库

环境变量文件优先级如下: `.env.local` > `.env.development/.env.production` > `.env`

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## 正式环境访问链接

[https://dawntools.vercel.app/](https://dawntools.vercel.app/)

通过 [vercel](https://vercel.com/)(通过github账号登录) 部署

## avatar

https://dawntools.vercel.app/api/avatar/?text=helloworld&variant=flower

## fish

可用API:

- https://dawntools.vercel.app/api/fish/?format=smil&signature=Alice&speed=2
- https://dawntools.vercel.app/api/svg/?signature=Alice
- https://dawntools.vercel.app/api/animatedsvg/?signature=Alice&speed=2

生成鱼的代码使用的是 https://github.com/LingDong-/fishdraw

```js
const { main, draw_svg } = require('/serverComponents/fish');

let seed = undefined;
let format = 'svg'; // json/smil/csv/ps
let speed = 0.005;

for (let i = 2; i < process.argv.length; i++){
  let a = process.argv[i];
  if (a == '--seed'){
    seed = process.argv[i+1];
  }else if (a == '--format'){
    format = process.argv[i+1];
  }else if (a == '--speed'){
    if (process.argv[i+1] > 0)
      speed = speed / process.argv[i+1];
  }
}
let polylines = main(seed);
if (format == 'svg'){
  console.log(draw_svg(polylines));
}else if (format == 'json'){
  console.log(JSON.stringify(polylines));
}else if (format == 'smil'){
  console.log(draw_svg_anim(polylines,speed));
}else if (format == 'csv'){
  console.log(polylines.map(x=>x.flat().join(',')).join('\n'));
}else if (format == 'ps'){
  console.log(draw_ps(polylines));
}
```
