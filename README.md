# dawntools

[dawntools]() 是基于 `Nextjs` 开发的一系列常用工具集合网站，主要是方便自己平日使用，也是作为练习使用 `React` 的一个项目。

## 环境变量、端口号

开发环境默认端口号是 `10001`, 在 `.env` 文件中定义的，若需自定义端口号，在项目根目录下创建文件 `.env.development` 设置 `PORT`值即可。

`.env.development` 文件不会被提交至代码仓库

环境变量文件优先级如下: `.env.local` > `.env.development/.env.production` > `.env`

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## 正式环境访问链接

[https://dawntools.vercel.app/](https://dawntools.vercel.app/)

通过 [vercel](https://vercel.com/)(通过github账号登录) 部署

