## HTTPS on localhost
You have a local Laravel application running on HTTPS and you want to take advantage of HMR for development.

* Generate fake certificates with a tool like [mkcert](https://github.com/FiloSottile/mkcert)
* Update your apache/ngnix virtual host configurations with generated files
* Put those files in your Laravel project's `./storage` folder 
* Add one more script in your `package.json` like this:
```json
"scripts": {
    "hot:https": "npm run hot -- --https --cert=./storage/localhost.pem --key=./storage/localhost-key.pem"
  },
```
* Run command `npm run hot:https`
