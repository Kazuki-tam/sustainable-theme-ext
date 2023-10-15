# Sustainable Shopify Theme Customization Environment (Shopify App Template - Only App Extensions)

This is a template for building a [Shopify app](https://shopify.dev/docs/apps/getting-started) that includes no app home UI.
It contains the basics for building a Shopify app that uses only app extensions. This template is specialized for customizing Shopify themes.

**This template is still in alpha and is in the testing phase.**

[📖 Learn more extension-only apps](https://shopify.dev/docs/apps/app-extensions/extension-only-apps)

## Benefits

Utilizing this template allows for theme customization on Shopify without the need to directly modify existing theme files.

## Getting started

### Requirements

1. You must [download and install Node.js](https://nodejs.org/en/download/) if you don't already have it.
1. You must [create a Shopify partner account](https://partners.shopify.com/signup) if you don’t have one.
1. You must create a store for testing if you don't have one, either a [development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) or a [Shopify Plus sandbox store](https://help.shopify.com/en/partners/dashboard/managing-stores/plus-sandbox-store).

### Installing the template

Clone this repository and install dependencies.

```shell
pnpm install
```

### Setting up the app
Seetiiing up the app requires the following steps:

#### Create a new app
1. Create a new app in your [Shopify Partners dashboard](https://partners.shopify.com/organizations).
2. Copy Client ID from the app you just created.

#### Configure the app in the local

Create a `shopify.app.toml` at the root directory. This file contains the configuration for your app.

Replace `<YOUR_CLIENT_ID>` with the Client ID you copied from the app you just created.

```toml
name = "theme-custom-app"
client_id = "<YOUR_CLIENT_ID>"
application_url = "https://shopify.dev/apps/default-app-home"
embedded = true

[access_scopes]

scopes = ""

[auth]
redirect_urls = [ "https://shopify.dev/apps/default-app-home/api/auth" ]

[webhooks]
api_version = "2023-10"

[pos]
embedded = false
```

[📖 Learn more app configuration](https://shopify.dev/docs/apps/tools/cli/configuration)

### Local Development

Build the app and start the server.

```shell
pnpm build
pnpm dev
```

Open the URL generated in your console. Once you grant permission to the app, you can start development.

### Manual deployment

Build and deploy the app to Shopify with a command.

```shell
pnpm deployAll
```

## Developer resources

- [Introduction to Shopify apps](https://shopify.dev/docs/apps/getting-started)
- [App authentication](https://shopify.dev/docs/apps/auth)
- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)
- [Shopify API Library documentation](https://github.com/Shopify/shopify-api-js#readme)

## Reference

- [Shopify App Template - None (app with extensions only)](https://github.com/Shopify/shopify-app-template-none)


