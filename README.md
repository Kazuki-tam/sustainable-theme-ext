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

The following command performs the initial setup of the app via the command line when run for the first time.

```shell
pnpm preBuild
pnpm start
```

Open the URL generated in your console. Once you grant permission to the app, you can start development.

`shopify.app.toml` is created in the root directory. This file contains the app configuration.

[📖 Learn more app configuration](https://shopify.dev/docs/apps/tools/cli/configuration)

### Manual deployment

Build and deploy the app to Shopify with a command.

```shell
pnpm deployAll
```

## Available commands
Recommend you to check out these commands before you get started.

<details>
<summary>Support commands</summary>

### Dev command
Builds the app and lets you preview it on a development store or Plus sandbox store.

```shell
pnpm dev
```

### Start command
Start your project in development mode.

```shell
pnpm start
```

### Deply command
Builds the app and deploys all of the extensions in your app to Shopify.

```shell
pnpm deply
```

### DeployAll command
Pre-build this project, then build the app and deploy all its extensions to Shopify.

```shell
pnpm deployAll
```
</details>

## Developer resources

- [Introduction to Shopify apps](https://shopify.dev/docs/apps/getting-started)
- [App authentication](https://shopify.dev/docs/apps/auth)
- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)
- [Shopify API Library documentation](https://github.com/Shopify/shopify-api-js#readme)

## Reference

- [Shopify App Template - None (app with extensions only)](https://github.com/Shopify/shopify-app-template-none)


