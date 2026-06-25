<script setup>
// Remove the dashboard layout for a clean, focused signup page experience
definePageMeta({
  layout: false
})

const currentStep = ref(1)
const steps = ['1. Account', '2. Location', '3. Hardware', '4. Finish']

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  streetAddress: '',
  city: '',
  state: '',
  country: '',
  zipcode: '',
  binId: '',
  binType: 'General'
})

const nextStep = () => { if (currentStep.value < 4) currentStep.value++ }
const prevStep = () => { if (currentStep.value > 1) currentStep.value-- }
</script>

<template>
  <div class="min-h-screen bg-slate-100 font-sans flex items-center justify-center p-4 sm:p-6">
    <div class="w-full max-w-3xl bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
      
      <div class="px-8 pt-8 pb-4 text-center sm:text-left border-b border-slate-100 flex items-center justify-center sm:justify-start gap-2">
        <span class="text-xl">♻️</span>
        <span class="font-bold text-lg text-slate-800 tracking-tight">EcoWaste Portal</span>
      </div>

      <div class="bg-slate-50 p-4 border-b border-slate-200 grid grid-cols-4 gap-2">
        <div 
          v-for="(step, index) in steps" :key="index"
          :class="[
            'py-2.5 px-2 text-center rounded-lg text-[11px] font-bold uppercase tracking-wider transition duration-200',
            currentStep === index + 1 ? 'bg-[#3f51b5] text-white shadow-md shadow-blue-600/10' : 'bg-slate-200/70 text-slate-500'
          ]"
        >
          {{ step }}
        </div>
      </div>

      <div class="p-6 sm:p-10 flex-1 min-h-[380px]">
        
        <div v-if="currentStep === 1" class="space-y-4">
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800">Account Creation</h3>
            <p class="text-xs text-slate-500">Please provide your personal contact info to setup your profiles.</p>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">First Name</label>
              <input v-model="formData.firstName" type="text" placeholder="John" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">Last Name</label>
              <input v-model="formData.lastName" type="text" placeholder="Doe" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">Email Address</label>
              <input v-model="formData.email" type="email" placeholder="john.doe@example.com" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">Phone Number</label>
              <input v-model="formData.phone" type="tel" placeholder="+1 (555) 000-0000" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
            </div>
          </div>

          <div class="max-w-md">
            <label class="block text-xs font-bold text-slate-600 mb-1">Password</label>
            <input v-model="formData.password" type="password" placeholder="••••••••" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
          </div>
        </div>

        <div v-if="currentStep === 2" class="space-y-4">
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800">Location Logistics</h3>
            <p class="text-xs text-slate-500">Provide your physical delivery location address coordinates.</p>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-600 mb-1">Street Address</label>
            <input v-model="formData.streetAddress" type="text" placeholder="123 Main St, Apt 4B" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">City</label>
              <input v-model="formData.city" type="text" placeholder="New York" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">State / Province</label>
              <input v-model="formData.state" type="text" placeholder="NY" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">Country</label>
              <input v-model="formData.country" type="text" placeholder="United States" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">Zipcode</label>
              <input v-model="formData.zipcode" type="text" placeholder="10001" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
            </div>
          </div>
        </div>

        <div v-if="currentStep === 3" class="space-y-4">
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800">Smart Bin Linkage</h3>
            <p class="text-xs text-slate-500">Bind your physical IoT logistics hardware serial identifier to your account.</p>
          </div>
          
          <div class="max-w-md">
            <label class="block text-xs font-bold text-slate-600 mb-1">Hardware Bin ID</label>
            <input v-model="formData.binId" type="text" placeholder="e.g. BIN-9941X" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
          </div>
        </div>

        <div v-if="currentStep === 4" class="text-center py-12 space-y-3">
          <div class="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-2xl mx-auto border border-green-200">
            ✓
          </div>
          <h3 class="text-2xl font-bold text-slate-800">Registration Complete!</h3>
          <p class="text-slate-500 text-sm max-w-sm mx-auto">Your hardware tracking profile and location parameters have been linked cleanly into the main management system layer.</p>
          <div class="pt-4">
            <NuxtLink to="/customer/dashboard" class="inline-flex bg-[#3f51b5] hover:bg-blue-700 text-white text-xs px-6 py-2.5 rounded-lg font-bold tracking-wide transition shadow-md">
              Connect Wallet
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="bg-slate-50 px-6 sm:px-10 py-4 border-t border-slate-200 flex justify-end gap-3">
        <button 
          @click="prevStep" 
          :disabled="currentStep === 1 || currentStep === 4" 
          class="px-5 py-2 rounded-lg text-xs font-bold bg-slate-200 text-slate-600 hover:bg-slate-300 disabled:opacity-40 disabled:pointer-events-none transition"
        >
          Previous
        </button>
        <button 
          @click="nextStep" 
          v-if="currentStep < 4" 
          class="px-5 py-2 rounded-lg text-xs font-bold bg-[#3f51b5] hover:bg-blue-700 text-white shadow-md shadow-blue-600/10 transition"
        >
          Next Step
        </button>
      </div>
       <div class="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-200 text-center text-xs text-slate-500">
        Already have an account? 
        <NuxtLink to="/customer/login" class="font-bold text-[#3f51b5] hover:underline whitespace-nowrap ml-1">
          Sign in here
        </NuxtLink>
      </div>
    </div>
  </div>
</template>