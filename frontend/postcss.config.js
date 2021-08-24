const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
    plugins: [
        require('tailwindcss'),
        process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
        process.env.NODE_ENV === 'production'? cssnano ({ preset: 'default' }): null,
        purgecss({
            content: [
                './src/**/*.html',
                './src/**/*.vue',
                './public/index.html',
                './public/*.css',
                './src/*.js',
                './src/**/*.js'
            ],
            defaultExtractor: content => content.match(/[a-zA-Z0-9-_:/]+/g) || []
        })
    ]
}
    