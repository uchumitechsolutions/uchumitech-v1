<template>

<nav class="fixed top-0 w-full z-50 border-b transition-all duration-300 bg-white/95 backdrop-blur-md border-gray-200 text-gray-900 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex-shrink-0">
              <NuxtLink to="/" class="text-2xl font-bold transition-colors duration-300">
                <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Protrixx</span>
                <span class="text-gray-900">TechSolutions</span>
              </NuxtLink>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-8">
                <NuxtLink to="/" class="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 nav-link">Home</NuxtLink>
                <NuxtLink to="/about" class="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 nav-link">About</NuxtLink>
                <NuxtLink to="/services" class="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 nav-link">Services</NuxtLink>
                <NuxtLink to="/tools" class="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 nav-link">Tools</NuxtLink>
                <NuxtLink to="/#projects" class="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 nav-link">Projects</NuxtLink>
                <NuxtLink to="/#contact" class="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 nav-link">Contact</NuxtLink>
              </div>
            </div>
            <div class="md:hidden">
              <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-900 p-2 transition-colors duration-300">
                <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Mobile Menu -->
          <div v-if="mobileMenuOpen" class="md:hidden bg-white/95 backdrop-blur-md text-gray-900 border-t border-gray-200/20 animate-slide-down">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <NuxtLink to="/" @click="mobileMenuOpen = false" class="text-gray-900 hover:text-purple-600 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg">Home</NuxtLink>
              <NuxtLink to="/about" @click="mobileMenuOpen = false" class="text-gray-900 hover:text-purple-600 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg">About</NuxtLink>
              <NuxtLink to="/services" @click="mobileMenuOpen = false" class="text-gray-900 hover:text-purple-600 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg">Services</NuxtLink>
              <NuxtLink to="/tools" @click="mobileMenuOpen = false" class="text-gray-900 hover:text-purple-600 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg">Tools</NuxtLink>
              <NuxtLink to="/projects" @click="mobileMenuOpen = false" class="text-gray-900 hover:text-purple-600 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg">Projects</NuxtLink>
              <NuxtLink to="/contact" @click="mobileMenuOpen = false" class="text-gray-900 hover:text-purple-600 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg">Contact</NuxtLink>
            </div>
          </div>
        </div>
      </nav>
</template>

<script setup>

import { ref } from 'vue'

// SEO Meta Tags
useHead({
  title: 'Protrixx TechSolutions - Leading Web Development & Mobile App Company in Kenya',
  meta: [
    { name: 'description', content: 'Transform your business with Kenya\'s leading digital solutions company. Expert web development, mobile apps, custom software & AI tools. Free consultation. Based in Nairobi.' },
    { name: 'keywords', content: 'web development Kenya, mobile app development Nairobi, software development Kenya, website design Kenya, digital transformation Kenya, Protrixx TechSolutions' },
    { name: 'author', content: 'Protrixx TechSolutions' },
    { property: 'og:title', content: 'Protrixx TechSolutions - Leading Web Development Company in Kenya' },
    { property: 'og:description', content: 'Transform your business with Kenya\'s leading digital solutions company. Expert web development, mobile apps, custom software & AI tools.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://protrixxtechsolutions.com' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Protrixx TechSolutions - Leading Web Development Company in Kenya' },
    { name: 'twitter:description', content: 'Transform your business with Kenya\'s leading digital solutions company.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://protrixxtechsolutions.com' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Protrixx TechSolutions",
        "description": "Leading digital solutions company in Kenya specializing in web development, mobile apps, and custom software",
        "url": "https://protrixxtechsolutions.com",
        "logo": "https://protrixxtechsolutions.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+254715389568",
          "contactType": "customer service",
          "email": "protrixxtechsolutions@gmail.com"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nairobi",
          "addressCountry": "KE"
        },
        "sameAs": [
          "https://www.linkedin.com/company/protrixx-techsolutions",
          "https://twitter.com/protrixtech"
        ]
      })
    }
  ]
})

const mobileMenuOpen = ref(false)
</script>