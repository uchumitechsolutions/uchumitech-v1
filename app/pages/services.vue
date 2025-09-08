<template>

    <Navbar/>
  <div class="min-h-screen bg-gray-50">

    <!-- Services Hero -->
    <section class="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="floating-particles"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative">
        <div class="text-center text-white">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Our <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p class="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored for Kenyan businesses and beyond
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Web Development -->
          <div class="service-card glass-card rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-white/20 bg-white/90">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6 text-3xl text-white">
              💻
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Web Development</h2>
            <p class="text-gray-600 mb-6">Custom websites and web applications built with modern technologies. Fast, responsive, and user-friendly digital experiences that convert visitors into customers.</p>
            
            <h4 class="font-semibold text-gray-900 mb-3">What We Offer:</h4>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Responsive Design for All Devices
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                E-commerce Solutions with Payment Integration
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Content Management Systems (CMS)
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                SEO Optimized Applications
              </li>
            </ul>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-6">
              <div class="text-sm text-gray-600">Starting from</div>
              <div class="text-2xl font-bold text-purple-600">KSH 25,000</div>
            </div>
            
            <NuxtLink to="/contact" class="btn-primary w-full text-center">
              Get Quote
            </NuxtLink>
          </div>

          <!-- Mobile App Development -->
          <div class="service-card glass-card rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-white/20 bg-white/90">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-6 text-3xl text-white">
              📱
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Mobile App Development</h2>
            <p class="text-gray-600 mb-6">Native and cross-platform mobile applications for Android and iOS. Engaging user experiences that drive customer loyalty and business growth.</p>
            
            <h4 class="font-semibold text-gray-900 mb-3">What We Offer:</h4>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                iOS & Android Native Apps
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Cross-Platform Development (Flutter/React Native)
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                UI/UX Design & Prototyping
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                App Store Optimization & Publishing
              </li>
            </ul>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-6">
              <div class="text-sm text-gray-600">Starting from</div>
              <div class="text-2xl font-bold text-blue-600">KSH 50,000</div>
            </div>
            
            <NuxtLink to="/contact" class="btn-primary w-full text-center">
              Get Quote
            </NuxtLink>
          </div>

          <!-- Custom Software Solutions -->
          <div class="service-card glass-card rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-white/20 bg-white/90">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 text-3xl text-white">
              ⚙️
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Custom Software Solutions</h2>
            <p class="text-gray-600 mb-6">Tailored software solutions designed specifically for your business needs. From automation tools to enterprise applications that streamline operations.</p>
            
            <h4 class="font-semibold text-gray-900 mb-3">What We Offer:</h4>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Business Process Automation
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Database Design & Management
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Cloud Integration & Migration
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                24/7 Technical Support
              </li>
            </ul>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-6">
              <div class="text-sm text-gray-600">Starting from</div>
              <div class="text-2xl font-bold text-indigo-600">KSH 75,000</div>
            </div>
            
            <NuxtLink to="/contact" class="btn-primary w-full text-center">
              Get Quote
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
          <p class="text-xl text-gray-600">Streamlined approach to delivering exceptional results</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">1</div>
            <h3 class="text-xl font-bold mb-2">Discovery</h3>
            <p class="text-gray-600">Understanding your business needs and project requirements</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">2</div>
            <h3 class="text-xl font-bold mb-2">Planning</h3>
            <p class="text-gray-600">Creating detailed project roadmap and timeline</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">3</div>
            <h3 class="text-xl font-bold mb-2">Development</h3>
            <p class="text-gray-600">Building your solution with regular updates and feedback</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">4</div>
            <h3 class="text-xl font-bold mb-2">Launch</h3>
            <p class="text-gray-600">Deploying and supporting your new digital solution</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
          <p class="text-xl text-gray-600">Cutting-edge tools and frameworks for modern solutions</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div class="text-center p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-2">⚛️</div>
            <div class="text-sm font-medium">React</div>
          </div>
          <div class="text-center p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-2">📱</div>
            <div class="text-sm font-medium">Flutter</div>
          </div>
          <div class="text-center p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-2">🟢</div>
            <div class="text-sm font-medium">Node.js</div>
          </div>
          <div class="text-center p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-2">🐍</div>
            <div class="text-sm font-medium">Python</div>
          </div>
          <div class="text-center p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-2">🗄️</div>
            <div class="text-sm font-medium">MongoDB</div>
          </div>
          <div class="text-center p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-2">☁️</div>
            <div class="text-sm font-medium">AWS</div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue"
// SEO Meta Tags for Services Page
useHead({
  title: 'Digital Services in Kenya - Web Development, Mobile Apps & Custom Software | Protrixx TechSolutions',
  meta: [
    { name: 'description', content: 'Professional digital services in Kenya: Web development from KSH 25,000, Mobile apps from KSH 50,000, Custom software from KSH 75,000. Free consultation in Nairobi.' },
    { name: 'keywords', content: 'web development services Kenya, mobile app development Kenya, custom software Kenya, digital services Nairobi, website design Kenya prices' },
    { property: 'og:title', content: 'Digital Services in Kenya - Protrixx TechSolutions' },
    { property: 'og:description', content: 'Professional web development, mobile apps & custom software services in Kenya. Competitive pricing starting from KSH 25,000.' },
    { property: 'og:url', content: 'https://protrixxtechsolutions.com/services' }
  ],
  link: [
    { rel: 'canonical', href: 'https://protrixxtechsolutions.com/services' }
  ]
})
</script>
