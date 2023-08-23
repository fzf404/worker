# Worker

My personal Cloudflare Workers ( 我的 Cloudflare 云服务配置 )

## Features ( 特性 )

- Support NPM proxy ( 支持 NPM 代理 )
- Support GitHub proxy ( 支持 GitHub 代理 )
- Support OpenAI API proxy ( 支持 OpenAI API 代理 )
- Support NeteaseCloudMusic API proxy ( 支持网易云音乐 API 代理 )

## Usage ( 使用 )

- NPM proxy ( NPM 代理 ) : [cdn.fzf404.art](https://cdn.fzf404.art/npm)
- GitHub proxy ( GitHub 代理 ) : [cdn.fzf404.art](https://cdn.fzf404.art/gh)
- OpenAI proxy ( OpenAI 代理 ) : [api.fzf404.art/chat](https://api.fzf404.art/chat)
- NeteaseCloudMusic proxy ( 网易云音乐代理 ) : [api.fzf404.art/music](https://api.fzf404.art/music)

## Deploy ( 部署 )

1. Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) ( 安装 [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) )

2. Login [Wrangler](https://developers.cloudflare.com/workers/wrangler/commands/#login) ( 登录 [Wrangler](https://developers.cloudflare.com/workers/wrangler/commands/#login) )

3. Deploy Worker ( 部署 Worker )

   ```bash
   wrangler deploy -c cdn/wrangler.toml # NPM & GitHub Porxy
   wrangler deploy -c api/wrangler.toml # OpenAI & NeteaseCloudMusic API
   ```
