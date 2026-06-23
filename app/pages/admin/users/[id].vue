<!-- app/pages/admin/users/[id].vue -->
<script setup>
definePageMeta({
  layout: 'admin'
})

const route = useRoute()
const userId = route.params.id

// Mock database query tracking targeted customer object metadata profiles
const selectedUser = ref({
  id: userId,
  firstName: 'Marcus',
  lastName: 'Vance',
  email: 'marcus.v@example.com',
  phone: '+1 (555) 019-2834',
  streetAddress: '44 Park Ave',
  city: 'Springfield',
  state: 'IL',
  zipcode: '62701',
  country: 'United States',
  enrolledDate: '2025-04-12',
  hardwareNodes: [
    { binId: 'BIN-9941X', type: 'General Recycling', level: '78%', health: 'Optimal' },
    { binId: 'BIN-1042Z', type: 'Organic Waste', level: '12%', health: 'Optimal' }
  ]
})
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-6">
    <!-- Top Context Back Header Action Control -->
    <div class="flex items-center justify-between border-b border-slate-200 pb-4">
      <div class="space-y-0.5">
        <NuxtLink to="/admin/users" class="text-xs text-[#3f51b5] hover:underline font-semibold flex items-center gap-1">← Back to Users Directory</NuxtLink>
        <h2 class="text-xl font-bold text-slate-800">Profile Data Workspace — {{ selectedUser.id }}</h2>
      </div>
      <span class="text-xs bg-slate-200 text-slate-700 px-3 py-1 rounded font-mono font-bold">{{ selectedUser.enrolledDate }}</span>
    </div>

    <!-- Customer Metrics Profile Grid Structure -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Card left: Personal Details Readout Pane -->
      <div class="bg-white p-6 rounded border border-slate-200 shadow-sm space-y-4">
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-1">Resident Details</h3>
        <div class="space-y-3 text-xs">
          <div><label class="block text-slate-400 mb-0.5">Full Legal Name</label><p class="text-slate-800 font-bold text-sm">{{ selectedUser.firstName }} {{ selectedUser.lastName }}</p></div>
          <div><label class="block text-slate-400 mb-0.5">Primary Contact Email</label><p class="text-slate-700 font-medium">{{ selectedUser.email }}</p></div>
          <div><label class="block text-slate-400 mb-0.5">Mobile Terminal Endpoint</label><p class="text-slate-700 font-medium">{{ selectedUser.phone }}</p></div>
          <div>
            <label class="block text-slate-400 mb-0.5">Physical Site Deployment Layout</label>
            <p class="text-slate-600 leading-relaxed">{{ selectedUser.streetAddress }}<br />{{ selectedUser.city }}, {{ selectedUser.state }} {{ selectedUser.zipcode }}</p>
          </div>
        </div>
      </div>

      <!-- Card Right: Tied Hardware Asset Configurations Monitoring -->
      <div class="md:col-span-2 bg-white p-6 rounded border border-slate-200 shadow-sm space-y-4">
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-1">Linked Smart Infrastructure Assets</h3>
        
        <div class="space-y-4">
          <div v-for="bin in selectedUser.hardwareNodes" :key="bin.binId" class="border border-slate-200 rounded p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
            <div class="space-y-1">
              <span class="font-mono text-xs font-bold text-slate-800 block">{{ bin.binId }}</span>
              <span class="text-xs text-slate-500 font-medium block">Category Matrix Type: {{ bin.type }}</span>
            </div>
            
            <div class="flex items-center gap-6 text-xs text-right">
              <div>
                <span class="block text-slate-400 mb-0.5">Fill Level Capacity</span>
                <span class="font-black text-slate-800 text-sm">{{ bin.level }}</span>
              </div>
              <div>
                <span class="block text-slate-400 mb-0.5">Sensor Signal Diagnostics</span>
                <span class="font-bold text-green-600">● {{ bin.health }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>