const withPWA = require('next-pwa')
module.exports = withPWA({
  pwa: {
      dest: 'public'
  },
})

module.exports ={
  webpack: (config)=>
  {
    config.module.rules.push({
      test: /\.(png|jpg)$/i, 
      type:'assets/resource'
    })
  }
}

module.exports = {
  async redirects() {
    return [
        {
          source: '/PGPro-SmartAssist/Quiz',
          destination: '/',
          permanent: true,
        },
      ]
    },
  }
  module.exports = {
    trailingSlash: true,
  }

  // module.exports = {
  //   exportPathMap: async function (
  //     defaultPathMap,
  //     { dev, dir, outDir, distDir, buildId }
  //   ) {
  //     return {
  //       '/': { page: '/' },
  //       '/PGPro-SmartAssist-Home': { page: '/PGPro-SmartAssist-Home' },
  //       '/PGPro-SmartAssist-Quiz': { page: '/PGPro-SmartAssist-Quiz' },
  //       '/PGPro-SmartAssist-Recommendations': { page: '/PGPro-SmartAssist-Recommendations' },

       
  //     }
  //   },
  // }