const mix = require('laravel-mix');

mix.disableNotifications();

mix.js('src/js/main.js', 'web/js');
mix.sass('src/sass/styles.sass', 'web/css');
mix.options({
    processCssUrls: false
});