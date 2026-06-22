<script setup>
definePageMeta({
  layout: false,
})

const features = [
  {
    icon: '♻️',
    title: 'Smart Bin Monitoring',
    description:
      'Monitor fill levels in real-time and receive instant notifications before bins overflow.',
  },
  {
    icon: '🚛',
    title: 'Optimized Collection Routes',
    description:
      'Reduce fuel costs and improve collection efficiency with intelligent route planning.',
  },
  {
    icon: '📊',
    title: 'Analytics & Reporting',
    description:
      'Gain valuable insights into waste generation patterns and operational performance.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white font-sans">

    <!-- Navbar -->
    <header
      class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800"
    >
      <div
        class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-xl"
          >
            ♻️
          </div>
          <span class="font-bold text-2xl">EcoWaste</span>
        </div>

        <nav class="hidden md:flex items-center gap-8">
          <a href="#" class="text-slate-300 hover:text-white">Home</a>
          <a href="#features" class="text-slate-300 hover:text-white"
            >Features</a
          >
          <a href="#how" class="text-slate-300 hover:text-white">How it Works</a>
          <a href="#contact" class="text-slate-300 hover:text-white">Contact</a>
        </nav>

        <NuxtLink
          to="/customer/register"
          class="bg-emerald-600 hover:bg-emerald-500 px-5 py-3 rounded-xl font-semibold transition"
        >
          Register Bin
        </NuxtLink>
      </div>
    </header>

    <!-- Hero -->
    <section class="relative overflow-hidden">

      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[150px]"
      ></div>

      <div
        class="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <span
            class="inline-flex px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold"
          >
            Smart Waste Management Platform
          </span>

          <h1
            class="text-5xl lg:text-6xl font-black leading-tight mt-8"
          >
            Smarter Waste Collection for
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500"
            >
              Cleaner Communities
            </span>
          </h1>

          <p
            class="mt-8 text-slate-300 text-lg leading-8 max-w-2xl"
          >
            Monitor smart bins, optimize collection routes, and keep cities
            cleaner with real-time waste management technology built for
            modern communities and smart cities.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mt-10">
            <NuxtLink
              to="/customer/register"
              class="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-2xl font-semibold text-center transition"
            >
              Register Smart Bin
            </NuxtLink>

            <NuxtLink
              to="/admin/dashboard"
              class="border border-slate-700 hover:border-slate-600 px-8 py-4 rounded-2xl font-semibold text-center transition"
            >
              Open Dashboard
            </NuxtLink>
          </div>
        </div>

        <!-- Hero Illustration -->
        <div class="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=80"
            alt="Waste Management"
            class="rounded-3xl shadow-2xl shadow-emerald-500/10 object-cover h-[500px] w-full"
          />
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-20 border-y border-slate-800 bg-slate-900/40">
      <div
        class="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-10"
      >
        <div class="text-center">
          <h3 class="text-5xl font-black text-emerald-400">5K+</h3>
          <p class="text-slate-400 mt-3">Smart Bins</p>
        </div>

        <div class="text-center">
          <h3 class="text-5xl font-black text-emerald-400">120+</h3>
          <p class="text-slate-400 mt-3">Communities</p>
        </div>

        <div class="text-center">
          <h3 class="text-5xl font-black text-emerald-400">98%</h3>
          <p class="text-slate-400 mt-3">Collection Efficiency</p>
        </div>

        <div class="text-center">
          <h3 class="text-5xl font-black text-emerald-400">24/7</h3>
          <p class="text-slate-400 mt-3">Monitoring</p>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="py-28">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-black">
            Everything You Need for Smart Waste Management
          </h2>

          <p class="text-slate-400 mt-5 text-lg">
            A modern platform that helps municipalities and communities
            efficiently manage waste collection and monitoring.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mt-20">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/40 transition"
          >
            <div
              class="w-16 h-16 rounded-2xl bg-emerald-600/10 flex items-center justify-center text-3xl mb-6"
            >
              {{ feature.icon }}
            </div>

            <h3 class="text-2xl font-bold mb-4">
              {{ feature.title }}
            </h3>

            <p class="text-slate-400 leading-8">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section
      id="how"
      class="py-28 bg-slate-900/50 border-y border-slate-800"
    >
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-black text-center">
          How It Works
        </h2>

        <p class="text-slate-400 text-center mt-5 max-w-2xl mx-auto">
          A simple process that makes waste collection smarter and more efficient.
        </p>

        <div class="grid md:grid-cols-3 gap-10 mt-20">

          <div class="text-center">
            <div
              class="w-20 h-20 rounded-full bg-emerald-600 flex items-center justify-center text-3xl mx-auto"
            >
              1
            </div>

            <h3 class="text-2xl font-bold mt-8">
              Register Bins
            </h3>

            <p class="text-slate-400 mt-4">
              Add smart waste bins to the platform and assign locations.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 rounded-full bg-emerald-600 flex items-center justify-center text-3xl mx-auto"
            >
              2
            </div>

            <h3 class="text-2xl font-bold mt-8">
              Monitor Levels
            </h3>

            <p class="text-slate-400 mt-4">
              Receive live data and notifications as bins approach capacity.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 rounded-full bg-emerald-600 flex items-center justify-center text-3xl mx-auto"
            >
              3
            </div>

            <h3 class="text-2xl font-bold mt-8">
              Collect Efficiently
            </h3>

            <p class="text-slate-400 mt-4">
              Dispatch collection teams using optimized routes and schedules.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-28">
      <div
        class="max-w-5xl mx-auto px-8 py-20 rounded-[40px] bg-gradient-to-r from-emerald-600 to-green-600 text-center"
      >
        <h2 class="text-5xl font-black">
          Building Cleaner Cities Through Smart Technology
        </h2>

        <p class="mt-8 text-lg text-emerald-100 max-w-2xl mx-auto">
          Join the next generation of intelligent waste management and transform
          how communities monitor and manage waste collection.
        </p>

        <NuxtLink
          to="/customer/register-bin"
          class="inline-block mt-10 bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold"
        >
          Get Started Today
        </NuxtLink>
      </div>
    </section>

    <!-- Footer -->
    <footer
      id="contact"
      class="border-t border-slate-800 py-12"
    >
      <div
        class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-10"
      >
        <div>
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center"
            >
              ♻️
            </div>

            <span class="font-bold text-2xl">
              EcoWaste
            </span>
          </div>

          <p class="text-slate-500 mt-4 max-w-md">
            A smart waste management platform helping communities and cities
            become cleaner, greener, and more sustainable.
          </p>
        </div>

        <div class="flex gap-8 text-slate-400">
          <a href="#" class="hover:text-white">About</a>
          <a href="#" class="hover:text-white">Privacy</a>
          <a href="#" class="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>

  </div>
</template>