<template>
  <div>
    <Navbar/>

    <!-- Main Contact Section -->
    <section id="contact" class="py-20 bg-gradient-to-br mt-42 from-gray-50 to-purple-50 relative overflow-hidden">
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select v-model="form.subject" class="input-field" required>
                  <option value="">Select a subject</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
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
              <button :disabled="isLoading" type="submit" class="btn-primary flex justify-center w-full glow-effect">
                <div v-if="isLoading" class="flex gap-2">
                  <div class="w-3 h-3 rounded-full animate-pulse bg-white"></div>
                  <div class="w-3 h-3 rounded-full animate-pulse bg-white"></div>
                  <div class="w-3 h-3 rounded-full animate-pulse bg-white"></div>
                </div>
                <div class="flex items-center" v-show="!isLoading">
                  <span class="mr-2">✉️</span>
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

    <!-- Additional Contact Information -->
    <!-- <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl">🚀</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
            <p class="text-gray-600">We respond to all inquiries within 24 hours, ensuring you never wait long for answers.</p>
          </div>

          <div class="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl">💡</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Free Consultation</h3>
            <p class="text-gray-600">Get expert advice and project planning at no cost. We believe in building relationships first.</p>
          </div>

          <div class="text-center p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl">🤝</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
            <p class="text-gray-600">Based in Nairobi, we understand the Kenyan market and provide culturally relevant solutions.</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Success/Error Messages -->
    <div v-if="showMessage" class="fixed top-4 right-4 z-50 max-w-sm">
      <div :class="messageType === 'success' ? 'bg-green-500' : 'bg-red-500'" class="text-white p-4 rounded-lg shadow-lg">
        <div class="flex items-center">
          <span v-if="messageType === 'success'" class="mr-2">✅</span>
          <span v-else class="mr-2">❌</span>
          {{ message }}
        </div>
      </div>
    </div>

   <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isLoading: false,
      showMessage: false,
      message: '',
      messageType: 'success'
    }
  },
  head() {
    return {
      title: 'Contact Us - Protrixx TechSolutions',
      meta: [
        { hid: 'description', name: 'description', content: 'Get in touch with Protrixx TechSolutions for web development, mobile apps, and tech consulting in Nairobi, Kenya.' },
        { hid: 'keywords', name: 'keywords', content: 'contact, web development, mobile apps, Nairobi, Kenya, tech solutions' }
      ]
    }
  },
  methods: {
    async submitForm() {
      this.isLoading = true
      
      try {
        // Simulate form submission - replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
        
        this.showSuccessMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.')
      } catch (error) {
        this.showErrorMessage('Sorry, there was an error sending your message. Please try again or contact us directly.')
      } finally {
        this.isLoading = false
      }
    },
    
    showSuccessMessage(msg) {
      this.message = msg
      this.messageType = 'success'
      this.showMessage = true
      setTimeout(() => {
        this.showMessage = false
      }, 5000)
    },
    
    showErrorMessage(msg) {
      this.message = msg
      this.messageType = 'error'
      this.showMessage = true
      setTimeout(() => {
        this.showMessage = false
      }, 5000)
    }
  }
}
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.input-field {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  font-size: 14px;
}

.input-field:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
  background: rgba(255, 255, 255, 1);
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
  color: white;
  padding: 14px 32px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.glow-effect:hover:not(:disabled) {
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
}

.scroll-reveal {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.6s ease;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>