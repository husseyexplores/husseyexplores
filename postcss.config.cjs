const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
  // syntax: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),

    tailwindcss(),

    //But others, like autoprefixer, need to run after,
    autoprefixer(),
    !dev &&
      cssnano({
        preset: 'default',
      }),
  ],
}
