const withPWA = require('next-pwa')
module.exports = withPWA({
  pwa: {
      dest: 'public'
  },
})

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
