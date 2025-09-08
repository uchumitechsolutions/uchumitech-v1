<template>

    <Navbar/>
    
  <div class="min-h-screen bg-gray-50">
    
    <!-- Tools Hero -->
    <section class="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative">
        <div class="text-center text-white">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Protrixx <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Tools</span>
          </h1>
          <p class="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Innovative digital tools designed to enhance productivity and simplify your digital life
          </p>
        </div>
      </div>
    </section>

    <!-- Tools Grid -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Protrixx YouTube Downloader -->
          <div class="tool-card glass-card-dark rounded-2xl p-8 backdrop-blur-sm border border-purple-200 bg-gradient-to-br from-red-50 to-pink-50">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mb-6 mx-auto shadow-lg">
              <span class="text-white text-4xl">📺</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 text-center">Protrixx YouTube Downloader</h2>
            <p class="text-gray-600 mb-6 text-center">
              Download your favorite YouTube videos and audio with ease. High-quality downloads in multiple formats including MP4, MP3, and more.
            </p>
            
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                High-quality video downloads (up to 4K)
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Audio-only downloads (MP3 format)
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Fast and secure downloads
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                No registration required
              </div>
            </div>
            
            <div class="flex justify-center">
              <a href="#" class="btn-tool bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
                <span class="mr-2">⬇️</span>
                Use Tool Now
              </a>
            </div>
          </div>

          <!-- Protrixx AI -->
          <div class="tool-card glass-card-dark rounded-2xl p-8 backdrop-blur-sm border border-green-200 bg-gradient-to-br from-emerald-50 to-teal-50">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 mx-auto shadow-lg relative">
              <span class="text-white text-4xl">🧠</span>
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-400/50 to-teal-400/50 rounded-2xl blur animate-pulse"></div>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 text-center">ProtrixxAI</h2>
            <p class="text-gray-600 mb-6 text-center">
              Advanced AI-powered assistant to boost your productivity and streamline your workflow with intelligent automation and smart insights.
            </p>
            
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-sm text-gray-500">
                <svg class="h-4 w-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                Intelligent task automation
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="h-4 w-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                Natural language processing
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="h-4 w-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                Smart data analysis
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="h-4 w-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                24/7 availability
              </div>
            </div>
            
            <div class="flex justify-center">
              <button class="btn-coming-soon relative" disabled>
                <span class="mr-2">⏰</span>
                Coming Q2 2025
                <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur animate-pulse"></div>
              </button>
            </div>
          </div>

          <!-- Protrixx Learn -->
          <div class="tool-card glass-card-dark rounded-2xl p-8 backdrop-blur-sm border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6 mx-auto shadow-lg">
              <span class="text-white text-4xl">🎓</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 text-center">ProtrixxLearn</h2>
            <p class="text-gray-600 mb-6 text-center">
              Interactive learning platform with courses, tutorials, and resources to master new technologies and advance your digital skills.
            </p>
            
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-sm text-gray-500">
                <svg class="h-4 w-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                Interactive video courses
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="h-4 w-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                Hands-on coding practice
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="h-4 w-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                Certification programs
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="h-4 w-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                Community support
              </div>
            </div>
            
            <div class="flex justify-center">
              <button class="btn-coming-soon relative" disabled>
                <span class="mr-2">⏰</span>
                Coming Q3 2025
                <div class="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur animate-pulse"></div>
              </button>
            </div>
          </div>
        </div>

        <!-- More Tools Coming -->
        <div class="text-center mt-16">
          <div class="glass-card rounded-3xl p-12 text-gray-900 border border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
            <span class="text-6xl text-purple-600 mb-6 block">🛠️</span>
            <h3 class="text-3xl font-bold mb-4">More Innovative Tools in Development</h3>
            <p class="text-xl mb-8 text-gray-600">Stay tuned for exciting new productivity tools and digital solutions</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn-primary">
                <span class="mr-2">🔔</span>
                Get Notified
              </NuxtLink>
              <button class="btn-secondary">
                <span class="mr-2">💡</span>
                Suggest a Tool
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>