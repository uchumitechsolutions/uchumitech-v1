<template>
  <div class="min-h-screen bg-gray-50">
   <!-- Hero Section with Navbar -->
<section id="home" class="relative min-h-screen flex flex-col overflow-hidden">
  <!-- Hero Background -->
  <div class="absolute inset-0 hero-bg">
    <div class="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-indigo-900/80"></div>
    <div class="absolute inset-0">
      <div class="floating-particles"></div>
    </div>
  </div>

  <!-- Navigation -->
  <nav 
  class="fixed top-0 w-full z-50 border-b transition-all duration-300"
  :class="scrolledPastHero 
    ? 'bg-white/95 backdrop-blur-md border-gray-200 text-gray-900 shadow-lg' 
    : 'bg-transparent border-white/10 text-white'"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <div class="flex-shrink-0">
        <h1 :class="scrolledPastHero ? 'text-gray-900' : 'text-white'" class="text-2xl font-bold transition-colors duration-300">
          <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Protrixx</span>
          <span :class="scrolledPastHero ? 'text-gray-900' : 'text-white'">TechSolutions</span>
        </h1>
      </div>
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-8">
          <a 
            v-for="item in navigation" 
            :key="item" 
            href="#" 
            :class="scrolledPastHero 
              ? 'text-gray-900 hover:text-purple-600' 
              : 'text-white hover:text-purple-300'" 
            class="px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 nav-link"
            @click.prevent="scrollTo(item.toLowerCase().replace(' ', ''))"
          >
            {{ item }}
          </a>
        </div>
      </div>
      <div class="md:hidden">
        <button @click="mobileMenuOpen = !mobileMenuOpen" :class="scrolledPastHero ? 'text-gray-900' : 'text-white'" class="p-2 transition-colors duration-300">
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
    <div v-if="mobileMenuOpen" 
         :class="scrolledPastHero ? 'bg-white/95 backdrop-blur-md text-gray-900' : 'bg-black/80 text-white'"
         class="md:hidden border-t border-gray-200/20 animate-slide-down">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-for="item in navigation"
          :key="item"
          href="#"
          @click.prevent="scrollToMobile(item.toLowerCase().replace(' ', ''))"
          :class="scrolledPastHero 
            ? 'text-gray-900 hover:text-purple-600 hover:bg-gray-100' 
            : 'text-white hover:text-purple-300 hover:bg-white/10'"
          class="block px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg"
        >
          {{ item }}
        </a>
      </div>
    </div>
  </div>
</nav>

  <!-- Hero Content -->
  <div class="relative z-10 flex flex-col justify-center items-center flex-1 text-center px-4 sm:px-6 lg:px-8 pt-16">
    <div class="floating-element">
      <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
        Empowering <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Digital</span>
        <br>Innovation
      </h1>
    </div>
    <p class="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up animation-delay-200">
      with Cutting-Edge Technology Solutions
    </p>
    <p class="text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
      From stunning websites to powerful mobile apps, custom software, and innovative tools - 
      we transform your vision into digital reality
    </p>
    <button 
      class="btn-primary animate-fade-in-up animation-delay-600 glow-effect"
      @click="scrollTo('contact')"
    >
      <span class="mr-2">🚀</span>
      Contact Us Today
      <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  </div>
</section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full blur-xl"></div>
        <div class="absolute bottom-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="scroll-reveal">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              About <span class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Protrixx TechSolutions</span>
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Founded with a vision to transform businesses through technology, Protrixx TechSolutions specializes in crafting 
              innovative digital solutions that drive growth and efficiency. We believe every business deserves cutting-edge 
              technology that propels them forward.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Our expert team of developers, designers, and strategists combines technical excellence with creative innovation to 
              deliver solutions that don't just meet expectations - they revolutionize how you do business.
            </p>
            
            <div class="grid grid-cols-3 gap-8">
              <div v-for="stat in stats" :key="stat.value" class="text-center glass-card p-4 rounded-xl">
                <div class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">{{ stat.value }}</div>
                <div class="text-sm text-gray-600">{{ stat.label }}</div>
              </div>
            </div>
          </div>
          
          <div class="scroll-reveal animation-delay-200">
            <div class="relative">
              <img 
                src="https://img.freepik.com/premium-photo/portrait-black-man-as-computer-programmer-looking-camera-while-writing-code-office-workplac_236854-44721.jpg" 
                alt="Team working"
                class="rounded-2xl shadow-2xl hover-lift"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-blue-600/10 to-transparent rounded-2xl"></div>
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-80 blur-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to transform your business 
            and accelerate your growth in the digital landscape.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="service.title"
            class="service-card glass-card rounded-2xl p-8 shadow-lg hover:shadow-2xl scroll-reveal backdrop-blur-sm border border-white/20"
            :class="`animation-delay-${index * 200}`"
          >
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl" :class="service.bgColor">
              {{ service.icon }}
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 mb-6">{{ service.description }}</p>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Protrixx Tools Section -->
    <section id="tools" class="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Protrixx <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Tools</span>
          </h2>
          <div class="w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p class="text-xl text-gray-200 max-w-3xl mx-auto">
            Innovative tools designed to enhance your digital experience and productivity
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Protrixx YouTube Downloader -->
          <div class="tool-card glass-card-dark rounded-2xl p-8 backdrop-blur-sm border border-white/10 scroll-reveal">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mb-6 mx-auto shadow-lg">
              <span class="text-white text-4xl">📺</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 text-center">Protrixx YouTube Downloader</h3>
            <p class="text-gray-300 mb-6 text-center">
              Download your favorite YouTube videos and audio with ease. High-quality downloads in multiple formats.
            </p>
            <div class="flex justify-center">
              <button class="btn-tool bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
                <span class="mr-2">⬇️</span>
                Available Now
              </button>
            </div>
          </div>

          <!-- Protrixx AI -->
          <div class="tool-card glass-card-dark rounded-2xl p-8 backdrop-blur-sm border border-white/10 scroll-reveal animation-delay-200">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 mx-auto shadow-lg relative">
              <span class="text-white text-4xl">🧠</span>
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-400/50 to-teal-400/50 rounded-2xl blur animate-pulse"></div>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 text-center">ProtrixxAI</h3>
            <p class="text-gray-300 mb-6 text-center">
              Advanced AI-powered assistant to boost your productivity and streamline your workflow with intelligent automation.
            </p>
            <div class="flex justify-center">
              <button class="btn-coming-soon" disabled>
                <span class="mr-2">⏰</span>
                Coming Soon
                <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur animate-pulse"></div>
              </button>
            </div>
          </div>

          <!-- Protrixx Learn -->
          <div class="tool-card glass-card-dark rounded-2xl p-8 backdrop-blur-sm border border-white/10 scroll-reveal animation-delay-400">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6 mx-auto shadow-lg">
              <span class="text-white text-4xl">🎓</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 text-center">ProtrixxLearn</h3>
            <p class="text-gray-300 mb-6 text-center">
              Interactive learning platform with courses, tutorials, and resources to master new technologies and skills.
            </p>
            <div class="flex justify-center">
              <button class="btn-coming-soon relative" disabled>
                <span class="mr-2">⏰</span>
                Coming Soon
                <div class="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur animate-pulse"></div>
              </button>
            </div>
          </div>
        </div>

        <div class="text-center mt-16 scroll-reveal animation-delay-600">
          <div class="glass-card-dark rounded-3xl p-12 text-white border border-white/10 backdrop-blur-sm">
            <span class="text-6xl text-purple-400 mb-6 block">🛠️</span>
            <h3 class="text-3xl font-bold mb-4">More Tools in Development</h3>
            <p class="text-xl mb-8 opacity-90">Stay tuned for exciting new tools and features</p>
            <button class="btn-secondary" @click="scrollTo('contact')">
              <span class="mr-2">🔔</span>
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-2xl"></div>
        <div class="absolute bottom-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-2xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover some of our recent work and see how we've helped businesses 
            across Kenya achieve their digital transformation goals.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(project, index) in projects" 
            :key="project.title"
            class="project-card glass-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl scroll-reveal border border-white/20"
            :class="`animation-delay-${index * 100}`"
          >
            <div class="relative">
              <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
              <div class="project-overlay absolute inset-0 bg-gradient-to-t from-purple-900/90 via-blue-900/50 to-transparent opacity-0 flex items-end p-6">
                <button class="btn-primary-small glow-effect">
                  <span class="mr-2">👁️</span>
                  View Project
                </button>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs rounded-full border border-purple-200"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12 scroll-reveal">
          <div class="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div class="absolute inset-0 bg-black/10"></div>
            <div class="relative">
              <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">💡</span>
              <h3 class="text-3xl font-bold mb-4">Your Project Next?</h3>
              <p class="text-xl mb-8 opacity-90">Let's bring your vision to reality</p>
              <button class="btn-secondary glow-effect" @click="scrollTo('contact')">
                <span class="mr-2">🚀</span>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="scroll-reveal">
            <form @submit.prevent="submitForm" class="space-y-6 glass-card p-8 rounded-2xl border border-white/20">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    v-model="form.name"
                    type="text" 
                    class="input-field"
                    placeholder="Your Full Name"
                    required
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    v-model="form.email"
                    type="email" 
                    class="input-field"
                    placeholder="your.email@example.com"
                    required
                  >
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  v-model="form.message"
                  rows="6" 
                  class="input-field"
                  placeholder="Tell us about your project or how we can help you..."
                  required
                ></textarea>
              </div>
              <button :disabled="isLoading" type="submit" class="btn-primary  flex justify-center w-full glow-effect">
                

                <div v-if="isLoading" class="flex gap-2">
    <div class="w-3 h-3 rounded-full animate-pulse bg-white"></div>
    <div class="w-3 h-3 rounded-full animate-pulse bg-white"></div>
    <div class="w-3 h-3 rounded-full animate-pulse bg-white"></div>
</div>
              <div class="flex items-center" v-show="isLoading == false">
              <span   class="mr-2">✉️</span>
                Send Message
                <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                </div>
              </button>
            </form>
          </div>

          <div class="scroll-reveal animation-delay-200">
            <div class="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-8 text-white h-full relative overflow-hidden border border-white/10">
              <div class="absolute inset-0 bg-black/10"></div>
              <div class="relative">
                <h3 class="text-2xl font-bold mb-8">Let's Start a Conversation</h3>
                
                <div class="space-y-6">
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span class="text-white text-xl">✉️</span>
                    </div>
                    <div>
                      <div class="font-medium">Email Us</div>
                      <div class="opacity-80">protrixxtechsolutions@gmail.com</div>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span class="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <div class="font-medium">Phone Number</div>
                      <div class="opacity-80">+254 715 389 568</div>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span class="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <div class="font-medium">Location</div>
                      <div class="opacity-80">Nairobi, Kenya</div>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span class="text-white text-xl">⏰</span>
                    </div>
                    <div>
                      <div class="font-medium">Response Time</div>
                      <div class="opacity-80">Within 24 hours</div>
                    </div>
                  </div>
                </div>

                <div class="mt-8 pt-8 border-t border-white/20">
                  <div class="text-lg font-medium mb-4">Why Choose Protrixx TechSolutions?</div>
                  <ul class="space-y-2 text-sm opacity-90">
                    <li><span class="text-green-400 mr-2">✓</span>Free consultation and project planning</li>
                    <li><span class="text-green-400 mr-2">✓</span>Affordable pricing for Kenyan businesses</li>
                    <li><span class="text-green-400 mr-2">✓</span>Ongoing support and maintenance</li>
                    <li><span class="text-green-400 mr-2">✓</span>Fast turnaround times</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">
              <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Protrixx</span>
              <span class="text-white">TechSolutions</span>
            </h3>
            <p class="text-gray-400">
              Empowering businesses through innovative digital solutions and cutting-edge technology tools.
            </p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#home" class="text-gray-400 hover:text-purple-400 transition-colors"><span class="mr-2">🏠</span>Home</a></li>
              <li><a href="#about" class="text-gray-400 hover:text-purple-400 transition-colors"><span class="mr-2">ℹ️</span>About</a></li>
              <li><a href="#services" class="text-gray-400 hover:text-purple-400 transition-colors"><span class="mr-2">⚙️</span>Services</a></li>
              <li><a href="#tools" class="text-gray-400 hover:text-purple-400 transition-colors"><span class="mr-2">🛠️</span>Tools</a></li>
              <li><a href="#projects" class="text-gray-400 hover:text-purple-400 transition-colors"><span class="mr-2">📁</span>Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Services</h4>
            <ul class="space-y-2">
              <li><a href="#services" class="text-gray-400 hover:text-purple-400 transition-colors"><span class="mr-2">💻</span>Web Development</a></li>
              <li><a href="#services" class="text-gray-400 hover:text-purple-400 transition-colors"><span class="mr-2">📱</span>Mobile Apps</a></li>
              <li><a href="#services" class="text-gray-400 hover:text-purple-400 transition-colors"><span class="mr-2">💻</span>Custom Software</a></li>
              <li><a href="#tools" class="text-gray-400 hover:text-purple-400 transition-colors"><span class="mr-2">🤖</span>AI Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
            <ul class="space-y-2">
              <li class="text-gray-400"><span class="mr-2 text-purple-400">📍</span>Nairobi, Kenya</li>
              <li class="text-gray-400"><span class="mr-2 text-purple-400">✉️</span>protrixxtechsolutions@gmail.com</li>
              <li class="text-gray-400"><span class="mr-2 text-purple-400">📞</span>+254 715 389 568</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-gray-400">
            © 2025 Protrixx TechSolutions. All rights reserved. Made with <span class="text-red-500">❤️</span> in Kenya.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Page title and meta
useHead({
  title: 'Protrixx TechSolutions - Empowering Digital Innovation',
  meta: [
    { name: 'description', content: 'Transform your business with cutting-edge digital solutions. Web development, mobile apps, AI tools, and custom software in Kenya.' }
  ]
})

// Reactive data
const mobileMenuOpen = ref(false)
const isLoading = ref(false)
const scrolledPastHero = ref(false)
const form = ref({
  name: '',
  email: '',
  message: ''
})

// Sample projects data
const projects = ref([
  {
    title: 'Yolo Tickets',
    description: 'Modern online store with payment integration and inventory management',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQGdGjTVOsoCXQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1663579718593?e=2147483647&v=beta&t=jNrVFEndi71ZftVJSEQnh0alknecio20kjMArXMvCOw',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Kadesh Enterprise',
    description: 'Corporate business website with service portfolio, client management system, and contact integration.',
    image: 'https://images.unsplash.com/photo-1718524767488-10ee93e05e9c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Flutter', 'Firebase', 'Analytics']
  },
  {
    title: 'Educational Portal',
    description: 'Learning management system for schools and training institutes',
    image: 'https://cdn2.f-cdn.com/contestentries/75891/747393/536a4f434f268_thumb900.jpg',
    tags: ['Vue.js', 'Laravel', 'MySQL']
  }
])

const navigation = ['Home', 'About', 'Services', 'Tools', 'Projects', 'Contact']

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '3+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' }
]

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies. Fast, responsive, and user-friendly digital experiences.',
    icon: '💻',
    bgColor: 'bg-gradient-to-br from-purple-500 to-blue-500',
    features: [
      'Responsive Design',
      'E-commerce Solutions',
      'CMS Development',
      'SEO Applications'
    ]
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for Android and iOS. Engaging user experience that drives results.',
    icon: '📱',
    bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-500',
    features: [
      'iOS & Android',
      'Cross-Platform',
      'UI/UX Design',
      'App Store Optimization'
    ]
  },
  {
    title: 'Custom Software Solutions',
    description: 'Tailored software solutions designed specifically for your business needs. From automation tools to enterprise applications.',
    icon: '⚙️',
    bgColor: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    features: [
      'Business Solutions',
      'Database Systems',
      'Cloud Integration',
      'Technical Support'
    ]
  }
]

// Methods
const scrollTo = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToMobile = (elementId) => {
  mobileMenuOpen.value = false
  setTimeout(() => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}

// Handle form submission
const submitForm = async () => {
  try {
    // Simulate form submission
    
    isLoading.value = true
    const {data , error}  = await useFetch("/api/send-email" , {method:"post" , body:{name:form.value.name , email:form.value.email , message:form.value.message}})
    form.value = { name: '', email: '', message: '' }
    isLoading.value = false
    alert('✅ Message sent! We\'ll get back to you soon.')
  } catch (error) {
    console.error(error)
    alert('❌ Something went wrong.')
  }
}

// Scroll handler with navbar background change
const handleScroll = () => {
  // Check if scrolled past hero section
  const heroHeight = window.innerHeight * 0.8
  scrolledPastHero.value = window.scrollY > heroHeight

  // Scroll reveal animation
  const reveals = document.querySelectorAll('.scroll-reveal')
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('revealed')
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); }
  50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.6); }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-1000 { animation-delay: 1s; }
.animation-delay-500 { animation-delay: 0.5s; }

/* Hero background */
.hero-bg {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.9), rgba(59, 130, 246, 0.8)), 
              url('https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.floating-particles {
  background-image: 
    radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(147, 51, 234, 0.4), transparent),
    radial-gradient(1px 1px at 90px 40px, rgba(59, 130, 246, 0.3), transparent),
    radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.2), transparent),
    radial-gradient(2px 2px at 160px 30px, rgba(147, 51, 234, 0.3), transparent);
  background-repeat: repeat;
  background-size: 200px 100px;
  animation: float 20s linear infinite;
}

.floating-element {
  animation: float 6s ease-in-out infinite;
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slide-down 0.3s ease-out;
}

/* Glass morphism effects */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-card-dark {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Navigation styles */
.nav-link {
  position: relative;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background: linear-gradient(to right, #9333ea, #3b82f6);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Enhanced button styles */
.btn-primary {
  @apply bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center relative overflow-hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary-small {
  @apply bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105;
}

.btn-secondary {
  @apply bg-white text-purple-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white;
}

.btn-tool {
  @apply px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl;
}

.btn-coming-soon {
  @apply px-6 py-3 rounded-full font-semibold text-gray-400 bg-gray-600/50 cursor-not-allowed relative overflow-hidden;
}

.glow-effect {
  animation: pulse-glow 2s infinite;
}

/* Input styles */
.input-field {
  @apply w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm;
}

.input-field:focus {
  @apply shadow-lg bg-white;
}

/* Enhanced card hover effects */
.hover-lift {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-12px) rotateY(5deg);
  box-shadow: 0 25px 50px -12px rgba(147, 51, 234, 0.25);
}

.service-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

.service-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 25px 50px -12px rgba(147, 51, 234, 0.3);
  background: rgba(255, 255, 255, 0.95);
}

.tool-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.tool-card:hover {
  transform: translateY(-15px) scale(1.03);
  box-shadow: 0 30px 60px -12px rgba(147, 51, 234, 0.4);
}

.tool-card::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 2px;
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.5), rgba(59, 130, 246, 0.5));
  border-radius: 1rem;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
}

.project-card {
  transition: all 0.3s ease;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -12px rgba(147, 51, 234, 0.25);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-overlay {
  transition: opacity 0.3s ease;
}

/* Scroll reveal animation */
.scroll-reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Navbar scroll effect enhancements */
nav {
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

/* Responsive design improvements */
@media (max-width: 768px) {
  .hero-bg {
    background-attachment: scroll;
  }
}

/* Additional decorative elements */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
</style>