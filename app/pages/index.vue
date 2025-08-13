<template>
  <div class="min-h-screen bg-gray-50">
   <!-- Hero Section with Navbar -->
<section id="home" class="relative min-h-screen flex flex-col overflow-hidden">
  <!-- Hero Background -->
  <div class="absolute inset-0 hero-bg">
    <div class="absolute inset-0 bg-black/60"></div>
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
          UchumiTechSolution
        </h1>
      </div>
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-8">
          <a 
            v-for="item in navigation" 
            :key="item" 
            href="#" 
            :class="scrolledPastHero 
              ? 'text-gray-900 hover:text-[#1c7ed6]' 
              : 'text-white hover:text-[#1c7ed6]'" 
            class="px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
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
            ? 'text-gray-900 hover:text-[#1c7ed6] hover:bg-gray-100' 
            : 'text-white hover:text-[#1c7ed6] hover:bg-white/10'"
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
    <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
      Empowering <span class="text-[#1c7ed6]">Digital</span>
      <br>Innovation
    </h1>
    <p class="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up animation-delay-200">
      with Cutting-Edge Technology Solutions
    </p>
    <p class="text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
      From stunning websites to powerful mobile apps and custom software - 
      we transform your vision into digital reality
    </p>
    <button 
      class="btn-primary animate-fade-in-up animation-delay-600"
      @click="scrollTo('contact')"
    >
      Contact Us Today
      <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  </div>
</section>


    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="scroll-reveal">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              About <span class="text-[#1c7ed6]">UchumiTechSolution</span>
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Founded with a vision to transform businesses through technology, UchumiTechSolution specializes in crafting 
              innovative digital solutions that drive growth and efficiency. We believe every business deserves cutting-edge 
              technology that propels them forward.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Our expert team of developers, designers, and strategists combines technical excellence with creative innovation to 
              deliver solutions that aren't just meet expectations - they 
              revolutionize how you do business.
            </p>
            
            <div class="grid grid-cols-3 gap-8">
              <div v-for="stat in stats" :key="stat.value" class="text-center">
                <div class="text-3xl font-bold text-[#1c7ed6] mb-2">{{ stat.value }}</div>
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
              <div class="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to transform your business 
            and accelerate your growth in the digital landscape.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="service.title"
            class="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl scroll-reveal"
            :class="`animation-delay-${index * 200}`"
          >
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" :class="service.bgColor">
              <component :is="service.icon" class="h-8 w-8 text-white" />
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

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover some of our recent work and see how we've helped businesses 
            across Kenya achieve their digital transformation goals.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(project, index) in projects" 
            :key="project.title"
            class="project-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl scroll-reveal"
            :class="`animation-delay-${index * 100}`"
          >
            <div class="relative">
              <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
              <div class="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 flex items-end p-6">
                <button class="btn-primary-small">View Project</button>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="px-3 py-1 bg-blue-50 text-[#1c7ed6] text-xs rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12 scroll-reveal">
          <div class="bg-[#1c7ed6] rounded-3xl p-12 text-white">
            <h3 class="text-3xl font-bold mb-4">Your Project Next?</h3>
            <p class="text-xl mb-8 opacity-90">Let's bring your vision to reality</p>
            <button class="btn-secondary" @click="scrollTo('contact')">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="scroll-reveal">
            <form @submit.prevent="submitForm" class="space-y-6">
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
              <button type="submit" class="btn-primary w-full">
                Send Message
                <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>

          <div class="scroll-reveal animation-delay-200">
            <div class="bg-[#1c7ed6] rounded-3xl p-8 text-white h-full">
              <h3 class="text-2xl font-bold mb-8">Let's Start a Conversation</h3>
              
              <div class="space-y-6">
                <div class="flex items-center">
                  <svg class="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div class="font-medium">Email Us</div>
                    <div class="opacity-80">uchumitechsolutions@gmail.com</div>
                  </div>

                </div>

                  <div class="flex items-center">
               
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 mr-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>

                  <div>
                    <div class="font-medium">Phone Number </div>
                    <div class="opacity-80">+254 715 389 568</div>
                  </div>

                </div>

                <div class="flex items-center">
                  <svg class="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div class="font-medium">Location</div>
                    <div class="opacity-80">Nairobi, Kenya</div>
                  </div>
                </div>

                <div class="flex items-center">
                  <svg class="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div class="font-medium">Response Time</div>
                    <div class="opacity-80">Within 24 hours</div>
                  </div>
                </div>
              </div>

              <div class="mt-8 pt-8 border-t border-white/20">
                <div class="text-lg font-medium mb-4">Why Choose UchumiTechSolution?</div>
                <ul class="space-y-2 text-sm opacity-90">
                  <li>✓ Free consultation and project planning</li>
                  <li>✓ Affordable pricing for Kenyan businesses</li>
                  <li>✓ Ongoing support and maintenance</li>
                  <li>✓ Fast turnaround times</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4 text-[#1c7ed6]">
              UchumiTechSolution
            </h3>
            <p class="text-gray-400">
              Empowering businesses through innovative digital solutions and cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Services</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
            <ul class="space-y-2">
              <li class="text-gray-400">Nairobi, Kenya</li>
              <li class="text-gray-400">uchumitechsolutions@gmail.com</li>
              <li class="text-gray-400">+254 715 389 568</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-gray-400">
            © 2025 UchumiTechSolution. All rights reserved. Made with ❤️.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { CodeBracketSquareIcon, DevicePhoneMobileIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid'

// Page title and meta
useHead({
  title: 'UchumiTechSolution - Empowering Digital Innovation',
  meta: [
    { name: 'description', content: 'Transform your business with cutting-edge digital solutions. Web development, mobile apps, and custom software in Kenya.' }
  ]
})

// Reactive data
const mobileMenuOpen = ref(false)
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

const navigation = ['Home', 'About', 'Services', 'Projects', 'Contact']

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '3+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' }
]

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies. Fast, responsive, and user-friendly digital experiences.',
    icon: CodeBracketSquareIcon,
    bgColor: 'bg-[#1c7ed6]',
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
    icon: DevicePhoneMobileIcon,
    bgColor: 'bg-[#1c7ed6]',
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
    icon: Cog6ToothIcon,
    bgColor: 'bg-[#1c7ed6]',
    features: [
      'Business Solutions',
      'Database Systems',
      'Cloud Integration',
      'Technical Support'
    ]
  }
]

// Icon components (simplified SVG icons)
const CodeIcon = {
  template: `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  `
}

const PhoneIcon = {
  template: `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  `
}

const CogIcon = {
  template: `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  `
}

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
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      body: form.value
    })

    if (response.success) {
      alert('✅ Message sent! We’ll get back to you soon.')
      form.value = { name: '', email: '', message: '' }
    } else {
      alert('❌ Failed to send message. Please try again.')
    }
  } catch (error) {
    console.error(error)
    alert('❌ Something went wrong.')
  }
}


// Scroll handler with navbar background change
const handleScroll = () => {
  // Check if scrolled past hero section (adjust threshold as needed)
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

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

/* Hero background */
.hero-bg {
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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
  background: #1c7ed6;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Button styles */
.btn-primary {
  @apply bg-[#1c7ed6] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-[#1971c2] transform hover:scale-105 transition-all duration-300 inline-flex items-center;
}

.btn-primary-small {
  @apply bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-all duration-300;
}

.btn-secondary {
  @apply bg-white text-[#1c7ed6] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300;
}

/* Input styles */
.input-field {
  @apply w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1c7ed6] focus:border-transparent transition-all duration-300 bg-white;
}

.input-field:focus {
  @apply shadow-lg;
}

/* Card hover effects */
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.service-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.project-card {
  transition: all 0.3s ease;
  overflow: hidden;
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
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Responsive design improvements */
@media (max-width: 768px) {
  .hero-bg {
    background-attachment: scroll;
  }
}
</style>