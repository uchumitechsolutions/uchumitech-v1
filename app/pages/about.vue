<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    
    <!-- About Hero Section -->
    <section class="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="floating-particles"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative">
        <div class="text-center text-white">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            About <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Protrixx TechSolutions</span>
          </h1>
          <p class="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Empowering Kenyan businesses through innovative digital transformation since 2021
          </p>
        </div>
      </div>
    </section>

    <!-- Main About Content -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="scroll-reveal">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p class="text-lg text-gray-600 mb-6">
              Founded in 2021 with a vision to transform businesses through technology, Protrixx TechSolutions has become Kenya's trusted partner for digital innovation. We specialize in crafting innovative digital solutions that drive growth and efficiency for businesses across East Africa.
            </p>
            <p class="text-lg text-gray-600 mb-6">
              Our expert team of developers, designers, and strategists combines technical excellence with creative innovation to deliver solutions that don't just meet expectations - they revolutionize how you do business in the digital age.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Based in Nairobi, we understand the unique challenges and opportunities that Kenyan businesses face, allowing us to create tailored solutions that resonate with local markets while maintaining global standards.
            </p>
            
            <div class="grid grid-cols-3 gap-8">
              <div class="text-center glass-card p-4 rounded-xl border border-purple-100">
                <div class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">50+</div>
                <div class="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div class="text-center glass-card p-4 rounded-xl border border-blue-100">
                <div class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">3+</div>
                <div class="text-sm text-gray-600">Years Experience</div>
              </div>
              <div class="text-center glass-card p-4 rounded-xl border border-indigo-100">
                <div class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">100%</div>
                <div class="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div class="scroll-reveal animation-delay-200">
            <div class="relative">
              <img 
                src="https://img.freepik.com/premium-photo/portrait-black-man-as-computer-programmer-looking-camera-while-writing-code-office-workplac_236854-44721.jpg" 
                alt="Protrixx TechSolutions team working on innovative digital solutions in Nairobi Kenya"
                class="rounded-2xl shadow-2xl hover-lift w-full h-96 object-cover"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-blue-600/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="glass-card p-8 rounded-2xl border border-purple-100">
            <div class="text-4xl mb-4">🎯</div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p class="text-gray-600">
              To empower Kenyan businesses and startups with cutting-edge digital solutions that drive growth, enhance efficiency, and create meaningful connections with their customers in the digital landscape.
            </p>
          </div>
          
          <div class="glass-card p-8 rounded-2xl border border-blue-100">
            <div class="text-4xl mb-4">👁️</div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p class="text-gray-600">
              To become East Africa's leading technology partner, recognized for innovative solutions, exceptional service, and our commitment to transforming businesses through digital excellence.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Values -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p class="text-xl text-gray-600">The principles that guide everything we do</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-4">🚀</div>
            <h3 class="text-xl font-bold mb-3">Innovation</h3>
            <p class="text-gray-600">Constantly pushing boundaries with creative solutions</p>
          </div>
          
          <div class="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-4">🤝</div>
            <h3 class="text-xl font-bold mb-3">Integrity</h3>
            <p class="text-gray-600">Building trust through transparent communication</p>
          </div>
          
          <div class="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-4">⚡</div>
            <h3 class="text-xl font-bold mb-3">Excellence</h3>
            <p class="text-gray-600">Delivering exceptional quality in every project</p>
          </div>
          
          <div class="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-4">🎯</div>
            <h3 class="text-xl font-bold mb-3">Results</h3>
            <p class="text-gray-600">Focused on delivering measurable business outcomes</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-4">Ready to Work with Kenya's Digital Experts?</h2>
        <p class="text-xl text-white mb-8 opacity-90">Let's discuss how we can transform your business</p>
        <NuxtLink to="/contact" class="btn-secondary glow-effect">
          <span class="mr-2">💬</span>
          Start Conversation
        </NuxtLink>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';

// SEO Meta Tags for About Page
useHead({
  title: 'About Protrixx TechSolutions - Kenya\'s Leading Digital Transformation Company',
  meta: [
    { name: 'description', content: 'Learn about Protrixx TechSolutions, Kenya\'s premier digital transformation company. Based in Nairobi, we\'ve completed 50+ projects with 100% client satisfaction since 2021.' },
    { name: 'keywords', content: 'about Protrixx TechSolutions, Kenya software company, Nairobi web development, digital transformation Kenya, tech company Kenya history' },
    { property: 'og:title', content: 'About Protrixx TechSolutions - Kenya\'s Leading Digital Company' },
    { property: 'og:description', content: 'Learn about Kenya\'s premier digital transformation company based in Nairobi with 50+ successful projects.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://protrixxtechsolutions.com/about' }
  ],
  link: [
    { rel: 'canonical', href: 'https://protrixxtechsolutions.com/about' }
  ]
})
</script>