# Upgrading

### From 0.20.0 to 0.21.0
* Update your `package.json` scripts for hot module reloading
```diff
- "hot": "cross-env NODE_ENV=development webpack-dev-server --progress --hot"
+ "hot": "webpack serve --progress --hot"
```
* Remove all reference to `cross-env` from your `package.json`
