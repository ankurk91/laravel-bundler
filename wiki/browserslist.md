## Browserslist

Create a `.browserslistrc` file on your project root and define supported browsers there.

Here is the example `.browserslistrc` file:

```
> 2%
not dead
```

Alternatively, You can define this in your `package.json` file as well:

```json
{
    "browserslist": [
        "> 2%",
        "not dead"
    ]
}
```

Laravel bundler should auto pick the right configuration.
