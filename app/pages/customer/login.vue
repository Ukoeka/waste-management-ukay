<!-- app/pages/login.vue -->
<script setup>
// Keep this page standalone, outside of the dashboard sidebar layout
definePageMeta({
  layout: false
})

const loginData = ref({
  email: '',
  password: '',
  rememberMe: false
})

const handleLogin = () => {
  // Add authentication or routing logic here
  console.log('Logging in with:', loginData.value)
  navigateTo('/admin/dashboard')
}
</script>

<template>
  <div class="min-h-screen bg-slate-100 font-sans flex items-center justify-center p-4 sm:p-6">
    <div class="w-full max-w-md bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
      
      <!-- Brand Minimal Header -->
      <div class="px-8 pt-8 pb-6 text-center border-b border-slate-100 flex flex-col items-center gap-1.5">
        <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl border border-blue-100 mb-1">
          ♻️
        </div>
        <span class="font-bold text-xl text-slate-800 tracking-tight">Welcome Back</span>
        <p class="text-xs text-slate-500">Sign in to manage your smart waste infrastructure</p>
      </div>

      <!-- Login Form Viewport -->
      <form @submit.prevent="handleLogin" class="p-6 sm:p-8 space-y-4">
        
        <!-- Email Input Field -->
        <div>
          <label class="block text-xs font-bold text-slate-600 mb-1">Email Address</label>
          <input 
            v-model="loginData.email" 
            type="email" 
            required
            placeholder="name@example.com" 
            class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" 
          />
        </div>

        <!-- Password Input Field -->
        <div>
          <div class="flex justify-between items-center mb-1">
            <label class="block text-xs font-bold text-slate-600">Password</label>
            <a href="#" class="text-[11px] font-semibold text-[#3f51b5] hover:underline">Forgot password?</a>
          </div>
          <input 
            v-model="loginData.password" 
            type="password" 
            required
            placeholder="••••••••" 
            class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" 
          />
        </div>

        <!-- Remember Me Checkbox Options -->
        <div class="flex items-center justify-between pt-1">
          <label class="flex items-center gap-2 cursor-pointer select-none">
            <input 
              v-model="loginData.rememberMe" 
              type="checkbox" 
              class="w-4 h-4 text-[#3f51b5] border-slate-300 rounded focus:ring-[#3f51b5]/20" 
            />
            <span class="text-xs text-slate-600 font-medium">Remember this device</span>
          </label>
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button 
            type="submit" 
            class="w-full bg-[#3f51b5] hover:bg-blue-700 text-white font-bold text-xs py-3 rounded-lg shadow-md shadow-blue-600/10 transition duration-200 uppercase tracking-wider"
          >
            Sign In
          </button>
        </div>

      </form>

      <!-- Footer Context Switcher Links -->
      <div class="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-200 text-center text-xs text-slate-500">
        Don't have an account or device registered? 
        <NuxtLink to="/customer/register-bin" class="font-bold text-[#3f51b5] hover:underline whitespace-nowrap ml-1">
          Register here
        </NuxtLink>
      </div>

    </div>
  </div>
</template>