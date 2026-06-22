<script setup>
definePageMeta({
  layout: 'default'
})
const currentStep = ref(1)
const steps = ['1. Account', '2. Address', '3. Bin Details', '4. Finish']

const formData = ref({
  email: '', password: '', address: '', city: '', binId: '', binType: 'General'
})

const nextStep = () => { if (currentStep.value < 4) currentStep.value++ }
const prevStep = () => { if (currentStep.value > 1) currentStep.value-- }
</script>

<template>
  <div class="max-w-5xl mx-auto bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
    <div class="bg-slate-50 p-4 border-b border-slate-200 grid grid-cols-4 gap-2">
      <div 
        v-for="(step, index) in steps" :key="index"
        :class="[
          'py-3 px-4 text-center rounded text-xs font-semibold uppercase tracking-wider transition',
          currentStep === index + 1 ? 'bg-[#3f51b5] text-white' : 'bg-slate-200 text-slate-500'
        ]"
      >
        {{ step }}
      </div>
    </div>

    <div class="p-8 min-h-[300px]">
      <div v-if="currentStep === 1" class="space-y-4 max-w-xl">
        <h3 class="text-xl font-bold mb-4">Account Creation</h3>
        <div>
          <label class="block text-xs font-bold text-slate-600 mb-1">Email Address</label>
          <input v-model="formData.email" type="email" placeholder="enter email" class="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-blue-500" />
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-600 mb-1">Password</label>
          <input v-model="formData.password" type="password" placeholder="password" class="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-blue-500" />
        </div>
      </div>

      <div v-if="currentStep === 2" class="space-y-4 max-w-xl">
        <h3 class="text-xl font-bold mb-4">Location Logistics</h3>
        <div>
          <label class="block text-xs font-bold text-slate-600 mb-1">House Address</label>
          <input v-model="formData.address" type="text" placeholder="123 Main St" class="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-blue-500" />
        </div>
      </div>

      <div v-if="currentStep === 3" class="space-y-4 max-w-xl">
        <h3 class="text-xl font-bold mb-4">Smart Bin Linkage</h3>
        <div>
          <label class="block text-xs font-bold text-slate-600 mb-1">Hardware Bin ID</label>
          <input v-model="formData.binId" type="text" placeholder="e.g. BIN-9941X" class="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-blue-500" />
        </div>
      </div>

      <div v-if="currentStep === 4" class="text-center py-8">
        <h3 class="text-2xl font-bold text-slate-800 mb-2">Registration Complete!</h3>
        <p class="text-slate-500 text-sm">Your bin hardware tracking system is now tied securely to your home address layout.</p>
      </div>
    </div>

    <div class="bg-slate-50 px-8 py-4 border-t border-slate-200 flex justify-end gap-3">
      <button @click="prevStep" :disabled="currentStep === 1" class="px-5 py-2 rounded text-sm font-semibold bg-slate-300 hover:bg-slate-400 disabled:opacity-50 transition">
        Previous
      </button>
      <button @click="nextStep" v-if="currentStep < 4" class="px-5 py-2 rounded text-sm font-semibold bg-[#3f51b5] hover:bg-blue-700 text-white transition">
        Next
      </button>
    </div>
  </div>
</template>