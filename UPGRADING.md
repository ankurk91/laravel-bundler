# Upgrading

### From 0.30.0 to 0.31.0

* Update your `.gitignore` file

```diff
- /public/hot
- /public/js/
- /public/css/
- /public/fonts/
- /public/images/
- /public/mix-manifest.json
+ /public/dist
```

* Update your blade templates to have second argument supplied to `mix()` function

```diff
- <script src="{{ mix('js/app.js') }}"></script>
+ <script src="{{ mix('js/app.js', 'dist') }}"></script>
```

### From 0.20.0 to 0.21.0

* Update your `package.json` scripts as described in [readme.md](./readme.md)
