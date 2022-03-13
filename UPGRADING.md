# Upgrading

### From 0.30.0 to 0.31.2

* Update your `.gitignore` file like:

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

* Add babel config in your `package.json`, since there is no default config

```json
{
    "babel": {
        "presets": [
            [
                "@babel/preset-env"
            ]
        ],
        "plugins": []
    }
}
```

### From 0.20.0 to 0.21.0

* Update your `package.json` scripts as described in [README.md](./README.md)
