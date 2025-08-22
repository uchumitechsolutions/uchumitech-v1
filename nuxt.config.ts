// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
  ] ,

  
  
  sitemap: {
    enabled:true,
   urls:[
    "/",
    "/#home",
    "/#about",
    "/#contact",
    "/#tools",
    "/#projects",
    "/#ervices"
  ],

  }

  
  
})