import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    port: 9000 // default: 3000
  },

  loading: {
    color: '#f8a932',
    height: '5px'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Codeyetu',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
    ]
  },

  router: {
    middleware: ['auth']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.min.js' }
  ],

  axios: {
    baseURL: 'https://api.codeyetu.com'
    //baseURL: 'http://159.223.28.235:8080',
    //baseURL: 'http://localhost:5000',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          },
        light: {
          primary:'#cc1335',
          secondary: '#f8a932',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          footer: '#cecece'
        }
      }
    }
  },

  auth: {
    strategies: {
      local: {
        tokenRequired: true,
        token: {
          property: 'access_token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'data',
        },
        endpoints: {
          register: {url: '/auth/register', method: 'post'},
          login: {url: '/auth/login', method: 'post'},
          logout: {url: '/auth/logout', method: 'post'},
          user: {url: '/auth/status', method: 'get'}
        }
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      home: '/'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleFonts: {
    preconnect: true,
    display: 'swap',
    families: {
      'Poppins': true,
      Poppins: {
        wght: [300, 400,500],
      },
    }
  }
}
