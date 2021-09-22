module.exports = {
    "plugins": [
      "postcss-flexbugs-fixes",
      [
        "postcss-preset-env",
        {
          "autoprefixer": {
            "flexbox": "no-2009"
          },
          "stage": 3,
          "features": {
            "custom-properties": false
          }
        }
      ],
      // [
      //   '@fullhuman/postcss-purgecss',
      //   //THIS CONDITION IS REQUIRED TO WORK ON PRODUCTION ENV ONLY.    
      //   process.env.NODE_ENV === 'production'?
      //   { 
      //     content: [
      //         './pages/**/*.{js,jsx,ts,tsx}',
      //         './components/**/*.{js,jsx,ts,tsx}'
      //     ],
      //     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      //     safelist: ["html", "body" ,/^modal-/]
      //   }
      //    :false  //THIS CONDITION IS REQUIRED TO WORK ON PRODUCTION ENV ONLY. 
      // ],
    ]
  }

//////////////////////   THIS IS A 2ND OPTION BUT NOT WORKING

// const purgecss = require('@fullhuman/postcss-purgecss')
// //const cssnano = require('cssnano')

// module.exports = {
//   plugins: [
//     //require('tailwindcss'),
//     process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
//     // process.env.NODE_ENV === 'production'
//     //   ? cssnano({ preset: 'default' })
//     //   : null,
//     purgecss({
//       content: ['./layouts/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
//       defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
//     })
//   ]
// }