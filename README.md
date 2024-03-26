# Worker

My personal Cloudflare Workers ( 我的 Cloudflare 云服务配置 )

## Features ( 特性 )

- API Proxy ( API 代理 )
  - OpenAI API Proxy ( OpenAI API 代理 )
  - NeteaseCloudMusic API Proxy ( 网易云音乐 API 代理 )
- CDN Proxy ( CDN 代理 )
  - GitHub Proxy ( GitHub 代理 )
  - NPM Proxy ( NPM 代理 )
- Telegram Bot ( Telegram 机器人 )

## Usage ( 使用 )

- API Proxy ( API 代理 )
  - [https://api.fzf404.art/chat](https://api.fzf404.art/chat)
  - [https://api.fzf404.art/music](https://api.fzf404.art/music)
- CDN Proxy ( CDN 代理 )
  - [https://cdn.fzf404.art](https://cdn.fzf404.art)
  - [https://cdn.fzf404.art/gh](https://cdn.fzf404.art/gh)
  - [https://cdn.fzf404.art/npm](https://cdn.fzf404.art/npm)
- Telegram Bot ( Telegram 机器人 )
  - [https://t.me/no_xiaomouz_bot](https://t.me/no_xiaomouz_bot)
## Deploy ( 部署 )

```bash
# 1. Install Dependencies ( 安装依赖 )
pnpm install --recursive

# 2. Login Wrangler ( 登陆 Wrangler )
pnpm run login

# 3. Deploy All Wrangler ( 部署全部 Wrangler )
pnpm run -r deploy
```
