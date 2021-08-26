export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blogggar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'Articles focused on the beautiful art of landscape painting.'
      },
      { property: 'og:site_name', content: 'Redfern Dev' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://bobross.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'My Amazing Blog on The Joy of Painting'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Articles focused on the beautiful art of landscape painting.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/a-lovely-image.png'
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },

      { name: 'twitter:site', content: '@bobross' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://bobross.com'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'My Amazing Blog on The Joy of Painting'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Articles focused on the beautiful art of landscape painting.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/a-loveley-image.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    nestedProperties: ['author.name']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
