# LocalCertificator with

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

LocalCertificator is a tool for certificate management

## Features

see information at https://certbot.eff.org/

## npx greenlock add --subject example.com --altnames example.com

## npx greenlock add --subject example.com --altnames example.com,proxy.example.com

## certbot certonly --manual --preferred-challenges dns -d example.com -d xxx.example.com

## Requirements

- [Node.js >= 16.x](https://nodejs.org/en/download/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/.../LocalCertificator.git
   ```

## using

https://certbot.eff.org/

npx greenlock defaults --store greenlock-store-fs --store-base-path ./greenlock.d
