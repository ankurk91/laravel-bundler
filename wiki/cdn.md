## Usage with CDN

If you are hosting your assets on a CDN like cloudfront, then
Update your Laravel project as follows:

Update `config/app.php` like:

```php
'mix_url' => env('MIX_ASSET_URL', null)
```

Then update your `.env` file like:

```dotenv
MIX_ASSET_URL=https://project.cloudfront.aws/
```

Now as long as you are using `mix()` helper function to load your assets the CDN domain will be prefixed automatically.

You can read the same documentation here

https://laravel.com/docs/8.x/mix#environment-variables
