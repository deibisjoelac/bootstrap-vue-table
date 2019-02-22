let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */




mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');




// const ImageminPlugin     = require('imagemin-webpack-plugin').default;
// const CopyWebpackPlugin  = require('copy-webpack-plugin');
// const imageminMozjpeg    = require('imagemin-mozjpeg');


// mix.webpackConfig({
//     plugins: [
//         //Compress images
//         new CopyWebpackPlugin([{
//             from: 'resources/assets/fonts', // FROM // FROM
//             to: 'fonts/',  // TO
//         }]),
//         new CopyWebpackPlugin([{
//             from: 'resources/assets/img', // FROM // FROM
//             to: 'img/',  // TO
//         }]),
//         new ImageminPlugin({
//             test: /\.(jpe?g|png|gif|svg)$/i,
//             pngquant: {
//                 quality: '65-80'
//             },
//             plugins: [
//                 imageminMozjpeg({
//                     quality: 65,
//                     //Set the maximum memory to use in kbytes
//                     maxMemory: 1000 * 512
//                 })
//             ]
//         })
//     ],
// });


mix.browserSync({
    open: false,
    proxy : 'http://administracion.test'
})
mix.disableNotifications();