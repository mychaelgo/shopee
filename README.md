# siminvest

Un-official [Shopee](https://www.shopee.co.id/) API Wrapper. API end point known by decompile the android APK.

- [Have trouble ?](https://github.com/mychaelgo/shopee/issues)
- [Submit changes/features ?](https://github.com/mychaelgo/shopee/pulls)

You can see list of package [here](https://github.com/mychaelgo?tab=packages&repo_name=shopee)

Part of my [personal finance automation](https://github.com/mychaelgo/personal-finances-automation)

## Documentation

All API documented in [docs directory](docs/) with OpenAPI format v3.0

## Examples

See [examples directory](/examples)

## SDK

Available in [sdk directory](sdk/) and generated using [OpenAPI Generator](https://openapi-generator.tech/)

### Using NodeJS

You need to setting `.npmrc` like this. You need personal access token in order to download the package, see [here](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)

```bash
@mychaelgo:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_REGISTRY_TOKEN}
```

After setup complete, now you install any package you want.

```bash
npm install @mychaelgo/shopee
```
