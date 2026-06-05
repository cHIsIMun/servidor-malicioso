# servidor-malicioso

🇺🇸 English | 🇧🇷 [Português](README.md)

> ⚠️ The **attacker's data sink** for an XSS lab — receives and logs data exfiltrated by injected scripts. Pairs with [marketplace-vulneravel](https://github.com/cHIsIMun/marketplace-vulneravel).

## 🚨 Usage warning

This server exists to **demonstrate** how stolen data reaches an attacker in an XSS attack. Use it **only** in an isolated localhost lab, never with real data or real users.

## Overview

A minimal Node.js/Express server that listens for the data an XSS payload exfiltrates from a victim (cookies, localStorage, etc.) and logs it. It is the "attacker" half of a teaching lab whose victim is [marketplace-vulneravel](https://github.com/cHIsIMun/marketplace-vulneravel): the marketplace shows **how** a vulnerability is created and exploited; this server shows **where the stolen data goes**.

## How it works

- Exposes `POST /webhook`, accepts any JSON payload, and logs it to the console.
- CORS is intentionally restricted to `http://localhost:3000` (the marketplace), keeping the lab self-contained.
- No persistence — data is logged to stdout only.

## Stack

Node.js · Express · body-parser · CORS. Runs on port 4000.

## Running

```bash
npm install
npm start          # http://localhost:4000  (POST /webhook)
```

Run [marketplace-vulneravel](https://github.com/cHIsIMun/marketplace-vulneravel) on port 3000 alongside it to see the full attack flow.

## License

This project does not yet declare a license. Until one is added, all rights are reserved by the author.
