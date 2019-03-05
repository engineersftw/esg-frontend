const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    '@nuxtjs/apollo'
  ],

  // Give apollo module options
  apollo: {
    tokenName: 'apollo-token', // optional, default: apollo-token
    tokenExpires: 10, // optional, default: 7 (days)
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    authenticationType: 'Bearer', // optional, default: 'Bearer', other option 'Basic'
    // optional
    errorHandler(error) {
      console.log(
        '%cError',
        'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
        error.message + '--BLAH'
      )
    },
    // required
    clientConfigs: {
      default: {
        // required
        httpEndpoint: 'http://127.0.0.1:4000'
        // // optional
        // // See https://www.apollographql.com/docs/link/links/http.html#options
        // httpLinkOptions: {
        //   credentials: 'same-origin'
        // },
        // // You can use `wss` for secure connection (recommended in production)
        // // Use `null` to disable subscriptions
        // wsEndpoint: 'ws://localhost:4000', // optional
        // // LocalStorage token
        // tokenName: 'apollo-token', // optional
        // // Enable Automatic Query persisting with Apollo Engine
        // persisting: false, // Optional
        // // Use websockets for everything (no HTTP)
        // // You need to pass a `wsEndpoint` for this to work
        // websocketsOnly: false // Optional
      }
      // test: {
      //   httpEndpoint: 'http://localhost:5000',
      //   wsEndpoint: 'ws://localhost:5000',
      //   tokenName: 'apollo-token'
      // },
      // // alternative: user path to config which returns exact same config options
      // test2: '~/plugins/my-alternative-apollo-config.js'
    }
  },

  // Vuetify options
  vuetify: {
    //  theme: { }
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
