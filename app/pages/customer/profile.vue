<!-- app/pages/customer/profile.vue -->
<script setup>
definePageMeta({
  layout: 'customer'
})

const isEditing = ref(false)
const profileData = ref({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'john.doe@gmail.com',
  phone: '+1 (555) 234-5678',
  streetAddress: '742 Evergreen Terrace, Coventry',
  city: 'Springfield',
  state: 'IL',
  country: 'United States',
  zipcode: '62704',
  binId: 'BIN-9941X'
})

const saveProfile = () => {
  isEditing.value = false
  // Add backend code or API integration calls here
  console.log('Profile updated successfully:', profileData.value)
}
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-6">
    <div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <!-- Profile Action Banner Header -->
      <div class="px-6 py-5 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-bold text-slate-800">Account Profile</h2>
          <p class="text-xs text-slate-500">Manage your personal settings, logistics data, and communication endpoints.</p>
        </div>
        <button 
          @click="isEditing ? saveProfile() : isEditing = true"
          :class="[
            'px-5 py-2 rounded-lg text-xs font-bold transition shadow-sm tracking-wide uppercase',
            isEditing ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-[#3f51b5] hover:bg-blue-700 text-white'
          ]"
        >
          {{ isEditing ? 'Save Changes' : 'Edit Profile' }}
        </button>
      </div>

      <!-- Profile Settings Form Body -->
      <div class="p-6 sm:p-8 space-y-6">
        <!-- Section: Identity -->
        <div class="space-y-4">
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-1">Personal Credentials</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">First Name</label>
              <input v-model="profileData.firstName" :disabled="!isEditing" type="text" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm disabled:bg-slate-50 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">Last Name</label>
              <input v-model="profileData.lastName" :disabled="!isEditing" type="text" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm disabled:bg-slate-50 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">Email Address</label>
              <input v-model="profileData.email" :disabled="!isEditing" type="email" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm disabled:bg-slate-50 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">Phone Number</label>
              <input v-model="profileData.phone" :disabled="!isEditing" type="tel" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm disabled:bg-slate-50 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
            </div>
          </div>
        </div>

        <!-- Section: Address Layout Coordinates -->
        <div class="space-y-4">
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-1">Deployment Location Layout</h3>
          <div>
            <label class="block text-xs font-bold text-slate-600 mb-1">Street Address</label>
            <input v-model="profileData.streetAddress" :disabled="!isEditing" type="text" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm disabled:bg-slate-50 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div class="col-span-2 sm:col-span-1">
              <label class="block text-xs font-bold text-slate-600 mb-1">City</label>
              <input v-model="profileData.city" :disabled="!isEditing" type="text" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm disabled:bg-slate-50 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">State</label>
              <input v-model="profileData.state" :disabled="!isEditing" type="text" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm disabled:bg-slate-50 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">Zipcode</label>
              <input v-model="profileData.zipcode" :disabled="!isEditing" type="text" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm disabled:bg-slate-50 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label class="block text-xs font-bold text-slate-600 mb-1">Country</label>
              <input v-model="profileData.country" :disabled="!isEditing" type="text" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm disabled:bg-slate-50 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
            </div>
          </div>
        </div>

        <!-- Section: Associated Hardware Information -->
        <div class="space-y-4">
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-1">Hardware Tracking Nodes</h3>
          <div class="max-w-xs">
            <label class="block text-xs font-bold text-slate-500 mb-1">Linked Smart Bin Serial ID</label>
            <div class="bg-slate-100 border border-slate-200 text-slate-700 rounded-lg px-3 py-2 text-sm font-mono font-semibold select-all">
              {{ profileData.binId }}
            </div>
            <p class="text-[10px] text-slate-400 mt-1">Hardware IDs cannot be altered after registration deployment cycle.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>