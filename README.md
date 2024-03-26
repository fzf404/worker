# Worker

My personal Cloudflare Workers ( 我的 Cloudflare 云服务配置 )

## Features ( 特性 )

- NPM proxy ( NPM 代理 )
- GitHub proxy ( GitHub 代理 )
- OpenAI API proxy ( OpenAI API 代理 )
- NeteaseCloudMusic API proxy ( 网易云音乐 API 代理 )

## Usage ( 使用 )

- [https://cdn.fzf404.art/npm](https://cdn.fzf404.art/npm)
- [https://cdn.fzf404.art/gh](https://cdn.fzf404.art/gh)
- [https://api.fzf404.art/chat](https://api.fzf404.art/chat)
- [https://api.fzf404.art/music](https://api.fzf404.art/music)

## Deploy ( 部署 )

```bash
# 1. Install Dependencies ( 安装依赖 )
pnpm install

# 2. Login Wrangler ( 登陆 Wrangler )
pnpm run login

# 3. Deploy Wrangler ( 部署 Wrangler )
pnpm run -r deploy
```
